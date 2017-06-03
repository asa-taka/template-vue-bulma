const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: { template: `
        <div>a VueRouter works!</div>
      `}
    }
  ]
})

new Vue({
  el: '#app',
  router,
})
