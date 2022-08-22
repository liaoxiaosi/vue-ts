<template>
    <div>
        <!-- 订单列表 -->
        <div class="select-box">
            <el-form :inline="true" :model="selectData" class="demo-form-inline">
                <el-form-item label="姓名">
                    <el-input v-model="selectData.nikeName" placeholder="请输入姓名" />
                </el-form-item>
                <el-form-item label="角色">
                    <el-select v-model="selectData.id"  placeholder="请选择角色">
                        <el-option label="全部" :value="0" />
                        <el-option v-for="role in roleList" :key="role.roleId" :index="role.roleId" :label="role.roleName" :value="role.roleId" />
                    </el-select>
                    <!-- <el-input v-model="selectData.body" placeholder="请输入角色" /> -->
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
         
            <el-table border  :data="list" style="width: 100%">
                <el-table-column prop="id" label="ID" width="180" />
                <el-table-column prop="nikeName" label="姓名" width="180" />
                <el-table-column prop="role" label="角色" >
                    <!-- role是数组，不能直接用，加个插槽 -->
                    <template #default="scope">
                        <el-button
                          v-for="i in scope.row.role"
                          :key="i.role"
                          link
                          type="primary"
                          size="small"
                          >
                          <!-- @click.prevent="deleteRow(scope.$index)" -->
                          {{i.roleName}}
                        </el-button>
                      </template>
                </el-table-column>
                <el-table-column prop="" label="操作" >
                    <!-- role是数组，不能直接用，加个插槽 -->
                    <template #default="scope">
                        <el-button
                          link
                          type="primary"
                          size="small"
                          @click="ediFun(scope.row)"
                          >
                          编辑
                        </el-button>
                      </template>
                </el-table-column>
              </el-table>
              <!-- <el-pagination @current-change="currentChange" background layout="prev, pager, next" :total="selectData.count" /> -->
        </div>
    </div>
    <!-- 编辑弹窗 -->
    <el-dialog v-model="showEdit" title="编辑角色">
        <el-form :model="active">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="active.nikeName" laceholder="请输入姓名"/>
          </el-form-item>
          <el-form-item label="角色" :label-width="formLabelWidth">
            <el-select v-model="active.role" multiple  placeholder="请选择角色">
                <el-option v-for="role in roleList" :key="role.roleId" :index="role.roleId" :label="role.roleName" :value="role.roleId" />
            </el-select>
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="showEdit = false">取消</el-button>
            <el-button type="primary" @click="roleChange"
              >确定</el-button
            >
          </span>
        </template>
      </el-dialog>
</template>

<script lang="ts">
import {defineComponent,reactive,toRefs,onMounted} from 'vue'

import {InitData,ListInt,ActiveInt} from '../types/user'
import {getUserList,getRoleList} from '../api/other'
// TODO 此处使用前端进行分页处理，前端进行模糊搜索 可减轻服务器压力

export default defineComponent({
    setup(){ 
        //响应式数据，数据改变页面更新
        const data = reactive(new InitData) //接口定义中获取到数据 
       
        //在onmounted中进行数据请求 （因为vue3中不存在beforecreate,created生命周期了，这两个周期都是setup中）
      onMounted(()=>{
        getUserList().then(res=>{
            // console.log('获取表格列表数据',res)
            //由于没有接口，在此，直接写死数据,定义100条
            let array = []
            for(let i=1;i<10;i++){
              
                let obj = {
                    nikeName:'是角色名啊'+i,
                    id:i,
                    userName:'昵称吖'+i,
                    role:[{
                        role:i,
                        roleName:'业务员'+i
                    }]
                }
                array.push(obj)
            }
           
            data.list = array //将所有数据存储起
            data.AllData = array
        
        
        })
        //获取角色
        getRoleList().then(res=>{
            console.log('获取角色数据',res)
            //由于没有接口，在此，直接写死数据,角色列表
            let array = []
            for(let i=1;i<10;i++){
                let obj = {
                    roleName:'业务员'+i,
                    roleId:i,
                    suthorty:[i]
                }
                array.push(obj)
            }
         
            data.roleList = array //将所有数据存储起
            // console.log('角色列表啊',array)


        })
      })
    
    //   //绑定页码change事件
    //   const currentChange = (page:number)=>{
    //     data.selectData.page = page-1 //将值传过去
    //   }
      const onSubmit = ()=>{
        let arr:ListInt[]=[]
        if(data.selectData.nikeName || data.selectData.id!=0){
            if(data.selectData.nikeName){
                arr = data.AllData.filter(i=>i.nikeName.indexOf(data.selectData.nikeName) != -1)
            }
            if(data.selectData.id !=0){ //role结构： role:[{role:12}]
                arr = (data.selectData.nikeName ? arr : data.AllData).filter(i=>i.role.find(r=>r.role===data.selectData.id) )
             
            }
         
        }
        else{
            arr = data.AllData
        }
        
        data.list = arr

      }
      //点击编辑，显示弹窗
      const ediFun = (row:ListInt)=>{ //ActiveInt  函数传参，参数一定要确保数据类型， 函数内部处理数据时可以用any
          console.log('当前行数据',row)
          console.log(' row.role---编辑',row.role)
        //   let arr = row.role;
        //     let newArr = arr.map((v)=>v.role)
           data.active = { //回显数据,赋值用解构，这样可以避免修改后影响到list数据
                id:row.id,
                userName:row.userName,
                nikeName:row.nikeName,
                role:row.role.map((v:any)=>v.role||v.roleId)  //因为再次编辑时，role变成了roleId
            }  
        
            data.showEdit = true //显示弹窗
            // let arr = row.role;
            // let newArr = arr.map((v:any)=>v.role)
           
            // console.log('data.active',data.active)
        }
        //编辑确定
        const roleChange = ()=>{
            console.log('弹窗确定啊') //确保数据类型的时候，可以使用any
            const obj:any = data.list.find((v:any)=>v.id===data.active.id)  //找到当前要改的数据
            obj.nikeName = data.active.nikeName
            //两个方法都可以，根据选择的数据，在列表中查找相关数据
            obj.role = data.roleList.filter((v:any)=>data.active.role.indexOf(v.roleId) != -1) //查找出列表中的角色对象
            // obj.role = data.roleList.filter((v:any)=>data.active.role.find(i=>i===v.roleId))
            data.showEdit = false 
            console.log('obj.role',obj.role)

        }
        return {
            ...toRefs(data), //将数据结构，暴露出去并且实时更新
            // currentChange,
            onSubmit,  //生命函数
            ediFun,
            roleChange
            
        }
    }
})
</script>