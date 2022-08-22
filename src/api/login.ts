//请求的api 分块进行处理
//将封装的方法导入到此
import $http from "@/http";

//此处知道要传的参数类型，所以直接定义类型
interface loginData {
    userName:string,
    passWord:string
}

//接收一个参数，返回$http,post请求方式，传参：data (data应该是一个对象)
// export const login = data => $http({ url: "",method:'post',data })
export const login = (data:loginData) => $http({ url: "/ogin",method:'post',data })

//如果是get请求，参数应该是params   函数的另一个写法 返回$http方法
//export const login  (params:loginData) {
//     return $http({ url: "",method:'post',params })
// } 