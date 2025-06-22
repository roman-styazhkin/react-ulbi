import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};
export const Inverted: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
  },
};
