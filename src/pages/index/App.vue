<script lang="ts">
import { onMounted } from 'vue';
import Test from '@/script/utils/test';

export default {
    setup() {
        onMounted(() => {
            Test();
        });
    },
};
</script>

<template>
    <router-view></router-view>
</template>


<style>
</style>
