export interface QueryInt {
    id:number,
    authority:string
}

//不需要进行分页
//加 ？ 表示未必有该字段
export interface ListInt{  //数据类型
    name:string,
    roleId:number,
    viewRole?:string,
    roleList?:ListInt[]
  
}
//class 类
// 默认公共 public 自由访问程序里定义的变量和方法
// 私有的 private 当成员被标记为私有属性，只能在类进行使用，不能外部使用,子类也不可访问
// 受保护的 protected 和private相似，唯一不同的是，被protected修饰的属性可以在子类中访问

export class InitData {
    id:number
    authority:number[]
    list:ListInt[]=[]
    AllData:ListInt[]=[]
    treeRef:any
    constructor(id:number,authority:string){
        this.id = id
        this.authority = authority?authority.split(',').map(v=>+v):[]
    }

}