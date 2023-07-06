import SummaryItem from './SummaryItem';

export default function App() {
  return (
    <div className='md:min-h-screen grid items-center md:py-[24px]'>
      <div className='font-ft-base w-[min(736px,100%)] md:h-[512px] md:rounded-[28px] bg-white md:shadow-[10px_10px_35px_0px_#E8EEFC]  grid md:grid-cols-2 md:grid-rows-none grid-rows-[356px,1fr] overflow-hidden mx-auto'>
        <div style={{ backgroundImage: 'linear-gradient(180deg, #7857FF 0%, #2E2BE9 100%)' }}>
          <h2 className='text-indigo-200 text-[1.159125rem] md:text-[1.59071rem] font-bold text-center mt-[24px] md:mt-[37px] leading-[1.25729]'>
            Your Result
          </h2>
          <div
            className='md:w-[200px] md:h-[200px] w-[141px] h-[141px] rounded-full mt-[23.68px] md:mt-[35px] mx-auto pt-[24px] md:pt-[43px] flex flex-col items-center'
            style={{
              backgroundImage: 'linear-gradient(180deg, #4E21CA 0%, rgba(35.66, 32.84, 201.76, 0) 100%)'
            }}
          >
            <p className='text-indigo-50 text-[3.539375rem] md:text-[4.663rem] font-extrabold leading-[1.2063] tracking-[-1.133px] md:tracking-[-1.492px]'>
              76
            </p>
            <p className='text-indigo-400 text-[1.06875rem] md:text-[1.1875rem] font-medium leading-[1.0526] md:tracking-[-0.38px] tracking-[-0.342px]'>
              of 100
            </p>
          </div>
          <div className='md:max-w-[246px] max-w-[256px] text-center mx-auto mt-[27px]'>
            <h3 className='text-purple-50 text-[1.5279375rem] md:text-[2.009375rem] font-medium leading-[1.368] tracking-[-0.244px] md:tracking-[-0.643px]'>
              Great
            </h3>
            <p className='text-center text-[hsl(240,_100%,_87%)] text-[1.032875rem] md:text-[1.17125rem] md:leading-[1.2273] leading-[1.2586] tracking-[-0.231px] md:tracking-[-0.375px] font-medium break-words mt-[12px]'>
              You scored higher than 65% of the people who have taken these tests.
            </p>
          </div>
        </div>
        <div className='grid md:p-[38px] py-[24px] px-[30px]'>
          <h2 className='text-gray-700 text-[1.134125rem] md:text-[1.520625rem] font-bold md:leading-[1.315] leading-[1.1407] tracking-[-0.181px] md:tracking-normal'>
            Summary
          </h2>
          <div className='grid gap-[17.35px] md:gap-[19.68px] mb-[25.3px] md:mb-[40.59px] mt-[27.3px] md:mt-[34px]'>
            <SummaryItem type='reaction' score={80} />
            <SummaryItem type='memory' score={92} />
            <SummaryItem type='verbal' score={61} />
            <SummaryItem type='visual' score={72} />
          </div>
          <button className='bg-slate-700 md:w-72 w-full h-14 flex justify-center items-center rounded-[28px] mb-[4px] md:mb-0 hover:bg-[hsl(248,_90%,_59%)] transition'>
            <span className='text-white text-[1.15625rem] md:text-[1.18775rem] font-medium tracking-[0.185px] md:tracking-[-0.38px] leading-[1.351] md:leading-[1.26289] hover:text-[hsl(278,_100%,_98%)]'>
              Continue
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
