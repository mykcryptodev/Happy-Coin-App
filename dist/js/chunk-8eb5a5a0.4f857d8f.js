(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8eb5a5a0"],{5326:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pt-15"},[n("v-card",{attrs:{shaped:""}},[n("v-row",[n("v-col",{staticClass:"d-flex align-center justify-center"},[n("img",{attrs:{src:r("c062"),height:"128px"}})])],1),n("v-card-title",{staticClass:"d-flex justify-center"},[t._v(" Login ")]),n("v-card-text",[n("v-row",[n("v-col",{staticClass:"d-flex align-center justify-center"},[n("LoginButton",{attrs:{icon:"mdi-google",text:"Login with Google"}})],1),n("v-col",{staticClass:"d-flex align-center justify-center"},[n("LoginButton",{attrs:{icon:"mdi-facebook",text:"Login with Facebook"}})],1)],1)],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn",{attrs:{color:"primary",rounded:""},on:{click:t.login}},[t.icon?r("v-icon",{attrs:{left:""}},[t._v(t._s(t.icon))]):t._e(),t.text?r("span",[t._v(t._s(t.text))]):t._e()],1)},a=[],s=r("1da1"),c=(r("ac1f"),r("5319"),r("96cf"),r("2591")),u={name:"Login",props:{text:String,icon:String},data:function(){return{googleAuth:new c["a"].auth.GoogleAuthProvider}},methods:{login:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].auth().signInWithPopup(t.googleAuth);case 2:if(r=e.sent,!r.additionalUserInfo.isNewUser){e.next=7;break}return t.$store.dispatch("setLoadingApp",!0),e.next=7,c["a"].firestore().collection("users").doc(r.user.uid).set({uid:r.user.uid,email:r.user.email});case 7:return e.abrupt("return",t.redirectAfterLogin());case 8:case"end":return e.stop()}}),e)})))()},redirectAfterLogin:function(){return this.$route.query&&this.$route.query.from?this.$router.replace(this.$route.query.from):this.$router.push({name:"Home"})}}},l=u,d=r("2877"),f=r("6544"),g=r.n(f),p=r("8336"),h=r("132d"),m=Object(d["a"])(l,i,a,!1,null,null,null),v=m.exports;g()(m,{VBtn:p["a"],VIcon:h["a"]});var x={name:"Login",components:{LoginButton:v},data:function(){return{}},created:function(){if(this.user)return this.$router.push({name:"Home"})},computed:{user:function(){return this.$store.getters.getUser}}},w=x,b=r("b0af"),L=r("99d9"),_=r("62ad"),C=r("a523"),$=r("0fd9"),k=Object(d["a"])(w,n,o,!1,null,null,null);e["default"]=k.exports;g()(k,{VCard:b["a"],VCardText:L["a"],VCardTitle:L["b"],VCol:_["a"],VContainer:C["a"],VRow:$["a"]})},c062:function(t,e,r){t.exports=r.p+"img/logo-spin.982feb08.gif"}}]);
//# sourceMappingURL=chunk-8eb5a5a0.4f857d8f.js.map