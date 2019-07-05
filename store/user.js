
// 在nuxt中不要创建store的实例，每个js模块nuxt会自动创建实例，
// 只需要关注state，mutations，actions

// export在nuxt中是固定写法
// state不能修改的，类似于vue组件中的data,用于声明仓库数据
// 调用一个第三方的库调用localstorage，会自动判断是浏览器还是服务器
export const state = () => {
    return {
        userInfo: {
            token: "",
            user: {}
        },
    }
}

// 同步修改state
export const mutations = {
    // 设置用户的数据
    setUserInfo(state, data){
        state.userInfo = data;
    },

    //设置用户的数据为空，相当于退出
    clearUserInfo(state){
        state.userInfo = {
            token: "",
            user: {}
        }
    }
}

// 异步修改state的数据
export const actions = {
    // 登录的异步操作
    // 登录的接口可能存在多次引用的情况下
    login({ commit }, data){
        // resolve, reject
        return this.$axios({
            url: "/accounts/login",
            method: "POST",
            data
        }).then(res => {
            // 调用store下的mutations的方法
            commit("setUserInfo", res.data);

            //resolve();

            // 调用login方法传入的成功的回调函数
            // 在primose对象内容想要触发成功的回调函数就是用 
            // Promise.resolve 来主动触发成功的回调
            Promise.resolve();

            // Promise.all([])
            // Promise.reject()
        });
    },
}
