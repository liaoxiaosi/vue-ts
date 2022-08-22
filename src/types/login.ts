import type {FormInstance} from 'element-plus'
import {ref} from 'vue'
//引入FormInstance，会枚举出element中数据类型
interface LoginFormInt{  //对数据的类型进行规范
    userName:string,
    passWord:string
}
class InitData{
    loginForm:LoginFormInt={  //数据 loginForm
        userName:'',
        passWord:''
    }
    // loginFormRef:any = null  //因为不知道确定的数据类型,此处是ref对象
    loginFormRef=ref<FormInstance>()  //ref的泛型
}
export{
    LoginFormInt,
    InitData
}