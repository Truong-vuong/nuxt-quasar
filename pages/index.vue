<template>
  <GridTable
    :rows="dataProducts?.products"
    :columns="columns"
    v-model:pagination="pagination"
    @pageSize="pageSize"
    @setPage="setPage"
    title="Products table"
  />
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import GridTable from "@/components/grid-table/index.vue";

const pagination = ref({
  page: 1,
  rowsPerPage: 5,
  rowsNumber: 100,
});

const { data: dataProducts } = await useAsyncData(
  "products",
  () =>
    $fetch("/api/products/view-home-page", {
      query: {
        page: pagination.value.page,
        pageSize: pagination.value.rowsPerPage,
      },
    }),
  { watch: [pagination] }
);

const columns = reactive([
  {
    name: "id",
    label: "id",
    required: true,
    align: "left",
    field: 'id',
    format: (val) => `${val}`,
    sortable: true,
    isShow: true,
  },
  {
    name: "price",
    label: "price",
    align:'center',
    field: (rows) => `${rows.price}$`,
    sortable: true,
    isShow: true,
  },
  {
    name: "title",
    label: "title",
    field: "title",
    sortable: true,
    isShow: true,
  },
  {
    name: "rating",
    label: "rating",
    field: "rating",
    sortable: true,
    isShow: true,
  },
  {
    name: "description",
    label: "description",
    field: "description",
    isShow: false,
  },
  {
    name: "brand",
    label: "brand",
    field: "brand",
    sortable: true,
    isShow: true,
  },
  {
    name: "category",
    label: "category",
    field: "category",
    sortable: true,
    isShow: true,
  },
]);

// Function
const setPage = (e) => {
  pagination.value = {
    ...pagination.value,
    page: e,
  };
};
const pageSize = (ev) => {
  pagination.value = {
    ...pagination.value,
    rowsPerPage: ev,
  };
};
</script>
