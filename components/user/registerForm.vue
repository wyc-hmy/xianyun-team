<template>
    <el-form 
        :model="form" 
        ref="form" 
        :rules="rules" 
        class="form">

            <el-form-item class="form-item" prop="username">
                <el-input 
                placeholder="用户名手机"
                v-model="form.username">
                </el-input>
            </el-form-item>

            <el-form-item class="form-item" prop="captcha">
                <el-input 
                placeholder="验证码" 
                v-model="form.captcha">
                    <!-- 自定义模板 -->
                    <template slot="append">
                        <el-button @click="handleSendCaptcha">
                            发送验证码
                        </el-button>
                    </template>
                </el-input>
            </el-form-item>

            <el-form-item class="form-item" prop="nickname">
                <el-input 
                placeholder="你的名字"
                v-model="form.nickname">
                </el-input>
            </el-form-item>

            <el-form-item class="form-item" prop="password">
                <el-input 
                placeholder="密码" 
                type="password"
                v-model="form.password"
                ></el-input>
            </el-form-item>

            <el-form-item class="form-item" prop="checkPassword">
                <el-input 
                placeholder="确认密码" 
                type="password"
                v-model="form.checkPassword">
                </el-input>
            </el-form-item>

            <el-button 
            class="submit" 
            type="primary" 
            @click="handleRegSubmit">
                注册
            </el-button>
        </el-form>
</template>

<script>
export default {
    data(){

        // rule： 当前的规则的对象
        // value：当前调用规则的字段值
        // callback ：是回调函数代表执行下一步，必须要调用,
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.form.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        }

        return {
            // 表单数据
            form: {
                username: "",
                captcha: "", // 验证码
                nickname: "",
                password: "",
                checkPassword: "" //  只是做前端的验证，不会发给后台
            },
            // 表单规则
            rules: {
                username: [
                    { required: true, message: "请输入用户名", trigger: "blur" }
                ],
                captcha: [
                    { required: true, message: "请输入严验证码", trigger: "blur" }
                ],
                nickname: [
                    { required: true, message: "请输入昵称", trigger: "blur" }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" }
                ],
                checkPassword: [
                    // 自定义验证规则，validator自定义验证的函数
                    {validator: validatePass, trigger: 'blur'}
                ]
            },
        }
    },
    methods: {
        // 发送验证码
        handleSendCaptcha(){

            // 判断手机号码不能为空
            if(this.form.username == ""){
                this.$confirm('手机号码不能为空', '提示', {
                    confirmButtonText: '确定',
                    type: 'warning'
                });
                return;
            }

            // 请求验证码
            this.$axios({
                url: "/captchas",
                method: "POST",
                data: {
                    tel: this.form.username
                }
            }).then(res => {
                // 模拟验证码的返回
                const {code} = res.data;
                alert("验证码是：" + code);
            })
        },

        // 注册
        handleRegSubmit(){
           // 调用注册的接口
           this.$refs.form.validate( valid => {
               if(valid){

                   const {checkPassword, ...props} = this.form;

                   this.$axios({
                       url: "/accounts/register",
                       data: props,
                       method: "POST"
                   }).then(res => {
                       // 把用户的数据设置给store
                       this.$store.commit("user/setUserInfo", res.data);

                       this.$message.success("注册成功，正在登录...");
                       setTimeout(() => {
                            this.$router.push("/");
                        }, 1000);
                   })
               }
           })
        }
    }
}
</script>

<style scoped lang="less">
    .form{
        padding:25px;
    }

    .form-item{
        margin-bottom:20px;
    }

    .form-text{
        font-size:12px;
        color:#409EFF;
        text-align: right;
        line-height: 1;
    }

    .submit{
        width:100%;
        margin-top:10px;
    }
</style>