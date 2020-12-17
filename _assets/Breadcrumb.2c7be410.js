let e=document.createElement("style");e.innerHTML=".vben-layout-breadcrumb{display:flex;padding:0 8px;align-items:center}.vben-layout-breadcrumb .ant-breadcrumb-link .anticon{margin-right:4px;margin-bottom:2px}.vben-layout-breadcrumb--light .ant-breadcrumb-link{color:#999}.vben-layout-breadcrumb--light .ant-breadcrumb-link a{color:rgba(0,0,0,.85)}.vben-layout-breadcrumb--light .ant-breadcrumb-link a:hover{color:#018ffb}.vben-layout-breadcrumb--light .ant-breadcrumb-separator{color:#999}.vben-layout-breadcrumb--dark .ant-breadcrumb-link{color:rgba(255,255,255,.6)}.vben-layout-breadcrumb--dark .ant-breadcrumb-link a{color:rgba(255,255,255,.8)}.vben-layout-breadcrumb--dark .ant-breadcrumb-link a:hover{color:#fff}.vben-layout-breadcrumb--dark .ant-breadcrumb-separator,.vben-layout-breadcrumb--dark .anticon{color:rgba(255,255,255,.8)}",document.head.appendChild(e);import{k as r,v as t,cs as a,a as n,q as o,r as c,ap as u,au as l,dp as b,ae as i,aA as s,aW as m,b4 as d,t as h,W as f,i as p,o as g,j as v,w as y,m as k,n as x,p as O}from"./index.54b7cc7b.js";import"./xlsx.a48e520c.js";import{I as j}from"./index.32b7dc7d.js";var w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"};function H(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var B=function(e,n){var o=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?Object(arguments[r]):{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(r){H(e,r,t[r])}))}return e}({},e,n.attrs);return r(a,t(o,{icon:w}),null)};B.displayName="HomeOutlined",B.inheritAttrs=!1;var C=n({name:"LayoutBreadcrumb",components:{HomeOutlined:B,Icon:j},props:{theme:o.oneOf(["dark","light"])},setup(){const e=c([]),{currentRoute:r}=u(),{prefixCls:t}=l("layout-breadcrumb"),{getShowBreadCrumbIcon:a}=s(),{t:n}=b();return i((()=>{if(r.value.name===m)return;const t=r.value.matched;if(!t||0===t.length)return;let a=d(h(t),(e=>{if(!e.meta)return!1;const{title:r,hideBreadcrumb:t}=e.meta;return!(!r||t)}));const o=a.filter((e=>e.path!==f.BASE_HOME));o.length===a.length&&o.unshift({path:f.BASE_HOME,meta:{title:n("layout.header.home")}}),e.value=1===o.length?[]:o})),{routes:e,t:n,prefixCls:t,getShowBreadCrumbIcon:a}}});const S={key:1};C.render=function(e,t,a,n,o,c){const u=p("Icon"),l=p("router-link"),b=p("a-breadcrumb");return g(),v("div",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[r(b,{routes:e.routes},{itemRender:y((({route:r,routes:t})=>[e.getShowBreadCrumbIcon&&r.meta.icon?(g(),v(u,{key:0,icon:r.meta.icon},null,8,["icon"])):k("",!0),t.indexOf(r)===t.length-1?(g(),v("span",S,x(e.t(r.meta.title)),1)):(g(),v(l,{key:2,to:r.path},{default:y((()=>[O(x(e.t(r.meta.title)),1)])),_:2},1032,["to"]))])),_:1},8,["routes"])],2)};export default C;