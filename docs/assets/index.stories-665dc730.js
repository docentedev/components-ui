import{a,j as r}from"./jsx-runtime-fd534075.js";import{g,c as m,T as p}from"./index-d64f2a7a.js";import{r as n}from"./index-0cbcd92a.js";import{P as f}from"./index-02210d9f.js";import"./index.utils-9dacb6ca.js";import"./index-1cb3dc45.js";import"./index-491d176f.js";import"./index-86b246da.js";import"./Easy-dac9347f.js";import"./index-ffc8fa64.js";import"./index-8a756933.js";import"./index-af5faa0b.js";import"./_commonjsHelpers-de833af9.js";import"./index-f5215caf.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-1b748be7.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-4d9d89a7.js";import"./index-7d5763aa.js";import"./index-c2412459.js";import"./index-7ea187ef.js";import"./index-63de68db.js";const K={title:"DatepickerRange2",component:g,tags:["autodocs"],argTypes:{},render:()=>a(h,{})},h=()=>{const[t,i]=n.useState(void 0),[o,s]=n.useState(void 0);return r("div",{children:[r(f,{gap:1,marginBottom:1,children:[a(m,{size:"xs",onClick:()=>{i(new Date(2021,0,1)),s(new Date(2021,0,31))},children:"Change Dates"}),a(m,{size:"xs",onClick:()=>{i(void 0),s(void 0)},children:"Clear Dates"}),r(p,{children:["from: ",t==null?void 0:t.toLocaleDateString()]}),r(p,{children:["to: ",o==null?void 0:o.toLocaleDateString()]})]}),a(g,{label:"DatepickerRange2",start:t,end:o,onChange:(u,D)=>{i(u),s(D)}})]})},e={args:{}};var c,d,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,K as default};