// ==UserScript==
// @name         追新番磁力下载按钮
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.zhuixinfan.com/main.php?mod=viewresource&sid=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var torrent = document.getElementById("torrent_url");
    var text =torrent.innerHTML;
    var ci = document.getElementsByClassName("bt bt-cl");
//    ci.parentNode.removeChild(ci);
    ci[0].href = text;

    // Your code here...
})();
