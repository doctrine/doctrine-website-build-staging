"use strict";(self.webpackChunkdoctrine_website=self.webpackChunkdoctrine_website||[]).push([[541],{1475:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var o=n(9755);window.String.prototype.replaceAll=function(e,t){return this.split(e).join(t)};var r=function(){this.loadCurrentDocsMenu(),this.initVersionLinks(),o('[data-toggle="offcanvas"]').click((function(){o(".row-offcanvas").toggleClass("active"),o(".sidebar").toggle()})),o(".toc-item").on("click",(function(){o(".toc-toggle").click()}));var e=this;window.onhashchange=function(){e.loadCurrentDocsMenu(),e.initVersionLinks()}};r.prototype.initVersionLinks=function(){o(".project-version-switcher").each((function(){var e=o(this).attr("href").split("#")[0];o(this).attr("href",e+window.location.hash)}))},r.prototype.getTopLevelParent=function(e){var t=e.parent("ul").prev("li").parent("ul").prev("li");return t.length||(t=e.parent("ul").prev("li")),t.length||(t=e),t},r.prototype.scrollToElement=function(e){var t=this.getTopLevelParent(e),n=document.getElementById(t.attr("id"));if(n){var r=n.offsetTop;o(".sidebar-sticky").scrollTop(r)}},r.prototype.removeQueryStringParameter=function(e,t){t||(t=window.location.href);var n=t.split("#"),o=new RegExp("([?&])"+e+"=.*?(&|#|$)","i");return n[0].match(o)&&(t=(t=n[0].replace(o,"$1")).replace(/([?&])$/,""),void 0!==n[1]&&null!==n[1]&&(t+="#"+n[1])),t},r.prototype.getCurrentDocsMenu=function(){var e=this.removeQueryStringParameter("q",window.location.href),t=e.substr(e.lastIndexOf("/")+1),n=o("h1.section-header a").attr("href");t||(t="index.html"),"#"===t[0]&&(t="index.html"+t),window.location.hash||(t+=n);var r=this.normalize(t),l=t.substr(0,t.lastIndexOf("#"))+n,i=this.normalize(l),s=o("#"+r);return s.length||(s=o("#"+i)),s},r.prototype.normalize=function(e){return e.replaceAll("../","").replaceAll("#","-").replaceAll(".","-").replaceAll("/","-").replaceAll("_","-")},r.prototype.closeAll=function(){o(".opened").removeClass("opened"),o(".opened-ul").removeClass("opened-ul")},r.prototype.openElement=function(e){e.addClass("opened"),e.find("ul").first().addClass("opened-ul").removeClass("closed-ul"),e.parents("ul").addClass("opened-ul").removeClass("closed-ul"),e.parents("ul").parent("li").addClass("opened")},r.prototype.loadCurrentDocsMenu=function(){var e=this.getCurrentDocsMenu();e.length&&(this.closeAll(),this.openElement(e),this.scrollToElement(e))};const l=r}}]);