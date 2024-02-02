import{a as t,j as r,F as p}from"./jsx-runtime-fd534075.js";import{M as a,b as m,C as s}from"./index-b6b4cca6.js";import{C as c,D as l}from"./index.stories-d74d7eac.js";import{a as d}from"./index-74d53e7d.js";import{u as n}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-5972cfdf.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-5bc492e7.js";import"./index-d49d0512.js";import"./index-ac710f84.js";/* empty css              */import"./index-b69c5657.js";import"./index-1f462de8.js";import"./index-e60269c1.js";import"./index-6b594bd1.js";import"./index-1335fada.js";import"./index-4efeca71.js";import"./index-84dc9bf1.js";import"./index-89aa9bbc.js";import"./index-65ca6685.js";import"./index-4cd4725f.js";import"./index-d2c7445a.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-715a186d.js";import"./index-c2c34387.js";import"./index-76e7f10d.js";import"./index-3f0062ba.js";import"./index-d70482d4.js";import"./index-02210d9f.js";import"./index-6bf6aae2.js";import"./index-ca290e2a.js";import"./index-6aca9980.js";import"./index-a3671747.js";import"./index-cf5f524c.js";import"./index-63de68db.js";function i(e){const o=Object.assign({h2:"h2",em:"em",strong:"strong",p:"p",code:"code"},n(),e.components);return r(p,{children:[t(a,{of:c}),`
`,r(o.h2,{id:"paginationes-deprecado",children:["PaginationEs ",t(o.em,{children:t(o.strong,{children:"Deprecado"})})]}),`
`,t(d,{variant:"warning",children:"Deprecado"}),`
`,r(o.p,{children:["Este componente sera eliminado el ",t(o.em,{children:t(o.strong,{children:"01-01-2024"})})," ya que el componente ",t(o.code,{children:"<Pagination>"})," puede hacer lo mismo y es mas extensible."]}),`
`,r(o.p,{children:["Adaptar props que recibe ",t(o.code,{children:"<PaginationEs>"})," para utilizar ",t(o.code,{children:"<Pagination>"})]}),`
`,t(m,{code:`
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
`,t(s,{of:l})]})}function to(e={}){const{wrapper:o}=Object.assign({},n(),e.components);return o?t(o,Object.assign({},e,{children:t(i,e)})):i(e)}export{to as default};
