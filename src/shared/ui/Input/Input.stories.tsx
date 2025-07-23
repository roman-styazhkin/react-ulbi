import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputLight = Template.bind({});
InputLight.args = {
  value: 'testValue',
};

InputLight.decorators = [StyleDecorator(Theme.LIGHT)];

export const InputDark = Template.bind({});
InputDark.args = {
  value: 'testValue',
};

InputDark.decorators = [StyleDecorator(Theme.DARK)];
