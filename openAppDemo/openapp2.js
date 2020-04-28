var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?fd3ebc39e3d20d958cc417964a1a070f";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

var url = {
  open: 'tutorabc://main',
  down: 'https://a.app.qq.com/o/simple.jsp?pkgname=com.vipabc.vipmobile.phone'
}
var iframe = document.createElement('iframe')
var body = document.body
iframe.style.cssText = 'display:none;width=0;height=0'
var timer = null

// 立即打开的按钮
var openapp = document.getElementById('openapp')
if(!!(navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))){
  //alert('ios')
  openapp.addEventListener('click',function(){
    window.location.href = url.open;
    setTimeout(function(){
      window.location.href = url.down;
      window.location.href = url.down;
    },2000);
  }, false)
}else{
  //alert('android')
  openapp.addEventListener(
    'click',
    function () {
      body.appendChild(iframe)
      iframe.src = url.open
      window.location.href=url.open
      window.location.href=url.open
      timer = setTimeout(function () {
        window.location.href = url.down
      }, 2500)
    },
    false
  )
}
