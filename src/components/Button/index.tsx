import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'

import { IButton } from "./types";

export function Button({children, asChild }: IButton) {

  const Tag = asChild ? Slot : 'button'

  return (
    <Tag
      className={clsx(
        'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        {
        }
        )}>
        {children}
    </Tag>
  )
}