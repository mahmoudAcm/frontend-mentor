import Notifications from './Notifications.tsx';

export default function App() {
  return (
    <div className='font-base md:max-w-[730px] mx-auto bg-white md:mt-[63px] md:mb-[89px] md:rounded-[15px]'>
      <div className='container mx-auto flex items-center justify-between px-[16px] pt-[24px] md:px-[30px] md:pt-[33px]'>
        <h1 className='text-[1.25rem] leading-[1.25] text-[hsl(224,21%,14%)] font-extrabold flex items-center'>
          Notifications
          <span className='inline-flex min-w-[32px] min-h-[25px] rounded-[6px] bg-[hsl(219,85%,26%)] text-white text-[1rem] leading-[calc(20/16)] p-[1px_11px_4px] ml-[9px]'>
            3
          </span>
        </h1>
        <h5 className='text-[0.875rem] leading-[calc(18/14)] text-[hsl(219,12%,42%)]'>Mark all as read</h5>
      </div>
      <Notifications />
    </div>
  );
}
