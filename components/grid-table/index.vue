<template>
  <div>
    <HeaderToolbar
      :rows="rows"
      :columns="columns"
      v-model:visibleColumns="visibleColumns"
    ></HeaderToolbar>
  </div>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      v-table-resizable
      :rows="rows"
      :columns="columns"
      :title="title"
      :visible-columns="visibleColumns"
      hide-pagination
      separator="cell"
      v-model:pagination="pagination"
      selection="single"
      v-model:selected="selected"
      :filter="filter"
      row-key="id"
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <!-- <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            class="text-purple font-bold text-2xl"
          >
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
      </template> -->
    </q-table>
    <div class="flex justify-end">
      <div class="flex min-w-[100px] align-center">
        <q-select
        transition-show="scale"
        transition-hide="scale"
        filled
        v-model="model"
        :options="options"
        style="width: 50px"
      />
      </div>
      <div class="flex justify-center">
        <q-btn   v-if="pagesNumber > 2" @click="firstPage" icon="first_page" color="grey-8" round dense flat />

        <q-btn
          icon="chevron_left"
          color="grey-8"
          round
          dense
          flat
          :disable="props.pagination.page <=1"
          @click="prePage"
        />

        <q-btn
          icon="chevron_right"
          color="grey-8"
          round
          dense
          flat
          :disable="props.pagination.page >= pagesNumber"
          @click="nextPage"
        />

        <q-btn   v-if="pagesNumber > 2" @click="lastPage" icon="last_page" color="grey-8" round dense flat />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderToolbar from "./header-toolbar.vue";

const props = defineProps({
  rows: Array,
  columns: Array,
  pagination: Object,
  minWidth: Number,
  title: String,
});
const emit = defineEmits(["prePage", "nextpage", "pageSize", 'setPage']);

const filter = ref("");
const visibleColumns = ref(
  props.columns.map((c) => (c.isShow ? c.name : null))
);
const selected = ref([]);
const pagination = ref(props.pagination);
const pagesNumber = computed(() => {
  return Math.ceil(props.pagination.rowsNumber / props.pagination.rowsPerPage);
});
watch(pagesNumber, (val) => {
  console.log(val)
}, { immediate: true})
const options = ref([3, 5, 10, 12, 15]);
const model = ref(5);
// Funtion
const nextPage = () => {
  emit("setPage", props.pagination.page + 1);
};
const prePage = () => {
  emit("setPage", props.pagination.page - 1);
};
const firstPage = () => {
  emit("setPage", 1);
};
const lastPage = () => {
  emit("setPage", pagesNumber.value);
};
watch(model, (val) => {
  emit("pageSize", val);
})
</script>
