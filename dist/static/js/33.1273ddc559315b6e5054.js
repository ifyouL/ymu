webpackJsonp([33],{"DbR+":function(t,_,v){"use strict";Object.defineProperty(_,"__esModule",{value:!0});var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("section",[v("h1",[t._v("确认框 Confirm")]),t._v(" "),v("p",[t._v("Confirm 通常和 Dialog 搭配使用，Dialog 通常他包含了3个部分：")]),t._v(" "),v("ul",[v("li",[t._v("ymu-dialog__hd")]),t._v(" "),v("li",[t._v("ymu-dialog__bd")]),t._v(" "),v("li",[t._v("ymu-dialog__ft")])]),t._v(" "),v("pre",{pre:!0},[v("code",{pre:!0,attrs:{"v-pre":"",class:"language-JS"}},[v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Confirm "),v("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),v("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'ymu'")]),t._v("\n\nVue.use(Confirm)\n")])]),t._v(" "),v("h2",[t._v("Props")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("可选值")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("版本说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("v-model")]),t._v(" "),v("td",[t._v("是否显示")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("title")]),t._v(" "),v("td",[t._v("标题")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("content")]),t._v(" "),v("td",[t._v("内容")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("confirmText")]),t._v(" "),v("td",[t._v("确认按钮文字")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("确定")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("cancelText")]),t._v(" "),v("td",[t._v("取消按钮文字")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("取消")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("closeOnClickBackdrop")]),t._v(" "),v("td",[t._v("点击幕布时关闭弹窗")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("dialogTransition")]),t._v(" "),v("td",[t._v("弹窗动画效果")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("ymu-dialog")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("backdropTransition")]),t._v(" "),v("td",[t._v("幕布动画效果")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("ymu-backdrop")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("showInput")]),t._v(" "),v("td",[t._v("显示输入框")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("placeholder")]),t._v(" "),v("td",[t._v("输入框提示")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("showCancel")]),t._v(" "),v("td",[t._v("显示取消按钮")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("showConfirm")]),t._v(" "),v("td",[t._v("显示确认按钮")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("inputValue")]),t._v(" "),v("td",[t._v("输入框绑定")]),t._v(" "),v("td",[t._v("String, Number")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])])])]),t._v(" "),v("h2",[t._v("Slots")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名字")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("title")]),t._v(" "),v("td",[t._v("title 插槽")])]),t._v(" "),v("tr",[v("td",[t._v("default")]),t._v(" "),v("td",[t._v("content 插槽")])]),t._v(" "),v("tr",[v("td",[t._v("footer")]),t._v(" "),v("td",[t._v("footer 插槽")])])])]),t._v(" "),v("h2",[t._v("Events")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("input")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("切换显示")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("on-cancel")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("取消")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("on-confirm")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("确认")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("on-click-backdrop")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("点击幕布")])])])]),t._v(" "),v("h2",[t._v("Sass vars")]),t._v(" "),v("p",[t._v("无")])])}]},d=v("VU/8")(null,e,!1,null,null,null);_.default=d.exports},YtW0:function(t,_,v){t.exports=v("DbR+")}});
//# sourceMappingURL=33.1273ddc559315b6e5054.js.map