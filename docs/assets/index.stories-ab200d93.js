import{a as g}from"./jsx-runtime-fd534075.js";import{P as s}from"./index-25cbe26a.js";const r={title:"DEPRECADOS / PaginationEs",component:s,argTypes:{},render:e=>g(l,{...e})},l=e=>g(s,{...e,from:0,size:10,total:100,currentRow:10,onPage:n=>{console.log("onPage",n)},onNext:()=>{console.log("onNext")},onBack:()=>{console.log("onBack")},onPageSize:n=>{console.log("onPageSize",n)}}),o={args:{from:0,size:10,total:100,currentRow:10,onPage:e=>console.log("Page changed:",e),onNext:()=>console.log("Next page clicked"),onBack:()=>console.log("Previous page clicked"),onPageSize:e=>console.log("Page size changed:",e)}};var a,t,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    from: 0,
    size: 10,
    total: 100,
    currentRow: 10,
    onPage: page => console.log('Page changed:', page),
    onNext: () => console.log('Next page clicked'),
    onBack: () => console.log('Previous page clicked'),
    onPageSize: pageSize => console.log('Page size changed:', pageSize)
  }
}`,...(c=(t=o.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const i=["Default"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:i,default:r},Symbol.toStringTag,{value:"Module"}));export{d as C,o as D};
