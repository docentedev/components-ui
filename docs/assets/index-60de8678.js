import{a as t,j as e,F as a}from"./jsx-runtime-fd534075.js";import{M as m,b as p,C as d,d as s}from"./index-18678539.js";import{T as c,D as l}from"./index.stories-0090b592.js";import{a as h}from"./index-7c9df322.js";import{u as n}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-7118f9c8.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";/* empty css              */import"./index-f839dbf0.js";import"./index-8c490440.js";import"./index-ac710f84.js";import"./index-e60269c1.js";import"./index-1335fada.js";import"./index-889a47fb.js";import"./index-6eca483b.js";import"./index-89aa9bbc.js";import"./index-65ca6685.js";import"./index-4cd4725f.js";import"./index-d2c7445a.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-c29d1954.js";import"./index-354a9bc7.js";import"./index-dc21327b.js";import"./index-3f0062ba.js";import"./index-d70482d4.js";import"./index-d49d0512.js";import"./index-5bc492e7.js";import"./index-02210d9f.js";import"./index-6bf6aae2.js";import"./index-ca290e2a.js";import"./index-2603f033.js";import"./index-393e06c0.js";import"./index-34d356be.js";import"./index-46240f13.js";import"./index-63de68db.js";function i(o){const r=Object.assign({h2:"h2",code:"code",p:"p",em:"em",strong:"strong"},n(),o.components);return e(a,{children:[t(m,{of:c}),`
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
