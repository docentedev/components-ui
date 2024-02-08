import{a,j as n}from"./jsx-runtime-fd534075.js";import{S as g,I as e}from"./index-544c1517.js";import{r as m}from"./index-0cbcd92a.js";/* empty css              */import"./index-b6d2231d.js";import"./index-9d240acf.js";import"./index-8f766174.js";import"./index-84dc9bf1.js";import"./index-1f462de8.js";import"./index-79643050.js";import{C as u}from"./index-65ca6685.js";import"./index-4cd4725f.js";import"./index-fe1f79b9.js";import"./index-3b419322.js";import{I as v}from"./index-637a0b9d.js";import{I as h}from"./index-36b10e2f.js";import"./index-b43a95bf.js";import"./index-ff6583ff.js";import"./index-25efc564.js";import"./index-b8e17b4a.js";import"./index-d70482d4.js";import"./index-b110e266.js";import"./index-e468dd1b.js";import{P as s}from"./index-02210d9f.js";import{R as f}from"./index-6bf6aae2.js";import"./index-e60269c1.js";import"./index-ca290e2a.js";import{T as r}from"./index-1dd3ce52.js";import"./index-ebebd9f2.js";import"./index-7cc21f4d.js";import"./index-ac69d7f1.js";import"./index-63de68db.js";import{d as i}from"./index-a60888f1.js";import"./index-af5faa0b.js";import"./_commonjsHelpers-de833af9.js";const ta={title:"Stepper",component:g,tags:["autodocs"],argTypes:{variant:{control:"select",options:["vertical","horizontal"],description:"Orientación de stepper"}},render:t=>a(x,{...t})},x=t=>{const[b,l]=m.useState(t.current||0);return m.useEffect(()=>{l(t.current)},[t]),a(f,{children:a(u,{sm:12,children:a(g,{...t,current:b,onChange:t.onChange&&l})})})},o={args:{steps:[{label:n("div",{style:{display:"flex"},children:["Label 1 ",a(h,{icon:a(v,{name:"WifiOff"}),bgColor:"#ECF6FF",color:"#166DC2"})]}),content:n("div",{children:[a(r,{variant:"regular",children:"En ruta a destino"}),a(r,{variant:"silent",children:"09/03/2023 - 13:30"}),n(s,{gap:.25,children:[a(e,{variant:"thumbnail",src:`data:image/png;base64,${i.image.data}`}),a(e,{variant:"thumbnail",src:`data:image/png;base64,${i.image.data}`})]})]})},{label:"Label 2",content:a("p",{children:"Ejemplo"})},{label:"Label 3",content:a("p",{children:"Ejemplo"})},{label:"Label 4",content:n("div",{children:[a(r,{variant:"regular",children:"En ruta a destino"}),a(r,{variant:"silent",children:"09/03/2023 - 13:30"}),n(s,{gap:.25,children:[a(e,{variant:"thumbnail",src:`data:image/png;base64,${i.image.data}`}),a(e,{variant:"thumbnail",src:`data:image/png;base64,${i.image.data}`})]})]})}],current:0,onChange:t=>{console.log(t)},collapsable:!1,variant:"vertical"}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: <div style={{
        display: 'flex'
      }}>
          Label 1 <IconTag icon={<Icon name='WifiOff' />} bgColor={'#ECF6FF'} color={'#166DC2'} /></div>,
      content: <div>
            <Text variant='regular'>
              En ruta a destino
            </Text>
            <Text variant='silent'>
              09/03/2023 - 13:30
            </Text>
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
            <Text variant='regular'>
              En ruta a destino
            </Text>
            <Text variant='silent'>
              09/03/2023 - 13:30
            </Text>
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
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const na=["Default"];export{o as Default,na as __namedExportsOrder,ta as default};
