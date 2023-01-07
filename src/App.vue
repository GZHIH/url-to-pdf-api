<script lang="ts">
import { onMounted } from 'vue';
import Test from '@/script/utils/test';
import TableVue from '@/view/table/index.vue';
import PanelVue from '@/view/panel/index.vue';

export default {
    components: { TableVue, PanelVue },
    setup() {
        onMounted(() => {
            Test();
        });
    },
};
</script>

<template>
    <h1>网页导出PDF</h1>
    <PanelVue />
    <TableVue />
</template>

<style lang="less">
#app {
    h1 {
        text-align: center;
    }
}
</style>
