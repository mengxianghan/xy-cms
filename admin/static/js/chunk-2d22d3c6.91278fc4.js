(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d3c6"],{f743:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,"confirm-loading":e.confirmLoading},on:{ok:e.onOk,cancel:e.onCancel},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("a-form",e._b({attrs:{form:e.form}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"上级分类"}},[a("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parent_id",{rules:[{required:!0,message:"请选择上级分类"}]}],expression:"['parent_id',{rules:[{required:true,message:'请选择上级分类'}]}]"}],attrs:{"tree-data":e.treeData}})],1),a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入名称"}]}],expression:"['name',{rules:[{required:true,message:'请输入名称'}]}]"}]})],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:"1"}],expression:"['status',{initialValue:'1'}]"}]},[a("a-radio",{attrs:{value:"1"}},[e._v("正常")]),a("a-radio",{attrs:{value:"0"}},[e._v("禁用")])],1)],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:"99"}],expression:"['sort',{initialValue:'99'}]"}]})],1)],1)],1)},r=[],n=(a("b4fb"),a("b130"),a("053b"),a("90aa"),a("5c62")),s=a("e49c"),o={mixins:[s["default"]],data:function(){return{}},computed:{disabledId:function(){return this.$xy.util.getFieldsValue(this.$parent.list,{parentId:this.record.id})},treeData:function(){var e=this;return[{title:"无",value:"0",key:"0"}].concat(Object(n["a"])(this.$xy.util.changeKeys(this.$parent.list,{title:"name",value:"id",key:"id",children:"children",disabled:function(t){return e.disabledId.includes(t.id)}})))}},methods:{handleInsert:function(e){var t=this;this.toggleModal(),this.title="新增分类",this.$nextTick((function(){t.form.setFieldsValue({parent_id:e?e.id:"0"})}))},handleEdit:function(e){var t=this;this.toggleModal(),this.record=e,this.title="编辑分类",this.$nextTick((function(){t.form.setFieldsValue({parent_id:e.parent_id,name:e.name,status:e.status,sort:e.sort})}))},handleDelete:function(e){var t=this;this.$api.mall.classify.delete({id:e.id}).then((function(a){var i=a.code;"200"===i&&(t.$emit("delete",e),t.$emit("complete",e))}))},onOk:function(){var e=this;this.form.validateFieldsAndScroll((function(t,a){t||(e.confirmLoading=!0,e.$api.mall.classify.submit({id:e.record.id,parent_id:a.parent_id||"0",name:a.name,status:a.status,sort:a.sort}).then((function(t){var i=t.code;e.confirmLoading=!1,"200"===i&&(e.reset(),e.toggleModal(),e.$emit("ok",a),e.$emit("complete",a))}),(function(t){e.confirmLoading=!1})))}))},onCancel:function(){this.reset(),this.toggleModal(),this.$emit("cancel")}}},l=o,d=a("4023"),c=Object(d["a"])(l,i,r,!1,null,"9291d27c",null);t["default"]=c.exports}}]);