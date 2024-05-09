import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'aemReactCoreWcmComponentsBase',
      fileName: (format) => `aem-react-core-wcm-components-base.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-router-dom',
        '@adobe/aem-spa-page-model-manager',
        '@adobe/aem-spa-component-mapping',
        '@adobe/aem-react-editable-components',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
          'react-router-dom': 'ReactRouter',
          '@adobe/aem-spa-page-model-manager': 'AemSpaPageModelManager',
          '@adobe/aem-spa-component-mapping': 'AemSpaComponentMapping',
          '@adobe/aem-react-editable-components': 'AemReactEditableComponents',
        },
        assetFileNames: 'aem-react-core-wcm-components-base.[ext]',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: '**/__tests__/**',
    }),
  ],
});
