const webpack = require('webpack')

module.exports = {
    webpack(config) {
        config.plugins.push(
            new webpack.ProvidePlugin({
              '$': 'jquery',
              jQuery: 'jquery',
              "window.jQuery": "jquery"
            })
        );
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
                
        });
  
      return config;
    },
};