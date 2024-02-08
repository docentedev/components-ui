import{a as t,j as e,F as a}from"./jsx-runtime-fd534075.js";import{M as m,b as p,C as d,d as s}from"./index-009d5e2d.js";import{T as c,D as l}from"./index.stories-c4f78900.js";import{a as h}from"./index-544c1517.js";import{u as n}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-e1faa5fc.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";/* empty css              */import"./index-b6d2231d.js";import"./index-1f462de8.js";import"./index-637a0b9d.js";import"./index-e60269c1.js";import"./index-9d240acf.js";import"./index-8f766174.js";import"./index-84dc9bf1.js";import"./index-79643050.js";import"./index-65ca6685.js";import"./index-4cd4725f.js";import"./index-fe1f79b9.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-b43a95bf.js";import"./index-ff6583ff.js";import"./index-25efc564.js";import"./index-b8e17b4a.js";import"./index-d70482d4.js";import"./index-b110e266.js";import"./index-e468dd1b.js";import"./index-02210d9f.js";import"./index-6bf6aae2.js";import"./index-ca290e2a.js";import"./index-1dd3ce52.js";import"./index-ebebd9f2.js";import"./index-7cc21f4d.js";import"./index-ac69d7f1.js";import"./index-63de68db.js";function i(o){const r=Object.assign({h2:"h2",code:"code",p:"p",em:"em",strong:"strong"},n(),o.components);return e(a,{children:[t(m,{of:c}),`
`,t(r.h2,{id:"propiedades",children:"Propiedades"}),`
`,e(h,{variant:"warning",children:[t(r.code,{children:'variant="secondary"'})," cambia a ",t(r.code,{children:'variant="bordered"'})]}),`
`,e(r.p,{children:["La propiedad ",t(r.code,{children:"secondary"})," será eliminada el ",t(r.em,{children:t(r.strong,{children:"01-01-2024"})}),", ya que ",t(r.code,{children:"bordered"})," es un nombre más común y consistente"]}),`
`,t(r.h2,{id:"ejemplo-draggable",children:"Ejemplo draggable"}),`
`,t(p,{code:`
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
`}),`
`,t(d,{of:l}),`
`,t(s,{})]})}function ot(o={}){const{wrapper:r}=Object.assign({},n(),o.components);return r?t(r,Object.assign({},o,{children:t(i,o)})):i(o)}export{ot as default};
