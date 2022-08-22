//不需要进行分页
interface ListInt{  //数据类型
    id:number,
    nikeName:string,
    userName:string,
    role:RoleInt[],  //role是数组，需要重新再定义
}
interface ActiveInt{  //数据类型
    id:number,
    nikeName:string,
    userName:string,
    role:number[],  //role是数组，需要重新再定义
}
interface RoleInt {
    role:number,
    roleName:string
}
//另一个写法
// export interface ListInt{
//     userId:number,
//     id:number,
//     title:string,
//     body:string
// }
//定义接口 两个输入框的接口类型
interface SelectDataInt{
    nikeName:string,
    userName:string,
    id:number
    // page:number,
    // count:number, //总条数
}
interface RoleListInt{
    roleName:string,
    roleId:number,
    suthorty:number[] //角色权限是number类型的数组
}
export class InitData{ //将数据进行赋值，初始化
    selectData:SelectDataInt={ //定义selectData数据类型 和数据大小是SelectDataInt类型的对象
        nikeName:'',
        userName:'',
        id:0
    }
    list:ListInt[]=[]  //AllData 是ListInt类型的数组,一次性请求全部数据后，前端进行分页和搜索，此处，是所有数据
    AllData:ListInt[]=[]  //AllData 是ListInt类型的数组,一次性请求全部数据后，前端进行分页和搜索，此处，是所有数据
    roleList:RoleListInt[] = [] //roleList 是RoleListInt类型的数组 角色列表
    active:ActiveInt = { //由于没有初始化，所以需要进行初始化
        id:0,
        nikeName:'',
        userName:'',
        role:[], 
    }
    showEdit = false  
}


export{
    ListInt,
    ActiveInt
    

}