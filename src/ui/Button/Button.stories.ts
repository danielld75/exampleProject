import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {
    args: {
        label: 'Click me Blue',
        className: 'bg-blue-400 hover:bg-blue-600'
    },
};
export const Red: Story = {
    args: {
        label: 'Click me Red',
        className: 'bg-red-600 hover:bg-red-400'
    },
};
export const Green: Story = {
    args: {
        label: 'Click me Green',
        className: 'bg-green-600 hover:bg-green-400',
    },
};
