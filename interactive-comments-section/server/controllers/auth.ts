import prisma, { userSchema } from '../../prisma/client';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { Credentials } from '@/src/types';
import { setCookie } from 'cookies-next';
import jwt from 'jsonwebtoken';
import { MAX_AGE } from '@/src/constants';
import cloudinaryApi from 'cloudinary';
import { Prisma } from '.prisma/client';
import { ValidationError } from 'yup';
import logger from '@/src/pages/api/logger';
import { HTTPNotAuthorizedError } from '../libs/custom-errors';
import PrismaClientKnownRequestError = Prisma.PrismaClientKnownRequestError;

const cloudinary = cloudinaryApi.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const genSalt = async () => await bcrypt.genSalt(Number(process.env.SALT_OR_ROUNDS));

export async function signIn(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password } = req.body as Credentials;
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email: email
      }
    });

    if (await bcrypt.compare(password, user.password)) {
      const { password, ...rest } = user;
      const expiresIn = new Date(Date.now() + MAX_AGE * 1000);

      const token = jwt.sign({ id: user.id }, process.env.SECRET_OR_PRIVATE_KEY!, {
        expiresIn: '30d'
      });

      setCookie('next-token', token, {
        res,
        req,
        expires: expiresIn
      });

      return res.json(rest);
    }

    throw new HTTPNotAuthorizedError('Wrong Credentials');
  } catch (error: any) {
    logger.error(error);
    if (error instanceof HTTPNotAuthorizedError) return res.status(401).json(error.getError());
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2025') return res.status(404).json({ message: 'This email was not found' });
    }
    res.status(401).json({ message: error.message });
  }
}

export async function signUp(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;

  try {
    //validate the user
    await userSchema.validate(data);

    const { url: image } = await cloudinary.uploader.upload(data.image);

    const hashedPassword = await bcrypt.hash(data.password, await genSalt());
    const user = await prisma.user.create({
      data: {
        ...data,
        image,
        password: hashedPassword
      }
    });

    res.status(201).json(user);
  } catch (error: any) {
    logger.error(error);
    if (error instanceof PrismaClientKnownRequestError)
      return res.status(400).json({ message: 'This email is already in use' });

    if (error instanceof ValidationError)
      return res.status(400).json({ message: 'Please make sure you sent the correct data' });

    res.status(400).json({ message: error.message });
  }
}
