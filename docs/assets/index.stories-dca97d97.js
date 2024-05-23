import{a as e,j as C}from"./jsx-runtime-fd534075.js";import{w as h,s as w,o as S,I as b,c as l}from"./index-e7785099.js";import{B as I}from"./base-8888c56d.js";import{r as o}from"./index-0cbcd92a.js";import{P as g}from"./index-02210d9f.js";import"./index.utils-3332eaf1.js";import"./index-780adb94.js";import"./index-2922d105.js";import"./index-be75c763.js";import"./Easy-dac9347f.js";import"./index-652dad33.js";import"./index-ae9d3e9c.js";import"./index-af5faa0b.js";import"./_commonjsHelpers-de833af9.js";import"./index-b184faa2.js";import"./index-65ca6685.js";import"./index-be8450de.js";import"./index-b44cf4c5.js";import"./index-36b10e2f.js";import"./index-5eea7179.js";import"./index-d70482d4.js";import"./index-e6b5a189.js";import"./index-cce712fb.js";import"./index-c2412459.js";import"./index-7ea187ef.js";import"./index-b3e5cfc9.js";import"./iframe-5f95124e.js";import"../sb-preview/runtime.js";import"./index-d8983a70.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";const f=`
import { useState } from 'react';
import { Button, Dropdown, Input, InputSwitch, Position, RadioButton } from '@cencosud-cencommerce/components-ui';

const FormControl = () => {
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
            <Input label="Apellido" onChange={(e) => setInputValue(e.target.value)} value={InputValue} />
            <Button onClick={() => undefined} size="m" iconLeft="Save">Enviar</Button>
            <Button onClick={() => undefined} size="m" variant="secondary" iconLeft="Close">Cancelar</Button>
        </Position>
    );
};

export default FormControl;
`,t=()=>{const[a,s]=o.useState(!0),[p,c]=o.useState(!0),[m,d]=o.useState("Apellido"),[V,v]=o.useState("1");return e(I,{title:"FormControl",code:f,children:C(g,{gap:1,alignItems:"center",children:[e(h,{label:"Nombre",onClick:()=>s(!a),checked:a}),e(w,{size:"m",onChange:c,value:p}),e(S,{label:"Nombre",onChange:n=>v(n),options:[{label:"Opción 1",value:"1"},{label:"Opción 2",value:"2"},{label:"Opción 3",value:"3"}],value:V}),e(b,{label:"Apellido",onChange:n=>d(n.target.value),value:m}),e(l,{onClick:()=>{},size:"m",iconLeft:"Save",children:"Enviar"}),e(l,{onClick:()=>{},size:"m",variant:"secondary",iconLeft:"Close",children:"Cancelar"})]})})};t.storyName="FormControl";const B=()=>e(t,{}),oe={title:" Composiciones/FormControl",component:B,argTypes:{}};var i,r,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [radioValue, setRadioValue] = useState(true);
  const [switchValue, setSwitchValue] = useState(true);
  const [InputValue, setInputValue] = useState('Apellido');
  const [dropdownValue, setDropdownValue] = useState('1');
  return <Base title="FormControl" code={codeExample}>
            <Position gap={1} alignItems="center">
                <RadioButton label="Nombre" onClick={() => setRadioValue(!radioValue)} checked={radioValue} />
                <InputSwitch size="m" onChange={setSwitchValue} value={switchValue} />
                <Dropdown label="Nombre" onChange={e => setDropdownValue(e)} options={[{
        label: 'Opción 1',
        value: '1'
      }, {
        label: 'Opción 2',
        value: '2'
      }, {
        label: 'Opción 3',
        value: '3'
      }]} value={dropdownValue} />
                <Input label="Apellido" onChange={e => setInputValue(e.target.value)} value={InputValue} />
                <Button onClick={() => undefined} size="m" iconLeft="Save">Enviar</Button>
                <Button onClick={() => undefined} size="m" variant="secondary" iconLeft="Close">Cancelar</Button>
            </Position>
        </Base>;
}`,...(u=(r=t.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const ne=["Story"];export{t as Story,ne as __namedExportsOrder,oe as default};
