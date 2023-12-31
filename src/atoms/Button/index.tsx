import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

const Button: React.FC<
  {
    children?: React.ReactNode;
    isLoading?: boolean;
    icon?: React.ReactNode;
    variant?: 'primary' | 'secondary';
  } & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, isLoading, variant = 'secondary', className, ...props }) => {
  return (
    <button
      type='button'
      className={classNames(
        `relative rounded-full px-20 py-4 text-xl font-semibold  shadow-sm`,
        className,
        props.disabled ? 'cursor-not-allowed opacity-60' : '',
        variant === 'primary' ? 'bg-purple text-white' : '',
        variant === 'secondary' ? 'bg-white text-black' : ''
      )}
      {...props}
      disabled={isLoading || props.disabled}
    >
      <div
        className={classNames('h-full w-full', isLoading ? 'invisible' : '')}
      >
        {props.icon ? (
          <div className='flex h-full w-full items-center space-x-6 text-left'>
            <div className='h-7 w-7'>{props.icon}</div>
            <div>{children}</div>
          </div>
        ) : (
          <>{children}</>
        )}
      </div>
      {isLoading ? (
        <svg
          className='absolute left-1/2 top-3 mx-auto h-8 w-8 animate-spin'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            stroke-width='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
      ) : null}
    </button>
  );
};

export default Button;
