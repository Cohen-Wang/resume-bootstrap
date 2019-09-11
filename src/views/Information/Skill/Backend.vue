<template>
    <div class="backend">
        <template v-for="item in getInfo.skill.backend">
            <div class="alert alert-success">
                <h4 class="alert-heading"
                    v-text="item.name"
                >
                </h4>
                <p>
                    <i v-for="ab in item.ability"
                       class=" fa fa-star"
                    >
                    </i>
                    <i v-for="abo in 5-item.ability"
                       class=" fa fa-star-o"
                    >
                    </i>
                </p>
                <hr>
                <p class="mb-0"
                   v-text="item.des"
                >
                </p>
            </div>
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
    export default class Backend extends Vue {

        @Getter('info_config')
        getInfo: any;

        created () {
            // console.log(this.getInfo);
        }

    }
</script>

<style lang="scss" scoped>

</style>