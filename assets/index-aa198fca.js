import{j as w,D as B,E as V,G as q,u as A,o as E,l as a,n as s,p as i,q as t,A as _,x as m,y as e,B as N,f as l,t as f,z as p,F as R,C as H,H as S,I as T,J as z}from"./index-61650aa6.js";import{a as D,c as F}from"./function-call-d42fd7fb.js";const M={class:"text-gray-600 body-font"},j={class:"float-left mt-5 ml-5"},G={key:0},I=e("div",{class:"bg-gray-100 rounded flex h-full items-center"},[e("span",{class:"title-font font-medium"},"未登录")],-1),J=[I],L={key:1},P={class:"bg-gray-100 rounded flex h-full items-center"},U={class:"title-font font-medium mr-3"},W={class:"container px-5 py-16 mx-auto"},K={class:"text-center mb-2"},O=e("div",{class:"my-2 font-serif font-semibold text-dark-50 leading-none text-2xl"},[e("span",{class:"mr-2"},"Mobox龙蛋超级后台")],-1),te=w({__name:"index",setup(Q){const{open:x}=T(),{address:c,isActivated:y,signer:X}=B(),{wallet:Y,disconnect:h}=z(),{onActivated:v}=V(),r=q(),o=A(),g=()=>{let n="/home";r.currentRoute.value.query.redirect&&(n=r.currentRoute.value.query.redirect),r.push({path:n})};async function d(){c.value!=""&&(D({duration:0,message:"数据更新"}),await o.login(),F()),o.isadmin==1&&g()}return v(async({address:n})=>{await d()}),E(async()=>{await d()}),(n,Z)=>{const k=a("van-notice-bar"),u=a("van-button"),b=a("van-icon"),C=a("vd-board");return s(),i(R,null,[t(o).error.err_type>0?(s(),_(k,{key:0,"left-icon":"warning-o",text:t(o).error.err_msg},null,8,["text"])):m("",!0),e("section",M,[e("div",j,[t(y)?(s(),i("div",L,[e("div",P,[e("span",U,N(t(H)(t(c))),1),l(u,{round:"",type:"default",size:"small",onClick:t(h),class:"text-gray-500"},{default:f(()=>[p("退出账号")]),_:1},8,["onClick"])])])):(s(),i("div",G,J))]),e("div",W,[e("div",K,[l(b,{class:"iconfont text-5xl",style:{color:"#1989fa"},"class-prefix":"ali-icon",name:"tinytools"}),O]),t(c)==""?(s(),_(u,{key:0,type:"primary",class:"flex mx-auto mt-12 text-lg",onClick:t(x)},{default:f(()=>[p(" 登录账号 ")]),_:1},8,["onClick"])):m("",!0)])]),l(C,{connectors:t(S),dark:""},null,8,["connectors"])],64)}}});export{te as default};
