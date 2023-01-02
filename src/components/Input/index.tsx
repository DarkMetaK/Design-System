import { Slot } from "@radix-ui/react-slot";

import { IInputContent, IInputIcon, IInputRoot } from "./types";

function InputRoot({children}: IInputRoot) {
  return (
    <div className='flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>    
  )
}
InputRoot.displayName = 'TextInput.Root'

function InputIcon({children}: IInputIcon) {
  return(
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  )
}
InputIcon.displayName = 'TextInput.Icon'

function InputContent(props: IInputContent) {
  return(
    <input
      className='flex-1 text-gray-100 text-xs placeholder:text-gray-400 bg-transparent outline-none'
      {...props}
    />    
  )
}
InputContent.displayName = 'TextInput.Content'

export const Input = {
  InputRoot: InputRoot,
  InputContent: InputContent,
  InputIcon: InputIcon,
}
