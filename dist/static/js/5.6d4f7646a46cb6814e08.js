webpackJsonp([5],{b0B3:function(t,e){},rX8L:function(t,e){},trf8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"ymu-marquee",props:{interval:{type:Number,default:2e3},duration:{type:Number,default:300},direction:{type:String,default:"up"}},data:function(){return{len:0,timeId:null,currentIndex:0,currentHeight:0,currentDuration:0,currentItemHeight:0}},methods:{setTransition:function(t){this.$refs.marqueeBox.style["transition-duration"]=t+"ms"},setTransform:function(){var t=this.$refs.marqueeBox;if("up"===this.direction){var e=-this.currentItemHeight*(this.currentIndex+1);t.style.transform="translate3d(0, "+e+"px, 0)"}if("down"===this.direction){var n=-this.currentItemHeight*(1-this.currentIndex+this.len);t.style.transform="translate3d(0, "+n+"px, 0)"}},play:function(){var t=this;this.setTransition(300),this.currentIndex++,this.setTransform(),this.currentIndex===this.len&&setTimeout(function(){t.setTransition(0),t.currentIndex=0,t.setTransform()},this.duration)}},mounted:function(){var t=this,e=this.$refs.marqueeBox,n=this.$refs.marqueeBox.children,i=n[0],r=e.lastChild;this.len=n.length,this.currentHeight=e.offsetHeight,this.currentItemHeight=i.offsetHeight,this.setTransform(),e.appendChild(i.cloneNode(!0)),e.insertBefore(r.cloneNode(!0),i),this.timeId=setInterval(function(){t.play()},this.interval)}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ymu-marquee"},[e("div",{ref:"marqueeBox",staticClass:"ymu-marquee-box"},[this._t("default")],2)])},staticRenderFns:[]};var s=n("VU/8")(i,r,!1,function(t){n("wXRG")},null,null).exports;s.install=function(t){t.component(s.name,s)};var a=s,u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"ymu-marquee-item"},[this._t("default")],2)},staticRenderFns:[]};var o=n("VU/8")({name:"ymu-marquee-item"},u,!1,function(t){n("rX8L")},null,null).exports;o.install=function(t){t.component(o.name,o)};var c={components:{Marquee:a,MarqueeItem:o},data:function(){return{list:[]}},created:function(){for(var t=0;t<4;t++)this.list.push("基础用法基础用法基础用法基础用法")}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-marquee"},[n("div",{staticClass:"ymu-doc-block"},[n("div",{staticClass:"ymu-doc-block__title"},[t._v("基础用法")]),t._v(" "),n("div",{staticClass:"ymu-doc-block__content"},[n("div",{staticClass:"marquee-wrap"},[n("i",{staticClass:"iconfont icon-voice"}),t._v(" "),n("Marquee",t._l(t.list,function(e,i){return n("MarqueeItem",{key:i},[n("p",[t._v(t._s(i+"_"+e))])])}))],1)])]),t._v(" "),n("div",{staticClass:"ymu-doc-block"},[n("div",{staticClass:"ymu-doc-block__title"},[t._v("基础用法")]),t._v(" "),n("div",{staticClass:"ymu-doc-block__content"},[n("div",{staticClass:"marquee-wrap"},[n("i",{staticClass:"iconfont icon-voice"}),t._v(" "),n("Marquee",{attrs:{direction:"down"}},t._l(t.list,function(e,i){return n("MarqueeItem",{key:i},[n("p",[t._v(t._s(i+"_"+e))])])}))],1)])])])},staticRenderFns:[]};var d=n("VU/8")(c,l,!1,function(t){n("b0B3")},null,null);e.default=d.exports},wXRG:function(t,e){}});
//# sourceMappingURL=5.6d4f7646a46cb6814e08.js.map