import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('to be in the document', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar-element')).toBeInTheDocument();
  });
});
