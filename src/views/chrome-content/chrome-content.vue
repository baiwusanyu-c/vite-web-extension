<script lang="ts" setup>
  import { ref } from 'vue'

  const testStr = ref<string>('一点浩然气，千里快哉风')
</script>

<template>
  <div>
    {{ testStr }}
    <!-- <button @click="() => setItem(CACHE_KEYS.GRAY_LIST, [Date.now()])">Hello</button> -->
    <!-- <pre>{{ cache }}</pre> -->
  </div>
</template>
