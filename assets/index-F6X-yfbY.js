import{r as k,F as X,a4 as C,ab as R,X as d,o as r,c as u,a as e,J as a,M as m,H as $,R as h,ac as O,ad as W,f as H,u as v,O as J,Q as se,T as P,ae as oe}from"../js/@vue/@vue.Dq3L9ZFj.js";import{E as ne,a as ae,b as U,c as ie,d as le,e as ce,f as de,g as re,h as _e,i as ue,j as me}from"../js/element-plus/element-plus.8HAWBxNF.js";import{u as pe,c as ve,a as fe}from"../js/vue-router/vue-router.Cwy0Ypwr.js";import{E as he}from"../js/@element-plus/@element-plus.xt0a45hF.js";/* empty css                                    */import{V as be}from"../js/vue-kinesis/vue-kinesis.DZPqBu3c.js";import{i as ge}from"../js/vue-lazyload/vue-lazyload.CNWYb5Sv.js";import"../js/lodash-es/lodash-es.D2AGskbj.js";import"../js/async-validator/async-validator.DKvM95Vc.js";import"../js/@vueuse/@vueuse.JwnVhuu1.js";import"../js/@ctrl/@ctrl.r5W6hzzQ.js";import"../js/@popperjs/@popperjs.D9SI2xQl.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function _(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(n){if(n.ep)return;n.ep=!0;const s=_(n);fetch(n.href,s)}})();const T=(i,o)=>{const _=i.__vccOpts||i;for(const[t,n]of o)_[t]=n;return _},Z=i=>(O("data-v-aeb493d1"),i=i(),W(),i),$e={class:"ad-title"},ye=Z(()=>e("div",{class:"title"},"请您留言",-1)),Ce={class:"ad-content"},we=Z(()=>e("div",{class:"tips"},[e("p",null,"广州云链科技咨询热线："),e("p",null,"020-31074007")],-1)),Ee={class:"footer"},Ie={__name:"index",setup(i){const o=k(null),_=k(!0),t=X({remark:"",name:"",phone:"",company:""}),n=X({name:[{required:!0,message:"请输入姓名",trigger:["blur","change"]}],phone:[{required:!0,message:"请输入电话",trigger:["blur","change"]},{pattern:/^1[3-9]\d{9}$/,message:"请输入正确的手机号码",trigger:["blur","change"]}],company:[{required:!0,message:"请输入公司名称",trigger:["blur","change"]}]}),s=async()=>{await o.value.validate((f,c)=>{f&&fetch("http://www.cloud-link.ltd/api/info/insert",{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",body:JSON.stringify({name:t.name,phone:t.phone,corporateName:t.company,leaveMessage:t.remark})}).then(b=>b.json()).then(b=>{b&&(ne({title:"提示",message:"提交成功",type:"success"}),_.value=!1,t.remark="",t.name="",t.phone="",t.company="",o.value.resetFields())}).catch(b=>console.error("Error:",b))})},l=()=>{const f=document.querySelector(".ad-box");f.classList.remove("animate__shakeX"),f.classList.remove("animaed-bottom-top"),f.classList.add("scale-ad-box"),f.classList.add("scale_show")},p=()=>{const f=document.querySelector(".ad-box.scale-ad-box.scale_show");f.classList.remove("scale-ad-box"),f.classList.remove("scale_show"),f.classList.add("animaed-bottom-top")};return(f,c)=>{const b=C("Minus"),y=ie,w=le,I=ae,x=U,E=C("ChatDotRound"),S=R("dragComponent");return d((r(),u("div",null,[e("div",{class:$(["ad-box animaed-bottom-top",{"scale-ad-box scale_show":!_.value}])},[e("div",$e,[ye,e("div",{class:"close",onClick:l},[a(b)])]),e("div",Ce,[we,a(I,{ref_key:"ruleFormRef",ref:o,rules:n,model:t},{default:m(()=>[a(w,{label:"",prop:"remark"},{default:m(()=>[a(y,{modelValue:t.remark,"onUpdate:modelValue":c[0]||(c[0]=g=>t.remark=g),rows:3,type:"textarea",maxlength:"500",autosize:{minRows:3,maxRows:5},placeholder:"请输入您的留言，我们将尽快与您联系"},null,8,["modelValue"])]),_:1}),a(w,{label:"",prop:"name"},{default:m(()=>[a(y,{modelValue:t.name,"onUpdate:modelValue":c[1]||(c[1]=g=>t.name=g),placeholder:"姓名（必填）",maxlength:"10","prefix-icon":"User"},null,8,["modelValue"])]),_:1}),a(w,{label:"",prop:"phone"},{default:m(()=>[a(y,{modelValue:t.phone,"onUpdate:modelValue":c[2]||(c[2]=g=>t.phone=g),modelModifiers:{trim:!0,number:!0},onInput:c[3]||(c[3]=g=>t.phone=g.replace(/[^\d]/g,"")),maxlength:"11",placeholder:"电话（必填）","prefix-icon":"Phone"},null,8,["modelValue"])]),_:1}),a(w,{label:"",prop:"company"},{default:m(()=>[a(y,{modelValue:t.company,"onUpdate:modelValue":c[4]||(c[4]=g=>t.company=g),placeholder:"公司名称（必填）",maxlength:"30","prefix-icon":"Help"},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),e("div",Ee,[a(x,{type:"primary",onClick:s},{default:m(()=>[h("提交")]),_:1})]),e("div",{class:"show",onClick:p},[a(E)])],2)])),[[S,!0]])}}},xe=T(Ie,[["__scopeId","data-v-aeb493d1"]]),ke={class:"web-box"},Le={__name:"App",setup(i){return H(()=>{setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},10)}),fetch("https://api.ipify.org/"),(o,_)=>{const t=C("router-view"),n=ce;return r(),u("div",ke,[a(t),a(n,{right:10,bottom:10}),a(v(xe))])}}},Re=T(Le,[["__scopeId","data-v-4a157afb"]]),Ae="modulepreload",Te=function(i){return"/"+i},j={},V=function(o,_,t){let n=Promise.resolve();if(_&&_.length>0){const s=document.getElementsByTagName("link");n=Promise.all(_.map(l=>{if(l=Te(l),l in j)return;j[l]=!0;const p=l.endsWith(".css"),f=p?'[rel="stylesheet"]':"";if(!!t)for(let y=s.length-1;y>=0;y--){const w=s[y];if(w.href===l&&(!p||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${f}`))return;const b=document.createElement("link");if(b.rel=p?"stylesheet":Ae,p||(b.as="script",b.crossOrigin=""),b.href=l,document.head.appendChild(b),p)return new Promise((y,w)=>{b.addEventListener("load",y),b.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${l}`)))})}))}return n.then(()=>o()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})},A=i=>(O("data-v-fa940b8a"),i=i(),W(),i),Se={class:"left"},Be={class:"tabs"},Ve=A(()=>e("a",{href:"/"},"首页",-1)),Oe=A(()=>e("p",null,"BlueDove平台",-1)),We=A(()=>e("span",null,"助力企业全场景数智化转型与落地",-1)),Fe=[Oe,We],Pe=A(()=>e("p",null,"乘用车出行平台",-1)),Ne=A(()=>e("span",null,"支持全行业生态全景解决方案",-1)),De=[Pe,Ne],ze=A(()=>e("p",null,"医药流通B2B平台",-1)),Me=A(()=>e("span",null,"根据行业特点，打造更贴合业务的解决方案",-1)),qe=[ze,Me],He=A(()=>e("p",null,"新能源动力电池大数据平台",-1)),Ue=A(()=>e("span",null,"助力企业全场景数智化转型与落地",-1)),Ye=[He,Ue],Qe=A(()=>e("p",null,"车辆监控大数据平台",-1)),Je=A(()=>e("span",null,"支持全行业生态全景解决方案",-1)),Xe=[Qe,Je],je=A(()=>e("p",null,"eHR平台",-1)),Ge=A(()=>e("span",null,"根据行业特点，打造更贴合业务的解决方案",-1)),Ke=[je,Ge],Ze={class:"right"},et={class:"tell"},tt={__name:"index",setup(i){const o=pe(),_=f=>o.path.includes(f);H(()=>{window.addEventListener("scroll",p)});const t=()=>{window.location.href="/"},n=f=>{window.location.href=`/platform/${f}`},s=f=>{window.location.href=`/solution/${f}`},l=k(!1),p=()=>{document.documentElement.scrollTop>0?l.value=!0:l.value=!1};return(f,c)=>{const b=C("arrow-down"),y=re,w=_e,I=de,x=C("Phone"),E=C("kinesis-element"),S=C("kinesis-container");return r(),u("div",{class:$(["top",{"fixed-top":l.value}])},[e("div",Se,[e("div",{class:"logo-box",onClick:t}),e("div",Be,[Ve,a(I,{teleported:!1,class:"dropdown"},{dropdown:m(()=>[a(w,{style:{"min-width":"380px"}},{default:m(()=>[e("div",{class:"card-box-item",onClick:c[0]||(c[0]=g=>n("cldp"))},Fe),e("div",{class:"card-box-item",onClick:c[1]||(c[1]=g=>n("car"))},De),e("div",{class:"card-box-item",onClick:c[2]||(c[2]=g=>n("medicine"))},qe)]),_:1})]),default:m(()=>[e("span",{class:$({"active-tabs":_("/platform")})},[h(" 产品 "),a(y,null,{default:m(()=>[a(b)]),_:1})],2)]),_:1}),a(I,{teleported:!1,class:"dropdown"},{dropdown:m(()=>[a(w,{style:{"min-width":"380px"}},{default:m(()=>[e("div",{class:"card-box-item",onClick:c[3]||(c[3]=g=>s("new_energy"))},Ye),e("div",{class:"card-box-item",onClick:c[4]||(c[4]=g=>s("car"))},Xe),e("div",{class:"card-box-item",onClick:c[5]||(c[5]=g=>s("e_hr"))},Ke)]),_:1})]),default:m(()=>[e("span",{class:$({"active-tabs":_("/solution")})},[h(" 解决方案 "),a(y,{class:"el-icon--right"},{default:m(()=>[a(b)]),_:1})],2)]),_:1}),e("a",{href:"/service",class:$({"active-tabs":_("/service")})},"服务体系",2),e("a",{href:"/about_us",class:$({"active-tabs":_("/about_us")})},"关于我们",2),e("a",{href:"/join_us",class:$({"active-tabs":_("/join_us")})},"加入我们",2)])]),e("div",Ze,[a(S,null,{default:m(()=>[a(E,{strength:1,type:"scale"},{default:m(()=>[e("div",et,[a(y,null,{default:m(()=>[a(x)]),_:1}),h(" 全国服务热线：020-31074007 ")])]),_:1})]),_:1})])],2)}}},st=T(tt,[["__scopeId","data-v-fa940b8a"]]),ot="/assets/b01-Dc52l5lr.webp",nt="/assets/b02-D5sK73Cj.webp",at="/assets/b03-DKelTtHa.webp",it={class:"banner-box"},lt={class:"banner"},ct=["src"],dt=["src"],rt=["src"],_t={__name:"index",setup(i){H(()=>{window.addEventListener("scroll",_)});const o=k(!1),_=()=>{document.documentElement.scrollTop>0?o.value=!0:o.value=!1};return(t,n)=>{const s=me,l=ue;return r(),u("div",it,[a(v(st)),e("div",lt,[a(l,{interval:5e3,arrow:"always",height:"auto"},{default:m(()=>[a(s,{style:{height:"fit-content"}},{default:m(()=>[e("img",{src:v(nt)},null,8,ct)]),_:1}),a(s,{style:{height:"fit-content"}},{default:m(()=>[e("img",{src:v(at)},null,8,dt)]),_:1}),a(s,{style:{height:"fit-content"}},{default:m(()=>[e("img",{src:v(ot)},null,8,rt)]),_:1})]),_:1})])])}}},ut=T(_t,[["__scopeId","data-v-0f647eef"]]),mt="/assets/main-busiess-kMRoeBbO.png",ee=i=>(O("data-v-455fef50"),i=i(),W(),i),pt={class:"business-box"},vt={class:"title-box"},ft=ee(()=>e("div",{class:"englist"}," MAIN BUSINESS ",-1)),ht=ee(()=>e("div",{class:"chinese"}," 主营业务 ",-1)),bt=[ft,ht],gt={class:"content-box"},$t={__name:"index",setup(i){return(o,_)=>{const t=R("aniClass"),n=R("lazy");return r(),u("div",pt,[d((r(),u("div",vt,bt)),[[t,"animate__animated animate__bounceIn"]]),e("div",gt,[d(e("img",null,null,512),[[t],[n,v(mt)]])])])}}},yt=T($t,[["__scopeId","data-v-455fef50"]]),Ct="/assets/core1-9RdYevwt.png",wt="/assets/core2-DfV-W2aU.png",Et="/assets/core3-CXOoVh4Z.png",It="/assets/core4-NJxf409d.png",B=i=>(O("data-v-ecf06278"),i=i(),W(),i),xt={class:"core-box"},kt={class:"title-box"},Lt=B(()=>e("div",{class:"englist"}," CORE COMPETENCE ",-1)),Rt=B(()=>e("div",{class:"chinese"}," 核心能力 ",-1)),At=[Lt,Rt],Tt={class:"content-box"},St={class:"title"},Bt=B(()=>e("h3",null," 全栈自研平台 ",-1)),Vt={class:"content-body"},Ot=B(()=>e("p",null,"基于开源的一体化PaaS平台，打造满足多行业的云链cloudlink平台，【零代码】快速配置，【低代码】敏捷开发，快速交付，满足个性化管理 ",-1)),Wt={class:"content-img"},Ft={class:"title"},Pt=B(()=>e("h3",null," 端到端解决方案能力 ",-1)),Nt={class:"content-body"},Dt=B(()=>e("p",null,"提供从战略咨询、IT基础架构、应用开发到系统运维的端到端服务，和阿里云、腾讯云、滴普科技云平台多行业、多领域实现商业落地和产业的深度融合 ",-1)),zt={class:"content-img"},Mt={class:"title"},qt=B(()=>e("h3",null," 深刻的行业经验 ",-1)),Ht={class:"content-body"},Ut=B(()=>e("p",null,"深耕房地产、物流、医药、大数据、新能源汽车、企业内部信息化系统和新零售行业，深刻理解行业，以丰富的行业经验及资源助力企业解决核心需求",-1)),Yt={class:"content-img"},Qt={class:"title"},Jt=B(()=>e("h3",null," 成熟的服务团队 ",-1)),Xt={class:"content-body"},jt=B(()=>e("p",null,"核心团队来自于原IBM GBS团队，具备大项目管理、咨询、实施经验，团队本着不断探索创新精神，执着追求，引领IT软件行业的创新性发展",-1)),Gt={class:"content-img"},Kt={__name:"index",setup(i){const o=k(!0),_=k(!1),t=k(!1),n=k(!1),s=l=>{switch(l){case 1:o.value=!0,_.value=!1,t.value=!1,n.value=!1;break;case 2:o.value=!1,_.value=!0,t.value=!1,n.value=!1;break;case 3:o.value=!1,_.value=!1,t.value=!0,n.value=!1;break;case 4:o.value=!1,_.value=!1,t.value=!1,n.value=!0;break}};return(l,p)=>{const f=C("Monitor"),c=C("kinesis-element"),b=C("kinesis-container"),y=C("Magnet"),w=C("Cpu"),I=C("TrophyBase"),x=R("aniClass"),E=R("lazy");return r(),u("div",xt,[d((r(),u("div",kt,At)),[[x,"animate__animated animate__bounceIn"]]),a(b,{event:"scroll"},{default:m(()=>[a(c,{strength:20,type:"translate",axis:"y"},{default:m(()=>[d((r(),u("div",Tt,[e("div",{class:$(["content-item",{"content-item-avtive":o.value}]),onMouseover:p[0]||(p[0]=S=>s(1))},[e("div",St,[a(f),Bt]),e("div",Vt,[Ot,e("div",Wt,[a(b,null,{default:m(()=>[a(c,{strength:20},{default:m(()=>[d(e("img",null,null,512),[[E,v(Ct)]])]),_:1})]),_:1})])])],34),e("div",{class:$(["content-item",{"content-item-avtive":_.value}]),onMouseover:p[1]||(p[1]=S=>s(2))},[e("div",Ft,[a(y),Pt]),e("div",Nt,[Dt,e("div",zt,[a(b,null,{default:m(()=>[a(c,{strength:20},{default:m(()=>[d(e("img",null,null,512),[[E,v(wt)]])]),_:1})]),_:1})])])],34),e("div",{class:$(["content-item",{"content-item-avtive":t.value}]),onMouseover:p[2]||(p[2]=S=>s(3))},[e("div",Mt,[a(w),qt]),e("div",Ht,[Ut,e("div",Yt,[a(b,null,{default:m(()=>[a(c,{strength:20},{default:m(()=>[d(e("img",null,null,512),[[E,v(Et)]])]),_:1})]),_:1})])])],34),e("div",{class:$(["content-item",{"content-item-avtive":n.value}]),onMouseover:p[3]||(p[3]=S=>s(4))},[e("div",Qt,[a(I),Jt]),e("div",Xt,[jt,e("div",Gt,[a(b,null,{default:m(()=>[a(c,{strength:20},{default:m(()=>[d(e("img",null,null,512),[[E,v(It)]])]),_:1})]),_:1})])])],34)])),[[x]])]),_:1})]),_:1})])}}},Zt=T(Kt,[["__scopeId","data-v-ecf06278"]]),es="/assets/cldp-Cs58gKM_.png",Y=i=>(O("data-v-1878cb04"),i=i(),W(),i),ts={class:"platform-box"},ss={class:"title-box"},os=Y(()=>e("div",{class:"englist"}," COLUDLINK ",-1)),ns=Y(()=>e("div",{class:"chinese"}," 云链BlueDove平台 ",-1)),as=[os,ns],is={class:"title-box2"},ls=Y(()=>e("div",{class:"englist"}," DEVELOPMENT PLATFORM ",-1)),cs=Y(()=>e("div",{class:"chinese"}," 贯穿前后端在线设计器及执行引擎，实现“所见即所得，设计即使用”，结合多年积累行业经验，帮助企业敏捷、高效落地解决方案，为业务赋能 ",-1)),ds=[ls,cs],rs={class:"content-box"},_s={class:"btn"},us={__name:"index",setup(i){const o=()=>{window.location.href="/platform/cldp"};return(_,t)=>{const n=U,s=C("kinesis-element"),l=C("kinesis-container"),p=R("aniClass"),f=R("lazy");return r(),u("div",ts,[d((r(),u("div",ss,as)),[[p,"animate__animated animate__bounceIn"]]),d((r(),u("div",is,ds)),[[p]]),d((r(),u("div",rs,[d(e("img",null,null,512),[[f,v(es)]])])),[[p]]),d((r(),u("div",_s,[e("div",null,[a(l,null,{default:m(()=>[a(s,{strength:1,type:"scale"},{default:m(()=>[d((r(),J(n,{type:"primary",round:"",icon:"ArrowRight",onClick:o},{default:m(()=>[h("申请体验")]),_:1})),[[p,"animate__animated animate__tada"]])]),_:1})]),_:1})])])),[[p,"fade-in"]])])}}},ms=T(us,[["__scopeId","data-v-1878cb04"]]),ps="/assets/1-BDDTibFO.png",vs="/assets/2-Cr4ig5gR.png",fs="/assets/3-BZBtmdCo.png",hs="/assets/4-CuBBXvek.png",bs="/assets/5-BKsRSg6K.png",q=i=>(O("data-v-65d2864d"),i=i(),W(),i),gs={class:"solution-box"},$s={class:"title-box"},ys=q(()=>e("div",{class:"englist"}," SOLUTION ",-1)),Cs=q(()=>e("div",{class:"chinese"}," 解决方案 ",-1)),ws=[ys,Cs],Es={class:"title-box2"},Is=q(()=>e("div",{class:"chinese"}," 用我们的平台根据行业特点，打造更贴合业务的解决方案，行业很反感专属定制，助力企业业务成功 ",-1)),xs=[Is],ks={class:"content-box"},Ls={class:"left"},Rs={style:{"z-index":"10",position:"relative"}},As={class:"tabs-box"},Ts={class:"more-btn"},Ss=q(()=>e("div",{class:"round1"},null,-1)),Bs=q(()=>e("div",{class:"round2"},null,-1)),Vs={class:"right"},Os={class:"content-body"},Ws={class:"body-btn"},Fs={__name:"index",setup(i){const o=k(!0),_=k(!1),t=k(!1),n=k(!1),s=k(!1),l=f=>{switch(f){case 1:o.value=!0,_.value=!1,t.value=!1,n.value=!1,s.value=!1;break;case 2:o.value=!1,_.value=!0,t.value=!1,n.value=!1,s.value=!1;break;case 3:o.value=!1,_.value=!1,t.value=!0,n.value=!1,s.value=!1;break;case 4:o.value=!1,_.value=!1,t.value=!1,n.value=!0,s.value=!1;break;case 5:o.value=!1,_.value=!1,t.value=!1,n.value=!1,s.value=!0;break}},p=()=>{o.value&&(window.location.href="/solution/new_energy"),_.value&&(window.location.href="/platform/medicine"),t.value&&(window.location.href="/platform/car")};return(f,c)=>{const b=U,y=C("kinesis-element"),w=C("kinesis-container"),I=R("aniClass"),x=R("lazy");return r(),u("div",gs,[d((r(),u("div",$s,ws)),[[I,"animate__animated animate__bounceIn"]]),d((r(),u("div",Es,xs)),[[I,"fade-in"]]),d((r(),u("div",ks,[e("div",Ls,[e("div",Rs,[e("div",As,[e("div",{class:$(["btn-item",{"btn-item-active":o.value}]),onMouseover:c[0]||(c[0]=E=>l(1))},"新能源动力电池",34),e("div",{class:$(["btn-item",{"btn-item-active":_.value}]),onMouseover:c[1]||(c[1]=E=>l(2))},"医药流通",34),e("div",{class:$(["btn-item",{"btn-item-active":t.value}]),onMouseover:c[2]||(c[2]=E=>l(3))},"汽车出行",34),e("div",{class:$(["btn-item",{"btn-item-active":n.value}]),onMouseover:c[3]||(c[3]=E=>l(4))},"地产",34),e("div",{class:$(["btn-item",{"btn-item-active":s.value}]),onMouseover:c[4]||(c[4]=E=>l(5))},"文旅",34)]),e("div",Ts,[d((r(),J(b,{type:"primary",round:"",icon:"ArrowRight",onClick:p},{default:m(()=>[h("方案详情")]),_:1})),[[I,"animate__animated animate__tada"]])])]),Ss,Bs]),e("div",Vs,[e("div",Os,[e("div",{class:$(["body-img",{"fade-out":!o.value}])},[d(e("img",null,null,512),[[x,v(ps)]])],2),e("div",{class:$(["body-img",{"fade-out":!_.value}])},[d(e("img",null,null,512),[[x,v(vs)]])],2),e("div",{class:$(["body-img",{"fade-out":!t.value}])},[d(e("img",null,null,512),[[x,v(fs)]])],2),e("div",{class:$(["body-img",{"fade-out":!n.value}])},[d(e("img",null,null,512),[[x,v(hs)]])],2),e("div",{class:$(["body-img",{"fade-out":!s.value}])},[d(e("img",null,null,512),[[x,v(bs)]])],2),e("div",Ws,[e("div",null,[a(w,null,{default:m(()=>[a(y,{strength:1,type:"scale"},{default:m(()=>[d((r(),J(b,{type:"primary",round:"",icon:"ArrowRight",onClick:p},{default:m(()=>[h("方案详情")]),_:1})),[[I,"animate__animated animate__tada"]])]),_:1})]),_:1})])])])])])),[[I]])])}}},Ps=T(Fs,[["__scopeId","data-v-65d2864d"]]),Ns="/assets/us_bg1-DVFbWkqB.jpg",Ds={name:"Num",props:{num:{type:Number,default:0},time:{type:Number,default:1},color:{type:String,default:"#fff"},type:{type:String,default:"1"}},data(){return{data:null}},watch:{num(i){this.numberRoll(this.$refs.numberRoll)}},mounted(){this.numberRoll(this.$refs.numberRoll)},methods:{numberRoll(i){let o=this;if(o.num==0){i.innerHTML=0;return}let _=o.num*10/(o.time*1e3),t=0,n=0,s=setInterval(function(){n+=_,n>o.num&&(clearInterval(s),n=o.num,s=null),t!==n&&(t=n,i.innerHTML=o.type=="1"?t.toFixed(2).toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g,"$1,"):(t|0).toFixed(0).toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g,"$1,"))},10)}}},zs=["data-time","data-value"];function Ms(i,o,_,t,n,s){return r(),u("div",{ref:"numberRoll","data-time":_.time,class:"number-roll","data-value":_.num,style:se({color:_.color})},null,12,zs)}const N=T(Ds,[["render",Ms],["__scopeId","data-v-56959c82"]]),L=i=>(O("data-v-7255eb00"),i=i(),W(),i),qs={class:"web"},Hs={class:"bg"},Us={class:"us-box"},Ys={class:"title-box"},Qs=L(()=>e("span",{class:"douhao1"},null,-1)),Js=L(()=>e("span",{class:"douhao2"},null,-1)),Xs={class:"count"},js={class:"count-item"},Gs={key:0},Ks=L(()=>e("div",null,"+",-1)),Zs=L(()=>e("p",null,"客户服务",-1)),eo={class:"count-item"},to={key:0},so=L(()=>e("div",null,"+",-1)),oo=L(()=>e("p",null,"累计项目",-1)),no={class:"count-item"},ao={key:0},io=L(()=>e("div",null,"+",-1)),lo=L(()=>e("p",null,"行业解决方案",-1)),co={class:"count-item"},ro={key:0},_o=L(()=>e("div",null,"%",-1)),uo=L(()=>e("p",null,"方案落地",-1)),mo={class:"count-item"},po={key:0},vo=L(()=>e("div",null,"+",-1)),fo=L(()=>e("p",null,"知识产权",-1)),ho={class:"count-item"},bo={key:0},go=L(()=>e("div",null,"+",-1)),$o=L(()=>e("p",null,"软件著作",-1)),yo={class:"btn"},Co={__name:"index",setup(i){let o=k(!1);const _=()=>{let t=document.querySelector(".ad-box.scale-ad-box.scale_show");if(console.log(t),t)t.classList.remove("scale-ad-box"),t.classList.remove("scale_show"),t.classList.remove("animate__shakeX"),t.classList.add("animaed-bottom-top");else{let n=document.querySelector(".ad-box");n.classList.remove("animate__shakeX"),n.classList.remove("animaed-bottom-top"),setTimeout(()=>{n.classList.add("animate__animated"),n.classList.add("animate__shakeX")},1)}};return H(()=>{const t=function(p,f){p.forEach(c=>{c.isIntersecting?o.value=!0:o.value=!1})},n={threshold:.4},s=new IntersectionObserver(t,n),l=document.querySelector(".count");s.observe(l)}),(t,n)=>{const s=C("kinesis-element"),l=C("kinesis-container"),p=U,f=R("lazy"),c=R("aniClass");return r(),u("div",qs,[e("div",Hs,[d(e("img",null,null,512),[[f,v(Ns)]])]),e("div",Us,[d((r(),u("div",Ys,[Qs,d((r(),u("p",null,[h("致力于为客户提供专业的服务与全面的互联网数智化一体化解决方案")])),[[c,"animate__animated animate__zoomIn"]]),Js])),[[c]]),e("div",Xs,[a(l,null,{default:m(()=>[a(s,{strength:2,type:"scale"},{default:m(()=>[e("div",js,[v(o)?d((r(),u("h2",Gs,[a(v(N),{num:50,time:1,type:"2"}),Ks])),[[c,"animaed-top-bottom"]]):P("",!0),Zs])]),_:1})]),_:1}),a(l,null,{default:m(()=>[a(s,{strength:2,type:"scale"},{default:m(()=>[e("div",eo,[v(o)?d((r(),u("h2",to,[a(v(N),{num:100,time:1,type:"2"}),so])),[[c,"animaed-top-bottom"]]):P("",!0),oo])]),_:1})]),_:1}),a(l,null,{default:m(()=>[a(s,{strength:2,type:"scale"},{default:m(()=>[e("div",no,[v(o)?d((r(),u("h2",ao,[a(v(N),{num:10,time:1,type:"2"}),io])),[[c,"animaed-top-bottom"]]):P("",!0),lo])]),_:1})]),_:1}),a(l,null,{default:m(()=>[a(s,{strength:2,type:"scale"},{default:m(()=>[e("div",co,[v(o)?d((r(),u("h2",ro,[a(v(N),{num:100,time:1,type:"2"}),_o])),[[c,"animaed-top-bottom"]]):P("",!0),uo])]),_:1})]),_:1}),a(l,null,{default:m(()=>[a(s,{strength:2,type:"scale"},{default:m(()=>[e("div",mo,[v(o)?d((r(),u("h2",po,[a(v(N),{num:20,time:1,type:"2"}),vo])),[[c,"animaed-top-bottom"]]):P("",!0),fo])]),_:1})]),_:1}),a(l,null,{default:m(()=>[a(s,{strength:2,type:"scale"},{default:m(()=>[e("div",ho,[v(o)?d((r(),u("h2",bo,[a(v(N),{num:70,time:1,type:"2"}),go])),[[c,"animaed-top-bottom"]]):P("",!0),$o])]),_:1})]),_:1})]),d((r(),u("div",yo,[e("div",null,[a(l,null,{default:m(()=>[a(s,{strength:1,type:"scale"},{default:m(()=>[a(p,{type:"primary",round:"",icon:"ArrowRight",onClick:_},{default:m(()=>[h("联系我们")]),_:1})]),_:1})]),_:1})])])),[[c,"animate__animated animate__bounceIn animate__fast"]])])])}}},wo=T(Co,[["__scopeId","data-v-7255eb00"]]),Eo="/assets/logo01-CL9pMf7Y.png",Io={class:"footer-box"},xo={class:"flex-row"},ko={class:"logo"},Lo={alt:"logo"},Ro={class:"footer-item-box"},Ao={class:"footer-item"},To={class:"footer-item"},So={class:"footer-item"},Bo={class:"footer-item"},Vo={class:"footer-item"},Oo={style:{cursor:"default"}},Wo={style:{cursor:"default"}},Fo={style:{cursor:"default"}},Po={style:{cursor:"default"}},No={style:{cursor:"default"}},Do={class:"beian"},zo={href:"https://beian.miit.gov.cn",target:"_blank"},Mo={__name:"index",setup(i){const o=_=>{let t="",n="",s=100;switch(_){case"1-1":t="/platform/cldp";break;case"1-2":t="/platform/car";break;case"1-3":t="/platform/medicine";break;case"2-1":t="/solution/new_energy";break;case"2-2":t="/solution/car";break;case"2-3":t="/solution/e_hr";break;case"3-1":t="/service",n="it-num-serve",s=60;break;case"3-2":t="/service",n="diy-system-serve",s=60;break;case"3-3":t="/service",n="it-resources-serve",s=60;break;case"4-1":t="/about_us",n="blurb-box",s=100;break;case"4-2":t="/about_us",n="honor-box",s=60;break;case"4-3":t="/about_us",n="patent-box",s=100;break}console.log(t,n,s),n?(te.push({path:t}),setTimeout(()=>{const p=document.querySelector(`.${n}`).offsetTop-s;window.scrollTo(0,p)},100)):window.location.href=t};return(_,t)=>{const n=R("lazy"),s=R("aniClass");return r(),u("div",Io,[e("div",xo,[d((r(),u("div",ko,[d(e("img",Lo,null,512),[[n,v(Eo)]])])),[[s,"fade-in"]]),e("div",Ro,[e("div",Ao,[d((r(),u("h4",null,[h("产品")])),[[s,"fade-in"]]),d((r(),u("a",{onClick:t[0]||(t[0]=l=>o("1-1"))},[h("BlueDove平台")])),[[s,"fade-in"]]),d((r(),u("a",{onClick:t[1]||(t[1]=l=>o("1-2"))},[h("乘用车出行平台")])),[[s,"fade-in"]]),d((r(),u("a",{onClick:t[2]||(t[2]=l=>o("1-3"))},[h("医药流通B2B平台")])),[[s,"fade-in"]])]),e("div",To,[d((r(),u("h4",null,[h("解决方案")])),[[s,"fade-in"]]),d((r(),u("a",{onClick:t[3]||(t[3]=l=>o("2-1"))},[h("新能源动力电池大数据平台")])),[[s,"fade-in"]]),d((r(),u("a",{onClick:t[4]||(t[4]=l=>o("2-2"))},[h("车辆监控大数据平台")])),[[s,"fade-in"]]),d((r(),u("a",{onClick:t[5]||(t[5]=l=>o("2-3"))},[h("eHR平台")])),[[s,"fade-in"]])]),e("div",So,[d((r(),u("h4",null,[h("服务")])),[[s,"fade-in"]]),d((r(),u("a",{onClick:t[6]||(t[6]=l=>o("3-1"))},[h("IT数字化轻咨询")])),[[s,"fade-in"]]),d((r(),u("a",{onClick:t[7]||(t[7]=l=>o("3-2"))},[h("定制化系统开发")])),[[s,"fade-in"]]),d((r(),u("a",{onClick:t[8]||(t[8]=l=>o("3-3"))},[h("IT人力资源")])),[[s,"fade-in"]])]),e("div",Bo,[d((r(),u("h4",null,[h("关于我们")])),[[s,"fade-in"]]),d((r(),u("a",{onClick:t[9]||(t[9]=l=>o("4-1"))},[h("公司简介")])),[[s,"fade-in"]]),d((r(),u("a",{onClick:t[10]||(t[10]=l=>o("4-2"))},[h("公司荣誉")])),[[s,"fade-in"]]),d((r(),u("a",{onClick:t[11]||(t[11]=l=>o("4-3"))},[h("软著&专利")])),[[s,"fade-in"]])]),e("div",Vo,[d((r(),u("h4",Oo,[h("联系我们")])),[[s,"fade-in"]]),d((r(),u("a",Wo,[h("联系电话：020-31974007")])),[[s,"fade-in"]]),d((r(),u("a",Fo,[h("周一到周五 9:30 - 18:00")])),[[s,"fade-in"]]),d((r(),u("a",Po,[h("商务合作：18922717557")])),[[s,"fade-in"]]),d((r(),u("a",No,[h("广州市番禺区汉溪大道东290号保利 大都会A31110室")])),[[s,"fade-in"]])])])]),e("div",Do,[d((r(),u("a",zo,[h(" Copyright © 2017 广州云链科技有限公司 All rights reserved. 粤ICP备18075567 号 ")])),[[s,"animate__animated animate__fadeInUp"]])])])}}},qo=T(Mo,[["__scopeId","data-v-4ca032da"]]),G={__name:"index",setup(i){return(o,_)=>(r(),u("div",null,[a(v(ut)),a(v(yt)),a(v(Zt)),a(v(ms)),a(v(Ps)),a(v(wo)),a(v(qo))]))}},Ho=[{path:"/",component:G},{path:"/home",redirect:"/"},{path:"/about_us",component:()=>V(()=>import("../js/AboutUs/index.Cc3Jcpb6.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))},{path:"/service",component:()=>V(()=>import("../js/Service/index.mQPKccuR.js"),__vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11,12,16,14]))},{path:"/join_us",component:()=>V(()=>import("../js/JoinUs/index.GHQEfu80.js"),__vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11,12,18,14]))},{path:"/platform/cldp",component:()=>V(()=>import("../js/Cldp/index.BhVkyd5V.js"),__vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11,12,20,14]))},{path:"/platform/car",component:()=>V(()=>import("../js/Car/index.DcbPcmBF.js"),__vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12,22,14]))},{path:"/platform/medicine",component:()=>V(()=>import("../js/Medicine/index.BTr9t5EK.js"),__vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11,12,24,14]))},{path:"/solution/new_energy",component:()=>V(()=>import("../js/NewEnergy/index.BMxRM3AO.js"),__vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10,11,12,26,14]))},{path:"/solution/car",component:()=>V(()=>import("../js/Car/index.D7ldMieB.js"),__vite__mapDeps([27,1,2,3,4,5,6,7,8,9,10,11,12,28,14]))},{path:"/solution/e_hr",component:()=>V(()=>import("../js/EHr/index.CE_h4hTE.js"),__vite__mapDeps([29,1,2,3,4,5,6,7,8,9,10,11,12,30,14]))},{path:"/:catchAll(.*)",name:"not-found",component:G}],te=ve({mode:"history",history:fe(),routes:Ho});function Uo(i){console.log(i),i.directive("scrollBottom",{updated(o){setTimeout(()=>{o.scrollTo({top:o.scrollHeight-o.clientHeight,behavior:"smooth"})},500)}}),i.directive("btn",{mounted(o){o.addEventListener("focus",K)},unmounted(o){o.removeEventListener("focus",K)}}),i.directive("dragComponent",{beforeMount(o,_){if(!_.value)return;const t=o.querySelector(".ad-box"),n=o.querySelector(".ad-title");n.style.cssText+=";cursor:move;";const s=function(){return(l,p)=>getComputedStyle(l,null)[p]}();n.onmousedown=l=>{const p=l.clientX-n.offsetLeft,f=l.clientY-n.offsetTop,c=document.body.clientWidth,b=document.documentElement.clientHeight,y=t.offsetWidth,w=t.offsetHeight,I=t.offsetLeft,x=c-t.offsetLeft-y,E=t.offsetTop,S=b-t.offsetTop-w;let g=s(t,"left");g==="auto"&&(g="0px");let D=s(t,"top");return g.includes("%")?(g=+document.body.clientWidth*(+g.replace(/%/g,"")/100),D=+document.body.clientHeight*(+D.replace(/%/g,"")/100)):(g=+g.replace(/px/g,""),D=+D.replace(/px/g,"")),document.onmousemove=function(Q){let z=Q.clientX-p,M=Q.clientY-f;-z>I?z=-I:z>x&&(z=x),-M>E?M=-E:M>S&&(M=S),t.style.cssText+=`;left:${z+g}px;top:${M+D}px;`},document.onmouseup=function(Q){document.onmousemove=null,document.onmouseup=null},!1}}})}const K=function(i){let o=i.target;o.nodeName=="SPAN"&&(o=i.target.parentNode),o.blur()},Yo="/assets/loading-err-DzQRvQ5e.png",Qo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAToSURBVHic7d1Lc9pIGIbR1lT+/8+dxWw0C8Vyo/vtBQTnLFIFwZiqPPV108Jx8+9/bYGr/fPqF8BnEhYRwiJCWEQIiwhhESEsIoRFhLCIEBYRwiJCWEQIiwhhESEsIoRFhLCIEBYRwiJCWEQIiwhhESEsIoRFhLCIEBYRwiJCWEQIiwhhESEsIoRFhLCIEBYRwiJCWEQIiwhhESEsIoRFhLCIEBaXadvf33IiLK7UtyUsrtEl1TRNd1NYXKBt2y4pE4tr1IOqH1dFWBzWtm29W6/vL8LisKZpBstfscfiKuO2upvC4qy+rXq/JSyWzG2kJtm8s8mxpLqbwmJCv6hNbqGWv6ojLB4MDtC3qxO0eedBf4Be2zW0+i8RFqWcGFS1OkFhfbXBGcHcY7YH54CUUtZG1Pg64MbTB3ssSpnZP40H1cbl0gEppUztzScD6jrbviYKi19zSY3vLD/L4tzK+CfzCrmTpmm6RLavfavLorCYsLxDX32f2DSNsCjlcfbU3Qwm2fbjLnssfi13s2v/Liz+Wr6es+uYtAiL3sImvVQb/MmvHf+VPRbT+mWxbqtsvhotLCbUC1/dVtl8odpSyINLPuZQTCx6CyfsB55NWPx1fkrVLIWsO9CcsIgQFkv2nov2hMWsw1UVYTHnTFVFWEw6dsRQc9zA0MlZ1TGxGLrkQEtYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHvFVbbtud/tyfv4L3C4mO8V1iX/G5P3sF7hVWzJt7ai8Na3lRp675eHFa39g0CsoX/AC8Iq/3R3Rzvq5ofxdC6rddMrL6b/mb5acj+/TM8Nax+UNVzqB9gk6OrGFr39KSw+nTm6uHDPCOswRq3cQ71X6W8O3pGWOOSBq0MHjC3MnIjT1oKJysZp7awYjqDuJdnb97L2kDq7x+UVJeXf6WcdU1YW/69+zLqgbRlfaxPvKyPd3FBWNtHyPLWau4By0/CezoV1mBLtLGwLe8HJ6eURfBGjoc1t8teVj++32kNilnIVFt3cSSsyWsve4dWX9XgeRYu7DiIv5F9YV1yOW/u6GFczPhTD+e/O8+xNazVQ8szg2RwQboOqD6hKKq6jz9bHrT6jzpobvXxXT1ze6y93503tGlire6md1VVP+fg8eND0fqzWdzI1qVw8hrL+P69bxXrJ+n/lNEH2LQU9rpu5pIa31mqObd6Daf+FrteFW9oR1iDjVFtuYaFK9DjMwunCZ9h38QaW913bxxUq/dzL/vOscYXWOau53gr9+UOnrwvjCJJUQ4shZNJ9duvIilKKQcm1vJnQVd33z6p9yXObt7L4xlE2dCWkfYNzn4eqzweb3YWjstV9SUOTqy91234NkfCcjjOqiNL4fL+Hcq1P/5ljNF73//Rj1u77OcKjStqT/25Qr7HNRPLuGLgbFgWQSadPXlXFZNOhaUq5jhuIEJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGER8T+heXqoUDQ73QAAAABJRU5ErkJggg==",F=oe(Re);F.use(te);F.use(be);F.use(ge,{preLoad:1.3,error:Yo,loading:Qo,attempt:5});Uo(F);for(const[i,o]of Object.entries(he))F.component(i,o);F.directive("aniClass",{mounted(i,o){const _=o.value||"",t=_.trim().split(" "),n=t.length>=2;let s=!1;new IntersectionObserver(p=>{p.forEach(f=>{f.isIntersecting&&!s?(n?t.forEach(c=>{i.classList.add(c)}):i.classList.add(_||"fade-in-up"),s=!0):!f.isIntersecting&&s&&setTimeout(()=>{n?t.forEach(c=>{i.classList.remove(c)}):i.classList.remove(_||"fade-in-up"),s=!1},1050)})},{threshold:1e-6}).observe(i)}});F.mount("#app");export{qo as F,st as T,T as _,es as a,fs as b,vs as c,ps as d};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["js/AboutUs/index.Cc3Jcpb6.js","js/@vue/@vue.Dq3L9ZFj.js","js/element-plus/element-plus.8HAWBxNF.js","js/lodash-es/lodash-es.D2AGskbj.js","js/async-validator/async-validator.DKvM95Vc.js","js/@vueuse/@vueuse.JwnVhuu1.js","js/@element-plus/@element-plus.xt0a45hF.js","js/@ctrl/@ctrl.r5W6hzzQ.js","js/@popperjs/@popperjs.D9SI2xQl.js","assets/element-plus-BNIb8Gyq.css","js/vue-router/vue-router.Cwy0Ypwr.js","js/vue-kinesis/vue-kinesis.DZPqBu3c.js","js/vue-lazyload/vue-lazyload.CNWYb5Sv.js","assets/index-kJKcRX6E.css","assets/animate-B-gXXBrj.css","js/Service/index.mQPKccuR.js","assets/index-CQA7f79y.css","js/JoinUs/index.GHQEfu80.js","assets/index-TQDqgPzH.css","js/Cldp/index.BhVkyd5V.js","assets/index-TK2H_YVO.css","js/Car/index.DcbPcmBF.js","assets/index-Dyhp7QoN.css","js/Medicine/index.BTr9t5EK.js","assets/index-DGRGAgs1.css","js/NewEnergy/index.BMxRM3AO.js","assets/index-Cz7CNwU9.css","js/Car/index.D7ldMieB.js","assets/index-D3Uf8PTc.css","js/EHr/index.CE_h4hTE.js","assets/index-DegGeH1E.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
