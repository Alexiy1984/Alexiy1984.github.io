!function(){"use strict";var t="undefined"==typeof global?self:global;if("function"!=typeof t.require){var e={},n={},o={},i={}.hasOwnProperty,r=/^\.\.?(\/|$)/,s=function(t,e){for(var n,o=[],i=(r.test(e)?t+"/"+e:e).split("/"),s=0,l=i.length;s<l;s++)n=i[s],".."===n?o.pop():"."!==n&&""!==n&&o.push(n);return o.join("/")},l=function(t){return t.split("/").slice(0,-1).join("/")},c=function(e){return function(n){var o=s(l(e),n);return t.require(o,e)}},u=function(t,e){var o=d&&d.createHot(t),i={id:t,exports:{},hot:o};return n[t]=i,e(i.exports,c(t),i),i.exports},a=function(t){return o[t]?a(o[t]):t},f=function(t,e){return a(s(l(t),e))},_=function(t,o){null==o&&(o="/");var r=a(t);if(i.call(n,r))return n[r].exports;if(i.call(e,r))return u(r,e[r]);throw new Error("Cannot find module '"+t+"' from '"+o+"'")};_.alias=function(t,e){o[e]=t};var h=/\.[^.\/]+$/,v=/\/index(\.[^\/]+)?$/,g=function(t){if(h.test(t)){var e=t.replace(h,"");i.call(o,e)&&o[e].replace(h,"")!==e+"/index"||(o[e]=t)}if(v.test(t)){var n=t.replace(v,"");i.call(o,n)||(o[n]=t)}};_.register=_.define=function(t,o){if(t&&"object"==typeof t)for(var r in t)i.call(t,r)&&_.register(r,t[r]);else e[t]=o,delete n[t],g(t)},_.list=function(){var t=[];for(var n in e)i.call(e,n)&&t.push(n);return t};var d=t._hmr&&new t._hmr(f,_,e,n);_._cache=n,_.hmr=d&&d.wrap,_.brunch=!0,t.require=_}}(),function(){"undefined"==typeof window?this:window;require.register("scripts/bundles/index.bundle.js",function(t,e,n){document.addEventListener("DOMContentLoaded",function(){console.log("everything OK");var t=e("../lib/scrolltoanchor"),n=e("../blocks.default/nav-menu"),o=e("../blocks.default/icons"),i=e("../blocks.default/tile");t("800"),n(),o(),i()})}),require.register("scripts/lib/scrolltoanchor.js",function(t,e,n){n.exports=function(t){$('a[href*="#"]').on("click",function(e){var n=$(this).attr("href").substring(1);console.log(n);try{$("html, body").stop().animate({scrollTop:$("a[name*="+n+"]").offset().top},t),e.preventDefault()}catch(o){console.log("Anchor missing: "+o.message)}})}}),require.register("scripts/blocks.default/nav-menu.js",function(t,e,n){n.exports=function(){$(".nav-menu__menu-button").click(function(){$(this).toggleClass("nav-menu__menu-button_open"),$(".vertical-menu").toggleClass("vertical-menu__showed")}),$(window).resize(function(){$(".vertical-menu").removeClass("vertical-menu__showed"),$(".nav-menu__menu-button").removeClass("nav-menu__menu-button_open")}),$(".vertical-menu__link").click(function(){$(".nav-menu__menu-button").toggleClass("nav-menu__menu-button_open"),$(".vertical-menu").toggleClass("vertical-menu__showed")})}}),require.register("scripts/blocks.default/icons.js",function(t,e,n){n.exports=function(){window.onload=function(){function t(t,e){var n=t.contentDocument;if(e="fill: "+e,$("*",n).is("#path3398")){var o=$("#path3400",n),i=$("#path3398",n);o.attr("style",e),i.attr("style",e)}else if($("*",n).is("#path3318")){var o=$("#path3318",n),i=$("#path3320",n),r=$("#path3322",n);o.attr("style",e),i.attr("style",e),r.attr("style",e)}else if($("*",n).is("#path3176")){var o=$("#path3176",n),i=$("#path3178",n);o.attr("style",e),i.attr("style",e)}}for(var e=$(".icons__svg"),n=0;n<e.length;n++)t(e[n],"#18bc9c");try{$(".icons__link").mouseover(function(){var e=$(".icons__svg",this);console.log(e),t(e,"#ffffff")}).mouseout(function(){var e=$(".icons__svg",this);console.log(e),t(e,"#18bc9c")})}catch(o){console.log("icons__svg not found")}try{}catch(o){console.log("icons__svg not found")}try{}catch(o){console.log("icons__svg not found")}}}}),require.register("scripts/blocks.default/tile.js",function(t,e,n){n.exports=function(){function t(t){return $("*",t).is(".mobile-toggle")&&($(".mobile-toggle",t).toggleClass("mobile-show"),t.toggleClass("js_hidden-el"),t.toggleClass("js_hidden-el_clicked")),!0}var e=$(".tile"),n=$(".tile_switch-colors"),o=$(".tile_switch-colors-rev");try{$(e).on("click",function(){$(window).width()<=768&&t($(this))}),$(n).on("click",function(){$(window).width()<=768&&t($(this))}),$(o).on("click",function(){$(window).width()<=768&&t($(this))})}catch(i){}}}),require.register("___globals___",function(t,e,n){})}(),require("___globals___");