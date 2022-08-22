<template>
    <div>
        <!-- 不需要进行搜素 -->
        <!-- <el-form :inline="true" :model="selectData" class="demo-form-inline">
            <el-form-item label="角色">
                <el-select v-model="selectData.roleId"  placeholder="请选择角色">
                    <el-option label="全部" :value="0" />
                    <el-option v-for="role in AllData" :key="role.roleId" :index="role.roleId" :label="role.roleName" :value="role.roleId" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form> -->
        <div style="margin-bottom:15px;">
            <el-button type="primary" @click="addRole">添加角色</el-button>
        </div>

        <el-table border :data="list" style="width: 100%">
            <el-table-column prop="roleId" label="ID" width="180" />
            <el-table-column prop="roleName" label="角色">
                <!-- role是数组，不能直接用，加个插槽 -->
                <!-- <template #default="scope">
                    <el-button
                      v-for="i in scope.row.role"
                      :key="i.role"
                      link
                      type="primary"
                      size="small"
                      >
                      {{i.roleName}}
                    </el-button>
                  </template> -->
            </el-table-column>
            <el-table-column prop="" label="操作">
                <!-- role是数组，不能直接用，加个插槽 -->
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="ediFun(scope.row)">
                        修改权限
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script lang="ts">
    import { ElMessage, ElMessageBox } from 'element-plus'
    import { useRouter } from 'vue-router'
    import { defineComponent, reactive, onMounted, toRefs } from 'vue'
    import { getRoleList } from '../api/other'
    import { InitData, ListInt } from '../types/role'
    export default defineComponent({
        setup() {
            const router = useRouter()  //拿到router实例
            const data = reactive(new InitData) //响应式数据，数据改变页面更新
            onMounted(() => {
                getRoleList().then(res => {
                    console.log('获取角色数据', res)
                    //由于没有接口，在此，直接写死数据,角色列表
                    let array = []
                    for (let i = 1; i < 10; i++) {
                        let obj = {
                            roleId: i,
                            roleName: '管理员' + i,
                            authority:i%2 ==0 ? [i,i+1]:[1],  //权限 id
                        }
                        array.push(obj)
                    }

                    data.list = array //将所有数据存储起
                    data.AllData = array
                })
            })
            //修改权限，点击后跳转到 权限页面
            const ediFun = (row: ListInt) => {
                console.log('当前行', row)
                //跳转到 authority 
                router.push({
                    path:'/authority',
                    query:{
                        id:row.roleId,
                        authority:row.authority.join(','),  //权限的列表,不能以列表的形式传，转成字符串
                    }
                })

            }
            //查询
            const onSubmit = () => {
                let arr: ListInt[] = []
                console.log('alldata', data.AllData)
                console.log('data.selectData.roleId', data.selectData.roleId)
                if (data.selectData.roleId != 0) {
                    arr = data.AllData.filter(i => i.roleId === data.selectData.roleId)
                } else {
                    arr = data.AllData
                }
                data.list = arr

            }
            //添加角色
            const addRole = () => {
                console.log('添加')
                //显示消息弹窗 
                ElMessageBox.prompt('请输入角色名', '添加', {
                    confirmButtonText: '确认',
                    cancelButtonText: '取消',

                })
                    .then(({ value }) => { //点击确认
                        if (value) { //如果输入框有内容
                            data.list.unshift({
                                roleName: value,
                                roleId: data.list.length + 1,
                                authority: []
                            })
                            ElMessage({
                                type: 'success',
                                message: `成功添加角色:${value}`,
                            })
                        }

                    })
                    .catch(() => { //取消
                        // ElMessage({
                        //     type: 'info',
                        //     message: '角色添加失败',
                        // })
                    })
            }
            return {
                ...toRefs(data),
                ediFun,
                onSubmit,
                addRole
            }
        }
    })

</script>