import{a as e,j as t}from"./jsx-runtime-fd534075.js";import{b as y}from"./index-d1646609.js";import{T as p,H as _,J as f,G as a,I as w,d as b}from"./index-4b087e90.js";import{P as d}from"./index-02210d9f.js";import{r as S}from"./index-0cbcd92a.js";import{R as l}from"./index-c2412459.js";import{C as r}from"./index-65ca6685.js";import{C as R}from"./index-e5a77027.js";import"./iframe-b1be707f.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-af5faa0b.js";import"./index-11d98b33.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";import"./index.utils-95bde099.js";import"./index-b6cc015e.js";import"./index-e00338da.js";import"./index-675c71d2.js";import"./index-86b246da.js";import"./Easy-dac9347f.js";import"./index-912d6a24.js";import"./index-a07b4e80.js";import"./index-8a756933.js";import"./index-1021555e.js";import"./index-be8450de.js";import"./index-0b607ab9.js";import"./index-3b419322.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-748e0ebf.js";import"./index-b3c58c2a.js";import"./index-7ea187ef.js";import"./index-63de68db.js";const j="components-ui__index-module__ColorBox___7mOu4",N={ColorBox:j},q=({color:o})=>e("div",{style:{backgroundColor:o},className:N.ColorBox});try{colorbox.displayName="colorbox",colorbox.__docgenInfo={description:"",displayName:"colorbox",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}}}}}catch{}const T=[{label:"Nombre",key:"title"},{label:"CSS",key:"cssVar"},{label:"Código",renderRow:o=>t(d,{direction:"row",alignItems:"center",gap:.25,children:[e(q,{color:o.value}),e("div",{children:e("pre",{children:o.value})})]})}],I=({title:o,data:n})=>t("div",{children:[e("h4",{children:o}),e(p,{variant:"narrow",data:n,columns:T})]});try{colortable.displayName="colortable",colortable.__docgenInfo={description:"",displayName:"colortable",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}}}}}catch{}const m=_(),V=f(a.text),A=m.color,P=m.spacing,$=m.radius,E=m.text,B=V,z=({spacing:o})=>e("div",{children:t("div",{style:{backgroundColor:a.color.Primary.value,color:a.color.PrimaryContrast.value,display:"flex",boxShadow:"0 0 0 1px rgba(0,0,0,0.1)",borderRadius:"0.25rem"},children:[e("div",{style:{width:o,backgroundColor:a.color.PrimaryLowContrast.value,height:"1.25rem"}}),"Spacing"]})});try{spacingbox.displayName="spacingbox",spacingbox.__docgenInfo={description:"",displayName:"spacingbox",props:{spacing:{defaultValue:null,description:"",name:"spacing",required:!0,type:{name:"string"}}}}}catch{}const H=[{label:"Nombre",key:"title"},{label:"CSS",renderRow:o=>e("pre",{children:o.cssVar})},{label:"Código",renderRow:o=>t(d,{direction:"row",alignItems:"center",gap:.25,children:[e(z,{spacing:o.value}),e("div",{children:e("pre",{children:o.value})})]})}],D=({title:o,data:n})=>t("div",{children:[e("h4",{children:o}),e(p,{variant:"narrow",data:n,columns:H})]});try{spacingtable.displayName="spacingtable",spacingtable.__docgenInfo={description:"",displayName:"spacingtable",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}}}}}catch{}const J="module",L="Cencommerce Components UI",F="./dist/components-ui.cjs",O="@cencosud-cencommerce/components-ui",M="1.0.167",W=["dist"],U={dev:"vite",build:"tsc && vite build",lint:"eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",preview:"vite preview",storybook:"storybook dev -p 6006","build-storybook":"storybook build",test:"vitest",coverage:"vitest run --coverage"},G={react:"17.0.2","react-dom":"17.0.2"},K={"@storybook/addon-essentials":"7.6.8","@storybook/addon-interactions":"7.6.8","@storybook/addon-links":"7.6.8","@storybook/blocks":"7.6.8","@storybook/react":"7.6.8","@storybook/react-vite":"7.6.8","@storybook/testing-library":"0.2.2","@testing-library/jest-dom":"5.17.0","@testing-library/react":"12.1.2","@testing-library/react-hooks":"7.0.2","@testing-library/user-event":"^14.4.3","@types/jest":"29.5.3","@types/react":"17.0.2","@types/react-dom":"17.0.11","@typescript-eslint/eslint-plugin":"5.57.1","@typescript-eslint/parser":"5.57.1","@vitejs/plugin-react-swc":"3.3.2","@vitest/coverage-v8":"^0.34.6",eslint:"8.51.0","eslint-plugin-react-hooks":"4.6.0","eslint-plugin-react-refresh":"0.4.3","eslint-plugin-storybook":"0.6.15","happy-dom":"10.5.2",jest:"29.6.2","jest-environment-jsdom":"^29.6.2","jest-transform-stub":"^2.0.0",jsdom:"22.1.0","prop-types":"15.8.1","react-router-dom":"^6.14.2",storybook:"^7.6.8","storybook-color-picker":"3.1.0","ts-jest":"29.1.1",typescript:"5.1.6",vite:"^4.4.7","vite-plugin-dts":"2.3.0",vitest:"0.33.0"},Q={react:"17.0.2","react-dom":"17.0.2"},X="dist/components-ui.js",Y="dist/index.d.ts",g={private:!1,type:J,description:L,main:F,name:O,version:M,files:W,scripts:U,dependencies:G,devDependencies:K,peerDependencies:Q,module:X,types:Y},Z=[{label:"Nombre",key:"title"},{label:"CSS",renderRow:o=>e("pre",{children:o.cssVar})},{label:"Código",renderRow:o=>e(d,{direction:"row",alignItems:"center",gap:.25,children:e("div",{style:{color:a.color.PrimaryContrast.value,textAlign:"center",lineHeight:"4.6",width:"3.5rem",height:"3.5rem",backgroundColor:"var(--components-ui-color-primary)",borderRadius:`${o.value}`},children:o.value})})}],ee=({title:o,data:n})=>t("div",{children:[e("h4",{children:o}),e(p,{variant:"narrow",data:n,columns:Z})]});try{radiustable.displayName="radiustable",radiustable.__docgenInfo={description:"",displayName:"radiustable",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}}}}}catch{}const oe=o=>{const n=/(lineHeight|size|weight)(\w+)$/,i=o.match(n),s=i?i[1]:"";return s==="lineHeight"?"line-height":`font-${s}`},te=[{label:"Nombre",key:"title"},{label:"CSS",renderRow:o=>e("pre",{children:o.cssVar})},{label:"Código",renderRow:o=>e(d,{direction:"row",alignItems:"center",gap:.25,children:e("div",{style:{[oe(o.tag)]:o.value},children:o.value})})}],ne=({title:o,data:n})=>t("div",{children:[e("h4",{children:o}),e(p,{variant:"narrow",data:n,columns:te})]});try{texttable.displayName="texttable",texttable.__docgenInfo={description:"",displayName:"texttable",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}}}}}catch{}const re=o=>{const n=/\.components-ui-text[^{]*/g,i=o.match(n);return i?i.map(s=>{const u=s.replace(".","").trim();return{title:`.${u}`,tag:"Class",cssVar:"--",value:u}}):[]},ae=[{label:"Nombre",key:"title"},{label:"Código",renderRow:o=>e(d,{direction:"row",alignItems:"center",gap:.25,children:e("div",{className:o.value,children:"abcABC123"})})}],ie=({title:o,data:n})=>{const[i,s]=S.useState(""),k=re(n).filter(h=>h.value.toLowerCase().includes(i.toLowerCase()));return t("div",{children:[o&&e("h4",{children:o}),e(w,{type:"text",placeholder:"Buscar Clase",value:i,onChange:h=>s(h.target.value),size:"s",label:"Buscar Clase"}),e(p,{variant:"narrow",data:k,columns:ae,maxHeight:"300px"})]})};try{classtable.displayName="classtable",classtable.__docgenInfo={description:"",displayName:"classtable",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"string"}}}}}catch{}const le=`import { tokens } from '@cencosud-cencommerce/components-ui';

<div
    style={{
        backgroundColor: tokens.color.Primary.value,
        color: tokens.color.PrimaryContrast.value,
        padding: tokens.spacing.m.value
    }}
>
    Hola
</div>`,c=()=>t("div",{children:[e("h1",{children:"Bienvenido a Components UI"}),e("p",{children:g.description}),t(d,{gap:1,children:[e(b,{variant:"primary",text:`v${g.version}`}),e(b,{variant:"primary",text:`package name ${g.name}`})]}),e(l,{children:t(r,{children:[e("h2",{children:"Introducción"}),e("p",{children:"Este repositorio es una librería de componentes desarrollada con React y utiliza CSS Modules para los estilos. La documentación se encuentra en Storybook, donde se pueden encontrar ejemplos y detalles sobre cada componente."}),e("p",{children:"La librería de componentes está destinada a ser compartida entre equipos, lo que significa que se espera un alto nivel de calidad y consistencia en el código. Sigue las pautas de colaboración mencionadas para mantener la integridad y la coherencia en el desarrollo de nuevos componentes y actualizaciones."}),e("h2",{children:"Colabora"}),e("h3",{children:"Agrega tu componente"}),t("ul",{children:[t("li",{children:[e("code",{children:"index.module.css"})," - Archivo de estilos CSS Modules."]}),t("li",{children:[e("code",{children:"index.tsx"})," - Archivo principal del componente en React."]}),t("li",{children:[e("code",{children:"index.stories.tsx"})," - Archivo de historias para la documentación en Storybook."]}),t("li",{children:[e("code",{children:"index.utils.ts"})," - Archivo de utilidades relacionadas con el componente."]}),t("li",{children:[e("code",{children:"index.test.tsx"})," - Archivo de pruebas del componente."]}),t("li",{children:[e("code",{children:"index.utils.test.tsx"})," - Archivo de pruebas de las utilidades del componente."]}),t("li",{children:[e("code",{children:"types.tsx"})," - Archivo de tipos del componente."]}),t("li",{children:[e("code",{children:"components"})," - Carpeta que contiene los componentes hijos del componente principal."]})]})]})}),t(l,{children:[e(r,{col:12,children:e("h2",{children:"Tokens"})}),t(r,{col:8,children:[t(l,{children:[e(r,{col:12,children:e("h3",{children:"Colores"})}),A.map((o,n)=>e(r,{xl:6,xxl:4,children:e(I,{title:o.title,data:o.data})},n))]}),t(l,{children:[e(r,{md:6,children:t(l,{children:[e(r,{col:12,children:e("h3",{children:"Espacios"})}),P.map((o,n)=>e(r,{xl:12,children:e(D,{title:o.title,data:o.data})},n))]})}),e(r,{md:6,children:t(l,{children:[e(r,{col:12,children:e("h3",{children:"Redondeos"})}),$.map((o,n)=>e(r,{xl:12,children:e(ee,{title:o.title,data:o.data})},n))]})})]}),t(l,{children:[e(r,{col:12,children:e("h3",{children:"Textos"})}),E.map((o,n)=>e(r,{xl:6,xxl:4,children:e(ne,{title:o.title,data:o.data})},n))]}),e(l,{children:t(r,{xl:12,xxl:4,children:[e("h2",{children:"Clases de textos"}),t("p",{children:["La clases que estilizan los textos se generan automaticamente bajo el siguiente formato: ",e("strong",{children:".components-ui-text-<lineHeight>-<size>-<fontWeight>"}),", con todas las posibles combinaciones como se muestra a continuación."]}),e(ie,{data:B})]})})]}),t(r,{col:4,children:[e("h3",{children:"Versión Javascript"}),t(R,{variant:"border",children:[e("h4",{children:"Ejemplo de uso y resultado"}),e(y,{code:le,dark:!0,language:"jsx"}),e("div",{style:{backgroundColor:a.color.Primary.value,color:a.color.PrimaryContrast.value,padding:a.spacing.m.value},children:"Hola"})]}),e("h4",{children:"Objeto de tokens"}),e(y,{code:`const tokens = ${JSON.stringify(a,null,4)}`,dark:!0,language:"ts"})]})]})]});c.storyName="Página de inicio";const se=()=>e(c,{}),Oe={title:"Bienvenido",component:se};var x,v,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => <div>
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

                <Row>
                    <Col col={12}>
                        <h3>Textos</h3>
                    </Col>
                    {texts.map((item, index) => <Col xl={6} xxl={4} key={index}>
                            <TextsTable title={item.title} data={item.data} />
                        </Col>)}
                </Row>

                <Row>
                    <Col xl={12} xxl={4}>
                        <h2>Clases de textos</h2>
                        <p>La clases que estilizan los textos se generan automaticamente bajo el siguiente formato: <strong>{\`.components-ui-text-<lineHeight>-<size>-<fontWeight>\`}</strong>, con todas las posibles combinaciones como se muestra a continuación.</p>
                        <ClassTable data={textsClasses} />
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
    </div>`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const Me=["WelcomeStory"];export{c as WelcomeStory,Me as __namedExportsOrder,Oe as default};
