<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  import type { Config } from '@/utils/types'
  import { MESSAGE_TYPES } from '@/enums'

  const config = ref({}) as Ref<Config.Root>

  function reloadRuntime() {
    chrome.runtime.reload()
  }

  chrome.runtime.sendMessage({ type: MESSAGE_TYPES.GET_CONFIG }, response => {
    console.info('content has response: ', response)
    config.value = response
  })

  chrome.runtime.onMessage.addListener(request => {
    if (request.type === MESSAGE_TYPES.CONFIG_UPDATED) {
      config.value = request.payload
    }
  })

  function updateConfig() {
    chrome.runtime.sendMessage({
      type: MESSAGE_TYPES.UPDATE_CONFIG,
      payload: {
        key: 'grayscale',
        value: !config.value.grayscale.value,
      },
    })
  }
</script>

<template>
  <div class="container">
    <button @click="reloadRuntime">重载</button>
    <hr />
    <template v-if="Object.keys(config).length">
      <div v-for="(configItem, type) in config" :key="type" class="item">
        <label> {{ configItem.label }}： </label>
        <button @click="updateConfig">
          {{ configItem.value ? '恢复' : '置灰' }}
        </button>
        <hr />
      </div>
    </template>
    <template v-else>
      <div>暂无内容</div>
    </template>
    <small>
      <i>Email-ubbcou@outlook.com</i>
    </small>
  </div>
</template>

<style scoped>
  .container {
    width: 160px;
  }
  .group {
    @apply mx-12;
  }
</style>
