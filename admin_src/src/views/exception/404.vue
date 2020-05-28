<template>
    <div class="exception">
        <a-result status="404" title="404" subTitle="抱歉，你访问的页面不存在">
            <template v-slot:extra>
                <a-button type="primary" @click="handleBack">返回</a-button>
            </template>
        </a-result>
    </div>
</template>

<script>
    export default {
        name: "404",
        methods: {
            handleBack() {
                this.$router.back()
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
