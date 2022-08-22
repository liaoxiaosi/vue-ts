<template>
    <div>
        权限列表
        <el-tree
            ref="treeRef"
            :data="list"
            show-checkbox
            node-key="roleId"
            :default-expanded-keys="[0]"
            :default-checked-keys="authority"  
            :check-strictly="true"
            :props="{
                children:'roleList',
                label:'name'
            }"
        />
        <!-- check-strictly:false 的时候，父子关联，如果选中了父元素，就把子元素都勾选 -->
        <!--   :default-expanded-keys="[0]" 默认展开 -->
        <!-- :default-checked-keys="[5]"   当前选中 -->

        <div>
            <el-button type="primary" @click="onSubmit">确认修改</el-button>
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
            //获取当前 路由上的数据
            const route = useRoute() //获取到当前路由实例，可获取到对应的参数
            console.log('route',route)
            const query:any = route.query //获取到地址栏参数
            // console.log('query.authority.',query.authority )
            // console.log('query.authority.splite',query.authority.split(','))
            // console.log('map后呢',query.authority.split(',').map((v:any)=>+v))
            //响应式数据，数据改变页面更新
            // const data = reactive({  
            //     id:query.id,
            //     authority:query.authority.splite(',') 
            // }) 
            //用传参的方式数据存储起来
              //InitData 类中用constructor接收参数，并赋值
            const data = reactive(new InitData(query.id,query.authority))

            onMounted(() => {
                getAuthorityList().then(res => {
                    console.log('获取角色数据', res)
                    //由于没有接口，在此，直接写死数据,角色列表
               
 
                     let array = [
                         {name:'管理员',roleId:1,roleList:[{name:'超级管理员',roleId:2}]},
                         {name:'教师',roleId:3,roleList:[{name:'班主任',roleId:4}]},
                         {name:'教导主任',roleId:5}
                        ]

                    data.list = array //将所有数据存储起
                    data.AllData = array
                })
            })
            const onSubmit = ()=>{
                console.log('获取当前选中的')
                //获取到ref getCheckedKeys:当前选中的值 的数组 [1,2,5]
                console.log(data.treeRef.getCheckedKeys())
                //接下来后可进行接口调用，把修改的值提交给后台
            }

            return {
                ...toRefs(data),
                onSubmit

            }
        }
    })

</script>