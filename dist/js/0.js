(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{389:function(t,e,s){},390:function(t,e,s){},394:function(t,e,s){"use strict";var l=s(389);s.n(l).a},395:function(t,e,s){"use strict";var l=s(390);s.n(l).a},399:function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:"container "+(t.isCollapse?"":"open")},[s("aside",{staticClass:"side"},[s("SideNav",{attrs:{collapse:t.isCollapse}})],1),t._v(" "),s("div",{staticClass:"main"},[s("div",{staticClass:"nav"},[s("el-button",{staticStyle:{height:"36px",margin:"6px","font-size":"20px"},attrs:{type:"diy",icon:t.isCollapse?"el-icon-s-unfold":"el-icon-s-fold"},on:{click:function(e){t.isCollapse=!t.isCollapse}}}),t._v(" "),s("el-breadcrumb",{attrs:{separator:"/"}},t._l(t.breadList,(function(e){return s("el-breadcrumb-item",{key:e},[t._v(t._s(t.routeDict[e]))])})),1),t._v(" "),s("div",{staticStyle:{"flex-grow":"1"}}),t._v(" "),s("el-dropdown",{staticStyle:{"margin-right":"20px"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[t._v("\n                "+t._s(t.adminName)),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{staticStyle:{width:"40px"},attrs:{command:"logout"}},[t._v("登出")])],1)],1)],1),t._v(" "),s("router-view")],1)])};l._withStripped=!0;var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{"border-right":"none"},attrs:{"default-active":t.$route.path,"background-color":"#545c64",collapse:t.collapse,"text-color":"#fff",router:!0,"active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},[s("el-menu-item",{attrs:{index:"/admin"}},[s("i",{staticClass:"el-icon-s-home"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("货品总览")])]),t._v(" "),s("el-submenu",{attrs:{index:"manage"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-s-order"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("货品管理")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/manage/add"}},[s("i",{staticClass:"el-icon-circle-plus"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("添加商品")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/manage/cost"}},[s("i",{staticClass:"el-icon-cost"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("成本管理")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/manage/sale"}},[s("i",{staticClass:"el-icon-coin"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("销售管理")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/manage/log"}},[s("i",{staticClass:"el-icon-date"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("操作日志")])])],2),t._v(" "),s("el-submenu",{attrs:{index:"info"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-s-tools"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("仓库配置")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/config/classify"}},[s("i",{staticClass:"el-icon-menu"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("分类信息")])])],2),t._v(" "),s("el-submenu",{attrs:{index:"analysis"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-data-analysis"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("统计分析")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/analysis/money"}},[s("i",{staticClass:"el-icon-rmb"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("收益分析")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/analysis/store"}},[s("i",{staticClass:"el-icon-commodity"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("仓库分析")])])],2)],1)};a._withStripped=!0;var i={name:"SideNav",props:{collapse:{style:Boolean,required:!0}},created(){console.log(this.$route.path)},methods:{handleOpen(t,e){console.log(t,e)},handleClose(t,e){console.log(t,e)}},computed:{}},o=(s(394),s(27)),n=Object(o.a)(i,a,[],!1,null,null,null);n.options.__file="src/components/SideNav.vue";var r=n.exports,c=s(69),d={name:"Admin",components:{SideNav:r},data:()=>({isCollapse:!1}),methods:{handleCommand(t){"logout"===t&&console.log("我要登出")}},computed:{...Object(c.b)(["routeDict","isLogin","adminName"]),breadList(){return this.$route.path.split("/").slice(1)}}},m=(s(395),Object(o.a)(d,l,[],!1,null,null,null));m.options.__file="src/view/Admin.vue";e.default=m.exports}}]);