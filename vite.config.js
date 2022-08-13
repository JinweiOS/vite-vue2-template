import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.join(__dirname, "src"),
        },
        extensions: ['.vue', '.js', '.png']
    },
    base: "/",
    plugins: [vue2()]
})
