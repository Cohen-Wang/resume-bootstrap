<template>
    <div class="layout">
        <!-- 导航 -->
        <Navbar />

        <!-- 头部 -->
        <Header/>

        <!-- 内容 -->
        <Content>
            <Sidebar slot="left"></Sidebar>
            <router-view slot="content"></router-view>
        </Content>
    </div>
</template>

<script lang="ts">

    import { Component, Vue } from "vue-property-decorator";
    import Navbar from "./Navbar.vue";
    import Header from "./Header.vue";
    import Content from "./Content.vue";
    import Sidebar from "./Sidebar.vue";

    /** 一定要用Component修饰 **/
    @Component({
        components: {
            Navbar,
            Header,
            Content,
            Sidebar
        }
    })
    export default class Layout extends Vue {

    }
</script>

<style lang="scss" scoped>
    .layout {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background-image: url(../../assets/login-back.svg);
        background-repeat: no-repeat;
        background-position: center 110px;
        background-size: 100%;
    }
</style>