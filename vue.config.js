const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9999,
    proxy: {
      '/api': {
        target: 'http://op-pb.cx.test.sankuai.com',
        changeOrigin: true,
        ws: true,
        router(req) {
          // 根据浏览器的referer 进行二次转换
          // eslint-disable-next-line no-plusplus
          console.log(req.headers)
          return '';
        },
      }
    }
  }
})
