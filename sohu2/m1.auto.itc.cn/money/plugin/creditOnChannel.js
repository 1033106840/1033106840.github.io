!function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={"i":i,"l":!1,"exports":{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{"configurable":!1,"enumerable":!0,"get":i})},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=16)}([function(t,n,e){var i=e(6);"string"==typeof i&&(i=[[t.i,i,""]]);e(2)(i,{});i.locals&&(t.exports=i.locals)},function(t,n){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],n=0;n<this.length;n++){var e=this[n];e[2]?t.push("@media "+e[2]+"{"+e[1]+"}"):t.push(e[1])}return t.join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(i[a]=!0)}for(o=0;o<n.length;o++){var r=n[o];"number"==typeof r[0]&&i[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),t.push(r))}},t}},function(t,n){function e(t,n){for(var e=0;e<t.length;e++){var i=t[e],o=h[i.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(s(i.parts[a],n))}else{for(var r=[],a=0;a<i.parts.length;a++)r.push(s(i.parts[a],n));h[i.id]={"id":i.id,"refs":1,"parts":r}}}}function i(t){for(var n=[],e={},i=0;i<t.length;i++){var o=t[i],a=o[0],r=o[1],l=o[2],s=o[3],c={"css":r,"media":l,"sourceMap":s};e[a]?e[a].parts.push(c):n.push(e[a]={"id":a,"parts":[c]})}return n}function o(t,n){var e=g(),i=x[x.length-1];if("top"===t.insertAt)i?i.nextSibling?e.insertBefore(n,i.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),x.push(n);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(n)}}function a(t){t.parentNode.removeChild(t);var n=x.indexOf(t);n>=0&&x.splice(n,1)}function r(t){var n=document.createElement("style");return n.type="text/css",o(t,n),n}function l(t){var n=document.createElement("link");return n.rel="stylesheet",o(t,n),n}function s(t,n){var e,i,o;if(n.singleton){var s=v++;e=m||(m=r(n)),i=c.bind(null,e,s,!1),o=c.bind(null,e,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=l(n),i=u.bind(null,e),o=function(){a(e),e.href&&URL.revokeObjectURL(e.href)}):(e=r(n),i=d.bind(null,e),o=function(){a(e)});return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else o()}}function c(t,n,e,i){var o=e?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(n,o);else{var a=document.createTextNode(o),r=t.childNodes;r[n]&&t.removeChild(r[n]),r.length?t.insertBefore(a,r[n]):t.appendChild(a)}}function d(t,n){var e=n.css,i=n.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function u(t,n){var e=n.css,i=n.sourceMap;i&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([e],{"type":"text/css"}),a=t.href;t.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var h={},p=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}},f=p(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),g=p(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,x=[];t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},void 0===n.singleton&&(n.singleton=f()),void 0===n.insertAt&&(n.insertAt="bottom");var o=i(t);return e(o,n),function(t){for(var a=[],r=0;r<o.length;r++){var l=o[r],s=h[l.id];s.refs--,a.push(s)}if(t){e(i(t),n)}for(var r=0;r<a.length;r++){var s=a[r];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete h[s.id]}}}};var w=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n,e){var i=e(4),o=new Image;t.exports=function(t){var n=i.get("SUV"),e=null;n||(e=(new Date).getTime(),i.set("SUV",e),n=e),o.src="//pv.sohu.com/action.gif?actionId="+t+"&SUV="+n}},function(t,n){t.exports={"set":function(t,n,e,i,o,a){var r=new Date;e=e||30,r.setTime(r.getTime()+6e4*e),document.cookie=t+"="+escape(n)+"; expires="+r.toGMTString()+(i?"; path="+i:"; path=/")+(o?"; domain="+o:"https://m1.auto.itc.cn/money/plugin/; domain=.sohu.com")+(a?"; secure":"")},"get":function(t){var n=document.cookie.match(new RegExp("(^| )"+t+"=([^;]*)(;|$)"));return null!=n?unescape(n[2]):null},"clear":function(t,n,e){document.cookie=t+"="+(n?"; path="+n:"; path=/")+(e?"; domain="+e:"https://m1.auto.itc.cn/money/plugin/; domain=.sohu.com")+";expires=Fri, 02-Jan-1970 00:00:00 GMT"}}},function(t,n){function e(t){this.moveSpeed=t.moveSpeed||10,this.moveSpace=t.moveSpace||20,this.changeImageSpeed=t.changeImageSpeed||4e3,this.auto=t.auto,this.contentBoxId=t.contentBoxId,this.contentItemTag=t.contentItemTag,this.naviBoxId=t.naviBoxId,this.naviItemTag=t.naviItemTag,this.curClass=t.curClass||"cur",this.fixedWidth=t.width||328,this.index=1,this.oldIndex=this.index-1,this.switchFlag=null,this.moveFlag=null,this.contentBox=null,this.contentItems=null,this.items=[],this.len=0,this.naviBox=null,this.naviItems=null,this.preBtn=t.preBtn,this.nextBtn=t.nextBtn,this.isHaveBtn=t.isHaveBtn||!1,this.moveFinishFlag=!0,this.init()}var i=function(t){return{"getDom":function(n){return t.getElementById(n)},"getDoms":function(t,n){return t.getElementsByTagName(n)},"getByClass":function(t,n){for(var e=[],i=t.getElementsByTagName("*"),o=0,a=i.length;o<a;o++)-1!=i[o].className.indexOf(n)&&e.push(i[o]);return e}}}(document);e.prototype={"destory":function(){var t=this;t.moveFlag=null,t.switchFlag=null,clearInterval(t.moveFlag),clearInterval(t.switchFlag),t.returnNormal(),t.isHaveBtn&&(t.preBtn.onclick=null,t.nextBtn.onclick=null),t.naviBox&&(t.naviBox.onmouseover=null,t.naviBox.onmouseout=null),t.contentBox.onmouseover=null,t.contentBox.onmouseout=null},"init":function(){var t=this;t.contentBox=i.getDom(t.contentBoxId),t.contentBoxEvent(),t.contentItems=i.getDoms(t.contentBox,t.contentItemTag);for(var n=0,e=t.contentItems.length;n<e;n++)t.contentItems.item(n).style.left=0==n?"0":"-"+t.fixedWidth+"px",t.items.push(t.contentItems.item(n));t.len=t.items.length,t.naviBoxId&&(t.naviBox=i.getDom(t.naviBoxId),t.naviItems=i.getDoms(t.naviBox,t.naviItemTag),t.naviItems.item(0).className=t.curClass,t.naviBoxEvent()),t.isHaveBtn&&t.btnFunc(),t.auto&&(t.switchFlag=setInterval(function(){t.change.call(t,null)},t.changeImageSpeed))},"btnFunc":function(){var t=this,n=t.len;t.preBtn.onclick=function(e){clearInterval(t.switchFlag),t.switchFlag=null,t.moveFinishFlag&&(t.oldIndex=t.index-1,t.oldIndex<0&&(t.oldIndex=n-1),t.index=t.oldIndex-1,t.index<0&&(t.index=n-1),t.change("return"))},t.nextBtn.onclick=function(e){clearInterval(t.switchFlag),t.switchFlag=null,t.moveFinishFlag&&(t.oldIndex=t.index-1,t.oldIndex<0&&(t.oldIndex=n-1),t.index=t.oldIndex+1,t.index>=n&&(t.index=0),t.change())}},"change":function(t){var n=this,e=n.len;n.index>=e&&(n.index=0,n.oldIndex>=e&&(n.oldIndex=e-1)),n.returnNormal(t),n.moveFinishFlag=!1,t?t&&"return"==t&&n.movenow(0,"return"):(n.items[n.index].style.left=n.fixedWidth+"px",n.movenow(0,"normal")),n.naviBoxId&&(n.naviItems.item(n.oldIndex).className="",n.naviItems.item(n.index).className=n.curClass)},"movenow":function(t,n){function e(){if(i.fixedWidth-c<=o?(c+=1,"normal"==n?(l-=1,s-=1):"return"==n&&(l+=1,s+=1)):(c+=i.moveSpace,"normal"==n?(l-=i.moveSpace,s-=i.moveSpace):"return"==n&&(l+=i.moveSpace,s+=i.moveSpace)),a.style.left=l+"px",r.style.left=s+"px",c==i.fixedWidth){c=0,clearInterval(i.moveFlag),i.moveFlag=null;var t=i.len;i.index>=t?i.oldIndex=t-1:i.oldIndex=i.index,i.index++,i.moveFinishFlag=!0}}var i=this,o=i.fixedWidth%i.moveSpace,a=i.items[i.index],r=i.items[i.oldIndex],l=parseInt(a.style.left),s=parseInt(r.style.left),c=0;null==i.moveFlag&&(i.moveFlag=setInterval(e,i.moveSpeed))},"returnNormal":function(){for(var t=this,n=0,e=t.len;n<e;n++)n==t.oldIndex?t.items[n].style.left="0":t.items[n].style.left="-"+t.fixedWidth+"px"},"naviBoxEvent":function(){var t=this;t.naviBox.onmouseover=function(n){n=window.event||n;var e=n.srcElement||n.target;if(e.tagName.toLowerCase()==t.naviItemTag){var i=Number(e.getAttribute("data-index"))-1;if(clearInterval(t.switchFlag),t.switchFlag=null,!t.moveFinishFlag)return;if(clearInterval(t.moveFlag),t.moveFlag=null,e.className==t.curClass)return;setTimeout(function(){t.oldIndex=t.index-1,t.index=i,t.change()},1)}n.stopPropagation?n.stopPropagation():n.cancelBubble=!0},t.naviBox.onmouseout=function(n){n=window.event||n,(n.srcElement||n.target).tagName.toLowerCase()==t.naviItemTag&&(clearInterval(t.switchFlag),t.switchFlag=null,t.auto&&(t.switchFlag=setInterval(function(){t.change.call(t,null)},t.changeImageSpeed))),n.stopPropagation?n.stopPropagation():n.cancelBubble=!0},t.isHaveBtn&&(t.naviBox.parentNode.onmouseout=function(n){clearInterval(t.switchFlag),t.switchFlag=null,t.auto&&(t.switchFlag=setInterval(function(){t.change.call(t,null)},t.changeImageSpeed))})},"contentBoxEvent":function(){var t=this;t.contentBox.onmouseover=function(){clearInterval(t.switchFlag),t.switchFlag=null},t.contentBox.onmouseout=function(){clearInterval(t.switchFlag),t.auto&&(t.switchFlag=setInterval(function(){t.change.call(t,null)},t.changeImageSpeed))}}},t.exports=e},function(t,n,e){n=t.exports=e(1)(),n.push([t.i,"/*.container{width:340px;background-color:#f9f9f9;}\r\n.titleR{height:25px;padding:6px 20px 0;color:#191919;line-height:25px;text-align:right;position:relative}.titleR .tt{font-size:16px;float:left;font-weight:700}\r\n.titleR .tt{font-size:16px;float:left;font-weight:700}\r\n*/\r\n\r\n\r\n.titleR .tt .apply{line-height:25px;display:block;position:absolute;font-size:14px;color:#ff4000;right:20px;top:6px;text-decoration:none;font-weight:normal;}\r\n.clearfix:before,.clearfix:after{content:'';display:table}\r\n.clearfix:after{clear:both}\r\n\r\n.con{padding-bottom:10px;}\r\n.card-list-dl{width:300px;margin:0 auto;padding:15px 0;border-radius:3px;}\r\n.card-list-dl dt{line-height:45px; height:45px;font-size: 12px; color:#ff4000; font-weight: normal;float:left;width:50px;text-align:center;border:1px solid #ed6b3e;}\r\n.card-list-dl dt a{width:28px;margin:0 auto;display:block;font-size:14px;color:#ff4000;line-height:22px;text-decoration:none;}\r\n.card-list-dl .condition{margin-left:62px;}\r\n.card-list-dl .condition h3{font-size:14px;line-height:18px;margin-bottom:10px;height:18px;overflow: hidden;margin-top:0;}\r\n.card-list-dl .condition h3.last{margin-bottom:0px;}\r\n.card-list-dl .condition a{color:#777;font-weight:normal;}\r\n.card-list-dl .condition a span{color:#222;}\r\n.card-list-dl .condition a:hover{color: #e63939;}\r\n.card-list-dl .condition a:hover span{color: #e63939;}\r\n.first-line{position:relative;}\r\n.first-line:after{content:\"\";display:block;bottom:0;right:0;width:234px;height:1px;background-color:#ededed;position:absolute;}\r\n\r\n.swiper-container{width:300px;margin:0 auto;overflow:hidden;height:100px;position: relative;}\r\n.swiper-container li{width:100%;position: absolute;z-index: 0;}\r\n\r\n.focus{ position:relative; overflow:hidden;margin-bottom:5px;}\r\n.focus .f_tab{position:absolute;text-align:center;bottom:9px;left:0;width:100%;z-index:100;}\r\n.focus .f_tab span{display: inline-block; width:6px; height:6px;border-radius:50%;background-color:#ccc;margin:0 4px;overflow:hidden;transition:all .2s ease-in-out}\r\n.focus .f_tab span.cur{width:15px;background-color:#fdd000;border-radius:3px;}\r\n.focus img{width:100%;}\r\n.pagination {\r\n    box-sizing: border-box;\r\n    position:static;\r\n    padding: 0 7px;\r\n    text-align: center;\r\n    width: 100%;\r\n    z-index: 2;\r\n    line-height:10px;margin-top:0.2rem;}\r\n.pagination span{vertical-align:top;}\r\n.focus .pagination{bottom: 0.9rem;position: absolute;left: 0;margin-top:0;}\r\n.swiper-pagination-switch{display: inline-block; width:0.16rem; height:0.16rem;background-color:yellow;  background-size:0.16rem 0.16rem;margin:0 4px; cursor:pointer;}\r\n\r\n.swiper-active-switch{display: inline-block; width:0.16rem; height:0.16rem; background-color:red;  background-size:0.16rem 0.16rem;margin:0 4px; cursor:pointer;}\r\n#swiper-wrapper .swiper-slide a{display:block;width:100%;height:100%;position: relative;text-align:center;}\r\n#swiper-wrapper .swiper-slide a span{text-align:left;box-sizing: border-box;padding:0 10px;position:absolute;left:0px;bottom:0px;display:inline-block;width:100%;line-height:0.7rem;font-size:0.32rem;color:#fff; background:rgba(0,0,0, .7);}",""])},function(t,n,e){function i(t){var n=[],e=null,i=[],o=null,a=[];return _.each(t,function(t){switch(Number(t.type)){case 1:n.push(t);break;case 2:e?o=t:e=t;break;case 3:2===i.length?a.push(t):i.push(t)}}),{"focusList":n,"firstTitle":e,"firstList":i,"secondTitle":o,"secondList":a}}var o=e(19),a=e(5),r=e(3);o=o.replace(/(\n+)|(\r+)|(\n*\r*)|(\u000A|\u000D|\u2028|\u2029)*/g,"");var l={"channelName":"科技","channelId":1,"clickFlag":"10320341","showFlag":"10320337"},s={"30":{"channelName":"科技","channelId":1,"clickFlag":"10320341","showFlag":"10320337"},"15":{"channelName":"财经","channelId":2,"clickFlag":"10320068","showFlag":"10320067"},"29":{"channelName":"旅游","channelId":3,"clickFlag":"10320070","showFlag":"10320069"},"26":{"channelName":"母婴","channelId":4,"clickFlag":"10320066","showFlag":"10320065"},"43":{"channelName":"社会","channelId":5,"clickFlag":"10320336","showFlag":"10320340"},"25":{"channelName":"教育","channelId":6,"clickFlag":"10320333","showFlag":"10320332"},"42":{"channelName":"游戏","channelId":7,"clickFlag":"10320335","showFlag":"10320334"},"28":{"channelName":"美食","channelId":8,"clickFlag":"10320338","showFlag":"10320339"},"23":{"channelName":"时尚","channelId":9,"clickFlag":"10320338","showFlag":"10320339"},"24":{"channelName":"健康","channelId":10,"clickFlag":"10320346","showFlag":"10320343"},"44":{"channelName":"宠物","channelId":11,"clickFlag":"10320347","showFlag":"10320345"},"27":{"channelName":"星座","channelId":12,"clickFlag":"10320349","showFlag":"10320348"}};window._creditFunc=function(){},window._credit_data=null;var c=Backbone.Collection.extend({"initialize":function(t,n){this.bind("sync",function(t,e,o){var a=i(e.result);n.view.render.call(n.view,a)})},"parse":function(t){var n=t.result,e=i(n);return window._credit_data=e,e}});t.exports=function(){window.sohu_mp.plugin.define("credit_card",{"el":"#credit_card","template":_.template(o),"render":function(t){$(this.el).html(this.template(t)),t.focusList.length>1&&new a({"contentBoxId":"swiper-wrapper1","contentItemTag":"li","width":300,"moveSpeed":.5,"moveSpace":4,"isHaveBtn":!0,"preBtn":$("#focus1").find(".arrow-left")[0],"nextBtn":$("#focus1").find(".arrow-right")[0],"naviBoxId":"flashFoucsNavi_1","naviItemTag":"span","auto":!0}),$(this.el).click(function(t){r(l.clickFlag)}),r(l.showFlag)},"initialize":function(t){var n=t.args.channel_id;n&&(l=s[n]),this.Collection=new c(null,{"view":this}),this.Collection.url=function(){return"//jinrong.sohu.com/api/credit2/mpEntry/"+l.channelId},window._credit_data?this.render(_credit_data):this.Collection.fetch({"dataType":"jsonp","silent":!0,"remove":!1,"cache":!0,"error":function(t,n,e){}})}})}},,,,,,,,,function(t,n,e){e(0),e(7)()},,,function(t,n){t.exports='<div class="titleR">\r\n\t <span class="tt">\r\n\t\t <a href="http://jinrong.sohu.com/card"  target="_blank">搜狐·信用卡频道</a><a href=" http://jinrong.sohu.com/card/filter/0_0_0_0_0_0_10_1.html" target="_blank" class="apply">快速找卡>></a>\r\n\t </span>\r\n</div>\r\n\r\n<div class="con">\r\n\t<div id="focus1" class="focus">\r\n        <a class="arrow-left" href="javascript:void(0)"></a>\r\n        <a class="arrow-right" href="javascript:void(0)"></a>\r\n        <div class="f_tab" id="flashFoucsNavi_1">\r\n\t\t\t<%console.log();_.each(focusList, function(item, i){ %>\r\n\t\t\t    <% if (i === 0) {%>\r\n\t\t\t\t\t<span class="cur" data-index="<%= (Number(i)+1)%>"></span>\r\n\t\t\t    <%} else {%>\r\n\t\t\t\t\t<span data-index="<%= (Number(i)+1)%>"></span>\r\n\t\t\t    <%}%>\r\n\t\t\t<%})%>\r\n\t\t</div>\r\n        <div class="swiper-container" >\r\n            <ul id="swiper-wrapper1">\r\n\t\t\t\t<%_.each(focusList, function(item){ %>\r\n                <li class="swiper-slide">\r\n                    <a href="<%=item.url%>" target="_blank"><img src="<%=item.picurl%>"></a>\r\n                </li>\r\n\t\t\t\t<%})%>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\t\t<dl class="card-list-dl first-line">\r\n\t\t\t<dt><a href="<%=firstTitle.url%>"  target="_blank"> <%=firstTitle.title%></a></dt>\r\n\t\t\t<dd class="condition">\r\n\t\t\t\t<%_.each(firstList, function(item, index){ %>\r\n\t\t\t\t<% if(index !== firstList.length -1) { %>\r\n\t\t\t\t<h3><a href="<%=item.url%>" target="_blank"><span><%=item.title%>：</span><%=item.introduction%></a></h3>\r\n\t\t\t\t<%} else {%>\r\n\t\t\t\t<h3 class="last"><a href="<%=item.url%>" target="_blank"><span><%=item.title%>：</span><%=item.introduction%></a></h3>\r\n\t\t\t\t<%}%>\r\n\t\t\t\t<%})%>\r\n\t\t\t</dd>\r\n\t\t</dl>\r\n\t\t<dl class="card-list-dl">\r\n\t\t\t<dt><a href="<%=secondTitle.url%>"  target="_blank"><%=secondTitle.title%></a> </dt>\r\n\t\t\t<dd class="condition">\r\n\t\t\t\t<%_.each(secondList, function(item, index){ %>\r\n\t\t\t\t<% if(index !== firstList.length -1) { %>\r\n\t\t\t\t<h3><a href="<%=item.url%>" target="_blank"><span><%=item.title%>：</span><%=item.introduction%></a></h3>\r\n\t\t\t\t<%} else {%>\r\n\t\t\t\t<h3 class="last"><a href="<%=item.url%>" target="_blank"><span><%=item.title%>：</span><%=item.introduction%></a></h3>\r\n\t\t\t\t<%}%>\r\n\t\t\t\t<%})%>\r\n\t\t\t</dd>\r\n\t\t</dl>\r\n</div>'}]);