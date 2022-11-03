import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Check} from 'phosphor-react'

export interface CheckboxProps{}

export function Checkbox( {} : CheckboxProps){
    return(
        <CheckboxPrimitive.Root
        className='p-[2px] h-6 w-6 bg-gray-800 rounded'
        >
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 bg-cyan-500'/>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

    )
}