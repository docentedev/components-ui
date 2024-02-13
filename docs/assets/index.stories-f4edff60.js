import{a,j as e}from"./jsx-runtime-fd534075.js";import{S as g,I as n}from"./index-52949728.js";import{r as m}from"./index-0cbcd92a.js";/* empty css              */import"./index-964f190d.js";import"./index-1335fada.js";import"./index-287b9535.js";import"./index-07b437fe.js";import"./index-528324a4.js";import"./index-89aa9bbc.js";import{C as h}from"./index-65ca6685.js";import"./index-4cd4725f.js";import"./index-d2c7445a.js";import"./index-3b419322.js";import{I as u}from"./index-ac710f84.js";import{I as f}from"./index-36b10e2f.js";import"./index-c29d1954.js";import"./index-354a9bc7.js";import"./index-dc21327b.js";import"./index-3f0062ba.js";import"./index-d70482d4.js";import"./index-d49d0512.js";import"./index-5bc492e7.js";import{P as p}from"./index-02210d9f.js";import{R as v}from"./index-6bf6aae2.js";import"./index-e60269c1.js";import"./index-ca290e2a.js";import"./index-953e2aaf.js";import{T as i}from"./index-dcf7c67b.js";import"./index-886936c1.js";import"./index-c29c2bb6.js";import"./index-63de68db.js";import{d as r}from"./index-a60888f1.js";import"./index-af5faa0b.js";import"./_commonjsHelpers-de833af9.js";const ta={title:"Stepper",component:g,tags:["autodocs"],argTypes:{variant:{control:"select",options:["vertical","horizontal"],description:"Orientación de stepper"}},render:t=>a(x,{...t})},x=t=>{const[b,s]=m.useState(t.current||0);return m.useEffect(()=>{s(t.current)},[t]),a(v,{children:a(h,{sm:12,children:a(g,{...t,current:b,onChange:t.onChange&&s})})})},o={args:{steps:[{label:e("div",{style:{display:"flex"},children:["Label 1 ",a(f,{icon:a(u,{name:"WifiOff"}),bgColor:"#ECF6FF",color:"#166DC2"})]}),content:e("div",{children:[a(i,{size:14,weight:400,children:"En ruta a destino"}),a(i,{size:14,weight:400,children:"09/03/2023 - 13:30"}),e(p,{gap:.25,children:[a(n,{variant:"thumbnail",src:`data:image/png;base64,${r.image.data}`}),a(n,{variant:"thumbnail",src:`data:image/png;base64,${r.image.data}`})]})]})},{label:"Label 2",content:a("p",{children:"Ejemplo"})},{label:"Label 3",content:a("p",{children:"Ejemplo"})},{label:"Label 4",content:e("div",{children:[a(i,{size:14,weight:400,children:"En ruta a destino"}),a(i,{size:14,weight:400,children:"09/03/2023 - 13:30"}),e(p,{gap:.25,children:[a(n,{variant:"thumbnail",src:`data:image/png;base64,${r.image.data}`}),a(n,{variant:"thumbnail",src:`data:image/png;base64,${r.image.data}`})]})]})}],current:0,onChange:t=>{console.log(t)},collapsable:!1,variant:"vertical"}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const ea=["Default"];export{o as Default,ea as __namedExportsOrder,ta as default};
