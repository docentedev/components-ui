import{a as t,j as e,F as a}from"./jsx-runtime-fd534075.js";import{M as m,b as p,C as d,d as s}from"./index-b2fae62b.js";import{T as c,D as l}from"./index.stories-4c836bb3.js";import{a as h}from"./index-5920427d.js";import{u as n}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-4909f33d.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";/* empty css              */import"./index-b69c5657.js";import"./index-1f462de8.js";import"./index-ac710f84.js";import"./index-e60269c1.js";import"./index-1335fada.js";import"./index-4efeca71.js";import"./index-84dc9bf1.js";import"./index-0a038c6a.js";import"./index-65ca6685.js";import"./index-4cd4725f.js";import"./index-d2c7445a.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-715a186d.js";import"./index-c2c34387.js";import"./index-76e7f10d.js";import"./index-3f0062ba.js";import"./index-d70482d4.js";import"./index-d49d0512.js";import"./index-5bc492e7.js";import"./index-02210d9f.js";import"./index-6bf6aae2.js";import"./index-4fc4b7c9.js";import"./index-e3733ed1.js";import"./index-e3980581.js";import"./index-a3671747.js";import"./index-cf5f524c.js";import"./index-63de68db.js";function i(o){const r=Object.assign({h2:"h2",code:"code",p:"p",em:"em",strong:"strong"},n(),o.components);return e(a,{children:[t(m,{of:c}),`
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
