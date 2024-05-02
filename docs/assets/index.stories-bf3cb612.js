import{a as o}from"./jsx-runtime-fd534075.js";import{r as n}from"./index-0cbcd92a.js";import{w as c}from"./index-a6780084.js";import{P as i}from"./index-889d04a6.js";const u={title:"Components/RadioButton",component:c,argTypes:{size:{options:["s","m"],control:{type:"select"},value:"m",description:"Tamaño del radio button"},disabled:{control:{type:"boolean"},description:"Indica si el radio button está deshabilitado"},label:{control:{type:"text"},description:"Texto del radio button"},readOnly:{control:{type:"boolean"},description:"Indica si el radio button es de solo lectura"},checked:{control:{type:"boolean"},description:"Indica si el radio button está seleccionado"},onClick:{description:"Función que se ejecuta al hacer click en el radio button"}},render:e=>o(m,{...e})},m=e=>{const[d,a]=n.useState(e.checked);return n.useEffect(()=>{a(e.checked)},[e.checked]),o(i,{gap:1,children:o(c,{disabled:e.disabled,checked:d,onClick:a,label:e.label,size:e.size,readOnly:e.readOnly})})},t={args:{label:"Radio Button",size:"m",disabled:!1,readOnly:!1,checked:!0}};var r,l,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Radio Button',
    size: 'm',
    disabled: false,
    readOnly: false,
    checked: true
  }
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const b=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:b,default:u},Symbol.toStringTag,{value:"Module"}));export{k as C,t as D};
