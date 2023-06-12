import { toast } from 'react-toastify';

export default function Home() {
  return (
    <div className='flex flex-col-reverse'>
      <div className='container mx-auto lg:max-w-[1188px] xl:px-[40px] md:px-[24px] px-[16px]'>
        <div className='flex lg:flex-row flex-col-reverse justify-between gap-[60px]'>
          <div className='lg:w-[525px] sm:mt-[149px] mt-[50px] lg:text-start text-center'>
            <h1 className='lg:text-[clamp(1rem,6.5vw,4.875rem)] sm:text-[clamp(1rem,8vw,4rem)] text-[clamp(1rem,10vw,2.1875rem)] leading-[1.03] font-[700] text-primary'>
              Make remote work
            </h1>
            <p className='text-secondary sm:text-[1.125rem] text-[1rem] leading-[1.58] md:leading-[1.5] lg:w-[450px] sm:mt-[50px] sm:mb-[53px] mb-[27px] mt-[19px]'>
              Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch
              productivity soar.
            </p>
            <button
              className='bg-primary text-white rounded-xl sm:px-[36px] sm:py-[16px] py-[12px] px-[22px] transition-colors select-none hover:bg-default hover:text-primary border hover:border-primary'
              onClick={() => {
                toast.info('This is just a demo maybe i will add the other pages some day');
              }}
            >
              Learn more
            </button>
            <div className='flex items-center md:gap-[38px] gap-[31px] sm:mt-[108px] mt-[46px] sm:justify-around justify-center sm:flex-wrap lg:justify-normal select-none'>
              <img src='./images/client-databiz.svg' alt='client databiz' className='w-[80px] sm:w-auto' />
              <img src='./images/client-audiophile.svg' alt='client audiophile' className='w-[50px] sm:w-auto' />
              <img src='./images/client-meet.svg' alt='client meet' className='w-[60px] sm:w-auto' />
              <img src='./images/client-maker.svg' alt='client maker' className='w-[60px] sm:w-auto' />
            </div>
          </div>
          <img
            src='./images/image-hero-desktop.png'
            alt='image hero desktop'
            className='max-w-[470px] mt-[45px] select-none xl:-mr-[35px] 2xl:mr-0 hidden lg:block'
          />
        </div>
      </div>
      <img
        src='./images/image-hero-mobile.png'
        alt='image hero mobile'
        className='sm:mt-[45px] mt-1 select-none lg:hidden'
      />
    </div>
  );
}
