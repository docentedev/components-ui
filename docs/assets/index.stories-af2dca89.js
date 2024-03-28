import{a,j as t}from"./jsx-runtime-fd534075.js";import{S as g,T as n}from"./index-d024abd6.js";import{r as l}from"./index-0cbcd92a.js";import{d as i}from"./index-a60888f1.js";import{R as h}from"./index-c2412459.js";import{C as u}from"./index-65ca6685.js";import{I as f}from"./index-36b10e2f.js";import{I as v}from"./index-491d176f.js";import{P as m}from"./index-02210d9f.js";import{I as r}from"./index-5eea7179.js";import"./index.utils-9dacb6ca.js";import"./index-45b89812.js";import"./index-86b246da.js";import"./Easy-dac9347f.js";import"./index-c63b342a.js";import"./index-8a756933.js";import"./index-af5faa0b.js";import"./_commonjsHelpers-de833af9.js";import"./index-f5215caf.js";import"./index-be8450de.js";import"./index-1b748be7.js";import"./index-d70482d4.js";import"./index-4d9d89a7.js";import"./index-7d5763aa.js";import"./index-7ea187ef.js";import"./index-63de68db.js";const M={title:"Stepper",component:g,tags:["autodocs"],argTypes:{variant:{control:"select",options:["vertical","horizontal"],description:"Orientación de stepper"}},render:e=>a(x,{...e})},x=e=>{const[b,s]=l.useState(e.current||0);return l.useEffect(()=>{s(e.current)},[e]),a(h,{children:a(u,{sm:12,children:a(g,{...e,current:b,onChange:e.onChange&&s})})})},o={args:{steps:[{label:t("div",{style:{display:"flex"},children:["Label 1 ",a(f,{icon:a(v,{name:"WifiOff"}),bgColor:"#ECF6FF",color:"#166DC2"})]}),content:t("div",{children:[a(n,{size:14,weight:400,children:"En ruta a destino"}),a(n,{size:14,weight:400,children:"09/03/2023 - 13:30"}),t(m,{gap:.25,children:[a(r,{variant:"thumbnail",src:`data:image/png;base64,${i.image.data}`}),a(r,{variant:"thumbnail",src:`data:image/png;base64,${i.image.data}`})]})]})},{label:"Label 2",content:a("p",{children:"Ejemplo"})},{label:"Label 3",content:a("p",{children:"Ejemplo"})},{label:"Label 4",content:t("div",{children:[a(n,{size:14,weight:400,children:"En ruta a destino"}),a(n,{size:14,weight:400,children:"09/03/2023 - 13:30"}),t(m,{gap:.25,children:[a(r,{variant:"thumbnail",src:`data:image/png;base64,${i.image.data}`}),a(r,{variant:"thumbnail",src:`data:image/png;base64,${i.image.data}`})]})]})}],current:0,onChange:e=>{console.log(e)},collapsable:!1,variant:"vertical"}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const N=["Default"];export{o as Default,N as __namedExportsOrder,M as default};
