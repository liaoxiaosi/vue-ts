//不需要进行分页
interface ListInt{  //数据类型
    roleId:number,
    roleName:string,
    authority:number[],  //权限 id
  
}
interface RoleInt {
    role:number,
    roleName:string
}


//定义接口 两个输入框的接口类型
interface SelectDataInt{
    roleName:string,
    roleId:number
} 

interface ActiveInt{  //数据类型 要编辑的当前行数据类型
    roleId:number,
    roleName:string,
    authority:number[],  //权限id
}
//class 类
// 默认公共 public 自由访问程序里定义的变量和方法
// 私有的 private 当成员被标记为私有属性，只能在类进行使用，不能外部使用,子类也不可访问
// 受保护的 protected 和private相似，唯一不同的是，被protected修饰的属性可以在子类中访问

export class InitData{  //初始化数据
    selectData:SelectDataInt={ //定义selectData数据类型 和数据大小是SelectDataInt类型的对象
        roleName:'',
        roleId:0
    }
    list:ListInt[]=[]  //AllData 是ListInt类型的数组,一次性请求全部数据后，前端进行分页和搜索，此处，是所有数据
    AllData:ListInt[]=[]  //AllData 是ListInt类型的数组,一次性请求全部数据后，前端进行分页和搜索，此处，是所有数据
    isAdd = false
}

export{
    ListInt,
    ActiveInt
}