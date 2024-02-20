import{a as t,j as n,F as m}from"./jsx-runtime-fd534075.js";import{M as p,C as s,d as a,b as c}from"./index-504ed063.js";import{S as l,D as u}from"./index.stories-1e2ad7a5.js";import{u as i}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-fb498242.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-a81e9901.js";/* empty css              */import"./index-964f190d.js";import"./index-528324a4.js";import"./index-ac710f84.js";import"./index-e60269c1.js";import"./index-6f94d456.js";import"./index-005ec9a1.js";import"./index-94b86141.js";import"./index-287b9535.js";import"./index-07b437fe.js";import"./index-89aa9bbc.js";import"./index-65ca6685.js";import"./index-4cd4725f.js";import"./index-d2c7445a.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-c29d1954.js";import"./index-354a9bc7.js";import"./index-dc21327b.js";import"./index-3f0062ba.js";import"./index-d70482d4.js";import"./index-d49d0512.js";import"./index-5bc492e7.js";import"./index-889d04a6.js";import"./index-6bf6aae2.js";import"./index-181649f6.js";import"./index-886936c1.js";import"./index-c29c2bb6.js";import"./index-63de68db.js";function e(o){const r=Object.assign({h1:"h1"},i(),o.components);return n(m,{children:[t(r.h1,{id:"dropdownasync",children:"DropdownAsync"}),`
`,t(p,{of:l}),`
`,t(s,{of:u}),`
`,t(a,{}),`
`,t(c,{code:`
const Component = () => {
  const [selected, setSelected] = useState<Option | null>({ label: 'Chile', value: 'CL' });
  const getOptions = async (query: string) => {
    return await find(query);
  }

  return(
    <DropdownAsync
        value={selected}
        getOptions={getOptions}
        onChange={setSelected}
        placeholder="Select a country"
        label="Country"
        textNoResults="No results found"
    />
  );
}
`})]})}function ot(o={}){const{wrapper:r}=Object.assign({},i(),o.components);return r?t(r,Object.assign({},o,{children:t(e,o)})):e(o)}export{ot as default};
