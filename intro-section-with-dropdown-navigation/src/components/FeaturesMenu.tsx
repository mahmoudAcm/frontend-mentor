import { useState } from 'react';
import Menu, { MenuItem } from './Menu';
import { useMediaQuery } from 'react-responsive';

export default function FeaturesMenu() {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    if (!isMobile) setFeaturesOpen(prev => !prev);
    else setOpen(prev => !prev);
  };

  const items = (
    <>
      <MenuItem icon={<img src='./images/icon-todo.svg' alt='' aria-hidden={true} />}>Todo List</MenuItem>
      <MenuItem icon={<img src='./images/icon-calendar.svg' alt='' aria-hidden={true} />}>Calendar</MenuItem>
      <MenuItem icon={<img src='./images/icon-reminders.svg' alt='' aria-hidden={true} />}>Reminders</MenuItem>
      <MenuItem icon={<img src='./images/icon-planning.svg' alt='' aria-hidden={true} />}>Planing</MenuItem>
    </>
  );

  return (
    <li className='transition-colors select-none relative'>
      <span
        className='flex gap-[8px] items-center hover:text-primary cursor-pointer'
        tabIndex={0}
        role='button'
        aria-label='Features Menu'
        onClick={handleOpen}
        onKeyDown={event => {
          if (event.key === 'Enter') handleOpen();
        }}
      >
        Features{' '}
        {!featuresOpen && !isOpen ? (
          <img src='./images/icon-arrow-down.svg' alt='arrow down' />
        ) : (
          <img src='./images/icon-arrow-up.svg' alt='arrow up' />
        )}
      </span>
      {isOpen ? (
        <div className='pt-5 px-5 flex flex-col gap-4' role='menu'>
          {items}
        </div>
      ) : (
        <></>
      )}
      <Menu
        open={featuresOpen}
        onClose={() => {
          setFeaturesOpen(false);
        }}
        className='right-0 mt-3.5 hidden lg:flex'
      >
        {items}
      </Menu>
    </li>
  );
}
