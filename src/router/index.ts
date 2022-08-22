import { createRouter, createWebHashHistory, RouteRecordRaw, useRoute } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//DA
// import order from '@/views/OrderView.vue'
// import userList from '@/views/UserView.vue'
// import roleList from '@/views/RoleView.vue'
// import authority from '@/views/AuthorityView.vue'
// import tsstudy from '@/views/tsStudy.vue'
import { getRouter } from '../api/other'
import { ComponentOptions } from 'vue'
//对组件进行定义,用于添加   DA
// const Route:ComponentOptions={
//   'order':order,
//   "userList":userList,
//   "roleList":roleList,
//   "authority":authority,
//   "tsstudy":tsstudy
// }

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: 'order',
    component: HomeView,
    children:[],
    // children: [
    //   {
    //     path: '/authority',
    //     name: 'authority',
    //     meta: {
    //       isShow: false,  //不展示在菜单列表
    //       title: '权限列表'
    //     },
    //     component: () => import('../views/AuthorityView.vue')
    //   }
    // ],
    // children: [{
    //   path: '/order',
    //   name: 'order',
    //   meta: {
    //     isShow: true, //用于来判断是否显示在最外层数组里
    //     title: '订单列表'
    //   },
    //   component: () => import('../views/OrderView.vue')
    // },
    // {
    //   path: '/userList',
    //   name: 'userList',
    //   meta: {
    //     isShow: true,
    //     title: '用户列表'
    //   },
    //   component: () => import('../views/UserView.vue')
    // }, {
    //   path: '/roleList',
    //   name: 'roleList',
    //   meta: {
    //     isShow: true,
    //     title: '角色列表'
    //   },
    //   component: () => import('../views/RoleView.vue')
    // }, {
    //   path: '/authority',
    //   name: 'authority',
    //   meta: {
    //     isShow: false,  //不展示在菜单列表
    //     title: '权限列表'
    //   },
    //   component: () => import('../views/AuthorityView.vue')
    // }

    // ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//路由拦截：
//1.路由发生变化之前拦截处理，
//2.路由发生变化之后拦截处理，
//3.路由出错后处理

//路由守卫
/***
 *  每次通过vue-router进行页面跳转，都会触发beforeEach这个钩子函数，
    这个回调函数共有三个参数，to，from，next这三个参数，
    to表示我要跳转的目标路由对应的参数，from表示来自那个路由，
    就是操作路由跳转之前的，即将离开的路由对应的参数，next是一个回调函数，
    一定要调用next方法来resolve这个钩子函数；
 */


//路由拦截思路
/**
 *   1.如果没有登录（没有token），则只能进入登陆页面（路由重定向到登录页）
 *   2.如果登录了,去的不是登录页
 * 3.获取动态路由,将上面的路由声明全部干掉,替换掉(children部分)
 */
//下面是常规的js写法
// router.beforeEach((to,from,next)=>{
//   const token = localStorage.getItem('token')
//   // console.log('token',token)

//   //如果没有token 且，当前所在页面不是登录页，那么，
//   // 路由重定向到登录页 （如果用户聚在登录页就不用再重定向了）
//     if(!token && to.path !='/login'){
//       // console.log('没有值啊')
//       next('/login')  //指定它跳转到login
//     }else{
//       // console.log('token有值怎么办')
//       next() //那就想跳转到哪里就到哪里
//     }
// })
//转成 同步函数:async await
router.beforeEach(async (to, from, next) => {  //async 使用同步请求,否则在调用接口时会往下执行,走下面的代码
  const token: string | null = localStorage.getItem('token')
  // console.log('token',token)

  //如果没有token 且，当前所在页面不是登录页，那么，
  // 路由重定向到登录页 （如果用户聚在登录页就不用再重定向了）
  if (!token && to.path != '/login') {
    // console.log('没有值啊')
    next('/login')  //指定它跳转到login

  } else if (token && to.path != '/login') { //token存在,去的不是登录页
    console.log('???什么情况-----')

    //如果访问的是新增的路由,用replace方法进入路由
    //如果访问的是已经注入过的路由,用push 
    //所以需要判断是否是获取过路由,获取所有的路由 router.getRoutes(),获取到的路由不分级别,

    //注释掉children后剩下三个路由,如果当前所有路由只有三个,说明没有添加过路由,需要获取数据注入路由
    // console.log('在 login页面,获取所有路由',router.getRoutes())
    if (router.getRoutes().length === 3) {
      // console.log('??又添加路由')
      //动态添加路由:判断是否有添加过动态路由,如果添加过了就不用添加了,没有添加就添加
      //获取接口,获取当前用户的所拥有的权限路由:调用接口 getRouter
      //使用同步函数,await 

      //1如果有接口,getRouter 用下列方法
      /**
       * 此处,模拟假设后台返回的数据结构是 {
       *  code:200,
       * data:[],  //data就是返回的路由列表
       * }
       */
      // let routeData: any = await getRouter() //拿到数组,要进行过滤
      // routeData = routeData.data
      //2.写死数据


      const routeData: any = [
        {
          name: 'order',
          meta: {
            isShow: true, //用于来判断是否显示在最外层数组里
            title: '订单列表'
          },
          component:'OrderView'
        }, {
          name: 'userList',
          meta: {
            isShow: true,
            title: '用户列表'
          },
          component:'UserView'
        }, {
          name: 'roleList',
          meta: {
            isShow: true,
            title: '角色列表'
          },
          component:'RoleView'
        },
         {
          name: 'authority',
          meta: {
            isShow: false,  //不展示在菜单列表
            title: '权限列表'
          },
          component:'AuthorityView'
        },
         {
          name: 'tsstudy',
          meta: {
            isShow: true,  //展示在菜单列表
            title: 'ts学习'
          },
          component:'tsStudy'
        }
      ]

      new Promise(resolve=>{
        routeData.forEach((v: any) => {
          //创建对象,数据类型是 上面写的路由类型
          /* webpackChunkName: "about"
           这一串会影响webpack打包的逻辑
            使用webpack底层用[request]标记,最终会用传进来的v.path值
          */

          // enum \ ComponentOptions: 组件属性类型 DA
          // const componenets:ComponentOptions = Route[v.name]  


          const routerObj: RouteRecordRaw = {
            path: v.name,
            name: v.name,
            meta: v.meta,
            component: () => import(/* webpackChunkName: "[request]" */ `../views/${v.component}.vue`) 
            // component: (resolve) => require([`../views/${v.name}.vue`],resolve ) //此方法无法识别
            // component: () => import(/* webpackChunkName: "about" */ `../views/order.vue`) //此方法无法识别,路径会有问题
            //DA  这是不用 component: () => import(/* webpackChunkName: [requst] */ `../views/${v.component}.vue`) 
            // component:componenets


          }
          // console.log('routerObj',routerObj)
          //将获取到的路由变成home的子路由,放到children里面
          //使用addRoute注入路由
          router.addRoute('home', routerObj)
          // console.log('获取所有的路由',routes)

        });
        resolve('成功了吗')
      }).then(res=>{

        //replace 不能回退,不会进入 路由栈中
        // console.log('获取所有的路由=====',router.getRoutes())
        //两个都可以
        //  router.replace(to.path)
        next({
          path:`${to.path}`
        })
        // next({
        //   ...to,
        //   replace:true
        // })
        // next()
      })


    }
    // next()
    else{
      // 获取下当前路由
      const route = useRoute() //获取到当前路由实例，可获取到对应的参数
  
      next()
    }

  }else if(token && to.path ==='/login'){  //如果已经有了路由了,要跳转去登录页,不允许,应该将起直接跳转到首页
    // next('/')
    return {name:'/'}
  }
 
})

//使用此动态路由的写法，不显示在导航栏的 路由权限 页面，刷新 地址栏参数会消失


export default router
