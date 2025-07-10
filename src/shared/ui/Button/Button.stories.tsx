import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
  theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Value',
  theme: ButtonTheme.OUTLINE,
};

Outline.decorators = [StyleDecorator(Theme.DARK)];

export const BackgroundThemePrimary = Template.bind({});
BackgroundThemePrimary.args = {
  children: 'Value',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

BackgroundThemePrimary.decorators = [StyleDecorator(Theme.DARK)];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Value',
  theme: ButtonTheme.CLEAR_INVERTED,
};

ClearInverted.decorators = [StyleDecorator(Theme.DARK)];

export const BackgroundThemeInverted = Template.bind({});
BackgroundThemeInverted.args = {
  children: 'Value',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

BackgroundThemeInverted.decorators = [StyleDecorator(Theme.LIGHT)];

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Value',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.M,
};

OutlineSizeM.decorators = [StyleDecorator(Theme.LIGHT)];

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Value',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.L,
};

OutlineSizeL.decorators = [StyleDecorator(Theme.LIGHT)];

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Value',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.Xl,
};

OutlineSizeXL.decorators = [StyleDecorator(Theme.LIGHT)];

export const SquareBackgroundPrimary = Template.bind({});
SquareBackgroundPrimary.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_PRIMARY,
  square: ButtonTheme.SQUARE,
};

SquareBackgroundPrimary.decorators = [StyleDecorator(Theme.LIGHT)];
export const SquareBackgroundInverted = Template.bind({});
SquareBackgroundInverted.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: ButtonTheme.SQUARE,
};

SquareBackgroundInverted.decorators = [StyleDecorator(Theme.LIGHT)];
