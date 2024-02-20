import{a as r,j as y,F as E}from"./jsx-runtime-fd534075.js";import{r as d,R as c}from"./index-0cbcd92a.js";const h=()=>{if(document.getElementById("__bigbang_wave_effect"))return;const e=document.createElement("style");e.id="__bigbang_wave_effect";const n=document.createTextNode(`.__bigbang_wave_effect {
        position: absolute;
        background: var(--components-ui-color-light);
        transform: translate(-50%, -50%);
        pointer-events: none;
        border-radius: 50%;
        animation: animate 1s linear forwards;
    }
    
    @keyframes animate {
        0% {
            width: 0px;
            height: 0px;
            opacity: 0.25;
        }
    
        100% {
            width: 500px;
            height: 500px;
            opacity: 0;
        }
    }`);e.appendChild(n),document.head.appendChild(e)};h();const x=e=>{e.classList.add("__bigbang_wave_container"),e.addEventListener("click",n=>{if(!n.target)return;const i=n.target.getBoundingClientRect(),o=n.clientX-i.left,l=n.clientY-i.top,t=document.createElement("span");t.classList.add("__bigbang_wave_effect"),t.style.left=o+"px",t.style.top=l+"px",e.appendChild(t),setTimeout(()=>{t.remove()},500)})},L=()=>{const e=d.useRef(null);return d.useEffect(()=>{e.current&&!e.current.classList.contains("__bigbang_wave_container")&&x(e.current)},[e]),e},M="components-ui__index-module__button___iwy4B",q="components-ui__index-module__iconLeft___GKOec",V="components-ui__index-module__iconRight___r-wOG",w="components-ui__index-module__loading___HbWtP",s={button:M,iconLeft:q,iconRight:V,loading:w,"button-spin":"components-ui__index-module__button-spin___ypB6k"},k=({onClick:e,children:n,size:a="s",disabled:i,icon:o,iconLeft:l,iconRight:t,type:m,variant:p="primary",block:_,loading:f=!1,onMouseEnter:v,onMouseLeave:g})=>{const b=L(),u=()=>a==="xs"?16:a==="m"?24:a==="l"?27:20;return r("button",{disabled:i,ref:b,onClick:e,onMouseEnter:v,onMouseLeave:g,"data-icon":!!o,"data-icon-left":!!l,"data-icon-right":!!t,"data-loading":f.toString(),"data-variant":p,"data-size":a,"data-block":_,className:s.button,"data-testid":"button",type:m,"data-component":"button",children:o?r("span",{className:s.icon,children:c.cloneElement(o,{size:Number(u())})}):y(E,{children:[l&&r("span",{className:s.iconLeft,children:c.cloneElement(l,{size:Number(u())})}),n,t&&r("span",{className:s.iconRight,children:c.cloneElement(t,{size:Number(u())})})]})})};try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},size:{defaultValue:{value:"s"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xs"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<IconProps, string | JSXElementConstructor<any>>"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactElement<IconProps, string | JSXElementConstructor<any>>"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"ReactElement<IconProps, string | JSXElementConstructor<any>>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"button"'}]}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"primary"'},{value:'"secondary"'},{value:'"ternary"'},{value:'"dashed"'},{value:'"toggle"'}]}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}export{k as B};
