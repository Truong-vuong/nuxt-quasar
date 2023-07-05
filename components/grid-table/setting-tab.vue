<template>
    <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="isShow" persistent>
            <q-card class="p-4">
                <h2 class="p-2 font-bold">Table Setting</h2>
                <div>
                    <h3>View column</h3>
                    <div class="grid grid-cols-4">
                        <div class="q-pa-sm rounded-borders">
                            Accepted genres:
                            <q-option-group name="accepted_genres" v-model="accepted" :options="options" type="checkbox"
                                color="primary" inline />
                        </div>
                    </div>
                </div>
                <div class="flex flex-end space-x-4">
                    <q-btn color="primary" label="Cancel" v-close-popup @click="emit('close')" />
                    <q-btn @click="onSave" color="secondary" label="Submit" />
                </div>
            </q-card>
        </q-dialog>
    </div>
</template>

<script setup lang="ts">
interface Props {
    value: Boolean,
    columns: any[],
    visibleColumns: Array
};
const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue', 'onSave', 'close'])
const isShow = computed({
    get() {
        return props.value;
    },
    set(newValue) {
        emit('update:modelValue', newValue);
    }
});

const options = props.columns.map((c) => {
    return { label: c.label, value: c.name };
});
const accepted = ref(props.visibleColumns);
const onSave = () => {
    emit('onSave', accepted.value);
}
</script>
