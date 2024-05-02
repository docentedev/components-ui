import{j as s,a as e}from"./jsx-runtime-fd534075.js";import{r as p}from"./index-0cbcd92a.js";import{c as m,k as c,T as l,i as d}from"./index-a6780084.js";import{B as f}from"./base-9ffc34f8.js";import{P as u}from"./index-889d04a6.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-3332eaf1.js";import"./index-d96b9dfe.js";import"./index-2922d105.js";import"./index-be75c763.js";import"./Easy-dac9347f.js";import"./index-3afd175f.js";import"./index-ae9d3e9c.js";import"./index-af5faa0b.js";import"./index-b184faa2.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-b44cf4c5.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-e6b5a189.js";import"./index-cce712fb.js";import"./index-c2412459.js";import"./index-181649f6.js";import"./index-4639f8ab.js";import"./iframe-9b1f7584.js";import"../sb-preview/runtime.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const x=`
import { useState } from 'react';
import { Button, Decision, Drawer, Text2 } from '@cencosud-cencommerce/components-ui';

export const Story = () => {
    const [open, setOpen] = useState(false)
    const renderFooter = () => {
        return (
            <Decision
                onConfirm={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                textConfirm="Aceptar"
                textCancel="Cancelar"
            />
        )
    }
    return (
        <div>
            <Button onClick={() => setOpen(true)}>Open Drawer</Button>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                defaultPadding
                header={<Text2 size="xl" weight="bold">Texto en header</Text2>}
                footer={renderFooter()}
            >
                Body
            </Drawer>
        </div>
    );
}
`,r=()=>{const[i,o]=p.useState(!1);return s(f,{title:"Drawer Decision Text",code:x,children:[e(u,{gap:1,children:e(m,{onClick:()=>o(!0),children:"Abrir Drawer"})}),e(c,{open:i,onClose:()=>o(!1),defaultPadding:!0,header:e(l,{size:"xl",weight:"bold",children:"Texto en header"}),footer:(()=>e(d,{onConfirm:()=>o(!1),onCancel:()=>o(!1),textConfirm:"Aceptar",textCancel:"Cancelar"}))(),children:"Body"})]})};r.storyName="Drawer";const C=()=>e(r,{}),W={title:" Composiciones/Drawer",component:C,argTypes:{}};var t,n,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const renderFooter = () => {
    return <Decision onConfirm={() => setOpen(false)} onCancel={() => setOpen(false)} textConfirm="Aceptar" textCancel="Cancelar" />;
  };
  return <Base title="Drawer Decision Text" code={codeExample}>
            <Position gap={1}>
                <Button onClick={() => setOpen(true)}>Abrir Drawer</Button>
            </Position>
            <Drawer open={open} onClose={() => setOpen(false)} defaultPadding header={<Text2 size="xl" weight="bold">Texto en header</Text2>} footer={renderFooter()}>
                Body
            </Drawer>
        </Base>;
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const X=["Story"];export{r as Story,X as __namedExportsOrder,W as default};
