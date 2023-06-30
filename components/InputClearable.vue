<template>
    <div class="q-pa-md">
        <div class="q-gutter-y-md column" style="max-width: 300px">
            <!-- clear-icon -->
            <q-input clearable clear-icon="close" filled color="purple-12" v-model="value" :label="label" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
interface Props {
    label?: string
    modelValue?: string
};

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

const value = computed({
    get() {
        return props.modelValue;
    },
    set(newValue) {
        emit('update:modelValue', newValue);
    },
});
</script>
  