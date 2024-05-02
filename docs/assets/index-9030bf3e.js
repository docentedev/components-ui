import{a as t,j as i,F as s}from"./jsx-runtime-fd534075.js";import{M as m,C as p,d as a,b as c}from"./index-4639f8ab.js";import{S as l,D as u}from"./index.stories-7f8efcea.js";import{u as n}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-9b1f7584.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-a6780084.js";import"./index.utils-3332eaf1.js";import"./index-d96b9dfe.js";import"./index-2922d105.js";import"./index-be75c763.js";import"./Easy-dac9347f.js";import"./index-889d04a6.js";import"./index-3afd175f.js";import"./index-ae9d3e9c.js";import"./index-b184faa2.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-b44cf4c5.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-e6b5a189.js";import"./index-cce712fb.js";import"./index-c2412459.js";import"./index-181649f6.js";function r(o){const e=Object.assign({h1:"h1"},n(),o.components);return i(s,{children:[t(e.h1,{id:"dropdownasync",children:"DropdownAsync"}),`
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
