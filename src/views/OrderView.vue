<template>
    <div>
        <!-- 订单列表 -->
        <div class="select-box">
            <el-form :inline="true" :model="selectData" class="demo-form-inline">
                <el-form-item label="标题搜索">
                    <el-input v-model="selectData.title" placeholder="请输入关键字" />
                </el-form-item>
                <el-form-item label="详情">
                    <!-- <el-select v-model="selectData.body" placeholder="请输入关键字">
                        <el-option label="Zone one" value="shanghai" />
                        <el-option label="Zone two" value="beijing" />
                    </el-select> -->
                    <el-input v-model="selectData.body" placeholder="请输入关键字" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
         
            <el-table border  :data="list[selectData.page]" style="width: 100%">
                <el-table-column prop="userId" label="ID" width="180" />
                <el-table-column prop="title" label="标题" width="180" />
                <el-table-column prop="body" label="详情" />
              </el-table>
              <el-pagination @current-change="currentChange" background layout="prev, pager, next" :total="selectData.count" />
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent,reactive,toRefs,onMounted} from 'vue'

import {InitData,ListInt} from '../types/order'
import {getList} from '../api/other'
// TODO 此处使用前端进行分页处理，前端进行模糊搜索 可减轻服务器压力

export default defineComponent({
    setup(){
        const data = reactive(new InitData) //接口定义中获取到数据
       
        //在onmounted中进行数据请求 （因为vue3中不存在beforecreate,created生命周期了，这两个周期都是setup中）
      onMounted(()=>{
        getList({page:data.selectData.page}).then(res=>{
            // console.log('获取表格列表数据',res)
            //由于没有接口，在此，直接写死数据,定义100条
            
            let array = []
            for(let i=0;i<100;i++){
                let obj = {
                    id:i,
                    title:'测试数据啊'+i,
                    userId:i,
                    body:'详情详情12345679'+i
                }
                array.push(obj)
            }
            // let list =  array.filter(item=>item.userId<10)
            // console.log(list)
            // data.list = list;
            data.AllData = array; //将所有数据存储起
            data.selectData.count = 100

            //数组 [[0-9],[10-19],...] //里面id的值应是这样,一页10条
            //用for循环，将数组进行切割
            //将数据传入到切割数组的方法中，再赋值
           sliceList(array)

        })
      })
      //切割数组
      const sliceList = (arr:ListInt[])=>{ //对arr进行数据类型规范
        data.list = [] //将数组重置掉，否则做过滤搜索会累加

        for(let index = 0;index < arr.length;index+=10){
           let list:any =  arr.slice(index,index+10)//0-9 10-19 没10个为一组 
           data.list.push(list)
            
        }
        //数组变成 二维数组后，赋值表格数据需要调用当前page的 数组 [[],[],[]....]
        // list[selectData.page]

        // console.log('切割后数组',data.list)

      }
    //   //绑定页码change事件
      const currentChange = (page:number)=>{
        data.selectData.page = page-1 //将值传过去
      }
      const onSubmit = ()=>{
        //   console.log('data.selectData',data.selectData)
          let arr:ListInt[]=[]
          if(data.selectData.title || data.selectData.body ){ //如果title有值
            if(data.selectData.title){
                arr = data.AllData.filter(v=>v.title.search(data.selectData.title) != -1) //过滤数据
            }
            if(data.selectData.body){
                //如果有标题，那么就用标题过滤过的arr再进行过滤，如果没有标题，那就拿所有数据进行过滤
                arr =(data.selectData.title?arr:data.AllData).filter(v=>v.body.indexOf(data.selectData.body) != -1) //过滤数据
            }

        }else{
            arr = data.AllData
          }

          data.selectData.page = 0; //将值传过去
          data.selectData.count = arr.length  //总条数
          sliceList(arr) //将数组传到 切割数组方法中，重新进行数据切割

      }
        return {
            ...toRefs(data), //将数据结构，暴露出去并且实时更新
            currentChange,
            onSubmit
        }
    }
})
</script>