(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{140:function(e,t,a){},144:function(e,t,a){"use strict";var l=a(140);a.n(l).a},149:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"set-in"},[a("div",{staticStyle:{"background-color":"#F5F7FA","border-bottom":"1px dotted #aaa"}},[a("el-steps",{attrs:{active:e.active,simple:"","finish-status":"success"}},[a("el-step",{attrs:{title:"基本信息",description:""}}),e._v(" "),a("el-step",{attrs:{title:"参数信息",description:""}})],1)],1),e._v(" "),a("el-form",{directives:[{name:"show",rawName:"v-show",value:0===e.active,expression:"active===0"}],attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"商品昵称"}},[a("el-input",{model:{value:e.form.nickName,callback:function(t){e.$set(e.form,"nickName",t)},expression:"form.nickName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品分类"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.classify,callback:function(t){e.$set(e.form,"classify",t)},expression:"form.classify"}},e._l(e.classOp,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"商品成本"}},[a("el-input-number",{model:{value:e.form.cost,callback:function(t){e.$set(e.form,"cost",e._n(t))},expression:"form.cost"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品数量"}},[a("el-input-number",{model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",e._n(t))},expression:"form.number"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品图片"}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{multiple:!1,action:"https://jsonplaceholder.typicode.com/posts/","on-success":e.getImageUrl,"on-remove":e.handleRemove,"on-error":e.handleError,"list-type":"picture-card","with-credentials":!0,"auto-upload":!1}},[a("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"}),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])])],1),e._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:e.submitUpload}},[e._v("图片上传至服务器")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.next}},[e._v("下一步")])],1)],1),e._v(" "),a("el-form",{directives:[{name:"show",rawName:"v-show",value:1===e.active,expression:"active===1"}],attrs:{model:e.form.parameters,"label-width":"80px"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("el-form-item",{attrs:{label:"品牌信息"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:10,maxRows:15},resize:"none"},model:{value:e.form.parameters.brand,callback:function(t){e.$set(e.form.parameters,"brand",t)},expression:"form.parameters.brand"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.prev}},[e._v("上一步")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确认提交")])],1)],1)],1)};l._withStripped=!0;var s={name:"setIn",data:()=>({form:{nickname:"",classify:"",parameters:{brand:""},cost:0,number:1,photo:""},classOp:[{value:1,label:"电脑"},{value:2,label:"打印机"},{value:3,label:"显示器"},{value:4,label:"服务器"},{value:5,label:"交换器"},{value:6,label:"配件"},{value:7,label:"其他"}],active:0}),methods:{next(){this.active++>2&&(this.active=0)},prev(){this.active--<0&&(this.active=2)},submit(){console.log(this.form),this.active++,this.$msgbox("入库成功",()=>{this.active=0})},submitUpload(){console.log("测试上传方法"),this.$refs.upload.submit()},handleRemove(e,t){console.log(e,t)},handleError(e,t,a){console.log("查看失败原因",e,t,a)},getImageUrl(e,t,a){console.log("查看是否可以成功",e,t,a)}}},o=(a(144),a(9)),r=Object(o.a)(s,l,[],!1,null,null,null);r.options.__file="src/components/menu/SetIn.vue";t.default=r.exports}}]);