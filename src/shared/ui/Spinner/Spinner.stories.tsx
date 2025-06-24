import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Spinner } from './Spinner';

export default {
  title: 'shared/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = () => <Spinner />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [StyleDecorator(Theme.DARK)];
