import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>
}
export const componentRender = (component: ReactNode, options: componentRenderOptions = {}) => {
  const { route = '/', initialState } = options;
  return (
    render(
      <StoreProvider initialState={initialState}>
        <MemoryRouter initialEntries={[route]}>
          <I18nextProvider i18n={i18nForTests}>
            {component}
          </I18nextProvider>
        </MemoryRouter>
      </StoreProvider>,
    )
  );
};
