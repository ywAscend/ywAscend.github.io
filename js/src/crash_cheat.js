//崩溃欺骗
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         //$('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = '╭(°A°`)╮ 你不要我啦 ~';
         clearTimeout(titleTime);
     }
     else {
         //$('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = 'O(∩_∩)O 欢迎回来~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });