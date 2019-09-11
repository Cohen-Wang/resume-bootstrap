<template>
    <div class="baseInfo">
        <div class="card">
            <div class="card-header">
                基本信息
            </div>
            <div class="card-body">
                <h5 class="card-title">个人信息</h5>

                <!--头像-->
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">头像：</label>
                    <div class="col-sm-3">
                        <img :src="require('@/assets/cohen.png')"
                             alt="头像"
                             class="img-thumbnail"
                        >
                    </div>
                </div>


                <div class="form-group row"
                     v-for="item in getInfo.baseInfo"
                >
                    <label class="col-sm-2 col-form-label"
                           v-text="item.name"
                    >
                    </label>
                    <div class="col-sm-10">
                        <input type="text"
                               readonly
                               class="form-control-plaintext"
                               v-model="item.value"
                               style="outline: none"
                        >
                    </div>
                </div>

            </div><!--card-body-->
        </div><!--card-->
    </div><!--baseInfo-->
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { State, Getter, Mutation, Action } from 'vuex-class';

    @Component({
        components: {

        },
    })
    export default class BaseInfo extends Vue {

        @Getter('info_config')
        getInfo: any;

    }
</script>

<style lang="scss" scoped>

</style>