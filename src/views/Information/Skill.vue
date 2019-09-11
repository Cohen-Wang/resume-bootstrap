<template>
    <div class="skill">
        <ul class="nav nav-tabs" id="myTab">
            <router-link tag="li"
                         class="nav-item"
                         :to="{name: 'frontend'}"
            >
                <a class="nav-link"
                   :class="{active: $route.path === '/skill/frontend'}"
                >
                    前端
                </a>
            </router-link>
            <router-link tag="li"
                         class="nav-item"
                         :class="{active: $route.path === '/skill/backend'}"
                         :to="{name: 'backend'}"
            >
                <a class="nav-link"
                   :class="{active: $route.path === '/skill/backend'}"
                >
                    后端
                </a>
            </router-link>
            <router-link tag="li"
                         class="nav-item"
                         :class="{active: $route.path === '/skill/server'}"
                         :to="{name: 'server'}"
            >
                <a class="nav-link"
                   :class="{active: $route.path === '/skill/server'}"
                >
                    服务器
                </a>
            </router-link>
            <router-link tag="li"
                         class="nav-item"
                         :class="{active: $route.path === '/skill/tools'}"
                         :to="{name: 'tools'}"
            >
                <a class="nav-link"
                   :class="{active: $route.path === '/skill/tools'}"
                >
                    其他工具
                </a>
            </router-link>
        </ul>


        <div class="tab-content">
            <!-- 显示内容 -->
            <router-view></router-view>
        </div>


    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {

        },
    })
    export default class Skill extends Vue {

    }
</script>

<style lang="scss" scoped>
    .skill {

        ul {
            margin-bottom: 16px;
        }
        .tab-content {

        }
    }
</style>