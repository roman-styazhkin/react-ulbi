import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const LightPrimary = Template.bind({});
LightPrimary.args = {
  children: 'Value',
  theme: AppLinkTheme.PRIMARY,
};
export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
  children: 'Value',
  theme: AppLinkTheme.PRIMARY,
};

DarkPrimary.decorators = [StyleDecorator(Theme.DARK)];

export const LightInverted = Template.bind({});
LightInverted.args = {
  children: 'Value',
  theme: AppLinkTheme.INVERTED,
};

export const DarkInverted = Template.bind({});
DarkInverted.args = {
  children: 'Value',
  theme: AppLinkTheme.INVERTED,
};

DarkInverted.decorators = [StyleDecorator(Theme.DARK)];
