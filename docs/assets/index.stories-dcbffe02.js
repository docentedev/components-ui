import{a as e,j as l}from"./jsx-runtime-fd534075.js";import{r as u}from"./index-0cbcd92a.js";import{v as d,c as n,a as m,V as f}from"./index-26033f7c.js";import{P as p}from"./index-02210d9f.js";const b={title:"Components/Modal",component:d,argTypes:{animated:{control:"boolean",value:!1,description:"Animación",table:{defaultValue:{summary:!1}}},closeOnBackdrop:{control:"boolean",value:!1,description:"Cerrar con el fondo"},onClose:{control:!1,description:"Función que se ejecuta al cerrar el modal `(state: false) => void`"},open:{control:!1,description:"Indica si el modal está abierto"}},render:a=>e(h,{...a})},h=a=>{const[i,o]=u.useState(!1);return l("div",{children:[e(n,{onClick:()=>o(!0),children:"Open"}),l(d,{animated:a.animated,closeOnBackdrop:a.closeOnBackdrop,onClose:o,open:i,header:a.header,children:[e("br",{}),e(m,{variant:"error",children:"Error fatal"}),e("br",{}),e(f,{data:[{label:"Hora",value:"18:34 05/11/2023"},{label:"Usuario",value:"claudio.rojasrodriguez@cencosud.cl"},{label:"Servicio",value:"https://daas.ecomm-stg.cencosud.com/daas-bff/v1/auth/userinfo"},{label:"código",value:"500"},{label:"respuesta",value:`{
            message: 'Error ring balancer'
          }`},{label:"Servicio",value:"https://daas.ecomm-stg.cencosud.com/daas-bff/v1/auth/userinfo"}]}),e("br",{}),e(p,{alignItems:"end",children:e(n,{onClick:()=>{},children:"Cerrar"})})]})]})},r={args:{header:"Error",children:"Children",animated:!1,closeOnBackdrop:!1}};var s,t,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    header: 'Error',
    children: 'Children',
    animated: false,
    closeOnBackdrop: false
  }
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const v=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:v,default:b},Symbol.toStringTag,{value:"Module"}));export{r as D,k as M};
