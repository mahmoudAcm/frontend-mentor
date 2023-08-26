import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { twMerge } from 'tailwind-merge';
import * as Select from './Select';
import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType } from 'yup';
import profiles from './profiles.ts';

const schema = yup.object({
  type: yup.string().required('Must select notification type'),
  target: yup.string().when('type', ([type], schema) => {
    if (type === 'reaction' || type === 'reply' || type === 'comment') return schema.required('This field is required');
    return schema.optional();
  }),
  user: yup.string().required('This field is required'),
  content: yup.string().when(['type', 'target'], ([type, target], schema) => {
    if (type === 'follow' || target === 'picture') return schema.optional();
    return schema.required('This field is required');
  })
});

function AddNotificationDialog() {
  const [open, setOpen] = useState(false);
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: 'onSubmit'
  });

  const typeRegister = register('type');
  const targetRegister = register('target');
  const userRegister = register('user');

  const type = watch('type');
  const target = watch('target');

  const mapTypeToContentLabel = () => {
    if (type === 'join' || type === 'leave') return 'Group Name';
    if (type === 'private-message') return 'Message';
    return 'Content';
  };

  const resetForm = useCallback(() => {
    reset({ type: '', target: '', user: '', content: '' });
  }, [reset]);

  const onSubmit = (data: InferType<typeof schema>) => {
    console.log(data);
    setOpen(false);
    resetForm();
  };

  //resting target value if the type is not an interaction and the target value is a picture
  useEffect(() => {
    if (!(type === 'reaction' || type === 'comment' || type === 'reply') && target === 'picture') {
      setValue('target', '');
    }
  }, [setValue, target, type]);

  useEffect(
    function resetFields() {
      if (!open) resetForm();
    },
    [open, resetForm]
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          aria-label='Show Add notification dialog'
          className='fixed right-4 bottom-4 h-12 w-12 rounded-full font-semibold text-white shadow-lg bg-blue-custom hover:bg-blue-custom-dark focus:ring-blue-custom-light focus:outline-none focus:ring-2'
        >
          <svg
            className='mx-auto my-3 h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6'></path>
          </svg>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0' />
        <Dialog.Content className='overflow-auto data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog.Title className='m-0 font-medium text-gray12 text-[17px]'>Notification Dialog</Dialog.Title>
            <Dialog.Description className='mb-5 leading-normal text-gray11 mt-[5px] text-[15px]'>
              To add a notification, please fill the form below.
            </Dialog.Description>
            <fieldset className='grid gap-1 mb-[15px]'>
              <label className='text-gray10 w-[90px] text-[15px]'>Type</label>
              <Select.Root
                id='type'
                placeholder='Notification Type'
                ariaLabel='Select notification type'
                ref={typeRegister.ref}
                onValueChange={value => {
                  setValue('type', value);
                }}
                name={typeRegister.name}
                error={!!errors.type?.message}
              >
                <Select.Group>
                  <Select.SelectItem value='join' className=' h-auto py-1.5 min-h-[25px]'>
                    Join
                  </Select.SelectItem>
                  <Select.SelectItem value='leave' className='h-auto py-1.5 min-h-[25px]'>
                    Leave
                  </Select.SelectItem>
                  <Select.SelectItem value='private-message' className='h-auto py-1.5 min-h-[25px]'>
                    Private Message
                  </Select.SelectItem>
                </Select.Group>
                <Select.Separator className='h-[1px] bg-gray6 m-[5px]' />
                <Select.Group>
                  <Select.SelectItem value='reaction' className='h-auto py-1.5 min-h-[25px]'>
                    Reaction
                  </Select.SelectItem>
                  <Select.SelectItem value='comment' className='h-auto py-1.5 min-h-[25px]'>
                    Comment
                  </Select.SelectItem>
                  <Select.SelectItem value='reply' className='h-auto py-1.5 min-h-[25px]'>
                    Reply
                  </Select.SelectItem>
                </Select.Group>
                <Select.Separator className='h-[1px] bg-gray6 m-[5px]' />
                <Select.Group>
                  <Select.SelectItem value='follow' className='h-auto py-1.5 min-h-[25px]'>
                    Follow
                  </Select.SelectItem>
                </Select.Group>
              </Select.Root>
              {errors.type?.message ? <span className='text-xs text-red-400'>{errors.type?.message}</span> : <></>}
            </fieldset>
            {type === 'reaction' || type === 'reply' || type === 'comment' ? (
              <fieldset className='grid gap-1 mb-[15px]'>
                <label className='text-gray10 w-[90px] text-[15px]'>Target</label>
                <Select.Root
                  id='target'
                  placeholder='Notification Target'
                  ariaLabel='Select notification target'
                  ref={targetRegister.ref}
                  onValueChange={value => {
                    setValue('target', value);
                  }}
                  name={targetRegister.name}
                  error={!!errors.target?.message}
                >
                  <Select.Group>
                    <Select.SelectItem value='post' className=' h-auto py-1.5 min-h-[25px]'>
                      Post
                    </Select.SelectItem>
                    <Select.SelectItem value='comment' className='h-auto py-1.5 min-h-[25px]'>
                      Comment
                    </Select.SelectItem>
                    <Select.SelectItem value='picture' className='h-auto py-1.5 min-h-[25px]'>
                      Picture
                    </Select.SelectItem>
                  </Select.Group>
                </Select.Root>
                {errors.target?.message ? (
                  <span className='text-xs text-red-400'>{errors.target?.message}</span>
                ) : (
                  <></>
                )}
              </fieldset>
            ) : (
              <></>
            )}
            <fieldset className='grid gap-1 mb-[15px]'>
              <label className='text-gray10 w-[90px] text-[15px]'>User</label>
              <Select.Root
                id='user'
                placeholder='Select User'
                ariaLabel='Select a user'
                ref={userRegister.ref}
                onValueChange={value => {
                  setValue('user', value);
                }}
                name={userRegister.name}
                error={!!errors.user?.message}
              >
                <Select.Group>
                  {profiles.map((profile, index) => (
                    <Select.SelectItem key={index} value={profile.id} className='h-auto py-1.5 min-h-[25px]'>
                      <div className='flex items-center gap-2'>
                        <img src={profile.avatar} alt='avatar image' className='h-6 w-6' />
                        {profile.name}
                      </div>
                    </Select.SelectItem>
                  ))}
                </Select.Group>
              </Select.Root>
              {errors.user?.message ? <span className='text-xs text-red-400'>{errors.user?.message}</span> : <></>}
            </fieldset>
            {type === 'follow' || target === 'picture' ? (
              <></>
            ) : (
              <fieldset className='grid gap-1 mb-[15px]'>
                <label className='text-gray10 w-[90px] text-[15px]' htmlFor='content'>
                  {mapTypeToContentLabel()}
                </label>
                <textarea
                  rows={5}
                  className={twMerge(
                    'inline-flex w-full outline-none text-gray11 shadow-gray8 leading-[1.5] min-h-[35px] rounded-[4px] py-[12px] px-[15px] text-[15px] shadow-[0_0_0_1px]',
                    !errors.content?.message
                      ? ''
                      : 'shadow-red-300 focus:shadow-red-500 data-[placeholder]:text-red-500'
                  )}
                  id='content'
                  {...register('content')}
                />
                {errors.content?.message ? (
                  <span className='text-xs text-red-400'>{errors.content?.message}</span>
                ) : (
                  <></>
                )}
              </fieldset>
            )}
            <button
              className='inline-flex mt-2 w-full select-none appearance-none items-center justify-center text-white rounded-[5px] px-[30px] py-1.5 bg-gray10 hover:bg-gray8 focus:shadow-[0_0_0_2px] focus:outline-none'
              aria-label='Notify'
            >
              Add Notification
            </button>
            <Dialog.Close asChild>
              <button
                className='absolute inline-flex appearance-none items-center justify-center rounded-full text-gray11 top-[10px] right-[10px] h-[25px] w-[25px] hover:bg-gray4 focus:shadow-gray7 focus:shadow-[0_0_0_2px] focus:outline-none'
                aria-label='Close'
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default AddNotificationDialog;
