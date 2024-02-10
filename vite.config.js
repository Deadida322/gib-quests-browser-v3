import { defineConfig, createLogger } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import svgLoader from 'vite-svg-loader'
import checker from "vite-plugin-checker";
import vuetify, {transformAssetUrls } from "vite-plugin-vuetify";
import path from "path";
import eslint from 'vite-plugin-eslint'
import commonjs from "vite-plugin-commonjs";

import inheritAttrs from 'vite-plugin-vue-setup-inherit-attrs';



const createCustomLogger = () => {
    const logger = createLogger();
    const originalWarning = logger.warn;
    logger.warn = (msg, options) => {
        if (msg.includes("vite:css")) return;
        originalWarning(msg, options);
    };
    return logger
};

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@use "@/style.scss" as *;`,
          },
        },
    },
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
            },
          }),
        checker({
            stylelint: {
                lintCommand: "stylelint ./src/**/*.{css,vue} --fix"
            },
            // eslint: {
            //     // for example, lint .ts and .tsx
            //     lintCommand: 'eslint "./src/**/*.{js,vue,html}"',
            //     logLevel: "error"
            // }
        }),
        inheritAttrs()
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
            "@": path.resolve(__dirname, "./src"),
        }
    },
   
});
