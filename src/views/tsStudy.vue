<template>
    <div class="studyBox">
        ts 学习
        <h4>总结：</h4>
        <div style="padding:10px;font-size:13px;border:1px solid green">
            ts中变量一开始是什么类型，那么后期赋值的时候，只能用这个类型的数据，
            是不允许用其他类型的数据赋值给当前变量
        </div>
        <div style="padding:10px;font-size:13px;border:1px solid green">
            ts的核心原则之一是对’值‘所具有的结构进行类型检查。接口（interface）用来定义对象的类型。
            接口是对象的状态（属性）和行为（方法）的抽象（描述）
        </div>
        <ul>
            <li>基础类型</li>
            <li>接口</li>
            <li>类</li>
        </ul>
        <h2>基础类型</h2>
        <div id="base">
            <h3>1.布尔值</h3>
            <div style="padding: 10px;border: 1px solid red;">
                <p>ts支持与js几乎相同的数据类型，此外还提供了实用的枚举类型</p>
                <h4>
                    布尔值：
                </h4>
                <div class='code'>
                    <div class="green">
                        基本语法： let 变量名：数据类型 = 值
                    </div>
                    let flag:boolean = true
                </div>
            </div>
            <h3>2.数字类型</h3>
            <div style="padding: 10px;border: 1px solid red;">
                <p>和 JavaScript 一样，TypeScript 里的所有数字都是浮点数。 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，TypeScript 还支持 ECMAScript
                    2015中引入的二进制和八进制字面量。</p>

                <div class='code'>
                    let a1: number = 10 // 十进制<br />
                    let a2: number = 0b1010 // 二进制<br />
                    let a3: number = 0o12 // 八进制<br />
                    let a4: number = 0xa // 十六进制
                </div>
            </div>
            <h3>3.undefined 和 null</h3>
            <div style="padding: 10px;border: 1px solid red;">
                <p>TypeScript 里，undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null。 它们的本身的类型用处不是很大：</p>

                <div class='code'>
                    let u: undefined = undefined<br />
                    let n: null = null
                </div>
                <p>非严格模式下：默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。</p>
            </div>
            <h3>4.数组</h3>
            <div style="padding: 10px;border: 1px solid red;">
                <p>TypeScript 像 JavaScript 一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组：</p>

                <div class='code'>
                    let list1: number[] = [1, 2, 3]
                </div>
                <p> {{str1}}</p>
                <div class='code'>
                    {{str2}}
                </div>
            </div>

            <h3>5.元组</h3>
            <div style="padding: 10px;border: 1px solid red;">
                <p> 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string 和 number 类型的元组。</p>

                <div class='code'>
                    let t1: [string, number] <br />
                    t1 = ['hello', 10] // OK<br />
                    t1 = [10, 'hello'] // Error
                </div>
                <p> 当访问一个已知索引的元素，会得到正确的类型：</p>
                <div class='code'>
                    console.log(t1[0].substring(1)) // OK <br />
                    console.log(t1[1].substring(1)) // Error, 'number' 不存在 'substring' 方法
                </div>
            </div>
            <h3>6.枚举</h3>
            <div style="padding: 10px;border: 1px solid red;">
                <p>enum 类型是对 JavaScript 标准数据类型的一个补充。 使用枚举类型可以为一组数值赋予友好的名字。。</p>

                <div class='code'>
                    enum Color {<br />
                    Red,<br />
                    Green,<br />
                    Blue<br />
                    }<br />

                    // 枚举数值默认从0开始依次递增<br />
                    // 根据特定的名称得到对应的枚举数值<br />
                    let myColor: Color = Color.Green // 0<br />
                    console.log(myColor, Color.Red, Color.Blue)<br />
                </div>
                <p> 默认情况下，从 0 开始为元素编号。 你也可以手动的指定成员的数值。
                    例如，我们将上面的例子改成从 1 开始编号：</p>
                <div class='code'>
                    enum Color {Red = 1, Green, Blue}<br />
                    let c: Color = Color.Green
                </div>
                <p> 或者，全部都采用手动赋值：</p>
                <div class='code'>
                    enum Color {Red = 1, Green = 2, Blue = 4}<br />
                    let c: Color = Color.Green
                </div>
                <p> 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。
                    例如，我们知道数值为 2，但是不确定它映射到 Color 里的哪个名字，
                    我们可以查找相应的名字：</p>
                <div class='code'>
                    enum Color {Red = 1, Green, Blue}<br />
                    let colorName: string = Color[2]<br />

                    console.log(colorName) // 'Green'
                </div>
            </div>
            <h3>7.object</h3>
            <div style="padding: 10px;border: 1px solid red;">
                <p>object 表示非原始类型，也就是除 number，string，boolean之外的类型。

                    使用 object 类型，就可以更好的表示像 Object.create 这样的 API。例如：</p>

                <div class='code'>
                    function fn2(obj:object):object { //第二个object表示，该函数要返回指定的类型 <br />
                    console.log('fn2()', obj) <br />
                    return {} <br />
                    // return undefined <br />
                    // return null <br />
                    }
                    console.log(fn2(new String('abc'))) <br />
                    // console.log(fn2('abc') // error <br />
                    console.log(fn2(String)) <br />
                </div>

            </div>
            <h3>8.联合类型</h3>
            <div style="padding: 10px;border: 1px solid red;">
                <p>联合类型（Union Types）表示取值可以为多种类型中的一种
                    需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值</p>

                <div class='code'>
                    function toString2(x: number | string) : string { <br />
                    return x.toString() <br />
                    }
                </div>
                <p> 需求2: 定义一个一个函数得到一个数字或字符串值的长度</p>
                <div class='code'>
                    function getLength(x: number | string) { <br />

                    // return x.length // error <br />

                    if (x.length) { // error <br />
                    return x.length <br />
                    } else {
                    return x.toString().length <br />
                    }
                    }
                </div>
            </div>
            <h3>9.类型断言</h3>
            <div style="padding: 10px;border: 1px solid red;">
                <p>通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。
                    类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
                    它没有运行时的影响，只是在编译阶段起作用。 TypeScript 会假设你，程序员，已经进行了必须的检查。</p>
                <p>类型断言有两种形式。 其一是“尖括号”语法, 另一个为 as 语法</p>
                <div class='code'>
                    /* <br />
                    类型断言(Type Assertion): 可以用来手动指定一个值的类型 <br />
                    语法: <br />
                    方式一: &lt;类型&gt;值 <br />
                    方式二: 值 as 类型 tsx中只能用这种方式 <br />
                    */ <br />

                    /* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */ <br />
                    function getLength(x: number | string) { <br />
                    if ((&lt;string>x).length) { <br />
                    return (x as string).length <br />
                    } else { <br />
                    return x.toString().length <br />
                    } <br />
                    } <br />
                    console.log(getLength('abcd'), getLength(1234))
                </div>

            </div>
            <h3>10.类型推断</h3>
            <div style="padding: 10px;border: 1px solid red;">
                <p> 类型推断: TS会在没有明确的指定类型的时候推测出一个类型
                    有下面2种情况: 1. 定义变量时赋值了, 推断为对应的类型. 2. 定义变量时没有赋值, 推断为any类型</p>

                <div class='code'>
                    /* 定义变量时赋值了, 推断为对应的类型 */ <br />
                    let b9 = 123 // number <br />
                    // b9 = 'abc' // error <br />

                    /* 定义变量时没有赋值, 推断为any类型 */ <br />
                    let b10 // any类型 <br />
                    b10 = 123 <br />
                    b10 = 'abc'
                </div>

            </div>
            <h3>11.类 类型</h3>
            <p>类的类型可以通过接口来实现</p>

            <span class="green">
                * 类可以通过接口的方式类定义当前这个类的类型<br />
                类可以实现一个接口，类也可以实现多个接口<br />
                * 注意：接口中的内容要真正的实现</span>
            <div style="padding: 10px;border: 1px solid red;">
                <p>需求: 创建人的对象, 需要对人的属性进行一定的约束</p>

                <div class='code'>
                    /* <br />
                    类的基本定义与使用<br />
                    */<br />

                    class Greeter {<br />
                    // 声明属性<br />
                    message: string<br />

                    // 构造方法<br />
                    constructor (message: string) {<br />
                    this.message = message<br />
                    }<br />

                    // 一般方法<br /><br />
                    greet (): string {<br />
                    return 'Hello ' + this.message<br />
                    }<br />
                    }<br />

                    // 创建类的实例<br />
                    const greeter = new Greeter('world')<br />
                    // 调用实例的方法<br />
                    console.log(greeter.greet())<br />
                </div>
            </div>
        </div>
        <div id="interface">
            <h2>接口interface</h2>
            <p>ts的核心原则之一是<span class="green">对值所具有的结构进行类型检查</span></p>
            我们使用接口（interface）来定义对象的类型。
            <span class="green">接口是对象的状态（属性）和行为（方法）的抽象（描述）</span>
            <div style="padding: 10px;border: 1px solid red;">
                <p>需求: 创建人的对象, 需要对人的属性进行一定的约束</p>

                <div class='code'>
                    id是number类型, 必须有, 只读的
                    <bbr />
                    name是string类型, 必须有
                    <bbr />
                    age是number类型, 必须有
                    <bbr />
                    sex是string类型, 可以没有
                </div>
            </div>
        </div>
        <div id="class">
            <h2>类class</h2>

        </div>

    </div>
</template>
<script lang="ts">
    import { ElMessage, ElMessageBox } from 'element-plus'
    import { defineComponent, reactive, onMounted, toRefs } from 'vue'
    import { useRoute } from 'vue-router'
    import { getAuthorityList } from '../api/other'
    import { InitData, QueryInt } from '../types/authority'
    export default defineComponent({
        setup() {
            // //获取当前 路由上的数据
            // const route = useRoute() //获取到当前路由实例，可获取到对应的参数
            // console.log('route', route)
            // const query: any = route.query //获取到地址栏参数

            // const data = reactive(new InitData(query.id, query.authority))
            //1.数组：定义方式有两种
            // 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组：
            let list1: number[] = [1, 2, 3]
            let list: any[] = [1, true, 'free']  //不指定数组类型


            //   第二种方式是使用数组泛型，Array<元素类型>：
            let list2: Array<number> = [1, 2, 3]

            //2.元组
            /**
             *   元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
             比如，你可以定义一对值分别为 string 和 number 类型的元组。
            */
            let t1: [string, number]
            t1 = ['hello', 10] // OK
            // t1 = [10, 'hello'] // Error

            // 当访问一个已知索引的元素，会得到正确的类型：
            console.log(t1[0].substring(1)) // OK
            // console.log(t1[1].substring(1)) // Error, 'number' 不存在 'substring' 方法

            //3.object 
            /**object 表示非原始类型，也就是除 number，string，boolean之外的类型。
             * 
             * 使用 object 类型，就可以更好的表示像 Object.create 这样的 API。例如：
             * 
            */
            function fn2(obj: object): object { //第一个object表示传入的参数必须是object类型
                console.log('fn2()', obj)
                return {}
                // return undefined   //报错  第二个object表示，该函数要返回指定的类型 object
                // return null  //报错  第二个object表示，该函数要返回指定的类型 object
            }
            console.log(fn2(new String('abc')))
            // console.log(fn2('abc') // error
            console.log(fn2(String))

            //枚举
            // enum 类型是对 JavaScript 标准数据类型的一个补充。 使用枚举类型可以为一组数值赋予友好的名字。
            //枚举数值默认从0开始依次递增，也可手动设置，名称不能重复
            //根据特定的名称得到对应的枚举数值
            enum Color {
                // red,
                red = 200,
                green,
                blue
            }
            let myColor: Color = Color.green //如果赋值red=200 ,那么，此处为201
            // console.log('Color 枚举', Color)
            // console.log('Color 获取数值', myColor, Color.red, Color.blue)
            // console.log('根据数值，找到对应的名字', Color[200]) //red

            //枚举中的元素，可以是中文的数据值，但是不推荐
            enum Gender {
                女,
                男
            }
            // console.log(Gender.女) //得到数值0
            enum MSGS {  //可以是字符串
                "操作成功" = 200,
                "密码错误",
                "账号错误",
                "请求异常",
            }

            //void:在函数声明的时候，小括号后面添加 :void,代表该函数没有返回值
            function Func(): void {
                console.log('不返回值')
                // return  
                // return 'hhh' //报错
                //  return undefined  //undefined
                // return null //报错
            }
            // console.log('返回值', Func()) //结果是undefined
            //定义void类型的变量，可以接收一个undefined的值，但是意义不大
            let vd: void = undefined

            //object 类型
            //定义一个函数，参数是object类型，返回值是object类型
            function objfun(obj: object): object {
                console.log('object---', obj)
                return { name: 'alisa', age: 12 }
            }
            // console.log(objfun(123)) //报错
            // console.log(objfun('1245')) //报错
            // console.log(objfun(new String('123'))) //通过
            // console.log(objfun(new Number(12))) //通过 new Number(12) 对象里有数字
            // console.log(objfun(String))  //String 是一个方法函数

            //联合类型 （union Types）
            //表示取值可以是多种类型中的一种
            //例子 定义一个函数得到一个数字或字符串值的字符串形式值
            function getnumstr(str: string | number): string {
                return str.toString()
            }

            //类型断言： 告诉编辑器，我知道自己是什么类型，也知道自己在干什么
            // 可以用来手动指定一个值的类型

            //类型断言有两种方式：

            //1.尖括号语法  <类型>值
            //2.值 as 类型 ，在tsx中只能用此方法

            //例子 定义一个函数，得到一个数字或字符串值的长度
            // function getLen (str:number|string):number{
            //     //如果传入的是字符串，可以直接得到长度，如果是数字，需要调用str.toString()方法
            //     //会报错，因为如果是number类型，是无法直接拿到长度的
            //     // if(str.length){ 
            //     //     return str.length
            //     // }else{
            //     //     return str.toString().length

            //     // }
            //     // 报错，用不了尖括号方法进行类型断言
            //     // if((<string>str).length){
            //     //     return  (<string>str).length
            //     // }
            //     // else{
            //     //     return str.toString().length

            //     // }
            // }
            function getLen(str: number | string): number {
                if (str as string) {
                    return (str as string).length
                } else {
                    return str.toString().length
                }
            }

            //类型推断：在没有明确的指定类型的时候，推测出一个类型
            let tss = 100 //推断出是number类型
            // tss='hfdsj '  //报错 推断出是number类型，所以，赋值时string类型的时候会报错

            let anytxt
            anytxt = 100
            anytxt = '因为声明的时候没有给定值，推断出是any类型，所以赋值啥都可以'


            //接口：是对象的状态（属性）和行为（方法）的抽象（描述）
            // 接口：是一种类型，一种规范，是一种规则，是一个能力，是一种约束
            //定义一个接口，使用该接口就需要遵循该接口的规范/规则，受其约束
            //例子 
            //需求：创建人的对象，需要对人的属性进行一定的约束
            /* 
            在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
            接口: 是对象的状态(属性)和行为(方法)的抽象(描述)
            接口类型的对象
                多了或者少了属性是不允许的
                可选属性: ?
                只读属性: readonly
            */

            // id是number类型, 必须有, 只读的
            // name是string类型, 必须有
            // age是number类型, 必须有
            // sex是string类型, 可以没有

            //定义一个接口，该接口作为person对象的类型使用，限定或者是约束该对象中的属性数据
            interface Iperson {
                readonly id: number
                name: string
                age: number
                sex?: string

            }
            //使用该接口
            const person: Iperson = {
                id: 1,
                name: 'lucky',
                age: 18,
                sex: '女'
            }
            // person.id=100  //加了readonly后不允许修改，
            // console.log(person)

            // const 和 const 对比：readonly只能是用在属性上，const 是作为一个变量
            // 最简单判断该用 readonly 还是 const 的方法是看要把它做为变量使用还是做为一个属性。 
            // 做为变量使用的话用 const，若做为属性则使用 readonly

            //*********函数类型：通过接口的方式作为函数的类型来使用
            /**
             * 为了使用接口表示函数类型，我们需要给接口定一个一个’调用签名‘。
             * 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型
             * **/

            //定义一个接口，用来作为某个函数的类型使用
            //总结：接口可以描述函数类型（参数类型，和返回类型）
            interface ISwarchFunc {
                //调用签名：写在小括号里，定义函数的参数
                //该函数的需求是：传进来两个字符串，在第一个字符串里找第二个字符串，
                // 看第二个字符串在第一个字符串中是否存在
                //找没找到呢，返回一个boolean类型
                //定义一个调用签名:
                //参数：source,substring 
                //返回类型：boolean
                (source: string, substring: string): boolean
            }
            //定义一个函数，该类型就是上面定义的接口
            //search,indexOf 匹配出符合字符串索引的位置，如果找不到就返回-1 ，search可以匹配正则表达式，indexOf不行
            const searchString: ISwarchFunc = function (source: string, substring: string): boolean {
                return source.search(substring) > -1
            }

            //调用函数
            console.log(searchString('hahha,你人才啊', 'haha'))
            const arm = [{ name: 'lili', id: 1 }, { name: 'sary', id: 2 }]
            const find = arm.find(item => item.id === 1)  //返回的是匹配项，对象，不是数组
            const some = arm.some(item => item.id === 1)  //返回的是 true,false
            console.log('find,some', find, some)

            let searctxt = '测试字符串，用search,find,indexOf查找'
            // console.log('字符串search',searctxt.search('search'))  //找得到，返回下标
            // console.log('字符串indexof',searctxt.indexOf('search'))  //找得到，返回下标
            // console.log('substring',searctxt.substring(12))  //h,find,indexOf查找
            // console.log('substring,两个值',searctxt.substring(1,12))  //测试字符串，用searc
            //类 ：类的类型可以通过接口来实现
            //定义一个接口
            interface IFly {
                //该方法没有任何的实现
                //    fly():any
                fly(): void
            }
            //定义一个类 类型，这个类的类型就是上面定义的接口
            //(实际上也可以理解为，IFly接口约束了当前这个Person类)
            //    implements:实现
            class NPerson implements IFly {
                //实现接口中的方法
                fly() {
                    console.log('我不会飞，我不是超人')
                }

            }
            //实例化对象：将类实例化
            const peaple = new NPerson()
            peaple.fly()

            //在定义一个接口 
            interface ISwim {
                swim(): void  //一定要定义返回值，否则报错
            }

            //注：一个类可以实现多个接口(一个类可以被多个接口约束)
            class NPerson2 implements IFly, ISwim {
                fly() {
                    console.log('我可以飞')
                }
                swim() {
                    console.log('我会游泳了')
                }

            }
            //实例化 类
            const peaple2 = new NPerson2()
            peaple2.swim()

            //    /**总结：
            //     * 类可以通过接口的方式类定义当前这个类的类型
            //     * 类可以实现一个接口，类也可以实现多个接口
            //     * 注意：接口中的内容要真正的实现
            //     ** /

            //接口可以继承其他的多个接口
            interface imyflyswim extends IFly, ISwim { }

            //再定义一个类，直接实现 imyflyswim这个接口
            class NPerson3 implements imyflyswim {
                fly() {
                    console.log('多个我飞了')
                }
                swim() {
                    console.log('多个我游泳了了')
                }
            }

            const peaple3 = new NPerson3()
            peaple3.fly()
            peaple3.swim()

            //总结：接口和接口之间叫继承（使用的是extends关键字），类和接口之间叫实现（使用的是implements）

            //类：可以理解为模板，通过模板可以实例化对象（是面向对象的编程思想）
            //ts中类的定义及使用
            //继承：类与类之间的关系
            //继承后，类与类之间的叫法：
            //A类继承了B这个类，那么此时，A类就叫子类，B类就叫基类
            // 子类 --->派生类
            // 基类---->超类（父类）
            //一旦发生了继承关系，就出现了父子类的关系（叫法）
            class Ley {  //Ley作为一个基类（父类，超类）
                //定义属性
                name: string
                age: number
                gender: string
                hh = 'hh直接类型推断'
                //定义构造函数
                constructor(name: string, age: number, gender: string) {
                    //更新属性数据
                    this.name = name
                    this.age = age
                    this.gender = gender
                }

                //定义实例化方法
                sayHi(str: string) {
                    console.log(`我是：${this.name},${str},${this.hh}`)
                }

            }

            //定义一个类，继承自ley
            class Student extends Ley {
                constructor(name: string, age: number, gender: string) {
                    //调用父类中的构造函数，使用super
                    super(name, age, gender)
                }


                //调用父类中的方法
                sayHi22() { //没有传参数，
                    // console.log('我是学生类中的sayHi')
                    //使用super调用父类中的方法，且可以改继承到的父类方法，如果，可以不传参数
                    super.sayHi('有点累')

                    //获取父类中的 hh
                    console.log('用super获取父类中的成员', this.hh)

                }
            }

            //实例化ley
            const father = new Ley('不要', 18, '造孽')
            father.sayHi('开心')

            //实例化student
            const student = new Student('你不是', 22, '吗')
            student.sayHi22()

            //总结：
            //1.类和类之间如果有继承关系，需要用 extends关键字
            //2.子类中可以调用父类中的构造函数，使用的是super关键字（包括调用父类中的实例方法，也可以使用super）
            //3.子类中可以重写父类的方法

            //*******多态
            //父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法产生了不同的行为

            //定义一个父类
            class Animal {
                name: string //定义一个属性
                //定义一个构造函数
                constructor(name: string) {
                    //更新属性值
                    this.name = name
                }
                //定义一个方法
                run(distance = 800) { //参数distance给个默认值 0 
                    console.log(this.name, `${distance}米田径比赛`)
                }
            }

            //定义一个子类
            class Dog extends Animal {
                //构造函数
                constructor(name: string) {
                    //调用父类的构造函数，实现子类中属性的初始化操作
                    super(name)
                }
                //方法，重写父类中的实例方法
                run(distance = 5) {  //因为给了初始值，所以，直接用了类型推断，不需要再什么数据类型
                    console.log(`跑了${distance}米这么远的距离------dog`, this.name)
                }
            }

            //定义一个子类
            class Pig extends Animal {
                //构造函数
                constructor(name: string) {
                    //调用父类的构造函数，实现子类中属性的初始化操作
                    super(name)
                }
                //方法，重写父类中的实例方法
                run(distance = 10) {
                    console.log(`跑了${distance}米这么远的距离------pig`, this.name)
                }
            }

            //实例化父类对象 ani:Animal 类类型
            const ani: Animal = new Animal('动物园')
            ani.run()
            //实例化子类对象
            const dog: Dog = new Dog('小猪')
            dog.run()

            //实例化子类对象
            const pig: Pig = new Pig('小狗')
            pig.run()

            console.log('------------创建父类类型的子类实例----------')

            //父类和子类的关系：父子关系，此时，用父类 类型创建子类的对象
            const dog1: Animal = new Dog('小黄')
            dog1.run()
            const pig1: Animal = new Pig('小花')
            pig1.run()



            //该函数需要的参数是Animal类型的
            function showRun(ani: Animal) {
                ani.run() //ani参数是父类类型
            }
            //属于 Animal类型的数据类型对象有 ：pig1,dog1,ani  (都是子类对象)
            showRun(ani)
            showRun(dog1)
            showRun(pig1)

            //*************类修饰符
            //类 修饰符：公共的，私有的，与受保护的
            // 修饰符--》类中的成员的修饰符 ：主要是描述类中的成员（属性，构造函数，方法）的可访问行
            //类中的成员都有自己的默认的访问修饰符，public
            //public---公共的 修饰符，类中共成员默认的修饰符，代表的是公共的，任何位置都可以访问类中的成员
            //private---私有的 修饰符，类中的成员如果使用private修饰符，那么，类外部是无法访问这个成员的数据的，子类中也无法访问该成员的数据
            //当然，子类中也是无法访问该成员的数据的

            //protected  ----受保护的 ,类中的成员如果使用protected来修饰，那么外部是无法访问这个成员数据的，，子类中可以访问
            //定义一个类
            class Xiu {
                //属性
                //pretected 
                private name: string
                //构造函数
                // private constructor(name:string){ 
                public constructor(name: string) {
                    //更新属性
                    this.name = name
                }
                //方法
                //  protected eat(){
                eat() {
                    console.log('类中可以访问类型中的私有成员', this.name)
                }
            }

            //定义一个子类:super 只能在派生类中使用
            class Xstu extends Xiu {
                //构造函数
                constructor(name: string) {
                    super(name)  //如果父类中，cunstructor使用的不是private，子类可以访问
                    //  super(name)  //报错
                    //即使Xiu类中对name使用了private，
                    //派生类（子类）的constructor中不可以访问该成员中的数据
                }
                //  console.log(this.name) //子类中无法访问父类中的私有属性成员
            }

            //实例化对象
            const per = new Xiu('公共属性')
            //类的外部可以访问类中的属性成员
            //  console.log(per.name)  //private 后，不可以访问 ，报错
            per.eat()  //默认public可访问  用了protected 不可访问

            const xstu = new Xstu('应该是可以的')
            xstu.eat()
            //  console.log(xstu.name) //报错，因为private修饰的属性，只能在该类和子类中使用，不能在外部使用

            //类 readonly 修饰符：
            //1.修饰类成员 ’属性‘
            // 是一个关键字，对类中的属性成员进行修饰，修饰后，该属性成员就不能再外部被随意修改了
            //构造函数中，可以对只读属性成员的数据进行修改
            //定义一个类型
            class Read {
                //属性
                readonly name: string
                constructor(name: string) {
                    this.name = name
                }

                sayNo() {
                    console.log('这是readonly类')
                    //类的普通方法中，不能修改readonly修饰的成员属性值
                    // this.name = '类中方法无法修改readonly属性进行修改'  //报错
                }
            }

            //实例化对象
            const readst = new Read('readonly---')
            console.log('readonly属性name', readst.name)

            // readst.name = '我可以修改吗？不行----'  //报错，此时无法修改

            //2.readonly修饰类中的构造函数中的参数（参数属性）
            //类构造函数中的参数，一旦使用readonly进行修饰后，那么该参数就叫参数属性，而该类就新增了一个属性成员
            //外部无法修改类中该属性成员

            //以此类推，构造函数中共，参数使用了 protected, public ，private, readonly修饰后，
            // 类中就自动添加了相对于修饰符的属性成员
            class Rdd {
                // constructor(readonly name:string){
                constructor(public name: string) { //类中就有了 属性成员 name
                    this.name = name
                }
            }
            //实例化
            const rdd = new Rdd('我是直接变成Rdd中的属性了吗') //如果没有readonly 将直接报错

            console.log('-------------------setters和getters----------------')
            //存取器：让我们而已有效的控制对 对象中的成员进行访问，用getters/setters来进行操作

            //需求：外部可以传入姓氏和名字数据，同事使用set 和get 控制姓名的数据，外部可以进行修改操作


            class Cunq {
                ftname: string  //姓氏
                ltname: string  //名字

                constructor(ftname: string, ltname: string) {
                    this.ftname = ftname
                    this.ltname = ltname
                }

                //姓名的成员属性（外部而已访问，也可以修改）
                //读取器  ----负责读取数据
                get fullName() {
                    //姓名 === 姓氏+名字的拼接
                    return this.ftname + '-' + this.ltname
                }

                //设置器 ----负责设置/修改 数据
                // set fullName(val){
                //     //姓名 ---> 把姓名和姓氏获取到，之后重新赋值给ftname ltname
                //     let names = val.split('-')
                //     console.log(names)
                //     this.ftname = names[0]
                //     this.ltname = names[1]
                // }
            }
            //实例化对象
            const pps: Cunq = new Cunq('东方', '不败')
            console.log('类使用get后------------', pps)


            //设置该属性的数据
            // pps.fullName = '诸葛-菜花'  //没有写set方法时 报错，因为是只读属性，所以，需要用set方法
            // console.log('set====',pps.fullName)  //获取get中的值 ==>东方不败

            //类 静态成员：在类中通过static修饰的属性或方法，那么就是静态的属性及静态的方法
            //静态成员在使用的时候时通过：类名. 这种语法调用

            //静态成员有两个：1.静态属性，2.静态方法

            //定义一个类
            class Prsn {
                //静态属性：不能通过实例对象，直接调用静态属性
                //因为类中默认有一个内置的name属性，所以，不能定义 static name:xx 属性，会报错

                static name2 = '可以'
                name3 = 'name3不是静态属性'
                constructor() {
                    console.log('声明静态成员后，---------------', this.name3, Prsn.name2)  //需实例化后方可访问
                    //此时this是实例对象，name2是静态属性，
                    //不能通过实例对象直接调用静态属性来使用
                    // console.log('构造函数内部可以获取到静态属性吗',this.name2) //不能，
                }
                //静态方法
                static sayWhat() {
                    console.log('萨瓦迪卡', Prsn.name2)  //只能通过 类.静态属性 方法访问数据
                }
            }

            //实例化
            const peew: Prsn = new Prsn()
            //通过实例对象调用的方法，实例属性
            // console.log('peew---',peew.name2)  //外部无法获取到静态属性
            //通过实例对象，实例方法
            // peew.sayWhat()
            //通过：类名.静态属性 的方式来访问该成员数据
            console.log(Prsn.name2)  //静态属性需要通过 : 类.静态属性 来调用
            //通过：类名.静态属性 的方式来设置该成员数据
            Prsn.name2 = '改静态属性啊'
            console.log('修改静态属性后---', Prsn.name2)
            //通过：类名.静态方法 的方式来调用类内部的静态方法
            Prsn.sayWhat()
            console.log('***********抽象类***********')
            /**
             * 抽象类： 包含抽象方法 （抽象方法一般没有具体内容的实现），
             * 也可以包含实例方法，且抽象类不能被实例化。
             * 为了让子类进行实例化及实现内部的抽象方法
             * 注：抽象类的目的/作用都是为子类服务的
             * **/

            // 如果类多了，抽象类很有用
            //定义一个抽象类: abstract ，描述的是动物吃东西，怎么吃
            abstract class Abst {
                //抽象方法：抽象方法不能有具体的实现
                //报错了
                // abstract eat(){  //方法eat不能具有实现，因为它标记为抽象了
                //     // console.log('不能实现')  
                // }

                //抽象属性: 没有必要再抽象类中定义抽象属性
                abstract name: string
                //抽象方法
                abstract teat(): any

                //实例方法
                sayHi() {
                    console.log('实例对象')
                }

            }

            //不能实例化抽象类的对象
            // const why:Abst = new Abst() //报错

            //定义一个派生类（子类）。
            class Adog extends Abst {

                //实现抽象类中的抽象属性
                name = '是抽象属性啊'
                //方法，实现小狗怎么吃东西
                //重新实现抽象类中的方法，此时这个方法就是当前Adog类的实例方法
                teat() {
                    console.log('小狗是舔着吃')
                }
            }

            //实例化Adog对象
            const adog: Adog = new Adog()
            // adog.teat()
            // adog.sayHi()  //调用的是抽象类中的实例方法

            //----------函数----------
            //    函数：封装了一些重复使用的代码，再需要的时候直接调用即可
            //函数声明，命名函数 ,js写法
            //  function add(x,y){ //求和函数
            //     return x+y
            //  }

            // 函数表达式，匿名表达式
            // const add2 = function(x,y){
            //     return x+y
            // }

            //ts写法
            //函数声明，命名函数 ,js写法
            //  function add(x:string,y:string):string{ //求和函数
            //     return x+y
            //  }

            // 函数表达式，匿名表达式
            // const add2 = function(x:string,y:string):string{
            //     return x+y
            // }

            //完整的函数写法
            //add3 --->变量名--->函数add3
            // (x:string,y:string)=>string 当前这个函数的类型
            // function(x:string,y:string):string{return x+y } 相当于符合add3函数类型的值
            // const add3:(x:string,y:string)=>string = function(x:string,y:string):string{
            //    return x+y
            // }
            //----------函数：可选参数，默认参数----------
            //  默认参数：函数再声明的时候，内部的参数有自己的默认值，此时这个参数据叫默认参数
            //可选参数：函数声明的时候，内部的参数使用了？进行修饰，那么该参数表示，可以传，也可以不传
            //需求
            //如果不传入任何参数，返回一个默认值
            //如果传入其中一个，那就放回其中一个
            //  const add2 = function(ftname='东方',ltname?:string):string{
            //     if(ftname){
            //         return ftname+ltname
            //     }else{
            //         return ftname
            //     }

            // }
            //----------函数：剩余参数 rest----------
            //剩余参数：js中用arguments表示，ts中:rest 
            //注意：剩余参数必须是数组形式，要放在所有参数后面，否则报错
            // ...args:string[]  --->剩余的参数，放在了一个字符串的数组中，args里面
            //  function showMsg(str:string,...args:string[],str3:string){ //报错
            // function showMsg(str:string,str3:string,...args2:string[]){
            function showMsg(str: string, str3: string, ...args2: any) {
                console.log(str)
                console.log(args2)//['b','c']

            }
            showMsg('1', 'b', [{ k: 'c', s: '35' }])
            //----------函数：函数重载----------

            //函数重载：函数名字相同，函数的参数及个数不同
            //函数重载声明
            // function add4(x:string,y:string):string
            // function add4(x:number,y:number):number
            // function add4(x:string | number,y:string | number):string | number{
            //     // return x + y  //不能这么写，因为有可能是字符串，数字混合，没法加
            //     if(typeof x==='string' && typeof y === 'string'){
            //         return x + y //字符串拼接
            //     }else if(typeof x ==='number' && typeof y ==='number'){
            //         return x+y  //数字相加

            //     }
            // }

            // console.log(add4('hh','12')) //ts应该提示错误的信息，并且报红  加了函数重载后，此行标红了

            //*************泛型**********
            //泛型：在定义函数，接口，类的时候，不能预先确定要使用的数据的类型，而是在使用函数/接口/类的时候才能确定数据的类型

            //需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量
            //函数的作用：根据数量产生对应个数的数据，存放在一个数组中

            //定义一个函数
            function getArr(value: number, count: number): number[] {
                //根据一个数据和数量产生一个数组
                const arr: number[] = []
                for (let i = 0; i < count; i++) {
                    arr.push(value)
                }
                return arr

            }
            const arr1 = getArr(123.3, 2)
            // console.log('arr1',arr1)

            //此时，想要传入任意类型的数据，返回来的是存储这个任意类型的数组
            // function getArr2(value:any,count:number):any[]{
            //     //根据一个数据和数量产生一个数组
            //     const arr:any[]=[]
            //     for(let i=0;i<count;i++){
            //         arr.push(value)
            //     }
            //     return arr

            // }
            // const arr2 = getArr2(123.3,2)

            //由于使用any没有智能提示，而且用any也不好，所以，在不确定数据类型的时候，可以使用泛型
            //可以不是T，是其他的,用大写字母
            // function getArr3<T>(value:T,count:number):T[]{
            //     //根据一个数据和数量产生一个数组
            //     // const arrs:T[]=[]
            //     const arrs:Array<T> = []
            //     for(let i=0;i<count;i++){
            //         arrs.push(value)
            //     }
            //     return arrs

            // }
            // const array1 = getArr3<number>(2.523,2)
            // const array2 = getArr3<string>('gjhh',2)
            //     console.log(array1[0].toFixed(2))

            function msg<k, v>(value1: k, value2: v): [k, v] {
                return [value1, value2]
            }
            const msr1 = msg < string, number> ('merry', 12)
            console.log(msr1[0].split(''))

            //**************泛型接口：常用************
            //用的比较多，好用
            //使用场景：通过一个接口去约束函数，或者是类的时候，类或者函数中用到的一些类型，
            // 这些类型不可预知的时候，可用泛型接口

            //泛型接口：在定义接口时，为接口中的属性或方法定义泛型类型，
            //在使用接口时，再指定具体的泛型类型

            //需求：定义一个类，存储用户相关信息（id,名字，年龄)
            //通过一个类的实例对象调用add方法可以添加多个用户信息对象，调用getUsrId方法可以根据id获取某个指定的用户信息
            //定义一个泛型接口,接口指定泛型类型IBaseCRUD<T>
            // interface IBaseCRUD<T> {
            //     data: Array<T>  //将来这个数组具体类型不确定，给泛型
            //     add: (t:T) => T  //add将来传的参数 具体类型不确定，可能是User类型，也可能是其他的，所以，传T，返回值也是T
            //     getUserId: (id: number) => T  //此处参数确定是传的id number类型，返回的值类型，不确定，用T
            // }

            // //定义用户信息的类
            // class Userc {
            //     age: number
            //     id?: number  //可选代表 可有可无
            //     name: string
            //     constructor(name:string,age:number){
            //         this.name = name
            //         this.age = age
            //     }
            // }

            // //定义一个类，可以针对用户的信息对象进行增加及查找操作，
            // //CRUD  ---> create,read,update,delete 增删改查(再次代表)
            // //该类使用 泛型接口IBaseCRUD , 并指定其类型 Userc
            // // class UserCRUD implements IBaseCRUD<Userc>{
            // class UserCRUD implements IBaseCRUD<Userc> {
            //     // data: 用来保存多个User类型的用户信息对象，是个数组
            //     data: Array<Userc> = []

            //     //添加方法，用来存储用户信息对象,以后参数类型不一定，返回的值类型也不一定
            //     add(user: Userc):Userc {
            //         //产生id
            //         user.id = Date.now() + Math.random()  //为了避免重复，加了个随机数
            //         //将用户信息添加到data数据中
            //         this.data.push(user)
            //         console.log('???this.data',this.data)
            //         return user
            //     }
            //     //用来根据id查找指定的用户信息对象，返回的值类型不确定，需要一个泛型接口
            //     getUserId(id: number|any):Userc|any {
            //         console.log('拿到id了没-----',id)
               
            //         return this.data.find(user => user.id === id)
            //     }

            // }
            // //实例化添加用户信息对象的类
            // const userCRUD:UserCRUD = new UserCRUD()
            // userCRUD.add(new Userc('jack',20))
            // userCRUD.add(new Userc('siri',20))
            // const { id } = userCRUD.add(new Userc('lily',23))
            // console.log('id呢---',id)
            // // console.log('搜索后----',userCRUD.getUserId(id))
            // userCRUD.getUserId(id)

            //练习泛型 
            //需求，对一个管理员类型进行增删查改
            //定义一个类，管理员信息
            class InfoUs {
                id?:number //id可以现场输入，也可以自己产生
                admin:string  //管理员 类型
                typeid:number  //管理员类型编号

                //id可传可不传
                constructor(admin:string,typeid:number,id?:number){
                // constructor(admin:string,typeid:number){
                    if(admin&&typeid&&id){
                        this.id = id
                        this.admin = admin
                        this.typeid = typeid
                    }else{
                        this.admin = admin
                        this.typeid = typeid
                    }
                    // this.admin = admin
                    // this.typeid = typeid
                    
                    

                }
            }

              /**
               * 1. 定义一个类，可以针对用户的信息对象进行增加及查找操作，
               * 发现，其相关方法应传泛型参数，
               *  2.定义一个泛型接口，该接口的类型不确定，里面的方法参数类型不确定，所以使用泛型且传入泛型参数T，作为里面的方法和属性的参数类型约束
               *    该类使用此接口，指定该接口类型
               * **/
               //定义一个泛型接口,定义1个属性，三个方法：增加，删除，查找
            //    当前操作对象类型：arry ，add：添加方法，search：查找方法 delete:查找方法
             interface InfobaseCRUD<T>{
                data:Array<T>
                add:(t:T)=>T  // (t:number)=>T ----->(t:T) 表示该函数参数的类型  =>T 表示该函数返回的值类型
                search:(id:number)=>T
                delete:(id:number)=>T
             }

               //该类使用 泛型接口IBaseCRUD , 并指定其类型 InfoUs
            //    CRUD  ---> create,read,update,delete 增删改查（在此代表)

            class InfoCRUD implements InfobaseCRUD<InfoUs> {
                data:InfoUs[]=[]
            
                add(info: InfoUs):InfoUs {
                    // 如果id 没有传，现场产生一个
                    //产生id
                    if(!info.id){
                        info.id = Date.now() + Math.random()  //为了避免重复，加了个随机数
                    }
                    //将用户信息添加到data数据中
                    this.data.push(info)
                    console.log('???this.data',this.data)
                    return info
                }
                //因为id是可选参数，考虑到可能还没有数据的时候，所以，加any
                search(id:number|any):InfoUs|any{
                    console.log('拿到id了没-----',id)
                    return this.data.find(info=>info.id === id)
                }
                delete(id:number|any):InfoUs|any{
                    console.log('删除拿到id了没-----',id)
                    return this.data.filter(i=>i.id !== id)
                }
            }
            //实例化 类 
            const info:InfoCRUD = new  InfoCRUD()
            info.add(new InfoUs('管理员',1))  //传的参数，应该是类 InfoUs类型，可直接实例
            const obj1:InfoUs={admin:'超级管理员',typeid:2,id:1545666}
            info.add(obj1) 
           const { id } =  info.add({admin:'vip管理员',typeid:3})  //传的参数，应该是类 InfoUs类型，可直接赋值 
            //查找vip
            info.search(id)  
            //删掉vip
            info.delete(id)  


            //总结：接口可以传参数，泛型参数，（参数类型是类，因为类可以进行数据处理，可以存数据）
            //泛型接口：可以用来约束/描述 类，函数

           
        //   定义一个类，用来描述要接收的数据，因为要接收的数据类型不确定，用了泛型 类
          class FanInfo<T>{
              str?:string  //传不传都行吧
              value:T
              constructor(value:T,str?:string){
                  if(value&&str){
                    this.value = value
                    this.str = str
                  }else{
                    this.value = value
                  }
                  
              }
          }
        //要使用泛型接口，就得使用类，所以，有方法的话要写在类里面
            // function arrArr<T>(str:T):T[]{
            //     return [str]
            // }

            //实例化类 FanInfo
            // const fanxInfo = new FanInfo({name:'啥都行'},'str字符串啊')
            // console.log('我呢',new FanInfo('heih','又是我'))
            // console.log(fanxInfo)

             //泛型接口练习
            //需求，定义一个泛型接口，这个接口使用的数据不定
            interface Funx<T>{
                arr:T[]
                add:(t:T)=>T

            }
            //定义一个类使用 泛型接口,但是，该泛型接口 Funx 传入数据类型不确定，现在使用，可以定义一个类型
            //接口是用来描述对象的
            //泛型接口的类型只能用类，因为类才可以传入数据啊，类才能存储数据
            class Fax{
                name:string
                id:number
                constructor(name:string,id:number){
                    this.name = name
                    this.id = id
                }
            }
            // (接口有什么，类就要有什么，不能多也不能少)
            class UseFanx implements Funx<Fax>{
                arr:Fax[]=[]  //数组类型是 Fax类型的数组
                add(info:Fax):Fax{  //存入啥就是啥
                    this.arr.push(info)
                    console.log('???加进去了没',this.arr)
                    return info
                }
            }
            const ky = new UseFanx()

            //****************泛型类***********
            //定义一个类，类型红的属性值的类型是不定的，方法中的参数及返回值是不定 
            //定义一个泛型类
            // class GenderNum<T>{
            //     defaultVal:T  //默认属性的值 类型是泛型类型
            //     constructor(defaultVal:T){
            //         this.defaultVal = defaultVal
            //     }
            //     add:(x:T,y:T)=>T  //报错 此写法
            //     // add(x:T,y:T):T{
            //     //     console.log('x',x+y)
            //     //     return x
            //     // }
               
            // }

            //在实例化类的对象的时候，再确定泛型的类型
            // const g1: GenderNum<number>= new GenderNum<number>(10)
            // //设置属性值
            // g1.defaultVal = 100
            // console.log(g1)
            // //相加的方法
            // g1.add = function(x,y){
            //     return x+y
            // }
            // // console.log(g1.add(10,20))
            //***************泛型约束
            //如果我们直接对一个泛型参数取 length 属性，会报错，因为这个泛型根本不知道它有这个属性
            //定义一个接口，用来约束将来某个类型中必须要有length这个属性
            interface Ilen {
                //接口中有一个属性 length
                length:number
            }
            // function getLeng<T>(x:T){
            //     return x.length
            // }
            function getLeng<T extends Ilen>(x:T){
                return x.length
            }
            // console.log(getLeng('haha我可以哦'))
            // console.log(getLeng(18))//报错，必须要有length属性  number没有这个属性

            //********************声明文件:主要***********
            //当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能
            //例如，引入jq
            //import Jq from 'jquery'

            
            //使用jq ，响应方法没有提示，希望有提示：=》定义操作
            //Jq('选择器')
            
            //定义操作 : 这种声明一般放入单独的文件（声明文件），一般命名: xx.d.ts
            //如，jq的 可以命名为 jQuery.d.ts ，不需要引入，直接生效
            // decllare var Jq:(selector:string) => any
            
            //但是，一个库方法那么多，一个个添加不合理，通常可以直接下载声明文件 例如jq :npm install @types/jquery --save-dev
            
            //*******内置对象***********
            /* 1. ECMAScript 的内置对象 */
            //Boolean 等都是大写开头，表示是对象，不是数据类型
            // let b: Boolean = new Boolean(1)
            // let n: Number = new Number(true)
            // let s: String = new String('abc')
            // let d: Date = new Date()
            // let r: RegExp = /^1/
            // let e: Error = new Error('error message')
            // b = true
            // let bb: boolean = new Boolean(2)  // error
            
            return {
                // ...toRefs(data)
                str1: '第二种方式是使用数组泛型，Array<元素类型>：',
                str2: 'let list2: Array<number> = [1, 2, 3]',

            }
        }
    })

</script>
<style>
    .code {
        margin-top: 15px;
        padding: 10px;
        background-color: rgb(216, 213, 213);
    }

    .green {
        color: green;
    }

    .studyBox {
        height: calc(100vh - 100px);
        overflow: auto;
    }

    h2 {
        padding: 10px 0;
    }
</style>