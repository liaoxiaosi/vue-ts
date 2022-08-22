
//需要进行分页，使用二维数组
interface ListInt{  //数据类型
    userId:number,
    id:number,
    title:string,
    body:string
}
//另一个写法
// export interface ListInt{
//     userId:number,
//     id:number,
//     title:string,
//     body:string
// }
//定义接口
interface SelectDataInt{
    title:string,
    body:string,
    page:number,
    count:number, //总条数
}
export class InitData{ //将数据进行赋值，初始化
    selectData:SelectDataInt={ //定义selectData数据类型 和数据大小是SelectDataInt类型的对象
        title:'',
        body:'',
        page:0,
        count:0
    }
    // list:ListInt[]=[]  //list 是ListInt类型的数组 一维数组
    AllData:ListInt[]=[]  //AllData 是ListInt类型的数组,一次性请求全部数据后，前端进行分页和搜索，此处，是所有数据
    list:[ListInt][]=[] //声明成二维数组
    
}

export{
    ListInt
}