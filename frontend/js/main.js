(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{7:function(t,i,o){"use strict";o.r(i),function(t){i.default=function(){window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("back-to-top").style.display="block":document.getElementById("back-to-top").style.display="none"},t("#back-to-top").on("click",function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}),t(document).ready(function(){t("div.configuration-block [class^=highlight-]").hide(),t("div.configuration-block [class^=highlight-]").width(t("div.configuration-block").width()),t("div.configuration-block").addClass("jsactive"),t("div.configuration-block").addClass("clearfix"),t("div.configuration-block").each(function(){var i=t("[class^=highlight-]:first",t(this));i.show(),i.parents("ul").height(i.height()+40)}),t("div.configuration-block li").each(function(){var i=t(":first",t(this)).html();t(":first ",t(this)).html(""),t(":first ",t(this)).append('<a href="#">'+i+"</a>"),t(":first",t(this)).bind("click",function(){t("[class^=highlight-]",t(this).parents("ul")).hide(),t("li",t(this).parents("ul")).removeClass("selected"),t(this).parent().addClass("selected");var i=t("[class^=highlight-]",t(this).parent("li"));return i.show(),i.parents("ul").height(i.height()+40),!1})}),t("div.configuration-block").each(function(){t("li:first",t(this)).addClass("selected")}),t("[data-toggle=\"$: 'jquery',\n  jQuery: 'jquery'\"]").tooltip(),t("button.copy-to-clipboard").on("click",function(){var i=t(this).data("copy-element-id"),o=t("#"+i+" .code-line").text(),e=document.createElement("textarea");e.value=o,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)})})}}.call(this,o(0))}}]);