import { createApp } from 'vue'
import test from '@/views/chrome-content/chrome-content.vue'

/**
 * 创建挂载节点并插入到注入页面下
 * @param id
 */
function createMountElm(id: string): HTMLElement {
  const mountElm = document.createElement('div')
  mountElm.id = id
  document.body.append(mountElm)
  return mountElm
}
const app = createApp(test)
app.mount(createMountElm('beosin_eagle_eye_dialog'))
