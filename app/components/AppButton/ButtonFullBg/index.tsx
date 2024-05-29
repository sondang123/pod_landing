import { Link } from '@remix-run/react'
import type { MouseEventHandler, ReactNode } from 'react'
import React from 'react'
import { cn } from '~/lib/utils'

interface Props {
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  to?: string
  target?: string
  disabled?: boolean
  isExternal?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  iconLeft?: ReactNode | undefined
  iconRight?: ReactNode | undefined
  children?: React.ReactNode | string
}

export const ButtonFullBg: React.FC<Props> = ({
  className = '',
  type = 'button',
  onClick,
  disabled,
  to,
  target,
  isExternal = false,
  iconLeft,
  iconRight,
  children,
  ...props
}) => {
  if (!to || disabled) {
    return (
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={cn(
          'flex-center typo-s14-w500 h-[36px] rounded-[30px] border bg-white px-3 text-neutral-800 transition ',
          'hover:opacity-80',
          className
        )}
        {...props}
      >
        {iconLeft ? iconLeft : null}
        {children}
        {iconRight ? iconRight : null}
      </button>
    )
  }
  if (to && isExternal) {
    return (
      <a href={to} className={className} target={target}>
        {children}
      </a>
    )
  }
  if (to.startsWith('http')) {
    return (
      <a href={to} target={target} className="btn">
        {children}
      </a>
    )
  }

  return (
    <Link
      reloadDocument
      to={disabled ? '' : to}
      target={target}
      className="btn"
    >
      {children}
    </Link>
  )
}
