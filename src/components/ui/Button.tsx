import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import * as React from 'react'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer',
        primary:
          'border-2 border-black bg-transparent text-black hover:bg-black hover:text-white',
        filter: 'bg-black text-white',
        about:
          'border-2 border-white bg-transparent text-white hover:bg-white hover:text-black',
        send: 'bg-send text-white',
        link: 'text-primary underline-offset-4 hover:underline',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-9 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'h-11 rounded-md px-8 has-[>svg]:px-4',
        icon: 'size-9',
      },
      state: {
        default: '',
        active: '',
      },
      status: {
        default: 'cursor-pointer',
        sending: 'bg-send text-white cursor-progress hover:bg-send',
        sent: 'bg-send-success text-white cursor-not-allowed hover:bg-send-success',
      },
    },
    compoundVariants: [
      {
        variant: 'filter',
        state: 'active',
        className: 'border-2 border-black bg-white text-black',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  Icon?: React.ElementType
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      state,
      status,
      asChild = false,
      Icon,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    const isDisabled = status === 'sending' || status === 'sent'

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, state, status, className }),
        )}
        ref={ref}
        disabled={isDisabled || props.disabled}
        {...props}
      >
        {' '}
        {status === 'sending' && <Loader2 className="h-4 w-4 animate-spin" />}
        {Icon && status !== 'sending' && <Icon className="h-4 w-4" />}
        {children}{' '}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
