import{a as e,j as t,F as d}from"./jsx-runtime-fd534075.js";import{M as m,C as s,d as c,b as p}from"./index-44f4705f.js";import{T as l,D as h}from"./index.stories-67121b7a.js";import{a as n}from"./index-d7269e6f.js";import{u as a}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-e7392f3c.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-d2e5c41a.js";import"./index-9d98dfe9.js";import"./index-2ed377c9.js";import"./index-9499902f.js";import"./index.utils-3332eaf1.js";import"./index-177d311a.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-a349e7e6.js";import"./index-ae9d3e9c.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-fb1d49a2.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-68e553b9.js";import"./index-c2412459.js";import"./index-7ea187ef.js";function i(o){const r=Object.assign({h1:"h1",h2:"h2",code:"code",p:"p",em:"em",strong:"strong"},a(),o.components);return t(d,{children:[e(m,{of:l}),`
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