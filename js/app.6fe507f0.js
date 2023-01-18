(function(){"use strict";var t={5846:function(t,e,n){var r=n(144),s=n(1096),i=n(3250),o=n(6715),u=n(5057),a=n(2469),l=n(3551),c=n(5234),p=function(){var t=this,e=t._self._c;return e(s.Z,[e(i.Z,{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(a.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e(a.Z,{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e(c.Z),e(o.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e(u.Z,[t._v("mdi-open-in-new")])],1)],1),e(l.Z,[e("GithubVuewer")],1)],1)},f=[],h=n(6035),d=function(){var t=this,e=t._self._c;return e(h.Z,[e("GithubRepo")],1)},g=[],v=n(4177),m=n(4437),b=n(5294),y=n(6069),w=function(){var t=this,e=t._self._c;return e("div",[e(b.Z,{staticClass:"text-center"},[e(m.Z,{attrs:{cols:"6"}},[e(v.Z,{attrs:{label:"Encontre seu usuário",items:t.userlist,loading:t.userloading,"search-input":t.usersearch,"item-text":"login"},on:{"update:searchInput":function(e){t.usersearch=e},"update:search-input":function(e){t.usersearch=e}},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),e(m.Z,{attrs:{cols:"6"}},[e(y.Z,{attrs:{items:t.repolist,loading:t.repoloading,"item-text":"name",label:"Selecione o repositorio","return-object":"","single-line":""},model:{value:t.repo,callback:function(e){t.repo=e},expression:"repo"}})],1)],1)],1)},Z=[];function _(t,e){let n=null;function r(){n&&clearTimeout(n);const r=this,s=arguments;n=setTimeout((()=>{t.apply(r,s),n=null}),e)}return r}async function j(t){let e=!0,n=[],r=1;while(e){const s=await fetch(`${t}?page=${r}`),i=await s.json();i.length>0?(n=n.concat(i),r++):e=!1}return n}const x={async search_users(t){const e=`https://api.github.com/search/users?q=${t}`,n=await fetch(e);return await n.json()},async lista_repos(t){const e=`https://api.github.com/users/${t}/repos`,n=await j(e);return n}};var k={data:()=>({user:null,repo:null,usersearch:null,userlist:[],repolist:[],userloading:!1,repoloading:!1}),methods:{procuraUsuariosGithub:_((async function(){this.userloading=!0;const t=await x.search_users(this.usersearch);this.userlist=t.items,this.userloading=!1}),500),async listaRepositorios(){this.repoloading=!0;const t=await x.lista_repos(this.user);this.repolist=t,this.repoloading=!1}},watch:{usersearch(){this.procuraUsuariosGithub()},user(){this.user&&this.listaRepositorios()},repo(){console.log(this.repo)}}},O=k,C=n(1001),P=(0,C.Z)(O,w,Z,!1,null,null,null),T=P.exports,G={components:{GithubRepo:T},data:()=>({})},S=G,R=(0,C.Z)(S,d,g,!1,null,null,null),$=R.exports,V={name:"App",components:{GithubVuewer:$},data:()=>({})},M=V,E=(0,C.Z)(M,p,f,!1,null,null,null),L=E.exports,U=n(2250);r.ZP.use(U.Z);var q=new U.Z({});r.ZP.config.productionTip=!1,new r.ZP({vuetify:q,render:t=>t(L)}).$mount("#app")}},e={};function n(r){var s=e[r];if(void 0!==s)return s.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,s,i){if(!r){var o=1/0;for(c=0;c<t.length;c++){r=t[c][0],s=t[c][1],i=t[c][2];for(var u=!0,a=0;a<r.length;a++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[a])}))?r.splice(a--,1):(u=!1,i<o&&(o=i));if(u){t.splice(c--,1);var l=s();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,s,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,i,o=r[0],u=r[1],a=r[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(s in u)n.o(u,s)&&(n.m[s]=u[s]);if(a)var c=a(n)}for(e&&e(r);l<o.length;l++)i=o[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},r=self["webpackChunkgithub_vuewer"]=self["webpackChunkgithub_vuewer"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5846)}));r=n.O(r)})();
//# sourceMappingURL=app.6fe507f0.js.map