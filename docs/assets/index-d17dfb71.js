import{a as e,j as t,F as d}from"./jsx-runtime-fd534075.js";import{M as m,C as s,d as c,b as p}from"./index-3c33a8ee.js";import{T as l,D as h}from"./index.stories-3a89449f.js";import{a as n}from"./index-2b2803fd.js";import{u as a}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-90ce562a.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-45b89812.js";import"./index-491d176f.js";import"./index-f5215caf.js";import"./index-4d9d89a7.js";import"./index.utils-3332eaf1.js";import"./index-86b246da.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-b0d341b5.js";import"./index-8a756933.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-ec542e9c.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-f889b5a8.js";import"./index-c2412459.js";import"./index-7ea187ef.js";function i(o){const r=Object.assign({h1:"h1",h2:"h2",code:"code",p:"p",em:"em",strong:"strong"},a(),o.components);return t(d,{children:[e(m,{of:l}),`
`,e(r.h1,{id:"table",children:"Table"}),`
`,e(s,{of:h}),`
`,e(c,{}),`
`,e(r.h2,{id:"propiedades",children:"Propiedades"}),`
`,t(n,{variant:"warning",children:[e(r.code,{children:'variant="secondary"'})," cambia a ",e(r.code,{children:'variant="bordered"'})]}),`
`,e("br",{}),`
`,t(n,{variant:"warning",children:[e(r.code,{children:"renderCollapse"})," no es compatible con ",e(r.code,{children:"DragAndDrop=true"})]}),`
`,t(r.p,{children:["La propiedad ",e(r.code,{children:"secondary"})," será eliminada el ",e(r.em,{children:e(r.strong,{children:"01-01-2024"})}),", ya que ",e(r.code,{children:"bordered"})," es un nombre más común y consistente"]}),`
`,e(r.h2,{id:"ejemplo-draggable",children:"Ejemplo draggable"}),`
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
`})]})}function Q(o={}){const{wrapper:r}=Object.assign({},a(),o.components);return r?e(r,Object.assign({},o,{children:e(i,o)})):i(o)}export{Q as default};
