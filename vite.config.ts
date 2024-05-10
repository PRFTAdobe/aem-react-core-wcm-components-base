import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      fileName: (format) => `aem-react-core-wcm-components-base.${format}.js`,
      name: 'aemReactCoreWcmComponentsBase',
    },
    rollupOptions: {
      external: [
        '@adobe/aem-spa-page-model-manager',
        '@adobe/aem-spa-component-mapping',
        '@adobe/aem-react-editable-components',
        'dompurify',
        'html-react-parser',
        'react',
        'react-dom',
        'react-router-dom',
      ],
      output: {
        assetFileNames: 'aem-react-core-wcm-components-base.[ext]',
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          '@adobe/aem-react-editable-components': 'AemReactEditableComponents',
          '@adobe/aem-spa-component-mapping': 'AemSpaComponentMapping',
          '@adobe/aem-spa-page-model-manager': 'AemSpaPageModelManager',
          dompurify: 'DOMPurify',
          'html-react-parser': 'HtmlReactParser',
          react: 'React',
          'react-dom': 'ReactDom',
          'react-router-dom': 'ReactRouter',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      exclude: '**/__tests__/**',
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
