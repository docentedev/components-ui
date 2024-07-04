import{a as r,j as s}from"./jsx-runtime-fd534075.js";import{j as w,T as i,V as D,I as $,t as T}from"./index-d7269e6f.js";import{R as d}from"./index-0cbcd92a.js";import{S as u}from"./index-d2e5c41a.js";import{P as M}from"./index-02210d9f.js";import{R as C}from"./index-c2412459.js";import{C as l}from"./index-65ca6685.js";import"./index.utils-3332eaf1.js";import"./index-177d311a.js";import"./Easy-dac9347f.js";import"./index-9d98dfe9.js";import"./index-a349e7e6.js";import"./index-ae9d3e9c.js";import"./index-af5faa0b.js";import"./_commonjsHelpers-de833af9.js";import"./index-2ed377c9.js";import"./index-be8450de.js";import"./index-fb1d49a2.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-9499902f.js";import"./index-68e553b9.js";import"./index-7ea187ef.js";const X={title:"Components/DelayTrafficLight",component:w,tags:["autodocs"],argTypes:{error:{control:{type:"text"}},success:{control:{type:"text"}},warning:{control:{type:"text"}},default:{control:{type:"text"}},disabled:{control:{type:"text"}}},render:e=>r(S,{...e})},a=e=>e<10?`0${e}`:`${e}`,p=e=>`${a(e.getDate())}/${a(e.getMonth()+1)}/${e.getFullYear()} ${a(e.getHours())}:${a(e.getMinutes())}:${a(e.getSeconds())}`,f=new Date("2021-09-01T00:00:00"),S=e=>{const[c,x]=d.useState(new Date("2021-09-01T00:00:00")),[v,y]=d.useState(0),t={};return e.error&&(t.error=e.error),e.success&&(t.success=e.success),e.warning&&(t.warning=e.warning),e.default&&(t.default=e.default),e.disabled&&(t.disabled=e.disabled),r("div",{children:s(M,{gap:.25,direction:"column",marginTop:1,children:[r(w,{pivot:c,date:f,withChip:!0,render:({level:m,formatDiff:o})=>m==="error"?"Atrasado":o,...t}),r(u,{}),r(i,{children:"Formatos válidos para las props: disabled, error, warning, success, default"}),s(C,{children:[r(l,{col:6,children:r(D,{data:[{label:"Operadores válidos",value:"<, >, <=, >=, =="},{label:"Valores válidos",value:"1y 1M 1w 1d 1h 1m 1s"},{label:"Unidades de tiempo",value:"y(años), M(meses), d(días), h(horas), m(minutos), s(segundos), w(semanas)"},{label:"Combinar 2 condiciones",value:"&&"}]})}),r(l,{col:6,children:r($,{placeholder:"Hora de la fecha B",type:"number",size:"s",value:v,hint:`Fecha Pivote: ${p(c)}m Fecha: ${p(f)}m`,onChange:m=>{const o=Math.min(59,Math.max(0,parseInt(m.target.value)));x(new Date(`2021-09-01T00:${a(isNaN(o)?0:o)}:00`)),y(o)}})}),s(l,{col:12,children:[r(u,{}),r(i,{children:"Por ejemplo"}),s(i,{weight:T.text.weightSemibold.value,children:["- ","< 1s",r("br",{}),"- ","> 1m",r("br",{}),"- ","<= 1h 22s",r("br",{}),"- ",">= 1y 2M 23d",r("br",{}),"- ","= 1h 2m 3s",r("br",{}),"- ","== 1w 2d 3h 4m 5s",r("br",{}),"- ","> 1m && < 1h"]}),r(i,{children:"La comparación se realiza en el siguiente orden: disabled, default, error, warning, y finalmente success."})]})]})]})})},n={args:{default:"> 0m && < 2m",error:">= 16m",warning:">= 5m && < 16m",success:">= 2m && < 5m",disabled:"== 0m"}};var h,g,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    default: '> 0m && < 2m',
    error: '>= 16m',
    warning: '>= 5m && < 16m',
    success: '>= 2m && < 5m',
    disabled: '== 0m'
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const Z=["Default"];export{n as Default,Z as __namedExportsOrder,X as default};
