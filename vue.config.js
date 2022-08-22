const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions:{
    'style-resources-loader':{
      preProcessor:'scss',
      patterns:[]
    }
  },
  publicPath:'./',  //设置相对路径，这样打包出来静态路径就不会报错
  outputDir:'testMode',  //打包后生成数据的名称 
  devServer:{
    proxy:{
      '/api':{ //代理接口的前缀
        "target":"http://test.nps.123kaihui.com", //要代理的服务器
        "secure":false,//接受运行在https上
        "changeOrigin":true, //如果设置为true，本地会虚拟一个服务器接收请求，并代理发送请求
        "pathRewite":{
          '^/api':"" // 重写路径
        }
      }
    }
  }
  
})
