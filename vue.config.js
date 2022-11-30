const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        performance: {
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    }
})
