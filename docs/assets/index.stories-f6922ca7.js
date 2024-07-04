import{j as s,a as e}from"./jsx-runtime-fd534075.js";import{r as p}from"./index-0cbcd92a.js";import{c as m,l as c,T as l,i as d}from"./index-d7269e6f.js";import{B as f}from"./base-44d5f70f.js";import{P as u}from"./index-02210d9f.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-3332eaf1.js";import"./index-d2e5c41a.js";import"./index-9d98dfe9.js";import"./index-177d311a.js";import"./Easy-dac9347f.js";import"./index-a349e7e6.js";import"./index-ae9d3e9c.js";import"./index-af5faa0b.js";import"./index-2ed377c9.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-fb1d49a2.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-9499902f.js";import"./index-68e553b9.js";import"./index-c2412459.js";import"./index-7ea187ef.js";import"./index-44f4705f.js";import"./iframe-e7392f3c.js";import"../sb-preview/runtime.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const x=`
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
