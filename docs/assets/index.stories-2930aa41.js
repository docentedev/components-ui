import{a as t,j as g}from"./jsx-runtime-fd534075.js";import{r as i}from"./index-0cbcd92a.js";import{I as c,p as x}from"./index-b7073d1e.js";import{a as n}from"./index-e00338da.js";import{S as v}from"./index-675c71d2.js";import{T as f}from"./index-3ced0969.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-95bde099.js";import"./index-b6cc015e.js";import"./index-e5a77027.js";import"./index-86b246da.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-f49857af.js";import"./index-8a756933.js";import"./index-af5faa0b.js";import"./index-1021555e.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-0b607ab9.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-748e0ebf.js";import"./index-b3c58c2a.js";import"./index-c2412459.js";import"./index-7ea187ef.js";import"./index-63de68db.js";const W={title:"Input",component:c,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text",description:"Contenido del botón"},hint:{control:"text",description:"Contenido del botón"},variant:{control:"select",options:[void 0,"success","error","warning"],description:"Variante del input"},size:{control:"select",options:[void 0,"s","m"],description:"Tamaño del input"},type:{control:"select",options:["text","textarea","search"],description:"Tipo del input"},iconRight:{control:"select",options:[void 0,...Object.keys(n)],description:"Icono a la derecha del input"},iconRightError:{control:"select",options:[void 0,...Object.keys(n)],description:"Icono a la derecha del input en caso de error"}},render:e=>t(b,{...e})},b=e=>{const[m,l]=i.useState(""),[r,d]=i.useState(!1),h=u=>{l(u.target.value)};return g("div",{children:[t(c,{...e,maxLength:r?e.maxLength:void 0,onChange:h,value:m}),t(v,{}),t(f,{children:"Activar restricción de longitud"}),t(x,{onChange:()=>d(!r),value:r})]})},o={args:{maxLength:10,label:"This is the label",hint:"This is the hint.",type:"text",variant:"default",size:"m",iconRight:"Search"}};var a,s,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    maxLength: 10,
    label: 'This is the label',
    hint: 'This is the hint.',
    type: 'text',
    variant: 'default',
    size: 'm',
    iconRight: 'Search'
  }
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
