import{a as o,j as s,F as d}from"./jsx-runtime-fd534075.js";import{r as c}from"./index-0cbcd92a.js";import{n as p}from"./index-bd6147c9.js";import{S as u}from"./index-8d2fa8e5.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-3332eaf1.js";import"./index-86b246da.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-082982e0.js";import"./index-cd9c691f.js";import"./index-8a756933.js";import"./index-af5faa0b.js";import"./index-8828826f.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-6ad23fad.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-4a061051.js";import"./index-e1a77d40.js";import"./index-c2412459.js";import"./index-7ea187ef.js";const k={title:"Components/DropdownRange",component:p,tags:["autodocs"],argTypes:{value:{description:"Valor del rango de precios.",defaultValue:{min:0,max:100}},onChange:{description:"Función llamada cuando cambia el rango de precios.",action:"Price Range Changed"},labelFrom:{description:"Etiqueta para el primer input.",defaultValue:"Desde"},labelTo:{description:"Etiqueta para el segundo input.",defaultValue:"Hasta"},label:{description:"Etiqueta general para el rango de precios.",defaultValue:"Rango de precios"},textButton:{description:"Texto del botón de aplicación.",defaultValue:"Aplicar"},prefix:{cotrol:{type:"text"},description:"Prefijo para los valores de los inputs.",defaultValue:"$"}},render:e=>o(g,{...e})},g=({...e})=>{const[l,m]=c.useState(e.value);return s(d,{children:[o(p,{...e,value:l,onChange:t=>{m({min:t.min,max:t.max})}}),o(u,{height:15})]})},a={args:{value:{min:0,max:100},onChange:()=>{},labelFrom:"From",labelTo:"To",label:"Price Range",textButton:"Apply",prefix:"$"}};var r,n,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    value: {
      min: 0,
      max: 100
    },
    onChange: () => undefined,
    labelFrom: 'From',
    labelTo: 'To',
    label: 'Price Range',
    textButton: 'Apply',
    prefix: '$'
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const z=["Default"];export{a as Default,z as __namedExportsOrder,k as default};
