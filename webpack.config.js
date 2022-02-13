import path from 'path'
import {fileURLToPath} from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
	'./1/1/',
].map(projectPath => ({
	entry: projectPath + 'index.ts',
	mode: 'development',
	module: {
		rules: [
			{
				use: 'ts-loader',
				test: /\.ts$/,
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, projectPath),
	},
}))
