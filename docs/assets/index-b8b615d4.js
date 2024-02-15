import{a as t,j as n,F as m}from"./jsx-runtime-fd534075.js";import{M as p,C as s,d as a,b as c}from"./index-565c60c7.js";import{S as l,D as u}from"./index.stories-f94cc508.js";import{u as i}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-add7a930.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-17b58209.js";/* empty css              */import"./index-b69c5657.js";import"./index-1f462de8.js";import"./index-ac710f84.js";import"./index-e60269c1.js";import"./index-72b1a05a.js";import"./index-a95463fb.js";import"./index-1335fada.js";import"./index-4efeca71.js";import"./index-84dc9bf1.js";import"./index-89aa9bbc.js";import"./index-65ca6685.js";import"./index-4cd4725f.js";import"./index-d2c7445a.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-715a186d.js";import"./index-c2c34387.js";import"./index-76e7f10d.js";import"./index-3f0062ba.js";import"./index-d70482d4.js";import"./index-d49d0512.js";import"./index-5bc492e7.js";import"./index-02210d9f.js";import"./index-6bf6aae2.js";import"./index-7ea187ef.js";import"./index-a3671747.js";import"./index-cf5f524c.js";import"./index-63de68db.js";function e(o){const r=Object.assign({h1:"h1"},i(),o.components);return n(m,{children:[t(r.h1,{id:"dropdownasync",children:"DropdownAsync"}),`
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
