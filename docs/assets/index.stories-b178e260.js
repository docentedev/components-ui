import{j as n,a as e,F as d}from"./jsx-runtime-fd534075.js";import{R as G}from"./index-af5faa0b.js";import{t as N,r as A,a as E,b as S}from"./index.utils-ca00242a.js";import{c as l,d as j,z as B,g as _}from"./index-553f5f99.js";import{C as D}from"./index-30ffb6e6.js";import{I}from"./index-12e24dad.js";import{r as p}from"./index-0cbcd92a.js";import{R as z}from"./index-6bf6aae2.js";import{C as s}from"./index-65ca6685.js";import{P as g}from"./index-02210d9f.js";import{T as y}from"./index-5414848e.js";import{I as F}from"./index-9e68d7ed.js";import{S as w}from"./index-ca44b1cf.js";import"./_commonjsHelpers-de833af9.js";import"./index-f2a475bc.js";import"./index-3f6ae449.js";import"./index-94b86141.js";import"./index-95353159.js";import"./index-be8450de.js";import"./index-541d37a9.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-ad766a68.js";import"./index-77c23b2f.js";import"./index-7ea187ef.js";import"./index-63de68db.js";const O="components-ui__index-module__Card___apZlm",R="components-ui__index-module__Content___ObhEm",M="components-ui__index-module__Backdrop___7MGmM",m={Card:O,Content:R,Backdrop:M},f=t=>{const o=N(t.tour),i=()=>{const a=A(t.tour,t.step+1);if(a.node){o.open(a.step);return}o.closeAll()},r=()=>{const a=E(t.tour,t.step-1);if(a.node){o.open(a.step);return}o.closeAll()};return n("div",{"data-components-ui_tourguide":t.tour,"data-step":t.step,"data-components-ui_tourguide-type":"backdrop","data-open":"false",className:m.Card,children:[e("div",{className:m.Backdrop,onClick:()=>o.closeAll()}),n("div",{className:m.Content,"data-position":t.position,"data-components-ui_tourguide-type":"content",children:[n("div",{children:[t.withClose&&e(l,{onClick:()=>o.closeAll(),variant:"toggle",icon:"Close"}),e(D,{width:t.width,padding:"m",children:t.render({chip:e(j,{text:"",variant:"primary","data-type":"chip"}),onPrev:r,onNext:i,onClose:()=>o.closeAll()})})]}),e("div",{"data-components-ui_tourguide-type":"arrow",children:e(I,{name:"CarretDown",color:B.color.PrimaryContrast.value})})]})]})};try{f.displayName="TourCard",f.__docgenInfo={description:"",displayName:"TourCard",props:{tour:{defaultValue:null,description:"",name:"tour",required:!0,type:{name:"string"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},render:{defaultValue:null,description:"",name:"render",required:!0,type:{name:"(props: { chip: Element; onPrev: () => void; onNext: () => void; onClose: () => void; }) => Element"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},withClose:{defaultValue:null,description:"",name:"withClose",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}const h=t=>(S(t.tour.name,t.step),n("div",{className:m.TourGuide,"data-components-ui_tourguide":t.tour.name,"data-step":t.step,"data-components-ui_tourguide-type":"wrapper","data-open":"false",children:[t.children,G.createPortal(e(f,{position:t.position||"top",tour:t.tour.name,step:t.step,withClose:t.withClose,width:t.width,render:t.render}),document.body)]}));try{tourguide.displayName="tourguide",tourguide.__docgenInfo={description:"",displayName:"tourguide",props:{render:{defaultValue:null,description:"",name:"render",required:!0,type:{name:"(props: { chip: Element; onPrev: () => void; onNext: () => void; onClose: () => void; }) => Element"}},tour:{defaultValue:null,description:"",name:"tour",required:!0,type:{name:"{ name: string; }"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"bottom-left"'},{value:'"bottom-right"'}]}},withClose:{defaultValue:null,description:"",name:"withClose",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}const P=p.createContext(null),v=t=>{const[o]=p.useState(t.tours.reduce((r,u)=>(r[u]={dispatch:N(u)},r),{})),i=r=>{if(!o[r])throw new Error(`Tour ${r} not found`);return o[r]};return e(P.Provider,{value:{getTour:i},children:t.children})};try{v.displayName="TourGuideProvider",v.__docgenInfo={description:"",displayName:"TourGuideProvider",props:{tours:{defaultValue:null,description:"",name:"tours",required:!0,type:{name:"string[]"}}}}}catch{}const x=t=>{const o=p.useContext(P);if(!o)throw new Error("useTourGuide must be used within a TourGuideProvider");return{name:t,dispacth:o.getTour(t).dispatch||{open:()=>{},closeAll:()=>{},total:0,onClick:()=>{}}}},ye={title:"TourGuide",component:h,tags:["autodocs"],render:()=>e(H,{})},$=()=>{const t=x("flujo0");return n(d,{children:[e(s,{col:3,children:e(l,{onClick:t.dispacth.onClick,"data-step":"0",children:"Open"})}),e(s,{col:3,children:e(h,{position:"bottom",tour:t,step:0,width:"20rem",render:({chip:o,onNext:i})=>n(d,{children:[o,n(g,{marginTop:.5,direction:"column",children:[e(y,{children:"Content A"}),e(F,{name:"Category"})]}),e(w,{}),e(_,{onConfirm:i,textConfirm:"Siguiente",variant:"horizontal"})]}),children:e(l,{onClick:()=>{},children:"Content"})})})]})},Z=()=>{const t=x("flujo0");return e(d,{children:e(h,{position:"bottom",tour:t,step:1,render:({chip:o,onNext:i,onPrev:r})=>n(d,{children:[o,e(g,{marginTop:.5,children:e(y,{children:"Content B"})}),e(w,{}),e(_,{onCancel:r,onConfirm:i,textCancel:"Anterior",textConfirm:"Siguiente",variant:"horizontal"})]}),children:e(l,{onClick:()=>{},children:"Content"})})})},C=({index:t,letter:o})=>{const i=x("flujo0"),[r,u]=p.useState(!1);return n(d,{children:[e(l,{onClick:()=>u(!r),children:"Toggle"}),r&&e(h,{position:"left",tour:i,step:t,withClose:!0,width:"20rem",render:({chip:a,onNext:q,onPrev:V})=>n(d,{children:[a,e(g,{marginTop:.5,children:n(y,{children:["Content ",o]})}),e(w,{}),e(_,{onCancel:V,onConfirm:q,textCancel:"Anterior",textConfirm:"Siguiente",variant:"horizontal"})]}),children:e(l,{variant:"secondary",onClick:()=>{},children:"Content"})})]})},H=()=>e("div",{children:e(v,{tours:["flujo0"],children:n(z,{children:[e($,{}),e(Z,{}),e(s,{col:3,children:e(C,{index:2,letter:"C"})}),e(s,{col:3,children:e(C,{index:3,letter:"D"})}),e(s,{col:3,children:e(C,{index:4,letter:"E"})})]})})}),c={args:{}};var T,b,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {}
}`,...(k=(b=c.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const we=["Default"];export{c as Default,we as __namedExportsOrder,ye as default};