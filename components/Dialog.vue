<template>
    <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="value" persistent>
            <q-card>
                <slot></slot>
                <slot name="vuong" v-if="$slots.vuong">
                    <p>Vuong truong</p>
                </slot>
                <q-card-actions align="right">
                    <q-btn flat :label="cancelBtnlabel" color="primary" v-close-popup />
                    <q-btn flat :label="acceptBtnLabel" color="primary" @click="emit('handleLogin')" />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script setup lang="ts">
interface Props {
    modelValue: boolean,
    cancelBtnlabel?: string,
    acceptBtnLabel?: string,
};

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue', 'handleLogin'])
const value = computed({
    get() {
        return props.modelValue;
    },
    set(newValue) {
        emit('update:modelValue', newValue);
    }
});
</script>
