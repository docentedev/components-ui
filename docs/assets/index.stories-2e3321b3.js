import{a as e,j as r}from"./jsx-runtime-fd534075.js";import{Y as p,c as i,T as f}from"./index-9c4075a2.js";import{r as h}from"./index-0cbcd92a.js";import{P as s}from"./index-02210d9f.js";const g=()=>{const[t,a]=h.useState([]);return{items:t,add:n=>{a(m=>[...m,n])}}},C=""+new URL("animated-icon-example-31da924a.gif",import.meta.url).href,k={title:"Components/Notification",component:p,argTypes:{items:{control:!1,description:"Items de notificaciones"}},render:()=>e(x,{})},x=()=>{const t=g();return r(s,{gap:.25,children:[e(i,{onClick:()=>{t.add({title:"Default",description:"description",onClose:console.log,persistent:!0,hiddenCloseButton:!0,render:({onClose:n})=>r(s,{direction:"column",gap:.25,children:[e(f,{children:"Contenido personalizado"}),r(s,{gap:.25,children:[e(i,{onClick:n,variant:"secondary",size:"xs",children:"Cancelar"}),e(i,{onClick:n,variant:"primary",size:"xs",children:"Aceptar"})]})]})})},children:"Default"}),e(i,{onClick:()=>{t.add({title:"Warning",description:"description",onClose:console.log,persistent:!0,variant:"warning",icon:e("img",{src:C,alt:""}),theme:"light"})},children:"Warning theme light and icon"}),e(i,{onClick:()=>{t.add({title:"Success",description:"description",onClose:console.log,persistent:!0,variant:"success"})},children:"Success"}),e(i,{onClick:()=>{t.add({title:"Render Error",persistent:!0,variant:"error",render:({onClose:n})=>e("div",{children:e("button",{onClick:n,children:"close"})})})},children:"Error"}),e(i,{onClick:()=>{t.add({title:"Default",description:"description"})},children:"Default"}),e(i,{onClick:()=>{t.add({title:"Default",description:"description",autoClose:1e3})},children:"Default open 1 second"}),e(p,{items:t.items})]})},o={args:{}};var c,d,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const D=["Default"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:D,default:k},Symbol.toStringTag,{value:"Module"}));export{o as D,j as N};