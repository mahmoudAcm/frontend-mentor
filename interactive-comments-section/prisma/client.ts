import { PrismaClient } from '@prisma/client';
import * as yup from 'yup';

const prisma = new PrismaClient();

export const signInSchema = yup.object({
  email: yup.string().email('is not a valid email').required("Email can't be blank"),
  password: yup.string().required("Password can't be blank")
});

export const userSchema = yup.object({
  email: yup.string().email('is not a valid email').required("Email can't be blank"),
  password: yup.string().required("Password can't be blank"),
  image: yup.string().required("Image can't be null")
});

export const commentSchema = yup
  .object({
    content: yup.string().required()
  })
  .shape({});

export const replySchema = yup.object({
  content: yup.string().required(),
  parentCommentId: yup.string(),
  parentReplyId: yup.string()
});

export default prisma;
