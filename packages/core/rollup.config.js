import pkg from './package.json';
const resolve = require('@rollup/plugin-node-resolve').nodeResolve;
import babel from '@rollup/plugin-babel';


const extensions = ['.ts'];

export default [{
    input: './src/index.ts',
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
        resolve({ extensions }),
        babel({ extensions, include: ['./src/**/*'] ,presets: ['@babel/preset-env']}),
    ],
    output: [       
        { file: pkg.module, format: 'es' },
        { file: pkg.main, format: 'umd',name:"Class" },
    ],
    watch: {
        chokidar: {
            usePolling: true
        }
    }
}];