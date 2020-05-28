<template>
    <div>
        <a-card :bordered="false">
            <div class="mb-2" v-action:insert>
                <a-button type="primary" icon="plus" @click="$refs.editForm.handleInsert()">新增商品</a-button>
            </div>
            <a-table :columns="columns"
                     :data-source="list"
                     :pagination="pagination"
                     :loading="loading"
                     row-key="id"
                     size="middle"
                     @change="handleTableChange">
                <template slot="status" slot-scope="text">
                    <x-status :code="text"></x-status>
                </template>
                <template slot="operation" slot-scope="text,record">
                    <span v-action:edit>
                        <a @click="$refs.editForm.handleEdit(record)">编辑</a>
                        <a-divider type="vertical"></a-divider>
                    </span>
                    <span v-action:edit>
                        <a @click="$refs.editForm.handleEdit(record)">设价</a>
                        <a-divider type="vertical"></a-divider>
                    </span>
                    <span v-action:edit>
                        <a @click="$refs.editForm.handleEdit(record)">下架</a>
                    </span>
                </template>
            </a-table>
        </a-card>

        <edit-form ref="editForm" @complete="onComplete"></edit-form>
    </div>
</template>

<script>
    import EditForm from './components/EditForm'

    const columns = [
        {
            title: '商品名',
            dataIndex: 'name'
        },
        {
            title: '价格(元)',
            dataIndex: '1',
            sorter: true,
        },
        {
            title: '访问量',
            dataIndex: '2'
        },
        {
            title: '库存',
            dataIndex: '2',
            sorter: true
        },
        {
            title: '销量',
            dataIndex: '2',
            sorter: true
        },
        {
            title: '序号',
            dataIndex: '2'
        },
        {
            title: '创建时间',
            dataIndex: '2',
            sorter: true
        },
        {
            title: '商品状态',
            dataIndex: '2'
        },
        {
            title: '操作',
            key: 'operation',
            scopedSlots: {customRender: 'operation'}
        }
    ]
    export default {
        name: "index",
        components: {
            EditForm
        },
        data() {
            return {
                columns,
                list: [],
                pagination: {
                    showSizeChanger: true
                },
                loading: false
            }
        },
        created() {
            this.getList()
        },
        methods: {
            /**
             * 获取列表
             */
            getList() {
                this.loading = true
                this.$api.mall.goods.getList({
                    current_page: this.pagination.current,
                    page_size: this.pagination.pageSize
                }).then(({code, data: {list, total}}) => {
                    this.loading = false
                    if (code === '200') {
                        this.pagination = {
                            ...this.pagination,
                            total: Number(total),
                        }
                        this.list = list
                    }
                }).catch(() => {
                    this.loading = false
                })
            },
            /**
             * 分页
             * @param pagination
             */
            handleTableChange(pagination) {
                this.pagination = {
                    ...this.pagination,
                    current: pagination.current,
                    pageSize: pagination.pageSize
                }
                this.getList()
            },
            /**
             * 完成
             */
            onComplete() {
                this.getList()
            }
        }
    }
</script>

<style scoped>

</style>
