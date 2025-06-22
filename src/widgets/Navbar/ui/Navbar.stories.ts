import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Theme } from 'app/provider/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Navbar } from './Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {};

Dark.decorators = [StyleDecorator(Theme.DARK)];
