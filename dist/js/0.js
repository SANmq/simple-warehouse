(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{392:function(t,e,s){},393:function(t,e,s){},397:function(t,e,s){"use strict";var l=s(392);s.n(l).a},398:function(t,e,s){"use strict";var l=s(393);s.n(l).a},402:function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:"container "+(t.isCollapse?"":"open")},[s("aside",{staticClass:"side"},[s("SideNav",{attrs:{collapse:t.isCollapse}})],1),t._v(" "),s("div",{staticClass:"main"},[s("div",{staticClass:"nav"},[s("el-button",{staticStyle:{height:"36px",margin:"6px","font-size":"20px"},attrs:{type:"diy",icon:t.isCollapse?"el-icon-s-unfold":"el-icon-s-fold"},on:{click:function(e){t.isCollapse=!t.isCollapse}}}),t._v(" "),s("el-breadcrumb",{attrs:{separator:"/"}},t._l(t.breadList,(function(e){return s("el-breadcrumb-item",{key:e},[t._v(t._s(t.routeDict[e]))])})),1),t._v(" "),s("div",{staticStyle:{"flex-grow":"1"}}),t._v(" "),s("el-dropdown",{staticStyle:{"margin-right":"20px"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[t._v("\n                "+t._s(t.adminName)),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{staticStyle:{width:"40px"},attrs:{command:"logout"}},[t._v("登出")])],1)],1)],1),t._v(" "),s("router-view")],1)])};l._withStripped=!0;var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{"border-right":"none"},attrs:{"default-active":t.$route.path,"background-color":"#545c64",collapse:t.collapse,"text-color":"#fff",router:!0,"active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},[s("el-submenu",{attrs:{index:"msale"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-s-shop"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("销售管理")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/msale/onsale"}},[s("i",{staticClass:"el-icon-onsale"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("在架商品")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/msale/forsale"}},[s("i",{staticClass:"el-icon-forSale"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("已拍商品")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/msale/outsale"}},[s("i",{staticClass:"el-icon-send"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("已发商品")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/msale/reback"}},[s("i",{staticClass:"el-icon-reback"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("退回商品")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/msale/saleover"}},[s("i",{staticClass:"el-icon-saleover"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("售出商品")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/msale/log"}},[s("i",{staticClass:"el-icon-s-order"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("销售日志")])])],2),t._v(" "),s("el-submenu",{attrs:{index:"mstore"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-s-home"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("仓库管理")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/mstore/all"}},[s("i",{staticClass:"el-icon-store-all"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("库存一览")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/mstore/add"}},[s("i",{staticClass:"el-icon-circle-plus"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("添加商品")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/mstore/cost"}},[s("i",{staticClass:"el-icon-cost"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("成本记录")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/mstore/upshelves"}},[s("i",{staticClass:"el-icon-sale"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("商品上架")])])],2),t._v(" "),s("el-submenu",{attrs:{index:"config"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-s-tools"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("仓库配置")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/config/classify"}},[s("i",{staticClass:"el-icon-menu"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("商品分类")])])],2),t._v(" "),s("el-submenu",{attrs:{index:"analysis"}},[s("template",{slot:"title"},[s("i",{staticClass:"el-icon-data-analysis"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("统计分析")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/analysis/money"}},[s("i",{staticClass:"el-icon-rmb"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("收益分析")])]),t._v(" "),s("el-menu-item",{attrs:{index:"/analysis/store"}},[s("i",{staticClass:"el-icon-commodity"}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("仓库分析")])])],2)],1)};i._withStripped=!0;var a={name:"SideNav",props:{collapse:{style:Boolean,required:!0}},methods:{handleOpen(t,e){},handleClose(t,e){}},computed:{}},o=(s(397),s(46)),n=Object(o.a)(a,i,[],!1,null,null,null);n.options.__file="src/components/SideNav.vue";var r=n.exports,c=s(70),m={name:"Admin",components:{SideNav:r},data:()=>({isCollapse:!1}),methods:{handleCommand(t){"logout"===t&&console.log("我要登出")}},computed:{...Object(c.b)(["routeDict","isLogin","adminName"]),breadList(){return this.$route.path.split("/").slice(1)}}},v=(s(398),Object(o.a)(m,l,[],!1,null,null,null));v.options.__file="src/view/Admin.vue";e.default=v.exports}}]);