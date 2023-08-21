import React from 'react';
import Button from './Button';



const Template = (args) => <Button {...args} />;


export default {
  title: 'Components/Button', // Título de la historia
  component: Button, // El componente que estamos creando una historia
  args: {
    children: 'Button', // Argumentos por defecto para la historia
  },
};

//Aquí declaramos las historias. 

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
 Secondary.args= { 
    type: "secondary",
 }

 export const Tertiary = Template.bind({});
 Tertiary.args = { 
     type: "tertiary",
 };
 