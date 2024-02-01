import{a,j as i,F as B}from"./jsx-runtime-fd534075.js";import{r as l,R as I}from"./index-0cbcd92a.js";import{B as b}from"./index-84dc9bf1.js";import{I as x}from"./index-ac710f84.js";const A="components-ui__index-module__uploadFiles___Bf7II",O={uploadFiles:A};var F=(n=>(n.success="success",n.error="error",n))(F||{});function U(n){return{"application/pdf":"pdf","image/jpg":"jgp","image/jpeg":"jpeg","image/png":"png"}[n]||null}const p=25*1024*1024;function N(n){let o;return n<1024?o=`${n} B`:n<1024*1024?o=`${Math.round(n/1024)} KB`:o=`${Math.round(n/1024/1024)} MB`,o}const K=l.forwardRef((n,o)=>{const[m,u]=l.useState(!0);return m?a("div",{children:a("input",{"data-testid":"upload-files-files",type:"file",ref:o,style:{display:"none"},onChange:f=>{n.onChange(f),u(!1),setTimeout(()=>{u(!0)},0)},accept:n.accept.join(","),multiple:!0})}):a("span",{})}),P=({title:n,text:o,textButton:m,allowedTypes:u,onChange:d,textRetry:f,errorMessage:_})=>{const[S,h]=l.useState(!1),[s,c]=l.useState([]),g=l.useRef(null),[C]=l.useState("success"),[k,y]=l.useState(!1),j=e=>{e.preventDefault()};I.useEffect(()=>{y(s.some(e=>e==null?void 0:e.error))},[s,c]);const M=e=>{let t=s||[];for(let r of e){const $=D(t);T(r)?(t=t.map(v=>v.name===r.name&&v.lastModified===r.lastModified?r:v),c(t),h(!1)):r&&u.includes(r==null?void 0:r.type)&&($?(t=[...t,r],c(t),d(t)):(r=Object.assign(r,{error:!0}),t=[...t,r],c(t),d(t)),h(!1))}h(!0)},q=e=>{e.preventDefault();const t=Array.from(e.dataTransfer.files);M(t)},w=()=>{g.current&&g.current.click()},T=e=>s==null?void 0:s.some(t=>(t==null?void 0:t.lastModified)===e.lastModified&&(t==null?void 0:t.name)===e.name),D=e=>{let t=0;for(const r of e)t+=r.size;return Math.max(t,p)!==p||Math.max(t,p)>p?(y(!0),!1):(y(!1),!0)},V=e=>{const t=e.target.files;if(t){const r=Array.from(t);M(r)}},z=e=>{e.stopPropagation()},E=e=>{const t=s.filter(r=>r.name!==e.name);c(t),d(t)},R=e=>C===F.success&&e?`${N(e.size)} - ${U(e.type)}`:a("button",{onClick:()=>{d([e])},children:f});return i(B,{children:[a(K,{ref:g,accept:u,onChange:V}),i("div",{className:O.uploadFiles,onDragOver:j,onDrop:q,onClick:w,"data-testid":"upload-files-filename",children:[i("div",{children:[a(x,{name:"UploadAlt",size:32}),a("h4",{children:n}),a("p",{children:o})]}),a("div",{children:a(b,{onClick:()=>{},variant:"secondary",size:"s",children:m})}),S&&(s==null?void 0:s.length)>0&&s.map((e,t)=>i("div",{onClick:r=>z(r),"data-variant":e.error?"error":"success",children:[i("div",{children:[a("strong",{"data-testid":"upload-files-fillename",children:e.name}),a("span",{children:R(e)})]}),i("div",{children:[a(x,{name:C===F.success&&!(e!=null&&e.error)?"SuccessCircle":"AlertCircle"}),a("button",{onClick:()=>E(e),"data-testid":"upload-files-close",children:a(x,{name:"Close",size:14})})]})]},t)),k&&a("p",{"data-variant":"error",children:_})]})]})};try{uploadfiles.displayName="uploadfiles",uploadfiles.__docgenInfo={description:"",displayName:"uploadfiles",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},textButton:{defaultValue:null,description:"",name:"textButton",required:!0,type:{name:"string"}},textRetry:{defaultValue:null,description:"",name:"textRetry",required:!0,type:{name:"string"}},allowedTypes:{defaultValue:null,description:"",name:"allowedTypes",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(files?: File[] | undefined) => void"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!0,type:{name:"string"}}}}}catch{}export{P as U};
