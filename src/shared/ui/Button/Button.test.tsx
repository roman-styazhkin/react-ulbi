import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';
import { ThemeButton } from './Button';

describe('Button', () => {
  test('Button in the document', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Button with clear props', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
