module.exports = {
  configureWebpack: {
    output: {// 打包输出的结果
      library: 'sxyd', // 类库的名字
      libraryTarget: 'umd',// 打包之后类库的种类
    },
    devServer: {
      port: 10000
    }

  }
}