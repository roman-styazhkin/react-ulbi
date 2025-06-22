import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Theme } from 'app/provider/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { PageError } from './PageError';

const meta = {
  title: 'widgets/PageError',
  component: PageError,
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {};

Dark.decorators = [StyleDecorator(Theme.DARK)];
