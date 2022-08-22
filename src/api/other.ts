//请求的api 分块进行处理
//其他模块 api
import $http from "@/http";

//此处知道要传的参数类型，所以直接定义类型
// interface loginData {
//     userName:string,
//     passWord:string
// }


//后续可能需要分页，所以需要参数，但是不确定类型，所以用any
export const getList = (params:any) => $http({ url: "/list",method:'get',params })

//如果是get请求，参数应该是params   函数的另一个写法 返回$http方法
//export const login  (params:loginData) {
//     return $http({ url: "",method:'post',params })
// } 

//获取用户列表 不需要参数
export const getUserList = () => $http({ url: "/user",method:'get', })
//获取角色列表 不需要参数
export const getRoleList = () => $http({ url: "/role",method:'get', })


export const getAuthorityList = () => $http({ url: "/authority",method:'get', })



//获取权限路由
export const getRouter = () => $http({ url: "/getRouter",method:'get', })


