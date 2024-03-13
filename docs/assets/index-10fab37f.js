import{a as t,j as o,F as a}from"./jsx-runtime-fd534075.js";import{M as m,C as d,d as p,b as s}from"./index-3120218f.js";import{T as c,D as l}from"./index.stories-ef25a82d.js";import{a as h}from"./index-ff2e5c33.js";import{u as n}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-277b8629.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-ca44b1cf.js";import"./index-598450d7.js";import"./index-03eabb6a.js";import"./index-d0b2ccd2.js";import"./index-30ffb6e6.js";import"./index-31581a85.js";import"./index.utils-ca00242a.js";import"./index-76765168.js";import"./index-9e68d7ed.js";import"./index-02210d9f.js";import"./index-eb56d1ae.js";import"./index-94b86141.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-162d25a7.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-41ef4200.js";import"./index-6bf6aae2.js";import"./index-7ea187ef.js";import"./index-63de68db.js";function i(r){const e=Object.assign({h1:"h1",h2:"h2",code:"code",p:"p",em:"em",strong:"strong"},n(),r.components);return o(a,{children:[t(m,{of:c}),`
`,t(e.h1,{id:"table",children:"Table"}),`
`,t(d,{of:l}),`
`,t(p,{}),`
`,t(e.h2,{id:"propiedades",children:"Propiedades"}),`
`,o(h,{variant:"warning",children:[t(e.code,{children:'variant="secondary"'})," cambia a ",t(e.code,{children:'variant="bordered"'})]}),`
`,o(e.p,{children:["La propiedad ",t(e.code,{children:"secondary"})," será eliminada el ",t(e.em,{children:t(e.strong,{children:"01-01-2024"})}),", ya que ",t(e.code,{children:"bordered"})," es un nombre más común y consistente"]}),`
`,t(e.h2,{id:"ejemplo-draggable",children:"Ejemplo draggable"}),`
`,t(s,{code:`
type Item = {
    id: string;
};

const [data, setData] = useState([{ id: 1 }, { id: 2 }]);
const handleDragEnd = (items: Item[]) => setData(items);

<Table<Item>
    onDragEnd={handleDragEnd}
    data={data}
    columns={[{ key: 'id', label: '#' }]}
/>
`})]})}function W(r={}){const{wrapper:e}=Object.assign({},n(),r.components);return e?t(e,Object.assign({},r,{children:t(i,r)})):i(r)}export{W as default};
