/*
* @use-alert.ts
* @deprecated 
* @author czh
* @update (czh 2022/4/21)
*/
export function useAlert() {
  window.alert('useAlert')
  function injectAlertDialog(){
    window.alert('injectAlertDialog')
  }
  return {
    injectAlertDialog
  }
}