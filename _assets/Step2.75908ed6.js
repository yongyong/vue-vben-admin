let e=document.createElement("style");e.innerHTML=".step2[data-v-3e6a7e30]{width:450px;margin:0 auto}",document.head.appendChild(e);import{a as t,aT as s,aU as i,i as o,o as a,j as n,k as r,aW as d,p as m}from"./index.b140c207.js";import"./xlsx.a48e520c.js";import"./index.a386f3ca.js";import"./omit.8d73d862.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6ab0215c.js";import"./CheckOutlined.72786542.js";import{s as p}from"./index.f1319839.js";import"./index.ed9be7a7.js";import"./colors.9e2b156b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67b83eb2.js";import"./index.e6984f16.js";import"./UpOutlined.d2d7be45.js";import"./DownOutlined.a7138082.js";import"./index.a311583a.js";import"./index.e9dabea4.js";import"./index.0874e336.js";import"./CloseOutlined.1ded85a0.js";import"./index.9e082a18.js";import"./index.e47dd816.js";import"./LeftOutlined.375e5079.js";import"./functional.c7d55e9a.js";import"./RightOutlined.1c70c502.js";import"./useTimeout.235d9d8d.js";import"./useDebounce.45040196.js";import"./useEventListener.98373847.js";import"./useBreakpoint.1cdd5e73.js";import"./resizeEvent.5bf811bd.js";import"./index.228fcfc3.js";import"./useWindowSizeFn.2b8ac17a.js";import"./uuid.40269c00.js";import"./download.c37bde26.js";import{u as c}from"./useForm.57e0baec.js";import{step2Schemas as u}from"./data.452dfe10.js";var l=t({components:{BasicForm:p},emits:["next","prev"],setup(e,{emit:t}){const[s,{validate:i,setProps:o}]=c({labelWidth:80,schemas:u,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){t("prev")},submitFunc:async function(){try{const e=await i();o({submitButtonOptions:{loading:!0}}),setTimeout((()=>{o({submitButtonOptions:{loading:!1}}),t("next",e)}),1500)}catch(e){}}});return{register:s}}});const j=d("data-v-3e6a7e30");s("data-v-3e6a7e30");const b={class:"step2"},f=m(" ant-design@alipay.com "),x=m(" test@example.com "),v=m(" Vben "),O=m(" 500元 ");i();const g=j(((e,t,s,i,d,m)=>{const p=o("a-alert"),c=o("a-descriptions-item"),u=o("a-descriptions"),l=o("a-divider"),g=o("BasicForm");return a(),n("div",b,[r(p,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),r(u,{column:1,class:"mt-5"},{default:j((()=>[r(c,{label:"付款账户"},{default:j((()=>[f])),_:1}),r(c,{label:"收款账户"},{default:j((()=>[x])),_:1}),r(c,{label:"收款人姓名"},{default:j((()=>[v])),_:1}),r(c,{label:"转账金额"},{default:j((()=>[O])),_:1})])),_:1}),r(l),r(g,{onRegister:e.register},null,8,["onRegister"])])}));l.render=g,l.__scopeId="data-v-3e6a7e30";export default l;