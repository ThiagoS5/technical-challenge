import { Input, type InputProps } from '@/components/atom/Input'
import { Label } from '@/components/atom/label'
import { cn } from '@/lib/utils'
import * as React from 'react'

export interface FloatingLabelInputProps extends InputProps {
  label: string
  id: string
}

const FloatingLabelInput = React.forwardRef<
  React.ComponentRef<typeof Input>,
  FloatingLabelInputProps
>(({ className, label, id, ...props }, ref) => {
  return (
    <div className="relative">
      <Input
        ref={ref}
        id={id}
        placeholder=" "
        className={cn('peer h-10 pt-4', className)}
        {...props}
      />
      <Label
        htmlFor={id}
        className={cn(
          'absolute left-3 top-1/2 -translate-y-1/2 text-base text-muted-foreground transition-all duration-300 ease-in-out',
          'peer-focus:top-1 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-floating',
          'peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-floating',
        )}
      >
        {label}
      </Label>
    </div>
  )
})
FloatingLabelInput.displayName = 'FloatingLabelInput'

export { FloatingLabelInput }
