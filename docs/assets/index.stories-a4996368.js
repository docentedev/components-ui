import{a as r,j as s}from"./jsx-runtime-fd534075.js";import{c as n,P as a}from"./index-4a4d8a4f.js";import{B as m}from"./base-cad514e1.js";import{P as p}from"./index-02210d9f.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-3332eaf1.js";import"./index-d96b9dfe.js";import"./index-2922d105.js";import"./index-be75c763.js";import"./Easy-dac9347f.js";import"./index-c33f722b.js";import"./index-8a756933.js";import"./index-af5faa0b.js";import"./index-b184faa2.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-b44cf4c5.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-e6b5a189.js";import"./index-cce712fb.js";import"./index-c2412459.js";import"./index-7ea187ef.js";import"./index-c9a8dc3f.js";import"./iframe-335dfa71.js";import"../sb-preview/runtime.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const c=`
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
