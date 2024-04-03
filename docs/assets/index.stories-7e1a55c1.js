import{a as e,j as n,F as c}from"./jsx-runtime-fd534075.js";import{T as o,y as m,z as p,E as d,t as h,a as g}from"./index-ed90ff48.js";import{t as u}from"./stories.utils-47d76ce5.js";import{P as x}from"./index-02210d9f.js";import{S as i}from"./index-45b89812.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-3332eaf1.js";import"./index-86b246da.js";import"./Easy-dac9347f.js";import"./index-491d176f.js";import"./index-07b246ef.js";import"./index-8a756933.js";import"./index-af5faa0b.js";import"./index-f5215caf.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-ec542e9c.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-4d9d89a7.js";import"./index-f889b5a8.js";import"./index-c2412459.js";import"./index-7ea187ef.js";const J={title:"Components/Text2",component:o,tags:["autodocs"],argTypes:{lineHeight:{options:Object.keys(m),control:{type:"select"},description:"Variable CSS de ancho de linea del texto"},size:{options:Object.keys(p),control:{type:"select"},description:"Variable CSS de tamaño del texto"},weight:{options:Object.keys(d),control:{type:"select"},description:"Variable CSS de grosor del texto"},color:{options:Object.values(h.color).map(t=>t.cssVar),control:{type:"select"},description:"Variable CSS de color del texto"},underline:{control:{type:"boolean"},description:"Indica si el texto es subrayado"}},render:t=>e(f,{...t})},f=t=>n(c,{children:[e(x,{justifyContent:"flex-start",marginBottom:1,children:e(o,{...t})}),n(g,{icon:!1,variant:"info",children:[e(o,{weight:"bold",color:"--components-ui-color-primary-low",children:"La clase de texto aplicada para este componente fue"}),e("code",{children:`.components-ui-text-${t.lineHeight}-${t.size}-${t.weight}`}),e(i,{variant:"space",height:.5}),e(o,{weight:"bold",color:"--components-ui-color-primary-low",children:"Esta clase es igual a utilizar las siguientes variables CSS"}),e("code",{children:`line-height: var(--components-ui-text-lineHeight-${t.lineHeight});`}),e(i,{variant:"space",height:.25}),e("code",{children:`font-size: var(--components-ui-text-size-${t.size});`}),e(i,{variant:"space",height:.25}),e("code",{children:`font-weight: var(--components-ui-text-weight-${t.weight});`}),e(i,{}),e(o,{weight:"bold",color:"--components-ui-color-primary-low",children:"Adicionalmente, con el siguiente color de texto en variable CSS"}),e("code",{children:`color: var(${t.color});`})]})]}),r={args:{children:u,lineHeight:"s",size:"s",weight:"regular",color:"--components-ui-color-primary",underline:!1}};var a,s,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: testText,
    lineHeight: 's',
    size: 's',
    weight: 'regular',
    color: '--components-ui-color-primary',
    underline: false
  }
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const K=["Default"];export{r as Default,K as __namedExportsOrder,J as default};
