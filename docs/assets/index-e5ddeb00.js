import{a as e,j as o,F as a}from"./jsx-runtime-fd534075.js";import{M as m,C as d,d as s,b as p}from"./index-1bcb5790.js";import{T as c,D as l}from"./index.stories-054d6caf.js";import{a as h}from"./index-33342c81.js";import{u as i}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-fda31793.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-1cb3dc45.js";import"./index-491d176f.js";import"./index-f5215caf.js";import"./index-4d9d89a7.js";import"./index.utils-7a3c7e37.js";import"./index-86b246da.js";import"./Easy-dac9347f.js";import"./index-889d04a6.js";import"./index-9e73ad88.js";import"./index-8a756933.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-1b748be7.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-7d5763aa.js";import"./index-c2412459.js";import"./index-181649f6.js";import"./index-63de68db.js";function n(r){const t=Object.assign({h1:"h1",h2:"h2",code:"code",p:"p",em:"em",strong:"strong"},i(),r.components);return o(a,{children:[e(m,{of:c}),`
`,e(t.h1,{id:"table",children:"Table"}),`
`,e(d,{of:l}),`
`,e(s,{}),`
`,e(t.h2,{id:"propiedades",children:"Propiedades"}),`
`,o(h,{variant:"warning",children:[e(t.code,{children:'variant="secondary"'})," cambia a ",e(t.code,{children:'variant="bordered"'})]}),`
`,o(t.p,{children:["La propiedad ",e(t.code,{children:"secondary"})," será eliminada el ",e(t.em,{children:e(t.strong,{children:"01-01-2024"})}),", ya que ",e(t.code,{children:"bordered"})," es un nombre más común y consistente"]}),`
`,e(t.h2,{id:"ejemplo-draggable",children:"Ejemplo draggable"}),`
`,e(p,{code:`
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
`})]})}function R(r={}){const{wrapper:t}=Object.assign({},i(),r.components);return t?e(t,Object.assign({},r,{children:e(n,r)})):n(r)}export{R as default};
