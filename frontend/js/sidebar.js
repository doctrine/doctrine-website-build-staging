(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{9:function(e,t,n){"use strict";n.r(t),function(e){window.String.prototype.replaceAll=function(e,t){return this.split(e).join(t)};var n=function(){this.loadCurrentDocsMenu(),this.initVersionLinks(),e('[data-toggle="offcanvas"]').click((function(){e(".row-offcanvas").toggleClass("active"),e(".sidebar").toggle()})),e(".toc-item").on("click",(function(){e(".toc-toggle").click()}));var t=this;window.onhashchange=function(){t.loadCurrentDocsMenu(),t.initVersionLinks()}};n.prototype.initVersionLinks=function(){e(".project-version-switcher").each((function(){var t=e(this).attr("href").split("#")[0];e(this).attr("href",t+window.location.hash)}))},n.prototype.getTopLevelParent=function(e){var t=e.parent("ul").prev("li").parent("ul").prev("li");return t.length||(t=e.parent("ul").prev("li")),t.length||(t=e),t},n.prototype.scrollToElement=function(t){var n=this.getTopLevelParent(t),o=document.getElementById(n.attr("id"));if(o){var r=o.offsetTop;e(".sidebar-sticky").scrollTop(r)}},n.prototype.removeQueryStringParameter=function(e,t){t||(t=window.location.href);var n=t.split("#"),o=new RegExp("([?&])"+e+"=.*?(&|#|$)","i");return n[0].match(o)&&(t=(t=n[0].replace(o,"$1")).replace(/([?&])$/,""),void 0!==n[1]&&null!==n[1]&&(t+="#"+n[1])),t},n.prototype.getCurrentDocsMenu=function(){var t=this.removeQueryStringParameter("q",window.location.href),n=t.substr(t.lastIndexOf("/")+1),o=e("h1.section-header a").attr("href");n||(n="index.html"),"#"===n[0]&&(n="index.html"+n),window.location.hash||(n+=o);var r=this.normalize(n),l=n.substr(0,n.lastIndexOf("#"))+o,i=this.normalize(l),a=e("#"+r);return a.length||(a=e("#"+i)),a},n.prototype.normalize=function(e){return e.replaceAll("../","").replaceAll("#","-").replaceAll(".","-").replaceAll("/","-").replaceAll("_","-")},n.prototype.closeAll=function(){e(".opened").removeClass("opened"),e(".opened-ul").removeClass("opened-ul")},n.prototype.openElement=function(e){e.addClass("opened"),e.find("ul").first().addClass("opened-ul").removeClass("closed-ul"),e.parents("ul").addClass("opened-ul").removeClass("closed-ul"),e.parents("ul").parent("li").addClass("opened")},n.prototype.loadCurrentDocsMenu=function(){var e=this.getCurrentDocsMenu();e.length&&(this.closeAll(),this.openElement(e),this.scrollToElement(e))},t.default=n}.call(this,n(0))}}]);