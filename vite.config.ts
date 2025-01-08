import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const config = {
        define: {
            "process.env.NODE_ENV": JSON.stringify(mode),
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
            },
        },
        plugins: [react()],
        build: {
            sourcemap: false,
            reportCompressedSize: false,
            rollupOptions: {
                output: {
                    // manualChunks: {
                    //     vendor: ['react', 'react-router-dom', 'react-dom'],
                    //     ...renderChunks(dependencies),
                    // },
                    manualChunks: (id:any) => {
                        if (id.includes("node_modules")) {
                            const packageName = get_package_name(id);
                            if(react_package_names.includes(packageName)) {
                                return "react-vendor";
                            }else{
                                return "vendor";
                            }
                        }else{
                            // const package_path = path.normalize(id);
                            // if(package_path.includes(src_path)){
                            //     return "home";
                            // }
                        }
                    },
                },
            },
        },
    };
    return config;
});

const react_package_names = ["react", "react-dom", "react-router-dom"];
const src_path = path.normalize(path.resolve(__dirname, "./src"));
function get_package_name(id: string) {
    let segments = id.split('node_modules/');
    segments = segments[segments.length - 1].split('/');
    // const segments = id.split('node_modules/')[1].split('/');
    return segments[0].startsWith('@') ? `${segments[0]}/${segments[1]}` : segments[0];
}
