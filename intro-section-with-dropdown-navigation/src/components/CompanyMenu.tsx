import { useState } from 'react';
import Menu, { MenuItem } from './Menu';
import { useMediaQuery } from 'react-responsive';

export default function CompanyMenu() {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  const [companyOpen, setCompanyOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    if (!isMobile) setCompanyOpen(prev => !prev);
    else setOpen(prev => !prev);
  };

  const items = (
    <>
      <MenuItem>History</MenuItem>
      <MenuItem>Our Team</MenuItem>
      <MenuItem>Blog</MenuItem>
    </>
  );

  return (
    <li className='transition-colors select-none relative'>
      <span
        className='flex gap-[8px] items-center hover:text-primary cursor-pointer '
        tabIndex={0}
        role='button'
        aria-label='Company Menu'
        onClick={handleOpen}
        onKeyDown={event => {
          if (event.key === 'Enter') handleOpen();
        }}
      >
        Company{' '}
        {!companyOpen && !isOpen ? (
          <img src='./images/icon-arrow-down.svg' alt='arrow down' />
        ) : (
          <img src='./images/icon-arrow-up.svg' alt='arrow up' />
        )}
      </span>
      {isOpen ? <div className='pt-5 px-5 flex flex-col gap-4'>{items}</div> : <></>}
      <Menu
        open={companyOpen}
        onClose={() => {
          setCompanyOpen(false);
        }}
        className='left-0 w-[7.06rem] mt-3.5 hidden lg:flex'
      >
        {items}
      </Menu>
    </li>
  );
}
