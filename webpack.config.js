const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    env = env || {};
    return {
        mode: 'development',
        entry: './src/index.js',
        output:{
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.bundle.js'
        },
        plugins: [
            new htmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        devServer: {
            https: true,
            before(app){
                app.use((req, res, next) =>{
                    if (/^\/\d+$/.test(req.url)){
                        req.url = '/';
                    }
                    next();
                });
            }
        }
    };
}