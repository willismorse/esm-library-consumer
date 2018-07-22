import nodeResolve from 'rollup-plugin-node-resolve';


export default {

    input: 'src/LibraryConsumer.js',
    output: [
        {
            sourcemap: true,
            file: 'dist/bundle.esm.js',
            format: 'esm'
        }

    ],
    plugins: [
        nodeResolve()
    ]

};