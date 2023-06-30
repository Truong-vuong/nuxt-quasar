<template>
    <q-card flat bordered>
        <nuxt-link :to="`/products/${data.id}`">
            <q-card-section>
                <div class="text-h6 q-mb-xs">{{ data.title }}</div>
                <div class="row no-wrap items-center">
                    <q-rating size="18px" v-model="data.rating.rate" :max="5" color="primary" />
                    <span class="text-caption text-grey q-ml-sm">{{ data.rating.rate }} {{ data.rating.count }}</span>
                </div>
            </q-card-section>
            <img :src="data.image">
        </nuxt-link>
    </q-card>
</template>
  
<script setup>
const props = defineProps({
    data: Object
});

</script>
  
<style scoped>
.my-card {
    width: 100%;
    max-width: 300px;
}
</style>
  