import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';

import { Input } from ".";
import { IInputRoot } from './types';

export default {
    title: 'Components/Input',
    component: Input.InputRoot,
    args: {
      children: [
        <Input.InputIcon>
          <Envelope />
        </Input.InputIcon>,
        <Input.InputContent placeholder='Type your e-mail address' />
      ]
    },
    argTypes: {
      children: {
        table: {
          disable: true,
        }
      }
    }
} as Meta<IInputRoot>

export const Default: StoryObj<IInputRoot> = {}

export const WithoutIcon: StoryObj<IInputRoot> = {
  args: {
    children: <Input.InputContent placeholder='Type your e-mail address' />
  }
}