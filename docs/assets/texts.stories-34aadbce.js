import{j as r,a as t}from"./jsx-runtime-fd534075.js";import{t as b,a as C}from"./index.utils-d6a78239.js";import{e as h,I as y}from"./index-ad557eac.js";import{P as x}from"./index-02210d9f.js";import{r as f}from"./index-0cbcd92a.js";import{R as m}from"./index-c2412459.js";import{C as s}from"./index-65ca6685.js";import"./index.utils-3332eaf1.js";import"./index-065d0533.js";import"./index-cba1fa6c.js";import"./index-be75c763.js";import"./Easy-dac9347f.js";import"./index-3a6668d7.js";import"./index-ae9d3e9c.js";import"./index-af5faa0b.js";import"./_commonjsHelpers-de833af9.js";import"./index-4b1b5381.js";import"./index-be8450de.js";import"./index-855dbaba.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-1fcf8fa4.js";import"./index-30c04a33.js";import"./index-7ea187ef.js";const w=e=>e.charAt(0).toUpperCase()+e.slice(1),T=e=>{const a=/(lineHeight|size|weight)(\w+)$/,o=e.match(a),n=o?o[1]:"";return n==="lineHeight"?"lineHeight":`font${w(n)}`},_=[{label:"Nombre",key:"title"},{label:"CSS",renderRow:e=>t("pre",{children:e.cssVar})},{label:"Código",renderRow:e=>t(x,{direction:"row",alignItems:"center",gap:.25,children:t("div",{style:{[T(e.tag)]:e.value},children:e.value})})}],v=({title:e,data:a})=>r("div",{children:[t("h4",{children:e}),t(h,{variant:"narrow",data:a,columns:_})]});try{texttable.displayName="texttable",texttable.__docgenInfo={description:"",displayName:"texttable",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"TokenType[]"}}}}}catch{}const R=e=>{const a=/\.components-ui-text[^{]*/g,o=e.match(a);return o?o.map(n=>{const i=n.replace(".","").trim();return{title:`.${i}`,tag:"Class",cssVar:"--",value:i}}):[]},k=[{label:"Nombre",key:"title"},{label:"Código",renderRow:e=>t(x,{direction:"row",alignItems:"center",gap:.25,children:t("div",{className:e.value,children:"abcABC123"})})}],N=({title:e,data:a})=>{const[o,n]=f.useState(""),g=R(a).filter(c=>c.value.toLowerCase().includes(o.toLowerCase()));return r("div",{children:[e&&t("h4",{children:e}),t(y,{type:"text",placeholder:"Buscar Clase",value:o,onChange:c=>n(c.target.value),size:"s",label:"Buscar Clase"}),t(h,{variant:"narrow",data:g,columns:k,maxHeight:"300px"})]})};try{classtable.displayName="classtable",classtable.__docgenInfo={description:"",displayName:"classtable",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"string"}}}}}catch{}const l=()=>t("div",{children:r(m,{children:[t(s,{col:12,children:t("h2",{children:"Tokens"})}),r(s,{col:12,children:[t(m,{children:r(s,{xl:12,xxl:4,children:[t("h2",{children:"Clases de textos"}),r("p",{children:["La clases que estilizan los textos se generan automaticamente bajo el siguiente formato: ",t("strong",{children:".components-ui-text-<lineHeight>-<size>-<fontWeight>"}),", con todas las posibles combinaciones como se muestra a continuación."]}),t(N,{data:b})]})}),r(m,{children:[t(s,{col:12,children:t("h3",{children:"Textos"})}),C.map((e,a)=>t(s,{xl:6,xxl:4,children:t(v,{title:e.title,data:e.data})},a))]})]})]})});l.storyName="Tokens";const S=()=>t(l,{}),ee={title:"Docs/Tokens/Texts",component:S,argTypes:{backgroundColor:{control:{disable:!0}},onClick:{control:{disable:!0}}}};var d,p,u;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`() => <div>
        <Row>
            <Col col={12}>
                <h2>Tokens</h2>
            </Col>
            <Col col={12}>
                <Row>
                    <Col xl={12} xxl={4}>
                        <h2>Clases de textos</h2>
                        <p>La clases que estilizan los textos se generan automaticamente bajo el siguiente formato: <strong>{\`.components-ui-text-<lineHeight>-<size>-<fontWeight>\`}</strong>, con todas las posibles combinaciones como se muestra a continuación.</p>
                        <ClassTable data={textsClasses} />
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
            </Col>
        </Row>
    </div>`,...(u=(p=l.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const te=["WelcomeStory"];export{l as WelcomeStory,te as __namedExportsOrder,ee as default};
