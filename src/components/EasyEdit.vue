<template>
    <div>
        <el-form :model="row" inline label-width="80px">
            <el-form-item :label="v" v-for="(v,i) in k" :key="v">
                <el-input v-model.number="row[v]" v-if="typeof row[v] === 'number'"></el-input>
                <el-input v-model="row[v]" v-else @input="update"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "EasyEdit",
        props: {
            row: {
                type: Object,
                require: true
            },
            k: {
                type: Array,
                require: true
            }
        },
        created() {

        },

        data() {
            return {
                test: 'sjkfls',
                list: ['price', 'fare'],
                fromData: {
                    price: '',
                    fare: ''
                }
            }
        },
        methods: {
            update() {
                this.$emit('update', this.formData)
            }
        }
    }
</script>

<style scoped>

</style>