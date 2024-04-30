import{a as o,j as i,F as x}from"./jsx-runtime-fd534075.js";import{r as z}from"./index-0cbcd92a.js";import{I as a,a as y,s as I}from"./index-cba1fa6c.js";import{I as S,T as j}from"./index-a841c621.js";import{P as C}from"./index-02210d9f.js";import{S as c}from"./index-20b0f8d6.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-3332eaf1.js";import"./index-be75c763.js";import"./Easy-dac9347f.js";import"./index-0ecc97b9.js";import"./index-8a756933.js";import"./index-af5faa0b.js";import"./index-4b1b5381.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-3158b27b.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-1fcf8fa4.js";import"./index-30c04a33.js";import"./index-c2412459.js";import"./index-7ea187ef.js";const W={title:"Components/Icon",component:a,tags:["autodocs"],argTypes:{size:{control:{type:"range",min:16,max:256,step:16}},name:{options:Object.keys(y),control:{type:"select"}},color:{control:{type:"color"}},variant:{options:["","rounded-edge-box","tag"],control:{type:"select"}},animation:{options:["","rotate","asc","desc"],control:{type:"select"}}},render:s=>o(v,{...s})},v=s=>{const[n,f]=z.useState(""),h=Object.keys(y).filter(r=>r.toLowerCase().includes(n.toLowerCase()));return i(x,{children:[o(C,{justifyContent:"center",children:o(a,{...s})}),o(c,{}),o(S,{type:"text",placeholder:"Buscar icono",value:n,onChange:r=>f(r.target.value),size:"s",label:"Buscar icono"}),o(c,{}),o("div",{className:I.storiesDisplayIcons,children:h.map(r=>i("div",{children:[o(a,{name:r,size:20,color:"--components-ui-color-dark"}),o(j,{size:12,children:r})]},r))})]})},e={args:{size:48}},t={args:{name:"Spinner",size:48,color:"--components-ui-color-primary",animation:"rotate"}};var p,m,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 48
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'Spinner',
    size: 48,
    color: '--components-ui-color-primary',
    animation: 'rotate'
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const X=["Default","Loader"];export{e as Default,t as Loader,X as __namedExportsOrder,W as default};
