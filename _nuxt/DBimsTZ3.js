import M from"./C5b2JFWJ.js";import{d as z,a0 as L,a9 as D,a1 as F,C as N,o as P,bd as U,G as V,r as j,b9 as E,i as u,z as m,w as f,g,B as t,n as c,c as w,I as k,F as S,aw as B,a8 as K,e as O,t as q,ba as A}from"./C8tV3TAa.js";import{_ as H,a as J,b as Q,c as R,d as T}from"./8Jn9E-Xu.js";import"./Byfi2K3i.js";import"./DO94a_mc.js";const W={slots:{root:"relative group *:not-first:!my-0 *:not-first:!static my-5",list:"relative flex items-center gap-1 border border-[var(--ui-border-muted)] bg-[var(--ui-bg)] border-b-0 rounded-t-[calc(var(--ui-radius)*1.5)] overflow-x-auto p-2",indicator:"absolute left-0 inset-y-2 w-[var(--reka-tabs-indicator-size)] translate-x-[var(--reka-tabs-indicator-position)] transition-[translate,width] duration-200 bg-[var(--ui-bg-elevated)] rounded-[calc(var(--ui-radius)*1.5)] shadow-xs",trigger:["relative inline-flex items-center gap-1.5 text-[var(--ui-text)] data-[state=active]:text-[var(--ui-text-highlighted)] hover:bg-[var(--ui-bg-elevated)]/50 px-2 py-1.5 text-sm rounded-[calc(var(--ui-radius)*1.5)] disabled:cursor-not-allowed disabled:opacity-75 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-primary)] focus:outline-none","transition-colors"],triggerIcon:"size-4 shrink-0",triggerLabel:"truncate"}},X=K;var I,$;const Y=B({extend:B(W),...(($=(I=X.uiPro)==null?void 0:I.prose)==null?void 0:$.codeGroup)||{}}),Z=z({__name:"CodeGroup",props:L({defaultValue:{default:"0"},sync:{},class:{},ui:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(v){const s=v,p=D(),o=F(v,"modelValue"),n=Y(),b=N(()=>{var e,a;return((a=(e=p.default)==null?void 0:e.call(p))==null?void 0:a.flatMap(y).filter(Boolean))||[]});function y(e,a){var d,l,i,r;return typeof e.type=="symbol"?(d=e.children)==null?void 0:d.map(y):{label:((l=e.props)==null?void 0:l.filename)||((i=e.props)==null?void 0:i.label)||`${a}`,icon:(r=e.props)==null?void 0:r.icon,component:e}}P(()=>{if(s.sync){const e=`code-group-${s.sync}`,a=U(e,()=>localStorage.getItem(e));V(a,()=>{a.value&&(o.value=a.value)},{immediate:!0}),V(o,()=>{o.value&&(a.value=o.value,localStorage.setItem(e,o.value))})}});const G=j(1);return E(()=>G.value++),(e,a)=>{var d;return u(),m(t(Q),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=l=>o.value=l),"default-value":e.defaultValue,"unmount-on-hide":!1,class:c(t(n).root({class:[s.class,(d=s.ui)==null?void 0:d.root]}))},{default:f(()=>{var l;return[g(t(J),{class:c(t(n).list({class:(l=s.ui)==null?void 0:l.list}))},{default:f(()=>{var i;return[g(t(H),{class:c(t(n).indicator({class:(i=s.ui)==null?void 0:i.indicator}))},null,8,["class"]),(u(!0),w(S,null,k(b.value,(r,_)=>{var h;return u(),m(t(R),{key:_,value:String(_),class:c(t(n).trigger({class:(h=s.ui)==null?void 0:h.trigger}))},{default:f(()=>{var x,C;return[g(M,{icon:r.icon,filename:r.label,class:c(t(n).triggerIcon({class:(x=s.ui)==null?void 0:x.triggerIcon}))},null,8,["icon","filename","class"]),O("span",{class:c(t(n).triggerLabel({class:(C=s.ui)==null?void 0:C.triggerLabel}))},q(r.label),3)]}),_:2},1032,["value","class"])}),128))]}),_:1},8,["class"]),(u(!0),w(S,null,k(b.value,(i,r)=>(u(),m(t(T),{key:r,value:String(r),"as-child":""},{default:f(()=>[(u(),m(A(i.component),{"hide-header":"",tabindex:"-1"}))]),_:2},1032,["value"]))),128))]}),_:1},8,["modelValue","default-value","class"])}}}),oe=Object.assign(Z,{__name:"ProseCodeGroup"});export{oe as default};