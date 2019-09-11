<template>
    <div class="education">
        <div class="card">
            <div class="card-header">
                教育
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">学历:</label>
                        <div class="col-sm-10">
                            <input type="text"
                                   readonly
                                   class="form-control-plaintext"
                                   value="本科"
                                   style="outline: none"
                            >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">大学:</label>
                        <div class="col-sm-10">
                            <input type="text"
                                   readonly
                                   class="form-control-plaintext"
                                   value="西华师范大学"
                                   style="outline: none"
                            >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">专业:</label>
                        <div class="col-sm-10">
                            <input type="text"
                                   readonly
                                   class="form-control-plaintext"
                                   value="国际经济与贸易"
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
    export default class Education extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>