<template>
    <div class="expectation">

        <div class="card">
            <div class="card-header">期望</div>
            <div class="card-body">
                <form>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">工资:</label>
                        <div class="col-sm-10">
                            <input type="text"
                                   readonly
                                   class="form-control-plaintext"
                                   value="15k"
                                   style="outline: none"
                            >
                        </div>
                    </div>
                </form>
            </div><!--card-body-->
        </div><!--card-->
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {

        },
    })
    export default class Expectation extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>