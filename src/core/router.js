import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from "@/views/IndexLayout.vue";
import ContactsLayout from "@/views/ContactsLayout.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: IndexLayout
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsLayout,
        beforeEnter: guardRoute,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


async function guardRoute(to, from, next) {
    const {userRole, currentView} = localStorage

    if ((userRole === 'admin' || userRole==='user')) {
        await router.app.$options.store.dispatch("STORE_USER", userRole)
        await router.app.$options.store.dispatch("STORE_CURRENT_VIEW", currentView)
        next()
    } else next({name: "index"})
}

export default router
