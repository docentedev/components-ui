import{a as r,j as n}from"./jsx-runtime-fd534075.js";import{g as F,F as y,c as i,T as o,u as l,R as c}from"./index-440ab434.js";import{P as D}from"./index-02210d9f.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-3332eaf1.js";import"./index-564d8fa6.js";import"./index-130c2559.js";import"./index-177d311a.js";import"./Easy-dac9347f.js";import"./index-bbe009cc.js";import"./index-ae9d3e9c.js";import"./index-af5faa0b.js";import"./index-339673fb.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-7b389540.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-86e4212d.js";import"./index-f05aaf72.js";import"./index-c2412459.js";import"./index-7ea187ef.js";const U={title:"Components/DatepickerRange2",component:F,tags:["autodocs"],argTypes:{},render:()=>r(v,{})},v=()=>{var d,g,m,p;const e=y.useForm({start:void 0,end:void 0,range:[],allowSelectDateOutRange:!1,clickDates:{start:void 0,end:void 0}}),R=t=>{const a=l.datepickerRange.getRangeDays(c.lastMonth);t({start:a.start,end:a.end})},C=t=>{const a=l.datepickerRange.getRangeDays(c.lastWeek);t({start:a.start,end:a.end})},x=t=>{const a=l.datepickerRange.getRangeDays(c.nextWeek);t({start:a.start,end:a.end})};return n("div",{children:[n(D,{gap:1,marginBottom:1,children:[r(i,{size:"xs",onClick:()=>{e.setField("start",new Date(2021,0,1)),e.setField("end",new Date(2021,0,31))},children:"Change Dates"}),r(i,{size:"xs",onClick:()=>{e.setFields({start:void 0,end:void 0}),e.setField("range",[])},children:"Clear Dates"}),r(i,{size:"xs",onClick:()=>{const t=new Date,a=new Date;t.setDate(t.getDate()-15),a.setDate(a.getDate()+15),e.setField("range",[t,a])},children:"Set Range"}),r(i,{size:"xs",onClick:()=>{e.setField("allowSelectDateOutRange",!e.getField("allowSelectDateOutRange"))},children:"Allow Click Out Range"})]}),n(D,{gap:1,marginBottom:2,children:[n(o,{children:["clicked: ",(d=e.getField("clickDates.start"))==null?void 0:d.toLocaleDateString()]}),n(o,{children:["to: ",(g=e.getField("clickDates.end"))==null?void 0:g.toLocaleDateString()]}),n(o,{children:["confirmed: ",(m=e.getField("start"))==null?void 0:m.toLocaleDateString()]}),n(o,{children:["to: ",(p=e.getField("end"))==null?void 0:p.toLocaleDateString()]}),n(o,{children:["allow click out range: ",e.getField("allowSelectDateOutRange").toString()]})]}),r(F,{label:"DatepickerRange2",onClickDay:(t,a)=>{e.setField("clickDates",{start:t,end:a})},min:e.getField("range").length>0?e.getField("range")[0]:void 0,max:e.getField("range").length>0?e.getField("range")[1]:void 0,allowSelectDateOutRange:e.getField("allowSelectDateOutRange"),...e.dateRage2Change("start","end"),renderFooter:({onChangeDate:t})=>n("div",{children:[r(i,{iconLeft:"Calendar",onClick:()=>R(t),size:"xs",type:"button",variant:"primary",children:"Último mes"}),r(i,{iconLeft:"Calendar",onClick:()=>C(t),size:"xs",type:"button",variant:"primary",children:"Última semana"}),r(i,{iconLeft:"Calendar",onClick:()=>x(t),size:"xs",type:"button",variant:"primary",children:"Próxima semana"})]})})]})},s={args:{}};var k,u,h;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {}
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const V=["Default"];export{s as Default,V as __namedExportsOrder,U as default};
