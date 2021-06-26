module.exports = {
    devServer: {
      proxy: {
        '^/api': { //   /api/* redirects to localhost5000:/*
          target: 'http://localhost:5000',
          changeOrigin: true,
          logLevel: 'debug',
          pathRewrite: { '^/api': '/' },
        },
      },
    },
  }