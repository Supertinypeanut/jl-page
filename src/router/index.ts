import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/login',
		component: ()=> import('@/views/login.vue')
	},
	{
		path: '/register',
		component: ()=> import('@/views/register.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
