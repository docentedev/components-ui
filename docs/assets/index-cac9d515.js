import{a as t,j as o,F as a}from"./jsx-runtime-fd534075.js";import{M as m,C as d,d as p,b as s}from"./index-3f306a4a.js";import{T as c,D as l}from"./index.stories-18db5301.js";import{a as h}from"./index-36c5bea8.js";import{u as n}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-fe2fcba0.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-675c71d2.js";import"./index-4b18704d.js";import"./index-c968605b.js";import"./index-c7126f2e.js";import"./index-e5a77027.js";import"./index-dcb43436.js";import"./index.utils-95bde099.js";import"./index-43968a67.js";import"./index-86b246da.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-376fe70c.js";import"./index-8a756933.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-806e4c2d.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-c2f8ba28.js";import"./index-c2412459.js";import"./index-7ea187ef.js";import"./index-63de68db.js";function i(e){const r=Object.assign({h1:"h1",h2:"h2",code:"code",p:"p",em:"em",strong:"strong"},n(),e.components);return o(a,{children:[t(m,{of:c}),`
`,t(r.h1,{id:"table",children:"Table"}),`
`,t(d,{of:l}),`
`,t(p,{}),`
`,t(r.h2,{id:"propiedades",children:"Propiedades"}),`
`,o(h,{variant:"warning",children:[t(r.code,{children:'variant="secondary"'})," cambia a ",t(r.code,{children:'variant="bordered"'})]}),`
`,o(r.p,{children:["La propiedad ",t(r.code,{children:"secondary"})," será eliminada el ",t(r.em,{children:t(r.strong,{children:"01-01-2024"})}),", ya que ",t(r.code,{children:"bordered"})," es un nombre más común y consistente"]}),`
`,t(r.h2,{id:"ejemplo-draggable",children:"Ejemplo draggable"}),`
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
`})]})}function Y(e={}){const{wrapper:r}=Object.assign({},n(),e.components);return r?t(r,Object.assign({},e,{children:t(i,e)})):i(e)}export{Y as default};
