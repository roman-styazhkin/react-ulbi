import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/provider/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: 'Value value value value',
  isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Value value value value',
  isOpen: true,
};

Dark.decorators = [StyleDecorator(Theme.DARK)];
