// vite.config.js
import { defineConfig, createLogger } from "file:///C:/Users/%D0%93%D1%83%D0%B0%D0%BD%D0%BC%D0%B8%D0%BD%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%81%D1%83%D0%BD/Desktop/gradient-UI/vite-vue-linters/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/%D0%93%D1%83%D0%B0%D0%BD%D0%BC%D0%B8%D0%BD%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%81%D1%83%D0%BD/Desktop/gradient-UI/vite-vue-linters/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import legacy from "file:///C:/Users/%D0%93%D1%83%D0%B0%D0%BD%D0%BC%D0%B8%D0%BD%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%81%D1%83%D0%BD/Desktop/gradient-UI/vite-vue-linters/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import svgLoader from "file:///C:/Users/%D0%93%D1%83%D0%B0%D0%BD%D0%BC%D0%B8%D0%BD%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%81%D1%83%D0%BD/Desktop/gradient-UI/vite-vue-linters/node_modules/vite-svg-loader/index.js";
import checker from "file:///C:/Users/%D0%93%D1%83%D0%B0%D0%BD%D0%BC%D0%B8%D0%BD%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%81%D1%83%D0%BD/Desktop/gradient-UI/vite-vue-linters/node_modules/vite-plugin-checker/dist/esm/main.js";
import vuetify, { transformAssetUrls } from "file:///C:/Users/%D0%93%D1%83%D0%B0%D0%BD%D0%BC%D0%B8%D0%BD%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%81%D1%83%D0%BD/Desktop/gradient-UI/vite-vue-linters/node_modules/vite-plugin-vuetify/dist/index.js";
import path from "path";
import commonjs from "file:///C:/Users/%D0%93%D1%83%D0%B0%D0%BD%D0%BC%D0%B8%D0%BD%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%81%D1%83%D0%BD/Desktop/gradient-UI/vite-vue-linters/node_modules/vite-plugin-commonjs/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\\u0413\u0443\u0430\u043D\u043C\u0438\u043D \u0426\u0437\u0438\u043D\u0441\u0443\u043D\\Desktop\\gradient-UI\\vite-vue-linters";
var createCustomLogger = () => {
  const logger = createLogger();
  const originalWarning = logger.warn;
  logger.warn = (msg, options) => {
    if (msg.includes("vite:css"))
      return;
    originalWarning(msg, options);
  };
  return logger;
};
var vite_config_default = defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    vuetify({ autoImport: true }),
    legacy({
      targets: ["defaults", "not IE 11"]
    }),
    svgLoader(),
    commonjs({
      filter(id) {
        if (["src/assets/cke/build/ckeditor.js"].includes(id)) {
          return true;
        }
      }
    }),
    checker({
      stylelint: {
        lintCommand: "stylelint ./src/**/*.{css,vue} --fix"
      },
      eslint: {
        // for example, lint .ts and .tsx
        lintCommand: 'eslint "./src/**/*.{js,vue,html}"',
        logLevel: "error"
      }
    })
  ],
  customLogger: createCustomLogger(),
  server: {
    hmr: {
      overlay: false
    },
    port: 8080
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdTA0MTNcdTA0NDNcdTA0MzBcdTA0M0RcdTA0M0NcdTA0MzhcdTA0M0QgXHUwNDI2XHUwNDM3XHUwNDM4XHUwNDNEXHUwNDQxXHUwNDQzXHUwNDNEXFxcXERlc2t0b3BcXFxcZ3JhZGllbnQtVUlcXFxcdml0ZS12dWUtbGludGVyc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcXHUwNDEzXHUwNDQzXHUwNDMwXHUwNDNEXHUwNDNDXHUwNDM4XHUwNDNEIFx1MDQyNlx1MDQzN1x1MDQzOFx1MDQzRFx1MDQ0MVx1MDQ0M1x1MDQzRFxcXFxEZXNrdG9wXFxcXGdyYWRpZW50LVVJXFxcXHZpdGUtdnVlLWxpbnRlcnNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLyVEMCU5MyVEMSU4MyVEMCVCMCVEMCVCRCVEMCVCQyVEMCVCOCVEMCVCRCUyMCVEMCVBNiVEMCVCNyVEMCVCOCVEMCVCRCVEMSU4MSVEMSU4MyVEMCVCRC9EZXNrdG9wL2dyYWRpZW50LVVJL3ZpdGUtdnVlLWxpbnRlcnMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGNyZWF0ZUxvZ2dlciB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xyXG5pbXBvcnQgbGVnYWN5IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1sZWdhY3lcIjtcclxuaW1wb3J0IHN2Z0xvYWRlciBmcm9tICd2aXRlLXN2Zy1sb2FkZXInXHJcbmltcG9ydCBjaGVja2VyIGZyb20gXCJ2aXRlLXBsdWdpbi1jaGVja2VyXCI7XHJcbmltcG9ydCB2dWV0aWZ5LCB7dHJhbnNmb3JtQXNzZXRVcmxzIH0gZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZXRpZnlcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGNvbW1vbmpzIGZyb20gXCJ2aXRlLXBsdWdpbi1jb21tb25qc1wiO1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZUN1c3RvbUxvZ2dlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcigpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxXYXJuaW5nID0gbG9nZ2VyLndhcm47XHJcbiAgICBsb2dnZXIud2FybiA9IChtc2csIG9wdGlvbnMpID0+IHtcclxuICAgICAgICBpZiAobXNnLmluY2x1ZGVzKFwidml0ZTpjc3NcIikpIHJldHVybjtcclxuICAgICAgICBvcmlnaW5hbFdhcm5pbmcobXNnLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gbG9nZ2VyXHJcbn07XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIHZ1ZSh7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7IHRyYW5zZm9ybUFzc2V0VXJscyB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdnVldGlmeSh7IGF1dG9JbXBvcnQ6IHRydWUgfSksXHJcbiAgICAgICAgbGVnYWN5KHtcclxuICAgICAgICAgICAgdGFyZ2V0czogW1wiZGVmYXVsdHNcIiwgXCJub3QgSUUgMTFcIl1cclxuICAgICAgICB9KSxcclxuICAgICAgICBzdmdMb2FkZXIoKSxcclxuICAgICAgICBjb21tb25qcyh7XHJcbiAgICAgICAgICAgIGZpbHRlcihpZCkge1xyXG4gICAgICAgICAgICAgIGlmIChbXCJzcmMvYXNzZXRzL2NrZS9idWlsZC9ja2VkaXRvci5qc1wiXS5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIGNoZWNrZXIoe1xyXG4gICAgICAgICAgICBzdHlsZWxpbnQ6IHtcclxuICAgICAgICAgICAgICAgIGxpbnRDb21tYW5kOiBcInN0eWxlbGludCAuL3NyYy8qKi8qLntjc3MsdnVlfSAtLWZpeFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVzbGludDoge1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yIGV4YW1wbGUsIGxpbnQgLnRzIGFuZCAudHN4XHJcbiAgICAgICAgICAgICAgICBsaW50Q29tbWFuZDogJ2VzbGludCBcIi4vc3JjLyoqLyoue2pzLHZ1ZSxodG1sfVwiJyxcclxuICAgICAgICAgICAgICAgIGxvZ0xldmVsOiBcImVycm9yXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBdLFxyXG4gICAgY3VzdG9tTG9nZ2VyOiBjcmVhdGVDdXN0b21Mb2dnZXIoKSxcclxuXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgICBobXI6IHtcclxuICAgICAgICAgICAgb3ZlcmxheTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvcnQ6IDgwODBcclxuICAgIH0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgYWxpYXM6IHtcclxuICAgICAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZiLFNBQVMsY0FBYyxvQkFBb0I7QUFDeGUsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sV0FBVSwwQkFBMEI7QUFDM0MsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sY0FBYztBQVByQixJQUFNLG1DQUFtQztBQVV6QyxJQUFNLHFCQUFxQixNQUFNO0FBQzdCLFFBQU0sU0FBUyxhQUFhO0FBQzVCLFFBQU0sa0JBQWtCLE9BQU87QUFDL0IsU0FBTyxPQUFPLENBQUMsS0FBSyxZQUFZO0FBQzVCLFFBQUksSUFBSSxTQUFTLFVBQVU7QUFBRztBQUM5QixvQkFBZ0IsS0FBSyxPQUFPO0FBQUEsRUFDaEM7QUFDQSxTQUFPO0FBQ1g7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxJQUFJO0FBQUEsTUFDQSxVQUFVLEVBQUUsbUJBQW1CO0FBQUEsSUFDbkMsQ0FBQztBQUFBLElBQ0QsUUFBUSxFQUFFLFlBQVksS0FBSyxDQUFDO0FBQUEsSUFDNUIsT0FBTztBQUFBLE1BQ0gsU0FBUyxDQUFDLFlBQVksV0FBVztBQUFBLElBQ3JDLENBQUM7QUFBQSxJQUNELFVBQVU7QUFBQSxJQUNWLFNBQVM7QUFBQSxNQUNMLE9BQU8sSUFBSTtBQUNULFlBQUksQ0FBQyxrQ0FBa0MsRUFBRSxTQUFTLEVBQUUsR0FBRztBQUNyRCxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDSCxRQUFRO0FBQUEsTUFDSixXQUFXO0FBQUEsUUFDUCxhQUFhO0FBQUEsTUFDakI7QUFBQSxNQUNBLFFBQVE7QUFBQTtBQUFBLFFBRUosYUFBYTtBQUFBLFFBQ2IsVUFBVTtBQUFBLE1BQ2Q7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxjQUFjLG1CQUFtQjtBQUFBLEVBRWpDLFFBQVE7QUFBQSxJQUNKLEtBQUs7QUFBQSxNQUNELFNBQVM7QUFBQSxJQUNiO0FBQUEsSUFDQSxNQUFNO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3hDO0FBQUEsRUFDSjtBQUVKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
