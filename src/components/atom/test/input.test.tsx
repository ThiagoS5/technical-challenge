import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from '../Input';

describe('Input', () => {
  it('renders an input with a placeholder', () => {
    render(<Input placeholder="Test Input" />);
    expect(screen.getByPlaceholderText('Test Input')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Input className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
