import{a as e,j as r,F as a}from"./jsx-runtime-fd534075.js";import{M as p,b as s,C as m}from"./index-b9b61d5d.js";import{C as c,D as l}from"./index.stories-bb03b0f3.js";import{a as d}from"./index-d0202530.js";import{u as i}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-4011b920.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-928b6006.js";import"./index-ecd4c93d.js";import"./index-df9449a8.js";import"./index.utils-3332eaf1.js";import"./index-74a01f7e.js";import"./index-e6f5c83c.js";import"./Easy-dac9347f.js";import"./index-74add701.js";import"./index-054e62f9.js";import"./index-d10b97d2.js";import"./index-442dd4a4.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-0ee9f2a0.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-d8af3c02.js";import"./index-7ea187ef.js";function n(t){const o=Object.assign({h2:"h2",em:"em",strong:"strong",p:"p",code:"code"},i(),t.components);return r(a,{children:[e(p,{of:c}),`
`,r(o.h2,{id:"paginationes-deprecado",children:["PaginationEs ",e(o.em,{children:e(o.strong,{children:"Deprecado"})})]}),`
`,e(d,{variant:"warning",children:"Deprecado"}),`
`,r(o.p,{children:["Este componente sera eliminado el ",e(o.em,{children:e(o.strong,{children:"01-01-2024"})})," ya que el componente ",e(o.code,{children:"<Pagination>"})," puede hacer lo mismo y es mas extensible."]}),`
`,r(o.p,{children:["Adaptar props que recibe ",e(o.code,{children:"<PaginationEs>"})," para utilizar ",e(o.code,{children:"<Pagination>"})]}),`
`,e(s,{code:`
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
`,e(m,{of:l})]})}function K(t={}){const{wrapper:o}=Object.assign({},i(),t.components);return o?e(o,Object.assign({},t,{children:e(n,t)})):n(t)}export{K as default};
