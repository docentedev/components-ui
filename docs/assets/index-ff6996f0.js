import{a as t,j as i,F as s}from"./jsx-runtime-fd534075.js";import{M as m,C as p,d as a,b as c}from"./index-6cd858b8.js";import{S as l,D as u}from"./index.stories-959ab2a4.js";import{u as n}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-3473f414.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-91d4c449.js";import"./index.utils-3332eaf1.js";import"./index-db201866.js";import"./index-ad006f62.js";import"./index-86b246da.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-04131042.js";import"./index-8a756933.js";import"./index-5c6928f4.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-d2d58efd.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-f304dd21.js";import"./index-9bf58fc3.js";import"./index-c2412459.js";import"./index-7ea187ef.js";function r(o){const e=Object.assign({h1:"h1"},n(),o.components);return i(s,{children:[t(e.h1,{id:"dropdownasync",children:"DropdownAsync"}),`
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
`})]})}function P(o={}){const{wrapper:e}=Object.assign({},n(),o.components);return e?t(e,Object.assign({},o,{children:t(r,o)})):r(o)}export{P as default};
