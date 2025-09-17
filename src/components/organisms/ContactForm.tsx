'use client'

import { Button } from '@/components/atom/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/atom/form'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { isValidPhoneNumber } from 'libphonenumber-js'
import { useForm, type FieldErrors } from 'react-hook-form'
import { z } from 'zod'
import { FloatingLabelInput } from '../molecules/FloatingLabelInput'
import { FloatingLabelTextarea } from '../molecules/FloatingLabelTextArea'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome deve ter pelo menos 2 caracteres.',
  }),
  email: z.email({
    message: 'Por favor, insira um endereço de e-mail válido.',
  }),
  phone: z.string().refine((phone) => isValidPhoneNumber(phone, 'BR'), {
    message: 'Por favor, insira um número de telefone válido.',
  }),
  message: z.string().min(5, {
    message: 'A mensagem deve ter pelo menos 5 caracteres.',
  }),
})

type FormSchema = z.infer<typeof formSchema>

export function ContactForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    mode: 'onTouched',
  })

  const { errors, dirtyFields, isValidating } = form.formState

  function onValid(values: FormSchema) {
    console.log(values)
    alert('Formulário enviado com sucesso!')
  }

  function onInvalid(errors: FieldErrors<FormSchema>) {
    const firstError = Object.keys(errors)[0]
    const el = document.getElementById(firstError)
    el?.focus()
  }

  const isFieldValid = (fieldName: keyof FormSchema) => {
    return dirtyFields[fieldName] && !errors[fieldName] && !isValidating
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onValid, onInvalid)}
        className="space-y-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelInput
                  id="name"
                  label="Nome"
                  {...field}
                  className={cn({
                    'border-red-500 focus-visible:ring-red-500': errors.name,
                    'border-green-500 focus-visible:ring-green-500':
                      isFieldValid('name'),
                  })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelInput
                  id="email"
                  label="Email"
                  {...field}
                  className={cn({
                    'border-red-500 focus-visible:ring-red-500': errors.email,
                    'border-green-500 focus-visible:ring-green-500':
                      isFieldValid('email'),
                  })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelInput
                  id="phone"
                  label="Telefone"
                  {...field}
                  className={cn({
                    'border-red-500 focus-visible:ring-red-500': errors.phone,
                    'border-green-500 focus-visible:ring-green-500':
                      isFieldValid('phone'),
                  })}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelTextarea
                  id="message"
                  label="Mensagem"
                  className={cn({
                    'resize-none': true,
                    'border-red-500 focus-visible:ring-red-500': errors.message,
                  })}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enviar Mensagem</Button>
      </form>
    </Form>
  )
}
