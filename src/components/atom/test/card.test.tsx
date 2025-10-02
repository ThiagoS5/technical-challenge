import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../card'

describe('Card Components', () => {
  const components = [
    { name: 'Card', Component: Card },
    { name: 'CardHeader', Component: CardHeader },
    { name: 'CardFooter', Component: CardFooter },
    { name: 'CardTitle', Component: CardTitle },
    { name: 'CardAction', Component: CardAction },
    { name: 'CardDescription', Component: CardDescription },
    { name: 'CardContent', Component: CardContent },
  ]

  test.each(components)(
    'renders $name and applies custom className',
    ({ Component }) => {
      const { container } = render(
        <Component className="custom-class">
          <div>Child Content</div>
        </Component>,
      )
      expect(screen.getByText('Child Content')).toBeInTheDocument()
      expect(container.firstChild).toHaveClass('custom-class')
    },
  )
})
