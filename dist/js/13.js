(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{415:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"analysis-store"},[s("h2",{staticClass:"tip-title"},[this._v("仓库分析")]),this._v(" "),s("ve-line",{attrs:{data:this.chartData,settings:this.chartSettings,extend:this.extend,width:"400px"}})],1)};a._withStripped=!0;var i={name:"Store",data(){return this.chartSettings={axisSite:{right:["下单率"]},metrics:["访问用户","下单用户","下单率"],dimension:["日期"],stack:{"用户":["访问用户","下单用户"]},area:!0,labelMap:{PV:"访问用户",Order:"下单用户"}},this.extend={series:{label:{normal:{show:!0}}}},{chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]}}}},n=e(46),r=Object(n.a)(i,a,[],!1,null,"2964a6de",null);r.options.__file="src/components/analysis/Store.vue";s.default=r.exports}}]);