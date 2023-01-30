<template>
  <div>
    trpc data: {{ example }}
  </div>
</template>
<script lang="ts" setup>
const { $client } = useNuxtApp()
const { data: example } = await $client.example.findMany.useQuery({})
</script>

<style scoped></style>
