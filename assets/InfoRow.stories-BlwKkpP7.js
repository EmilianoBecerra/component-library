import{I as a}from"./InfoRow-Dy5jMV-F.js";import"./jsx-runtime-u17CrQMm.js";const o=`export function InfoRow({ label, data, isImg }: { label: string, data: string | number | undefined, isImg: boolean }) {\r
  return (\r
    <div className="my-8 mx-3">\r
      <p className="capitalize font-semibold">{label}</p>\r
      {isImg ? <img className="size-40 border-2 outline border-double flex justify-center items-center m-2" src={data as string} alt={'image not available'} /> : <p className="capitalize">{data}</p>}\r
    </div>\r
  )\r
}`,t={title:"Example/TaxonomyTree/SideBar/InfoRow",component:a,parameters:{docs:{source:{code:o,language:"tsx",type:"code"}}}},e={args:{label:"node_id",data:"2",isImg:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "node_id",
    data: "2",
    isImg: true
  }
}`,...e.parameters?.docs?.source}}};const n=["InfoRowCode"];export{e as InfoRowCode,n as __namedExportsOrder,t as default};
