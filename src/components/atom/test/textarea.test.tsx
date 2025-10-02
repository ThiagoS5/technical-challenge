import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Textarea } from '../textarea'

describe('Textarea', () => {
  it('renders a textarea with a placeholder, applies custom className, and forwards ref', () => {
    const ref = React.createRef<HTMLTextAreaElement>()
    render(
      <Textarea
        ref={ref}
        className="custom-class"
        placeholder="Test Textarea"
      />,
    )

    const textareaElement = screen.getByPlaceholderText('Test Textarea')
    expect(textareaElement).toBeInTheDocument()
    expect(textareaElement).toHaveClass('custom-class')
    expect(ref.current).toBe(textareaElement)
  })
})
