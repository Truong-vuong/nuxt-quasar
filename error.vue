<template>
    <NuxtLayout name="default">
        <div class="not-found">
            <div class="page-title">
                <h1>Whoops, our bad...</h1>
            </div>
        </div>
    </NuxtLayout>
</template>
  
<script setup lang="ts">
const error = useError();
</script>
  