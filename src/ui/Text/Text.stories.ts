import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

export default { component: Text }
const meta = {
    title: 'ui/Text',
    component: Text,
    tags: ['autodocs']
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof meta>;

export const Blue: Story = {
    args: {
        children: "Jakiś przykład",
        className: 'text-blue-700'
    },
};

export const Red: Story = {
    args: {
        children: 'Text drugi',
        className: 'text-red-400'
    },
};
