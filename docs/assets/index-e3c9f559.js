import{a as e,j as n,F as c}from"./jsx-runtime-fd534075.js";import{M as l,C as a,d as h,b as o}from"./index-e20436ff.js";import{N as s,D as m}from"./index.stories-6edb935a.js";import{u as r}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c55e4c8b.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index-fb4e9280.js";import"./index.utils-3332eaf1.js";import"./index-00e995de.js";import"./index-cba1fa6c.js";import"./index-be75c763.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-da88b037.js";import"./index-ae9d3e9c.js";import"./index-7e35ccc8.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-855dbaba.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-1fcf8fa4.js";import"./index-30c04a33.js";import"./index-c2412459.js";import"./index-7ea187ef.js";function d(t){const i=Object.assign({h1:"h1",h2:"h2",code:"code",ul:"ul",li:"li",blockquote:"blockquote",p:"p"},r(),t.components);return n(c,{children:[e(l,{of:s}),`
`,e(i.h1,{id:"notification",children:"Notification"}),`
`,e(a,{of:m}),`
`,e(h,{}),`
`,n(i.h2,{id:"propiedades-del-item-de-la-notification",children:["Propiedades del Item de la ",e(i.code,{children:"Notification"})]}),`
`,n("table",{children:[e("thead",{children:n("tr",{children:[e("th",{children:"name"}),e("th",{children:"type"}),e("th",{children:"description"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"title?"}),e("td",{children:e(i.code,{children:"string"})}),n("td",{children:["titulo de la ",e(i.code,{children:"Notification"})]})]}),n("tr",{children:[e("td",{children:"description?"}),e("td",{children:e(i.code,{children:"string"})}),n("td",{children:["Texto del cuerpo de la ",e(i.code,{children:"Notification"})," a menos que se defina ",e(i.code,{children:"render"})]})]}),n("tr",{children:[e("td",{children:"autoClose?"}),e("td",{children:e(i.code,{children:"number"})}),e("td",{children:"tiempo en que se auto cierra, por defecto será en 2 segundos"})]}),n("tr",{children:[e("td",{children:"onClose?"}),e("td",{children:e(i.code,{children:"(message: string) => void"})}),n("td",{children:["Emite el evento cuando se ejecuta el evento cerrar, ya sea del botón ",e(i.code,{children:"x"})," o del evento dentro de ",e(i.code,{children:"render"})]})]}),n("tr",{children:[e("td",{children:"persistent?"}),e("td",{children:e(i.code,{children:"boolean"})}),e("td",{children:"Si se mantendrá abierto, esperando la acción de cerrar"})]}),n("tr",{children:[e("td",{children:"hiddenCloseButton?"}),e("td",{children:e(i.code,{children:"boolean"})}),n("td",{children:["Si se ve o no el botón ",e(i.code,{children:"x"})," para cerrar, por defecto siempre se ve"]})]}),n("tr",{children:[e("td",{children:"render?"}),n("td",{children:[e(i.code,{children:"(events: { onClose: () => Promise<void> })"}),e("br",{}),e(i.code,{children:"=> React.ReactElement | string"})]}),n("td",{children:["Funciona como ",e(i.code,{children:"renderRow"})," de la tabla, se puede agregar ",e(i.code,{children:"JSX"})]})]}),n("tr",{children:[e("td",{children:"variant?"}),e("td",{children:e(i.code,{children:"'info' | 'success' | 'error' | 'warning'"})}),e("td",{children:"Variante"})]}),n("tr",{children:[e("td",{children:"theme?"}),e("td",{children:e(i.code,{children:"'default' | 'light'"})}),e("td",{children:"version del componente"})]}),n("tr",{children:[e("td",{children:"icon?"}),n("td",{children:[e(i.code,{children:"boolean | ReactNode | ReactNode[] |"}),e("br",{}),e(i.code,{children:"string | JSX.Element | JSX.Element[]"})]}),n("td",{children:["Si es ",e(i.code,{children:"true"}),", se muestra por defecto un icono a partir de la variante, si no se puede pasas JSX ",e(i.code,{children:'<img src="" alt="" />,'})]})]})]})]}),`
`,e(i.h2,{id:"para-utilizar-este-componente-se-requieren-2-pasos",children:"Para utilizar este componente, se requieren 2 pasos"}),`
`,n(i.ul,{children:[`
`,e(i.li,{children:"primero, definir el hook y luego"}),`
`]}),`
`,n(i.blockquote,{children:[`
`,n(i.p,{children:["Se debe llamar al método ",e(i.code,{children:"add"})," que agrega las notificaciones."]}),`
`]}),`
`,e(o,{code:`
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
`,e(o,{code:`
<Notification items={notification.items} />
`}),`
`,n(i.ul,{children:[`
`,e(i.li,{children:"Ejemplo de uso"}),`
`]}),`
`,e(o,{code:`
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
`})]})}function G(t={}){const{wrapper:i}=Object.assign({},r(),t.components);return i?e(i,Object.assign({},t,{children:e(d,t)})):d(t)}export{G as default};
