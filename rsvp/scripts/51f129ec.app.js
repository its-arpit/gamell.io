!function(a,b){"use strict";var c=function(){var b=a.createElement("dummy").style,c="Webkit Moz O ms Khtml".split(" "),d={};return function(a){if("undefined"==typeof d[a]){var e=a.charAt(0).toUpperCase()+a.substr(1),f=(a+" "+c.join(e+" ")+e).split(" ");d[a]=null;for(var g in f)if(void 0!==b[f[g]]){d[a]=f[g];break}}return d[a]}}(),d=function(a){return[].slice.call(a)},e=function(a,b){var d,e;for(d in b)b.hasOwnProperty(d)&&(e=c(d),null!==e&&(a.style[e]=b[d]));return a},f=function(a,b){return isNaN(a)?b||0:Number(a)},g=function(b){return a.getElementById(b)},h=function(b,c){return c=c||a,c.querySelector(b)},i=function(b,c){return c=c||a,d(c.querySelectorAll(b))},j=function(b,c,d){var e=a.createEvent("CustomEvent");e.initCustomEvent(c,!0,!0,d),b.dispatchEvent(e)},k=function(a){return" translate3d("+a.x+"px,"+a.y+"px,"+a.z+"px) "},l=function(a,b){var c=" rotateX("+a.x+"deg) ",d=" rotateY("+a.y+"deg) ",e=" rotateZ("+a.z+"deg) ";return b?e+d+c:c+d+e},m=function(a){return" scale("+a+") "},n=function(a){return" perspective("+a+"px) "},o=function(){return g(b.location.hash.replace(/^#\/?/,""))},p=function(a){var c=b.innerHeight/a.height,d=b.innerWidth/a.width,e=c>d?d:c;return a.maxScale&&e>a.maxScale&&(e=a.maxScale),a.minScale&&e<a.minScale&&(e=a.minScale),e};navigator.sayswho=function(){var a,b=navigator.userAgent,c=b.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i)||[];return/trident/i.test(c[1])?(a=/\brv[ :]+(\d+(\.\d+)?)/g.exec(b)||[],"IE "+(a[1]||"")):(c=c[2]?[c[1],c[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(a=b.match(/version\/([\.\d]+)/i))&&(c[2]=a[1]),c.join(" "))}();var q=function(){var a=navigator.sayswho,b=a.split(" ");return"IE"==b[0]},r=a.body,s=navigator.userAgent.toLowerCase(),t=null!==c("perspective")&&r.classList&&r.dataset&&!q(),u=/android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(s),v=!u&&t;v?(r.classList.remove("impress-not-supported"),r.classList.add("impress-supported")):(r.className+=" impress-not-supported ",r.className+=u?"mobile":"browser-not-supported");var w={},x={width:1200,height:768,maxScale:1,minScale:0,perspective:1e3,transitionDuration:1e3},y=function(){return!1},z=b.impress=function(c){if(!v)return{init:y,"goto":y,prev:y,next:y};if(c=c||"impress",w["impress-root-"+c])return w["impress-root-"+c];var q={},s=null,t=null,u=null,z=null,A=null,B=g(c),C=a.createElement("div"),D=!1,E=null,F=function(a){E!==a&&(j(a,"impress:stepenter"),E=a)},G=function(a){E===a&&(j(a,"impress:stepleave"),E=null)},H=function(a,b){var c=a.dataset,d={translate:{x:f(c.x),y:f(c.y),z:f(c.z)},rotate:{x:f(c.rotateX),y:f(c.rotateY),z:f(c.rotateZ||c.rotate)},scale:f(c.scale,1),el:a};a.id||(a.id="step-"+(b+1)),q["impress-"+a.id]=d,e(a,{position:"absolute",transform:"translate(-50%,-50%)"+k(d.translate)+l(d.rotate)+m(d.scale),transformStyle:"preserve-3d"})},I=function(){if(!D){var b=h("meta[name='viewport']")||a.createElement("meta");b.content="width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no",b.parentNode!==a.head&&(b.name="viewport",a.head.appendChild(b));var g=B.dataset;z={width:f(g.width,x.width),height:f(g.height,x.height),maxScale:f(g.maxScale,x.maxScale),minScale:f(g.minScale,x.minScale),perspective:f(g.perspective,x.perspective),transitionDuration:f(g.transitionDuration,x.transitionDuration)},A=p(z),d(B.childNodes).forEach(function(a){C.appendChild(a)}),B.appendChild(C),a.documentElement.style.height="100%",e(r,{height:"100%",overflow:"hidden"});var k={position:"absolute",transformOrigin:"top left",transition:"all 0s ease-in-out",transformStyle:"preserve-3d"};e(B,k),e(B,{top:"50%",left:"50%",transform:n(z.perspective/A)+m(A)}),e(C,k),r.classList.remove("impress-disabled"),r.classList.add("impress-enabled"),u=i(".step",B),u.forEach(H),t={translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},scale:1},D=!0,j(B,"impress:init",{api:w["impress-root-"+c]})}},J=function(a){return"number"==typeof a?a=0>a?u[u.length+a]:u[a]:"string"==typeof a&&(a=g(a)),a&&a.id&&q["impress-"+a.id]?a:null},K=null,L=function(a,c){if(!D||!(a=J(a)))return!1;b.scrollTo(0,0);var d=q["impress-"+a.id];s&&(s.classList.remove("active"),r.classList.remove("impress-on-"+s.id)),a.classList.add("active"),r.classList.add("impress-on-"+a.id);var g={rotate:{x:-d.rotate.x,y:-d.rotate.y,z:-d.rotate.z},translate:{x:-d.translate.x,y:-d.translate.y,z:-d.translate.z},scale:1/d.scale},h=g.scale>=t.scale;c=f(c,z.transitionDuration);var i=c/2;a===s&&(A=p(z));var j=g.scale*A;return s&&s!==a&&G(s),e(B,{transform:n(z.perspective/j)+m(j),transitionDuration:c+"ms",transitionDelay:(h?i:0)+"ms"}),e(C,{transform:l(g.rotate,!0)+k(g.translate),transitionDuration:c+"ms",transitionDelay:(h?0:i)+"ms"}),(t.scale===g.scale||t.rotate.x===g.rotate.x&&t.rotate.y===g.rotate.y&&t.rotate.z===g.rotate.z&&t.translate.x===g.translate.x&&t.translate.y===g.translate.y&&t.translate.z===g.translate.z)&&(i=0),t=g,s=a,b.clearTimeout(K),K=b.setTimeout(function(){F(s)},c+i),a},M=function(){var a=u.indexOf(s)-1;return a=a>=0?u[a]:u[u.length-1],L(a)},N=function(){var a=u.indexOf(s)+1;return a=a<u.length?u[a]:u[0],L(a)};return B.addEventListener("impress:init",function(){u.forEach(function(a){a.classList.add("future")}),B.addEventListener("impress:stepenter",function(a){a.target.classList.remove("past"),a.target.classList.remove("future"),a.target.classList.add("present")},!1),B.addEventListener("impress:stepleave",function(a){a.target.classList.remove("present"),a.target.classList.add("past")},!1)},!1),B.addEventListener("impress:init",function(){var a="";B.addEventListener("impress:stepenter",function(c){b.location.hash=a="#/"+c.target.id},!1),b.addEventListener("hashchange",function(){b.location.hash!==a&&L(o())},!1),L(o()||u[0],0)},!1),r.classList.add("impress-disabled"),w["impress-root-"+c]={init:I,"goto":L,next:N,prev:M}};z.supported=v}(document,window),function(a,b){"use strict";var c=function(a,b){var c=null;return function(){var d=this,e=arguments;clearTimeout(c),c=setTimeout(function(){a.apply(d,e)},b)}};a.addEventListener("impress:init",function(d){var e=d.detail.api;a.addEventListener("keydown",function(a){(9===a.keyCode||a.keyCode>=32&&a.keyCode<=34||a.keyCode>=37&&a.keyCode<=40)&&a.preventDefault()},!1),a.addEventListener("keyup",function(a){if(9===a.keyCode||a.keyCode>=32&&a.keyCode<=34||a.keyCode>=37&&a.keyCode<=40){switch(a.keyCode){case 33:case 37:case 38:e.prev();break;case 9:case 32:case 34:case 39:case 40:e.next()}a.preventDefault()}},!1),a.addEventListener("click",function(b){for(var c=b.target;"A"!==c.tagName&&c!==a.documentElement;)c=c.parentNode;if("A"===c.tagName){var d=c.getAttribute("href");d&&"#"===d[0]&&(c=a.getElementById(d.slice(1)))}e["goto"](c)&&(b.stopImmediatePropagation(),b.preventDefault())},!1),a.addEventListener("click",function(b){for(var c=b.target;(!c.classList.contains("step")||c.classList.contains("active"))&&c!==a.documentElement;)c=c.parentNode;e["goto"](c)&&b.preventDefault()},!1),b.addEventListener("resize",c(function(){e["goto"](a.querySelector(".active"),500)},250),!1)},!1)}(document,window),!function(a,b){"undefined"!=typeof module?module.exports=b():"function"==typeof define&&"object"==typeof define.amd?define(b):this[a]=b()}("Router",function(){function a(a,b){a.addEventListener?a.addEventListener("hashchange",b,!1):a.attachEvent&&a.attachEvent("hashchange",b)}function b(a,b){a.removeEventListener?a.removeEventListener("hashchange",b,!1):a.detachEvent&&a.detachEvent("hashchange",b)}function c(){for(var a=1;a<arguments.length;a++)for(var b in arguments[a])arguments[a].hasOwnProperty(b)&&(arguments[0][b]=arguments[a][b]);return arguments[0]}Function.prototype.bind||(Function.prototype.bind=function(a){var b=this,c=Array.prototype.slice.call(arguments);return a=c.shift(),function(){return b.apply(a,c.concat(Array.prototype.slice.call(arguments)))}});var d="([^/\\?]+)",e=/:([\w\d]+)/g,f=/\/\*(?!\*)/,g="/([^/\\?]+)",h=/\*{2}/,i="(.*?)\\??",j=/\/*$/,k=function(a){this.href=a,this.params,this.query,this.splat,this.hasNext=!1};k.prototype.get=function(a,b){return this.params&&void 0!==this.params[a]?this.params[a]:this.query&&void 0!==this.query[a]?this.query[a]:void 0!==b?b:void 0};var l=function(b){this._options=c({ignorecase:!0},b),this._routes=[],this._befores=[],this._errors={_:function(a,b,c){console&&console.warn&&console.warn("Router.js : "+c)},_404:function(a,b){console&&console.warn&&console.warn("404! Unmatched route for url "+b)},_500:function(a,b){if(!console||!console.error)throw new Error("500");console.error("500! Internal error route for url "+b)}},this._paused=!1,this._hasChangeHandler=this._onHashChange.bind(this),a(window,this._hasChangeHandler)};return l.prototype._onHashChange=function(){return this._paused||this._route(this._extractFragment(window.location.href)),!0},l.prototype._extractFragment=function(a){var b=a.indexOf("#");return b>=0?a.substring(b):"#/"},l.prototype._throwsRouteError=function(a,b,c){return this._errors["_"+a]instanceof Function?this._errors["_"+a](b,c,a):this._errors._(b,c,a),!1},l.prototype._buildRequestObject=function(a,b,c,d){if(!a)throw new Error("Unable to compile request object");var e=new k(a);b&&(e.params=b);var f=a.split("?");if(2==f.length){var g=null,h=f[1].split("&");e.query={};for(var i=0,j=h.length;j>i;i++)g=h[i].split("="),e.query[decodeURI(g[0])]=decodeURI(g[1].replace(/\+/g,"%20"));e.query}return c&&c.length>0&&(e.splats=c),d===!0&&(e.hasNext=!0),e},l.prototype._followRoute=function(a,b,c){var d,e=c.splice(0,1),f=this._routes[e],g=b.match(f.path),h={},i=[];if(!f)return this._throwsRouteError(500,new Error("Internal error"),a);for(var j=0,k=f.paramNames.length;k>j;j++)h[f.paramNames[j]]=g[j+1];if(j+=1,g&&j<g.length)for(var l=j;l<g.length;l++)i.push(g[l]);var m=0!==c.length,n=function(b,c,d,e){return function(e,f,g){return e||f?f?this._throwsRouteError(g||500,f,a):void this._followRoute(b,c,d):this._throwsRouteError(500,'Cannot call "next" without an error if request.hasNext is false',a)}.bind(this,e)}.bind(this)(a,b,c,m);d=this._buildRequestObject(a,h,i,m),f.routeAction(d,n)},l.prototype._routeBefores=function(a,b,c,d,e){var f;if(a.length>0){var g=a.splice(0,1);g=g[0],f=function(b,f){return b?this._throwsRouteError(f||500,b,c):void this._routeBefores(a,g,c,d,e)}.bind(this)}else f=function(a,b){return a?this._throwsRouteError(b||500,a,c):void this._followRoute(c,d,e)}.bind(this);b(this._buildRequestObject(c,null,null,!0),f)},l.prototype._route=function(a){var b,c="",d=this._befores.slice(),e=[],f=a;if(0===f.length)return!0;f=f.replace(j,""),b=f.split("?")[0].replace(j,"");for(var g in this._routes)this._routes.hasOwnProperty(g)&&(c=this._routes[g],c.path.test(b)&&e.push(g));if(!(e.length>0))return this._throwsRouteError(404,null,a);if(d.length>0){var h=d.splice(0,1);h=h[0],this._routeBefores(d,h,a,f,e)}else this._followRoute(a,f,e)},l.prototype.pause=function(){return this._paused=!0,this},l.prototype.play=function(a){return a="undefined"==typeof a?!1:a,this._paused=!1,a&&this._route(this._extractFragment(window.location.href)),this},l.prototype.setLocation=function(a){return window.history.pushState(null,"",a),this},l.prototype.redirect=function(a){return this.setLocation(a),this._paused||this._route(this._extractFragment(a)),this},l.prototype.addRoute=l.prototype.add=l.prototype.route=l.prototype.get=function(a,b){var c,k=this._options.ignorecase?"i":"",l=[];if("string"==typeof a){for(a=a.replace(j,"");null!==(c=e.exec(a));)l.push(c[1]);a=new RegExp(a.replace(e,d).replace(f,g).replace(h,i)+"(?:\\?.+)?$",k)}return this._routes.push({path:a,paramNames:l,routeAction:b}),this},l.prototype.before=function(a){return this._befores.push(a),this},l.prototype.errors=function(a,b){if(isNaN(a))throw new Error("Invalid code for routes error handling");if(!(b instanceof Function))throw new Error("Invalid callback for routes error handling");return a="_"+a,this._errors[a]=b,this},l.prototype.run=function(a){return a||(a=this._extractFragment(window.location.href)),a=0===a.indexOf("#")?a:"#"+a,this.redirect(a),this},l.prototype.destroy=function(){return b(window,this._hasChangeHandler),this},l});var gamell=function(a){var b="nav.top-bar h2 a",c=function(c){a(b).removeClass("active"),a(b).filter("."+c).addClass("active")},d=function(){(new Router).addRoute("#/:pagename",function(a){c(a.params.pagename)}).run()},e=function(){d(),impress().init()};e()}(jQuery,window);