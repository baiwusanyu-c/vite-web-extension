import { MESSAGE_TYPES } from '~/enums'
import {useAlert} from "~/hooks/use-alert";

chrome.runtime.onStartup.addListener(() => {
  iterate()
})

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('background', request)
    // content 载入时调用
    if (request.type === MESSAGE_TYPES.CONTENT_LOADED) {
      iterate()
    }
  }
)

function iterate() {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.id) {
        doInjectScript(tab.id, true,tab)
      }
    })
  })
}
function doInjectScript(tabId: number, open: boolean,tab:any) {
  // const {injectAlertDialog} = useAlert()
  chrome.scripting.executeScript({
    target: { tabId },
    args: [open,tab],// 传给 func 的参数
    func:analysisUrl
  })
}

/**
 * 调取接口分析地址
 * @param open
 * @param tab
 */
function analysisUrl(open:boolean,tab:any){
  // window.alert('tab.url')
  // setTimeout(()=>{
  //   window.alert('setTimeout')
  // },3000)
   let elm = document.createElement('div')
   elm.innerText = 'insert'
   document.body.append(elm)

  // 这个方法不能够放在外面，上下文会变
  function injectAlertDialog () {
    window.alert(tab.url)
  }
  injectAlertDialog()
}
