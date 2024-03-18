import{a as e,j as n}from"./jsx-runtime-fd534075.js";import{b as m}from"./index-ec371c35.js";import{T as d,H as b,G as t,d as u}from"./index-90d23ab6.js";import{P as c}from"./index-02210d9f.js";import{R as a}from"./index-c2412459.js";import{C as r}from"./index-65ca6685.js";import{C as v}from"./index-30ffb6e6.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-cb7ff0ae.js";import"../sb-preview/runtime.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index.utils-95bde099.js";import"./index-7e7c9be4.js";import"./index-7435f347.js";import"./index-ca44b1cf.js";import"./index-9e68d7ed.js";import"./index-b8b41e01.js";import"./index-d4b4beca.js";import"./index-94b86141.js";import"./index-d5cccbfc.js";import"./index-be8450de.js";import"./index-37763a24.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-3e0e121a.js";import"./index-2bc508e2.js";import"./index-7ea187ef.js";import"./index-63de68db.js";const x="components-ui__index-module__ColorBox___7mOu4",C={ColorBox:x},k=({color:o})=>e("div",{style:{backgroundColor:o},className:C.ColorBox});try{colorbox.displayName="colorbox",colorbox.__docgenInfo={description:"",displayName:"colorbox",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}const _=[{label:"Nombre",key:"title"},{label:"Variable CSS",key:"cssVar"},{label:"Código",renderRow:o=>n(c,{direction:"row",alignItems:"center",gap:.25,children:[e(k,{color:o.value}),e("div",{children:e("pre",{children:o.value})})]})}],f=({title:o,data:i})=>n("div",{children:[e("h4",{children:o}),e(d,{variant:"narrow",data:i,columns:_})]});try{colortable.displayName="colortable",colortable.__docgenInfo={description:"",displayName:"colortable",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}}}}}catch{}const p=b(),S=p.color,w=p.spacing,R=p.radius,j=({spacing:o})=>e("div",{children:n("div",{style:{backgroundColor:t.color.Primary.value,color:t.color.PrimaryContrast.value,display:"flex",boxShadow:"0 0 0 1px rgba(0,0,0,0.1)",borderRadius:"0.25rem"},children:[e("div",{style:{width:o,backgroundColor:t.color.PrimaryLowContrast.value,height:"1.25rem"}}),"Spacing"]})});try{spacingbox.displayName="spacingbox",spacingbox.__docgenInfo={description:"",displayName:"spacingbox",props:{spacing:{defaultValue:null,description:"",name:"spacing",required:!0,type:{name:"string"}}}}}catch{}const A=[{label:"Nombre",key:"title"},{label:"Variable CSS",renderRow:o=>e("pre",{children:o.cssVar})},{label:"Código",renderRow:o=>n(c,{direction:"row",alignItems:"center",gap:.25,children:[e(j,{spacing:o.value}),e("div",{children:e("pre",{children:o.value})})]})}],N=({title:o,data:i})=>n("div",{children:[e("h4",{children:o}),e(d,{variant:"narrow",data:i,columns:A})]});try{spacingtable.displayName="spacingtable",spacingtable.__docgenInfo={description:"",displayName:"spacingtable",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}}}}}catch{}const q="module",V="Cencommerce Components UI",I="./dist/components-ui.cjs",P="@cencosud-cencommerce/components-ui",E="1.0.163",T=["dist"],$={dev:"vite",build:"tsc && vite build",lint:"eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",preview:"vite preview",storybook:"storybook dev -p 6006","build-storybook":"storybook build",test:"vitest",coverage:"vitest run --coverage"},B={react:"17.0.2","react-dom":"17.0.2"},J={"@storybook/addon-essentials":"7.6.8","@storybook/addon-interactions":"7.6.8","@storybook/addon-links":"7.6.8","@storybook/blocks":"7.6.8","@storybook/react":"7.6.8","@storybook/react-vite":"7.6.8","@storybook/testing-library":"0.2.2","@testing-library/jest-dom":"5.17.0","@testing-library/react":"12.1.2","@testing-library/react-hooks":"7.0.2","@testing-library/user-event":"^14.4.3","@types/jest":"29.5.3","@types/react":"17.0.2","@types/react-dom":"17.0.11","@typescript-eslint/eslint-plugin":"5.57.1","@typescript-eslint/parser":"5.57.1","@vitejs/plugin-react-swc":"3.3.2","@vitest/coverage-v8":"^0.34.6",eslint:"8.51.0","eslint-plugin-react-hooks":"4.6.0","eslint-plugin-react-refresh":"0.4.3","eslint-plugin-storybook":"0.6.15","happy-dom":"10.5.2",jest:"29.6.2","jest-environment-jsdom":"^29.6.2","jest-transform-stub":"^2.0.0",jsdom:"22.1.0","prop-types":"15.8.1","react-router-dom":"^6.14.2",storybook:"^7.6.8","storybook-color-picker":"3.1.0","ts-jest":"29.1.1",typescript:"5.1.6",vite:"^4.4.7","vite-plugin-dts":"2.3.0",vitest:"0.33.0"},D={react:"17.0.2","react-dom":"17.0.2"},F="dist/components-ui.js",O="dist/index.d.ts",s={private:!1,type:q,description:V,main:I,name:P,version:E,files:T,scripts:$,dependencies:B,devDependencies:J,peerDependencies:D,module:F,types:O},H=[{label:"Nombre",key:"title"},{label:"Variable CSS",renderRow:o=>e("pre",{children:o.cssVar})},{label:"Código",renderRow:o=>e(c,{direction:"row",alignItems:"center",gap:.25,children:e("div",{style:{color:t.color.PrimaryContrast.value,textAlign:"center",lineHeight:"4.6",width:"3.5rem",height:"3.5rem",backgroundColor:"var(--components-ui-color-primary)",borderRadius:`${o.value}`},children:o.value})})}],L=({title:o,data:i})=>n("div",{children:[e("h4",{children:o}),e(d,{variant:"narrow",data:i,columns:H})]});try{radiustable.displayName="radiustable",radiustable.__docgenInfo={description:"",displayName:"radiustable",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}}}}}catch{}const M=`import { tokens } from '@cencosud-cencommerce/components-ui';

<div
    style={{
        backgroundColor: tokens.color.Primary.value,
        color: tokens.color.PrimaryContrast.value,
        padding: tokens.spacing.m.value
    }}
>
    Hola
</div>`,l=()=>n("div",{children:[e("h1",{children:"Bienvenido a Components UI"}),e("p",{children:s.description}),n(c,{gap:1,children:[e(u,{variant:"primary",text:`v${s.version}`}),e(u,{variant:"primary",text:`package name ${s.name}`})]}),e(a,{children:n(r,{children:[e("h2",{children:"Introducción"}),e("p",{children:"Este repositorio es una librería de componentes desarrollada con React y utiliza CSS Modules para los estilos. La documentación se encuentra en Storybook, donde se pueden encontrar ejemplos y detalles sobre cada componente."}),e("p",{children:"La librería de componentes está destinada a ser compartida entre equipos, lo que significa que se espera un alto nivel de calidad y consistencia en el código. Sigue las pautas de colaboración mencionadas para mantener la integridad y la coherencia en el desarrollo de nuevos componentes y actualizaciones."}),e("h2",{children:"Colabora"}),e("h3",{children:"Agrega tu componente"}),n("ul",{children:[n("li",{children:[e("code",{children:"index.module.css"})," - Archivo de estilos CSS Modules."]}),n("li",{children:[e("code",{children:"index.tsx"})," - Archivo principal del componente en React."]}),n("li",{children:[e("code",{children:"index.stories.tsx"})," - Archivo de historias para la documentación en Storybook."]}),n("li",{children:[e("code",{children:"index.utils.ts"})," - Archivo de utilidades relacionadas con el componente."]}),n("li",{children:[e("code",{children:"index.test.tsx"})," - Archivo de pruebas del componente."]}),n("li",{children:[e("code",{children:"index.utils.test.tsx"})," - Archivo de pruebas de las utilidades del componente."]}),n("li",{children:[e("code",{children:"types.tsx"})," - Archivo de tipos del componente."]}),n("li",{children:[e("code",{children:"components"})," - Carpeta que contiene los componentes hijos del componente principal."]})]})]})}),n(a,{children:[e(r,{col:12,children:e("h2",{children:"Tokens"})}),n(r,{col:8,children:[n(a,{children:[e(r,{col:12,children:e("h3",{children:"Colores"})}),S.map((o,i)=>e(r,{xl:6,xxl:4,children:e(f,{title:o.title,data:o.data})},i))]}),n(a,{children:[e(r,{md:6,children:n(a,{children:[e(r,{col:12,children:e("h3",{children:"Espacios"})}),w.map((o,i)=>e(r,{xl:12,children:e(N,{title:o.title,data:o.data})},i))]})}),e(r,{md:6,children:n(a,{children:[e(r,{col:12,children:e("h3",{children:"Redondeos"})}),R.map((o,i)=>e(r,{xl:12,children:e(L,{title:o.title,data:o.data})},i))]})})]})]}),n(r,{col:4,children:[e("h3",{children:"Versión Javascript"}),n(v,{variant:"border",children:[e("h4",{children:"Ejemplo de uso y resultado"}),e(m,{code:M,dark:!0,language:"jsx"}),e("div",{style:{backgroundColor:t.color.Primary.value,color:t.color.PrimaryContrast.value,padding:t.spacing.m.value},children:"Hola"})]}),e("h4",{children:"Objeto de tokens"}),e(m,{code:`const tokens = ${JSON.stringify(t,null,4)}`,dark:!0,language:"ts"})]})]})]});l.storyName="Página de inicio";const z=()=>e(l,{}),Re={title:"Bienvenido",component:z};var h,y,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div>
        <h1>Bienvenido a Components UI</h1>
        <p>{packageJson.description}</p>
        <Position gap={1}>
            <Chip variant="primary" text={\`v\${packageJson.version}\`} />
            <Chip variant="primary" text={\`package name \${packageJson.name}\`} />
        </Position>
        <Row>
            <Col>
                <h2>Introducción</h2>
                <p>Este repositorio es una librería de componentes desarrollada con React y utiliza CSS Modules para los estilos. La documentación se encuentra en Storybook, donde se pueden encontrar ejemplos y detalles sobre cada componente.</p>
                <p>La librería de componentes está destinada a ser compartida entre equipos, lo que significa que se espera un alto nivel de calidad y consistencia en el código. Sigue las pautas de colaboración mencionadas para mantener la integridad y la coherencia en el desarrollo de nuevos componentes y actualizaciones.</p>
                <h2>Colabora</h2>
                <h3>Agrega tu componente</h3>
                <ul>
                    <li><code>index.module.css</code> - Archivo de estilos CSS Modules.</li>
                    <li><code>index.tsx</code> - Archivo principal del componente en React.</li>
                    <li><code>index.stories.tsx</code> - Archivo de historias para la documentación en Storybook.</li>
                    <li><code>index.utils.ts</code> - Archivo de utilidades relacionadas con el componente.</li>
                    <li><code>index.test.tsx</code> - Archivo de pruebas del componente.</li>
                    <li><code>index.utils.test.tsx</code> - Archivo de pruebas de las utilidades del componente.</li>
                    <li><code>types.tsx</code> - Archivo de tipos del componente.</li>
                    <li><code>components</code> - Carpeta que contiene los componentes hijos del componente principal.</li>
                </ul>
            </Col>
        </Row>
        <Row>
            <Col col={12}>
                <h2>Tokens</h2>
            </Col>
            <Col col={8}>
                <Row>
                    <Col col={12}>
                        <h3>Colores</h3>
                    </Col>
                    {color.map((item, index) => <Col xl={6} xxl={4} key={index}>
                            <ColorTable title={item.title} data={item.data} />
                        </Col>)}
                </Row>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col col={12}>
                                <h3>Espacios</h3>
                            </Col>
                            {spacing.map((item, index) => <Col xl={12} key={index}>
                                    <SpacingTable title={item.title} data={item.data} />
                                </Col>)}
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col col={12}>
                                <h3>Redondeos</h3>
                            </Col>
                            {radius.map((item, index) => <Col xl={12} key={index}>
                                    <RadiusTable title={item.title} data={item.data} />
                                </Col>)}
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col col={4}>
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
    </div>`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const je=["WelcomeStory"];export{l as WelcomeStory,je as __namedExportsOrder,Re as default};
