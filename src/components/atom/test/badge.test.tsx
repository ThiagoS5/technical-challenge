import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Badge } from '../badge'
import '@testing-library/jest-dom'

describe('Badge component', () => {
  describe('variants', () => {
    const variants = [
      {
        variant: 'default' as const,
        expectedClasses: [
          'border-transparent',
          'bg-primary',
          'text-primary-foreground',
        ],
      },
      {
        variant: 'secondary' as const,
        expectedClasses: [
          'border-transparent',
          'bg-secondary',
          'text-secondary-foreground',
        ],
      },
      {
        variant: 'destructive' as const,
        expectedClasses: ['border-transparent', 'bg-destructive', 'text-white'],
      },
      {
        variant: 'outline' as const,
        expectedClasses: ['text-foreground'],
      },
    ]

    test.each(variants)(
      'applies the $variant variant styles',
      ({ variant, expectedClasses }) => {
        render(<Badge variant={variant}>{variant}</Badge>)
        const badgeElement = screen.getByText(variant!)
        expect(badgeElement).toBeInTheDocument()
        expectedClasses.forEach((expectedClass) => {
          expect(badgeElement).toHaveClass(expectedClass)
        })
      },
    )
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
