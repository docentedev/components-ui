import{a as o}from"./jsx-runtime-fd534075.js";import{r as n}from"./index-0cbcd92a.js";import{R as d}from"./index-aabdda09.js";import{P as s}from"./index-02210d9f.js";const u={title:"RadioButton",component:d,argTypes:{size:{options:["s","m"],control:{type:"select"},value:"m",description:"Tamaño del radio button"},disabled:{control:{type:"boolean"},description:"Indica si el radio button está deshabilitado"},label:{control:{type:"text"},description:"Texto del radio button"},readOnly:{control:{type:"boolean"},description:"Indica si el radio button es de solo lectura"},checked:{control:{type:"boolean"},description:"Indica si el radio button está seleccionado"},onClick:{description:"Función que se ejecuta al hacer click en el radio button"}},render:e=>o(b,{...e})},b=e=>{const[i,a]=n.useState(e.checked);return n.useEffect(()=>{a(e.checked)},[e.checked]),o(s,{gap:1,children:o(d,{disabled:e.disabled,checked:i,onClick:a,label:e.label,size:e.size,readOnly:e.readOnly})})},t={args:{label:"Radio Button",size:"m",disabled:!1,readOnly:!1,checked:!0}};var r,l,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Radio Button',
    size: 'm',
    disabled: false,
    readOnly: false,
    checked: true
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const m=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{k as C,t as D};
