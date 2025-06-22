import { Decorator, StoryFn } from '@storybook/react';
import { Theme } from 'app/provider/ThemeProvider';
import 'app/styles/index.scss';

export const StyleDecorator = (theme: Theme): Decorator => (StoryComponent: StoryFn) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
