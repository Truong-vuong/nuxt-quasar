<template>
    <div class="flex space-x-4 p-4">
        <q-btn @click="isShowSettingPopup = true" class="primary">Setting</q-btn>
    </div>
    <SettingTab v-if="isShowSettingPopup" class="hidden" v-model:value="isShowSettingPopup" :columns="columns"
        :visibleColumns="visibleColumns" @onSave="handleOnSave" @close="isShowSettingPopup = false;"></SettingTab>
</template>

<script setup>
import SettingTab from './setting-tab.vue';

const props = defineProps({
    data: Array,
    columns: Array,
    visibleColumns: Array,
});
const emit = defineEmits(['update:modelValue', 'update:visibleColumns'])

const isShowSettingPopup = ref(false);

const handleOnSave = (e) => {
    emit("update:visibleColumns", e);
    isShowSettingPopup.value = false;
};
</script>