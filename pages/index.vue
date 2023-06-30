<template>
    <div class="flex flex-col">
        <Table :data="dataProducts"></Table>
    </div>
</template>

<script setup lang="ts">
const { data: dataProducts } = await useFetch('/api/products/view-home-page', { query: { pageSize: '5' } });
</script>