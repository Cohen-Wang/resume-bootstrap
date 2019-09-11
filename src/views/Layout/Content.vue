<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-4 col-md-3">
                <!-- 左侧菜单 -->
                <div class="left">
                    <slot name="left"></slot>
                </div>
            </div>
            <div class="col-sm-8 col-md-9">
                <!-- 面包屑导航 -->
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"
                            v-for="(item, index) in breadCrumbItems"
                        >
                            <a href="javascript:void(0)"
                               @click.prevent="changeRouter(item.path)"
                            >
                                {{item.title}}
                            </a>
                        </li>
                    </ol>
                </nav>
                <!-- 主体内容 -->
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    import { Component, Vue, Provide, Watch } from "vue-property-decorator";

    /** 一定要用Component修饰 **/
    @Component({
        components: {

        }
    })
    export default class Content extends Vue {

        @Provide()
        breadCrumbItems: any;// 面包屑的数组

        initBreadCrumbItems (route:any) {
            //console.log(route);

            // 定义根路由
            let breadCrumbItems: any = [
                {
                    path: '/',
                    title: '个人信息',
                },
            ];

            // 过程
            for (const index in route.matched) {
                if (route.matched.hasOwnProperty(index)) {
                    if (route.matched[index].meta && route.matched[index].meta.title) {
                        breadCrumbItems.push({
                            path: route.matched[index].path ? route.matched[index].path : '/',
                            title: route.matched[index].meta.title,
                        })
                    }
                }
            }

            // 赋值
            this.breadCrumbItems = breadCrumbItems;

            // console.log(this.breadCrumbItems);
        }

        @Watch('$route')
        handleRouteChange (to: any): void {
            this.initBreadCrumbItems(to);
        }

        changeRouter (path: string): void {
            if (this.$route.fullPath === path) {
                return;
            }
            this.$router.push(path);
        }

        created () {
            /* TODO 区别？？？ */
            this.initBreadCrumbItems(this.$route);
        }



    }
</script>

<style lang="scss" scoped>
    .content {
        margin-bottom: 1000px;
    }
</style>