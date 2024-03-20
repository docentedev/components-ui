import{a as t,j as i,F as m}from"./jsx-runtime-fd534075.js";import{M as p,C as s,d as a,b as c}from"./index-d1646609.js";import{S as l,D as u}from"./index.stories-1b36b83b.js";import{u as n}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-b1be707f.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-4b087e90.js";import"./index.utils-95bde099.js";import"./index-b6cc015e.js";import"./index-e5a77027.js";import"./index-e00338da.js";import"./index-675c71d2.js";import"./index-86b246da.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-912d6a24.js";import"./index-a07b4e80.js";import"./index-8a756933.js";import"./index-1021555e.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-0b607ab9.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-748e0ebf.js";import"./index-b3c58c2a.js";import"./index-c2412459.js";import"./index-7ea187ef.js";import"./index-63de68db.js";function e(o){const r=Object.assign({h1:"h1"},n(),o.components);return i(m,{children:[t(r.h1,{id:"dropdownasync",children:"DropdownAsync"}),`
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
`})]})}function W(o={}){const{wrapper:r}=Object.assign({},n(),o.components);return r?t(r,Object.assign({},o,{children:t(e,o)})):e(o)}export{W as default};
