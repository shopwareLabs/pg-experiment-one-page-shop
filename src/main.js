// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import template from './template.html'
import './style.css'

import topbar from './components/topbar/'
import heading from './components/heading/'
import navigation from './components/navigation/'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    template,
    el: '#app',
    router,
    components: {
        topbar,
        heading,
        navigation
    }
});
