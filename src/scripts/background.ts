import { MESSAGE_TYPES } from '@/enums'

chrome.runtime.onStartup.addListener(() => {
  // injectScript()
})

chrome.runtime.onMessage.addListener(request => {
  // content 载入时调用
  if (request.type === MESSAGE_TYPES.CONTENT_LOADED) {
    // injectScript()
  }
})

/*async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

async function injectScript(){
  let tab = await getCurrentTab();
  chrome.scripting.executeScript({
    target: {tabId: Number(tab.id)},
    func:analysisUrl
  });
}

/!**
 * 调取接口分析地址
 *!/
function analysisUrl(){
  window.alert(123)
    // 向页面插入 分析脚本，实现获取网站url。并显示弹窗警告功能
    // 这个脚本维护在 eagleeye 项目中
   // let ga = document.createElement("script");
   // ga.type = "text/javascript";
   // ga.async = true;
   // ga.id='czh'
   // ga.src = r('../../dist/test/test');
   // let s = document.getElementsByTagName("script")[0];
   // s.parentNode?.insertBefore(ga, s);
}*/
