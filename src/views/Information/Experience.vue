<template>
    <div class="experience">
        <template v-for="item in getInfo.experience">
            <div class="card mb-3">
                <div class="card-body shadow-sm">
                    <h4 class="card-title">
                        <span v-text="item.time"></span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <small class="text-muted"
                               style="font-size: 12px"
                               v-text="item.company"
                        >
                        </small>
                    </h4>
                    <p v-text="item.des"></p>
                </div><!--card-body-->
            </div><!--card-->
        </template>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { State, Getter, Mutation, Action } from 'vuex-class';

    @Component({
        components: {

        },
    })
    export default class Experience extends Vue {

        @Getter('info_config')
        getInfo: any;



    }
</script>

<style lang="scss" scoped>

</style>