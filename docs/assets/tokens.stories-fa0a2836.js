import{a as o,j as t}from"./jsx-runtime-fd534075.js";import{b as n}from"./index-dbfbcc58.js";import{t as e}from"./index-9ed214ff.js";import{R as l}from"./index-c2412459.js";import{C as m}from"./index-65ca6685.js";import{C as d}from"./index-6b262a55.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-1f5bd02a.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index.utils-3332eaf1.js";import"./index-86b246da.js";import"./Easy-dac9347f.js";import"./index-02210d9f.js";import"./index-1d4b259d.js";import"./index-df9f428b.js";import"./index-8a756933.js";import"./index-0d4a7d4b.js";import"./index-be8450de.js";import"./index-14fb5907.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-c25b480d.js";import"./index-771df2ed.js";import"./index-7ea187ef.js";const c=`import { tokens } from '@cencosud-cencommerce/components-ui';

<div
    style={{
        backgroundColor: tokens.color.Primary.value,
        color: tokens.color.PrimaryContrast.value,
        padding: tokens.spacing.m.value,
        borderRadius: tokens.radius.m.value,
    }}
>
    Hola
</div>`,r=()=>o("div",{children:o(l,{children:t(m,{col:12,children:[o("h3",{children:"Tokens versión Javascript"}),t(d,{variant:"border",children:[o("h4",{children:"Ejemplo de uso y resultado"}),o(n,{code:c,dark:!0,language:"jsx"}),o("div",{style:{backgroundColor:e.color.Primary.value,color:e.color.PrimaryContrast.value,padding:e.spacing.m.value,borderRadius:e.radius.m.value},children:"Hola"})]}),o("h4",{children:"Objeto de tokens"}),o(n,{code:`const tokens = ${JSON.stringify(e,null,4)}`,dark:!0,language:"ts"})]})})});r.storyName="Tokens";const p=()=>o(r,{}),B={title:"Docs/Tokens",component:p,argTypes:{backgroundColor:{control:{disable:!0}},onClick:{control:{disable:!0}}}};var a,s,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => <div>
        <Row>
            <Col col={12}>
                <h3>Tokens versión Javascript</h3>
                <Card variant="border">
                    <h4>Ejemplo de uso y resultado</h4>
                    <Source code={tokenExample} dark language="jsx" />
                    <div style={{
          backgroundColor: tokens.color.Primary.value,
          color: tokens.color.PrimaryContrast.value,
          padding: tokens.spacing.m.value,
          borderRadius: tokens.radius.m.value
        }}>
                        Hola
                    </div>
                </Card>
                <h4>Objeto de tokens</h4>
                <Source code={\`const tokens = \${JSON.stringify(tokens, null, 4)}\`} dark language="ts" />
            </Col>
        </Row>
    </div>`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const G=["WelcomeStory"];export{r as WelcomeStory,G as __namedExportsOrder,B as default};
