import{j as r,a as e}from"./jsx-runtime-fd534075.js";import{c as l,w as f,s as B,o as s,I as x}from"./index-58573da2.js";import{B as O}from"./base-b06b2246.js";import{r as o}from"./index-0cbcd92a.js";import{S as k}from"./index-d3bdfb6b.js";import{P as D}from"./index-02210d9f.js";import"./index.utils-3332eaf1.js";import"./index-065d0533.js";import"./index-cba1fa6c.js";import"./index-be75c763.js";import"./Easy-dac9347f.js";import"./index-eed2def6.js";import"./index-ae9d3e9c.js";import"./index-af5faa0b.js";import"./_commonjsHelpers-de833af9.js";import"./index-4b1b5381.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-855dbaba.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-1fcf8fa4.js";import"./index-30c04a33.js";import"./index-c2412459.js";import"./index-7ea187ef.js";import"./index-17b46721.js";import"./iframe-c4ef55cc.js";import"../sb-preview/runtime.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const F=`
import { useState } from 'react';
import { Button, Dropdown, Input, InputSwitch, Position, RadioButton, Search } from '@cencosud-cencommerce/components-ui';

const FormControl = () => {
    const [value, setValue] = useState('');
    const [radioValue, setRadioValue] = useState(true);
    const [switchValue, setSwitchValue] = useState(true);
    const [InputValue, setInputValue] = useState('Apellido');
    const [dropdownValue, setDropdownValue] = useState('1');
    return (
        <Position gap={1} alignItems="center">
            <RadioButton label="Nombre" onClick={() => setRadioValue(!radioValue)} checked={radioValue} />
            <InputSwitch size="m" onChange={setSwitchValue} value={switchValue} />
            <Dropdown
                label="Nombre" onChange={(e) => setDropdownValue(e)}
                options={[
                    { label: 'Opción 1', value: '1' },
                    { label: 'Opción 2', value: '2' },
                    { label: 'Opción 3', value: '3' },
                ]}
                value={dropdownValue}
            />
            <Search
                onChange={setValue}
                value={value}
                placeholder="Search"
                size="m"
            />
            <Input label="Apellido" onChange={(e) => setInputValue(e.target.value)} value={InputValue} />
            <Button onClick={() => undefined} size="m" iconLeft="Save">Enviar</Button>
            <Button onClick={() => undefined} size="m" variant="secondary" iconLeft="Close">Cancelar</Button>
        </Position>
    );
};

export default FormControl;
`,a=()=>{const[m,d]=o.useState(""),[i,V]=o.useState(!0),[v,h]=o.useState(!0),[S,C]=o.useState("Apellido"),[b,w]=o.useState("1"),[g,z]=o.useState(""),[t,I]=o.useState("m");return r(O,{title:"FormControl",code:F,children:[e(l,{onClick:()=>I(t==="m"?"s":"m"),children:"Cambiar tamaño"}),r(D,{gap:1,alignItems:"center",children:[e(f,{size:t,label:"Nombre",onClick:()=>V(!i),checked:i}),e(B,{size:t,onChange:h,value:v}),e(s,{label:"Nombre",onChange:n=>w(n),options:[{label:"Opción 1",value:"1"},{label:"Opción 2",value:"2"},{label:"Opción 3",value:"3"}],value:b,size:t}),e(s,{label:"Nombre",onChange:n=>z(n),options:[{label:"Opción 1",value:"1"},{label:"Opción 2",value:"2"},{label:"Opción 3",value:"3"}],value:g,size:t}),e(k,{onChange:d,value:m,placeholder:"Search",size:t}),e(x,{size:t,label:"Apellido",onChange:n=>C(n.target.value),value:S,iconRight:"Activity"}),e(l,{size:t,onClick:()=>{},iconLeft:"Save",children:"Enviar"}),e(l,{size:t,onClick:()=>{},variant:"secondary",iconLeft:"Close",children:"Cancelar"})]})]})};a.storyName="FormControl";const R=()=>e(a,{}),ce={title:" Composiciones/FormControl",component:R,argTypes:{}};var u,c,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const [radioValue, setRadioValue] = useState(true);
  const [switchValue, setSwitchValue] = useState(true);
  const [InputValue, setInputValue] = useState('Apellido');
  const [dropdownValue, setDropdownValue] = useState('1');
  const [dropdownValue2, setDropdownValue2] = useState('');
  const [size, setSize] = useState<'s' | 'm'>('m');
  return <Base title="FormControl" code={codeExample}>
            <Button onClick={() => setSize(size === 'm' ? 's' : 'm')}>Cambiar tamaño</Button>
            <Position gap={1} alignItems="center">
                <RadioButton size={size} label="Nombre" onClick={() => setRadioValue(!radioValue)} checked={radioValue} />
                <InputSwitch size={size} onChange={setSwitchValue} value={switchValue} />
                <Dropdown label="Nombre" onChange={e => setDropdownValue(e)} options={[{
        label: 'Opción 1',
        value: '1'
      }, {
        label: 'Opción 2',
        value: '2'
      }, {
        label: 'Opción 3',
        value: '3'
      }]} value={dropdownValue} size={size} />
                <Dropdown label="Nombre" onChange={e => setDropdownValue2(e)} options={[{
        label: 'Opción 1',
        value: '1'
      }, {
        label: 'Opción 2',
        value: '2'
      }, {
        label: 'Opción 3',
        value: '3'
      }]} value={dropdownValue2} size={size} />
                <Search onChange={setValue} value={value} placeholder="Search" size={size} />
                <Input size={size} label="Apellido" onChange={e => setInputValue(e.target.value)} value={InputValue} iconRight="Activity" />
                <Button size={size} onClick={() => undefined} iconLeft="Save">Enviar</Button>
                <Button size={size} onClick={() => undefined} variant="secondary" iconLeft="Close">Cancelar</Button>
            </Position>
        </Base>;
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const pe=["Story"];export{a as Story,pe as __namedExportsOrder,ce as default};
