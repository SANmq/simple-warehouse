(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{391:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"easy-edit",on:{click:function(e){t.disabled&&t.openEdit(e.target)}}},[t.textarea?a("textarea",{attrs:{disabled:t.disabled},domProps:{value:t.value},on:{input:function(e){return t.test(e.target,e.target.value)},blur:t.closeEdit,change:t.callback}}):a("input",{attrs:{disabled:t.disabled},domProps:{value:t.value},on:{input:function(e){return t.test(e.target,e.target.value)},blur:t.closeEdit,change:t.callback}})])};n._withStripped=!0;var r={name:"EasyEdit",props:{value:{require:!0},re:{type:RegExp,default:()=>/((^[1-9]\d*?|^0)\.\d{0,2}$|^[1-9]\d*?$|^0$)/},textarea:{type:Boolean,default:!1}},data:()=>({disabled:!0,value_:""}),methods:{openEdit(t){this.disabled=!1,setTimeout(()=>{t.focus()},0)},closeEdit(t){this.disabled=!0},validate(t){for(;t&&!this.re.test(t);)t=t.substr(0,t.lenth-1);return t},test(t){t.value=this.validate(t.value),this.value_=t.value},callback(){this.value_=this.value_.replace(/\.$/,""),this.$emit("change",this.value_)}}},l=a(46),s=Object(l.a)(r,n,[],!1,null,null,null);s.options.__file="src/components/EasyEdit.vue";e.a=s.exports},412:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"store-cost"},[a("el-table",{staticStyle:{margin:"auto","min-width":"1080px"},attrs:{data:t.oneDate.length?t.oneDate:t.tableData,border:"",height:"500"}},[a("el-table-column",{attrs:{align:"center",width:"60"},scopedSlots:t._u([{key:"header",fn:function(e){return[a("el-input",{staticClass:"id-search",attrs:{size:"mini",placeholder:"检索"},on:{change:function(e){return t.searchById(t.searchId)}},model:{value:t.searchId,callback:function(e){t.searchId=e},expression:"searchId"}})]}},{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",label:"名称",prop:"nickname"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",label:"分类",prop:"classify"}}),t._v(" "),a("el-table-column",{attrs:{label:"参数",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{icon:"el-icon-look"},on:{click:function(a){return t.showParams(e.row.parameters)}}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"50",label:"数量",prop:"number"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"80",label:"简图"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"40px",height:"40px","vertical-align":"middle"},attrs:{src:t.row.imageUrlList.length?t.row.imageUrlList[0]:"","preview-src-list":t.row.imageUrlList,fit:"cover"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",label:"购入花费"},scopedSlots:t._u([{key:"header",fn:function(e){return[t._v("\n                商品成本"),a("i",{staticClass:"el-icon-edit"})]}},{key:"default",fn:function(e){return[a("EasyEdit",{attrs:{value:e.row.cost},on:{change:function(a){return t.sendReq("/api/store","cost",a,e.row)}}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",label:"维修花费"},scopedSlots:t._u([{key:"header",fn:function(e){return[t._v("\n                维修成本"),a("i",{staticClass:"el-icon-edit"})]}},{key:"default",fn:function(e){return[a("EasyEdit",{attrs:{value:e.row.repairCost},on:{change:function(a){return t.sendReq("/api/store","repairCost",a,e.row)}}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",label:"运输花费"},scopedSlots:t._u([{key:"header",fn:function(e){return[t._v("\n                运输成本"),a("i",{staticClass:"el-icon-edit"})]}},{key:"default",fn:function(e){return[3===e.row.state||4===e.row.state?a("EasyEdit",{attrs:{value:e.row.transCost},on:{change:function(a){return t.sendReq("/api/store","transCost",a,e.row)}}}):a("span",[t._v(t._s(e.row.transCost))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",label:"商品状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(t.stateDict[e.row.state])+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"备注",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[t._v("\n                备注"),a("i",{staticClass:"el-icon-edit"})]}},{key:"default",fn:function(e){return[a("EasyEdit",{attrs:{value:e.row.remark,re:/^[\s\S]{0,200}$/,textarea:!0},on:{change:function(a){return t.sendReq("/api/good/item","remark",a,e.row)}}})]}}])})],1),t._v(" "),a("el-pagination",{staticStyle:{display:"flex","justify-content":"center"},attrs:{background:"","hide-on-single-page":!0,"current-page":t.currentPage,"page-size":t.limit,layout:"prev, pager, next",total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)};n._withStripped=!0;var r=a(391),l=a(70),s={name:"setIn",components:{EasyEdit:r.a},watch:{currentPage:{immediate:!0,handler(){this.getData()}}},computed:Object(l.b)(["stateDict"]),data:()=>({currentPage:1,total:0,limit:8,tableData:[],oneDate:[],searchId:""}),methods:{getData(){this.$http.get("/api/store/cost",{params:{limit:this.limit,currentPage:this.currentPage}}).then(t=>{200===t.status&&(this.total=t.data.total,this.tableData=t.data.rows)})},showParams(t){let e="";for(let a of t)e=e+a.name+":"+a.value+";";e=e.replace(/;$/,""),this.$confirm(e,"参数信息").then(t=>{},t=>{})},searchById(t){}}},i=a(46),o=Object(i.a)(s,n,[],!1,null,null,null);o.options.__file="src/components/store-manage/Cost.vue";e.default=o.exports}}]);