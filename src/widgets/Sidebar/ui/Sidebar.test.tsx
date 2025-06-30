import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('to be in the document', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar-element')).toBeInTheDocument();
  });

  test('toggle collapse', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar-element')).toBeInTheDocument();
    const sidebarToggler = screen.getByTestId('sidebar-toggler');
    fireEvent.click(sidebarToggler);
    expect(screen.getByTestId('sidebar-element')).toHaveClass('collapsed');
  });
});
