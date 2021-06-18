module.exports = {
  productionSourceMap:false,
  lintOnSave:false,
  chainWebpack(config){
    config.plugin('html').tap(args => {
      args[0].title='5T CDN流量耗尽的小电视'
      return args
    })
  }
}
