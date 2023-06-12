import { ReactNode, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

export function MenuItem({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <li
      role='menuitem'
      className='text-secondary cursor-pointer text-sm font-[500] flex gap-1'
      tabIndex={0}
      onClick={() => {
        toast.info('Sorry nothing will work this is just a demo');
      }}
    >
      {icon && <span className='w-[24px]'>{icon}</span>}
      {children}
    </li>
  );
}

interface MenuProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
}

export default function Menu(props: MenuProps) {
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  useEffect(() => {
    if (props.open && isMobile) {
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
    <>
      <ul
        role='menu'
        className={[
          'rounded-lg py-5 px-6 bg-white flex flex-col gap-3 shadow-2xl select-none absolute transition-opacity',
          props.className,
          props.open ? 'opacity-1 z-20' : 'opacity-0 -z-10'
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={event => event.stopPropagation()}
        onKeyDown={() => {}}
      >
        {props.children}
      </ul>
      {props.open && (
        <div
          className='fixed inset-0 h-full w-full z-10'
          onClick={props.onClose}
          aria-hidden={true}
          tabIndex={-1}
        ></div>
      )}
    </>
  );
}
