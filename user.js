// ==UserScript==
// @name         追新番磁力下载按钮
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  追新番磁力下载按钮修复
// @author       pbbqdd
// @match        http://www.zhuixinfan.com/main.php?mod=viewresource&sid=*
// @grant        none
// @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// ==/UserScript==


function selectbt(){//得到magnet link内容
    var torrent = document.getElementById("torrent_url");
    var text =torrent.innerHTML;
    return text;

};


function get_link(tag,url){//异步get_magnet!!!现阶段核心代码
$(document).ready(function(){
$.ajax({url:url,success:function(result){
   $(tag).attr("href",$(result).find("#torrent_url").text())

}})

});
}



function load_link(tag,url){   //get连接data
$(document).ready(function(){
    $(tag).load((url+" #torrent_url"));
    alert($.get(url));




});
};







(function() {
    var selectdl = document.createElement("a");//添加一个下载选项按钮
    selectdl.className="bt bt-copy";
    selectdl.id ="selectdl";
    selectdl.innerHTML="下载选择项";
    var dlink = document.getElementsByClassName("dlinks");
    var mutidown=dlink[1].getElementsByTagName("dt")[0].appendChild(selectdl);
    //修复点击下载按钮
    var text =selectbt(this);
    var ci = document.getElementsByClassName("bt bt-cl");
    ci[0].href = text;
    //定位到连接清单
    var toplist = document.getElementsByClassName("td2");//表单选择
    var i;
    for (i = 0; i < toplist.length; i++) {
    var input= document.createElement("a");
        //input.type="button";
        input.id ="cb"+i;
        input.className="maglink";
        input.innerHTML="U力下载"
        //input.checked="checked"
        var page_url=toplist[i].getElementsByTagName("a")[0].href;
        get_link(input,page_url);//magnet link 加入到a的href属性
        //alert(get_link(this,page_url));
    toplist[i].appendChild(input);
   //$(document).ready(function(){$.get(link,window.alart());});


};
//加载连接





})();







