import{a as t,j as b}from"./jsx-runtime-fd534075.js";import{r as a}from"./index-0cbcd92a.js";import{o as n,T as f}from"./index-ed90ff48.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-3332eaf1.js";import"./index-45b89812.js";import"./index-491d176f.js";import"./index-86b246da.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-07b246ef.js";import"./index-8a756933.js";import"./index-af5faa0b.js";import"./index-f5215caf.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-ec542e9c.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-4d9d89a7.js";import"./index-f889b5a8.js";import"./index-c2412459.js";import"./index-7ea187ef.js";const J={title:"Components/Dropdown",component:n,tags:["autodocs"],argTypes:{loading:{control:{type:"boolean"}},direction:{control:{type:"select"},options:["top","bottom"]}},render:e=>t(g,{...e})},g=({loading:e,direction:l})=>{const[m,u]=a.useState(""),[d,c]=a.useState("");return b("form",{onSubmit:console.log,children:[t(n,{label:"Dropdown",value:m,onChange:r=>{u(r)},options:[{value:"Value1",label:"ValueLabel1",persistent:!0,disabled:!0},{value:"Value2",label:"ValueLabel2",persistent:!0,disabled:!1},{value:"Value3",label:"ValueLabel3",persistent:!0,disabled:!1}],onInput:r=>c(r),loading:e,direction:l}),t(f,{children:d}),t("br",{}),t("br",{}),t("br",{}),t("br",{}),t("br",{})]})},o={args:{loading:!1}};var s,p,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    loading: false
  }
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const K=["Default"];export{o as Default,K as __namedExportsOrder,J as default};
