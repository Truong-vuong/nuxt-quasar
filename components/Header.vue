<template>
    <div>
        <q-toolbar class="bg-primary text-white px-10">
            <q-btn flat round dense icon="menu" class="q-mr-sm" />
            <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            <q-toolbar-title>Quasar App</q-toolbar-title>
            <div class="flex space-x-10 mr-10">
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/products">Products</nuxt-link>
                <nuxt-link to="/about">About</nuxt-link>
            </div>
            <q-btn @click="() => isSigin ? isShowUserInfoPopup = true : isShowAccountPopup = true" flat round dense
                icon="people" class="reactive">
                <CustomersUserInformation v-if="isSigin && isShowUserInfoPopup" v-model="isShowAccountPopup"
                    @handleLogout="handleLogout" class="absolute">
                </CustomersUserInformation>
            </q-btn>
        </q-toolbar>
    </div>

    <CustomersLoginPopup v-if="!isSigin && isShowAccountPopup" v-model="isShowAccountPopup" class="hidden">
    </CustomersLoginPopup>
</template>
<script setup lang="ts">
const isSigin = useSignIn();
const isShowAccountPopup = ref(false);
const isShowUserInfoPopup = ref(false);

const handleLogout = () => {
    isSigin.value = false;
    isShowUserInfoPopup.value = false;
    isShowAccountPopup.value = false;
};
</script>