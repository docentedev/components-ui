import{a as e,j as l,F as u}from"./jsx-runtime-fd534075.js";import{r as b}from"./index-0cbcd92a.js";import{s as c,c as v}from"./index-d7269e6f.js";import{C as y}from"./index-499013c1.js";import{S as h}from"./index-d2e5c41a.js";import{B as f}from"./index-ae9d3e9c.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-3332eaf1.js";import"./index-177d311a.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-9d98dfe9.js";import"./index-a349e7e6.js";import"./index-af5faa0b.js";import"./index-2ed377c9.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-fb1d49a2.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-9499902f.js";import"./index-68e553b9.js";import"./index-c2412459.js";import"./index-7ea187ef.js";const M={title:"Components/InputPreset",component:c,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label dropdown"},placeholder:{control:"text",description:"Placeholder input"},disabled:{control:"boolean",description:"Indica si el componente está desactivado"}},render:t=>e(x,{...t})},i=[{value:"value1",label:"labelOption1",icon:"Activity"},{value:"value2",label:"labelOption2",icon:e(f,{name:"Cencosud"})},{value:"value13",label:"labelOption3"},{value:"value4",label:"labelOption4",icon:e(y,{country:"cl",hiddenText:!0,size:24})}],x=t=>{const[o,a]=b.useState({key:i[0].value,value:""});return l(u,{children:[e(c,{options:i,value:{key:o.key,value:o.value},disabled:t.disabled,onChange:(m,d)=>{a({key:m,value:d})},label:t.label,placeholder:t.placeholder}),l("p",{children:["Selected: ",JSON.stringify(o)]}),e(h,{height:6}),e(v,{type:"button",variant:"secondary",size:"xs",onClick:()=>a({key:"",value:""}),disabled:!o.key,children:"Clear Values"})]})},r={};var n,s,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Q=["Default"];export{r as Default,Q as __namedExportsOrder,M as default};
