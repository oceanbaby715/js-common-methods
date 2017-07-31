/*！
 * isAndroidMobileDevice
 * 判断是否安卓移动设备访问
 * Date：2017-03-31
 * Author：Terry
 */
function isAndroidMobileDevice(){
    return (/android/i.test(navigator.userAgent.toLowerCase()));
}