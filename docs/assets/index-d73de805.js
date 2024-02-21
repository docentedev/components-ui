import{a as t,j as i,F as s}from"./jsx-runtime-fd534075.js";import{M as m,C as p,d as a,b as c}from"./index-215c0640.js";import{S as l,D as u}from"./index.stories-b142e1aa.js";import{u as n}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a77012ab.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-6d969d2d.js";/* empty css              */import"./index-4924eb25.js";import"./index-1f462de8.js";import"./index-a6ca6792.js";import"./index-e60269c1.js";import"./index-bbea82d2.js";import"./index-ab062b08.js";import"./index-94b86141.js";import"./index-11decf02.js";import"./index-65ca6685.js";import"./index-4cd4725f.js";import"./index-916970cd.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-b6ef4225.js";import"./index-9e68d7ed.js";import"./index-d70482d4.js";import"./index-4ca10a5a.js";import"./index-93971a4c.js";import"./index-02210d9f.js";import"./index-6bf6aae2.js";import"./index-7ea187ef.js";import"./index-63de68db.js";function e(o){const r=Object.assign({h1:"h1"},n(),o.components);return i(s,{children:[t(r.h1,{id:"dropdownasync",children:"DropdownAsync"}),`
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
