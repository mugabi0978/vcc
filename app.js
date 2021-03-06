import Vue from 'vue'
import VueRouter from 'vue-router'

// routes
import Home from './components/home'
import Agent from './components/agent'
import Caller from './components/caller'
import EndCall from './components/end-call'
import EndCallDrSession from './components/end-call-doctor'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/doctor', component: Agent },
    { path: '/caller', component: Caller },
    { path: '/end', component: EndCall },
    { path: '/enddrsession', component: EndCallDrSession }
  ]
})

new Vue({
  router
  // render: h => h(App)
}).$mount('#app')
