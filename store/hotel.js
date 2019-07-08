export const state=()=>{
    return {
        id:"",
        isShow:false
    }
}

//同步修改state
export const mutations={
    //设置评论用户数据
    setUserInfo(state,data){
        state.id=data
    },
    //设置是否显示
    setIsShow(state,data){
        state.isShow=data;
    }
}