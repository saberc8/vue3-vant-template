import"./index.4e5b4ddc.js";import{B as h}from"./index.2d538eed.js";import{b as v,d as _,p as B,c as l,J as m,w as z,O as b,T as y,y as x,M as c,z as u,x as A,K as f}from"./index.b523dea4.js";const[g,w]=v("space"),C={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function p(t=[]){const a=[];return t.forEach(e=>{Array.isArray(e)?a.push(...e):e.type===m?a.push(...p(e.children)):a.push(e)}),a.filter(e=>{var o;return!(e&&(typeof Comment<"u"&&e.type===Comment||e.type===m&&((o=e.children)==null?void 0:o.length)===0||e.type===Text&&e.children.trim()===""))})}var S=_({name:g,props:C,setup(t,{slots:a}){const e=B(()=>{var n;return(n=t.align)!=null?n:t.direction==="horizontal"?"center":""}),o=n=>typeof n=="number"?n+"px":n,d=n=>{const i={},s=`${o(Array.isArray(t.size)?t.size[0]:t.size)}`,r=`${o(Array.isArray(t.size)?t.size[1]:t.size)}`;return n?t.wrap?{marginBottom:r}:{}:(t.direction==="horizontal"&&(i.marginRight=s),(t.direction==="vertical"||t.wrap)&&(i.marginBottom=r),i)};return()=>{var n;const i=p((n=a.default)==null?void 0:n.call(a));return l("div",{class:[w({[t.direction]:t.direction,[`align-${e.value}`]:e.value,wrap:t.wrap,fill:t.fill})]},[i.map((s,r)=>l("div",{key:`item-${r}`,class:`${g}-item`,style:d(r===i.length-1)},[s]))])}}});const k=z(S);function L(){let t=null;const a=()=>{t=y.loading({duration:0,forbidClick:!0,message:"Loading..."})},e=()=>{t&&t.clear()};return b(e),{startLoading:a,stopLoading:e}}const E={class:"app-page-dashboard"},N={class:"demo-ol-list"},T=c("h1",null,"\u6309\u94AE",-1),$={class:"demo-ol-body"},R=_({__name:"index",setup(t){const{startLoading:a,stopLoading:e}=L(),o=()=>{y("asdfsdf"),a(),setTimeout(()=>{e()},2e3)},d=()=>{e()};return(n,i)=>{const s=h,r=k;return A(),x("div",E,[c("ol",N,[c("li",null,[T,c("div",$,[l(r,{size:"1rem"},{default:u(()=>[l(s,{type:"primary",onClick:o},{default:u(()=>[f("\u5F00\u59CB")]),_:1}),l(s,{type:"primary",onClick:d},{default:u(()=>[f("\u7ED3\u675F")]),_:1})]),_:1})])])])])}}});export{R as default};
