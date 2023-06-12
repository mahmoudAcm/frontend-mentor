import Drawer from './Drawer';
import { useState } from 'react';
import FeaturesMenu from './FeaturesMenu';
import CompanyMenu from './CompanyMenu';
import { toast } from 'react-toastify';

export default function Header() {
  const [open, setOpen] = useState(false);

  const info = () => {
    toast.info('This is just a demo maybe i will add the other pages some day');
  };

  const list = (
    <ul className='flex lg:flex-row flex-col lg:gap-[38px] gap-[25px] mt-[35px] lg:mt-0 font-[500] text-secondary text-sm'>
      <FeaturesMenu />
      <CompanyMenu />
      <li className='cursor-pointer hover:text-primary transition-colors' tabIndex={0} onClick={info}>
        Careers
      </li>
      <li className='cursor-pointer hover:text-primary transition-colors' tabIndex={0} onClick={info}>
        About
      </li>
    </ul>
  );

  const actions = (
    <div className='flex flex-col lg:flex-row gap-x-7 gap-y-3 ml-auto text-secondary select-none mt-[24px] lg:mt-0'>
      <button
        className='px-[16px] py-[6px] text-sm hover:text-primary transition-colors lg:w-fit w-full'
        onClick={info}
      >
        Login
      </button>
      <button
        className='border-2 border-secondary rounded-xl px-[16px] py-[6px] hover:text-primary hover:border-primary transition-colors lg:w-fit w-full'
        onClick={info}
      >
        Register
      </button>
    </div>
  );

  return (
    <header>
      <div className='mx-auto 2xl:max-w-[1188px] xl:px-[40px] md:px-[24px] px-[16px]'>
        <div className='flex items-center md:h-[85px] h-[70px]'>
          <img src='./images/logo.svg' alt='logo' className='mr-[63px] mt-1 select-none' />
          <nav className='hidden flex-1 items-center lg:flex'>
            {list}
            {actions}
          </nav>
          <img
            src='./images/icon-menu.svg'
            alt='menu icon'
            className='ml-auto lg:hidden cursor-pointer select-none'
            role='button'
            aria-label='navigation menu'
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </div>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <nav>
          {list}
          {actions}
        </nav>
      </Drawer>
    </header>
  );
}
