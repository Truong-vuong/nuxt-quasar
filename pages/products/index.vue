<template>
    <div class="grid grid-cols-4 gap-4">
        <div v-for="item, index in dataProducts">
            <Card :data="item"></Card>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data: dataProducts } = await useFetch('/api/products/view-home-page', { query: { pageSize: '5' } });
</script>