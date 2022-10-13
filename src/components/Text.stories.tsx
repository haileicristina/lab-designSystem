import {Text, TextProps} from './Text';
import {Meta, StoryObj} from '@storybook/react';

export default{
    title: 'Components/Text',
    component: Text,
    args:{
       children: 'Lorem ipsum',
       size:'md'//size padrão
    },

    argTypes:{
        size:{
            options: ['sm', 'md', 'lg'],
            control:{
                type:'inline-radio'
            }
        },
    },
} as Meta<TextProps> //tipagem do storybook

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args:{
        size: 'sm'
    }
}
export const Large: StoryObj<TextProps> = {
    args:{
        size: 'lg'
    }
}
export const CustomComponent: StoryObj<TextProps> = {
    args:{
        asChild: true,
        children:(
            <p>Text com P tag</p>
        )
    },
    // desabilitar a visão do ReactNode no controlls do storybook page
    argTypes:{ 
        children:{
            table:{
                disable: true
            }
        },
        asChild:{
            table:{
                disable: true
            }
        }
    }
}