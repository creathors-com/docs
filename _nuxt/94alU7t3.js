import{d as w,a9 as B,y as z,C as n,i as t,c as g,z as i,w as V,e as m,H as N,f as s,n as a,B as P,t as S,aw as h,b2 as A,ad as L,a8 as U}from"./C8tV3TAa.js";import{r as $}from"./DrOh1cdP.js";import"./BmlbPuZL.js";const j={slots:{base:["group relative block p-4 sm:p-6 border border-[var(--ui-border)] rounded-[calc(var(--ui-radius)*1.5)] bg-[var(--ui-bg)]","transition-colors"],icon:"size-6 mb-2 block",title:"text-[var(--ui-text-highlighted)] font-semibold",description:"text-[15px] text-[var(--ui-text-muted)]",externalIcon:["size-4 align-top absolute right-2 top-2 text-[var(--ui-text-dimmed)] pointer-events-none","transition-colors"]},variants:{color:{primary:{icon:"text-[var(--ui-primary)]"},secondary:{icon:"text-[var(--ui-secondary)]"},success:{icon:"text-[var(--ui-success)]"},info:{icon:"text-[var(--ui-info)]"},warning:{icon:"text-[var(--ui-warning)]"},error:{icon:"text-[var(--ui-error)]"},neutral:{icon:"text-[var(--ui-text-highlighted)]"}},to:{true:""},title:{true:{description:"mt-1"}}},compoundVariants:[{color:"primary",to:!0,class:{base:"hover:bg-[var(--ui-primary)]/10 hover:border-[var(--ui-primary)]",externalIcon:"group-hover:text-[var(--ui-primary)]"}},{color:"secondary",to:!0,class:{base:"hover:bg-[var(--ui-secondary)]/10 hover:border-[var(--ui-secondary)]",externalIcon:"group-hover:text-[var(--ui-secondary)]"}},{color:"success",to:!0,class:{base:"hover:bg-[var(--ui-success)]/10 hover:border-[var(--ui-success)]",externalIcon:"group-hover:text-[var(--ui-success)]"}},{color:"info",to:!0,class:{base:"hover:bg-[var(--ui-info)]/10 hover:border-[var(--ui-info)]",externalIcon:"group-hover:text-[var(--ui-info)]"}},{color:"warning",to:!0,class:{base:"hover:bg-[var(--ui-warning)]/10 hover:border-[var(--ui-warning)]",externalIcon:"group-hover:text-[var(--ui-warning)]"}},{color:"error",to:!0,class:{base:"hover:bg-[var(--ui-error)]/10 hover:border-[var(--ui-error)]",externalIcon:"group-hover:text-[var(--ui-error)]"}},{color:"neutral",to:!0,class:{base:"hover:bg-[var(--ui-bg-elevated)]/50 hover:border-[var(--ui-border-inverted)]",externalIcon:"group-hover:text-[var(--ui-text-highlighted)]"}}],defaultVariants:{color:"primary"}},D=U;var x,f;const E=h({extend:h(j),...((f=(x=D.uiPro)==null?void 0:x.prose)==null?void 0:f.card)||{}}),H=w({inheritAttrs:!1,__name:"Card",props:{to:{},target:{},icon:{},title:{},color:{},class:{},ui:{}},setup(y){const e=y,_=B(),k=z(),o=n(()=>E({color:e.color,to:!!e.to,title:!!e.title})),c=n(()=>e.target||(e.to&&typeof e.to=="string"&&e.to.startsWith("http")?"_blank":void 0)),C=n(()=>(e.title||"Card link").trim());return(r,l)=>{var v,d,p,b;const I=A,u=L;return t(),g("div",{class:a(o.value.base({class:e.class}))},[r.to?(t(),i(I,N({key:0,"aria-label":C.value},{to:r.to,target:c.value,...r.$attrs},{class:"focus:outline-none",tabindex:"-1"}),{default:V(()=>l[0]||(l[0]=[m("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):s("",!0),r.icon?(t(),i(u,{key:1,name:r.icon,class:a(o.value.icon({class:(v=e.ui)==null?void 0:v.icon}))},null,8,["name","class"])):s("",!0),r.to&&c.value==="_blank"?(t(),i(u,{key:2,name:P(k).ui.icons.external,class:a(o.value.externalIcon({class:(d=e.ui)==null?void 0:d.externalIcon}))},null,8,["name","class"])):s("",!0),m("p",{class:a(o.value.title({class:(p=e.ui)==null?void 0:p.title}))},S(r.title),3),_.default?(t(),g("p",{key:3,class:a(o.value.description({class:(b=e.ui)==null?void 0:b.description}))},[$(r.$slots,"default",{mdcUnwrap:"p"})],2)):s("",!0)],2)}}}),F=Object.assign(H,{__name:"ProseCard"});export{F as default};
