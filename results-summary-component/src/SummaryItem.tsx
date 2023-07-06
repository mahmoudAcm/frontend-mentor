import ReactionIcon from './icons/Reaction';
import MemoryIcon from './icons/Memory';
import VerbalIcon from './icons/Verbal';
import VisualIcon from './icons/Visual';

const mapTypesToStyles = {
  reaction: { name: 'Reaction', text: '#FF5757', bg: '#FFF1F0', icon: <ReactionIcon /> },
  memory: { name: 'Memory', text: 'hsl(39, 100%, 56%)', bg: 'hsl(42, 100%, 97%)', icon: <MemoryIcon /> },
  verbal: { name: 'Verbal', text: 'hsl(166, 100%, 37%)', bg: 'hsl(180, 41%, 97%)', icon: <VerbalIcon /> },
  visual: { name: 'Visual', text: 'hsl(234, 85%, 45%)', bg: 'hsl(240, 71%, 97%)', icon: <VisualIcon /> }
};

interface SummaryItemProps {
  type: keyof typeof mapTypesToStyles;
  score: number;
}

export default function SummaryItem(props: SummaryItemProps) {
  if (!mapTypesToStyles[props.type]) {
    console.warn('This type is not found');
    return <></>;
  }

  return (
    <div
      className='md:w-[293px] min-h-[23.7px] py-[14px] px-[17px] rounded-[10px] flex justify-between'
      style={{
        background: mapTypesToStyles[props.type].bg
      }}
    >
      <div className='flex items-center md:gap-[12px] gap-[11px]'>
        {mapTypesToStyles[props.type].icon}
        <span
          className='ml-[3px] text-[1rem] md:text-[1.155375rem] font-medium leading-[1.50625] md:leading-[1.22736]  tracking-[0.048px] md:tracking-[-0.092px]'
          style={{
            color: mapTypesToStyles[props.type].text
          }}
        >
          {mapTypesToStyles[props.type].name}
        </span>
      </div>{' '}
      <span className='text-[1rem] md:text-[1.124375rem] md:leading-[1.227] leading-[1.5625] text-[hsl(0,_22%,_6%)] font-bold'>
        {props.score} <span className='text-[rgba(152,_149,_160,_1)]'>/ 100</span>
      </span>
    </div>
  );
}
