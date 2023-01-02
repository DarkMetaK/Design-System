import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'

import { IHeading } from "./types";

export function Heading({ size = 'md', children, asChild, classname }: IHeading) {

  const Tag = asChild ? Slot : 'h2'

  return (
    <Tag
      className={clsx(
        'text-gray-100 font-sans font-bold',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        classname
        )}>
        {children}
    </Tag>
  )
}
