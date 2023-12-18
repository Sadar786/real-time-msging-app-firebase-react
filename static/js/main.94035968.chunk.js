(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{67:function(e,a,c){},68:function(e,a,c){},69:function(e,a,c){},73:function(e,a,c){},80:function(e,a,c){},81:function(e,a,c){},82:function(e,a,c){},83:function(e,a,c){},84:function(e,a,c){"use strict";c.r(a);var s=c(2),n=c.n(s),t=c(22),i=c.n(t),l=(c(67),c(68),c(69),c(42)),r=c.n(l),j=c(49),d=c.n(j),o=c(16),h=c(26);const b=Object(h.b)({name:"app",initialState:{channelId:null,channelName:null},reducers:{setChannelInfo:(e,a)=>{e.channelId=a.payload.channelId,e.channelName=a.payload.channelName}}}),{setChannelInfo:m}=b.actions,O=e=>e.app.channelId,u=e=>e.app.channelName;var p=b.reducer,x=(c(73),c(3));var N=function(e){let{id:a,channelName:c}=e;const s=Object(o.b)();return Object(x.jsx)("div",{className:"sidebarChannel",onClick:()=>s(m({channelId:a,channelName:c})),children:Object(x.jsxs)("h4",{children:[Object(x.jsx)("span",{className:"sidebarChannel__hash",children:"#"}),c]})})},_=c(103);const v=Object(h.b)({name:"user",initialState:{user:null},reducers:{login:(e,a)=>{e.user=a.payload},logout:(e,a)=>{e.user=null}}}),{login:g,logout:f}=v.actions,S=e=>e.user.user;var I=v.reducer,C=c(28);const y=C.a.initializeApp({apiKey:"AIzaSyB5KX1ipZXZchl_j0XktHHMgmzjDNA7RPA",authDomain:"wazaa-ce3bc.firebaseapp.com",projectId:"wazaa-ce3bc",storageBucket:"wazaa-ce3bc.appspot.com",messagingSenderId:"797080398768",appId:"1:797080398768:web:6047db0d6a17d8f8204475",measurementId:"G-D7D00L77L7"}).firestore(),z=C.a.auth(),k=new C.a.auth.GoogleAuthProvider;var w=y,H=c(50),D=c.n(H);var A=function(){const e=Object(o.c)(S),[a,c]=Object(s.useState)([]);return Object(s.useEffect)((()=>{w.collection("channels").onSnapshot((e=>{c(e.docs.map((e=>({id:e.id,channel:e.data()}))))}))}),[]),Object(x.jsxs)("div",{className:"sidebar",children:[Object(x.jsxs)("div",{className:"sidebar__top",children:[Object(x.jsx)("h3",{children:"Behindev Chat"}),Object(x.jsx)(r.a,{})]}),Object(x.jsxs)("div",{className:"sidebar__channels",children:[Object(x.jsxs)("div",{className:"sidebar__channelsHeader",children:[Object(x.jsxs)("div",{className:"sidebar__header",children:[Object(x.jsx)(r.a,{}),Object(x.jsx)("h4",{children:"Channels"})]}),Object(x.jsx)(d.a,{onClick:()=>{const e=prompt("Enter a channel name");e&&w.collection("channels").add({channelName:e})},className:"sidebar__addChannel"})]}),Object(x.jsx)("div",{className:"sidebar__channelsList",children:a.map((e=>{let{id:a,channel:c}=e;return Object(x.jsx)(N,{id:a,channelName:c.channelName},a)}))})]}),Object(x.jsxs)("div",{className:"sidebar__profile",children:[Object(x.jsx)(_.a,{src:e.photo}),Object(x.jsxs)("div",{className:"sidebar__profileInfo",children:[Object(x.jsxs)("h3",{children:["@",e.displayName]}),Object(x.jsxs)("p",{children:["#",e.uid.substring(0,5)]})]}),Object(x.jsx)("div",{className:"sidebar__profileIcons",children:Object(x.jsx)(D.a,{onClick:()=>z.signOut()})})]})]})},B=(c(80),c(81),c(51)),E=c.n(B),L=c(52),M=c.n(L),P=c(53),X=c.n(P),F=c(54),G=c.n(F),J=c(55),K=c.n(J),R=c(56),T=c.n(R);var U=function(e){let{channelName:a}=e;return Object(x.jsxs)("div",{className:"chatHeader",children:[Object(x.jsx)("div",{className:"chatHeader__left",children:Object(x.jsxs)("h3",{children:[" ",Object(x.jsx)("span",{className:"chatHeader__hash",children:"#"})," ",a," "]})}),Object(x.jsxs)("div",{className:"chatHeader__right",children:[Object(x.jsx)(E.a,{}),Object(x.jsx)(M.a,{}),Object(x.jsx)(X.a,{}),Object(x.jsxs)("div",{className:"chatHeader__search",children:[Object(x.jsx)("input",{placeholder:"Search"}),Object(x.jsx)(G.a,{})]}),Object(x.jsx)(K.a,{}),Object(x.jsx)(T.a,{})]})]})},Z=c(57),V=c.n(Z),W=c(58),q=c.n(W),Q=c(59),Y=c.n(Q),$=c(60),ee=c.n($);c(82);var ae=function(e){let{timestamp:a,user:c,message:s}=e;return Object(x.jsxs)("div",{className:"message",children:[Object(x.jsx)(_.a,{src:c.photo}),Object(x.jsxs)("div",{className:"message__info",children:[Object(x.jsxs)("h4",{children:[c.displayName,Object(x.jsx)("span",{className:"message__timestamp",children:new Date(null===a||void 0===a?void 0:a.toDate()).toUTCString()})]}),Object(x.jsx)("p",{children:s})]})]})};var ce=function(){const e=Object(o.c)(S),a=Object(o.c)(O),c=Object(o.c)(u),[n,t]=Object(s.useState)(""),[i,l]=Object(s.useState)([]);return Object(s.useEffect)((()=>{a&&w.collection("channels").doc(a).collection("messages").orderBy("timestamp","asc").onSnapshot((e=>l(e.docs.map((e=>e.data())))))}),[a]),Object(x.jsxs)("div",{className:"chat",children:[Object(x.jsx)(U,{channelName:c}),Object(x.jsx)("div",{className:"chat__messages",children:i.map((e=>Object(x.jsx)(ae,{timestamp:e.timestamp,message:e.message,user:e.user})))}),Object(x.jsxs)("div",{className:"chat__input",children:[Object(x.jsx)(V.a,{fontSize:"large"}),Object(x.jsxs)("form",{children:[Object(x.jsx)("input",{value:n,disabled:!a,onChange:e=>t(e.target.value),placeholder:"Message ".concat(c)}),Object(x.jsx)("button",{className:"chat__inputButton",type:"Submit",onClick:c=>{c.preventDefault(),w.collection("channels").doc(a).collection("messages").add({message:n,user:e,timestamp:C.a.firestore.FieldValue.serverTimestamp()}),t("")},children:"Send Message"})]}),Object(x.jsxs)("div",{className:"chat__inputIcons",children:[Object(x.jsx)(q.a,{fontSize:"large"}),Object(x.jsx)(Y.a,{fontSize:"large"}),Object(x.jsx)(ee.a,{fontSize:"large"})]})]})]})},se=(c(83),c(102));var ne=function(){return Object(x.jsxs)("div",{className:"login",children:[Object(x.jsx)("div",{className:"login__logo",children:Object(x.jsx)("img",{alt:"",src:"../"})}),Object(x.jsx)(se.a,{onClick:()=>{z.signInWithPopup(k).catch((e=>alert(e.message)))},children:"Sign in"})]})};var te=function(){const e=Object(o.b)(),a=Object(o.c)(S);return Object(s.useEffect)((()=>{z.onAuthStateChanged((a=>{e(a?g({uid:a.uid,photo:a.photoURL,email:a.email,displayName:a.displayName}):f())}))}),[e]),Object(x.jsx)("div",{className:"app",children:a?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(A,{}),Object(x.jsx)(ce,{})]}):Object(x.jsx)(ne,{})})};const ie=Object(h.a)({reducer:{user:I,app:p}});i.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(o.a,{store:ie,children:Object(x.jsx)(te,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.94035968.chunk.js.map