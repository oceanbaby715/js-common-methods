/*！
 * isAppleMobileDevice
 * 判断是否移动设备访问
 * Date：2017-03-31
 * Author：Terry
 */
function isMobileUserAgent() {
	return (/iphone|ipod|ipad|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));
}