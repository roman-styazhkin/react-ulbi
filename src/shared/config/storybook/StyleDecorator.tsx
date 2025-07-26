import { Story } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
import { StoreProvider } from 'app/provider/StoreProvider';
import 'app/styles/index.scss';

export const StyleDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <StoreProvider>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </StoreProvider>
);
