<template>
    <div  class="login-box">
        <el-form
    ref="loginFormRef"
    :model="loginForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-loginForm"
  >
    <el-form-item label="账号：" prop="userName">
      <el-input v-model="loginForm.userName" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码：" prop="passWord">
      <el-input
        v-model="loginForm.passWord"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
   
    <el-form-item>
      <el-button type="primary" @click="submitForm(loginFormRef)"
        >登录</el-button
      >
    </el-form-item>
  </el-form>

    </div>
</template>
<script lang="ts">
import {defineComponent,reactive,toRefs} from'vue'
import type {FormInstance} from 'element-plus'
import {InitData} from '../types/login'
import {login} from '../api/login'

import {useRouter} from 'vue-router'  //要进行路由跳转，需要引入



export default defineComponent({
    setup(){
        //useRouter方法调用的时候，可以得到当前的router实例
        const router = useRouter()
        // const data=reactive({
        //     loginForm:{
        //         userName:'',
        //         password:''
        //     },
        //     rules:{
        //         userName: [{ required: true, message: '请输入账号', trigger: 'blur' },
        //                 { min: 3, max: 5, message: '账号长度在6-24', trigger: 'blur' },],
        //         password: [{ required: true, message: '请输入密码', trigger: 'blur' },
        //                 { min: 3, max: 5, message: '密码长度在6-24', trigger: 'blur' }],
        //     }
        // })
        const data = reactive(new InitData())
        const rules={
                userName: [{ required: true, message: '请输入账号', trigger: 'blur' },
                        { min: 6, max: 24, message: '账号长度在6-24', trigger: 'blur' },],
                passWord: [{ required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 24, message: '密码长度在6-24', trigger: 'blur' }],
            }
            // 这是@click="submitForm()"，写法
            // const submitForm = ()=>{
            //     //加个问号，是因为，不一定能够拿到这个函数，ref不一定有值时，加?
            //     data.loginFormRef?.validate((valid) => {
            //         if (valid) {
            //         console.log('submit!')
            //         } else {
            //         console.log('error submit!')
            //         return false
            //         }
            //     })
            // }
            const submitForm = (loginFormRef:FormInstance)=>{ //此处还需要给参数确认数据类型 是ref值
                //加个问号，是因为，不一定能够拿到这个函数，ref不一定有值时，加?
                loginFormRef.validate((valid:boolean) => { //valid对象是个boolean值
                    if (valid) {
                    console.log('submit!')
                    //验证通过，进行下一步，数据请求
                    //调用接口,传参， 参数定义再 types里面的login.ts中
                    login(data.loginForm).then(res=>{
                      console.log('res返回的数据',res)
                      //成功返回后，将数据存入到localsrotry中
                      // localStorage.setItem('token',res.data.token)
                      localStorage.setItem('token','lhrsy956686') //写死token存进去
                      //之后进行跳转到指定页面
                      // 在vue2中，可以直接使用this.route.push 的方法进行跳转
                      // 但是，在vue3中的setup中没有this的概念了
                      router.push('/')  //跳转到首页
                    })
                    } else {
                      console.log('error submit!')
                      return false
                    }
                })
            }
        return{
            ...toRefs(data),
            rules,
            submitForm
        }
    }

})
</script>
<style scoped>
.login-box{
   
    width: 100%;
    width: 100%;
    background-color: #fff;
}
.demo-loginForm{
    padding: 50px 50px 0 0;
}
</style>