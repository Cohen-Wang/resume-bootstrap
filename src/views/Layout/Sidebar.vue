<template>
    <div class="sidebar">
        <div class="list-group">
            <template v-for="(item, index) in getRouters"
                      v-if="item.show && item.children && item.children.length>0"
            >
                <a href="javascript:void(0)"
                   class="list-group-item list-group-item-action"
                   :class="{active: $route.path === item.path}"
                   @click="changeRouter(item.path)"
                >
                    <!--TODO home???-->
                    <!--<i>{{$route.path}}</i><b>{{item.path}}</b>-->
                    <i v-if="item.meta.icon"
                       :class="item.meta.icon"
                    >
                    </i>
                    {{item.meta.title}}
                </a>
            </template>
        </div>
    </div>
</template>

<script lang="ts">

    import { Component, Vue } from "vue-property-decorator";
    import { State, Getter, Mutation, Action } from "vuex-class";

    /** 一定要用Component修饰 **/
    @Component({
        components: {

        }
    })
    export default class Sidebar extends Vue {

        @Getter('routers')
        getRouters: any;

        changeRouter (path: string): void {
            // TODO 学习区别
            // console.log(this.$route);
            // console.log(this.$router);

            if (this.$route.path === path) {
                return;
            }
            this.$router.push(path);
        }

        created () {
            // console.log(this.getRouters);
        }

    }
</script>

<style lang="scss" scoped>
    .sidebar{
        margin-bottom: 10px;
    }
</style>