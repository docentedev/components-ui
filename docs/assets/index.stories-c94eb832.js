import{a as e,j as r}from"./jsx-runtime-fd534075.js";import{b as d}from"./index-648bd5c2.js";import{T as y,z as h,E as i,d as p}from"./index-172ca35d.js";import{P as c}from"./index-02210d9f.js";import{R as s}from"./index-6bf6aae2.js";import{C as n}from"./index-65ca6685.js";import{C as b}from"./index-a2221cae.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-4ebfd775.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";/* empty css              */import"./index-31e51faa.js";import"./index-03eabb6a.js";import"./index-675c71d2.js";import"./index-9e68d7ed.js";import"./index-c7126f2e.js";import"./index-abf8fa6e.js";import"./index-94b86141.js";import"./index-598450d7.js";import"./index-4cd4725f.js";import"./index-162d25a7.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-b6ef4225.js";import"./index-d70482d4.js";import"./index-ddbb0a27.js";import"./index-959cc4af.js";import"./index-7ea187ef.js";import"./index-63de68db.js";const k="components-ui__index-module__ColorBox___7mOu4",C={ColorBox:k},x=({color:o})=>e("div",{style:{backgroundColor:o},className:C.ColorBox});try{colorbox.displayName="colorbox",colorbox.__docgenInfo={description:"",displayName:"colorbox",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}const _=[{label:"Nombre",key:"title"},{label:"Variable CSS",key:"cssVar"},{label:"Código",renderRow:o=>r(c,{direction:"row",alignItems:"center",gap:.25,children:[e(x,{color:o.value}),e("div",{children:e("pre",{children:o.value})})]})}],f=({title:o,data:t})=>r("div",{children:[e("h4",{children:o}),e(y,{variant:"light",data:t,columns:_})]});try{colortable.displayName="colortable",colortable.__docgenInfo={description:"",displayName:"colortable",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}}}}}catch{}const v=h(),j=v.color,w=v.spacing,S=({spacing:o})=>e("div",{children:r("div",{style:{backgroundColor:i.color.Primary.value,color:i.color.PrimaryContrast.value,display:"flex",boxShadow:"0 0 0 1px rgba(0,0,0,0.1)",borderRadius:"0.25rem"},children:[e("div",{style:{width:o,backgroundColor:i.color.PrimaryLowContrast.value,height:"1.25rem"}}),"Spacing"]})});try{spacingbox.displayName="spacingbox",spacingbox.__docgenInfo={description:"",displayName:"spacingbox",props:{spacing:{defaultValue:null,description:"",name:"spacing",required:!0,type:{name:"string"}}}}}catch{}const N=[{label:"Nombre",key:"title"},{label:"Variable CSS",renderRow:o=>e("pre",{children:o.cssVar})},{label:"Código",renderRow:o=>r(c,{direction:"row",alignItems:"center",gap:.25,children:[e(S,{spacing:o.value}),e("div",{children:e("pre",{children:o.value})})]})}],P=({title:o,data:t})=>r("div",{children:[e("h4",{children:o}),e(y,{variant:"light",data:t,columns:N})]});try{spacingtable.displayName="spacingtable",spacingtable.__docgenInfo={description:"",displayName:"spacingtable",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}}}}}catch{}const R="module",V="Cencommerce Components UI",I="./dist/components-ui.cjs",B="@cencosud-cencommerce/components-ui",E="1.0.156",T=["dist"],J={dev:"vite",build:"tsc && vite build",lint:"eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",preview:"vite preview",storybook:"storybook dev -p 6006","build-storybook":"storybook build",test:"vitest",coverage:"vitest run --coverage"},$={react:"17.0.2","react-dom":"17.0.2"},q={"@storybook/addon-essentials":"7.6.8","@storybook/addon-interactions":"7.6.8","@storybook/addon-links":"7.6.8","@storybook/blocks":"7.6.8","@storybook/react":"7.6.8","@storybook/react-vite":"7.6.8","@storybook/testing-library":"0.2.2","@testing-library/jest-dom":"5.17.0","@testing-library/react":"12.1.2","@testing-library/react-hooks":"7.0.2","@testing-library/user-event":"^14.4.3","@types/jest":"29.5.3","@types/react":"17.0.2","@types/react-dom":"17.0.11","@typescript-eslint/eslint-plugin":"5.57.1","@typescript-eslint/parser":"5.57.1","@vitejs/plugin-react-swc":"3.3.2","@vitest/coverage-v8":"^0.34.6",eslint:"8.51.0","eslint-plugin-react-hooks":"4.6.0","eslint-plugin-react-refresh":"0.4.3","eslint-plugin-storybook":"0.6.15","happy-dom":"10.5.2",jest:"29.6.2","jest-environment-jsdom":"^29.6.2","jest-transform-stub":"^2.0.0",jsdom:"22.1.0","prop-types":"15.8.1","react-router-dom":"^6.14.2",storybook:"^7.6.8","storybook-color-picker":"3.1.0","ts-jest":"29.1.1",typescript:"5.1.6",vite:"^4.4.7","vite-plugin-dts":"2.3.0",vitest:"0.33.0"},O={react:"17.0.2","react-dom":"17.0.2"},D="dist/components-ui.js",H="dist/index.d.ts",l={private:!1,type:R,description:V,main:I,name:B,version:E,files:T,scripts:J,dependencies:$,devDependencies:q,peerDependencies:O,module:D,types:H},U=`import { tokens } from '@cencosud-cencommerce/components-ui';

<div
    style={{
        backgroundColor: tokens.color.Primary.value,
        color: tokens.color.PrimaryContrast.value,
        padding: tokens.spacing.m.value
    }}
>
    Hola
</div>`,a=()=>r("div",{children:[e("h1",{children:"Bienvenido a Components UI"}),e("p",{children:l.description}),r(c,{gap:1,children:[e(p,{variant:"primary",text:`v${l.version}`}),e(p,{variant:"primary",text:`package name ${l.name}`})]}),r(s,{children:[e(n,{col:12,children:e("h2",{children:"Tokens"})}),r(n,{col:9,children:[r(s,{children:[e(n,{col:12,children:e("h3",{children:"Colores"})}),j.map((o,t)=>e(n,{xl:6,xxl:4,children:e(f,{title:o.title,data:o.data})},t))]}),r(s,{children:[e(n,{col:12,children:e("h3",{children:"Espacios"})}),w.map((o,t)=>e(n,{xl:6,children:e(P,{title:o.title,data:o.data})},t))]})]}),r(n,{col:3,children:[e("h3",{children:"Versión Javascript"}),r(b,{variant:"border",children:[e("h4",{children:"Ejemplo de uso y resultado"}),e(d,{code:U,dark:!0,language:"jsx"}),e("div",{style:{backgroundColor:i.color.Primary.value,color:i.color.PrimaryContrast.value,padding:i.spacing.m.value},children:"Hola"})]}),e("h4",{children:"Objeto de tokens"}),e(d,{code:`const tokens = ${JSON.stringify(i,null,4)}`,dark:!0,language:"ts"})]})]})]});a.storyName="Página de inicio";const _e={title:"Bienvenido",component:a};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div>
        <h1>Bienvenido a Components UI</h1>
        <p>{packageJson.description}</p>
        <Position gap={1}>
            <Chip variant="primary" text={\`v\${packageJson.version}\`} />
            <Chip variant="primary" text={\`package name \${packageJson.name}\`} />
        </Position>
        <Row>
            <Col col={12}>
                <h2>Tokens</h2>
            </Col>
            <Col col={9}>
                <Row>
                    <Col col={12}>
                        <h3>Colores</h3>
                    </Col>
                    {color.map((item, index) => <Col xl={6} xxl={4} key={index}>
                            <ColorTable title={item.title} data={item.data} />
                        </Col>)}
                </Row>
                <Row>
                    <Col col={12}>
                        <h3>Espacios</h3>
                    </Col>
                    {spacing.map((item, index) => <Col xl={6} key={index}>
                            <SpacingTable title={item.title} data={item.data} />
                        </Col>)}
                </Row>
            </Col>
            <Col col={3}>
                <h3>Versión Javascript</h3>
                <Card variant="border">
                    <h4>Ejemplo de uso y resultado</h4>
                    <Source code={tokenExample} dark language="jsx" />
                    <div style={{
          backgroundColor: tokens.color.Primary.value,
          color: tokens.color.PrimaryContrast.value,
          padding: tokens.spacing.m.value
        }}>
                        Hola
                    </div>
                </Card>
                <h4>Objeto de tokens</h4>
                <Source code={\`const tokens = \${JSON.stringify(tokens, null, 4)}\`} dark language="ts" />
            </Col>
        </Row>
    </div>`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const fe=["WelcomeStory"];export{a as WelcomeStory,fe as __namedExportsOrder,_e as default};
