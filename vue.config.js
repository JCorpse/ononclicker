const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath:"/ononclicker",
    transpileDependencies: true,
    configureWebpack: {
        performance: {
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    }
})
