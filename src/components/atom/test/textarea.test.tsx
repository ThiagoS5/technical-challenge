import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Textarea } from '../textarea';

describe('Textarea', () => {
  it('renders a textarea with a placeholder', () => {
    render(<Textarea placeholder="Test Textarea" />);
    expect(screen.getByPlaceholderText('Test Textarea')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Textarea className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
