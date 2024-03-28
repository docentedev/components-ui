import{a as e,j as r,F as a}from"./jsx-runtime-fd534075.js";import{M as u,C as n,d as s,b as t}from"./index-ef6c9905.js";import{T as m,B as p,D as d}from"./index.stories-12d0b10a.js";import{u as l}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-815b3b2c.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-d024abd6.js";import"./index.utils-9dacb6ca.js";import"./index-45b89812.js";import"./index-491d176f.js";import"./index-86b246da.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-c63b342a.js";import"./index-8a756933.js";import"./index-f5215caf.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-1b748be7.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-4d9d89a7.js";import"./index-7d5763aa.js";import"./index-c2412459.js";import"./index-7ea187ef.js";import"./index-63de68db.js";function c(i){const o=Object.assign({h1:"h1",h2:"h2",ol:"ol",li:"li",ul:"ul",code:"code"},l(),i.components);return r(a,{children:[e(u,{of:m}),`
`,e(o.h1,{id:"tourguide",children:"TourGuide"}),`
`,e(n,{of:p}),`
`,e(n,{of:d}),`
`,e(s,{of:d}),`
`,e(o.h2,{id:"instrucciones",children:"Instrucciones"}),`
`,r(o.ol,{children:[`
`,e(o.li,{children:"Para utilizar este componente es necesario importarlo de la siguiente manera:"}),`
`]}),`
`,r(o.ul,{children:[`
`,r(o.li,{children:[e(o.code,{children:"import { TourGuideProvider } from '@cencosud-cencommerce/components-ui'"}),`
Luego, se debe envolver la aplicación con el `,e(o.code,{children:"TourGuideProvider"})," y pasarle las tours que se desean utilizar."]}),`
`]}),`
`,e(t,{code:`
<TourGuideProvider tours={['flujo0']}>
  <App />
</TourGuideProvider>
`}),`
`,r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"Propiedad"}),e("th",{children:"Descripción"}),e("th",{children:"Tipo"}),e("th",{children:"Valores"}),e("th",{children:"Requerido"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"tours"}),e("td",{children:"Arreglo de tours que se desean utilizar"}),e("td",{children:"Array"}),e("td",{children:"['flujo0']"}),e("td",{children:"Si"})]}),r("tr",{children:[e("td",{children:"children"}),e("td",{children:"Componente hijo"}),e("td",{children:"ReactNode"}),e("td",{}),e("td",{children:"Si"})]})]})]}),`
`,r(o.ol,{start:"2",children:[`
`,r(o.li,{children:["Para utilizar el componente ",e(o.code,{children:"TourGuide"})," es necesario importarlo de la siguiente manera:"]}),`
`]}),`
`,r(o.ul,{children:[`
`,r(o.li,{children:["Lo unico que debe cambiar por cada paso es el valor de la propiedad ",e(o.code,{children:"step"}),", es un número entero que representa el paso actual."]}),`
`,r(o.li,{children:["Ademas se debe importar el hook ",e(o.code,{children:"useTourGuide"})," para obtener el tour que se desea utilizar."]}),`
`,r(o.li,{children:["La propiedad ",e(o.code,{children:"tour"})," conecta con el tour que se desea utilizar, en una misma vista se pueden utilizar varios tours."]}),`
`,e(o.li,{children:e(o.code,{children:"import { TourGuide, useTourGuide } from '@cencosud-cencommerce/components-ui'"})}),`
`]}),`
`,e(t,{code:`
const tour = useTourGuide('flujo0');

return (
  <TourGuide
    position="bottom"
    tour={tour}
    step={0}
    render={({ chip, onNext }) => (
      <>
        {chip}
        <Position marginTop={0.5} direction="column">
          <Text2>Contenido del tooltip del paso 1</Text2>
          <Illustration name="Category" />
        </Position>
        <Separator />
        <Decision
          onConfirm={onNext}
          textConfirm='Siguiente'
          variant="horizontal"
        />
      </>
    )}
  >
    <Button onClick={() => undefined} size="l">Elemento para foco del paso 1</Button>
  </TourGuide>
);
`})]})}function K(i={}){const{wrapper:o}=Object.assign({},l(),i.components);return o?e(o,Object.assign({},i,{children:e(c,i)})):c(i)}export{K as default};
