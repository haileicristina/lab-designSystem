import {Button, ButtonProps} from './Button';
import {Meta, StoryObj} from '@storybook/react';

export default{
    title: 'Components/Button',
    component: Button,
    args:{
       children: 'Created account',      
    },

    argTypes:{}     
    
} as Meta<ButtonProps> //tipagem do storybook

export const Default: StoryObj<ButtonProps> = {}


