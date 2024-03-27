import{j as l,a as t}from"./jsx-runtime-fd534075.js";import{f as n,c as s}from"./index-802fa064.js";import{r as m}from"./index-0cbcd92a.js";import"./index.utils-7a3c7e37.js";import"./index-1cb3dc45.js";import"./index-491d176f.js";import"./index-86b246da.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-7145721c.js";import"./index-8a756933.js";import"./index-af5faa0b.js";import"./_commonjsHelpers-de833af9.js";import"./index-f5215caf.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-1b748be7.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-4d9d89a7.js";import"./index-7d5763aa.js";import"./index-c2412459.js";import"./index-7ea187ef.js";import"./index-63de68db.js";const q={title:"Collapsible",component:n,tags:["autodocs"],argTypes:{children:{control:{type:["text","JSX.element","React.Node"]},description:"Contenido del collapsible"},open:{control:{type:"boolean"},description:"Estado del collapsible"}}},o=()=>{const[e,a]=m.useState(!1);return l("div",{children:[t(s,{onClick:()=>a(!e),children:"Toggle Collapsible"})," ",t(n,{open:e,children:"children"})]})};var r,p,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false); // Estado local para controlar la propiedad open

  return <div>
            <Button onClick={() => setOpen(!open)}>Toggle Collapsible</Button> {/* Botón para alternar el estado de open */}
            <Collapsible open={open} children={'children'} />
        </div>;
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const w=["Default"];export{o as Default,w as __namedExportsOrder,q as default};
