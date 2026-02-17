import{j as o}from"./jsx-runtime-u17CrQMm.js";import"./iframe-Ck2lmXdS.js";import"./preload-helper-PPVm8Dsz.js";function e({nombre:n}){return o.jsx("div",{children:o.jsxs("p",{children:["Este es mi primer componente y yo soy ",o.jsxs("span",{style:{color:"hsl(var(--colors-brand-light))"},children:[n,"  "]})]})})}e.__docgenInfo={description:"",methods:[],displayName:"FirstComponent",props:{nombre:{required:!0,tsType:{name:"string"},description:""}}};const s=`import "../globals.css"\r
\r
export function FirstComponent({ nombre }: { nombre: string }) {\r
    return (\r
        <div>\r
            <p>Este es mi primer componente y yo soy <span style={{ color: \`hsl(var(--colors-brand-light))\` }}>{nombre}  </span></p>\r
        </div >\r
    )\r
}`,p={title:"Example/firstComponent",component:e,parameters:{docs:{source:{code:s,language:"tsx",type:"code"}}}},r={args:{nombre:"Emiliano"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    nombre: "Emiliano"
  }
}`,...r.parameters?.docs?.source}}};const a=["FirstComponentExample"];export{r as FirstComponentExample,a as __namedExportsOrder,p as default};
