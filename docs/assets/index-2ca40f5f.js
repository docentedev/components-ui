import{a as t,j as o,F as a}from"./jsx-runtime-fd534075.js";import{M as m,C as d,d as p,b as s}from"./index-215c0640.js";import{T as c,D as l}from"./index.stories-e2239ee9.js";import{a as h}from"./index-6d969d2d.js";import{u as n}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a77012ab.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";/* empty css              */import"./index-4924eb25.js";import"./index-1f462de8.js";import"./index-a6ca6792.js";import"./index-e60269c1.js";import"./index-94b86141.js";import"./index-11decf02.js";import"./index-65ca6685.js";import"./index-4cd4725f.js";import"./index-916970cd.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-b6ef4225.js";import"./index-9e68d7ed.js";import"./index-d70482d4.js";import"./index-4ca10a5a.js";import"./index-93971a4c.js";import"./index-02210d9f.js";import"./index-6bf6aae2.js";import"./index-7ea187ef.js";import"./index-bbea82d2.js";import"./index-ab062b08.js";import"./index-63de68db.js";function i(r){const e=Object.assign({h1:"h1",h2:"h2",code:"code",p:"p",em:"em",strong:"strong"},n(),r.components);return o(a,{children:[t(m,{of:c}),`
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
