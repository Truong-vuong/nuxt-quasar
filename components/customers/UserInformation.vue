<template>
    <div class="q-pa-md">
        <q-menu v-model="value">
            <div class="row no-wrap q-pa-md">
                <div class="column">
                    <div class="text-h6 q-mb-md">Settings</div>
                    <q-toggle v-model="isShowAvatar" label="Hide avatar" />
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="column items-center">
                    <q-avatar size="72px">
                        <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                    </q-avatar>

                    <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                    <q-btn color="primary" label="Logout" push size="sm" @click="emit('handleLogout')" />
                </div>
            </div>
        </q-menu>
    </div>
</template>
  
<script setup lang="ts">
interface Props {
    modelValue: boolean,
    cancelBtnlabel?: string,
    acceptBtnLabel?: string,
};

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue', 'handleLogout']);

const isShowAvatar = ref(false);

const value = computed({
    get() {
        return props.modelValue;
    },
    set(newValue) {
        emit('update:modelValue', newValue);
    }
});
</script>
  