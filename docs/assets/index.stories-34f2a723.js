import{a as i,j as t}from"./jsx-runtime-fd534075.js";import{r as a}from"./index-0cbcd92a.js";import{n as p,b as O,c as d}from"./index-d7269e6f.js";import{S as f}from"./index-d2e5c41a.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-3332eaf1.js";import"./index-177d311a.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-9d98dfe9.js";import"./index-a349e7e6.js";import"./index-ae9d3e9c.js";import"./index-af5faa0b.js";import"./index-2ed377c9.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-fb1d49a2.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-9499902f.js";import"./index-68e553b9.js";import"./index-c2412459.js";import"./index-7ea187ef.js";const C=[{checked:!1,value:"Option 1",label:"Option 1",disabled:!0},{checked:!1,value:"Option 2",label:"Option 2"},{checked:!1,value:"Option 3",label:"Option 3"},{checked:!1,value:"Option 4",label:"Option 4"},{checked:!1,value:"Option 5",label:"Option 5"},{checked:!0,value:"Option 6",label:"Option 6"},{checked:!1,value:"Option 7",label:"Option 7"},{checked:!0,value:"Option 8",label:"Option 8"},{checked:!1,value:"Option 9",label:"Option 9"},{checked:!1,value:"Option 10",label:"Option 10"}],R={title:"Components/DropdownCheckbox",component:p,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},maxSelections:{control:"number"},hint:{control:"text"},label:{control:"text"},textSelectAll:{control:"text"},textCountSelected:{control:"text"},textCountSelectedOne:{control:"text"},disabledSelectAll:{control:"boolean",description:'Deshabilita el checkbox interno del dropdown "select all"'},onChange:{control:null,description:"Función `(option: DropdownCheckboxOption[], name?: string) => void`"},options:{control:null,description:"Arreglo `(option: DropdownCheckboxOption[]) => []`"},hiddenCountAllSelected:{control:"boolean",description:"Oculta el contador de elementos seleccionados"},size:{control:"select",options:["s","m"],description:"Tamaño del dropdown",table:{defaultValue:{summary:"m"}}}},render:e=>i(A,{...e})},A=e=>{const[o,u]=a.useState(!1),[S,b]=a.useState(C),[n,h]=a.useState(!1),x=()=>{h(!n)};return t("form",{onSubmit:c=>{c.preventDefault(),console.log(c)},children:[i(p,{options:S,onChange:b,disabled:e.disabled,label:e.label,selectOnlyFiltered:n,searchable:!0,maxSelections:o?e.maxSelections:void 0,hint:e.hint,textSelectAll:e.textSelectAll,textCountSelected:e.textCountSelected,textCountSelectedOne:e.textCountSelectedOne,hiddenCountAllSelected:e.hiddenCountAllSelected,disabledSelectAll:e.disabledSelectAll,size:e.size}),i(f,{}),t(O,{children:[t(d,{type:"button",onClick:()=>u(!o),variant:"secondary",children:["Seleccion máxima ",o?"activada":"desactivada"]}),t(d,{variant:"secondary",type:"button",onClick:x,children:["Busca ",n?"en todos":"solo en"," los elementos filtrados"]})]})]})},l={args:{disabled:!1,maxSelections:3,hint:"This is a hint",label:"Dropdown",textSelectAll:"Select All",textCountSelected:"Selected elements",textCountSelectedOne:"Selected element",hiddenCountAllSelected:!1,disabledSelectAll:!1,size:"m"}};var s,r,m;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    disabled: false,
    maxSelections: 3,
    hint: 'This is a hint',
    label: 'Dropdown',
    textSelectAll: 'Select All',
    textCountSelected: 'Selected elements',
    textCountSelectedOne: 'Selected element',
    hiddenCountAllSelected: false,
    disabledSelectAll: false,
    size: 'm'
  }
}`,...(m=(r=l.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const U=["Default"];export{l as Default,U as __namedExportsOrder,R as default};