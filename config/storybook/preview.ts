import { addDecorator } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/provider/ThemeProvider';

const preview = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator(Theme.LIGHT));

export default preview;
