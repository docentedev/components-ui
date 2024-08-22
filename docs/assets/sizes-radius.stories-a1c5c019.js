import{a as e,j as a}from"./jsx-runtime-fd534075.js";import{s as u,r as h}from"./index.utils-f98ef574.js";import{t as l,e as p}from"./index-440ab434.js";import{P as m}from"./index-02210d9f.js";import{R as n}from"./index-c2412459.js";import{C as i}from"./index-65ca6685.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./index.utils-3332eaf1.js";import"./index-564d8fa6.js";import"./index-130c2559.js";import"./index-177d311a.js";import"./Easy-dac9347f.js";import"./index-bbe009cc.js";import"./index-ae9d3e9c.js";import"./index-af5faa0b.js";import"./index-339673fb.js";import"./index-be8450de.js";import"./index-7b389540.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-86e4212d.js";import"./index-f05aaf72.js";import"./index-7ea187ef.js";const g=({spacing:r})=>e("div",{children:a("div",{style:{backgroundColor:l.color.Primary.value,color:l.color.PrimaryContrast.value,display:"flex",boxShadow:"0 0 0 1px rgba(0,0,0,0.1)",borderRadius:"0.25rem"},children:[e("div",{style:{width:r,backgroundColor:l.color.PrimaryLowContrast.value,height:"1.25rem"}}),"Spacing"]})});try{spacingbox.displayName="spacingbox",spacingbox.__docgenInfo={description:"",displayName:"spacingbox",props:{spacing:{defaultValue:null,description:"",name:"spacing",required:!0,type:{name:"string"}}}}}catch{}const y=[{label:"Nombre",key:"title"},{label:"CSS",renderRow:r=>e("pre",{children:r.cssVar})},{label:"Código",renderRow:r=>a(m,{direction:"row",alignItems:"center",gap:.25,children:[e(g,{spacing:r.value}),e("div",{children:e("pre",{children:r.value})})]})}],b=({title:r,data:o})=>a("div",{children:[e("h4",{children:r}),e(p,{variant:"narrow",data:o,columns:y})]});try{spacingtable.displayName="spacingtable",spacingtable.__docgenInfo={description:"",displayName:"spacingtable",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}}}}}catch{}const C=[{label:"Nombre",key:"title"},{label:"CSS",renderRow:r=>e("pre",{children:r.cssVar})},{label:"Código",renderRow:r=>e(m,{direction:"row",alignItems:"center",gap:.25,children:e("div",{style:{color:l.color.PrimaryContrast.value,textAlign:"center",lineHeight:"4.6",width:"3.5rem",height:"3.5rem",backgroundColor:"var(--components-ui-color-primary)",borderRadius:`${r.value}`},children:r.value})})}],_=({title:r,data:o})=>a("div",{children:[e("h4",{children:r}),e(p,{variant:"narrow",data:o,columns:C})]});try{radiustable.displayName="radiustable",radiustable.__docgenInfo={description:"",displayName:"radiustable",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"any[]"}}}}}catch{}const t=()=>e("div",{children:e(n,{children:e(i,{col:12,children:a(n,{children:[e(i,{md:6,children:a(n,{children:[e(i,{col:12,children:e("h3",{children:"Espacios"})}),u.map((r,o)=>e(i,{xl:12,children:e(b,{title:r.title,data:r.data})},o))]})}),e(i,{md:6,children:a(n,{children:[e(i,{col:12,children:e("h3",{children:"Redondeos"})}),h.map((r,o)=>e(i,{xl:12,children:e(_,{title:r.title,data:r.data})},o))]})})]})})})});t.storyName="Tokens";const x=()=>e(t,{}),G={title:"Docs/Tokens/Sizes Radius",component:x,argTypes:{backgroundColor:{control:{disable:!0}},onClick:{control:{disable:!0}}}};var d,c,s;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => <div>
        <Row>
            <Col col={12}>
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
        </Row>
    </div>`,...(s=(c=t.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const J=["WelcomeStory"];export{t as WelcomeStory,J as __namedExportsOrder,G as default};
