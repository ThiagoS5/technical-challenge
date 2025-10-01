import * as React from 'react'
import { render, screen } from '@testing-library/react'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from '../card'

describe('Card Components', () => {
  test('renders Card', () => {
    render(
      <Card>
        <div>Child Content</div>
      </Card>,
    )
    expect(screen.getByText('Child Content')).toBeInTheDocument()
  })

  test('renders CardHeader', () => {
    render(
      <CardHeader>
        <div>Header Content</div>
      </CardHeader>,
    )
    expect(screen.getByText('Header Content')).toBeInTheDocument()
  })

  test('renders CardTitle', () => {
    render(
      <CardTitle>
        <div>Title Content</div>
      </CardTitle>,
    )
    expect(screen.getByText('Title Content')).toBeInTheDocument()
  })

  test('renders CardDescription', () => {
    render(
      <CardDescription>
        <div>Description Content</div>
      </CardDescription>,
    )
    expect(screen.getByText('Description Content')).toBeInTheDocument()
  })

  test('renders CardAction', () => {
    render(
      <CardAction>
        <div>Action Content</div>
      </CardAction>,
    )
    expect(screen.getByText('Action Content')).toBeInTheDocument()
  })

  test('renders CardContent', () => {
    render(
      <CardContent>
        <div>Content</div>
      </CardContent>,
    )
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  test('renders CardFooter', () => {
    render(
      <CardFooter>
        <div>Footer Content</div>
      </CardFooter>,
    )
    expect(screen.getByText('Footer Content')).toBeInTheDocument()
  })

  test('applies custom className to Card', () => {
    const { container } = render(<Card className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
