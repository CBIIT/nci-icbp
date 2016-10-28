
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - jquery-integration.js - */
// http://icbp.nci.nih.gov/portal_javascripts/jquery-integration.js?original=1
var jq=jQuery;if(typeof cssQuery==='undefined'){var cssQuery=function(s,f){return jQuery.makeArray(jQuery(s,f))}}


/* - ++resource++plone.app.jquerytools.js - */
/*
 
 jQuery Tools v1.2.5 Overlay - Overlay base. Extend it.

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/overlay/

 Since: March 2008
 Date: 2010-12-27 15:01 
*/
(function(a){function t(d,b){var c=this,j=d.add(c),o=a(window),k,f,m,g=a.tools.expose&&(b.mask||b.expose),n=Math.random().toString().slice(10);if(g){if(typeof g=="string")g={color:g};g.closeOnClick=g.closeOnEsc=false}var p=b.target||d.attr("rel");f=p?a(p):d;if(!f.length)throw"Could not find Overlay: "+p;d&&d.index(f)==-1&&d.click(function(e){c.load(e);return e.preventDefault()});a.extend(c,{load:function(e){if(c.isOpened())return c;var h=q[b.effect];if(!h)throw'Overlay: cannot find effect : "'+b.effect+
'"';b.oneInstance&&a.each(s,function(){this.close(e)});e=e||a.Event();e.type="onBeforeLoad";j.trigger(e);if(e.isDefaultPrevented())return c;m=true;g&&a(f).expose(g);var i=b.top,r=b.left,u=f.outerWidth({margin:true}),v=f.outerHeight({margin:true});if(typeof i=="string")i=i=="center"?Math.max((o.height()-v)/2,0):parseInt(i,10)/100*o.height();if(r=="center")r=Math.max((o.width()-u)/2,0);h[0].call(c,{top:i,left:r},function(){if(m){e.type="onLoad";j.trigger(e)}});g&&b.closeOnClick&&a.mask.getMask().one("click",
c.close);b.closeOnClick&&a(document).bind("click."+n,function(l){a(l.target).parents(f).length||c.close(l)});b.closeOnEsc&&a(document).bind("keydown."+n,function(l){l.keyCode==27&&c.close(l)});return c},close:function(e){if(!c.isOpened())return c;e=e||a.Event();e.type="onBeforeClose";j.trigger(e);if(!e.isDefaultPrevented()){m=false;q[b.effect][1].call(c,function(){e.type="onClose";j.trigger(e)});a(document).unbind("click."+n).unbind("keydown."+n);g&&a.mask.close();return c}},getOverlay:function(){return f},
getTrigger:function(){return d},getClosers:function(){return k},isOpened:function(){return m},getConf:function(){return b}});a.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(e,h){a.isFunction(b[h])&&a(c).bind(h,b[h]);c[h]=function(i){i&&a(c).bind(h,i);return c}});k=f.find(b.close||".close");if(!k.length&&!b.close){k=a('<a class="close"></a>');f.prepend(k)}k.click(function(e){c.close(e)});b.load&&c.load()}a.tools=a.tools||{version:"v1.2.5"};a.tools.overlay={addEffect:function(d,
b,c){q[d]=[b,c]},conf:{close:null,closeOnClick:true,closeOnEsc:true,closeSpeed:"fast",effect:"default",fixed:!a.browser.msie||a.browser.version>6,left:"center",load:false,mask:null,oneInstance:true,speed:"normal",target:null,top:"10%"}};var s=[],q={};a.tools.overlay.addEffect("default",function(d,b){var c=this.getConf(),j=a(window);if(!c.fixed){d.top+=j.scrollTop();d.left+=j.scrollLeft()}d.position=c.fixed?"fixed":"absolute";this.getOverlay().css(d).fadeIn(c.speed,b)},function(d){this.getOverlay().fadeOut(this.getConf().closeSpeed,
d)});a.fn.overlay=function(d){var b=this.data("overlay");if(b)return b;if(a.isFunction(d))d={onBeforeLoad:d};d=a.extend(true,{},a.tools.overlay.conf,d);this.each(function(){b=new t(a(this),d);s.push(b);a(this).data("overlay",b)});return d.api?b:this}})(jQuery);

/*
 
 jQuery Tools v1.2.5 Scrollable - New wave UI design

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/scrollable.html

 Since: March 2008
 Date: 2010-12-27 15:01 
*/
(function(e){function p(f,c){var b=e(c);return b.length<2?b:f.parent().find(c)}function u(f,c){var b=this,n=f.add(b),g=f.children(),l=0,j=c.vertical;k||(k=b);if(g.length>1)g=e(c.items,f);e.extend(b,{getConf:function(){return c},getIndex:function(){return l},getSize:function(){return b.getItems().size()},getNaviButtons:function(){return o.add(q)},getRoot:function(){return f},getItemWrap:function(){return g},getItems:function(){return g.children(c.item).not("."+c.clonedClass)},move:function(a,d){return b.seekTo(l+
a,d)},next:function(a){return b.move(1,a)},prev:function(a){return b.move(-1,a)},begin:function(a){return b.seekTo(0,a)},end:function(a){return b.seekTo(b.getSize()-1,a)},focus:function(){return k=b},addItem:function(a){a=e(a);if(c.circular){g.children("."+c.clonedClass+":last").before(a);g.children("."+c.clonedClass+":first").replaceWith(a.clone().addClass(c.clonedClass))}else g.append(a);n.trigger("onAddItem",[a]);return b},seekTo:function(a,d,h){a.jquery||(a*=1);if(c.circular&&a===0&&l==-1&&d!==
0)return b;if(!c.circular&&a<0||a>b.getSize()||a<-1)return b;var i=a;if(a.jquery)a=b.getItems().index(a);else i=b.getItems().eq(a);var r=e.Event("onBeforeSeek");if(!h){n.trigger(r,[a,d]);if(r.isDefaultPrevented()||!i.length)return b}i=j?{top:-i.position().top}:{left:-i.position().left};l=a;k=b;if(d===undefined)d=c.speed;g.animate(i,d,c.easing,h||function(){n.trigger("onSeek",[a])});return b}});e.each(["onBeforeSeek","onSeek","onAddItem"],function(a,d){e.isFunction(c[d])&&e(b).bind(d,c[d]);b[d]=function(h){h&&
e(b).bind(d,h);return b}});if(c.circular){var s=b.getItems().slice(-1).clone().prependTo(g),t=b.getItems().eq(1).clone().appendTo(g);s.add(t).addClass(c.clonedClass);b.onBeforeSeek(function(a,d,h){if(!a.isDefaultPrevented())if(d==-1){b.seekTo(s,h,function(){b.end(0)});return a.preventDefault()}else d==b.getSize()&&b.seekTo(t,h,function(){b.begin(0)})});b.seekTo(0,0,function(){})}var o=p(f,c.prev).click(function(){b.prev()}),q=p(f,c.next).click(function(){b.next()});if(!c.circular&&b.getSize()>1){b.onBeforeSeek(function(a,
d){setTimeout(function(){if(!a.isDefaultPrevented()){o.toggleClass(c.disabledClass,d<=0);q.toggleClass(c.disabledClass,d>=b.getSize()-1)}},1)});c.initialIndex||o.addClass(c.disabledClass)}c.mousewheel&&e.fn.mousewheel&&f.mousewheel(function(a,d){if(c.mousewheel){b.move(d<0?1:-1,c.wheelSpeed||50);return false}});if(c.touch){var m={};g[0].ontouchstart=function(a){a=a.touches[0];m.x=a.clientX;m.y=a.clientY};g[0].ontouchmove=function(a){if(a.touches.length==1&&!g.is(":animated")){var d=a.touches[0],h=
m.x-d.clientX;d=m.y-d.clientY;b[j&&d>0||!j&&h>0?"next":"prev"]();a.preventDefault()}}}c.keyboard&&e(document).bind("keydown.scrollable",function(a){if(!(!c.keyboard||a.altKey||a.ctrlKey||e(a.target).is(":input")))if(!(c.keyboard!="static"&&k!=b)){var d=a.keyCode;if(j&&(d==38||d==40)){b.move(d==38?-1:1);return a.preventDefault()}if(!j&&(d==37||d==39)){b.move(d==37?-1:1);return a.preventDefault()}}});c.initialIndex&&b.seekTo(c.initialIndex,0,function(){})}e.tools=e.tools||{version:"v1.2.5"};e.tools.scrollable=
{conf:{activeClass:"active",circular:false,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:null,items:".items",keyboard:true,mousewheel:false,next:".next",prev:".prev",speed:400,vertical:false,touch:true,wheelSpeed:0}};var k;e.fn.scrollable=function(f){var c=this.data("scrollable");if(c)return c;f=e.extend({},e.tools.scrollable.conf,f);this.each(function(){c=new u(e(this),f);e(this).data("scrollable",c)});return f.api?c:this}})(jQuery);

/*
 
 jQuery Tools v1.2.5 Tabs- The basics of UI design.

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/tabs/

 Since: November 2008
 Date: 2010-12-27 15:01 
*/
(function(c){function p(d,b,a){var e=this,l=d.add(this),h=d.find(a.tabs),i=b.jquery?b:d.children(b),j;h.length||(h=d.children());i.length||(i=d.parent().find(b));i.length||(i=c(b));c.extend(this,{click:function(f,g){var k=h.eq(f);if(typeof f=="string"&&f.replace("#","")){k=h.filter("[href*="+f.replace("#","")+"]");f=Math.max(h.index(k),0)}if(a.rotate){var n=h.length-1;if(f<0)return e.click(n,g);if(f>n)return e.click(0,g)}if(!k.length){if(j>=0)return e;f=a.initialIndex;k=h.eq(f)}if(f===j)return e;
g=g||c.Event();g.type="onBeforeClick";l.trigger(g,[f]);if(!g.isDefaultPrevented()){o[a.effect].call(e,f,function(){g.type="onClick";l.trigger(g,[f])});j=f;h.removeClass(a.current);k.addClass(a.current);return e}},getConf:function(){return a},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return e.click(j+1)},prev:function(){return e.click(j-1)},destroy:function(){h.unbind(a.event).removeClass(a.current);
i.find("a[href^=#]").unbind("click.html");return e}});c.each("onBeforeClick,onClick".split(","),function(f,g){c.isFunction(a[g])&&c(e).bind(g,a[g]);e[g]=function(k){k&&c(e).bind(g,k);return e}});if(a.history&&c.fn.history){c.tools.history.init(h);a.event="history"}h.each(function(f){c(this).bind(a.event,function(g){e.click(f,g);return g.preventDefault()})});i.find("a[href^=#]").bind("click.html",function(f){e.click(c(this).attr("href"),f)});if(location.hash&&a.tabs=="a"&&d.find("[href="+location.hash+"]").length)e.click(location.hash);
else if(a.initialIndex===0||a.initialIndex>0)e.click(a.initialIndex)}c.tools=c.tools||{version:"v1.2.5"};c.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:false,history:false},addEffect:function(d,b){o[d]=b}};var o={"default":function(d,b){this.getPanes().hide().eq(d).show();b.call()},fade:function(d,b){var a=this.getConf(),e=a.fadeOutSpeed,l=this.getPanes();e?l.fadeOut(e):l.hide();l.eq(d).fadeIn(a.fadeInSpeed,b)},slide:function(d,
b){this.getPanes().slideUp(200);this.getPanes().eq(d).slideDown(400,b)},ajax:function(d,b){this.getPanes().eq(0).load(this.getTabs().eq(d).attr("href"),b)}},m;c.tools.tabs.addEffect("horizontal",function(d,b){m||(m=this.getPanes().eq(0).width());this.getCurrentPane().animate({width:0},function(){c(this).hide()});this.getPanes().eq(d).animate({width:m},function(){c(this).show();b.call()})});c.fn.tabs=function(d,b){var a=this.data("tabs");if(a){a.destroy();this.removeData("tabs")}if(c.isFunction(b))b=
{onBeforeClick:b};b=c.extend({},c.tools.tabs.conf,b);this.each(function(){a=new p(c(this),d,b);c(this).data("tabs",a)});return b.api?a:this}})(jQuery);

/*
 
 jQuery Tools v1.2.5 / Expose - Dim the lights

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/toolbox/expose.html

 Since: Mar 2010
 Date: 2010-12-27 15:01 
*/
(function(b){function k(){if(b.browser.msie){var a=b(document).height(),d=b(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a-d<20?d:a]}return[b(document).width(),b(document).height()]}function h(a){if(a)return a.call(b.mask)}b.tools=b.tools||{version:"v1.2.5"};var l;l=b.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:true,closeOnEsc:true,zIndex:9998,opacity:0.8,startOpacity:0,color:"#fff",onLoad:null,
onClose:null}};var c,i,e,g,j;b.mask={load:function(a,d){if(e)return this;if(typeof a=="string")a={color:a};a=a||g;g=a=b.extend(b.extend({},l.conf),a);c=b("#"+a.maskId);if(!c.length){c=b("<div/>").attr("id",a.maskId);b("body").append(c)}var m=k();c.css({position:"absolute",top:0,left:0,width:m[0],height:m[1],display:"none",opacity:a.startOpacity,zIndex:a.zIndex});a.color&&c.css("backgroundColor",a.color);if(h(a.onBeforeLoad)===false)return this;a.closeOnEsc&&b(document).bind("keydown.mask",function(f){f.keyCode==
27&&b.mask.close(f)});a.closeOnClick&&c.bind("click.mask",function(f){b.mask.close(f)});b(window).bind("resize.mask",function(){b.mask.fit()});if(d&&d.length){j=d.eq(0).css("zIndex");b.each(d,function(){var f=b(this);/relative|absolute|fixed/i.test(f.css("position"))||f.css("position","relative")});i=d.css({zIndex:Math.max(a.zIndex+1,j=="auto"?0:j)})}c.css({display:"block"}).fadeTo(a.loadSpeed,a.opacity,function(){b.mask.fit();h(a.onLoad);e="full"});e=true;return this},close:function(){if(e){if(h(g.onBeforeClose)===
false)return this;c.fadeOut(g.closeSpeed,function(){h(g.onClose);i&&i.css({zIndex:j});e=false});b(document).unbind("keydown.mask");c.unbind("click.mask");b(window).unbind("resize.mask")}return this},fit:function(){if(e){var a=k();c.css({width:a[0],height:a[1]})}},getMask:function(){return c},isLoaded:function(a){return a?e=="full":e},getConf:function(){return g},getExposed:function(){return i}};b.fn.mask=function(a){b.mask.load(a);return this};b.fn.expose=function(a){b.mask.load(a,this);return this}})(jQuery);

/*
 
 jQuery Tools v1.2.5 History "Back button for AJAX apps"

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/toolbox/history.html

 Since: Mar 2010
 Date: 2010-12-27 15:01 
*/
(function(b){function h(c){if(c){var a=d.contentWindow.document;a.open().close();a.location.hash=c}}var g,d,f,i;b.tools=b.tools||{version:"v1.2.5"};b.tools.history={init:function(c){if(!i){if(b.browser.msie&&b.browser.version<"8"){if(!d){d=b("<iframe/>").attr("src","javascript:false;").hide().get(0);b("body").append(d);setInterval(function(){var a=d.contentWindow.document;a=a.location.hash;g!==a&&b.event.trigger("hash",a)},100);h(location.hash||"#")}}else setInterval(function(){var a=location.hash;
a!==g&&b.event.trigger("hash",a)},100);f=!f?c:f.add(c);c.click(function(a){var e=b(this).attr("href");d&&h(e);if(e.slice(0,1)!="#"){location.href="#"+e;return a.preventDefault()}});i=true}}};b(window).bind("hash",function(c,a){a?f.filter(function(){var e=b(this).attr("href");return e==a||e==a.replace("#","")}).trigger("history",[a]):f.eq(0).trigger("history",[a]);g=a});b.fn.history=function(c){b.tools.history.init(this);return this.bind("history",c)}})(jQuery);

/*
 
 jQuery Tools v1.2.5 Tooltip - UI essentials

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/tooltip/

 Since: November 2008
 Date: 2010-12-27 15:01 
*/
(function(f){function p(a,b,c){var h=c.relative?a.position().top:a.offset().top,d=c.relative?a.position().left:a.offset().left,i=c.position[0];h-=b.outerHeight()-c.offset[0];d+=a.outerWidth()+c.offset[1];if(/iPad/i.test(navigator.userAgent))h-=f(window).scrollTop();var j=b.outerHeight()+a.outerHeight();if(i=="center")h+=j/2;if(i=="bottom")h+=j;i=c.position[1];a=b.outerWidth()+a.outerWidth();if(i=="center")d-=a/2;if(i=="left")d-=a;return{top:h,left:d}}function u(a,b){var c=this,h=a.add(c),d,i=0,j=
0,m=a.attr("title"),q=a.attr("data-tooltip"),r=o[b.effect],l,s=a.is(":input"),v=s&&a.is(":checkbox, :radio, select, :button, :submit"),t=a.attr("type"),k=b.events[t]||b.events[s?v?"widget":"input":"def"];if(!r)throw'Nonexistent effect "'+b.effect+'"';k=k.split(/,\s*/);if(k.length!=2)throw"Tooltip: bad events configuration for "+t;a.bind(k[0],function(e){clearTimeout(i);if(b.predelay)j=setTimeout(function(){c.show(e)},b.predelay);else c.show(e)}).bind(k[1],function(e){clearTimeout(j);if(b.delay)i=
setTimeout(function(){c.hide(e)},b.delay);else c.hide(e)});if(m&&b.cancelDefault){a.removeAttr("title");a.data("title",m)}f.extend(c,{show:function(e){if(!d){if(q)d=f(q);else if(b.tip)d=f(b.tip).eq(0);else if(m)d=f(b.layout).addClass(b.tipClass).appendTo(document.body).hide().append(m);else{d=a.next();d.length||(d=a.parent().next())}if(!d.length)throw"Cannot find tooltip for "+a;}if(c.isShown())return c;d.stop(true,true);var g=p(a,d,b);b.tip&&d.html(a.data("title"));e=e||f.Event();e.type="onBeforeShow";
h.trigger(e,[g]);if(e.isDefaultPrevented())return c;g=p(a,d,b);d.css({position:"absolute",top:g.top,left:g.left});l=true;r[0].call(c,function(){e.type="onShow";l="full";h.trigger(e)});g=b.events.tooltip.split(/,\s*/);if(!d.data("__set")){d.bind(g[0],function(){clearTimeout(i);clearTimeout(j)});g[1]&&!a.is("input:not(:checkbox, :radio), textarea")&&d.bind(g[1],function(n){n.relatedTarget!=a[0]&&a.trigger(k[1].split(" ")[0])});d.data("__set",true)}return c},hide:function(e){if(!d||!c.isShown())return c;
e=e||f.Event();e.type="onBeforeHide";h.trigger(e);if(!e.isDefaultPrevented()){l=false;o[b.effect][1].call(c,function(){e.type="onHide";h.trigger(e)});return c}},isShown:function(e){return e?l=="full":l},getConf:function(){return b},getTip:function(){return d},getTrigger:function(){return a}});f.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(e,g){f.isFunction(b[g])&&f(c).bind(g,b[g]);c[g]=function(n){n&&f(c).bind(g,n);return c}})}f.tools=f.tools||{version:"v1.2.5"};f.tools.tooltip=
{conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:false,cancelDefault:true,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,b,c){o[a]=[b,c]}};var o={toggle:[function(a){var b=this.getConf(),c=this.getTip();b=b.opacity;b<1&&c.css({opacity:b});c.show();a.call()},function(a){this.getTip().hide();
a.call()}],fade:[function(a){var b=this.getConf();this.getTip().fadeTo(b.fadeInSpeed,b.opacity,a)},function(a){this.getTip().fadeOut(this.getConf().fadeOutSpeed,a)}]};f.fn.tooltip=function(a){var b=this.data("tooltip");if(b)return b;a=f.extend(true,{},f.tools.tooltip.conf,a);if(typeof a.position=="string")a.position=a.position.split(/,?\s/);this.each(function(){b=new u(f(this),a);f(this).data("tooltip",b)});return a.api?b:this}})(jQuery);



/* - ++resource++plone.app.jquerytools.overlayhelpers.js - */
// http://icbp.nci.nih.gov/portal_javascripts/++resource++plone.app.jquerytools.overlayhelpers.js?original=1
var pb={spinner:{},overlay_counter:1};jQuery.tools.overlay.conf.oneInstance=false;jQuery(function($){pb.spinner.show=function(){$('body').css('cursor','wait')};pb.spinner.hide=function(){$('body').css('cursor','')};$.fn.prepOverlay=function(pba){return this.each(function(){var o,pbo,config,onBeforeLoad,onLoad,src,parts;o=$(this);pbo=$.extend(true,{},pba);config=pbo.config||{};onBeforeLoad=pb[pbo.subtype];if(onBeforeLoad){config.onBeforeLoad=onBeforeLoad}
onLoad=config.onLoad;config.onLoad=function(){if(onLoad){onLoad.apply(this,arguments)}
pb.fi_focus(this.getOverlay())};src=o.attr('href')||o.attr('src')||o.attr('action');if(pbo.urlmatch){src=src.replace(new RegExp(pbo.urlmatch),pbo.urlreplace)}
if(pbo.subtype==='inline'){src=src.replace(/^.+#/,'#');$("[id='"+src.replace('#','')+"']").addClass('overlay');o.removeAttr('href').attr('rel',src);o.overlay()} else{pbo.nt='pb_'+pb.overlay_counter;pb.overlay_counter+=1;pbo.selector=pbo.filter||pbo.selector;if(!pbo.selector){parts=src.split(' ');src=parts.shift();pbo.selector=parts.join(' ')}
pbo.src=src;pbo.config=config;pb.remove_overlay(o);o.data('pbo',pbo);o.attr('rel','#'+pbo.nt);o.addClass('link-overlay');switch(pbo.subtype){case 'image':o.click(pb.image_click);break;case 'ajax':o.click(pb.ajax_click);break;case 'iframe':pb.create_content_div(pbo);o.overlay(config);break;default:throw "Unsupported overlay type"}
o.css('cursor','pointer')}})};pb.remove_overlay=function(o){var old_data=o.data('pbo');if(old_data){switch(old_data.subtype){case 'image':o.unbind('click',pb.image_click);break;case 'ajax':o.unbind('click',pb.ajax_click);break;default:o.unbind('click')}
if(old_data.nt){$('#'+old_data.nt).remove()}}};pb.create_content_div=function(pbo){var content;content=$('<div id="'+pbo.nt+'" class="overlay overlay-'+pbo.subtype+' '+(pbo.cssclass||'')+'"><div class="close"><span>Close</span></div></div>');content.data('pbo',pbo);if(pbo.width){content.width(pbo.width)}
content.appendTo($("body"));return content};pb.image_click=function(event){var ethis,content,api,img,el,pbo;ethis=$(this);pbo=ethis.data('pbo');content=$(ethis.attr('rel'));if(!content.length){content=pb.create_content_div(pbo);content.overlay(pbo.config)}
api=content.overlay();if(content.find('img').length===0){if(pbo.src){pb.spinner.show();img=new Image();img.src=pbo.src;el=$(img);content.append(el.addClass('pb-image'));el.load(function(){pb.spinner.hide();api.load()})}} else{api.load()}
return false};pb.fi_focus=function(jqo){if(!jqo.find("form div.error :input:first").focus().length){jqo.find("form :input:visible:first").focus()}};pb.ajax_error_recover=function(responseText,selector){var tcontent=$('<div/>').append(responseText.replace(/<script(.|\s)*?\/script>/gi,""));return selector?tcontent.find(selector):tcontent};pb.add_ajax_load=function(form){if(form.find('input[name=ajax_load]').length===0){form.prepend($('<input type="hidden" name="ajax_load" value="'+(new Date().getTime())+'" />'))}};pb.prep_ajax_form=function(form){var ajax_parent=form.closest('.pb-ajax'),data_parent=ajax_parent.closest('.overlay-ajax'),pbo=data_parent.data('pbo'),formtarget=pbo.formselector,closeselector=pbo.closeselector,beforepost=pbo.beforepost,afterpost=pbo.afterpost,noform=pbo.noform,api=data_parent.overlay(),selector=pbo.selector,options={};options.beforeSerialize=function(){pb.spinner.show()};if(beforepost){options.beforeSubmit=function(arr,form,options){return beforepost(form,arr,options)}}
options.success=function(responseText,statusText,xhr,form){$(document).trigger('formOverlayStart',[this,responseText,statusText,xhr,form]);var el,myform,success,target;success=statusText==="success"||statusText==="notmodified";if(!success){responseText=responseText.responseText}
responseText=responseText.replace(/<script(.|\s)*?\/script>/gi,"");el=$('<div />').append(selector?$('<div />').append(responseText).find(selector):responseText);if(success&&afterpost){afterpost(el,data_parent)}
myform=el.find(formtarget);if(success&&myform.length){ajax_parent.empty().append(el);pb.fi_focus(ajax_parent);pb.add_ajax_load(myform);myform.ajaxForm(options);if(closeselector){el.find(closeselector).click(function(event){api.close();return false})}
$(document).trigger('formOverlayLoadSuccess',[this,myform,api,pb,ajax_parent])} else{if(success){if(typeof(noform)==="function"){noform=noform(this)}} else{noform=statusText}
switch(noform){case 'close':api.close();break;case 'reload':api.close();pb.spinner.show();location.replace(location.href);break;case 'redirect':api.close();pb.spinner.show();target=pbo.redirect;if(typeof(target)==="function"){target=target(this,responseText)}
location.replace(target);break;default:if(el.children()){ajax_parent.empty().append(el)} else{api.close()}}
$(document).trigger('formOverlayLoadFailure',[this,myform,api,pb,ajax_parent,noform])}
pb.spinner.hide()};options.error=options.success;pb.add_ajax_load(form);form.ajaxForm(options)};pb.ajax_click=function(event){var ethis=$(this),pbo,content,api,src,el,selector,formtarget,closeselector,sep;e=$.Event();e.type="beforeAjaxClickHandled";$(document).trigger(e,[this,event]);if(e.isDefaultPrevented()){return}
pbo=ethis.data('pbo');content=pb.create_content_div(pbo);content.overlay(pbo.config);api=content.overlay();src=pbo.src;selector=pbo.selector;formtarget=pbo.formselector;closeselector=pbo.closeselector;pb.spinner.show();$(this).find("input.submitting").removeClass('submitting');el=$('<div class="pb-ajax" />');if(api.getConf().fixed){el.css('max-height',Math.floor($(window).height() * 0.75))}
content.append(el);sep=(src.indexOf('?')>=0)?'&':'?';src+=sep+"ajax_load="+(new Date().getTime());if(selector){src+=' '+selector}
el[0].handle_load_inside_overlay=function(responseText,errorText){var el=$(this);if(errorText==='error'){el.append(pb.ajax_error_recover(responseText,selector))} else if(!responseText.length){el.append(ajax_noresponse_message||'No response from server.')}
el.wrapInner('<div />');if(formtarget){var target=el.find(formtarget);if(target.length>0){pb.prep_ajax_form(target)}}
if(closeselector){el.find(closeselector).click(function(event){api.close();return false})}
if($.fn.ploneTabInit){el.ploneTabInit()}
api.onClose=function(){content.remove()};$(document).trigger('loadInsideOverlay',[this,responseText,errorText,api])}
el.load(src,null, function(responseText,errorText){el[0].handle_load_inside_overlay.apply(this,[responseText,errorText]);pb.spinner.hide();api.load();return true});return false};pb.iframe=function(){var content,pbo;pb.spinner.show();content=this.getOverlay();pbo=this.getTrigger().data('pbo');if(content.find('iframe').length===0&&pbo.src){content.append('<iframe src="'+pbo.src+'" width="'+content.width()+'" height="'+content.height()+'" onload="pb.spinner.hide()"/>')} else{pb.spinner.hide()}
return true}});

/* - ++resource++plone.app.jquerytools.form.js - */
(function(b){function p(){if(b.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log)window.console.log(a);else window.opera&&window.opera.postError&&window.opera.postError(a)}}b.fn.ajaxSubmit=function(a){function g(){function t(){var n=k.attr("target"),m=k.attr("action");l.setAttribute("target",u);l.getAttribute("method")!="POST"&&l.setAttribute("method","POST");l.getAttribute("action")!=e.url&&l.setAttribute("action",e.url);e.skipEncodingOverride||
k.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});e.timeout&&setTimeout(function(){F=true;s()},e.timeout);var v=[];try{if(e.extraData)for(var w in e.extraData)v.push(b('<input type="hidden" name="'+w+'" value="'+e.extraData[w]+'" />').appendTo(l)[0]);q.appendTo("body");q.data("form-plugin-onload",s);l.submit()}finally{l.setAttribute("action",m);n?l.setAttribute("target",n):k.removeAttr("target");b(v).remove()}}function s(){if(!G){q.removeData("form-plugin-onload");var n=true;
try{if(F)throw"timeout";o=x.contentWindow?x.contentWindow.document:x.contentDocument?x.contentDocument:x.document;var m=e.dataType=="xml"||o.XMLDocument||b.isXMLDoc(o);p("isXml="+m);if(!m&&window.opera&&(o.body==null||o.body.innerHTML==""))if(--K){p("requeing onLoad callback, DOM not available");setTimeout(s,250);return}G=true;i.responseText=o.documentElement?o.documentElement.innerHTML:null;i.responseXML=o.XMLDocument?o.XMLDocument:o;i.getResponseHeader=function(L){var M={"content-type":e.dataType};
return M[L]};var v=/(json|script)/.test(e.dataType);if(v||e.textarea){var w=o.getElementsByTagName("textarea")[0];if(w)i.responseText=w.value;else if(v){var H=o.getElementsByTagName("pre")[0],I=o.getElementsByTagName("body")[0];if(H)i.responseText=H.textContent;else if(I)i.responseText=I.innerHTML}}else if(e.dataType=="xml"&&!i.responseXML&&i.responseText!=null)i.responseXML=C(i.responseText);J=b.httpData(i,e.dataType)}catch(D){p("error caught:",D);n=false;i.error=D;b.handleError(e,i,"error",D)}if(i.aborted){p("upload aborted");
n=false}if(n){e.success.call(e.context,J,"success",i);y&&b.event.trigger("ajaxSuccess",[i,e])}y&&b.event.trigger("ajaxComplete",[i,e]);y&&!--b.active&&b.event.trigger("ajaxStop");if(e.complete)e.complete.call(e.context,i,n?"success":"error");setTimeout(function(){q.removeData("form-plugin-onload");q.remove();i.responseXML=null},100)}}function C(n,m){if(window.ActiveXObject){m=new ActiveXObject("Microsoft.XMLDOM");m.async="false";m.loadXML(n)}else m=(new DOMParser).parseFromString(n,"text/xml");return m&&
m.documentElement&&m.documentElement.tagName!="parsererror"?m:null}var l=k[0];if(b(":input[name=submit],:input[id=submit]",l).length)alert('Error: Form elements must not have name or id of "submit".');else{var e=b.extend(true,{},b.ajaxSettings,a);e.context=e.context||e;var u="jqFormIO"+(new Date).getTime(),E="_"+u;window[E]=function(){var n=q.data("form-plugin-onload");if(n){n();window[E]=undefined;try{delete window[E]}catch(m){}}};var q=b('<iframe id="'+u+'" name="'+u+'" src="'+e.iframeSrc+'" onload="window[\'_\'+this.id]()" />'),
x=q[0];q.css({position:"absolute",top:"-1000px",left:"-1000px"});var i={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=1;q.attr("src",e.iframeSrc)}},y=e.global;y&&!b.active++&&b.event.trigger("ajaxStart");y&&b.event.trigger("ajaxSend",[i,e]);if(e.beforeSend&&e.beforeSend.call(e.context,i,e)===false)e.global&&b.active--;else if(!i.aborted){var G=false,
F=0,z=l.clk;if(z){var A=z.name;if(A&&!z.disabled){e.extraData=e.extraData||{};e.extraData[A]=z.value;if(z.type=="image"){e.extraData[A+".x"]=l.clk_x;e.extraData[A+".y"]=l.clk_y}}}e.forceSync?t():setTimeout(t,10);var J,o,K=50}}}if(!this.length){p("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof a=="function")a={success:a};var d=this.attr("action");if(d=typeof d==="string"?b.trim(d):"")d=(d.match(/^([^#]+)/)||[])[1];d=d||window.location.href||"";a=b.extend(true,{url:d,
type:this.attr("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);d={};this.trigger("form-pre-serialize",[this,a,d]);if(d.veto){p("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(a.beforeSerialize&&a.beforeSerialize(this,a)===false){p("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var c,f,h=this.formToArray(a.semantic);if(a.data){a.extraData=a.data;for(c in a.data)if(a.data[c]instanceof Array)for(var j in a.data[c])h.push({name:c,
value:a.data[c][j]});else{f=a.data[c];f=b.isFunction(f)?f():f;h.push({name:c,value:f})}}if(a.beforeSubmit&&a.beforeSubmit(h,this,a)===false){p("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[h,this,a,d]);if(d.veto){p("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}c=b.param(h);if(a.type.toUpperCase()=="GET"){a.url+=(a.url.indexOf("?")>=0?"&":"?")+c;a.data=null}else a.data=c;var k=this,r=[];a.resetForm&&r.push(function(){k.resetForm()});
a.clearForm&&r.push(function(){k.clearForm()});if(!a.dataType&&a.target){var B=a.success||function(){};r.push(function(t){var s=a.replaceTarget?"replaceWith":"html";b(a.target)[s](t).each(B,arguments)})}else a.success&&r.push(a.success);a.success=function(t,s,C){for(var l=a.context||a,e=0,u=r.length;e<u;e++)r[e].apply(l,[t,s,C||k,k])};c=b("input:file",this).length>0;j="multipart/form-data";j=k.attr("enctype")==j||k.attr("encoding")==j;if(a.iframe!==false&&(c||a.iframe||j))a.closeKeepAlive?b.get(a.closeKeepAlive,
g):g();else b.ajax(a);this.trigger("form-submit-notify",[this,a]);return this};b.fn.ajaxForm=function(a){if(this.length===0){var g={s:this.selector,c:this.context};if(!b.isReady&&g.s){p("DOM not ready, queuing ajaxForm");b(function(){b(g.s,g.c).ajaxForm(a)});return this}p("terminating; zero elements found by selector"+(b.isReady?"":" (DOM not ready)"));return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(d){if(!d.isDefaultPrevented()){d.preventDefault();b(this).ajaxSubmit(a)}}).bind("click.form-plugin",
function(d){var c=d.target,f=b(c);if(!f.is(":submit,input:image")){c=f.closest(":submit");if(c.length==0)return;c=c[0]}var h=this;h.clk=c;if(c.type=="image")if(d.offsetX!=undefined){h.clk_x=d.offsetX;h.clk_y=d.offsetY}else if(typeof b.fn.offset=="function"){f=f.offset();h.clk_x=d.pageX-f.left;h.clk_y=d.pageY-f.top}else{h.clk_x=d.pageX-c.offsetLeft;h.clk_y=d.pageY-c.offsetTop}setTimeout(function(){h.clk=h.clk_x=h.clk_y=null},100)})};b.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};
b.fn.formToArray=function(a){var g=[];if(this.length===0)return g;var d=this[0],c=a?d.getElementsByTagName("*"):d.elements;if(!c)return g;var f,h,j,k,r,B;f=0;for(r=c.length;f<r;f++){h=c[f];if(j=h.name)if(a&&d.clk&&h.type=="image"){if(!h.disabled&&d.clk==h){g.push({name:j,value:b(h).val()});g.push({name:j+".x",value:d.clk_x},{name:j+".y",value:d.clk_y})}}else if((k=b.fieldValue(h,true))&&k.constructor==Array){h=0;for(B=k.length;h<B;h++)g.push({name:j,value:k[h]})}else k!==null&&typeof k!="undefined"&&
g.push({name:j,value:k})}if(!a&&d.clk){a=b(d.clk);c=a[0];if((j=c.name)&&!c.disabled&&c.type=="image"){g.push({name:j,value:a.val()});g.push({name:j+".x",value:d.clk_x},{name:j+".y",value:d.clk_y})}}return g};b.fn.formSerialize=function(a){return b.param(this.formToArray(a))};b.fn.fieldSerialize=function(a){var g=[];this.each(function(){var d=this.name;if(d){var c=b.fieldValue(this,a);if(c&&c.constructor==Array)for(var f=0,h=c.length;f<h;f++)g.push({name:d,value:c[f]});else c!==null&&typeof c!="undefined"&&
g.push({name:this.name,value:c})}});return b.param(g)};b.fn.fieldValue=function(a){for(var g=[],d=0,c=this.length;d<c;d++){var f=this[d];f=b.fieldValue(f,a);f===null||typeof f=="undefined"||f.constructor==Array&&!f.length||(f.constructor==Array?b.merge(g,f):g.push(f))}return g};b.fieldValue=function(a,g){var d=a.name,c=a.type,f=a.tagName.toLowerCase();if(g===undefined)g=true;if(g&&(!d||a.disabled||c=="reset"||c=="button"||(c=="checkbox"||c=="radio")&&!a.checked||(c=="submit"||c=="image")&&a.form&&
a.form.clk!=a||f=="select"&&a.selectedIndex==-1))return null;if(f=="select"){f=a.selectedIndex;if(f<0)return null;g=[];a=a.options;d=(c=c=="select-one")?f+1:a.length;for(f=c?f:0;f<d;f++){var h=a[f];if(h.selected){var j=h.value;j||(j=h.attributes&&h.attributes.value&&!h.attributes.value.specified?h.text:h.value);if(c)return j;g.push(j)}}return g}return b(a).val()};b.fn.clearForm=function(){return this.each(function(){b("input,select,textarea",this).clearFields()})};b.fn.clearFields=b.fn.clearInputs=
function(){return this.each(function(){var a=this.type,g=this.tagName.toLowerCase();if(a=="text"||a=="password"||g=="textarea")this.value="";else if(a=="checkbox"||a=="radio")this.checked=false;else if(g=="select")this.selectedIndex=-1})};b.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||typeof this.reset=="object"&&!this.reset.nodeType)this.reset()})};b.fn.enable=function(a){if(a===undefined)a=true;return this.each(function(){this.disabled=!a})};b.fn.selected=
function(a){if(a===undefined)a=true;return this.each(function(){var g=this.type;if(g=="checkbox"||g=="radio")this.checked=a;else if(this.tagName.toLowerCase()=="option"){g=b(this).parent("select");a&&g[0]&&g[0].type=="select-one"&&g.find("option").selected(false);this.selected=a}})}})(jQuery);



/* - register_function.js - */
// http://icbp.nci.nih.gov/portal_javascripts/register_function.js?original=1
var bugRiddenCrashPronePieceOfJunk=(navigator.userAgent.indexOf('MSIE 5')!==-1&&navigator.userAgent.indexOf('Mac')!==-1);var W3CDOM=(!bugRiddenCrashPronePieceOfJunk&&typeof document.getElementsByTagName!=='undefined'&&typeof document.createElement!=='undefined');var registerEventListener=function(elem,event,func){jQuery(elem).bind(event,func)};var unRegisterEventListener=function(elem,event,func){jQuery(elem).unbind(event,func)};var registerPloneFunction=jQuery;
function getContentArea(){var node=jQuery('#region-content,#content');return node.length?node[0]:null}


/* - plone_javascript_variables.js - */
// http://icbp.nci.nih.gov/portal_javascripts/plone_javascript_variables.js?original=1
var portal_url='index.html';var form_modified_message='Your form has not been saved. All changes you have made will be lost.';var form_resubmit_message='You already clicked the submit button. Do you really want to submit this form again?';var external_links_open_new_window='false';var mark_special_links='false';var ajax_noresponse_message='No response from server. Please try again later.';

/* - nodeutilities.js - */
// http://icbp.nci.nih.gov/portal_javascripts/nodeutilities.js?original=1
function wrapNode(node,wrappertype,wrapperclass){jQuery(node).wrap('<'+wrappertype+'>').parent().addClass(wrapperclass)}
function nodeContained(innernode,outernode){return jQuery(innernode).parents().filter(function(){return this===outernode}).length>0}
function findContainer(node,func){var p=jQuery(node).parents().filter(func);return p.length?p.get(0):false}
function hasClassName(node,class_name){return jQuery(node).hasClass(class_name)}
function addClassName(node,class_name){jQuery(node).addClass(class_name)}
function removeClassName(node,class_name){jQuery(node).removeClass(class_name)}
function replaceClassName(node,old_class,new_class,ignore_missing){if(ignore_missing||jQuery(node).hasClass(old_class)){jQuery(node).removeClass(old_class).addClass(new_class)}}
function walkTextNodes(node,func,data){jQuery(node).find('*').andSelf().contents().each(function(){if(this.nodeType===3){func(this,data)}})}
function getInnerTextCompatible(node){return jQuery(node).text()}
function getInnerTextFast(node){return jQuery(node).text()}
function sortNodes(nodes,fetch_func,cmp_func){var SortNodeWrapper,items;SortNodeWrapper=function(node){this.value=fetch_func(node);this.cloned_node=node.cloneNode(true)};SortNodeWrapper.prototype.toString=function(){return this.value.toString?this.value.toString():this.value};items=jQuery(nodes).map(function(){return new SortNodeWrapper(this)});if(cmp_func){items.sort(cmp_func)} else{items.sort()}
jQuery.each(items, function(i){jQuery(nodes[i]).replace(this.cloned_node)})}
function copyChildNodes(srcNode,dstNode){jQuery(srcNode).children().clone().appendTo(jQuery(dstNode))}


/* - cookie_functions.js - */
// http://icbp.nci.nih.gov/portal_javascripts/cookie_functions.js?original=1
function createCookie(name,value,days){var date,expires;if(days){date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString()} else{expires=""}
document.cookie=name+"="+escape(value)+expires+"; path=/;"}
function readCookie(name){var nameEQ=name+"=",ca=document.cookie.split(';'),i,c;for(i=0;i<ca.length;i=i+1){c=ca[i];while(c.charAt(0)===' '){c=c.substring(1,c.length)}
if(c.indexOf(nameEQ)===0){return unescape(c.substring(nameEQ.length,c.length))}}
return null}


/* - livesearch.js - */
// http://icbp.nci.nih.gov/portal_javascripts/livesearch.js?original=1
var livesearch=(function(){var _2=400,_7=400,_0={},_1="LSHighlight";function _5(f,i){var l=null,r=null,c={},q=f.attr('action').replace(/search$/g,"")+"livesearch_reply",re=f.find('div.LSResult'),s=f.find('div.LSShadow'),p=f.find('input[name=path]');function _12(){re.hide();l=null}function _6(){window.setTimeout('livesearch.hide("'+f.attr('id')+'")',_7)}function _11(d){re.show();s.html(d)}function _14(){if(l===i.value){return}l=i.value;if(r&&r.readyState<4){r.abort()}if(i.value.length<2){_12();return}var qu={q:i.value};if(p.length&&p[0].checked){qu.path=p.val()}qu=jQuery.param(qu);if(c[qu]){_11(c[qu]);return}r=jQuery.get(q,qu,function(d){_11(d);c[qu]=d},'text')}function _4(){window.setTimeout('livesearch.search("'+f.attr('id')+'")',_2)}return{hide:_12,hide_delayed:_6,search:_14,search_delayed:_4}}function _3(f){var t=null,re=f.find('div.LSResult'),s=f.find('div.LSShadow');function _16(){var c=s.find('li.LSHighlight').removeClass(_1),p=c.prev('li');if(!p.length){p=s.find('li:last')}p.addClass(_1);return false}function _9(){var c=s.find('li.LSHighlight').removeClass(_1),n=c.next('li');if(!n.length){n=s.find('li:first')}n.addClass(_1);return false}function _8(){s.find('li.LSHighlight').removeClass(_1);re.hide()}function _10(e){window.clearTimeout(t);switch(e.keyCode){case 38:return _16();case 40:return _9();case 27:return _8();case 37:break;case 39:break;default:t=window.setTimeout('livesearch.search("'+f.attr('id')+'")',_2)}}function _13(){var t=s.find('li.LSHighlight a').attr('href');if(!t){return}window.location=t;return false}return{handler:_10,submit:_13}}function _15(i){var i='livesearch'+i,f=jQuery(this).parents('form:first'),k=_3(f);_0[i]=_5(f,this);f.attr('id',i).submit(k.submit);jQuery(this).attr('autocomplete','off').keydown(k.handler).focus(_0[i].search_delayed).blur(_0[i].hide_delayed)}jQuery(function(){jQuery("#searchGadget,input.portlet-search-gadget").each(_15)});return{search:function(id){_0[id].search()},hide:function(id){_0[id].hide()}}}());

/* - select_all.js - */
// http://icbp.nci.nih.gov/portal_javascripts/select_all.js?original=1
function toggleSelect(selectbutton,id,initialState,formName){var fid,state,base;fid=id||'ids:list';state=selectbutton.isSelected;if(state===undefined){state=Boolean(initialState)}
selectbutton.isSelected=!state;jQuery(selectbutton).attr('src',portal_url+'/select_'+(state?'all':'none')+'_icon.png');base=formName?jQuery(document.forms[formName]):jQuery(document);base.find('input[name='+fid+']:checkbox').attr('checked',!state)}


/* - dragdropreorder.js - */
// http://icbp.nci.nih.gov/portal_javascripts/dragdropreorder.js?original=1
var ploneDnDReorder={};ploneDnDReorder.dragging=null;ploneDnDReorder.table=null;ploneDnDReorder.rows=null;ploneDnDReorder.locked=false;(function($){ploneDnDReorder.doDown=function(e){var dragging=ploneDnDReorder.dragging,body;if(ploneDnDReorder.locked){return}
if(dragging){if($(this).attr('id')!==dragging.attr('id')){ploneDnDReorder.locked=true;dragging.removeClass('dragging').addClass('error')}
return}
dragging=$(this).parents('.draggable:first');if(!dragging.length){return}
ploneDnDReorder.rows.mousemove(ploneDnDReorder.doDrag);body=$('body');body.mouseup(ploneDnDReorder.doUp);body.mouseleave(ploneDnDReorder.doCancel);ploneDnDReorder.dragging=dragging;dragging.data('ploneDnDReorder.startPosition',ploneDnDReorder.getPos(dragging));dragging.addClass("dragging");$(this).parents('tr').addClass('dragindicator');dragging.data('ploneDnDReorder.subset_ids',$.map(ploneDnDReorder.table.find('tr.draggable'),
function(elem){return $(elem).attr('id').substr('folder-contents-item-'.length)}));return false};ploneDnDReorder.getPos=function(node){var pos=node.parent().children('.draggable').index(node[0]);return pos===-1?null:pos};ploneDnDReorder.doDrag=function(e){var dragging=ploneDnDReorder.dragging,target=this;if(!dragging){return}
if(!target){return}
if($(target).attr('id')!==dragging.attr('id')){ploneDnDReorder.swapElements($(target),dragging)}
return false};ploneDnDReorder.swapElements=function(child1,child2){var parent=child1.parent(),items=parent.children('[id]'),t;if(Math.abs(ploneDnDReorder.getPos(child1)-ploneDnDReorder.getPos(child2))!==1){return}
items.removeClass('even').removeClass('odd');if(child1[0].swapNode){child1[0].swapNode(child2[0])} else{t=parent[0].insertBefore(document.createTextNode(''),child1[0]);child1.insertBefore(child2);child2.insertBefore(t);$(t).remove()}
parent.children('[id]:odd').addClass('even');parent.children('[id]:even').addClass('odd')};ploneDnDReorder.doUp=function(e){var dragging=ploneDnDReorder.dragging,body=$('body');if(!dragging){return}
ploneDnDReorder.updatePositionOnServer();dragging.removeData('ploneDnDReorder.startPosition');dragging.removeData('ploneDnDReorder.subset_ids');ploneDnDReorder.rows.unbind('mousemove',ploneDnDReorder.doDrag);body.unbind('mouseup',ploneDnDReorder.doUp);body.unbind('mouseleave',ploneDnDReorder.doCancel);$(this).parents('tr').removeClass('dragindicator');return false};ploneDnDReorder.doCancel=function(e){var dragging=ploneDnDReorder.dragging,body=$('body');if(!dragging){return}
dragging.removeClass("dragging")
if(ploneDnDReorder.getPos(dragging)-dragging.data('ploneDnDReorder.startPosition')){ploneDnDReorder.locked=true;dragging.addClass("error")}
ploneDnDReorder.rows.unbind('mousemove',ploneDnDReorder.doDrag);body.unbind('mouseup',ploneDnDReorder.doCancel);body.unbind('mouseleave',ploneDnDReorder.doCancel);ploneDnDReorder.dragging=null;return false};ploneDnDReorder.updatePositionOnServer=function(){var dragging=ploneDnDReorder.dragging,delta,args,encoded;if(!dragging){return}
delta=ploneDnDReorder.getPos(dragging)-dragging.data('ploneDnDReorder.startPosition');if(delta===0){return}
args={item_id:dragging.attr('id').substr('folder-contents-item-'.length),subset_ids:dragging.data('ploneDnDReorder.subset_ids')};args['delta:int']=delta;encoded=$.param(args).replace(/%5B%5D=/g,'%3Alist=');$.ajax({type:'POST',url:'folder_moveitem',data:encoded,complete:ploneDnDReorder.complete});ploneDnDReorder.locked=true};ploneDnDReorder.complete=function(xhr,textStatus){var dragging=ploneDnDReorder.dragging;dragging.removeClass("dragging");if(textStatus==="success"||textStatus==="notmodified"){ploneDnDReorder.locked=false} else{dragging.addClass("error")}
ploneDnDReorder.dragging=null}}(jQuery));

/* - collapsiblesections.js - */
// http://icbp.nci.nih.gov/portal_javascripts/collapsiblesections.js?original=1
function activateCollapsibles(){(function($){$('dl.collapsible:not([class$=Collapsible])').find('dt.collapsibleHeader:first').click(function(){var c=$(this).parents('dl.collapsible:first'),t;if(!c){return true}t=c.hasClass('inline')?'Inline':'Block';c.toggleClass('collapsed'+t+'Collapsible').toggleClass('expanded'+t+'Collapsible')}).end().each(function(){var s=$(this).hasClass('collapsedOnLoad')?'collapsed':'expanded',t=$(this).hasClass('inline')?'Inline':'Block';$(this).removeClass('collapsedOnLoad').addClass(s+t+'Collapsible')})}(jQuery))}jQuery(function($){$(activateCollapsibles)});

/* - form_tabbing.js - */
// http://icbp.nci.nih.gov/portal_javascripts/form_tabbing.js?original=1
var ploneFormTabbing={jqtConfig:{current:'selected'}};(function($){ploneFormTabbing._buildTabs=function(container,legends){var threshold=legends.length>6;var panel_ids,tab_ids=[],tabs='';for(var i=0;i<legends.length;i++){var className,tab,legend=legends[i],lid=legend.id;tab_ids[i]='#'+lid;switch(i){case(0):className='class="formTab firstFormTab"';break;case(legends.length-1):className='class="formTab lastFormTab"';break;default:className='class="formTab"';break}
if(threshold){tab='<option '+className+' id="'+lid+'" value="'+lid+'">';tab+=$(legend).text()+'</option>'} else{tab='<li '+className+'><a id="'+lid+'" href="#'+lid+'"><span>';tab+=$(legend).text()+'</span></a></li>'}
tabs+=tab;$(legend).hide()}
tab_ids=tab_ids.join(',');panel_ids=tab_ids.replace(/#fieldsetlegend-/g,"#fieldset-");if(threshold){tabs=$('<select class="formTabs">'+tabs+'</select>');tabs.change(function(){var selected=$(this).attr('value');jq('#'+selected).click()})} else{tabs=$('<ul class="formTabs">'+tabs+'</ul>')}
return tabs};ploneFormTabbing.initializeDL=function(){var ftabs=$(ploneFormTabbing._buildTabs(this,$(this).children('dt')));var targets=$(this).children('dd');$(this).before(ftabs);targets.addClass('formPanel');ftabs.tabs(targets,ploneFormTabbing.jqtConfig)};ploneFormTabbing.initializeForm=function(){var jqForm=$(this);var fieldsets=jqForm.children('fieldset');if(!fieldsets.length){return}
var ftabs=ploneFormTabbing._buildTabs(this,fieldsets.children('legend'));$(this).prepend(ftabs);fieldsets.addClass("formPanel");$(this).find('input[name="fieldset.current"]').addClass('noUnloadProtection');$(this).find('.formPanel:has(div.field span.required)').each(function(){var id=this.id.replace(/^fieldset-/,"#fieldsetlegend-");$(id).addClass('required')});var initialIndex=0;var count=0;var found=false;$(this).find('.formPanel').each(function(){if(!found&&$(this).find('div.field.error').length!=0){initialIndex=count;found=true}
count+=1});var tabSelector='ul.formTabs';if($(ftabs).is('select.formTabs')){tabSelector='select.formTabs'}
var tabsConfig=$.extend({},ploneFormTabbing.jqtConfig,{'initialIndex':initialIndex});jqForm.children(tabSelector).tabs('form.enableFormTabbing fieldset.formPanel',tabsConfig);jqForm.submit(function(){var selected;if(ftabs.find('a.selected').length>=1){selected=ftabs.find('a.selected').attr('href').replace(/^#fieldsetlegend-/,"#fieldset-")}
else{selected=ftabs.attr('value').replace(/^fieldsetlegend-/,'#fieldset-')}
var fsInput=jqForm.find('input[name="fieldset.current"]');if(selected&&fsInput){fsInput.val(selected)}});$("#archetypes-schemata-links").addClass('hiddenStructure');$("div.formControls input[name='form.button.previous'],"+"div.formControls input[name='form.button.next']").remove()};$.fn.ploneTabInit=function(pbo){return this.each(function(){var item=$(this);item.find("form.enableFormTabbing,div.enableFormTabbing").each(ploneFormTabbing.initializeForm);item.find("dl.enableFormTabbing").each(ploneFormTabbing.initializeDL);var targetPane=item.find('.enableFormTabbing input[name="fieldset.current"]').val()||window.location.hash;if(targetPane){item.find(".enableFormTabbing .formTab a[href='"+targetPane.replace("'","").replace(/^#fieldset-/,"#fieldsetlegend-")+"']").click()}})};ploneFormTabbing.initialize=function(){$('body').ploneTabInit()}})(jQuery);jQuery(function(){ploneFormTabbing.initialize()});

/* - popupforms.js - */
// http://icbp.nci.nih.gov/portal_javascripts/popupforms.js?original=1
var common_content_filter='#content>*:not(div.configlet),dl.portalMessage.error,dl.portalMessage.info';jQuery.extend(jQuery.tools.overlay.conf,{fixed:false,speed:'fast',mask:{color:'#fff',opacity:0.4,loadSpeed:0,closeSpeed:0}});(function($){$.plonepopups=$.plonepopups||{};$.extend($.plonepopups,{noformerrorshow: function noformerrorshow(el,noform){var o=$(el),emsg=o.find('dl.portalMessage.error');if(emsg.length){o.children().replaceWith(emsg);return false} else{return noform}},redirectbasehref: function redirectbasehref(el,responseText){var mo=responseText.match(/<base href="(\S+?)"/i);if(mo.length===2){return mo[1]}
return location}})})(jQuery);jQuery(function($){if(jQuery.browser.msie&&parseInt(jQuery.browser.version,10)<7){return}
$('#portal-personaltools a[href$="/login"], #portal-personaltools a[href$="/login_form"], .discussion a[href$="/login"], .discussion a[href$="/login_form"]').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'form#login_form',noform: function(){if(location.href.search(/pwreset_finish$/)>=0){return 'redirect'} else{return 'reload'}},redirect: function(){var href=location.href;if(href.search(/pwreset_finish$/)>=0){return href.slice(0,href.length-14)+'logged_in'} else{return href}}});$('#siteaction-contact a').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'form[name="feedback_form"]',noform: function(el){return $.plonepopups.noformerrorshow(el,'close')}});$('form[name=reply]').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'form:has(input[name="discussion_reply:method"])',noform: function(el){return $.plonepopups.noformerrorshow(el,'redirect')},redirect:$.plonepopups.redirectbasehref});$('#contextSetDefaultPage, #folderChangeDefaultPage').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'form[name="default_page_form"]',noform: function(el){return $.plonepopups.noformerrorshow(el,'reload')},closeselector:'[name=form.button.Cancel]',width:'40%'});$('dl#plone-contentmenu-actions a#delete').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'#delete_confirmation',noform: function(el){return $.plonepopups.noformerrorshow(el,'redirect')},redirect:$.plonepopups.redirectbasehref,closeselector:'[name=form.button.Cancel]',width:'50%'});$('dl#plone-contentmenu-actions a#rename').prepOverlay({subtype:'ajax',filter:common_content_filter,closeselector:'[name=form.button.Cancel]',width:'40%'});$('#portal-personaltools a[href$="/@@register"]').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'form.kssattr-formname-register'});$('form[name=users_add], form[name=groups_add]').prepOverlay({subtype:'ajax',filter:common_content_filter,formselector:'form.kssattr-formname-new-user, form[name="groups"]',noform: function(el){return $.plonepopups.noformerrorshow(el,'redirect')},redirect: function(){return location.href}});$('#content-history a').prepOverlay({subtype:'ajax',filter:'h2, #content-history',urlmatch:'@@historyview',urlreplace:'@@contenthistorypopup'})});

/* - input-label.js - */
// http://icbp.nci.nih.gov/portal_javascripts/input-label.js?original=1
var ploneInputLabel={focus: function(){var t=jQuery(this);if(t.hasClass('inputLabelActive')&&t.val()===t.attr('title')){t.val('').removeClass('inputLabelActive')}
if(t.hasClass('inputLabelPassword')){ploneInputLabel._setInputType(t.removeClass('inputLabelPassword'),'password').focus().bind('blur.ploneInputLabel',ploneInputLabel.blur)}},blur: function(e){var t=jQuery(this);if(t.is(':password[value=""]')){t=ploneInputLabel._setInputType(this,'text').addClass('inputLabelPassword').bind('focus.ploneInputLabel',ploneInputLabel.focus);if(e.originalEvent&&e.originalEvent.explicitOriginalTarget){jQuery(e.originalEvent.explicitOriginalTarget).trigger('focus!')}}
if(!t.val()){t.addClass('inputLabelActive').val(t.attr('title'))}},submit: function(){jQuery('input[title].inputLabelActive').trigger('focus.ploneInputLabel')},_setInputType: function(elem,ntype){var $=jQuery,otype,nelem;otype=new RegExp('type="?'+$(elem).attr('type')+'"?');nelem=$($('<div></div>').append($(elem).clone()).html().replace(otype,'').replace(/\/?>/,'type="'+ntype+'" />'));$(elem).replaceWith(nelem);return nelem}};jQuery(function($){$('form:has(input[title].inputLabel)').submit(ploneInputLabel.submit);$('input[title].inputLabel').bind('focus.ploneInputLabel',ploneInputLabel.focus).bind('blur.ploneInputLabel',ploneInputLabel.blur).trigger('blur.ploneInputLabel')});

/* - jquery.highlightsearchterms.js - */
// http://icbp.nci.nih.gov/portal_javascripts/jquery.highlightsearchterms.js?original=1
(function($){var Highlighter,makeSearchKey,makeAddress,defaults;Highlighter=function(options){$.extend(this,options);this.terms=this.cleanTerms(this.terms.length?this.terms:this.getSearchTerms())};Highlighter.prototype={highlight: function(startnode){if(!this.terms.length||!startnode.length){return}
var self=this;$.each(this.terms, function(i,term){startnode.find('*:not(textarea)').andSelf().contents().each(function(){if(this.nodeType===3){self.highlightTermInNode(this,term)}})})},highlightTermInNode: function(node,word){var c=node.nodeValue,self=this,highlight,ci,index,next;if($(node).parent().hasClass(self.highlightClass)){return}
highlight=function(content){return $('<span class="'+self.highlightClass+'">'+content+'</span>')};ci=self.caseInsensitive;while(c&&(index=(ci?c.toLowerCase():c).indexOf(word))>-1){$(node).before(document.createTextNode(c.substr(0,index))).before(highlight(c.substr(index,word.length))).before(document.createTextNode(c.substr(index+word.length)));next=node.previousSibling;$(node).remove();node=next;c=node.nodeValue}},queryStringValue: function(uri,regexp){var match,pair;if(uri.indexOf('?')<0){return ''}
uri=uri.substr(uri.indexOf('?')+1);while(uri.indexOf('=')>=0){uri=uri.replace(/^\&*/,'');pair=uri.split('&',1)[0];uri=uri.substr(pair.length);match=pair.match(regexp);if(match){return decodeURIComponent(match[match.length-1].replace(/\+/g,' '))}}
return ''},termsFromReferrer: function(){var ref,i,se;ref=$.fn.highlightSearchTerms._test_referrer!==null?$.fn.highlightSearchTerms._test_referrer:document.referrer;if(!ref){return ''}
for(i=0;i<this.referrers.length;i+=1){se=this.referrers[i];if(ref.match(se.address)){return this.queryStringValue(ref,se.key)}}
return ''},cleanTerms: function(terms){var self=this;return $.unique($.map(terms, function(term){term=$.trim(self.caseInsensitive?term.toLowerCase():term);return(!term||self.filterTerms.test(term))?null:term}))},getSearchTerms: function(){var terms=[],uri=$.fn.highlightSearchTerms._test_location!==null?$.fn.highlightSearchTerms._test_location:location.href;if(this.useReferrer){$.merge(terms,this.termsFromReferrer().split(/\s+/))}
if(this.useLocation){$.merge(terms,this.queryStringValue(uri,this.searchKey).split(/\s+/))}
return terms}};makeSearchKey=function(key){return(typeof key==='string')?new RegExp('^'+key+'=(.*)$','i'):key};makeAddress=function(addr){return(typeof addr==='string')?new RegExp('^https?://(www\\.)?'+addr,'i'):addr};$.fn.highlightSearchTerms=function(options){options=$.extend({},defaults,options);options=$.extend(options,{searchKey:makeSearchKey(options.searchKey),referrers:$.map(options.referrers, function(se){return{address:makeAddress(se.address),key:makeSearchKey(se.key)}})});if(options.includeOwnDomain){var hostname=$.fn.highlightSearchTerms._test_location!==null?$.fn.highlightSearchTerms._test_location:location.hostname;options.referrers.push({address:makeAddress(hostname.replace(/\./g,'\\.')),key:options.searchKey})}
new Highlighter(options).highlight(this);return this};$.fn.highlightSearchTerms.referrers=[{address:'google\\.',key:'q'},{address:'search\\.yahoo\\.',key:'p'},{address:'search\\.msn\\.',key:'q'},{address:'search\\.live\\.',key:'query'},{address:'search\\.aol\\.',key:'userQuery'},{address:'ask\\.com',key:'q'},{address:'altavista\\.',key:'q'},{address:'feedster\\.',key:'q'}];defaults={terms:[],useLocation:true,searchKey:'(searchterm|SearchableText)',useReferrer:true,referrers:$.fn.highlightSearchTerms.referrers,includeOwnDomain:true,caseInsensitive:true,filterTerms:/(not|and|or)/i,highlightClass:'highlightedSearchTerm'};$.fn.highlightSearchTerms._test_location=null;$.fn.highlightSearchTerms._test_referrer=null;$.fn.highlightSearchTerms._highlighter=Highlighter}(jQuery));jQuery(function($){$('#region-content,#content').highlightSearchTerms({includeOwnDomain:$('dl.searchResults').length===0})});

/* - first_input_focus.js - */
// http://icbp.nci.nih.gov/portal_javascripts/first_input_focus.js?original=1
jQuery(function($){if($("form div.error :input:first").focus().length){return}
$("form.enableAutoFocus :input:not(.formTabs):visible:first").focus()});

/* - accessibility.js - */
// http://icbp.nci.nih.gov/portal_javascripts/accessibility.js?original=1
function setBaseFontSize(f,r){var b=jQuery('body');if(r){b.removeClass('smallText').removeClass('largeText');createCookie("fontsize",f,365)}b.addClass(f)}jQuery(function($){var f=readCookie("fontsize");if(f){setBaseFontSize(f,0)}});

/* - styleswitcher.js - */
// http://icbp.nci.nih.gov/portal_javascripts/styleswitcher.js?original=1
function setActiveStyleSheet(title,reset){jQuery('link[rel*=style][title]').attr('disabled',true).find('[title='+title+']').attr('disabled',false);if(reset){createCookie("wstyle",title,365)}}
jQuery(function(){var style=readCookie("wstyle");if(style){setActiveStyleSheet(style,0)}});

/* - toc.js - */
// http://icbp.nci.nih.gov/portal_javascripts/toc.js?original=1
jQuery(function($){var dest,content,location,stack,oltoc,numdigits,wlh,target,targetOffset;dest=$('dl.toc dd.portletItem');content=$('#region-content,#content');if(!content||!dest.length){return}
dest.empty();location=window.location.href;if(window.location.hash){location=location.substring(0,location.lastIndexOf(window.location.hash))}
stack=[];$(content).find('*').not('.comment > h3').filter(function(){return (/^h[1234]$/).test(this.tagName.toLowerCase())}).not('.documentFirstHeading').each(function(i){var level,ol,li;level=this.nodeName.charAt(1);while(stack.length<level){ol=$('<ol>');if(stack.length){li=$(stack[stack.length-1]).children('li:last');if(!li.length){li=$('<li>').appendTo($(stack[stack.length-1]))}
li.append(ol)}
stack.push(ol)}
while(stack.length>level){stack.pop()}
$(this).before($('<a name="section-'+i+'" />'));$('<li>').append($('<a />').attr('href',location+'#section-'+i).text($(this).text())).appendTo($(stack[stack.length-1]))});if(stack.length){var oltoc=$(stack[0]);var i=1;while(oltoc.children('li').length==1){oltoc=$(stack[i]);i+=1}
if(i<=stack.length){$('dl.toc').show()}
numdigits=oltoc.children().length.toString().length;oltoc.addClass("TOC"+numdigits+"Digit");dest.append(oltoc);wlh=window.location.hash;if(wlh){target=$(wlh);target=target.length&&target||$('[name='+wlh.slice(1)+']');targetOffset=target.offset();if(targetOffset){$('html,body').animate({scrollTop:targetOffset.top},0)}}}});

/* - collapsibleformfields.js - */
// http://icbp.nci.nih.gov/portal_javascripts/collapsibleformfields.js?original=1
(function($){$.fn.do_search_collapse=function(){
function check_used(element){var e=$(element);if(e.find('input[id$=_toggle]:checkbox').length>0){if(e.find('input[id$=_toggle]:checkbox:checked').length===0){return true}}
if(e.find(':text[value]').length>0){return true}
if(e.find('select .default_option').length>0){if(e.find('select .default_option:selected').length===0){return true}}
return false}
return this.each( function(){var indicator=$(this).find('.collapser:first'),collapse=$(this).find('.collapse:first');indicator.click(function(){var container=$(this).parent(),target=container.find('.collapse:first');target.slideToggle('normal');$(this).toggleClass('expanded');$(this).toggleClass('collapsed')});if(check_used(this)){indicator.addClass('expanded')} else{collapse.hide();indicator.addClass('collapsed')}})};jQuery(function($){$('.field.collapsible').do_search_collapse()})}(jQuery));

/* - ++resource++plone.app.discussion.javascripts/comments.js - */
// http://icbp.nci.nih.gov/portal_javascripts/++resource++plone.app.discussion.javascripts/comments.js?original=1
(function($){$.createReplyForm=function(comment_div){var comment_id=comment_div.attr("id");var reply_button=comment_div.find(".reply-to-comment-button");var reply_div=$("#commenting").clone(true);reply_div.find("#formfield-form-widgets-captcha").find("script").remove();reply_div.appendTo(comment_div).css("display","none");reply_div.removeAttr("id");$(reply_button).css("display","none");var reply_form=reply_div.find("form");reply_form.find("input[name='form.widgets.in_reply_to']").val(comment_id);var cancel_reply_button=reply_div.find(".cancelreplytocomment");cancel_reply_button.attr("id",comment_id);reply_form.find("input[name='form.buttons.cancel']").css("display","inline");reply_div.slideDown("slow");cancel_reply_button.css("display","inline")};$.clearForm=function(form_div){form_div.find(".error").removeClass("error");form_div.find(".fieldErrorBox").remove();form_div.find("input[type='text']").attr("value","");form_div.find("textarea").attr("value","")};$(window).load(function(){var post_comment_div=$("#commenting");var in_reply_to_field=post_comment_div.find("input[name='form.widgets.in_reply_to']");if(in_reply_to_field.val()!==""){var current_reply_id="#"+in_reply_to_field.val();var current_reply_to_div=$(".discussion").find(current_reply_id);$.createReplyForm(current_reply_to_div);$.clearForm(post_comment_div)}
$(".reply-to-comment-button").bind("click", function(e){var comment_div=$(this).parents().filter(".comment");$.createReplyForm(comment_div);$.clearForm(comment_div)});$("#commenting #form-buttons-cancel").bind("click", function(e){e.preventDefault();var reply_to_comment_button=$(this).
parents().
filter(".comment").
find(".reply-to-comment-button");$.reply_to_comment_form=$(this).parents().filter(".reply");$.reply_to_comment_form.slideUp("slow", function(){$(this).remove()});reply_to_comment_button.css("display","inline")});$("input[name='form.button.PublishComment']").live('click', function(){var trigger=this;var form=$(this).parents("form");var data=$(form).serialize();var form_url=$(form).attr("action");$.ajax({type:"GET",url:form_url,data:"workflow_action=publish",context:trigger,success: function(msg){form.find("input[name='form.button.PublishComment']").remove();form.parents(".state-pending").toggleClass('state-pending').toggleClass('state-published')},error: function(msg){return true}});return false});$("input[name='form.button.DeleteComment']").live('click', function(){var trigger=this;var form=$(this).parents("form");var data=$(form).serialize();var form_url=$(form).attr("action");$.ajax({type:'POST',url:form_url,context:$(trigger).parents(".comment"),success: function(data){if($(".discussion .replyTreeLevel0").length===1){$(".discussion").fadeOut('fast', function(){$(".discussion").remove()})}
else{var comment=$(this);var clss=comment.attr('class');var treelevel=parseInt(clss[clss.indexOf('replyTreeLevel')+'replyTreeLevel'.length],10);var selector=".replyTreeLevel"+treelevel;for(var i=0;i<treelevel;i++){selector+=", .replyTreeLevel"+i}
comment.nextUntil(selector).each(function(){$(this).fadeOut('fast', function(){$(this).remove()})});$(this).fadeOut('fast', function(){$(this).remove()})}},error: function(req,error){return true}});return false});$(".reply").find("input[name='form.buttons.reply']").css("display","none");$(".reply").find("input[name='form.buttons.cancel']").css("display","none");$(".reply-to-comment-button").css("display","inline")})}(jQuery));
