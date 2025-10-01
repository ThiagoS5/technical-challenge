import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Badge, badgeVariants } from '../badge'
import { cva } from 'class-variance-authority'

describe('Badge component', () => {
  test('renders with default variant', () => {
    render(<Badge>Default Badge</Badge>)
    const badgeElement = screen.getByText('Default Badge')
    expect(badgeElement).toBeInTheDocument()
    expect(badgeElement).toHaveClass(
      'border-transparent',
      'bg-primary',
      'text-primary-foreground',
    )
  })

  test('renders with secondary variant', () => {
    render(<Badge variant="secondary">Secondary Badge</Badge>)
    const badgeElement = screen.getByText('Secondary Badge')
    expect(badgeElement).toBeInTheDocument()
    expect(badgeElement).toHaveClass(
      'border-transparent',
      'bg-secondary',
      'text-secondary-foreground',
    )
  })

  test('renders with destructive variant', () => {
    render(<Badge variant="destructive">Destructive Badge</Badge>)
    const badgeElement = screen.getByText('Destructive Badge')
    expect(badgeElement).toBeInTheDocument()
    expect(badgeElement).toHaveClass(
      'border-transparent',
      'bg-destructive',
      'text-white',
    )
  })

  test('renders with outline variant', () => {
    render(<Badge variant="outline">Outline Badge</Badge>)
    const badgeElement = screen.getByText('Outline Badge')
    expect(badgeElement).toBeInTheDocument()
    expect(badgeElement).toHaveClass('text-foreground')
  })

  test('renders as a child component when asChild is true', () => {
    render(
      <Badge asChild>
        <a href="#">Child Badge</a>
      </Badge>,
    )
    const badgeElement = screen.getByRole('link', { name: 'Child Badge' })
    expect(badgeElement).toBeInTheDocument()
    expect(badgeElement).toHaveClass(
      'border-transparent',
      'bg-primary',
      'text-primary-foreground',
    )
  })

  test('merges additional className', () => {
    render(<Badge className="extra-class">Badge with extra class</Badge>)
    const badgeElement = screen.getByText('Badge with extra class')
    expect(badgeElement).toBeInTheDocument()
    expect(badgeElement).toHaveClass('extra-class')
  })
})