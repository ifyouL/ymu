webpackJsonp([14],{"1P6A":function(t,e){},"Ed4/":function(t,e){},KYgS:function(t,e){},cj6F:function(t,e,n){"use strict";var a={name:"ymu-navbar",components:{Button:n("lkey").a},props:{title:String,leftText:{type:String,default:"返回"},rightText:String,leftArrow:{type:Boolean,default:!0},fixed:Boolean,goBack:{Boolean:Boolean,default:!0}},methods:{handleClickLeft:function(){this.$emit("on-click-left"),this.goBack&&this.$router.back()},handleClickRight:function(){this.$emit("on-click-right")}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ymu-navbar"},[n("div",{staticClass:"ymu-navbar-left"},[t._t("left",[n("div",{staticClass:"ymu-navbar-button",on:{click:t.handleClickLeft}},[t.leftArrow?n("i",{staticClass:"ymu-navbar-button__icon iconfont icon-left"}):t._e(),t._v(" "),n("span",{staticClass:"ymu-navbar-button__text",domProps:{textContent:t._s(t.leftText)}})])])],2),t._v(" "),n("div",{staticClass:"ymu-navbar-title"},[t._t("default",[t._v(t._s(t.title))])],2),t._v(" "),n("div",{staticClass:"ymu-navbar-right"},[t._t("right",[n("div",{staticClass:"ymu-navbar__right-button",on:{click:t.handleClickRight}},[t._v(t._s(t.rightText))])])],2)])},staticRenderFns:[]};var i=n("VU/8")(a,o,!1,function(t){n("1P6A")},null,null).exports;i.install=function(t){t.component(i.name,i)};e.a=i},lkey:function(t,e,n){"use strict";var a={name:"ymu-button",props:{type:{type:String,default:"light"},size:{type:String,default:"normal"},text:String,block:Boolean,disabled:Boolean,plain:Boolean,clear:Boolean,round:Boolean,full:Boolean,showLoading:Boolean},data:function(){return{active:!1}},methods:{handleClick:function(t){this.$emit("click",t)},triggerEvent:function(t,e,n){e!==this.active&&(this.active=e)},onTouchStart:function(t){this.disabled||this.triggerEvent("TouchStart",!0,t)},onTouchEnd:function(t){this.triggerEvent("TouchEnd",!1,t)}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"ymu-button",class:["ymu-button--"+t.type,"ymu-button--"+t.size,"ymu-button--radius",{"ymu-button--disabled":t.disabled,"ymu-button--plain":t.plain,"ymu-button--block":t.block,"ymu-button--round":t.round,"ymu-button--clear":t.clear,"ymu-button--active":t.active}],attrs:{disabled:t.disabled},on:{click:t.handleClick,touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[n("div",{staticClass:"ymu-button-content"},[n("i",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}],staticClass:"ymu-loading"}),t._v(" "),t._t("default",[n("span",{staticClass:"yum-button_text"},[t._v(t._s(t.text))])])],2)])},staticRenderFns:[]};var i=n("VU/8")(a,o,!1,function(t){n("mWDk")},null,null).exports;i.install=function(t){t.component(i.name,i)};e.a=i},mUtA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o={name:"App",components:{Navbar:n("cj6F").a}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},["/"!==this.$route.path?e("Navbar",[this._v(this._s(this.$route.meta.title))]):this._e(),this._v(" "),e("router-view")],1)},staticRenderFns:[]},l=n("VU/8")(o,i,!1,null,null,null).exports,s=n("/ocq");a.a.use(s.a);var r=new s.a({routes:[{path:"/",name:"Welcome",component:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"S4fG")),meta:{title:"ymu"}},{path:"/NoticeBar",name:"NoticeBar",component:()=>n.e(8).then(n.bind(null,"9s4I")),meta:{title:"NoticeBar 通告栏"}},{path:"/Marquee",name:"Marquee",component:()=>n.e(5).then(n.bind(null,"trf8")),meta:{title:"Marquee 跑马灯"}},{path:"/Toast",name:"Toast",component:()=>n.e(12).then(n.bind(null,"v50Z")),meta:{title:"Toast 轻提示"}},{path:"/Tabbar",name:"Tabbar",component:()=>n.e(1).then(n.bind(null,"88lq")),meta:{title:"Tabbar 标签栏"}},{path:"/Flow",name:"Flow",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"ruY1")),meta:{title:"Flow 步骤条"}},{path:"/Progress",name:"Progress",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"c9Ae")),meta:{title:"Progress 进度条"}},{path:"/Button",name:"Button",component:()=>n.e(9).then(n.bind(null,"tzn9")),meta:{title:"Button 按钮"}},{path:"/Navbar",name:"Navbar",component:()=>n.e(10).then(n.bind(null,"DMNl")),meta:{title:"Navbar 导航"}},{path:"/Actionsheet",name:"Actionsheet",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"Kegi")),meta:{title:"Actionsheet 上拉菜单"}},{path:"/Alert",name:"Alert",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"Q5MC")),meta:{title:"Alert 提示窗"}},{path:"/Cell",name:"Cell",component:()=>Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"DYvd")),meta:{title:"Cell 单元格"}},{path:"/Switch",name:"Switch",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"BbOi")),meta:{title:"Switch 开关"}}]});n("KYgS"),n("Ed4/");a.a.config.productionTip=!1,new a.a({el:"#app",router:r,components:{App:l},template:"<App/>"})},mWDk:function(t,e){}},["mUtA"]);
//# sourceMappingURL=app.e5777fea45c4a8641024.js.map