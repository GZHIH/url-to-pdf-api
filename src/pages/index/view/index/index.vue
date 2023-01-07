<script  lang="ts">
import { onMounted } from 'vue';
import { getCurrentInstance } from 'vue';

export default {
    setup() {
        const globalProperties = getCurrentInstance()?.appContext.config.globalProperties;
        console.log('组件内访问全局状态', globalProperties);

        onMounted(() => {});
    },
};
</script>

<template>
    <div class="index">index</div>
</template>

<style lang="less" scoped>
.index {
    color: red;
}
</style>