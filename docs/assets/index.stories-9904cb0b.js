import{a}from"./jsx-runtime-fd534075.js";import{r as p}from"./index-0cbcd92a.js";import{I as s}from"./index-715a186d.js";import"./_commonjsHelpers-de833af9.js";import"./index-ac710f84.js";const T={title:"Input",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text",description:"Contenido del botón"},hint:{control:"text",description:"Contenido del botón"},variant:{control:"select",options:["success","error","warning"],description:"Variante del input"},size:{control:"select",options:["","s","m"],description:"Tamaño del input"},type:{control:"select",options:["text","textarea","search"],description:"Tipo del input"}},render:e=>a(d,{...e})},d=e=>{const[i,l]=p.useState("");return a(s,{...e,onChange:c=>{l(c.target.value)},value:i})},t={args:{maxLength:10,label:"This is the label",hint:"This is the hint."}};var n,o,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    maxLength: 10,
    label: 'This is the label',
    hint: 'This is the hint.'
  }
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,T as default};
