import{a,j as t}from"./jsx-runtime-fd534075.js";import{S as g}from"./index-ab1561a1.js";import{r as l}from"./index-0cbcd92a.js";import{d as n}from"./index-a60888f1.js";import{R as h}from"./index-6bf6aae2.js";import{C as u}from"./index-65ca6685.js";import{I as f}from"./index-36b10e2f.js";import{I as v}from"./index-c6806b1e.js";import{T as i}from"./index-d26c0335.js";import{P as m}from"./index-02210d9f.js";import{I as r}from"./index-b6ef4225.js";/* empty css              */import"./index-e93fb818.js";import"./index-a2221cae.js";import"./index-675c71d2.js";import"./index-95bac54b.js";import"./index-935947eb.js";import"./index-e4ae079a.js";import"./index-af5faa0b.js";import"./_commonjsHelpers-de833af9.js";import"./index-c411b3f6.js";import"./index-4cd4725f.js";import"./index-5f7741f7.js";import"./index-3b419322.js";import"./index-d70482d4.js";import"./index-84a1b8f1.js";import"./index-25cbe26a.js";import"./index-7ea187ef.js";import"./index-63de68db.js";const U={title:"Stepper",component:g,tags:["autodocs"],argTypes:{variant:{control:"select",options:["vertical","horizontal"],description:"Orientación de stepper"}},render:e=>a(x,{...e})},x=e=>{const[b,s]=l.useState(e.current||0);return l.useEffect(()=>{s(e.current)},[e]),a(h,{children:a(u,{sm:12,children:a(g,{...e,current:b,onChange:e.onChange&&s})})})},o={args:{steps:[{label:t("div",{style:{display:"flex"},children:["Label 1 ",a(f,{icon:a(v,{name:"WifiOff"}),bgColor:"#ECF6FF",color:"#166DC2"})]}),content:t("div",{children:[a(i,{size:14,weight:400,children:"En ruta a destino"}),a(i,{size:14,weight:400,children:"09/03/2023 - 13:30"}),t(m,{gap:.25,children:[a(r,{variant:"thumbnail",src:`data:image/png;base64,${n.image.data}`}),a(r,{variant:"thumbnail",src:`data:image/png;base64,${n.image.data}`})]})]})},{label:"Label 2",content:a("p",{children:"Ejemplo"})},{label:"Label 3",content:a("p",{children:"Ejemplo"})},{label:"Label 4",content:t("div",{children:[a(i,{size:14,weight:400,children:"En ruta a destino"}),a(i,{size:14,weight:400,children:"09/03/2023 - 13:30"}),t(m,{gap:.25,children:[a(r,{variant:"thumbnail",src:`data:image/png;base64,${n.image.data}`}),a(r,{variant:"thumbnail",src:`data:image/png;base64,${n.image.data}`})]})]})}],current:0,onChange:e=>{console.log(e)},collapsable:!1,variant:"vertical"}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: <div style={{
        display: 'flex'
      }}>
          Label 1 <IconTag icon={<Icon name='WifiOff' />} bgColor={'#ECF6FF'} color={'#166DC2'} /></div>,
      content: <div>
            <Text2 size={14} weight={400}>
                En ruta a destino
            </Text2>
            <Text2 size={14} weight={400}>
                09/03/2023 - 13:30
            </Text2>
            <Position gap={0.25}>
              <Image variant='thumbnail' src={\`data:image/png;base64,\${data.image.data}\`} />
              <Image variant='thumbnail' src={\`data:image/png;base64,\${data.image.data}\`} />
            </Position>
          </div>
    }, {
      label: 'Label 2',
      content: <p>Ejemplo</p>
    }, {
      label: 'Label 3',
      content: <p>Ejemplo</p>
    }, {
      label: 'Label 4',
      content: <div>
            <Text2 size={14} weight={400}>
                En ruta a destino
            </Text2>
            <Text2 size={14} weight={400}>
                09/03/2023 - 13:30
            </Text2>
            <Position gap={0.25}>
              <Image variant='thumbnail' src={\`data:image/png;base64,\${data.image.data}\`} />
              <Image variant='thumbnail' src={\`data:image/png;base64,\${data.image.data}\`} />
            </Position>
          </div>
    }],
    current: 0,
    onChange: step => {
      console.log(step);
    },
    collapsable: false,
    variant: 'vertical'
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const V=["Default"];export{o as Default,V as __namedExportsOrder,U as default};
