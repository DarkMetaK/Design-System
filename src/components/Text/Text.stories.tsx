import { Meta, StoryObj } from '@storybook/react';

import { Text } from ".";
import { IText } from './types';

export default {
    title: 'Components/Text', /// titulo
    component: Text,
    args: {
      children: 'Lorem ipsum.',
      size: 'md',
    },
    argTypes: {
      size: {
        options: ['sm', 'md', 'lg'],
        control: {
          type: 'inline-radio'
        }
      }
    }
} as Meta<IText>

export const Default: StoryObj<IText> = {}

export const Small: StoryObj<IText> = {
  args: {
    size: 'sm', 
  }
}

export const Large: StoryObj<IText> = {
  args: {
    size: 'lg',
  }
}

export const CustomComponent: StoryObj<IText> = {
  args: {
    asChild: true,
    children: <p>Text with p tag</p>
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}