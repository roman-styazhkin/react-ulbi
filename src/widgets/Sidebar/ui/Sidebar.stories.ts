import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Theme } from 'app/provider/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Sidebar } from 'widgets/Sidebar';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {};

Dark.decorators = [StyleDecorator(Theme.DARK)];
