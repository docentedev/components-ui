import{a as e}from"./jsx-runtime-fd534075.js";import{z as d}from"./index-a6780084.js";import{I as t}from"./index-2922d105.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-3332eaf1.js";import"./index-d96b9dfe.js";import"./index-be75c763.js";import"./Easy-dac9347f.js";import"./index-889d04a6.js";import"./index-3afd175f.js";import"./index-ae9d3e9c.js";import"./index-af5faa0b.js";import"./index-b184faa2.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-b44cf4c5.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-e6b5a189.js";import"./index-cce712fb.js";import"./index-c2412459.js";import"./index-181649f6.js";const q={title:"Components/Tabs",component:d,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary"],description:"Variante de la tab por defecto primary"},index:{control:"number",description:"Indice de la tab por defecto 0, si se utiliza este prop se debe utilizar onChange para actualizar el estado del componente con una propiedad de estado en el componente padre"},borderRadius:{control:"text",description:"bordeRadius superior de la tab por defecto 0"},strechItems:{control:"boolean",description:"Estira los items de la tab por defecto false"},hiddenLine:{control:"boolean",description:"Oculta la linea de la tab que separan el contenido por defecto false"}},render:o=>e(s,{...o})},s=o=>{const l=o.variant==="secondary"?{backgroundColor:"#ECF6FF",padding:"10px"}:{};return e("div",{style:l,children:e(d,{...o})})},n={args:{tabs:[{label:"Tab 1",content:e("div",{children:"Contenido del Tab 1"}),icon:e(t,{name:"Box"}),badge:"100",disabled:!1},{label:"Tab 2",content:e("div",{children:"Contenido del Tab 2"}),icon:e(t,{name:"Box"}),badge:void 0,disabled:!0},{label:"Tab 3",content:e("div",{children:"Contenido del Tab 3"})},{label:"Tab 4",icon:e(t,{name:"Box"}),content:e("div",{children:"Contenido del Tab 4"})}]}};var a,i,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: 'Tab 1',
      content: <div>Contenido del Tab 1</div>,
      icon: <Icon name="Box" />,
      badge: '100',
      disabled: false
    }, {
      label: 'Tab 2',
      content: <div>Contenido del Tab 2</div>,
      icon: <Icon name="Box" />,
      badge: undefined,
      disabled: true
    }, {
      label: 'Tab 3',
      content: <div>Contenido del Tab 3</div>
    }, {
      label: 'Tab 4',
      icon: <Icon name="Box" />,
      content: <div>Contenido del Tab 4</div>
    }]
  }
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const L=["Default"];export{n as Default,L as __namedExportsOrder,q as default};
