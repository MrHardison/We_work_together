(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{217:function(t,e,n){var a=n(235);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(5).default)("2e3efec6",a,!0,{})},218:function(t,e,n){var a=n(237);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(5).default)("7f0b2f10",a,!0,{})},219:function(t,e,n){var a=n(239);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(5).default)("d05ff3f4",a,!0,{})},220:function(t,e,n){var a=n(241);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(5).default)("05e5e213",a,!0,{})},232:function(t,e,n){"use strict";n(22);var a=n(233),r={name:"VThead",components:{InputStandard:n(224).a,Dropdown:a.a},props:{enableHeader:{type:Boolean,default:!1}},data:function(){return{entries:{intervals:[5,10,20,30,40,50],interval:10},search_text:""}},methods:{search:function(t){this.search_text=t,this.$emit("search_text",t)},setInterval:function(t){this.entries.interval=t,this.$emit("interval",this.entries.intervals[t])}}},i=(n(234),n(6)),o=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[t.enableHeader?[n("div",{staticClass:"row"},[n("div",{staticClass:"col col-12 col-sm-12 col-md-4 header"},[t._t("header")],2),t._v(" "),n("div",{staticClass:"col col-12 col-sm-12 col-md-4 entries"},[n("span",{staticClass:"text"},[t._v("\n          Show:\n        ")]),t._v(" "),n("div",{staticClass:"dropdown-wrapper"},[n("dropdown",{attrs:{options:t.entries.intervals,"default-selected":t.entries.intervals.indexOf(t.entries.interval)},on:{update:function(e){t.setInterval(e)}}})],1),t._v(" "),n("span",{staticClass:"text"},[t._v("\n          entries\n        ")])]),t._v(" "),n("div",{staticClass:"col col-12 col-sm-12 col-md-4 search"},[n("input-standard",{staticClass:"search-input",attrs:{computed_value:t.search_text,placeholder:"Type the text"},on:{update:function(e){t.search(e)}}})],1)])]:t._e()],2)},[],!1,null,"1264af22",null);o.options.__file="vThead.vue";var s=o.exports,d={name:"VTrow",props:{tr:{type:Array,default:function(){return[]}},actions:{type:Array,default:function(){return[]}}},data:function(){return{isActionsOpen:!1}},methods:{toggleActions:function(){this.isActionsOpen=!this.isActionsOpen},hideActions:function(){this.isActionsOpen=!1}}},c=(n(236),Object(i.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticClass:"actions text-center align-middle"},[t.actions.length?[n("fa",{staticClass:"icon",attrs:{icon:["fa","bars"]},on:{click:t.toggleActions}}),t._v(" "),t.isActionsOpen?n("ul",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideActions,expression:"hideActions"}],staticClass:"items list-unstyled text-left",class:{open:t.isActionsOpen}},[t._l(t.actions,function(e,a){return[n("li",{key:a,staticClass:"item",on:{click:e.action}},[t._v("\n            "+t._s(e.title)+"\n          ")])]})],2):t._e()]:t._e()],2),t._v(" "),t._l(t.tr,function(e,a){return[n("td",{key:a},[t._v(t._s(e))])]})],2)},[],!1,null,"29e512f8",null));c.options.__file="vTrow.vue";var l={name:"VTbody",components:{VTrow:c.exports,ButtonRounded:n(216).a},props:{emptyMessage:{type:Boolean,default:function(){return!1}},tbody:{type:Array,default:function(){return[]}},thead:{type:Array,default:function(){return[]}}},data:function(){return{sortingDirection:"asc",checkSortType:1,orderBy:""}},methods:{checkOrderBy:function(t){this.orderBy=t.hasOwnProperty("order_by")?t.order_by:"",this.sortingDirection="asc"===this.sortingDirection?"desc":"asc",this.$emit("order_by",{orderBy:this.orderBy,sortingDirection:this.sortingDirection})}}},u=(n(238),Object(i.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-body"},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",{staticClass:"text-center",style:{width:"3%"},attrs:{scope:"col"}},[t._v("#")]),t._v(" "),t._l(t.$order(t.thead),function(e,a){return[n("th",{key:a,style:{width:e.width+"%"},attrs:{scope:"col"},on:{click:function(n){t.checkOrderBy(e)}}},[n("div",{staticClass:"d-flex justify-content-between"},[n("span",{staticClass:"d-flex"},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),e.order_by===t.orderBy?["asc"===t.sortingDirection?[n("fa",{staticClass:"sortable-icon d-flex my-auto",attrs:{icon:["fa","sort-up"]}})]:"desc"===t.sortingDirection?[n("fa",{staticClass:"sortable-icon d-flex my-auto",attrs:{icon:["fa","sort-down"]}})]:t._e()]:[n("fa",{staticClass:"sortable-icon d-flex my-auto",attrs:{icon:["fa","sort"]}})]],2)])]})],2)]),t._v(" "),n("tbody",[t._l(t.tbody,function(t,e){return[n("v-trow",{key:e,attrs:{tr:t.tr,actions:t.actions}})]})],2)]),t._v(" "),0===t.tbody.length?[t._m(0)]:t._e()],2)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 text-center py-5"},[e("h4",{staticClass:"text-center"},[this._v("Nothing to show")])])}],!1,null,"27b7ead6",null));u.options.__file="vTbody.vue";var f=u.exports,p=n(246),h=n(225),v={name:"VTable",components:{ButtonRounded:n(214).a,SpinerLoader:h.a,VTbody:f,VThead:s,VFooter:p.a},props:{enableHeader:{type:Boolean,default:!1},thead:{type:Array,default:function(){return[]}},tbody:{type:Array,default:function(){return[]}},tfooter:{type:Object,default:function(){return{}}},isLoading:{type:Boolean,default:!1}},methods:{searchText:function(t){this.$emit("search_text",t),this.$emit("set_page",1)},updateInterval:function(t){this.$emit("interval",t),this.$emit("set_page",1)}}},m=(n(240),Object(i.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("v-thead",{attrs:{"enable-header":t.enableHeader},on:{search_text:function(e){t.searchText(e)},interval:function(e){t.updateInterval(e)}}},[n("template",{slot:"header"},[t._t("header")],2)],2),t._v(" "),n("div",{staticClass:"position-relative"},[n("v-tbody",{attrs:{thead:t.thead,tbody:t.tbody},on:{order_by:function(e){t.$emit("order_by",e)}}}),t._v(" "),n("v-footer",{attrs:{paginator:t.tfooter},on:{update:function(e){t.$emit("set_page",e)}}}),t._v(" "),t.isLoading?n("div",{staticClass:"loader"},[n("spiner-loader")],1):t._e()],1)],1)},[],!1,null,"3186de4b",null));m.options.__file="vTable.vue";e.a=m.exports},233:function(t,e,n){"use strict";var a=n(244);e.a=a.a},234:function(t,e,n){"use strict";var a=n(217);n.n(a).a},235:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"\n.notifications[data-v-1264af22]{z-index:9998;margin:1.5rem 1.5rem 0 0\n}\n.notifications .vue-notification[data-v-1264af22]{margin:0 0 10px\n}\nul[data-v-1264af22]{list-style:none;padding:0;margin:0\n}\n.form-check[data-v-1264af22]{padding:0!important\n}\n.card-header[data-v-1264af22]{border-bottom:none\n}\n.card-header .entries[data-v-1264af22]{display:flex;flex-direction:row\n}\n.card-header .entries .dropdown-wrapper[data-v-1264af22],.card-header .entries .text[data-v-1264af22]{display:inline-flex;margin:auto 0\n}\n.card-header .entries .text[data-v-1264af22]{color:#818e9e;vertical-align:middle\n}\n.card-header .entries .text[data-v-1264af22]:first-child{margin-right:.5rem\n}\n.card-header .entries .text[data-v-1264af22]:last-child{margin-left:.5rem\n}\n.card-header .entries .dropdown-wrapper[data-v-1264af22]{width:80px\n}\n.card-header .search[data-v-1264af22]{display:flex;flex-direction:row;justify-content:flex-end\n}\n.card-header .search-input[data-v-1264af22]{display:inline-flex;margin:auto 0\n}\n@media only screen and (max-width:767px){\n.card-header .search[data-v-1264af22]{justify-content:center\n}\n}",""])},236:function(t,e,n){"use strict";var a=n(218);n.n(a).a},237:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,'\n.notifications[data-v-29e512f8]{z-index:9998;margin:1.5rem 1.5rem 0 0\n}\n.notifications .vue-notification[data-v-29e512f8]{margin:0 0 10px\n}\nul[data-v-29e512f8]{list-style:none;padding:0;margin:0\n}\n.form-check[data-v-29e512f8]{padding:0!important\n}\ntr[data-v-29e512f8]:hover,tr[data-v-29e512f8]:nth-child(2n){background-color:#f7f9fa!important\n}\ntr[data-v-29e512f8]:hover{box-shadow:1px 1px 10px rgba(0,0,0,.1)\n}\ntr td[data-v-29e512f8]{font-size:.9rem;padding:.5rem\n}\ntr td.actions .icon[data-v-29e512f8]{cursor:pointer\n}\ntr td.actions .icon path[data-v-29e512f8]{fill:#007fb2\n}\ntr td.actions .items[data-v-29e512f8]{cursor:pointer;position:absolute;background:#d4d9e1;padding:1rem;border-radius:.3rem;width:10rem;left:.8%;margin:10px 0 0;z-index:2\n}\ntr td.actions .items[data-v-29e512f8]:before{content:" ";display:block;width:10px;height:5px;position:absolute;top:-10px;left:7px;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:10px solid #d4d9e1\n}\ntr td.actions .items.open[data-v-29e512f8]{display:block\n}\ntr td.actions .items .item[data-v-29e512f8]{position:relative\n}\ntr td.actions .items .item[data-v-29e512f8]:hover:after{width:50%\n}\ntr td.actions .items .item[data-v-29e512f8]:after{background:#818e9e;content:"";display:block;height:1px;transition:width .2s linear;width:20%\n}',""])},238:function(t,e,n){"use strict";var a=n(219);n.n(a).a},239:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"\n.notifications[data-v-27b7ead6]{z-index:9998;margin:1.5rem 1.5rem 0 0\n}\n.notifications .vue-notification[data-v-27b7ead6]{margin:0 0 10px\n}\nul[data-v-27b7ead6]{list-style:none;padding:0;margin:0\n}\n.form-check[data-v-27b7ead6]{padding:0!important\n}\n.card-body[data-v-27b7ead6]{padding:0\n}\n.card-body table[data-v-27b7ead6]{margin-bottom:0\n}\n.card-body table thead[data-v-27b7ead6]{background:#c3cad4\n}\n.card-body table thead tr th[data-v-27b7ead6]{cursor:pointer;font-size:1rem;font-weight:500;padding:.6rem;border-bottom:none;vertical-align:middle\n}\n.card-body table thead tr th[data-v-27b7ead6]:not(:first-child){border-left:1px solid #818e9e\n}\n.card-body table thead tr th .sortable-icon[data-v-27b7ead6]{opacity:.5;float:right\n}\n.card-body table tbody tr td[data-v-27b7ead6]{vertical-align:middle\n}\n@media only screen and (max-width:767px){\n.card-body .table[data-v-27b7ead6]{width:767px\n}\n}",""])},240:function(t,e,n){"use strict";var a=n(220);n.n(a).a},241:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"\n.notifications[data-v-3186de4b]{z-index:9998;margin:1.5rem 1.5rem 0 0\n}\n.notifications .vue-notification[data-v-3186de4b]{margin:0 0 10px\n}\nul[data-v-3186de4b]{list-style:none;padding:0;margin:0\n}\n.form-check[data-v-3186de4b]{padding:0!important\n}\n.card-footer[data-v-3186de4b]{background-color:#fff;border-radius:0 0 10px 10px\n}\n.card .loader[data-v-3186de4b]{position:absolute;display:flex;height:100%;width:100%;top:0;left:0;background:rgba(238,242,246,.6)\n}\n.card .loader .spinner-loader[data-v-3186de4b]{margin:auto\n}",""])},302:function(t,e,n){var a=n(397);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(5).default)("293bb54d",a,!0,{})},396:function(t,e,n){"use strict";var a=n(302);n.n(a).a},397:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"\n.notifications[data-v-2a79fdee]{z-index:9998;margin:1.5rem 1.5rem 0 0\n}\n.notifications .vue-notification[data-v-2a79fdee]{margin:0 0 10px\n}\nul[data-v-2a79fdee]{list-style:none;padding:0;margin:0\n}\n.form-check[data-v-2a79fdee]{padding:0!important\n}",""])},429:function(t,e,n){"use strict";n.r(e);n(24),n(36);var a,r,i=n(0),o=n.n(i),s=(n(22),n(232)),d=n(214),c={name:"Name",components:{VModal:n(226).a,ButtonRounded:d.a,VTable:s.a},props:{rules:{type:Object,default:function(){return{}}}},data:function(){return{search_text:"",orderBy:{},page:1,isLoading:!0,interval:10,deleteModal:{show:!1,id:null}}},computed:{tBodyRules:function(){return!this.rules&&this.rules.hasOwnProperty("body_rules")?[]:this.rules.body_rules},tHead:function(){return!this.rules&&this.rules.hasOwnProperty("head_rules")?[]:this.rules.head_rules},tBody:function(){var t=this;if(!this.users)return[];var e=[];return this.users.data.forEach(function(n){var a={actions:t.generateActions(n),tr:t.generateRow(n)};e.push(a)}),e},tFooter:function(){return this.users?{current_page:this.users.current_page,from:this.users.from,to:this.users.to,per_page:this.users.per_page,total:this.users.total,last:this.users.last_page}:{}}},asyncComputed:{users:(r=o()(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,this.$api().users.get({page:this.page,search_text:this.search_text,order_by_column:this.orderBy.orderBy,order_by_direction:this.orderBy.sortingDirection,interval:this.interval}).finally(function(){e.isLoading=!1});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)})},methods:{generateActions:function(t){var e=this,n=[];return this.$order(this.tBodyRules.actions).forEach(function(a){if("link"===a.action.module){var r={title:a.title,action:function(){e.$router.push({name:a.action.route,params:{name:a.action.name,id:_.get(t,a.action.param)}})}};n.push(r)}else if("delete"===a.action.module){var i={title:a.title,action:function(){e.deleteModal.show=!0,e.deleteModal.id=_.get(t,a.action.param)}};n.push(i)}}),n},generateRow:function(t){var e=[];return this.$order(this.tBodyRules.columns).forEach(function(n){var a=_.get(t,n.column);e.push(a)}),e},deleteRole:(a=o()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=3;break}return t.next=3,this.$api().users.deleteById(e).then(function(t){document.location.reload(!0)});case 3:this.deleteModal.show=!1,this.deleteModal.id=null;case 5:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)})}},l=(n(396),n(6)),u=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["roles-and-permissions-users"===t.$route.name?[n("v-table",{attrs:{"enable-header":!0,thead:t.tHead,tbody:t.tBody,tfooter:t.tFooter,"is-loading":t.isLoading},on:{set_page:function(e){t.page=e},search_text:function(e){t.search_text=e},order_by:function(e){t.orderBy=e},interval:function(e){t.interval=e}}},[n("template",{slot:"header"},[n("button-rounded",{staticClass:"btn-green rounded",nativeOn:{click:function(e){t.$router.push({name:t.rules.button.route})}}},[t._v("\n          "+t._s(t.rules.button.text)+"\n          "),n("fa",{staticClass:"ml-2",attrs:{icon:["fal",t.rules.button.icon.name]}})],1)],1)],2),t._v(" "),t.deleteModal.show?n("v-modal",{attrs:{header:"Are you sure want to delete this item?"},on:{close:function(e){t.deleteModal.show=!1}}},[n("template",{slot:"body"},[t._v("\n        Please confirm the deletion of this record. And all the records that depend on it.\n      ")]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("button-rounded",{staticClass:"btn-smoke rounded small mr-2",nativeOn:{click:function(e){t.deleteModal.show=!1}}},[t._v("\n          Cancel\n        ")]),t._v(" "),n("button-rounded",{staticClass:"btn-green rounded small mr-2",nativeOn:{click:function(e){t.deleteRole(t.deleteModal.id)}}},[t._v("\n          Yes, delete this\n        ")])],1)],2):t._e()]:t._e(),t._v(" "),[n("nuxt-child",{key:t.$route.params.id})]],2)},[],!1,null,"2a79fdee",null);u.options.__file="users.vue";e.default=u.exports}}]);