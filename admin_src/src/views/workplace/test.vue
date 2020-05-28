<template>
    <div>
        <a-form :form="form">
            <a-form-item label="标题1">
                <a-input
                        v-decorator="['name',{rules:[{required:true,message:'请输入商品名称'},{max:6,message:'最大长度为6'},{min:4,message:'最小长度为4'}]}]"></a-input>
            </a-form-item>
            <a-form-item>
                <a-button type="primary">提交表单</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        beforeCreate() {
            this.form = this.$form.createForm(this)
        },

    }
</script>
<style lang="scss" scoped>

</style>
