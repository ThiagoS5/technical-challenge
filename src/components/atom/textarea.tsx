import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          //* !Mobile! */
          'min-h-32 w-64 px-3 py-2 md:w-96',
          // ?--- APARÊNCIA BASE ---
          'rounded border-2 border-black bg-background text-sm text-black',
          'placeholder:text-muted-foreground',
          'transition-all',
          // !--- ESTADOS ---
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:border-ring/30',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
