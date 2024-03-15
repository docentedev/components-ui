import{a as t,j as i,F as s}from"./jsx-runtime-fd534075.js";import{M as m,C as p,d as a,b as c}from"./index-1f75c1bb.js";import{S as l,D as u}from"./index.stories-eb66efe3.js";import{u as n}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-0e572e29.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-e24ddbe1.js";import"./index.utils-95bde099.js";import"./index-8a00b300.js";import"./index-e5a77027.js";import"./index-03eabb6a.js";import"./index-675c71d2.js";import"./index-9e68d7ed.js";import"./index-02210d9f.js";import"./index-fee28c14.js";import"./index-00cdc0ac.js";import"./index-94b86141.js";import"./index-598450d7.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-162d25a7.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-31581a85.js";import"./index-41ef4200.js";import"./index-c2412459.js";import"./index-7ea187ef.js";import"./index-63de68db.js";function e(o){const r=Object.assign({h1:"h1"},n(),o.components);return i(s,{children:[t(r.h1,{id:"dropdownasync",children:"DropdownAsync"}),`
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
