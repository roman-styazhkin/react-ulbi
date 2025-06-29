import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import i18nForTests from '../../../config/i18n/i18nForTests';

export const renderWithTranslation = (component: ReactNode) => render(
  <I18nextProvider i18n={i18nForTests}>
    {component}
  </I18nextProvider>,
);
