<template>
    <Dialog v-model="value" cancelBtnlabel="cancel" acceptBtnLabel="login" @handleLogin="handleLogin">
        <q-card-section class="flex flex-col row items-center">
            <div>LOGIN</div>
            <InputClearable v-model="userData.userName" label="User name" />
            <InputClearable v-model="userData.passWord" label="Password" />
        </q-card-section>

    </Dialog>
</template>

<script setup lang="ts">
interface Props {
    modelValue: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const isSigin = useSignIn();
const userData = reactive({
    userName: "mor_2314",
    passWord: "83r5^_",
});

const value = computed({
    get() {
        return props.modelValue;
    },
    set(newValue) {
        emit("update:modelValue", newValue);
    },
});

const handleLogin = async () => {
    try {
        const { data: loginData, pending, error, refresh } = await useFetch('/api/customer/login', {
            method: 'POST',
            body: {
                "username": userData.userName,
                "password": userData.passWord,
            }
        });
        if (loginData.value?.token) {
            isSigin.value = true;
        } else {
            isSigin.value = false;
        }
    } catch (error) {
        isSigin.value = false;
        console.error(error);
        return error;
    }
};
</script>
