import{u as h,g as x,h as l,r as _,o as m,c as y,j as e,k as v,l as w,m as k,w as V,n as i,v as c,a as B,p as C,q as f}from"./vendor.62f9402c.js";import{l as E}from"./logo.3fbe5025.js";import{_ as M}from"./AlertDanger.b2c1b5af.js";import{c as N,g as j,u as A}from"./index-6de4cbb9.2e0a669d.js";const D={class:"bg-white"},U={class:"flex justify-center h-screen"},q=e("div",{class:"hidden bg-cover lg:block lg:w-2/3",style:{"background-image":"url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60)"}},[e("div",{class:"flex items-center h-full px-20 bg-gray-900 bg-opacity-40"})],-1),H={class:"flex items-center w-full max-w-md px-6 mx-auto lg:relative xl:relative lg:w-2/6"},P={class:"flex-1"},S={class:"text-center"},T={class:"flex justify-center"},G=["src"],R=e("p",{class:"mt-3 font-semibold text-gray-500 text-md"}," Sign up to create your account ",-1),W={class:"mt-8"},J=e("label",{for:"email",class:"block mb-2 text-sm text-gray-600"}," Enter your full name ",-1),L={class:"mt-6"},Y=e("label",{for:"email",class:"block mb-2 text-sm text-gray-600"}," Enter your email ",-1),$={class:"mt-6"},z=e("label",{for:"password",class:"text-sm text-gray-600"}," Create your password ",-1),F=e("div",{class:"mt-6"},[e("button",{class:"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 disabled:bg-gray-400/40",type:"submit"}," Create new account ")],-1),I={class:"mt-6 text-sm text-center text-gray-400"},K=f(" Already have an account? "),O=f(" Sign in "),oe={setup(Q){const p=h(),g=x(),a=l(),r=l(),n=l(p.query.email),u=l(),d=l(()=>{a.value=null,N(j(),n.value,u.value).then(({user:s})=>r.value&&A(s,{displayName:r.value}).then(()=>g.push({name:"Profile"}))).catch(s=>{a.value=s.message,console.log("err",s.message)})});return(s,t)=>{const b=_("router-link");return m(),y("div",D,[e("div",U,[q,e("div",H,[a.value?(m(),v(M,{key:0,message:a.value},null,8,["message"])):w("",!0),e("div",P,[e("div",S,[e("div",T,[e("img",{src:k(E),alt:"Ethereal Tech"},null,8,G)]),R]),e("div",W,[e("form",{onSubmit:t[3]||(t[3]=V((...o)=>d.value&&d.value(...o),["prevent"]))},[e("div",null,[J,i(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>r.value=o),name:"fullname",id:"fullname",placeholder:"John Doe",class:"block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"},null,512),[[c,r.value]])]),e("div",L,[Y,i(e("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=o=>n.value=o),name:"email",id:"email",placeholder:"example@example.com",class:"block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"},null,512),[[c,n.value]])]),e("div",$,[z,i(e("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=o=>u.value=o),name:"password",id:"password",placeholder:"********",class:"block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"},null,512),[[c,u.value]])]),F],32),e("p",I,[K,B(b,{to:{name:"Login"},class:"text-blue-500 focus:outline-none focus:underline hover:underline"},{default:C(()=>[O]),_:1})])])])])])])}}};export{oe as default};