// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const lessVariable2js = require('./lessVariabel2js')

const variable = lessVariable2js('./src/assets/variable.less')

module.exports = {
	css: {
		loaderOptions: {
			less: {
				lessOptions: {
					javascriptEnabled: true,
					modifyVars: variable,
				},
			},
		},
	},
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = '剑灵'
			return args
		})
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [path.resolve(__dirname, 'src/assets/variable.less')], // 引入全局样式变量
		},
	},
}
