import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'shared/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormLight = Template.bind({});
LoginFormLight.decorators = [StoreDecorator({
  loginForm: { userName: 'Roman', password: '123' },
})];

export const LoginFormDark = Template.bind({});
LoginFormDark.decorators = [StoreDecorator({
  loginForm: { userName: 'kdjfkf', password: '12345' },
}), StyleDecorator(Theme.DARK)];

export const LoginFormError = Template.bind({});
LoginFormError.decorators = [StoreDecorator({
  loginForm: { userName: 'kdjfkf', password: '12345', error: 'Some error' },
}), StyleDecorator(Theme.DARK)];

export const LoginFormLoading = Template.bind({});
LoginFormLoading.decorators = [StoreDecorator({
  loginForm: { userName: 'kdjfkf', password: '12345', isLoading: true },
}), StyleDecorator(Theme.DARK)];
