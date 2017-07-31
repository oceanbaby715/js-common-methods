/*！
 * DisableWeChatDrop
 * 禁用微信浏览器下拉回弹
 * Date：2017-03-31
 * Author：Terry
 */
function DisableWeChatDrop() {
  var overscroll = function(el) {
    el.addEventListener('touchstart', function() {
      var top = el.scrollTop,
        totalScroll = el.scrollHeight,
        currentScroll = top + el.offsetHeight;
      if (top === 0) {
        el.scrollTop = 1;
      } else if (currentScroll === totalScroll) {
        el.scrollTop = top - 1;
      }
    });

    el.addEventListener('touchmove', function(evt) {
      if (el.offsetHeight < el.scrollHeight)
        evt._isScroller = true;
    });
  }

  overscroll($window);
  document.body.addEventListener('touchmove', function(evt) {
    if (!evt._isScroller) {
      evt.preventDefault();
    }
  });
}