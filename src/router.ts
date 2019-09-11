import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Layout from './views/Layout/Index.vue';


Vue.use(Router);


export const asyncRouterMap = [
    {
        path: '/',// 默认首页路径
        name: 'dashboard',// 命名
        component: Layout,// 加载的组件
        show: true,
        meta: {
            title: '首页',
            icon: 'fa fa-database',
        },
        redirect: '/home',// 重定向到/home路径
        children: [
            {
                path: '/home',
                name: 'home',
                meta: {
                    title: '封面',
                    icon: 'fa fa-home',
                },
                component: () => import('@/views/Home.vue'),
            }
        ]
    },
    {
        path: '/baseInfo',
        name: 'baseInfo',
        component: Layout,
        show: true,
        meta: {
            title: '基本信息',
            icon: 'fa fa-archive',
        },
        redirect: '/baseInfo',
        children: [
            {
                path: '/baseInfo',
                name: 'baseInfo',
                meta: {
                    title: '详情',
                    icon: 'fa fa-home',
                },
                component: () => import('@/views/Information/BaseInfo.vue'),
            }
        ]
    },
    {
        path: '/education',
        name: 'education',
        component: Layout,
        show: true,
        meta: {
            title: '教育',
            icon: 'fa fa-bank',
        },
        redirect: '/education',
        children: [
            {
                path: '/education',
                name: 'education',
                meta: {
                    title: '详情',
                    icon: 'fa fa-home',
                },
                component: () => import('@/views/Information/Education.vue'),
            }
        ]
    },
    {
        path: '/skill',
        name: 'skill',
        component: Layout,
        show: true,
        meta: {
            title: '技能',
            icon: 'fa fa-certificate',
        },
        redirect: '/skill',
        children: [
            {
                path: '/skill',
                name: 'skill',
                component: () => import('@/views/Information/Skill.vue'),
                redirect: '/skill/frontend',
                children: [
                    {
                        path: '/skill/frontend',
                        name: 'frontend',
                        meta: {
                            title: '前端',
                            icon: 'fa fa-home',
                        },
                        component: () => import('@/views/Information/Skill/Frontend.vue'),
                    },
                    {
                        path: '/skill/backend',
                        name: 'backend',
                        meta: {
                            title: '后端',
                            icon: 'fa fa-home',
                        },
                        component: () => import('@/views/Information/Skill/Backend.vue'),
                    },
                    {
                        path: '/skill/server',
                        name: 'server',
                        meta: {
                            title: '服务器',
                            icon: 'fa fa-home',
                        },
                        component: () => import('@/views/Information/Skill/Server.vue'),
                    },
                    {
                        path: '/skill/tools',
                        name: 'tools',
                        meta: {
                            title: '构建工具',
                            icon: 'fa fa-home',
                        },
                        component: () => import('@/views/Information/Skill/Tools.vue'),
                    },
                ],
            }
        ]
    },
    {
        path: '/experience',
        name: 'experience',
        component: Layout,
        show: true,
        meta: {
            title: '工作经验',
            icon: 'fa fa-shopping-bag',
        },
        redirect: '/experience',
        children: [
            {
                path: '/experience',
                name: 'experience',
                meta: {
                    title: '详情',
                    icon: 'fa fa-home',
                },
                component: () => import('@/views/Information/Experience.vue'),
            }
        ]
    },
    {
        path: '/expectation',
        name: 'expectation',
        component: Layout,
        show: true,
        meta: {
            title: '期望',
            icon: 'fa fa-thumbs-up',
        },
        redirect: '/expectation',
        children: [
            {
                path: '/expectation',
                name: 'expectation',
                meta: {
                    title: '详情',
                    icon: 'fa fa-home',
                },
                component: () => import('@/views/Information/Expectation.vue'),
            }
        ]
    },


    {
        path: '/404',
        name: '404',
        show: false,
        meta: {
            title: '404',
            //icon: 'fa fa-table',
        },
        component: () => import('@/views/404.vue'),
    },
    {
        path: '*',
		show: false,
        redirect: '/404',
    },
];



const router: any = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: asyncRouterMap,
});

export default router;
