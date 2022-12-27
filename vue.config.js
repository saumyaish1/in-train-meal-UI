const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  "devServer": {
    "public": "https://in-train-meal-ui.onrender.com/"
  }
})
