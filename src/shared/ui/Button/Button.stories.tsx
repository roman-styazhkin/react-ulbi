import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Value',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Value',
  theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Value',
  theme: ThemeButton.OUTLINE,
};

Outline.decorators = [StyleDecorator(Theme.DARK)];
