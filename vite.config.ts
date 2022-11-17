import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import pxtovw from 'postcss-px-to-viewport'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import ViteImages from 'vite-plugin-vue-images'
import UnoCSS from 'unocss/vite'
import electron from 'vite-electron-plugin'
import { customStart, loadViteEnv } from 'vite-electron-plugin/plugin'
import { rmSync } from 'fs'
import renderer from 'vite-plugin-electron-renderer'
rmSync('dist-electron', { recursive: true, force: true })
// https://vitejs.dev/config/
export default ({ mode }): UserConfigExport => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const { VITE_BASE_URL } = env

  return defineConfig({
    base: VITE_BASE_URL,
    define: {
      'process.env': {},
    },
    plugins: [
      vue(),
      // // 按需引入插件
      Components({
        resolvers: [VantResolver()],
      }),
      // setup name 增强
      VueSetupExtend(),
      // 自动导包
      AutoImport({
        dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
        imports: [
          // 插件预设支持导入的api
          'vue',
          'vue-router',
          'pinia',
        ],
      }),
      // 自动导入图片
      ViteImages({
        dirs: ['src/assets'], // 指明图片存放目录
      }),
      UnoCSS(),
      electron({
        include: ['electron'],
        transformOptions: {
          sourcemap: !!process.env.VSCODE_DEBUG,
        },
        plugins: [
          ...(process.env.VSCODE_DEBUG
            ? [
              // Will start Electron via VSCode Debug
              customStart(debounce(() => console.log(/* For `.vscode/.debug.script.mjs` */'[startup] Electron App'))),
            ]
            : []),
            // Allow use `import.meta.env.VITE_SOME_KEY` in Electron-Main
          loadViteEnv(),
        ],
      }),
      // Use Node.js API in the Renderer-process
      renderer({
        nodeIntegration: true,
        optimizeDeps: {
          include: [
            'fs/promises',
            'process',
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      // postcss: {
      //   plugins: [
      //     autoprefixer(),
      //     pxtovw({
      //       viewportWidth: 375,
      //     }),
      //   ],
      // },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/_variables.scss";@import "@/styles/_mixins.scss";`,
        },
      },
    },
    server: {
      hmr: { overlay: false }, // 为 false 可以禁用服务器错误遮罩层
      port: 5128,
      open: false,
      host: '0.0.0.0',
    },
    // proxy: {
    //   '/api': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
    build: {
      cssCodeSplit: false, // 整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
      rollupOptions: {
        // 指定生成静态资源的存放路径
        output: {
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js',
          assetFileNames: '[ext]/[name].[hash].[ext]',
        },
      },
    },
  })
}

function debounce<Fn extends (...args: any[]) => void>(fn: Fn, delay = 299) {
  let t: NodeJS.Timeout
  return ((...args) => {
    clearTimeout(t)
    t = setTimeout(() => fn(...args), delay)
  }) as Fn
}
