import axios from 'axios'
import { ElMessage } from 'element-plus' //使用element-plus的message进行提示

//枚举 返回的code类型，进行错误提醒
enum MSGS{
    "操作成功" = 200,
    "密码错误" ,
    "账号错误" ,
    "请求异常" ,
}

//创建HTTP实例
const $http = axios.create({
    baseURL:"",  //请求地址的默认前缀
    timeout:2000,  //请求超时时间，2秒
    headers:{ //请求头公共部分
        "Content-Type":"application/json;charset=utf-8"  //返回的数据是json，语言版本是utf-8不排除会返回中文的数据
    }
})

//请求拦截,对request进行处理，对请求的配置文件做处理
$http.interceptors.request.use(config=>{
    config.headers = config.headers || {}  //headers未必有，所以进行处理
    //config 中的headers未必有，所以要进行处理
    //config.headers.token = localStorage.getItem('token') || ''  //token可能会取不到，所以要进行处理
    //为了确保一定能够拿到token，用if
    if(localStorage.getItem('token')){
        config.headers.token = localStorage.getItem('token') || ''
    }
    //改的是config，所以要将config返回给$http请求，让它继续完成请求
    return config
})

//响应,对响应进行拦截

$http.interceptors.response.use(res=>{  //res 响应，后台返回的数据结果,两种结果：1。成功，2.失败
  //成功 网络请求200
  //业务请求逻辑，大概是下列的数据（看后台怎么返回：跟后台协商）：
    // {
    //     code:200,
    //     data:{},
    //     msg:"请求成功"
    // }
    //要对code进行判断 ：
      //1.如果是200：请求成功
      //2.如果是201 ：可能是密码错误，账号异常等

    //   所以可以对code 用switch进行判断，也可以用if。目前用了ts，可以使用枚举的方法
    const code:number = res.data?.code  //code 不一定存在，所以使用 ？
    if(code!=200){
        //错误提醒
        // ElMessage({
        //     showClose: false,
        //     message: MSGS[code],
        //     type: 'error',
        //   })
        ElMessage.error(MSGS[code])
        return Promise.reject(res.data)  //是错误，所以，promise返回reject
    }
   //否则，可以拿到正确的数据，直接返回
    return res.data
},err=>{
    //失败
    console.log(err)
})


//将重新封装的 http方法导出
export default $http
