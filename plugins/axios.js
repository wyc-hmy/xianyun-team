import {Message} from "element-ui";
// 只是axios的插件，用来做拦截

// nuxtjs中写插件只需要暴露一个函数
export default ({$axios}) => {
    // {$axios}是nuxtjs环境的大对象
    
    // onError拦截所有的错误的请求
    $axios.onError(res => {
        // console.log(res.response, 123)
        const {statusCode, message} = res.response.data;

        // 参数错误时候会触发400的错误
        if(statusCode === 400){
            // alert(message);
            Message.warning(message);
        }

    });
};