import React, { useState } from 'react';
import Button from './Button'; // Assuming you have a Button component

export default {
  title: 'Button',
  component: Button,
  tags:['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  argTypes: {
    type: {
      options: ['Default', 'Neutral', 'Reverse', 'Disabled'],
      control: { type: 'select' },
    },
    status: {
        options: ['Default', 'Hover', 'Disabled'],
        control: { type: 'select' },
    },
    size: {
    options: ['Default', 'Small', 'X-Small'],
    control: { type: 'select' },
    },
    IconOnly: {
        control: { type: 'boolean' },
    },
    text:{
        control:{type:'text'},
        value:'Action',
    },
    textOnly: {
        control:{type:'boolean'}
    }
  },
};


const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'Default',
    text:'Action'
};

export const Neutral = Template.bind({});
Neutral.args = {
    type:'Neutral',
    text:'Action'
};

export const Reverse = Template.bind({});
Reverse.args = {
    type:'Reverse',
    text:'Action'
};

export const Disabled = Template.bind({});
Disabled.args = {
    type:'Disabled',
  disabled: true,
  text:'Action'
};
