import{a as r}from"./jsx-runtime-fd534075.js";import{P as i}from"./index-4d9d89a7.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./index-491d176f.js";const u={title:"Pagination",component:i,tags:["autodocs"],argTypes:{variant:{options:["","minimum","alternative"],control:{type:"select"}}},render:e=>r(l,{...e})},l=e=>r(i,{onPage:a=>{console.log("onPage",a)},onNext:()=>{console.log("onNext")},onBack:()=>{console.log("onBack")},onPageSize:a=>{console.log("onPageSize",a)},isFirst:e.isFirst,numberOfElements:e.numberOfElements,page:e.page,isLast:e.isLast,pageSize:10,totalElements:5,totalPages:e.totalPages,variant:e.variant}),t={args:{numberOfElements:100,totalPages:100,isLast:!1,isFirst:!1,page:1,variant:"alternative"}};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    numberOfElements: 100,
    totalPages: 100,
    isLast: false,
    isFirst: false,
    page: 1,
    variant: 'alternative'
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,u as default};
