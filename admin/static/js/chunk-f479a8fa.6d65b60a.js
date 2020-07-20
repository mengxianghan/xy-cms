(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f479a8fa","chunk-4c1673b3","chunk-2d0c840c"],{"53a9":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,"confirm-loading":t.confirmLoading},on:{ok:t.onOk,cancel:t.onCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[i("a-form",t._b({attrs:{form:t.form}},"a-form",t.formItemLayout,!1),[i("a-form-item",{attrs:{label:"名称"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入名称"}]}],expression:"['name',{rules:[{required:true,message:'请输入名称'}]}]"}]})],1),i("a-form-item",{attrs:{label:"状态"}},[i("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:"1"}],expression:"['status',{initialValue:'1'}]"}],attrs:{disabled:t.isSuper}},[i("a-radio",{attrs:{value:"1"}},[t._v("正常")]),i("a-radio",{attrs:{value:"0"}},[t._v("禁用")])],1)],1),i("a-form-item",{attrs:{label:"排序"}},[i("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:"99"}],expression:"['sort',{initialValue:'99'}]"}]})],1)],1)],1)},n=[],r=(i("053b"),i("e49c")),o={mixins:[r["default"]],data:function(){return{}},computed:{isSuper:function(){return"1"===this.record.type}},methods:{handleInsert:function(){this.toggleModal(),this.title="新增角色"},handleEdit:function(t){var e=this;this.toggleModal(),this.record=t,this.title="编辑角色",this.$nextTick((function(){e.form.setFieldsValue({name:t.name,status:t.status,sort:t.sort})}))},handleDelete:function(t){var e=this;this.$api.system.role.delete({id:t.id}).then((function(i){var a=i.code;"200"===a&&(e.$emit("delete",t),e.$emit("complete",t))}))},onOk:function(){var t=this;this.form.validateFieldsAndScroll((function(e,i){e||(t.confirmLoading=!0,t.$api.system.role.submit({id:t.record.id,name:i.name,status:i.status,sort:i.sort}).then((function(e){var a=e.code;t.confirmLoading=!1,"200"===a&&(t.reset(),t.toggleModal(),t.$emit("ok",i),t.$emit("complete",i))}),(function(e){t.confirmLoading=!1})))}))},onCancel:function(){this.reset(),this.toggleModal(),this.$emit("cancel")}}},s=o,c=i("4023"),l=Object(c["a"])(s,a,n,!1,null,"33e328c2",null);e["default"]=l.exports},"70eb":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a-card",{attrs:{bordered:!1}},[i("div",{directives:[{name:"action",rawName:"v-action:insert",arg:"insert"}],staticClass:"mb-2"},[i("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.editForm.handleInsert()}}},[t._v("新增角色")])],1),i("a-table",{attrs:{columns:t.columns,"data-source":t.list,pagination:t.pagination,loading:t.loading,"row-key":"id",size:"middle"},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"status",fn:function(t){return[i("x-status",{attrs:{code:t}})]}},{key:"operation",fn:function(e,a){return[i("span",{directives:[{name:"action",rawName:"v-action:setAuth",arg:"setAuth"}]},["1"===a.type?i("a-tooltip",{attrs:{title:"超级管理员拥有所有权限",trigger:"click"}},[i("a",[t._v("设置权限")])]):i("a",{on:{click:function(e){return t.$refs.authForm.handleEdit(a)}}},[t._v("设置权限")]),i("a-divider",{attrs:{type:"vertical"}})],1),i("span",{directives:[{name:"action",rawName:"v-action:edit",arg:"edit"}]},[i("a",{on:{click:function(e){return t.$refs.editForm.handleEdit(a)}}},[t._v("编辑")]),i("a-divider",{attrs:{type:"vertical"}})],1),i("span",{directives:[{name:"action",rawName:"v-action:delete",arg:"delete"}]},[i("a-popconfirm",{attrs:{title:"确认删除此数据?"},on:{confirm:function(e){return t.$refs.editForm.handleDelete(a)}}},[i("a",[t._v("删除")])])],1)]}}])})],1),i("edit-form",{ref:"editForm",on:{complete:t.onComplete}}),i("auth-form",{ref:"authForm"})],1)},n=[],r=(i("513c"),i("80a0")),o=i("53a9"),s=i("e25f"),c=[{title:"名称",dataIndex:"name"},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"排序",dataIndex:"sort"},{title:"创建时间",dataIndex:"create_time"},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"}}],l={name:"index",components:{EditForm:o["default"],AuthForm:s["default"]},data:function(){return{columns:c,list:[],pagination:{showSizeChanger:!0},loading:!1}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.loading=!0,this.$api.system.role.getList({current_page:this.pagination.current,page_size:this.pagination.pageSize}).then((function(e){var i=e.code,a=e.data,n=a.list,o=a.total;t.loading=!1,"200"===i&&(t.pagination=Object(r["a"])(Object(r["a"])({},t.pagination),{},{total:Number(o)}),t.list=n)})).catch((function(){t.loading=!1}))},handleTableChange:function(t){this.pagination=Object(r["a"])(Object(r["a"])({},this.pagination),{},{current:t.current,pageSize:t.pageSize}),this.getList()},onComplete:function(){this.getList()}}},d=l,u=i("4023"),h=Object(u["a"])(d,a,n,!1,null,"6a359592",null);e["default"]=h.exports},9092:function(t,e,i){},e25f:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{title:t.title,"confirm-loading":t.confirmLoading,width:"640px"},on:{ok:t.onOk,cancel:t.onCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[i("a-spin",{attrs:{spinning:t.spinning}},[t.list.length?i("a-tree",{staticClass:"auth-tree",attrs:{"tree-data":t.list,"default-expand-all":"",checkable:"","check-strictly":!1},on:{check:t.onCheck},model:{value:t.checkedKeys,callback:function(e){t.checkedKeys=e},expression:"checkedKeys"}}):t._e()],1)],1)},n=[],r=(i("b4fb"),i("fe59"),i("2eeb"),i("513c"),i("e35a"),i("0d7a"),i("08ba"),i("5c62")),o=(i("b449"),i("5d83")),s=i("e49c"),c=void 0,l=function t(e){return c.$xy.util.changeKeys(e,{title:"name",value:"id",key:"id",children:function(e){if(e.children&&e.children.length)return t(e.children);if(e.auth_id){var i=e.auth_id.split(","),a=e.auth_name.split(",");return a.map((function(t,a){return{class:"last-tree-node",title:t,value:"".concat(e.id,",").concat(i[a]),key:"".concat(e.id,",").concat(i[a])}}))}}})},d={props:{type:{type:[Number,String],default:1}},mixins:[s["default"]],data:function(){return{list:[],spinning:!1,checkedKeys:[],halfCheckedKeys:[]}},created:function(){this.title="设置权限"},watch:{visible:function(t){t&&!this.list.length&&this.getMenuList()}},methods:{getMenuList:function(){var t=this;this.spinning=!0;var e=this.$ls.get("userInfo"),i=e.id;this.$api.system.auth.getMenuList({id:i,type:"2"}).then((function(e){var i=e.code,a=e.data.list;t.spinning=!1,"200"===i&&(t.list=l(a))}))},getAlreadyAuthList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var i,a,n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.spinning=!0,e.next=3,t.$api.system.auth.getAlreadyAuthList({id:t.record.id,type:t.type});case 3:i=e.sent,a=i.code,n=i.data.list,t.spinning=!1,"200"===a&&(r=[],o=[],n.forEach((function(t){o.push(t.menu_id),t.auth_button_id&&t.auth_button_id.split(",").forEach((function(e){r.push("".concat(t.menu_id,",").concat(e))}))})),t.checkedKeys=r,t.halfCheckedKeys=o);case 8:case"end":return e.stop()}}),e)})))()},handleEdit:function(t){this.toggleModal(),this.record=t,this.getAlreadyAuthList()},onCheck:function(t,e){var i=e.halfCheckedKeys;this.halfCheckedKeys=i},onOk:function(){var t=this;this.confirmLoading=!0;var e=[].concat(Object(r["a"])(this.formatValues(this.checkedKeys)),Object(r["a"])(this.formatValues(this.halfCheckedKeys,"1")));this.$api.system.auth.submit({id:this.record.id,type:this.type,values:e}).then((function(e){var i=e.code;t.confirmLoading=!1,"200"===i&&(t.reset(),t.toggleModal(),t.$emit("ok"),t.$emit("complete"))}))},onCancel:function(){this.reset(),this.toggleModal(),this.$emit("cancel")},formatValues:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",a=t.map((function(t){var a=t.split(","),n=2==a.length?a[0]:t,r=2==a.length?a[1]:"";return{id:e.record.id,type:e.type,menu_id:n,auth_button_id:r,is_half:i}}));return a}}},u=d,h=(i("fa9f"),i("4023")),f=Object(h["a"])(u,a,n,!1,null,"1b92e9d4",null);e["default"]=f.exports},fa9f:function(t,e,i){"use strict";var a=i("9092"),n=i.n(a);n.a}}]);