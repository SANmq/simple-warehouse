<template>
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
</template>

<script>
    export default {
        name: "linshi"
    }
</script>

<style scoped>

</style>