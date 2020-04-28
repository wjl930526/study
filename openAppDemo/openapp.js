var url = {
  open: 'tutorabc://main',
  down: 'https://a.app.qq.com/o/simple.jsp?pkgname=com.vipabc.vipmobile.phone'
}
//var iframe = document.createElement('iframe')
//var body = document.body
//iframe.style.cssText = 'display:none;width=0;height=0'
//var timer = null

// 立即打开的按钮
var openapp = document.getElementById('openapp')
if (!!(navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))) {
  //alert('ios')
  openapp.addEventListener('click', function () {
    window.location.href = url.open;
    iostimer = setTimeout(function () {
      window.location.href = url.down;
      //window.location.href = url.down;
    }, 3000);
  }, false)
  window.onpagehide = function(e){
    clearTimeout(iostimer)
  }
  document.onvisibilitychange = function () {
    clearTimeout(iostimer)
  };
} else {
  //alert('android')
  openapp.addEventListener(
    'click',
    function () {
      window.location.href = url.open
      var _clickTime = +new Date()

      function check(elsTime) {
        if (elsTime > 3000 || document.hidden || document.webkitHidden) {} else {
          window.location.href = url.down
        }
      }
      //启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
      var _count = 0,
        intHandle
      intHandle = setInterval(function () {
        _count++
        var elsTime = +new Date() - _clickTime
        if (_count >= 100 || elsTime > 3000) {
          clearInterval(intHandle)
          check(elsTime)
        }
      }, 20)
    },
    false
  )
}
