import{a as t,j as i,F as s}from"./jsx-runtime-fd534075.js";import{M as m,C as p,d as a,b as c}from"./index-2f98a2ae.js";import{S as l,D as u}from"./index.stories-2670a7fb.js";import{u as n}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8a3e7a10.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-dc4f2b77.js";/* empty css              */import"./index-f47ec35d.js";import"./index-a2847f9e.js";import"./index-14804970.js";import"./index-ca44b1cf.js";import"./index-4fc2b7e7.js";import"./index-74add701.js";import"./index-6af905a4.js";import"./index-76a81699.js";import"./index-14b9dad8.js";import"./index-157d83f6.js";import"./index-65ca6685.js";import"./index-4cd4725f.js";import"./index-c5d0c57d.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-b6ef4225.js";import"./index-d70482d4.js";import"./index-20539f11.js";import"./index-08704a47.js";import"./index-7337abe7.js";import"./index-7ea187ef.js";import"./index-63de68db.js";function e(o){const r=Object.assign({h1:"h1"},n(),o.components);return i(s,{children:[t(r.h1,{id:"dropdownasync",children:"DropdownAsync"}),`
`,t(m,{of:l}),`
`,t(p,{of:u}),`
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
`})]})}function V(o={}){const{wrapper:r}=Object.assign({},n(),o.components);return r?t(r,Object.assign({},o,{children:t(e,o)})):e(o)}export{V as default};
