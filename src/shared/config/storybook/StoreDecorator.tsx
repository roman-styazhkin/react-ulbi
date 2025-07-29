import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (initialState: DeepPartial<StateSchema> = {}) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState}>
    <StoryComponent />
  </StoreProvider>
);
