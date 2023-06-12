import { ReactNode, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

interface DrawerProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export default function Drawer(props: DrawerProps) {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  useEffect(() => {
    if (props.open && !isMobile) {
      props.onClose();
    }

    if (props.open) {
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [props.open, isMobile]);

  return (
    <div
      className={[
        'lg:hidden fixed inset-0 w-full h-full transition-opacity',
        props.open ? 'opacity-1 z-50' : 'opacity-0 -z-10'
      ]
        .filter(Boolean)
        .join(' ')}
      role='presentation'
    >
      <div
        className={[
          'bg-default w-[240px] overflow-auto absolute top-0 bottom h-full px-[23px] py-[17px] right-0 z-50 transition-transform duration-500 delay-150',
          props.open ? 'translate-x' : 'translate-x-[440px]'
        ]
          .filter(Boolean)
          .join(' ')}
        tabIndex={-1}
      >
        <img
          src='./images/icon-close-menu.svg'
          alt='close menu'
          role='button'
          aria-label='close menu'
          tabIndex={0}
          className='ml-auto select-none'
          onClick={props.onClose}
        />
        {props.children}
      </div>
      <div
        className='fixed inset-0 w-full h-full bg-black/70'
        aria-hidden={true}
        onClick={props.onClose}
        tabIndex={-1}
      ></div>
    </div>
  );
}
