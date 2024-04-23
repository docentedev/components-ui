import{a as r,j as s}from"./jsx-runtime-fd534075.js";import{c as n,P as a}from"./index-d0202530.js";import{B as m}from"./base-097ec165.js";import{P as p}from"./index-74add701.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-3332eaf1.js";import"./index-74a01f7e.js";import"./index-df9449a8.js";import"./index-e6f5c83c.js";import"./Easy-dac9347f.js";import"./index-054e62f9.js";import"./index-d10b97d2.js";import"./index-af5faa0b.js";import"./index-442dd4a4.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-0ee9f2a0.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-ecd4c93d.js";import"./index-928b6006.js";import"./index-d8af3c02.js";import"./index-7ea187ef.js";import"./index-b9b61d5d.js";import"./iframe-4011b920.js";import"../sb-preview/runtime.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const c=`
import { Button, Position, ProgressBar } from '@cencosud-cencommerce/components-ui';

const ProgressBarButton = () => {
    return (
        <Position gap={1} alignItems="center">
            <Button onClick={() => undefined} size="m" variant="secondary" iconLeft="Close">Cancelar</Button>
            <ProgressBar value={50} size="m" />
        </Position>
    );
};

export default ProgressBarButton;
`,o=()=>r(m,{title:"ProgressBar Button",code:c,children:s(p,{gap:1,alignItems:"center",children:[r(n,{onClick:()=>{},size:"m",variant:"secondary",iconLeft:"Close",children:"Cancelar"}),r(a,{value:50,size:"m"})]})});o.storyName="ProgressBar + Button";const u=()=>r(o,{}),J={title:" Composiciones/ProgressBar + Button",component:u,argTypes:{}};var t,e,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Base title="ProgressBar Button" code={codeExample}>
            <Position gap={1} alignItems="center">
                <Button onClick={() => undefined} size="m" variant="secondary" iconLeft="Close">Cancelar</Button>
                <ProgressBar value={50} size="m" />
            </Position>
        </Base>;
}`,...(i=(e=o.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const K=["Story"];export{o as Story,K as __namedExportsOrder,J as default};
