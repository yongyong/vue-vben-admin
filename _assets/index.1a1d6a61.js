import{a as e,i as s,o as a,j as t,k as i}from"./index.b140c207.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import{A as r}from"./index.ed9be7a7.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67b83eb2.js";import"./index.40756bd5.js";import"./index.26514347.js";import"./index.e47dd816.js";import"./RightOutlined.1c70c502.js";import"./useTimeout.235d9d8d.js";import"./resizeEvent.5bf811bd.js";import"./domUtils.c5071c6b.js";import"./useExpose.978c5fca.js";import"./animation.1adf111b.js";import"./index.abc9c33d.js";import{D as o}from"./index.175f2ddc.js";import{u as m}from"./useDescription.160fa110.js";const n={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},l=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,s)=>`${s.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var c=e({components:{Description:o,Alert:r},setup(){const[e]=m({title:"useDescription",data:n,schema:l}),[s]=m({title:"无边框",bordered:!1,data:n,schema:l});return{mockData:n,schema:l,register:e,register1:s}}});const d={class:"p-4"};c.render=function(e,r,o,m,n,l){const c=s("Description");return a(),t("div",d,[i(c,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),i(c,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),i(c,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),i(c,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])};export default c;