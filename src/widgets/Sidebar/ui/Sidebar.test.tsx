import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('to be in the document', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar-element')).toBeInTheDocument();
  });

  test('toggle collapse', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar-element')).toBeInTheDocument();
    const sidebarToggler = screen.getByTestId('sidebar-toggler');
    fireEvent.click(sidebarToggler);
    expect(screen.getByTestId('sidebar-element')).toHaveClass('collapsed');
  });
});
