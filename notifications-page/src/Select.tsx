import { forwardRef, ReactNode, RefAttributes } from 'react';
import * as DefaultSelect from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { SelectItemProps, SelectProps } from '@radix-ui/react-select';

const Select = forwardRef<
  HTMLDivElement,
  {
    id: string;
    children: ReactNode;
    placeholder: string;
    ariaLabel: string;
    error?: boolean;
  } & RefAttributes<HTMLDivElement> &
    SelectProps
>(({ children, placeholder, ariaLabel, error, ...props }, forwardedRef) => {
  return (
    <DefaultSelect.Root {...props}>
      <DefaultSelect.Trigger
        className={twMerge(
          'w-full inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white shadow-gray8 text-gray11 shadow-[0_0_0_1px] hover:bg-gray3 data-[placeholder]:text-gray11 outline-none',
          error ? 'shadow-red-300 focus:shadow-red-500 data-[placeholder]:text-red-500' : ''
        )}
        aria-label={ariaLabel}
      >
        <DefaultSelect.Value placeholder={placeholder} ref={forwardedRef} />
        <DefaultSelect.Icon className='text-current ml-auto'>
          <ChevronDownIcon />
        </DefaultSelect.Icon>
      </DefaultSelect.Trigger>
      <DefaultSelect.Portal>
        <DefaultSelect.Content className='overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]'>
          <DefaultSelect.ScrollUpButton className='flex cursor-default items-center justify-center bg-white h-[25px] text-current'>
            <ChevronUpIcon />
          </DefaultSelect.ScrollUpButton>
          <DefaultSelect.Viewport className='p-[5px]'>{children}</DefaultSelect.Viewport>
          <DefaultSelect.ScrollDownButton className='flex cursor-default items-center justify-center bg-white h-[25px] text-current'>
            <ChevronDownIcon />
          </DefaultSelect.ScrollDownButton>
        </DefaultSelect.Content>
      </DefaultSelect.Portal>
    </DefaultSelect.Root>
  );
});

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps & RefAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <DefaultSelect.Item
        className={twMerge(
          'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-gray8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <DefaultSelect.ItemText>{children}</DefaultSelect.ItemText>
        <DefaultSelect.ItemIndicator className='absolute left-0 inline-flex items-center justify-center w-[25px]'>
          <CheckIcon />
        </DefaultSelect.ItemIndicator>
      </DefaultSelect.Item>
    );
  }
);

export const Root = Select;
export const Group = DefaultSelect.Group;
export const Label = DefaultSelect.Label;
export const Separator = DefaultSelect.Separator;
