<script lang="ts" setup>
const { $client } = useNuxtApp()
const hello = $client.example.findMany.useQuery({})
</script>

<template>
  <div>
    data : {{ hello }}
  </div>
</template>

<style scoped></style>
