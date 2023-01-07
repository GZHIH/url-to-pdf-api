import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

const isPro = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
    base: isPro ? '/server' : '',
    envDir: 'env', // 配置环境变量的目录。前提是在 tsconfig.json 中的 includes 也包含这个环境变量的目录
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
            },
            output: {
                chunkFileNames: 'static/script/chunk-[name]-[hash].js',
                entryFileNames: 'static/script/[name]-[hash].js',
                assetFileNames: 'static/assets/[ext]/[name]-[hash].[ext]',
            },
        },
    },
    plugins: [vue()],
    server: {
        host: true,
    },
    resolve: {
        // 设置别名时，需要在 tsconfig.json 中也设置对应 paths，不然会报 找不到模块“别名/...”或其相应的类型声明。
        alias: [
            { find: '@', replacement: '/src' },
        ],
    },
});
