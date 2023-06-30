<template>
    <h1>{{ dataDetail?.title }}</h1>
    <p>{{ dataDetail?.price }}</p>
    <p>{{ dataDetail?.description }}</p>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
const { data: dataDetail } = await useFetch(`/api/products/${id}`);
</script>