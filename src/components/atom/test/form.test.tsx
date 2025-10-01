import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  useFormField,
} from '../form'
import { Input } from '../Input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../button'

const TestForm = () => {
  const form = useForm({
    defaultValues: {
      testField: '',
    },
  })

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="testField"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Test Label</FormLabel>
              <FormControl>
                <Input placeholder="Test Input" {...field} />
              </FormControl>
              <FormDescription>This is a test description.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

const formSchema = z.object({
  testField: z.string().min(2, {
    message: 'Test error message.',
  }),
})

const TestFormWithError = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      testField: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="testField"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Test Label</FormLabel>
              <FormControl>
                <Input placeholder="Test Input" {...field} />
              </FormControl>
              <FormDescription>This is a test description.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

const ComponentThatUsesHookOutsideContext = () => {
  const { error, formItemId } = useFormField()
  return <FormLabel className={error && 'text-destructive'}>Label</FormLabel>
}

describe('Form Components', () => {
  it('renders the form with all its parts', () => {
    render(<TestForm />)

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Test Input')).toBeInTheDocument()
    expect(screen.getByText('This is a test description.')).toBeInTheDocument()
  })

  it('shows an error message when the field is invalid', async () => {
    render(<TestFormWithError />)

    const submitButton = screen.getByRole('button', { name: /submit/i })
    fireEvent.click(submitButton)

    const errorMessage = await screen.findByText('Test error message.')
    expect(errorMessage).toBeInTheDocument()

    const input = screen.getByPlaceholderText('Test Input')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('throws an error when useFormField is used outside of a FormField', () => {
    const originalError = console.error
    console.error = jest.fn()

    expect(() => {
      render(<ComponentThatUsesHookOutsideContext />)
    }).toThrow('useFormField should be used within <FormField>')

    console.error = originalError
  })

  it('renders FormMessage with children', () => {
    const TestComponent = () => {
      const form = useForm()
      return (
        <Form {...form}>
          <FormField
            control={form.control}
            name="testField"
            render={() => (
              <FormItem>
                <FormMessage>
                  <span>Child element</span>
                </FormMessage>
              </FormItem>
            )}
          />
        </Form>
      )
    }
    render(<TestComponent />)

    expect(screen.getByText('Child element')).toBeInTheDocument()
  })
})