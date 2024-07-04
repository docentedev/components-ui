import{a as o,j as s,F as d}from"./jsx-runtime-fd534075.js";import{r as c}from"./index-0cbcd92a.js";import{o as p}from"./index-d7269e6f.js";import{S as u}from"./index-d2e5c41a.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-3332eaf1.js";import"./index-177d311a.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-9d98dfe9.js";import"./index-a349e7e6.js";import"./index-ae9d3e9c.js";import"./index-af5faa0b.js";import"./index-2ed377c9.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-fb1d49a2.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-9499902f.js";import"./index-68e553b9.js";import"./index-c2412459.js";import"./index-7ea187ef.js";const k={title:"Components/DropdownRange",component:p,tags:["autodocs"],argTypes:{value:{description:"Valor del rango de precios.",defaultValue:{min:0,max:100}},onChange:{description:"Función llamada cuando cambia el rango de precios.",action:"Price Range Changed"},labelFrom:{description:"Etiqueta para el primer input.",defaultValue:"Desde"},labelTo:{description:"Etiqueta para el segundo input.",defaultValue:"Hasta"},label:{description:"Etiqueta general para el rango de precios.",defaultValue:"Rango de precios"},textButton:{description:"Texto del botón de aplicación.",defaultValue:"Aplicar"},prefix:{cotrol:{type:"text"},description:"Prefijo para los valores de los inputs.",defaultValue:"$"}},render:e=>o(g,{...e})},g=({...e})=>{const[l,m]=c.useState(e.value);return s(d,{children:[o(p,{...e,value:l,onChange:t=>{m({min:t.min,max:t.max})}}),o(u,{height:15})]})},a={args:{value:{min:0,max:100},onChange:()=>{},labelFrom:"From",labelTo:"To",label:"Price Range",textButton:"Apply",prefix:"$"}};var r,n,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
