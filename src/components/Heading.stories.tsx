import {Heading, HeadingProps} from './Heading';
import {Meta, StoryObj} from '@storybook/react';

export default{
    title: 'Components/Heading',
    component:Heading,
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
} as Meta<HeadingProps> //tipagem do storybook

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args:{
        size: 'sm'
    }
}
export const Large: StoryObj<HeadingProps> = {
    args:{
        size: 'lg'
    }
}
export const CustomComponent: StoryObj<HeadingProps> = {
    args:{
        asChild: true,
        children:(
            <h1>Heading with H1</h1>
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