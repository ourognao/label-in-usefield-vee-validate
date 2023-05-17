/* eslint-env node */
const { configure } = require('quasar/wrappers');
const path = require('path')
const fs = require('fs')

module.exports = configure(function (ctx) {
  return {
    eslint: {
      warnings: true,
      errors: true
    },
    boot: ['components/shared', 'i18n', 'v-validate'],
    css: [
      'app.sass'
    ],
    extras: [
      'roboto-font',
      'material-icons',
    ],
    build: {
      alias: { node_modules: path.join(__dirname, './node_modules') },
      target: {
        browser: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
        node: 'node16'
      },
      vueRouterMode: 'hash',
      vueOptionsAPI: true,
      rebuildCache: true,
      extendViteConf (viteConf, { isClient }) {
        if (isClient) {
          viteConf.optimizeDeps.include = ['fast-deep-equal']
        }
      },
      vitePlugins: [
        ['@intlify/vite-plugin-vue-i18n', {
          include: path.resolve(__dirname, './src/i18n/**')
        }]
      ],
    },
    devServer: ctx.dev
      ? {
        port: ctx.mode.spa ? 9100 : (ctx.mode.pwa ? 8090 : 8080),
        open: true
      }
      : {},
    framework: {
      config: {},
      plugins: []
    },
    animations: [],
    ssr: { pwa: false, prodPort: 3000, middlewares: ['render'] },
    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
    },
    cordova: {
    },
    capacitor: {
      hideSplashscreen: true
    },
    electron: {
      inspectPort: 5858,

      bundler: 'packager',

      packager: {
      },

      builder: {
        appId: 'quasar-project'
      }
    },
    bex: {
      contentScripts: [
        'my-content-script'
      ],
    }
  }
});
