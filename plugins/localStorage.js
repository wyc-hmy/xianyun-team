// 导入插件
import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
    window.onNuxtReady(() => {
        createPersistedState({
            // 自动把数据存储的到本地
            // key的值保存到本地的时候的属性名
            key: "store", 
        })(store)
    })
}