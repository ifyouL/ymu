webpackJsonp([82],{LQ0B:function(a,t){},LlN1:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={data:function(){return{d1:{min:0,max:100,value:[5,30],trackHeight:2,disabled:!1},d2:{min:0,max:100,value:[5,40],trackHeight:2,disabled:!0},d3:{min:0,max:100,value:[5,60],trackHeight:2,disabled:!1},d4:{min:0,max:200,value:[5,150],trackHeight:2,disabled:!1}}},methods:{setRangeValue:function(a){var t=parseInt(a.target.value);isNaN(t)&&(t=0),this.rangeValue1=t}}},d={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"page page-progress"},[s("div",{staticClass:"ymu-doc-block__hd"},[a._v("基础用法-"+a._s(a.d1.value))]),a._v(" "),s("div",{staticClass:"ymu-doc-block__bd"},[s("ymu-region-slider",{attrs:{"track-height":a.d1.trackHeight,max:a.d1.max,min:a.d1.min},model:{value:a.d1.value,callback:function(t){a.$set(a.d1,"value",t)},expression:"d1.value"}})],1),a._v(" "),s("div",{staticClass:"ymu-doc-block__hd"},[a._v("禁用状态-"+a._s(a.d2.value))]),a._v(" "),s("div",{staticClass:"ymu-doc-block__bd"},[s("ymu-region-slider",{attrs:{"track-height":a.d2.trackHeight,max:a.d2.max,min:a.d2.min,disabled:a.d2.disabled},model:{value:a.d2.value,callback:function(t){a.$set(a.d2,"value",t)},expression:"d2.value"}})],1),a._v(" "),s("div",{staticClass:"ymu-doc-block__hd"},[a._v("设置start和end-"+a._s(a.d3.value))]),a._v(" "),s("div",{staticClass:"ymu-doc-block__bd"},[s("ymu-region-slider",{attrs:{"track-height":a.d3.trackHeight,max:a.d3.max,min:a.d3.min,disabled:a.d3.disabled},model:{value:a.d3.value,callback:function(t){a.$set(a.d3,"value",t)},expression:"d3.value"}},[s("span",{staticClass:"number",attrs:{slot:"start"},slot:"start"},[a._v(a._s(a.d3.min))]),a._v(" "),s("span",{staticClass:"number",attrs:{slot:"end"},slot:"end"},[a._v(a._s(a.d3.max))])])],1),a._v(" "),s("div",{staticClass:"ymu-doc-block__hd"},[a._v("设置区间-"+a._s(a.d4.value))]),a._v(" "),s("div",{staticClass:"ymu-doc-block__bd"},[s("ymu-region-slider",{attrs:{"track-height":a.d4.trackHeight,max:a.d4.max,min:a.d4.min,disabled:a.d4.disabled},model:{value:a.d4.value,callback:function(t){a.$set(a.d4,"value",t)},expression:"d4.value"}},[s("span",{staticClass:"number",attrs:{slot:"start"},slot:"start"},[a._v(a._s(a.d4.min))]),a._v(" "),s("span",{staticClass:"number",attrs:{slot:"end"},slot:"end"},[a._v(a._s(a.d4.max))])])],1)])},staticRenderFns:[]};var l=s("C7Lr")(e,d,!1,function(a){s("LQ0B")},"data-v-07599fdc",null);t.default=l.exports}});
//# sourceMappingURL=82.40e7d60a73e58b2e5839.js.map