// ==UserScript==
// @name         追新番磁力下载按钮
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  追新番磁力下载按钮修复
// @author       You
// @match        http://www.zhuixinfan.com/main.php?mod=viewresource&sid=*
// @grant        none
// @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// ==/UserScript==

(function() {
    var selectdl = document.createElement("a");//添加一个下载按钮
    selectdl.className="bt bt-copy";
    selectdl.id ="selectdl";
    selectdl.innerHTML="下载选择项";
    var dlink = document.getElementsByClassName("dlinks");
    var mutidown=dlink[1].getElementsByTagName("dt")[0].appendChild(selectdl);
    var torrent = document.getElementById("torrent_url");
    var text =torrent.innerHTML;
    var ci = document.getElementsByClassName("bt bt-cl");
    ci[0].href = text;
    var toplist = document.getElementsByClassName("td2");//表单选择
    var i;
    for (i = 0; i < toplist.length; i++) {
    var input= document.createElement("input");
        input.type="checkbox"
        input.class="links checkbox"
        input.checked="checked"
        input.value=toplist[i].getElementsByTagName("a")[0].href
    var node = document.createTextNode("点击加入下载");
    toplist[i].appendChild(input);
    toplist[i].appendChild(node);

    //$(document).ready(function(){$.get(link,window.alart());});
    

}
//        var link=toplist[i].getElementsByTagName("a")[0].href;



})();


