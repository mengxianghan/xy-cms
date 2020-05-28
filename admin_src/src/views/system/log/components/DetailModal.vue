<template>
    <a-modal v-model="visible"
             :title="title"
             :footer="null">
        <a-descriptions size="small" :column="1">
            <a-descriptions-item label="日志类型">{{record.type | typeFilter}}</a-descriptions-item>
            <a-descriptions-item label="用户">{{record.name}}</a-descriptions-item>
            <a-descriptions-item label="接口地址">{{record.api}}</a-descriptions-item>
            <a-descriptions-item label="浏览器信息">{{record.browser}}</a-descriptions-item>
            <a-descriptions-item label="访问 IP">{{record.ip}}</a-descriptions-item>
            <a-descriptions-item label="状态码">{{record.code}}</a-descriptions-item>
            <a-descriptions-item label="状态信息">{{record.message || '-'}}</a-descriptions-item>
            <a-descriptions-item label="请求参数">
                <pre>{{JSON.parse(record.params)}}</pre>
            </a-descriptions-item>
            <a-descriptions-item label="请求时间">{{record.create_time}}</a-descriptions-item>
        </a-descriptions>
    </a-modal>
</template>

<script>
    import form from '@/mixins/form'

    const type = {
        1: '登录日志',
        2: '操作日志',
        3: '异常日志',
    }
    export default {
        mixins: [form],
        data() {
            return {}
        },
        filters: {
            typeFilter(key) {
                return type[key]
            }
        },
        methods: {
            handleDetail(record) {
                this.title = '日志详情'
                this.visible = true
                this.record = record
            }
        }
    }
</script>

<style scoped>

</style>
