(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{137:function(t,e,n){},138:function(t,e,n){"use strict";var i=n(137);n.n(i).a},139:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this.$createElement,e=this._self._c||t;return e("el-container",[e("el-aside",{staticStyle:{height:"calc(100vh - 48px)","background-color":"#545c64",width:"200px"}},[e("SideNav")],1),this._v(" "),e("el-main",[e("router-view")],1)],1)};i._withStripped=!0;var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{"border-right":"none"},attrs:{"default-active":t.$route.path,"background-color":"transparent","text-color":"#fff",router:!0,"active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},[n("el-menu-item",{attrs:{index:t.r?"all":"admin/all"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),t._v("\n            货品总览\n        ")])],2),t._v(" "),n("el-submenu",{attrs:{index:"admin"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-order"}),t._v("\n            货品管理\n        ")]),t._v(" "),n("el-menu-item",{attrs:{index:t.r?"in":"admin/in"}},[n("i",{staticClass:"el-icon-s-fold"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("入库")])]),t._v(" "),n("el-menu-item",{attrs:{index:t.r?"out":"admin/out"}},[n("i",{staticClass:"el-icon-s-unfold"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("出库")])]),t._v(" "),n("el-menu-item",{attrs:{index:t.r?"op":"admin/op"}},[n("i",{staticClass:"el-icon-date"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("日志")])])],2),t._v(" "),n("el-menu-item",{attrs:{index:t.r?"info":"admin/info"}},[n("i",{staticClass:"el-icon-document"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("货品信息")])]),t._v(" "),n("el-menu-item",{attrs:{index:t.r?"analysis":"admin/analysis"}},[n("i",{staticClass:"el-icon-s-marketing"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("收益分析")])])],1)};l._withStripped=!0;var s={name:"SideNav",created(){console.log(this.$route.path)},methods:{handleOpen(t,e){console.log(t,e)},handleClose(t,e){console.log(t,e)}},computed:{r(){return/^\/admin\//.test(this.$route.path)}}},a=n(9),o=Object(a.a)(s,l,[],!1,null,null,null);o.options.__file="src/components/SideNav.vue";var r={name:"Admin",components:{SideNav:o.exports}},c=(n(138),Object(a.a)(r,i,[],!1,null,null,null));c.options.__file="src/view/Admin.vue";e.default=c.exports}}]);