import{a as r,F as i}from"./jsx-runtime-fd534075.js";import{T as l}from"./index-a349e7e6.js";import{a as d}from"./stories.utils-47d76ce5.js";const m=["small","small-bold","tag","regular","body2","silent","","title-section","regular-bold","description","bold","accordion","modal","subtitle2","subtitle","medium-bold"],p={title:"DEPRECADOS/Text",component:l,argTypes:{tag:{options:["h1","h2","h3","h4","h5","h6","p","span"],control:{type:"select"}},color:{control:{type:"color"}}},render:t=>r(u,{...t})},u=t=>(console.warn("TextStory is deprecated, use Text2 instead"),r(i,{children:m.map((o,c)=>r(l,{variant:o,...t,children:o||"default"},c))})),e={args:{children:d}};var a,s,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: testShortText1
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const h=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:h,default:p},Symbol.toStringTag,{value:"Module"}));export{e as D,b as T};
