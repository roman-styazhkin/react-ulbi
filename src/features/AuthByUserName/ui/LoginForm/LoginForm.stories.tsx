import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { LoginForm } from './LoginForm';

export default {
  title: 'shared/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormLight = Template.bind({});
LoginFormLight.args = {
  value: 'testValue',
};

LoginFormLight.decorators = [StyleDecorator(Theme.LIGHT)];

export const LoginFormDark = Template.bind({});
LoginFormDark.args = {
  value: 'testValue',
};

LoginFormDark.decorators = [StyleDecorator(Theme.DARK)];
