import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args)  => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Large Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Small Button',
};
