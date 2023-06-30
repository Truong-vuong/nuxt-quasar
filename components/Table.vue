<template>
    <div class="q-pa-md">
        <q-table title="Products" :rows="props.data" :columns="columns" row-key="name" :dense="$q.screen.lt.md">
            <template v-slot:body-cell-row="props">
                <tr>sdfsdf</tr>
            </template>
        </q-table>
    </div>
</template>
  
<script setup>
const props = defineProps({
    data: Array,
});
const columns = [
    {
        name: 'id',
        label: 'id',
        required: true,
        align: 'left',
        field: 'id',
        format: val => `${val}`,
        sortable: true
    },
    { name: 'category', align: 'center', label: 'category', field: 'category', sortable: true },
    { name: 'price', label: 'price', field: 'price', sortable: true },
    { name: 'title', label: 'title', field: 'title' },
    { name: 'rating', label: 'rating', field: rows => rows.rating.rate },
    // { name: 'image', label: 'image', field: rows => rows.image },
]
</script>
  