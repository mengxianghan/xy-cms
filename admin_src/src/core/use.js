import Vue from 'vue'

// base library
import antd from 'ant-design-vue'
import xui from '@/components'

// extra library
import VueStorage from "vue-ls"
import api from '@/api'
import * as util from '@/utils/util'
import '@/directives/action'
import '@/assets/style/index.scss'

Vue.use(antd)
Vue.use(xui)
Vue.use(api)
Vue.use(VueStorage, {
    namespace: 'xcms_',
    name: 'ls',
    storage: 'local'
})

window.$xy = Vue.prototype.$xy = {util}
