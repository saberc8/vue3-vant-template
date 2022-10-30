// vite.config.ts
import { fileURLToPath, URL } from "url";
import { defineConfig, loadEnv } from "file:///E:/AAACode/github/vue3-vant-template/node_modules/.pnpm/registry.npmmirror.com+vite@3.2.1_sass@1.55.0/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/AAACode/github/vue3-vant-template/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@3.2.0_vite@3.2.1+vue@3.2.41/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import autoprefixer from "file:///E:/AAACode/github/vue3-vant-template/node_modules/.pnpm/registry.npmmirror.com+autoprefixer@10.4.13/node_modules/autoprefixer/lib/autoprefixer.js";
import pxtovw from "file:///E:/AAACode/github/vue3-vant-template/node_modules/.pnpm/registry.npmmirror.com+postcss-px-to-viewport@1.1.1/node_modules/postcss-px-to-viewport/index.js";
import AutoImport from "file:///E:/AAACode/github/vue3-vant-template/node_modules/.pnpm/registry.npmmirror.com+unplugin-auto-import@0.11.4_@vueuse+core@9.4.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/AAACode/github/vue3-vant-template/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.22.9_vue@3.2.41/node_modules/unplugin-vue-components/dist/vite.mjs";
import { VantResolver } from "file:///E:/AAACode/github/vue3-vant-template/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-components@0.22.9_vue@3.2.41/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import VueSetupExtend from "file:///E:/AAACode/github/vue3-vant-template/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-vue-setup-extend@0.4.0_vite@3.2.1/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import ViteImages from "file:///E:/AAACode/github/vue3-vant-template/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-vue-images@0.6.1/node_modules/vite-plugin-vue-images/dist/index.cjs";
import UnoCSS from "file:///E:/AAACode/github/vue3-vant-template/node_modules/.pnpm/registry.npmmirror.com+unocss@0.46.1_vite@3.2.1/node_modules/unocss/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/AAACode/github/vue3-vant-template/vite.config.ts";
var vite_config_default = ({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const { VITE_BASE_URL } = env;
  return defineConfig({
    base: VITE_BASE_URL,
    define: {
      "process.env": {}
    },
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()]
      }),
      VueSetupExtend(),
      AutoImport({
        dts: "src/auto-imports.d.ts",
        imports: [
          "vue",
          "vue-router",
          "pinia"
        ],
        eslintrc: {
          enabled: true
        }
      }),
      ViteImages({
        dirs: ["src/assets"]
      }),
      UnoCSS()
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtovw({
            viewportWidth: 375
          })
        ]
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/_variables.scss";@import "@/styles/_mixins.scss";`
        }
      }
    },
    server: {
      hmr: { overlay: false },
      port: 5128,
      open: false,
      host: "0.0.0.0"
    },
    build: {
      cssCodeSplit: false,
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          chunkFileNames: "js/[name].[hash].js",
          entryFileNames: "js/[name].[hash].js",
          assetFileNames: "[ext]/[name].[hash].[ext]"
        }
      }
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxBQUFDb2RlXFxcXGdpdGh1YlxcXFx2dWUzLXZhbnQtdGVtcGxhdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXEFBQUNvZGVcXFxcZ2l0aHViXFxcXHZ1ZTMtdmFudC10ZW1wbGF0ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQUFBQ29kZS9naXRodWIvdnVlMy12YW50LXRlbXBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAndXJsJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYsIFVzZXJDb25maWdFeHBvcnQgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IGVzbGludCBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnXHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xyXG5pbXBvcnQgcHh0b3Z3IGZyb20gJ3Bvc3Rjc3MtcHgtdG8tdmlld3BvcnQnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuaW1wb3J0IFZ1ZVNldHVwRXh0ZW5kIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmQnXHJcbmltcG9ydCBWaXRlSW1hZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1pbWFnZXMnXHJcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCAoeyBtb2RlIH0pOiBVc2VyQ29uZmlnRXhwb3J0ID0+IHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICBjb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKVxyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcm9vdClcclxuICBjb25zdCB7IFZJVEVfQkFTRV9VUkwgfSA9IGVudlxyXG5cclxuICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcclxuICAgIGJhc2U6IFZJVEVfQkFTRV9VUkwsXHJcbiAgICBkZWZpbmU6IHtcclxuICAgICAgJ3Byb2Nlc3MuZW52Jzoge30sXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICB2dWUoKSxcclxuICAgICAgLy8gXHU2MzA5XHU5NzAwXHU1RjE1XHU1MTY1XHU2M0QyXHU0RUY2XHJcbiAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXSxcclxuICAgICAgfSksXHJcbiAgICAgIC8vIHNldHVwIG5hbWUgXHU1ODlFXHU1RjNBXHJcbiAgICAgIFZ1ZVNldHVwRXh0ZW5kKCksXHJcbiAgICAgIC8vIGVzbGludCh7XHJcbiAgICAgIC8vICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAvLyAgIGluY2x1ZGU6IFsnc3JjLyoqLyoudHMnLCAnc3JjLyoqLyoudHN4JywgJ3NyYy8qKi8qLnZ1ZSddLFxyXG4gICAgICAvLyAgIGV4Y2x1ZGU6IFsnbm9kZV9tb2R1bGVzJ10sXHJcbiAgICAgIC8vIH0pLFxyXG4gICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUzMDVcclxuICAgICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgICAgZHRzOiAnc3JjL2F1dG8taW1wb3J0cy5kLnRzJywgLy8gXHU1M0VGXHU0RUU1XHU4MUVBXHU1QjlBXHU0RTQ5XHU2NTg3XHU0RUY2XHU3NTFGXHU2MjEwXHU3Njg0XHU0RjREXHU3RjZFXHVGRjBDXHU5RUQ4XHU4QkE0XHU2NjJGXHU2ODM5XHU3NkVFXHU1RjU1XHU0RTBCXHJcbiAgICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICAgLy8gXHU2M0QyXHU0RUY2XHU5ODg0XHU4QkJFXHU2NTJGXHU2MzAxXHU1QkZDXHU1MTY1XHU3Njg0YXBpXHJcbiAgICAgICAgICAndnVlJyxcclxuICAgICAgICAgICd2dWUtcm91dGVyJyxcclxuICAgICAgICAgICdwaW5pYScsXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTAnZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbidcdTY1ODdcdTRFRjZcdUZGMENcdTU3MjgnLmVzbGludHJjLmNqcydcdTc2ODQnZXh0ZW5kcydcdTRFMkRcdTVGMTVcdTUxNjVcdTg5RTNcdTUxQjNcdTYyQTVcdTk1MTlcclxuICAgICAgICAvLyAndnVlLWdsb2JhbC1hcGknXHU4RkQ5XHU0RTJBXHU2M0QyXHU0RUY2XHU0RUM1XHU0RUM1XHU4OUUzXHU1MUIzdnVlMyBob29rXHU2MkE1XHU5NTE5XHJcbiAgICAgICAgZXNsaW50cmM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NTZGRVx1NzI0N1xyXG4gICAgICBWaXRlSW1hZ2VzKHtcclxuICAgICAgICBkaXJzOiBbJ3NyYy9hc3NldHMnXSwgLy8gXHU2MzA3XHU2NjBFXHU1NkZFXHU3MjQ3XHU1QjU4XHU2NTNFXHU3NkVFXHU1RjU1XHJcbiAgICAgIH0pLFxyXG4gICAgICBVbm9DU1MoKSxcclxuICAgIF0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIHBvc3Rjc3M6IHtcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICBhdXRvcHJlZml4ZXIoKSxcclxuICAgICAgICAgIHB4dG92dyh7XHJcbiAgICAgICAgICAgIHZpZXdwb3J0V2lkdGg6IDM3NSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICBzY3NzOiB7XHJcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJAL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIjtAaW1wb3J0IFwiQC9zdHlsZXMvX21peGlucy5zY3NzXCI7YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBobXI6IHsgb3ZlcmxheTogZmFsc2UgfSwgLy8gXHU0RTNBIGZhbHNlIFx1NTNFRlx1NEVFNVx1Nzk4MVx1NzUyOFx1NjcwRFx1NTJBMVx1NTY2OFx1OTUxOVx1OEJFRlx1OTA2RVx1N0Y2OVx1NUM0MlxyXG4gICAgICBwb3J0OiA1MTI4LFxyXG4gICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgfSxcclxuICAgIC8vIHByb3h5OiB7XHJcbiAgICAvLyAgICcvYXBpJzoge1xyXG4gICAgLy8gICAgIHRhcmdldDogJ2h0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tJyxcclxuICAgIC8vICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAvLyAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKSxcclxuICAgIC8vICAgfSxcclxuICAgIC8vIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLCAvLyBcdTY1NzRcdTRFMkFcdTk4NzlcdTc2RUVcdTRFMkRcdTc2ODRcdTYyNDBcdTY3MDkgQ1NTIFx1NUMwNlx1ODhBQlx1NjNEMFx1NTNENlx1NTIzMFx1NEUwMFx1NEUyQSBDU1MgXHU2NTg3XHU0RUY2XHU0RTJEXHJcbiAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTUwMCwgLy8gY2h1bmsgXHU1OTI3XHU1QzBGXHU4QjY2XHU1NDRBXHU3Njg0XHU5NjUwXHU1MjM2XHVGRjA4XHU0RUU1IGticyBcdTRFM0FcdTUzNTVcdTRGNERcdUZGMDlcclxuICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgIC8vIFx1NjMwN1x1NUI5QVx1NzUxRlx1NjIxMFx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NzY4NFx1NUI1OFx1NjUzRVx1OERFRlx1NUY4NFxyXG4gICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdqcy9bbmFtZV0uW2hhc2hdLmpzJyxcclxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnanMvW25hbWVdLltoYXNoXS5qcycsXHJcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ1tleHRdL1tuYW1lXS5baGFzaF0uW2V4dF0nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pXHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUyxTQUFTLGVBQWUsV0FBVztBQUN6VSxTQUFTLGNBQWMsZUFBaUM7QUFDeEQsT0FBTyxTQUFTO0FBRWhCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFlBQVk7QUFYb0ssSUFBTSwyQ0FBMkM7QUFjeE8sSUFBTyxzQkFBUSxDQUFDLEVBQUUsS0FBSyxNQUF3QjtBQUU3QyxRQUFNLE9BQU8sUUFBUSxJQUFJO0FBQ3pCLFFBQU0sTUFBTSxRQUFRLE1BQU0sSUFBSTtBQUM5QixRQUFNLEVBQUUsY0FBYyxJQUFJO0FBRTFCLFNBQU8sYUFBYTtBQUFBLElBQ2xCLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOLGVBQWUsQ0FBQztBQUFBLElBQ2xCO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFFSixXQUFXO0FBQUEsUUFDVCxXQUFXLENBQUMsYUFBYSxDQUFDO0FBQUEsTUFDNUIsQ0FBQztBQUFBLE1BRUQsZUFBZTtBQUFBLE1BT2YsV0FBVztBQUFBLFFBQ1QsS0FBSztBQUFBLFFBQ0wsU0FBUztBQUFBLFVBRVA7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUdBLFVBQVU7QUFBQSxVQUNSLFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFFRCxXQUFXO0FBQUEsUUFDVCxNQUFNLENBQUMsWUFBWTtBQUFBLE1BQ3JCLENBQUM7QUFBQSxNQUNELE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLE1BQ3REO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IsT0FBTztBQUFBLFlBQ0wsZUFBZTtBQUFBLFVBQ2pCLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUFBLE1BQ0EscUJBQXFCO0FBQUEsUUFDbkIsTUFBTTtBQUFBLFVBQ0osZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sS0FBSyxFQUFFLFNBQVMsTUFBTTtBQUFBLE1BQ3RCLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFRQSxPQUFPO0FBQUEsTUFDTCxjQUFjO0FBQUEsTUFDZCx1QkFBdUI7QUFBQSxNQUN2QixlQUFlO0FBQUEsUUFFYixRQUFRO0FBQUEsVUFDTixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbXQp9Cg==
