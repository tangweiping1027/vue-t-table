!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vueTTable=t():e.vueTTable=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=5)}([function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,n,r=document.querySelector("style["+v+'~="'+e.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(y){var o=f++;r=p||(p=i()),t=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),g.ssrId&&e.setAttribute(v,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(9),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,m=function(){},g=null,v="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,i){h=n,g=i||{};var o=c(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=u[a.id];s.refs--,n.push(s)}t?(o=c(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r,i,o){var a,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i);var u;if(o?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=u):r&&(u=r),u){var d=c.functional,p=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(e,t){return u.call(t),p(e,t)}):c.beforeCreate=p?[].concat(p,u):[u]}return{esModule:a,exports:s,options:c}}},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var i=n(10),o=window,a={props:["item","scope"],render:function(e){return this.item.render&&"function"==typeof this.item.render?this.item.render(e,this.scope,this):this.item.renderHeader&&"function"==typeof this.item.renderHeader?this.item.renderHeader(e,this.scope,this):e("span",{style:this.item.style},[null===this.scope.row[this.item.prop]||""===this.scope.row[this.item.prop]||void 0===this.scope.row[this.item.prop]?"-":this.scope.row[this.item.prop]])}};t.a={components:{custorm:a,nestingCusorm:i.a},name:"TTable",props:{pageNo:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},total:{type:[Number,String],default:0},paginationTop:{type:String,default:"15px"},paginationAlign:{type:String,default:"right"},pagination:{type:Boolean,default:!0},rowKey:{type:String,default:"id"},lazyUrl:{type:String,default:""},columns:{type:Array,default:function(){return[]}},data:{type:Array,default:function(){return[]}},selection:{type:Boolean,default:!0},serialNumber:{type:Boolean,default:!1}},data:function(){return{window:o}},methods:{handleSizeChange:function(e){this.$emit("handleSizeChange",e)},handleCurrentChange:function(e){this.$emit("handleCurrentChange",e)},selectChange:function(e){this.$emit("selectChange",e)},load:function(e,t,n){var r=this;r.$api[r.lazyUrl]({}).then(function(e){var t=e.rows;n(void 0===t?[]:t)})},handleClick:function(e,t){var n=this;if(!e.fn)return void window.console.warn("btns的item缺少fn函数");if(e.name&&e.name.indexOf("删除")>=0){var i=e.fn(t.$index,t.row);n.$isArray(i)&&3==i.length?this.$emit.apply(this,["delete"].concat(r(i))):console.warn("fn返回的数据不是数组,或者数组长度不是3")}else e.fn(t.$index,t.row)},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.baseTable.toggleRowSelection(e)}):this.$refs.baseTable.clearSelection()}}}},function(e,t,n){"use strict";t.a={props:["item"],name:"nestingCusorm"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6);r.a.install=function(e){e.component(r.a.name,r.a)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(r.a),t.default=r.a},function(e,t,n){"use strict";function r(e){n(7)}var i=n(3),o=n(14),a=n(2),s=r,l=a(i.a,o.a,!1,s,null,null);t.a=l.exports},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("24351e1d",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".t-table{background:#fff}.t-table .normal-icon-btn{cursor:pointer;font-size:20px}.t-table .el-table--enable-row-transition .el-table__body td{height:65px}.t-table .el-table--border td:first-child .cell,.t-table .el-table--border th:first-child .cell{padding-left:18px}",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s=o[1],l=o[2],c=o[3],u={id:e+":"+i,css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},function(e,t,n){"use strict";function r(e){n(11)}var i=n(4),o=n(13),a=n(2),s=r,l=a(i.a,o.a,!1,s,null,null);t.a=l.exports},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("678b1a9f",r,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table-column",{attrs:{label:e.item.label||"",prop:e.item.value||"",width:e.item.width,align:e.item.align||"center"}},[e.item.mult&&Array.isArray(e.item.mult)?e._l(e.item.mult,function(e,t){return n("nestingCusorm",{key:t,attrs:{item:e}})}):e._e()],2)},i=[],o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"t-table"},[n("el-table",e._g(e._b({ref:"baseTable",attrs:{data:e.data,"row-key":e.rowKey,"tree-props":{children:"children",hasChildren:"hasChildren"},load:e.load},on:{"selection-change":e.selectChange}},"el-table",e.$attrs,!1),e.$listeners),[e._v("\n    >\n    "),e.selection?n("el-table-column",{attrs:{type:"selection",width:"50","reserve-selection":!!e.rowKey}}):e._e(),e._v(" "),e.serialNumber?n("el-table-column",{attrs:{type:"index",width:"50"}}):e._e(),e._v(" "),e._l(e.columns,function(t,r){return[!t.btns&&!t.render||t.renderHeader?(t.btns||t.render)&&t.renderHeader?n("el-table-column",{key:r,attrs:{prop:t.value,label:t.label,width:t.width,sortable:t.sortable||!1,align:"center"},scopedSlots:e._u([{key:"default",fn:function(r){return[t.btns?n("div",[e._l(t.btns,function(t,i){return[n("el-tooltip",{key:i,attrs:{content:t.name||"",placement:"top","open-delay":2}},[t.render?n("div",{staticStyle:{display:"inline-block"}},[n("custorm",{attrs:{item:t,scope:r}})],1):n("i",{staticClass:"normal-icon-btn",class:t.icon?t.icon:"",on:{click:function(n){return e.handleClick(t,r)}}})])]})],2):n("custorm",{attrs:{item:t,scope:r}})]}},{key:"header",fn:function(e){return[n("custorm",{attrs:{item:t,scope:e}})]}}],null,!0)}):t.mult&&Array.isArray(t.mult)?[n("nestingCusorm",{key:r,attrs:{item:t}})]:n("el-table-column",{key:r,attrs:{prop:t.value,label:t.label,width:t.width,sortable:t.sortable||!1,"show-overflow-tooltip":0!=t.showTooltip,align:"center"},scopedSlots:e._u([{key:"default",fn:function(r){return["img"==t.type?[r.row[t.value]?n("el-tooltip",{attrs:{placement:"right",effect:"light","open-delay":2}},[r.row[t.value]?n("div",{attrs:{slot:"content"},slot:"content"},[n("img",{attrs:{src:r.row[t.value]||"",width:"auto",height:t.bulkyHeight||180}})]):e._e(),e._v(" "),n("el-image",{style:t.style||{width:"62px",height:"52px"},attrs:{src:r.row[t.value],fit:t.fit||"contain"}},[r.row[t.value]?n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v("\n                  加载中\n                  "),n("span",{staticClass:"dot"},[e._v("...")])]):n("div",{staticStyle:{height:"100%","line-height":"52px",color:"#d9d9d9"},attrs:{slot:"error"},slot:"error"},[e._v("加载失败")])])],1):e._e(),e._v(" "),r.row[t.value]?e._e():n("el-image",[n("div",{staticStyle:{height:"100%","line-height":"52px",color:"#d9d9d9"},attrs:{slot:"error"},slot:"error"},[e._v("暂无图片")])])]:t.changeFlag?n("el-button",{attrs:{type:"text"},on:{click:function(e){return t.changeFlag(r.$index,r.row)}}},[n("i",{staticClass:"icon",class:r.row[t.value]?"el-icon-check":"el-icon-close",style:t.style})]):n("div",{staticStyle:{display:"inline-block"}},[t.href?n("el-link",{attrs:{type:t.color||"primary",href:t.href,target:t.target||"_blank"}},[e._v(e._s(r.row[t.value]||"-"))]):n("div",{staticStyle:{display:"inline-block"}},[e._v(e._s(r.row[t.value]||"-"))])],1)]}}],null,!0)}):n("el-table-column",{key:r,attrs:{prop:t.value,label:t.label,width:t.width,sortable:t.sortable||!1,align:"center"},scopedSlots:e._u([{key:"default",fn:function(r){return[t.btns?n("div",[e._l(t.btns,function(t,i){return[n("el-tooltip",{key:i,attrs:{content:t.name,placement:"top","open-delay":2}},[t.render?n("div",{staticStyle:{display:"inline-block"}},[n("custorm",{attrs:{item:t,scope:r}})],1):n("i",{staticClass:"normal-icon-btn",class:t.icon?t.icon:"el-icon-edit",staticStyle:{padding:"0 2px"},on:{click:function(n){return e.handleClick(t,r)}}})])]})],2):n("custorm",{attrs:{item:t,scope:r}})]}}],null,!0)})]})],2),e._v(" "),e.pagination?n("el-pagination",e._g(e._b({style:{"margin-top":e.paginationTop,"text-align":e.paginationAlign},attrs:{"current-page":e.pageNo,"page-size":e.pageSize,total:e.total,"page-sizes":[10,20,30,60,80],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1),e.$listeners),[e._t("pagination")],2):e._e()],1)},i=[],o={render:r,staticRenderFns:i};t.a=o}])});
//# sourceMappingURL=vue-t-table.js.map