import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Label } from '../label'
import '@testing-library/jest-dom'

describe('Label', () => {
  it('renders a label with children and applies custom className', () => {
    const { container } = render(
      <Label className="custom-class">Test Label</Label>,
    )
    expect(screen.getByText('Test Label')).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
