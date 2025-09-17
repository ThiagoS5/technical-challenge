import * as React from 'react'
import { Textarea, type TextareaProps } from '@/components/atom/textarea'
import { Label } from '@/components/atom/label'
import { cn } from '@/lib/utils'

export interface FloatingLabelTextareaProps extends TextareaProps {
  label: string
  id: string
}

const FloatingLabelTextarea = React.forwardRef<
  React.ComponentRef<typeof Textarea>,
  FloatingLabelTextareaProps
>(({ className, label, id, ...props }, ref) => {
  return (
    <div className="relative">
      <Textarea
        ref={ref}
        id={id}
        placeholder=" "
        className={cn('peer pt-5', className)}
        {...props}
      />
      <Label
        htmlFor={id}
        className={cn(
          // ?--- ESTADO PADRÃO ---
          'absolute left-3 top-5 -translate-y-1/2 text-base text-muted-foreground transition-all duration-300 ease-in-out',
          // !--- ESTADO FLUTUANTE ---
          'peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-primary',
          'peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:-translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary',
        )}
      >
        {label}
      </Label>
    </div>
  )
})
FloatingLabelTextarea.displayName = 'FloatingLabelTextarea'

export { FloatingLabelTextarea }
