import{a as i}from"./jsx-runtime-fd534075.js";import{r as c}from"./index-0cbcd92a.js";import{I as a}from"./index-25efc564.js";import"./_commonjsHelpers-de833af9.js";import"./index-637a0b9d.js";import"./index-b43a95bf.js";const C={title:"InputPassword",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text",description:"Contenido del botón"},hint:{control:"text",description:"Contenido del botón"},hintRequired:{control:"text",description:"Contenido del botón"},variant:{control:"select",options:["error"],description:"Variante del input"},iconVariant:{control:"select",options:["outline","filled"],description:"Variante del icono"}},render:t=>i(h,{...t})},h=t=>{const[s,l]=c.useState("");return i(a,{...t,onChange:d=>{l(d.target.value)},value:s})},e={args:{maxLength:10,label:"This is the label",hint:"This is the hint.",hintRequired:"This is the hint required."}};var n,o,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    maxLength: 10,
    label: 'This is the label',
    hint: 'This is the hint.',
    hintRequired: 'This is the hint required.'
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,C as default};
