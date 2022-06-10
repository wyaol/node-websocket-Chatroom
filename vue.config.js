module.exports={
  publicPath:process.env.BASE_URL,
  assetsDir:"static",
  outputDir:"dist",
  productionSourceMap:false,
  css:{
    sourceMap:true
  },
  devServer:{
    proxy: {
      '/socket.io': {
        target: process.env.PROXY_SERVER,
        ws:true
      },
      '/image': {
        target: process.env.IMAGE_PROXY_SERVER,
        pathRewrite: {'^/image' : ''}
      }
    }
  }
};
