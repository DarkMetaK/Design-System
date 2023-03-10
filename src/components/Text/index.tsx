import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'

import { IText } from "./types";

export function Text({ size = 'md', children, asChild, className }: IText) {

  const Tag = asChild ? Slot : 'span'

  return (
    <Tag
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className
        )}>
        {children}
    </Tag>
  )
}
