import{a as e,j as l}from"./jsx-runtime-fd534075.js";import{e as p,c as v,w as b,T as i}from"./index-802fa064.js";import{r as g}from"./index-0cbcd92a.js";import{S as h,C as D}from"./index-1cb3dc45.js";import{C as y}from"./index-f5215caf.js";import{I as E}from"./index-491d176f.js";import{P as T}from"./index-4d9d89a7.js";const A={title:"Table",component:p,argTypes:{variant:{options:["","bordered","striped","light"],control:{type:"select"},value:"",description:"Variante"},loading:{control:"boolean",value:!1,description:"Cargando"},withHeader:{control:"boolean",value:!0,description:"Con encabezado"}},render:t=>e(R,{...t})},R=t=>{const[s,S]=g.useState(!1),[m,u]=g.useState(),[n,d]=g.useState([{name:"John Doe",age:30,email:"john@example.com",city:"New York",status:"Active",check:!1},{name:"Jane Smith",age:28,email:"jane@example.com",city:"San Francisco",status:"Active",check:!1},{name:"Michael Johnson",age:35,email:"michael@example.com",city:"Chicago",status:"Active",check:!1},{name:"Emma Watson",age:32,email:"emma@example.com",city:"London",status:"Active",check:!1},{name:"Robert Brown",age:40,email:"robert@example.com",city:"Toronto",status:"Active",check:!1}]);return l("div",{children:[l(v,{onClick:()=>S(!s),children:[s?"Desactivar":"Activar"," DragAndDrop"]}),e(h,{}),e(p,{withHeader:t.withHeader,loading:t.loading,onDragEnd:s?d:void 0,onSort:console.log,data:n,onClickRow:u,getClassNameRow:o=>{let a="";return o.check&&(a+=` ${b}`),a.trim()},columns:[{key:"name",label:"Name",renderRow:(o,a)=>e("div",{children:e(y,{checked:n[a].check,onChange:r=>{d(w=>{const k=[...w];return k[a].check=r,k})}})}),renderHead:()=>e("div",{children:e(y,{checked:n.every(o=>o.check),onChange:()=>{const o=n.every(a=>a.check);d(a=>a.map(r=>({...r,check:!o})))},icon:e(E,{name:"Eye"})})})},{key:"name",label:"Name",sort:{ascText:"ASC",descText:"DESC"}},{key:"age",label:"Age"},{key:"email",label:"Email"},{key:"city",label:"City"},{key:"status",label:"Status",tdStyle:{textDecoration:"underline"},renderRow:(o,a)=>e(i,{color:"--components-ui-color-danger",children:o.status},a)},{key:"Collapsible",label:"Collapsible",renderRow:(o,a,r)=>e("div",{children:e(v,{onClick:()=>r(),children:"Collapse"})})}],renderCollapse:(o,a)=>e("div",{children:l(i,{children:["Row Collapsed ",o.email," | ",a]})}),variant:t.variant}),l("div",{children:[l(i,{children:["Elemento seleccionado: ",m==null?void 0:m.name]}),l(i,{children:["Elementos seleccionados: ",n.filter(o=>o.check).length]})]}),e(h,{}),e(i,{children:"Ejemplo Tabla Ligth + Card, Pagination, Divider"}),e("div",{style:{backgroundColor:"var(--components-ui-color-primary-high-contrast-solid)",padding:"var(--components-ui-spacing-m)"},children:l(D,{padding:"xs",children:[e(p,{withHeader:t.withHeader,loading:t.loading,onDragEnd:s?d:void 0,onSort:console.log,data:n,onClickRow:u,getClassNameRow:o=>{let a="";return o.check&&(a+=` ${b}`),a.trim()},columns:[{key:"name",label:"Name",sort:{ascText:"ASC",descText:"DESC"}},{key:"age",label:"Age"},{key:"email",label:"Email"},{key:"city",label:"City"}],variant:t.variant}),e(h,{variant:"space",height:"2xs"}),e(T,{onPage:console.log,onNext:console.log,onBack:console.log,onPageSize:console.log,isFirst:!1,numberOfElements:10,page:1,isLast:!1,pageSize:10,totalElements:100,totalPages:10,variant:"light"})]})})]})},c={args:{variant:"light",loading:!1,withHeader:!0}};var C,f,x;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    loading: false,
    withHeader: true
  }
}`,...(x=(f=c.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const N=["Default"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:c,__namedExportsOrder:N,default:A},Symbol.toStringTag,{value:"Module"}));export{c as D,J as T};
