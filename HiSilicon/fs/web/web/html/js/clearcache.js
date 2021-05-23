var e=navigator.userAgent.toLowerCase();
var isOpera=e.indexOf("opera")!=-1;
var isIE = document.all && e.indexOf("msie") != -1 && !isOpera;
var isIE2 = e.indexOf("net clr") != -1;

if (isIE || isIE2) document.execCommand("ClearAuthenticationCache");
