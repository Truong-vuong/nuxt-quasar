<template>
    <div>
        <HeaderToolbar :rows="rows" :columns="columns" v-model:visibleColumns="visibleColumns"></HeaderToolbar>
    </div>
    <div class="">
        <q-table :rows="rows" :columns="columns" :title="title" :visible-columns="visibleColumns" hide-pagination
            v-model:pagination="pagination" v-model:selected="selected" :filter="filter" bordered row-key="name">
            <template v-slot:top-right>
                <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                    <template v-slot:append>
                        <q-icon name="search" />
                    </template>
                </q-input>
            </template>
            <template v-slot:header="props">
                <q-tr :props="props">
                    <q-th v-for="col in props.cols" :key="col.name" :props="props" class="text-purple font-bold text-2xl">
                        {{ col.label }}
                    </q-th>
                </q-tr>
            </template>
            <template v-slot:body="props" v-if="$slots.body">
                <q-tr :props="props">
                    <q-td key="name" :props="props">
                        {{ props.row.name }}
                    </q-td>
                </q-tr>
            </template>
        </q-table>
        <div class="flex justify-center">
            <div>
                <q-btn color="primary" label="Basic Menu">
                    <q-menu>
                        <q-list style="min-width: 100px">
                            <q-item clickable v-close-popup>
                                <q-item-section>New tab</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>New incognito tab</q-item-section>
                            </q-item>
                            <q-separator />
                            <q-item clickable v-close-popup>
                                <q-item-section>Recent tabs</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>History</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>Downloads</q-item-section>
                            </q-item>
                            <q-separator />
                            <q-item clickable v-close-popup>
                                <q-item-section>Settings</q-item-section>
                            </q-item>
                            <q-separator />
                            <q-item clickable v-close-popup>
                                <q-item-section>Help &amp; Feedback</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>

            </div>
            <q-btn icon="first_page" color="grey-8" round dense flat />

            <q-btn icon="chevron_left" color="grey-8" round dense flat @click="prePage" />

            <q-btn icon="chevron_right" color="grey-8" round dense flat @click="nextPage" />

            <q-btn icon="last_page" color="grey-8" round dense flat />
        </div>
    </div>
</template>
  
<script setup >
import HeaderToolbar from './header-toolbar.vue';

const props = defineProps({
    rows: Array,
    columns: Array,
    pagination: Object,
    minWidth: Number,
    title: String,
});
const emit = defineEmits(['prePage', 'nextpage']);

const filter = ref('');
const visibleColumns = ref(
    props.columns.map((c) => (c.isShow ? c.name : null))
);
const selected = ref([]);
const pagination = ref(props.pagination);
const pagesNumber = computed(() => {
    return Math.ceil(pagination.value.rowsNumber / pagination.value.rowsPerPage)
});
console.log('length', props.rows)
console.log('pagesNumber', pagesNumber.value)

// Funtion
const nextPage = () => {
    emit('nextPage', props.pagination.page + 1,)
};
const prePage = () => {
    emit('prePage', props.pagination.page - 1,)
};
</script>
  