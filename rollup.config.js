import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/info.min.js',
        format: 'umd',
        name: 'info'
    },
    plugins: [
        uglify(),
    ]
}