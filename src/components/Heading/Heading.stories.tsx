import { Meta, StoryObj } from '@storybook/react';

import { Heading } from ".";
import { IHeading } from './types';

export default {
    title: 'Components/Heading', /// titulo
    component: Heading,
    args: {
      children: 'Heading',
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
} as Meta<IHeading>

export const Default: StoryObj<IHeading> = {}

export const Small: StoryObj<IHeading> = {
  args: {
    size: 'sm', 
  }
}

export const Large: StoryObj<IHeading> = {
  args: {
    size: 'lg',
  }
}

export const CustomComponent: StoryObj<IHeading> = {
  args: {
    asChild: true,
    children: <h1>Heading with H1</h1>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}