import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Spinner } from './Spinner';

const meta = {
  title: 'shared/Spinner',
  component: Spinner,
  args: {
    to: '/',
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {};

Dark.decorators = [StyleDecorator(Theme.DARK)];
