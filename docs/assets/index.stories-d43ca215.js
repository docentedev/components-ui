import{a as t,j as g}from"./jsx-runtime-fd534075.js";import{r as n}from"./index-0cbcd92a.js";import{I as p,T as x,v}from"./index-9a715a1f.js";import{a as i}from"./index-130c2559.js";import{S as f}from"./index-79378b34.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-3332eaf1.js";import"./index-177d311a.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-abb8f9ba.js";import"./index-ae9d3e9c.js";import"./index-af5faa0b.js";import"./index-339673fb.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-7b389540.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-86e4212d.js";import"./index-f05aaf72.js";import"./index-c2412459.js";import"./index-7ea187ef.js";const M={title:"Components/Input",component:p,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text",description:"Contenido del botón"},hint:{control:"text",description:"Contenido del botón"},variant:{control:"select",options:[void 0,"success","error","warning"],description:"Variante del input"},size:{control:"select",options:[void 0,"s","m"],description:"Tamaño del input"},type:{control:"select",options:["text","textarea","search"],description:"Tipo del input"},iconRight:{control:"select",options:[void 0,...Object.keys(i)],description:"Icono a la derecha del input"},iconRightError:{control:"select",options:[void 0,...Object.keys(i)],description:"Icono a la derecha del input en caso de error"}},render:e=>t(b,{...e})},b=e=>{const[l,m]=n.useState(""),[r,d]=n.useState(!1),h=u=>{m(u.target.value)};return g("div",{children:[t(p,{...e,maxLength:r?e.maxLength:void 0,onChange:h,value:l}),t(f,{}),t(x,{children:"Activar restricción de longitud"}),t(v,{onChange:()=>d(!r),value:r})]})},o={args:{maxLength:10,label:"This is the label",hint:"This is the hint.",type:"text",variant:"default",size:"m",iconRight:"Search"}};var a,s,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    maxLength: 10,
    label: 'This is the label',
    hint: 'This is the hint.',
    type: 'text',
    variant: 'default',
    size: 'm',
    iconRight: 'Search'
  }
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const N=["Default"];export{o as Default,N as __namedExportsOrder,M as default};