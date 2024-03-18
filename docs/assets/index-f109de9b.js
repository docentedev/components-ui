import{a as t,j as i,F as s}from"./jsx-runtime-fd534075.js";import{M as m,C as p,d as a,b as c}from"./index-8a9f549c.js";import{S as l,D as u}from"./index.stories-113f85fc.js";import{u as n}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-03f9122a.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-53f7d415.js";import"./index.utils-95bde099.js";import"./index-ff4aa035.js";import"./index-30ffb6e6.js";import"./index-e6869820.js";import"./index-ca44b1cf.js";import"./index-4fc2b7e7.js";import"./index-02210d9f.js";import"./index-6bd01036.js";import"./index-d5206190.js";import"./index-14b9dad8.js";import"./index-f266b5ae.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-64633bf2.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-05b6c1af.js";import"./index-1ccd7e07.js";import"./index-c2412459.js";import"./index-7ea187ef.js";import"./index-63de68db.js";function e(o){const r=Object.assign({h1:"h1"},n(),o.components);return i(s,{children:[t(r.h1,{id:"dropdownasync",children:"DropdownAsync"}),`
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
