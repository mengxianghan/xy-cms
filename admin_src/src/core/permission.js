import Vue from "vue"
import router from '@/router'
import store from '@/store'

import NProgress from 'nprogress'

import {whiteList} from "@/config/router.config"

router.beforeEach((to, from, next) => {
    NProgress.start()
    // 在白名单
    if (whiteList.includes(to.name)) {
        next()
    }
    // 不在白名单
    else {
        store.dispatch('user/setUserInfo').then(res => {
            // 已登录
            if (res) {
                if (store.state.routes.routesComplete) { // 路由加载完成
                    next()
                }
                // 路由未加载，执行加载
                else {
                    store.dispatch('routes/generateRoutes').then((routes) => {
                        next({...to, replace: true})
                    })
                }
            }
            // 未登录
            else {
                next({name: 'login', replace: true})
            }
        })
    }
})

router.afterEach((to, from) => {
    NProgress.done()
})
