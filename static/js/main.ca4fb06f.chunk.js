(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(27),r=a.n(s),i=(a(57),a(58),a(11)),l=a(6);var o=function(e,t){return fetch(e,{method:"GET",headers:{Authorization:"Bearer "+t}}).then((function(e){return e.json()}))},u=(a(59),a(12)),j=a(3);var b=function(e){return Object(j.jsx)("div",{className:"loader-wrap "+e.active,children:Object(j.jsx)("div",{className:"loader",children:Object(j.jsxs)("div",{className:"loader-inner line-scale-pulse-out",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})})})};var p=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(null),i=Object(l.a)(r,2),p=i[0],m=i[1],h=Object(c.useState)(null),d=Object(l.a)(h,2),f=d[0],O=d[1],k=Object(c.useState)("active"),v=Object(l.a)(k,2),g=v[0],x=v[1],y=Object(u.c)((function(e){return e})),N=Object(u.b)();function T(t){x("");var a=t.categories.items.map((function(t,a){return Object(j.jsxs)("div",{className:"playlist__item",onClick:function(){return a=t.id,void e.history.push({pathname:"/playlist",search:"?"+a});var a},children:[Object(j.jsx)("img",{className:"playlist__img",src:t.icons[0].url,alt:""}),Object(j.jsx)("h1",{className:"playlist__name",children:t.name})]},a)}));s(a),m(t.categories.next),O(t.categories.previous)}return Object(c.useEffect)((function(){null===y.token?fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+btoa(y.userId+":"+y.userSecret)},body:"grant_type=client_credentials"}).then((function(e){return e.json()})).then((function(e){N({type:"getToken",val:e.access_token}),o("https://api.spotify.com/v1/browse/categories?locale=sv_US",e.access_token).then((function(e){T(e)}))})):o("https://api.spotify.com/v1/browse/categories?locale=sv_US",y.token).then((function(e){T(e)}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{active:g}),Object(j.jsx)("section",{className:"playlists",children:n}),Object(j.jsxs)("section",{className:"controlls",children:[Object(j.jsx)("button",{className:"btns",onClick:function(){x("active"),""!==f&&null!=f&&o(f,y.token).then((function(e){T(e)}))},children:"Prev"}),Object(j.jsx)("button",{className:"btns",onClick:function(){x("active"),""!==p&&null!=p&&o(p,y.token).then((function(e){T(e)}))},children:"Next"})]})]})};var m=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(null),i=Object(l.a)(r,2),p=i[0],m=i[1],h=Object(c.useState)(null),d=Object(l.a)(h,2),f=d[0],O=d[1],k=Object(c.useState)("active"),v=Object(l.a)(k,2),g=v[0],x=v[1],y=Object(u.c)((function(e){return e.token})),N=Object(u.b)();function T(t){x("");var a=t.playlists.items.map((function(t,a){var c="#";return t.images.length>0&&(c=t.images[0].url),Object(j.jsxs)("div",{className:"playlist__item",onClick:function(){return N({type:"getInputVal",inpVal:t.tracks.href}),N({type:"ChangeTypeTrack",CTOT:"fromPLaylist"}),void e.history.push({pathname:"/tracks"})},children:[Object(j.jsx)("img",{src:c,className:"playlist__img",alt:""}),Object(j.jsx)("h1",{className:"playlist__name",children:t.name})]},a)}));s(a),m(t.playlists.next),O(t.playlists.previous)}return Object(c.useEffect)((function(){var t=e.history.location.search.slice(1);o("https://api.spotify.com/v1/browse/categories/".concat(t,"/playlists?limit=",20),y).then((function(e){T(e)}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{active:g}),Object(j.jsx)("section",{className:"playlists",children:n}),Object(j.jsxs)("section",{className:"controlls",children:[Object(j.jsx)("button",{className:"btns",onClick:function(){x("active"),""!==f&&null!=f&&o(f,y).then((function(e){T(e)}))},children:"Prev"}),Object(j.jsx)("button",{className:"btns",onClick:function(){x("active"),""!==p&&null!=p&&o(p,y).then((function(e){T(e)}))},children:"Next"})]})]})},h=a(52),d=a(13),f=a.p+"static/media/like.70a373d4.png",O=a.p+"static/media/delete.6853ac27.png",k=a(48),v=a.n(k).a.create({baseURL:"https://first-project-471af-default-rtdb.firebaseio.com/"});var g=function(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),n=a[0],s=a[1],r=Object(u.c)((function(e){return e}));function i(){e.onClickLike(),s([])}return Object(c.useEffect)((function(){s([Object(j.jsx)("img",{className:"likeIcon",src:e.icon,onClick:i,alt:""})])}),[r.typeTrack]),Object(j.jsxs)("div",{className:"playlist__item",children:[Object(j.jsx)("img",{src:e.img,className:"playlist__img",alt:""}),Object(j.jsx)("h1",{className:"playlist__name",children:e.name}),Object(j.jsxs)("h3",{className:"playlist__name",children:["Name Artist: ",Object(j.jsx)("span",{style:{color:"rgba(0, 255, 56, 0.83)"},children:e.artName})]}),Object(j.jsxs)("div",{className:"item__bottom",children:[n,Object(j.jsx)("a",{className:"trackBtn ",target:"_blank",href:e.listen,children:"listen to it"})]})]},e.index)};a(81);var x=function(e){return Object(j.jsx)("div",{className:"popup-wrap",onClick:e.ClickClose,children:Object(j.jsxs)("div",{className:"popup__body",children:[Object(j.jsx)("h3",{className:"popup__text",children:e.text}),Object(j.jsxs)("section",{className:"controlls",children:[Object(j.jsx)("button",{className:"btns",onClick:e.clickCancel,children:"Cancel"}),Object(j.jsx)("button",{className:"btns",onClick:e.clickYes,children:"Yes"})]})]})})};var y=function(){var e=Object(u.c)((function(e){return e})),t=Object(i.f)(),a=Object(u.b)(),n=Object(c.useState)(null),s=Object(l.a)(n,2),r=s[0],p=s[1],m=Object(c.useState)(null),k=Object(l.a)(m,2),y=k[0],N=k[1],T=Object(c.useState)("active"),C=Object(l.a)(T,2),S=C[0],_=C[1],I=Object(c.useState)([]),w=Object(l.a)(I,2),E=w[0],U=w[1],F=Object(c.useState)([]),P=Object(l.a)(F,2),R=P[0],L=P[1],V=Object(c.useState)([]),A=Object(l.a)(V,2),z=A[0],B=A[1],M=null;function Y(e){var t=e.items.map((function(e,t){return Object(j.jsx)(g,{index:t,img:e.track.album.images[0].url,name:e.track.name,artName:e.track.artists[0].name,onClickLike:function(){return W(e.track)},listen:e.track.external_urls.spotify,icon:f},t)}));L(t),p(e.next),N(e.previous)}function D(e){var t=e.items.map((function(e,t){var a="#";return e.album.images.length>0&&(a=e.album.images[0].url),Object(j.jsx)(g,{img:a,name:e.name,artName:e.album.artists[0].name,onClickLike:function(){return W(e,t)},listen:e.album.external_urls.spotify,icon:f},t)}));L(t),p(e.next),N(e.previous)}function W(c,n){if(e.authorize){if(!Object.values(e.tracks.tracksName).includes(c.name))if(0===e.tracks.tracksName.length)v.post("/users.json",{email:e.userEmail,tracksName:[c.name],tracksUrl:[c.href]}).then((function(e){_("");var t={tracksName:[c.name],tracksUrl:[c.href]};a({type:"getId",userId:e.data.name}),a({type:"saveTrack",valTrack:t})}));else{var s=Object(d.a)({},e.tracks);console.log(n);var r=Object.values(s.tracksName),i=Object.values(s.tracksUrl);r.push(c.name),i.push(c.href),a({type:"saveTrack",valTrack:s={tracksName:r,tracksUrl:i}}),v.patch("/users/".concat(e.userFirebaseId,".json"),s).then((function(e){_("")}))}}else t.push("/sign")}function G(){var t=Object(d.a)({},e.tracks);delete t.tracksName[M],delete t.tracksUrl[M];var c=[],n=[];t.tracksName.forEach((function(e){null!=e&&c.push(e)})),t.tracksUrl.forEach((function(e){null!=e&&n.push(e)})),a({type:"saveTrack",valTrack:t={tracksName:c,tracksUrl:n}}),v.patch("/users/".concat(e.userFirebaseId,".json"),t).then((function(e){_("")}))}return Object(c.useEffect)((function(){if(B([]),L([]),_("active"),"fromPLaylist"===e.typeTrack)o(e.inputVal,e.token).then((function(e){_(""),Y(e)}));else if("fromInput"===e.typeTrack)o("https://api.spotify.com/v1/search?q=".concat(e.inputVal,"&type=track"),e.token).then((function(e){_(""),D(e.tracks)}));else if("myMusic"===e.typeTrack){var t=Object.values(e.tracks.tracksUrl),a=!0;t.forEach((function(e,c){null===e&&t.length===c++&&(_(""),B([Object(j.jsx)("h1",{className:"sign-title",style:{color:"#fff",background:"rgba(94,98,100, .5)",borderRadius:"10px",padding:"20px"},children:"There's should be your favorite tracks"})]),a=!1)})),a&&B([]),0===t.length?(_(""),B([Object(j.jsx)("h1",{className:"sign-title",style:{color:"#fff",background:"rgba(94,98,100, .5)",borderRadius:"10px",padding:"20px"},children:"There's should be your favorite tracks"})])):B([]);var c=function(a){o(t[a],e.token).then((function(e){_("");var t="#";e.album.images.length>0&&(t=e.album.images[0].url);var c=Object(j.jsx)(g,{img:t,name:e.album.name,artName:e.album.artists[0].name,onClickLike:function(){return M=a,void U(Object(j.jsx)(x,{text:"Are you want to delete this track?",ClickClose:function(){return U()},clickCancel:function(){return U()},clickYes:G}))},listen:e.album.external_urls.spotify,icon:O},a);L((function(e){return[].concat(Object(h.a)(e),[c])})),p(R.next),N(R.previous)}))};for(var n in t)c(n)}}),[e.typeTrack,e.tracks.tracksName,e.inputVal]),Object(j.jsxs)("div",{style:{position:"relative"},children:[Object(j.jsx)(b,{active:S}),z,E,Object(j.jsx)("section",{className:"playlists",children:R}),Object(j.jsxs)("section",{className:"controlls",children:[Object(j.jsx)("button",{className:"btns",onClick:function(){""!==y&&null!=y&&(e.TorS?o(y,e.token).then((function(e){Y(e)})):o(y,e.token).then((function(e){D(e.tracks)})))},children:"Prev"}),Object(j.jsx)("button",{className:"btns",onClick:function(){""!==r&&null!=r&&(e.TorS?o(r,e.token).then((function(e){Y(e)})):o(r,e.token).then((function(e){D(e.tracks)})))},children:"Next"})]})]})};a(83);a(84);var N=a.p+"static/media/user.f8cc65ce.png",T=a.p+"static/media/like1.6a39de35.png";var C=function(e){var t=Object(c.useState)(null),a=Object(l.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)([]),o=Object(l.a)(r,2),b=o[0],p=o[1],m=Object(i.f)(),h=Object(u.b)(),d=Object(u.c)((function(e){return e}));return Object(j.jsxs)("header",{className:"header",children:[b,Object(j.jsxs)("a",{href:"#",onClick:function(){return m.push("/")},className:"logo",children:["My",Object(j.jsx)("span",{children:"Music"})]}),Object(j.jsxs)("form",{className:"form",onSubmit:function(e){return function(e){e.preventDefault(),h({type:"getInputVal",inpVal:n}),h({type:"ChangeTypeTrack",CTOT:"fromInput"}),m.push("/tracks")}(e)},children:[Object(j.jsx)("input",{type:"text",placeholder:"name of track",onChange:function(e){return function(e){s(e.target.value)}(e)}}),Object(j.jsx)("button",{className:"btn",children:"search"})]}),Object(j.jsx)("img",{src:T,alt:"",className:"like",onClick:function(){d.authorize?(h({type:"ChangeTypeTrack",CTOT:"myMusic"}),m.push("/tracks")):m.push("/sign")}}),Object(j.jsx)("img",{src:N,alt:"",className:"user",onClick:function(){d.authorize?p(Object(j.jsx)(x,{text:"Are you want to logout?",ClickClose:function(){return p()},clickCancel:function(){return p()},clickYes:function(){m.push("/sign"),p(),h({type:"authT",authState:!1})}})):m.push("/sign")}})]})},S=a(30);a(86);S.a.initializeApp({apiKey:"AIzaSyBsn-MaRGYexCL-nloe2gi9t1E76EKfkrQ",authDomain:"first-project-471af.firebaseapp.com",databaseURL:"https://first-project-471af-default-rtdb.firebaseio.com",projectId:"first-project-471af",storageBucket:"first-project-471af.appspot.com",messagingSenderId:"35494723238",appId:"1:35494723238:web:cca27e3370451da3f8fe67",measurementId:"G-YZR49PNTKR"});S.a.auth();var _=S.a;var I=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),r=Object(l.a)(s,2),o=r[0],b=r[1],p=Object(c.useState)([]),m=Object(l.a)(p,2),h=m[0],d=m[1],f=Object(c.useState)([]),O=Object(l.a)(f,2),k=O[0],g=O[1],x=Object(c.useState)("Sign in"),y=Object(l.a)(x,2),N=y[0],T=y[1],C=Object(c.useState)([]),S=Object(l.a)(C,2),I=S[0],w=S[1],E=(Object(u.c)((function(e){return e})),Object(u.b)()),U=Object(i.f)(),F=0,P=0;function R(e){"email"===e.target.name?n(e.target.value):"password"===e.target.name?b(e.target.value):d(e.target.value)}return Object(c.useEffect)((function(){}),[]),Object(j.jsxs)("div",{className:"sign-wrap",children:[k,Object(j.jsx)("h3",{className:"sign-title",children:N}),Object(j.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),_.auth().signInWithEmailAndPassword(a,o).then((function(e){E({type:"getUserEmail",email:e.user.email}),e.user&&(v.get("/users.json").then((function(t){var a=t.data,c={tracksName:[],tracksUrl:[]};for(var n in a)if(a[n].email===e.user.email){E({type:"getId",userId:n});var s=a[n];for(var r in s)"email"!=r&&(c[r]=s[r])}E({type:"saveTrack",valTrack:c})})),E({type:"authT",authState:!0}),U.push("/"))})).catch((function(e){g(Object(j.jsx)("h1",{className:"sign-title",style:{color:"#FF0004",background:"rgba(100,80,75, .5)",borderRadius:"10px",padding:"20px"},children:"Invalid username or password"}))}))}(e)},children:[Object(j.jsx)("input",{type:"email",className:"email-inp",name:"email",placeholder:"email",onChange:function(e){return R(e)}}),Object(j.jsx)("input",{type:"password",name:"password",className:"email-inp",placeholder:"password",onChange:function(e){return R(e)}}),I]}),Object(j.jsxs)("div",{className:"controlls",style:{display:"flex",justifyContent:"space-between",margin:"0 auto",width:"20%"},children:[Object(j.jsx)("button",{className:"trackBtn",onClick:function(){P++,T("Register"),w(Object(j.jsx)("input",{type:"password",name:"password2",className:"email-inp",placeholder:"reapit password",onChange:function(e){return R(e)}})),"Register"==N&&(2===++P&&o===h?(P++,_.auth().createUserWithEmailAndPassword(a,o).then((function(e){E({type:"getId",userId:e.user.email}),E({type:"authT",authState:!0}),U.push("/")})).catch((function(e){g(Object(j.jsx)("h1",{className:"sign-title",style:{color:"#FF0004",background:"rgba(100,80,75, .5)",borderRadius:"10px",padding:"20px"},children:e.message}))}))):g("Password mismatch"))},children:"register"}),Object(j.jsx)("button",{className:"trackBtn",onClick:function(){F++,T("Sign in"),w([]),"Sign in"===N&&2===++F&&(F=0,_.auth().signInWithEmailAndPassword(a,o).then((function(e){E({type:"getUserEmail",email:e.user.email}),e.user&&(v.get("/users.json").then((function(t){var a=t.data,c={tracksName:[],tracksUrl:[]};for(var n in a)if(a[n].email===e.user.email){E({type:"getId",userId:n});var s=a[n];for(var r in s)"email"!=r&&(c[r]=s[r])}E({type:"saveTrack",valTrack:c})})),E({type:"authT",authState:!0}),U.push("/"))})).catch((function(e){g(Object(j.jsx)("h1",{className:"sign-title",style:{color:"#FF0004",background:"rgba(100,80,75, .5)",borderRadius:"10px",padding:"20px"},children:"Invalid username or password"}))})))},children:"sign-in"})]})]})};var w=function(){return Object(j.jsx)("div",{className:"wrap",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(C,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",component:p}),Object(j.jsx)(i.a,{path:"/sign",component:I}),Object(j.jsx)(i.a,{path:"/playlist",component:m}),Object(j.jsx)(i.a,{path:"/tracks",component:y})]})]})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,88)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))},U=a(21),F={authorize:!1,userEmail:null,userFirebaseId:null,userId:"d5edfd31b9564daf9012d97ec031a0e1",userSecret:"c18d9365349f4b94b5e01f895fd734fd",token:null,inputVal:null,typeTrack:null,tracks:{tracksName:[],tracksUrl:[]}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"getToken":return Object(d.a)(Object(d.a)({},e),{},{token:t.val});case"getInputVal":return Object(d.a)(Object(d.a)({},e),{},{inputVal:t.inpVal});case"ChangeTypeTrack":return Object(d.a)(Object(d.a)({},e),{},{typeTrack:t.CTOT});case"getUserEmail":return Object(d.a)(Object(d.a)({},e),{},{userEmail:t.email});case"authT":return Object(d.a)(Object(d.a)({},e),{},{authorize:t.authState});case"getId":return Object(d.a)(Object(d.a)({},e),{},{userFirebaseId:t.userId});case"saveTrack":return Object(d.a)(Object(d.a)({},e),{},{tracks:t.valTrack});default:return e}},R=a(23),L=a(50),V=a(51),A=Object(R.createStore)(P,Object(V.composeWithDevTools)(Object(R.applyMiddleware)(L.a)));r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(U.a,{children:Object(j.jsx)(u.a,{store:A,children:Object(j.jsx)(w,{})})})}),document.getElementById("root")),E()}},[[87,1,2]]]);
//# sourceMappingURL=main.ca4fb06f.chunk.js.map