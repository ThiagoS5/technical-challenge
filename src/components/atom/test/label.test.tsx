import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from '../label';

describe('Label', () => {
  it('renders a label with children', () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Label className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
