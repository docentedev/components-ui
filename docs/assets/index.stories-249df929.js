import{a as o}from"./jsx-runtime-fd534075.js";import{r as i}from"./index-0cbcd92a.js";/* empty css              */import{R as c}from"./index-b55f6460.js";import"./index-e9e4b522.js";import"./index-94b86141.js";import"./index-150f24d0.js";import"./index-598450d7.js";import"./index-65ca6685.js";import"./index-4cd4725f.js";import"./index-162d25a7.js";import"./index-3b419322.js";import"./index-03eabb6a.js";import"./index-36b10e2f.js";import"./index-b6ef4225.js";import"./index-9e68d7ed.js";import"./index-d70482d4.js";import"./index-a1e9148f.js";import"./index-649ebd0f.js";import{P as s}from"./index-02210d9f.js";import"./index-6bf6aae2.js";import"./index-e60269c1.js";import"./index-7ea187ef.js";import"./index-0be2366d.js";import"./index-f7fa16df.js";import"./index-63de68db.js";const m={title:"RadioButton",component:c,argTypes:{size:{options:["s","m"],control:{type:"select"},value:"m",description:"Tamaño del radio button"},disabled:{control:{type:"boolean"},description:"Indica si el radio button está deshabilitado"},label:{control:{type:"text"},description:"Texto del radio button"},readOnly:{control:{type:"boolean"},description:"Indica si el radio button es de solo lectura"},checked:{control:{type:"boolean"},description:"Indica si el radio button está seleccionado"},onClick:{description:"Función que se ejecuta al hacer click en el radio button"}},render:e=>o(p,{...e})},p=e=>{const[d,r]=i.useState(e.checked);return i.useEffect(()=>{r(e.checked)},[e.checked]),o(s,{gap:1,children:o(c,{disabled:e.disabled,checked:d,onClick:r,label:e.label,size:e.size,readOnly:e.readOnly})})},t={args:{label:"Radio Button",size:"m",disabled:!1,readOnly:!1,checked:!0}};var a,n,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Radio Button',
    size: 'm',
    disabled: false,
    readOnly: false,
    checked: true
  }
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const u=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{A as C,t as D};