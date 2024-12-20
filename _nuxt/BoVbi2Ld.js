import{d as S,an as A,ao as b,c as i,e as u,n as c,C as e,ah as x,g as B,t as $,h as f,f as y,i as C,F as H,af as M,ag as h,ai as _,a9 as z,am as le,w as O,aJ as ce,ak as ue,al as ee,k as de,aa as R,B as U,aK as E,ar as q,x as V,aL as pe,aM as ge,r as T,E as fe,aN as me,aO as ye,a as be,u as ve,aP as he,s as ke,aQ as te,aR as xe,aS as _e,au as ae,aT as ne,aU as we,aV as $e,q as se,aW as Ce}from"./JxFYEXj8.js";import Se from"./BC7USbHO.js";import"./BeurdNC4.js";import"./6LyLEHTP.js";import"./BneCoJRQ.js";const Ae={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},Ue={class:"flex flex-col lg:flex-row items-start gap-6"},Oe={class:"flex-1"},ze=S({inheritAttrs:!1,__name:"PageHeader",props:{headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const r={wrapper:"relative border-b border-gray-200 dark:border-gray-800 py-8",container:"flex flex-col lg:flex-row lg:items-center lg:justify-between",headline:"mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5",title:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",icon:{wrapper:"flex",base:"w-10 h-10 flex-shrink-0 text-primary"},links:"flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0"},l=t,{ui:s,attrs:a}=A("page.header",b(l,"ui"),r,b(l,"class"),!0);return(o,n)=>{var p;const g=z,m=le;return i(),u("div",_({class:e(s).wrapper},e(a)),[t.headline||o.$slots.headline?(i(),u("div",{key:0,class:c(e(s).headline)},[x(o.$slots,"headline",{},()=>[B($(t.headline),1)])],2)):f("",!0),y("div",Ue,[t.icon||o.$slots.icon?(i(),u("div",{key:0,class:c(e(s).icon.wrapper)},[x(o.$slots,"icon",{},()=>[C(g,{name:t.icon,class:c(e(s).icon.base)},null,8,["name","class"])])],2)):f("",!0),y("div",Oe,[y("div",{class:c(e(s).container)},[y("h1",{class:c(e(s).title)},[x(o.$slots,"title",{},()=>[B($(t.title),1)])],2),(p=t.links)!=null&&p.length||o.$slots.links?(i(),u("div",{key:0,class:c(e(s).links)},[x(o.$slots,"links",{},()=>[(i(!0),u(H,null,M(t.links,(v,d)=>(i(),h(m,_({key:d,ref_for:!0},{...v,target:v.target||"_blank",color:v.color||"white"},{onClick:v.click}),null,16,["onClick"]))),128))])],2)):f("",!0)],2),t.description||o.$slots.description?(i(),u("div",{key:0,class:c(e(s).description)},[x(o.$slots,"description",{},()=>[B($(t.description),1)])],2)):f("",!0),x(o.$slots,"default")])])],16)}}}),je=S({inheritAttrs:!1,__name:"ContentSurroundLink",props:{link:{type:Object,required:!0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const r={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},l=t,{ui:s,attrs:a}=A("content.surround.link",b(l,"ui"),r,b(l,"class"),!0);return(o,n)=>{const g=z,m=ce;return i(),h(m,_({to:t.link._path,class:e(s).wrapper},e(a)),{default:O(()=>[t.icon||t.link.icon?(i(),u("div",{key:0,class:c(e(s).icon.wrapper)},[C(g,{name:t.icon||t.link.icon,class:c(e(s).icon.base)},null,8,["name","class"])],2)):f("",!0),y("p",{class:c(e(s).title)},$(t.link.title),3),y("p",{class:c(e(s).description)},$(t.link.description),3)]),_:1},16,["to","class"])}}}),Ie={key:1,class:"hidden sm:block"},Be=S({inheritAttrs:!1,__name:"ContentSurround",props:{surround:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const r={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},l=t,{ui:s,attrs:a}=A("content.surround",b(l,"ui"),r,b(l,"class"),!0),[o,n]=l.surround||[];return(g,m)=>{const p=je;return i(),u("div",_({class:e(s).wrapper},e(a)),[e(o)?(i(),h(p,{key:0,link:e(o),ui:e(s).link,icon:e(s).icon.prev},null,8,["link","ui","icon"])):(i(),u("span",Ie," ")),e(n)?(i(),h(p,{key:2,link:e(n),ui:e(s).link,icon:e(s).icon.next,class:"text-right"},null,8,["link","ui","icon"])):f("",!0)],16)}}}),Le=S({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const r={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},l=t,{ui:s,attrs:a}=A("page.body",b(l,"ui"),r,b(l,"class"),!0);return(o,n)=>(i(),u("div",_({class:[e(s).wrapper,t.prose&&e(s).prose]},e(a)),[x(o.$slots,"default")],16))}}),P=ue(ee.ui.strategy,ee.ui.divider,Ae),Pe=S({components:{UIcon:z,UAvatar:R},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>P.default.size,validator(t){return Object.keys(P.border.size.horizontal).includes(t)||Object.keys(P.border.size.vertical).includes(t)}},orientation:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},type:{type:String,default:"solid",validator:t=>["solid","dotted","dashed"].includes(t)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:r,attrs:l}=A("divider",b(t,"ui"),P),s=U(()=>E(q(r.value.wrapper.base,r.value.wrapper[t.orientation]),t.class)),a=U(()=>q(r.value.container.base,r.value.container[t.orientation])),o=U(()=>q(r.value.border.base,r.value.border[t.orientation],r.value.border.size[t.orientation][t.size],r.value.border.type[t.type]));return{ui:r,attrs:l,wrapperClass:s,containerClass:a,borderClass:o}}});function Te(t,r,l,s,a,o){const n=z,g=R;return i(),u("div",_({class:t.wrapperClass},t.attrs),[y("div",{class:c(t.borderClass)},null,2),t.label||t.icon||t.avatar||t.$slots.default?(i(),u(H,{key:0},[y("div",{class:c(t.containerClass)},[x(t.$slots,"default",{},()=>[t.label?(i(),u("span",{key:0,class:c(t.ui.label)},$(t.label),3)):t.icon?(i(),h(n,{key:1,name:t.icon,class:c(t.ui.icon.base)},null,8,["name","class"])):t.avatar?(i(),h(g,_({key:2},{size:t.ui.avatar.size,...t.avatar},{class:t.ui.avatar.base}),null,16,["class"])):f("",!0)])],2),y("div",{class:c(t.borderClass)},null,2)],64)):f("",!0)],16)}const He=de(Pe,[["render",Te]]),Ne=S({inheritAttrs:!1,__name:"PageLinks",props:{title:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const r=V(),l=U(()=>({wrapper:"space-y-3",title:"text-sm/6 font-semibold flex items-center gap-1.5",container:"space-y-3 lg:space-y-1.5",base:"flex items-center gap-1.5",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{base:"w-5 h-5 flex-shrink-0"},avatar:{base:"self-center",size:"2xs"},externalIcon:{name:r.ui.icons.external,base:"w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"},label:"text-sm/6 font-medium relative"})),s=t,{ui:a,attrs:o}=A("page.links",b(s,"ui"),l,b(s,"class"),!0);return(n,g)=>{const m=z,p=R,v=ge;return i(),u("div",_({class:e(a).wrapper},e(o)),[t.title||n.$slots.title?(i(),u("p",{key:0,class:c(e(a).title)},[x(n.$slots,"title",{},()=>[B($(t.title),1)])],2)):f("",!0),y("div",{class:c(e(a).container)},[x(n.$slots,"default",{},()=>[(i(!0),u(H,null,M(t.links,(d,k)=>(i(),h(v,_({key:k,ref_for:!0},e(pe)(d),{class:e(a).base,"active-class":e(a).active,"inactive-class":e(a).inactive,onClick:d.click}),{default:O(()=>[d.icon?(i(),h(m,{key:0,name:d.icon,class:c(e(E)(e(a).icon.base,d.iconClass))},null,8,["name","class"])):f("",!0),d.avatar?(i(),h(p,_({key:1,ref_for:!0},{size:e(a).avatar.size,...d.avatar},{class:e(E)(e(a).avatar.base,d.avatarClass)}),null,16,["class"])):f("",!0),y("span",{class:c(e(a).label)},[B($(d.label)+" ",1),d.target==="_blank"?(i(),h(m,{key:0,name:e(a).externalIcon.name,class:c(e(a).externalIcon.base)},null,8,["name","class"])):f("",!0)],2)]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))])],2)],16)}}}),qe=()=>{const t=T(),r=T([]),l=T([]),s=o=>{o.forEach(n=>{const g=n.target.id;n.isIntersecting?r.value=[...r.value,g]:r.value=r.value.filter(m=>m!==g)})},a=o=>{o.forEach(n=>{t.value&&t.value.observe(n)})};return fe(r,(o,n)=>{o.length===0?l.value=n:l.value=o}),me(()=>t.value=new IntersectionObserver(s)),ye(()=>{var o;return(o=t.value)==null?void 0:o.disconnect()}),{visibleHeadings:r,activeHeadings:l,updateHeadings:a}},Ee=["href","onClick"],re=S({inheritAttrs:!1,__name:"ContentTocLinks",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["move"],setup(t,{emit:r}){const l={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},s=t,a=r,o=be(),n=ve(),{activeHeadings:g,updateHeadings:m}=qe(),{ui:p,attrs:v}=A("content.toc.links",b(s,"ui"),l,b(s,"class"),!0);n.hooks.hookOnce("page:finish",()=>{m([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])});const d=k=>{const j=encodeURIComponent(k);o.push(`#${j}`),a("move",k)};return(k,j)=>{var L;const N=re;return(L=t.links)!=null&&L.length?(i(),u("ul",_({key:0,class:e(p).wrapper},e(v)),[(i(!0),u(H,null,M(t.links,w=>(i(),u("li",{key:w.text,class:c([e(p).wrapper,w.depth===3&&e(p).depth])},[y("a",{href:`#${w.id}`,class:c([e(p).base,e(g).includes(w.id)?e(p).active:e(p).inactive]),onClick:he(D=>d(w.id),["prevent"])},$(w.text),11,Ee),w.children?(i(),h(N,{key:0,links:w.children,ui:e(p)},null,8,["links","ui"])):f("",!0)],2))),128))],16)):f("",!0)}}}),Me=S({inheritAttrs:!1,__name:"ContentToc",props:{title:{type:String,default:"Table of Contents"},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const r=V(),l=U(()=>({wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:r.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}})),s=t,{ui:a,attrs:o}=A("content.toc",b(s,"ui"),l,b(s,"class"),!0),n=T(!1);return(g,m)=>{var d,k;const p=z,v=re;return i(),u("nav",_({class:e(a).wrapper},e(o)),[y("div",{class:c([(d=t.links)!=null&&d.length?e(a).container.base:e(a).container.empty])},[x(g.$slots,"top"),(k=t.links)!=null&&k.length?(i(),u("button",{key:0,class:c(e(a).button.base),tabindex:"-1",onClick:m[0]||(m[0]=j=>n.value=!e(n))},[y("span",{class:c(e(a).button.label)},$(t.title),3),C(p,{name:e(a).button.trailingIcon.name,class:c(["lg:!hidden",[e(a).button.trailingIcon.base,e(n)?e(a).button.trailingIcon.active:e(a).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):f("",!0),C(v,{links:t.links,ui:e(a).links,class:c([e(n)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),x(g.$slots,"bottom")],2)],16)}}}),Re={key:1},Qe=S({__name:"[...slug]",async setup(t){let r,l;const s=ke(),{toc:a,seo:o}=V(),{data:n}=([r,l]=te(()=>ne(s.path,()=>se(s.path).findOne(),"$vHqkxevve1")),r=await r,l(),r);if(!n.value)throw xe({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:g}=([r,l]=te(()=>ne(`${s.path}-surround`,()=>se().where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(Ce(s.path)))),r=await r,l(),r);_e({title:n.value.title,ogTitle:`${n.value.title} - ${o==null?void 0:o.siteName}`,description:n.value.description,ogDescription:n.value.description});const m=U(()=>we(n.value)),p=U(()=>{var v,d,k;return[((v=a==null?void 0:a.bottom)==null?void 0:v.edit)&&{icon:"i-heroicons-pencil-square",label:"Edit this page",to:`${a.bottom.edit}/${(d=n==null?void 0:n.value)==null?void 0:d._file}`,target:"_blank"},...((k=a==null?void 0:a.bottom)==null?void 0:k.links)||[]].filter(Boolean)});return(v,d)=>{const k=ze,j=Se,N=Be,L=Le,w=He,D=Ne,oe=Me,ie=$e;return i(),h(ie,null,ae({default:O(()=>[C(k,{title:e(n).title,description:e(n).description,links:e(n).links,headline:e(m)},null,8,["title","description","links","headline"]),C(L,{prose:""},{default:O(()=>{var I;return[e(n).body?(i(),h(j,{key:0,value:e(n)},null,8,["value"])):f("",!0),(I=e(g))!=null&&I.length?(i(),u("hr",Re)):f("",!0),C(N,{surround:e(g)},null,8,["surround"])]}),_:1})]),_:2},[e(n).toc!==!1?{name:"right",fn:O(()=>{var I,F,J,K;return[C(oe,{title:(I=e(a))==null?void 0:I.title,links:(J=(F=e(n).body)==null?void 0:F.toc)==null?void 0:J.links},ae({_:2},[(K=e(a))!=null&&K.bottom?{name:"bottom",fn:O(()=>{var Q,W,G,X,Y,Z;return[y("div",{class:c(["hidden lg:block space-y-6",{"!mt-6":(G=(W=(Q=e(n).body)==null?void 0:Q.toc)==null?void 0:W.links)==null?void 0:G.length}])},[(Z=(Y=(X=e(n).body)==null?void 0:X.toc)==null?void 0:Y.links)!=null&&Z.length?(i(),h(w,{key:0,type:"dashed"})):f("",!0),C(D,{title:e(a).bottom.title,links:e(p)},null,8,["title","links"])],2)]}),key:"0"}:void 0]),1032,["title","links"])]}),key:"0"}:void 0]),1024)}}});export{Qe as default};
