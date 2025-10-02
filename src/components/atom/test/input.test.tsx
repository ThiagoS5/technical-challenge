import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Input } from '../Input'
import '@testing-library/jest-dom'

describe('Input', () => {
  it('renders an input with a placeholder, applies custom className, and forwards ref', () => {
    const ref = React.createRef<HTMLInputElement>()
    const { container } = render(
      <Input ref={ref} className="custom-class" placeholder="Test Input" />,
    )

    expect(screen.getByPlaceholderText('Test Input')).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('custom-class')
    expect(ref.current).toBeInTheDocument()
  })
})
