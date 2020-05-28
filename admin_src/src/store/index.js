import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import routes from './modules/routes'
import config from './modules/config'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        user,
        routes,
        config
    }
})

export default store
