import{a as e,j as r,F as a}from"./jsx-runtime-fd534075.js";import{M as c,C as l,b as t}from"./index-e4b4c004.js";import{D as m,a as p}from"./index.stories-a662037a.js";import{u as d}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-bf4d9b7d.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-8b44fe0c.js";import"./index.utils-04f34053.js";import"./index-edbe8c20.js";import"./index-a2221cae.js";import"./index-12e24dad.js";import"./index-675c71d2.js";import"./index-9e68d7ed.js";import"./index-02210d9f.js";import"./index-4db41ef7.js";import"./index-2f3c836d.js";import"./index-94b86141.js";import"./index-95353159.js";import"./index-65ca6685.js";import"./index-4cd4725f.js";import"./index-541d37a9.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-b6ef4225.js";import"./index-d70482d4.js";import"./index-d88dedce.js";import"./index-0051ad11.js";import"./index-6bf6aae2.js";import"./index-7ea187ef.js";import"./index-63de68db.js";function i(o){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code",em:"em",strong:"strong"},d(),o.components);return r(a,{children:[e(c,{of:m}),`
`,e(n.h1,{id:"draganddrop",children:"DragAndDrop"}),`
`,e(n.p,{children:"El componente requiere:"}),`
`,r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"name"}),e("th",{children:"type"}),e("th",{children:"description"})]})}),r("tbody",{children:[r("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"(data: any[]) => void"}),e("td",{children:"retorna el nuevo orden cuando cambias los item con el mouse"})]}),r("tr",{children:[e("td",{children:"data"}),e("td",{children:"any[]"}),e("td",{children:"los valores a ser iterados"})]}),r("tr",{children:[e("td",{children:"renderData"}),e("td",{children:"(item: any) => React.ReactElement"}),e("td",{children:"propiedad para renderizar cada item iterado"})]})]})]}),`
`,e(l,{of:p}),`
`,r(n.ul,{children:[`
`,e(n.li,{children:"Por ejemplo un arreglo que se desea ordenar"}),`
`]}),`
`,e(t,{code:`
const [items, setItems] = useState([{
    country: 'Chile',
    code: 'CL',
  }, {
    country: 'Peru',
    code: 'PE',
  }, {
    country: 'Argentina',
    code: 'ARG',
  }]);
`}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:[`
`,r(n.p,{children:["Utilizamos el componente y en ",e(n.code,{children:"renderData"})," podremos generar el diseño de cada item igual como funciona renderRown en el componente ",e(n.code,{children:"<Table>"})]}),`
`]}),`
`,r(n.li,{children:[`
`,r(n.p,{children:["Este componente se puede tipar de la siguiente manera ",e(n.code,{children:"<DragAndDrop<Item>"})," donde Item sera el tipo de los datos pasados como entrada el la ",e(n.code,{children:"props"})," ",e(n.code,{children:"data"})]}),`
`]}),`
`,r(n.li,{children:[`
`,r(n.p,{children:["onEnd: retorna la lista ordenada cuando se finaliza la accion de ",e(n.code,{children:"DragAndDrop"})]}),`
`]}),`
`]}),`
`,e(t,{code:`
const Component = () => (
  <DragAndDrop<Item>
    data={items}
    onChange={handleChange}
    onEnd={console.log}
    renderData={(item) => (
          <Position>
            <Card block variant="border">
              <Position gap={0.25}>
                <div>{item.country}</div>
                <Button onClick={() => setCountry(item.code)}>Select</Button>
              </Position>
            </Card>
          </Position>
        )} />
);
`}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:["Se debe implementar al menos un ",e(n.code,{children:"handler"})," para el evento ",e(n.code,{children:"onChange"})," u ",e(n.code,{children:"onEnd"})," de lo contrario verás un error ",e(n.em,{children:e(n.strong,{children:"You must implement a listener method at least, onChange, onEnd"})})]}),`
`]})]})}function N(o={}){const{wrapper:n}=Object.assign({},d(),o.components);return n?e(n,Object.assign({},o,{children:e(i,o)})):i(o)}export{N as default};