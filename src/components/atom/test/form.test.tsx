import * as React from 'react'
import { render, screen } from '@testing-library/react'
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

describe('Form Components', () => {
  it('renders the form with all its parts', () => {
    render(<TestForm />)

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Test Input')).toBeInTheDocument()
    expect(screen.getByText('This is a test description.')).toBeInTheDocument()
  })
})
