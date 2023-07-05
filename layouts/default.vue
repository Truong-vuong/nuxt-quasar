<template>
    <Header></Header>
    <div class="bg-cyan text-white">
        <q-toolbar inset>
            <q-breadcrumbs active-color="white" style="font-size: 16px">
                <q-breadcrumbs-el label="Home" />
            </q-breadcrumbs>
        </q-toolbar>
    </div>
    <main>
        <slot></slot>
    </main>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
// console.log('route', route)
// console.log('router', router)
</script>