webpackJsonp([1],{R0M3:function(t,a,e){"use strict";var s=e("fQ5t"),i=(e.n(s),Object(s.createClient)());a.a={head:{title:"Tag"},data:function(){return{posts:[],tag_id:this.$route.params.id}},asyncData:function(t){var a=t.env,e=t.params;return i.getEntries({content_type:a.CTF_BLOG_POST_TYPE_ID,"fields.tags.sys.id":e.id,order:"-fields.publishDate"}).then(function(t){return{posts:t.items}}).catch(console.error)},methods:{}}},YQFJ:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("R0M3"),i=e("oPrQ"),r=!1;var n=function(t){r||e("aizM")},d=e("VU/8")(s.a,i.a,!1,n,"data-v-7ddc8b86",null);d.options.__file="pages/tags/_id.vue",a.default=d.exports},aizM:function(t,a,e){var s=e("oCFK");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("6596aea4",s,!1,{sourceMap:!1})},oCFK:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".card[data-v-7ddc8b86]{width:300px;height:200px;-webkit-box-shadow:1px 2px 3px 1px rgba(0,0,0,.2);box-shadow:1px 2px 3px 1px rgba(0,0,0,.2);border:.5px solid #394855;padding:10px 20px;margin:10px}.card_title[data-v-7ddc8b86]{font-size:19.2px;font-size:1.2rem}.card_text[data-v-7ddc8b86]{color:#394855;margin:10px 0}.card_date[data-v-7ddc8b86]{font-size:11.2px;font-size:.7rem;color:#394855;text-align:right}",""])},oPrQ:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.posts,function(a,s){return e("div",{key:s,staticClass:"column is-half"},[e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v(t._s(a.fields.title))])]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[t._v("\n          "+t._s(a.fields.description)+"\n          "),e("br"),e("small",[t._v(t._s(new Date(a.fields.publishDate).toDateString()))]),e("br"),t._l(a.fields.tags,function(a,s){return e("nuxt-link",{key:s,attrs:{to:{name:"tags",params:""+a.sys.id,path:"/tags/"+a.sys.id+"/"}}},[t._v(t._s(a.fields.name))])})],2)]),e("footer",{staticClass:"card-footer"},[e("nuxt-link",{staticClass:"card-footer-item",attrs:{to:{name:"id",params:{id:a.sys.id}}}},[t._v("Read More")])],1)])])}),0)};s._withStripped=!0;var i={render:s,staticRenderFns:[]};a.a=i}});