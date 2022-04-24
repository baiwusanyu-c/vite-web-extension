<script lang="tsx">
  // @ts-ignore
  import { defineComponent } from 'vue'
  import { BeMsg } from '../../../public/be-ui/be-ui.es.js'
  const msgBox = BeMsg.service
  export default defineComponent({
    setup() {
      const openMsg = (type: string): void => {
        msgBox({
          customClass: 'eagle-eye-dialog',
          titles: type,
          msgType: type,
          bodyRender: () => {
            return (
              <p style="font-size:14px;font-weight:400;font-family: Microsoft YaHei;letter-spacing: 2px;">
                自然选择号！前进四！
              </p>
            )
          },
        })
      }
      openMsg('info')
    },
  })
</script>
<style>
  .eagle-eye-dialog .be-button__mini {
    height: 24px;
    line-height: 24px;
    padding: 0 15px;
    border-radius: 4px;
  }
</style>
