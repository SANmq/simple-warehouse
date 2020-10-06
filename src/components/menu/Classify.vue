<template>
    <div class="classify">
        <h2>分类列表及参数配置</h2>
        <el-table :data="classifyList" max-height="350">
            <el-table-column prop="className" label="分类名称" align="center"></el-table-column>
            <el-table-column label="品牌" align="center">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.brand"></el-checkbox>
                </template>
            </el-table-column>
            <el-table-column label="容量" align="center">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.capacity"></el-checkbox>
                </template>
            </el-table-column>

            <el-table-column label="分辨率" align="center">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.resolutionRatio"></el-checkbox>
                </template>
            </el-table-column>

            <el-table-column label="重量" align="center">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.quality"></el-checkbox>
                </template>
            </el-table-column>
            <el-table-column label="系统" align="center">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.system"></el-checkbox>
                </template>
            </el-table-column>
            <el-table-column label="内存" align="center">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.memory"></el-checkbox>
                </template>
            </el-table-column>
            <el-table-column label="硬盘存储" align="center">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.storage"></el-checkbox>
                </template>
            </el-table-column>
            <el-table-column label="cpu频率" align="center">
                <template slot-scope="scope">
                    <el-checkbox v-model="scope.row.cpu"></el-checkbox>
                </template>
            </el-table-column>

            <el-table-column label="操作" align="center" width="180px">
                <template slot-scope="scope">
                    <el-button
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="text-align: center;margin-top: 10px">
            <el-button @click="add" type="primary">新增分类</el-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Classify",
        data() {
            return {
                dict: {
                    className: '分类名称',
                    brand: '品牌',
                    capacity: '容量',
                    resolutionRatio: '分辨率',
                    quality: '重量',
                    system: '系统',
                    memory: '内存',
                    storage: '硬盘存储',
                    cpu: 'cpu主频'
                },
                classifyList: [
                    {
                        className: '分类名称1',
                        brand: false,
                        capacity: false,
                        resolutionRatio: false,
                        quality: false,
                        system: false,
                        memory: false,
                        storage: false,
                        cpu: false
                    },
                    {
                        className: '分类名称2',
                        brand: false,
                        capacity: false,
                        resolutionRatio: false,
                        quality: false,
                        system: false,
                        memory: false,
                        storage: false,
                        cpu: false
                    },
                ]
            }
        },
        methods: {
            add() {
                this.$prompt('请输入新的分类名称', '输入', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({value}) => {
                    this.$message({
                        type: 'success',
                        message: '添加' + value + '成功'
                    }, () => {
                    })
                    this.classifyList.push({
                        className: value,
                        brand: false,
                        capacity: false,
                        resolutionRatio: false,
                        quality: false,
                        system: false,
                        memory: false,
                        storage: false,
                        cpu: false
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消添加'
                    });
                });


            },
            handleDelete(index, row) {
                this.classifyList.splice(index, 1)
            }
        }

    }
</script>

<style scoped>

</style>