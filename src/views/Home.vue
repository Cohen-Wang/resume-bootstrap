<template>
    <div class="home">
        <img src="@/assets/home.jpg"
             alt="首页"
             class="img-thumbnail"
        >
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {

        },
    })
    export default class Home extends Vue {

    }
</script>

<style lang="scss">
    .home{
        width: 100%;
        height: 100%;
        background-image: url(../assets/login-back.svg);
        background-repeat: no-repeat;
        background-position: center 110px;
        background-size: 100%;
        .page-center{
            position: relative;
            top: 200px;
            text-align: center;
            .des {
                margin-bottom: 20px;
                font:900 34px/1 "仿宋";
            }
            .el-avatar {
                margin-bottom: 30px;
            }
        }
    }
</style>