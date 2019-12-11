// ==UserScript==
// @name         追新番磁力下载按钮
// @namespace    http://tampermonkey.net/
// @version      0.9.1
// @description  追新番磁力下载按钮修复
// @author       pbbqdd
// @match        http://www.zhuixinfan.com/viewtvplay*
// @match        http://www.zhuixinfan.com/main.php?mod=viewresource&sid=*
// @grant        none
// @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js
// ==/UserScript==


function selectbt(){//得到magnet link内容
    var torrent = document.getElementById("torrent_url");
    var text =torrent.innerHTML;
    return text;

};


function get_link(tag,url){//get_magnet
$(document).ready(function(){
$.ajax({url:url,success:function(result){
   $(tag).attr("href",$(result).find("#torrent_url").text())

}})

});
}

function copy_fix(tag,targit){
$(tag).attr("data-clipboard-target",targit);
}

(function() {
    try{
    var selectdl = document.createElement("a");//添加一个下载选项按钮
    selectdl.className="bt bt-copy";
    selectdl.id ="selectdl";
    selectdl.innerHTML="下载选择项";
//    selectdl.data-clipboard-target="";

    var dlink = document.getElementsByClassName("dlinks");
    var mutidown=dlink[1].getElementsByTagName("dt")[0].appendChild(selectdl);
    //修复点击下载按钮
    var text =selectbt(this);
    var ci = document.getElementsByClassName("bt bt-cl");
    ci[0].href = text;
    //修复复制按钮
    new ClipboardJS('.bt-copy');
    $("a.bt.bt-copy").attr("data-clipboard-target",function(){
       var dct=$(this).attr("data-clipboard-target");
       return "#"+dct;

    });

    //定位到连接清单
    }
    catch(e){
        throw e;
    }finally{

    var toplist = document.getElementsByClassName("td2");//捕捉td2选择
    var i;
    for (i = 0; i < toplist.length; i++) {
    var input= document.createElement("a");
        //input.type="button";
        input.id ="cb"+i;
        input.className="bt bt-cl";
        input.innerHTML="U力下载"
        //input.checked="checked"
        var page_url=toplist[i].getElementsByTagName("a")[0].href;
        get_link(input,page_url);//magnet link 加入到a的href属性
    toplist[i].appendChild(input);
    };

};
//加载连接





})();








