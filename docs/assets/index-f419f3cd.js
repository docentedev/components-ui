import{a as e,j as r,F as a}from"./jsx-runtime-fd534075.js";import{M as p,b as s,C as m}from"./index-e29ff1dc.js";import{C as c,D as l}from"./index.stories-acc0f327.js";import{a as d}from"./index-ad557eac.js";import{u as i}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-09c38357.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-30c04a33.js";import"./index-1fcf8fa4.js";import"./index-cba1fa6c.js";import"./index.utils-3332eaf1.js";import"./index-065d0533.js";import"./index-be75c763.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-3a6668d7.js";import"./index-ae9d3e9c.js";import"./index-4b1b5381.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-855dbaba.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-c2412459.js";import"./index-7ea187ef.js";function n(t){const o=Object.assign({h2:"h2",em:"em",strong:"strong",p:"p",code:"code"},i(),t.components);return r(a,{children:[e(p,{of:c}),`
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