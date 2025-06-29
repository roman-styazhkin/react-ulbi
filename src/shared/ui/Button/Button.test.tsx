import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from './Button';

describe('Button', () => {
  test('Button in the document', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Button with clear props', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
