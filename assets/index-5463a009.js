import{a as e,j as n,F as c}from"./jsx-runtime-fd534075.js";import{M as l,C as a,b as r}from"./index-8298646b.js";import{N as h,D as s}from"./index.stories-0b7570e0.js";import{u as d}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-b83cbb7d.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-4bbb29a4.js";/* empty css              */import"./index-b69c5657.js";import"./index-1f462de8.js";import"./index-ac710f84.js";import"./index-e60269c1.js";import"./index-5dc2c734.js";import"./index-1335fada.js";import"./index-4efeca71.js";import"./index-84dc9bf1.js";import"./index-0a038c6a.js";import"./index-65ca6685.js";import"./index-4cd4725f.js";import"./index-d2c7445a.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-715a186d.js";import"./index-c2c34387.js";import"./index-76e7f10d.js";import"./index-3f0062ba.js";import"./index-d70482d4.js";import"./index-d49d0512.js";import"./index-5bc492e7.js";import"./index-02210d9f.js";import"./index-6bf6aae2.js";import"./index-4fc4b7c9.js";import"./index-6bd25b98.js";import"./index-a3671747.js";import"./index-cf5f524c.js";import"./index-63de68db.js";function o(t){const i=Object.assign({h1:"h1",h2:"h2",code:"code",ul:"ul",li:"li",blockquote:"blockquote",p:"p"},d(),t.components);return n(c,{children:[e(l,{of:h}),`
`,e(i.h1,{id:"notification",children:"Notification"}),`
`,e(i.h2,{id:"propiedades",children:"Propiedades"}),`
`,n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"name"}),e("th",{children:"type"}),e("th",{children:"description"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"title?"}),e("td",{children:e(i.code,{children:"string"})}),n("td",{children:["titulo de la ",e(i.code,{children:"Notification"})]})]}),n("tr",{children:[e("td",{children:"description?"}),e("td",{children:e(i.code,{children:"string"})}),n("td",{children:["Texto del cuerpo de la ",e(i.code,{children:"Notification"})," a menos que se defina ",e(i.code,{children:"render"})]})]}),n("tr",{children:[e("td",{children:"autoClose?"}),e("td",{children:e(i.code,{children:"number"})}),e("td",{children:"tiempo en que se auto cierra, por defecto será en 2 segundos"})]}),n("tr",{children:[e("td",{children:"onClose?"}),e("td",{children:e(i.code,{children:"(message: string) => void"})}),n("td",{children:["Emite el evento cuando se ejecuta el evento cerrar, ya sea del botón ",e(i.code,{children:"x"})," o del evento dentro de ",e(i.code,{children:"render"})]})]}),n("tr",{children:[e("td",{children:"persistent?"}),e("td",{children:e(i.code,{children:"boolean"})}),e("td",{children:"Si se mantendrá abierto, esperando la acción de cerrar"})]}),n("tr",{children:[e("td",{children:"hiddenCloseButton?"}),e("td",{children:e(i.code,{children:"boolean"})}),n("td",{children:["Si se ve o no el botón ",e(i.code,{children:"x"})," para cerrar, por defecto siempre se ve"]})]}),n("tr",{children:[e("td",{children:"render?"}),n("td",{children:[e(i.code,{children:"(events: { onClose: () => Promise<void> })"}),e("br",{}),e(i.code,{children:"=> React.ReactElement | string"})]}),n("td",{children:["Funciona como ",e(i.code,{children:"renderRow"})," de la tabla, se puede agregar ",e(i.code,{children:"JSX"})]})]}),n("tr",{children:[e("td",{children:"variant?"}),e("td",{children:e(i.code,{children:"'info' | 'success' | 'error' | 'warning'"})}),e("td",{children:"Variante"})]}),n("tr",{children:[e("td",{children:"theme?"}),e("td",{children:e(i.code,{children:"'default' | 'light'"})}),e("td",{children:"version del componente"})]}),n("tr",{children:[e("td",{children:"icon?"}),n("td",{children:[e(i.code,{children:"boolean | ReactNode | ReactNode[] |"}),e("br",{}),e(i.code,{children:"string | JSX.Element | JSX.Element[]"})]}),n("td",{children:["Si es ",e(i.code,{children:"true"}),", se muestra por defecto un icono a partir de la variante, si no se puede pasas JSX ",e(i.code,{children:'<img src="" alt="" />,'})]})]})]})]}),`
`,e(a,{of:s}),`
`,e(i.h2,{id:"para-utilizar-este-componente-se-requieren-2-pasos",children:"Para utilizar este componente, se requieren 2 pasos"}),`
`,n(i.ul,{children:[`
`,e(i.li,{children:"primero, definir el hook y luego"}),`
`]}),`
`,n(i.blockquote,{children:[`
`,n(i.p,{children:["Se debe llamar al método ",e(i.code,{children:"add"})," que agrega las notificaciones."]}),`
`]}),`
`,e(r,{code:`
const notification = useNotification();

notification.add({
  title: 'Default',
  description: 'description',
  autoClose: 1000,
});
`}),`
`,n(i.ul,{children:[`
`,n(i.li,{children:["Conectarlo al componente con la propiedad ",e(i.code,{children:"items"})," del ",e(i.code,{children:"hook"})]}),`
`]}),`
`,e(r,{code:`
<Notification items={notification.items} />
`}),`
`,n(i.ul,{children:[`
`,e(i.li,{children:"Ejemplo de uso"}),`
`]}),`
`,e(r,{code:`
const NotificationRender = () => {
  const notification = useNotification();

  const handleAdd = () => {
    notification.add({
      title: 'Default',
      description: 'description',
    });
  }

  return (
    <div>
      <Button onClick={handleAdd}>Default</Button>
      <Notification items={notification.items} />
    </div>
  );
};
`})]})}function ee(t={}){const{wrapper:i}=Object.assign({},d(),t.components);return i?e(i,Object.assign({},t,{children:e(o,t)})):o(t)}export{ee as default};
