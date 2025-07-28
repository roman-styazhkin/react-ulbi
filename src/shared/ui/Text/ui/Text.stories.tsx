import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  title: 'Title for text component',
  description: 'Description for text component',
};

export const TextPrimaryOnlyTitle = Template.bind({});
TextPrimaryOnlyTitle.args = {
  title: 'Component with only title',
};

export const TextPrimaryOnlyDescription = Template.bind({});
TextPrimaryOnlyDescription.args = {
  description: 'Component with only description',
};

export const TextPrimaryDark = Template.bind({});
TextPrimaryDark.args = {
  title: 'Title for text component',
  description: 'Description for text component',
};

TextPrimaryDark.decorators = [StyleDecorator(Theme.DARK)];

export const TextPrimaryOnlyTitleDark = Template.bind({});
TextPrimaryOnlyTitleDark.args = {
  title: 'Component with only title',
};

TextPrimaryOnlyTitleDark.decorators = [StyleDecorator(Theme.DARK)];

export const TextPrimaryOnlyDescriptionDark = Template.bind({});
TextPrimaryOnlyDescriptionDark.args = {
  description: 'Component with only description',
};

TextPrimaryOnlyDescriptionDark.decorators = [StyleDecorator(Theme.DARK)];
