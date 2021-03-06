// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
// import axios from 'axios'
import Quasar from 'quasar'
import VueI18n from 'vue-i18n'
import router from './router'
import locales from './lang/locale'
// import 'quasar-extras/animate'

// AddressbarColor.set('#a2e3fa')
Vue.config.productionTip = true
Vue.use(Quasar) // Install Quasar Framework
Vue.use(VueI18n) // Use I18n
// Vue.prototype.$http = axios

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'

// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale: 'EU', // set locale
  messages: locales, // set locale messages
  fallbackLocale: 'EU'
})

/* NOTES

  TODO: refactor App.js to split out some logical parts.
  TODO:

*/

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    i18n,
    router,
    rippleEnabled: true,
    render: h => h(require('./App').default)
  })
})
