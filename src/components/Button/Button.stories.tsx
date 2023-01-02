import { Meta, StoryObj } from '@storybook/react';

import { Button } from ".";
import { IButton } from './types';

export default {
    title: 'Components/Button', /// titulo
    component: Button,
    args: {
      children: 'Create account',
    },
    argTypes: {}
} as Meta<IButton>

export const Default: StoryObj<IButton> = {}
