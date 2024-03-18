import{a as t,j as r,F as a}from"./jsx-runtime-fd534075.js";import{M as p,b as s,C as m}from"./index-8a9f549c.js";import{C as c,D as l}from"./index.stories-e51d3349.js";import{a as d}from"./index-53f7d415.js";import{u as n}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-03f9122a.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-1ccd7e07.js";import"./index-05b6c1af.js";import"./index-e6869820.js";import"./index.utils-95bde099.js";import"./index-ff4aa035.js";import"./index-30ffb6e6.js";import"./index-ca44b1cf.js";import"./index-4fc2b7e7.js";import"./index-02210d9f.js";import"./index-6bd01036.js";import"./index-d5206190.js";import"./index-14b9dad8.js";import"./index-f266b5ae.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-64633bf2.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-c2412459.js";import"./index-7ea187ef.js";import"./index-63de68db.js";function i(e){const o=Object.assign({h2:"h2",em:"em",strong:"strong",p:"p",code:"code"},n(),e.components);return r(a,{children:[t(p,{of:c}),`
`,r(o.h2,{id:"paginationes-deprecado",children:["PaginationEs ",t(o.em,{children:t(o.strong,{children:"Deprecado"})})]}),`
`,t(d,{variant:"warning",children:"Deprecado"}),`
`,r(o.p,{children:["Este componente sera eliminado el ",t(o.em,{children:t(o.strong,{children:"01-01-2024"})})," ya que el componente ",t(o.code,{children:"<Pagination>"})," puede hacer lo mismo y es mas extensible."]}),`
`,r(o.p,{children:["Adaptar props que recibe ",t(o.code,{children:"<PaginationEs>"})," para utilizar ",t(o.code,{children:"<Pagination>"})]}),`
`,t(s,{code:`
const page = Math.floor(props.from / props.size + 1);
const totalPages = Math.ceil((props.total || 0) / props.size);
return (
    <Pagination
        onPage={props.onPage}
        onNext={props.onNext}
        onBack={props.onBack}
        onPageSize={props.onPageSize}
        isFirst={page === 1}
        numberOfElements={props.currentRow}
        page={page}
        isLast={page === totalPages}
        pageSize={props.size}
        totalElements={props.total}
        totalPages={totalPages}
        variant="alternative"
    />
);
`}),`
`,t(m,{of:l})]})}function V(e={}){const{wrapper:o}=Object.assign({},n(),e.components);return o?t(o,Object.assign({},e,{children:t(i,e)})):i(e)}export{V as default};
