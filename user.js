// ==UserScript==
// @name         追新番磁力下载按钮
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  追新番磁力下载按钮修复
// @author       You
// @match        http://www.zhuixinfan.com/main.php?mod=viewresource&sid=*
// @grant        none
// ==/UserScript==

(function() {

    var torrent = document.getElementById("torrent_url");
    var text =torrent.innerHTML;
    var ci = document.getElementsByClassName("bt bt-cl");
    ci[0].href = text;

})();

