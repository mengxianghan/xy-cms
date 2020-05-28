const install = (Vue, options) => {
    const files = require.context('.', true, /.*\.vue$/)
    files.keys().forEach(key => {
        const item = files(key).default
        if (item.name) {
            Vue.component(`X${item.name}`, item)
        }
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default install
