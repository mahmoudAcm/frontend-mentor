import clsx from 'clsx';
import projectClasses from './project.module.css';
import { useState } from 'react';

interface ProjectProps {
  src: string;
  livePreviewLink: string;
  sourceCodeLink: string;
}

export default function Project(props: ProjectProps) {
  const [loading, setLoading] = useState(true);
  return (
    <div className='border w-full h-[400px] bg-white rounded-lg p-1 flex flex-col group/card'>
      <a
        href={props.livePreviewLink}
        target='_blank'
        rel='noreferrer noopener'
        className={clsx({
          'rounded-lg w-full aspect-square relative overflow-hidden flex-1': true,
          [projectClasses.image]: true
        })}
      >
        <img
          src={props.src}
          alt='project image'
          className='absolute z-0 inset-0 w-full h-full'
          style={{ objectFit: 'cover', objectPosition: 'top left' }}
          onLoad={() => {
            setLoading(false);
          }}
        />
        <div
          className={clsx({
            'absolute inset-0 backdrop-blur-xl z-50 backdrop-grayscale transition-opacity duration-300 delay-500': true,
            [projectClasses.fadeOverlay]: !loading
          })}
        ></div>
        <div className='absolute bottom-3 left-3 right-3 text-white z-50 text-md capitalize flex justify-between items-center'>
          <div>testing...</div>
          <div className='text-gray-300 text-sm'>Jan 2020</div>
        </div>
      </a>
      <a
        role='button'
        href={props.sourceCodeLink}
        target='_blank'
        rel='noreferrer noopener'
        aria-label='show source'
        className={clsx({
          'flex bg-gray-100 justify-center items-center gap-1 text-gray-500': true,
          'font-medium py-2 capitalize mt-1 rounded-lg text-sm cursor-pointer select-none': true,
          'group-hover/card:text-gray-700 group-hover/card:bg-gray-200/75 transition-all': true
        })}
      >
        view source
        <svg
          width='16px'
          height='16px'
          strokeWidth='1.5'
          viewBox='0 0 24 24'
          fill='none'
          color='currentColor'
          className='mt-1'
        >
          <path
            d='M6 12h12.5m0 0l-6-6m6 6l-6 6'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </svg>
      </a>
    </div>
  );
}
