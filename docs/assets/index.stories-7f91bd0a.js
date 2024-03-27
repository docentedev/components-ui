import{a as e,j as l}from"./jsx-runtime-fd534075.js";import{r as i,c as s,a as u}from"./index-33342c81.js";import{r as m}from"./index-0cbcd92a.js";import{V as f}from"./index-63de68db.js";import{P as p}from"./index-889d04a6.js";const b={title:"Modal",component:i,argTypes:{animated:{control:"boolean",value:!1,description:"Animación",table:{defaultValue:{summary:!1}}},closeOnBackdrop:{control:"boolean",value:!1,description:"Cerrar con el fondo"},onClose:{control:!1,description:"Función que se ejecuta al cerrar el modal `(state: false) => void`"},open:{control:!1,description:"Indica si el modal está abierto"}},render:a=>e(h,{...a})},h=a=>{const[d,o]=m.useState(!1);return l("div",{children:[e(s,{onClick:()=>o(!0),children:"Open"}),l(i,{animated:a.animated,closeOnBackdrop:a.closeOnBackdrop,onClose:o,open:d,header:a.header,children:[e("br",{}),e(u,{variant:"error",children:"Error fatal"}),e("br",{}),e(f,{data:[{label:"Hora",value:"18:34 05/11/2023"},{label:"Usuario",value:"claudio.rojasrodriguez@cencosud.cl"},{label:"Servicio",value:"https://daas.ecomm-stg.cencosud.com/daas-bff/v1/auth/userinfo"},{label:"código",value:"500"},{label:"respuesta",value:`{
            message: 'Error ring balancer'
          }`},{label:"Servicio",value:"https://daas.ecomm-stg.cencosud.com/daas-bff/v1/auth/userinfo"}]}),e("br",{}),e(p,{alignItems:"end",children:e(s,{onClick:()=>{},children:"Cerrar"})})]})]})},r={args:{header:"Error",children:"Children",animated:!1,closeOnBackdrop:!1}};var n,t,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    header: 'Error',
    children: 'Children',
    animated: false,
    closeOnBackdrop: false
  }
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const v=["Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:v,default:b},Symbol.toStringTag,{value:"Module"}));export{r as D,S as M};
