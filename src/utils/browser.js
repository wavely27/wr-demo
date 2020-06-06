/*
 * @Author: hongbai
 * @Date: 2020-06-05 13:28:38
 * @LastEditors: hongbai
 * @LastEditTime: 2020-06-05 13:52:53
 */
// 判断浏览器类型
const browser = {
  isMobile: (!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
}

console.log("语言版本: " + navigator.language)
console.log('userAgent ===> ', navigator.userAgent)
console.log('isMobile ===> ', browser.isMobile)

window._wav_browser = browser

// if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
//   window.location = "https://itunes.apple.com/xxx";
// }
// else if (browser.versions.android) {
//   window.location = "http://xxx/xxx.apk";
// }