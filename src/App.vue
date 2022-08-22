<template>
  <router-view/>
</template>
<!-- nav router-view  两个根节点，vue2不允许多个根节点，vue3可以允许多个根节点 -->
<!-- 创建打开报错时，打开根目录可解决，因为打开根目录，编辑器就可以识别到是vue3项目 -->
<style>
*{
  padding:0;
  margin: 0;
}
html,body,#app{
  width: 100%;
  height:100%;
}
</style>
