(function(a){"function"==typeof define&&define.amd?define(a):a()})(function(){'use strict';var aa=Math.floor;function a(a){return a.replace(/(([\d]+[,]*)+)/g,function(a){return Beautify(parseInt(a.replace(/,/g,""),10))})}function b(b,c,d){var e;if("Birthday Cake Loreol"===b){var f=aa((+Date.now()-+new Date(2013,7,8))/31536000000);e=new ca.CookieUpgrade("Birthday Cake Loreo","",2e+29,[0,0,"https://raw.githubusercontent.com/MasterOfBob777/LotsOfLoreos/master/dist/LotsOfLoreosIcons.png"],f,{require:"Box of brand biscuts (Family Size)"},10031),e.baseDesc="Cookie production multiplier <b>+1%</b> for every year Cookie Clicker has existed (currently : <b>+"+Beautify(f)+"%</b>).<q>Thank you for playing Cookie Clicker!<br>-Orteil (and Bob thanks you too!)</q>",e.desc=a(e.baseDesc)}else e=new ca.CookieUpgrade(b,c,4999999999999995,[d[0],d[1],"https://raw.githubusercontent.com/MasterOfBob777/LotsOfLoreos/master/dist/LotsOfLoreosIcons.png"],2,{require:"Box of brand biscuts (Family Size)"},10031);return e}var ba="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis,ca=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a){(function(b,c){a.exports=c()})(ba,function(){function ba(a){return a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}function ca(b,e,f,h,i){for(var j in void 0===i&&(i={}),i)if(!/[a-zA-Z_$][0-9a-zA-Z_$]*/.test(j))throw new Error("Invalid context variable name!");var n=b.toString(),o=null===e,d=/(?:)/;null!==e&&(d="string"==typeof e?new RegExp(ba(e),"g"):e,!d.test(n)&&console.warn("Nothing to inject."));var q=/(\)[^{]*{)/,p=/(}?)$/;switch(h){case"before":n=o?n.replace(q,"$1"+f):n.replace(d,""+f+e);break;case"replace":n=o?""+f:n.replace(d,""+f);break;case"after":n=o?n.replace(p,f+"$1"):n.replace(d,""+e+f);break;default:throw new Error("where Parameter must be \"before\", \"replace\" or \"after\"");}var m="";for(var j in i)m+="var "+j+" = globalThis.tempCtx."+j+"\n";globalThis.tempCtx=i;var s=new Function(m+"globalThis.tempCtx = null\nreturn ("+n+")")();return s.prototype=b.prototype,s}function da(a,b){for(var c in b)a[c]=b[c]}function ea(a){return a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()}function fa(a,b){return a.hasOwnProperty(b)}function o(){Ca.save=D={mods:{},foreign:K,saveVer:1}}function ga(a){return D.foreign.buildings[a.name]||R}function r(b){var d=b.amount,e=b.bought,f=b.free,g=b.totalCookies,h=b.level,i=b.muted,j=b.minigameSave,a=b.name;D.foreign.buildings[a]={amount:d,bought:e,free:f,totalCookies:g,level:h,muted:i,minigameSave:j}}function i(a){return D.foreign.upgrades[a.name]||H}function a(a){D.foreign.upgrades[a.name]={unlocked:!!a.unlocked,bought:!!a.bought}}function c(a){return D.foreign.achievements[a.name]||S}function d(a){D.foreign.achievements[a.name]={won:!!a.won}}function n(a){switch(o(),a.saveVer){case 0:D.foreign.buildings=a.foreign.buildings;break;default:throw new Error("Invalid save version "+D.saveVer+" (current version is "+1+")");}}function m(){for(var b,f=0,g=Ca.customBuildings;f<g.length;f++)b=g[f],da(b,ga(b));for(var h,j=0,k=Ca.customUpgrades;j<k.length;j++)h=k[j],da(h,i(h));for(var a,n=0,o=Ca.customAchievements;n<o.length;n++)a=o[n],da(a,c(a))}function e(){for(var b,f=0,g=Ca.customBuildings;f<g.length;f++)b=g[f],r(b);for(var h,j=0,k=Ca.customUpgrades;j<k.length;j++)h=k[j],a(h);for(var m,n=0,p=Ca.customAchievements;n<p.length;n++)m=p[n],d(m)}function g(b){return"object"==typeof b&&null!==b&&!!(fa(b,"saveVer")&&"number"==typeof b.saveVer)&&!(1<b.saveVer)&&!!(0!==b.saveVer||fa(b,"exists"))&&!!fa(b,"mods")&&"{}"===JSON.stringify(b.mods)&&!!fa(b,"foreign")&&!!function(d){if("object"!=typeof d)return!1;if(null===d)return!1;if(!fa(d,"buildings"))return!1;if("object"!=typeof d.buildings)return!1;for(var e in d.buildings){var f=d.buildings[e];if("object"!=typeof f)return!1;for(var g in R)if(typeof R[g]!=typeof f[g])return!1}if(1<=b.saveVer){if(!fa(d,"upgrades"))return!1;if("object"!=typeof d.upgrades)return!1;for(var e in d.upgrades){var h=d.upgrades[e];if("object"!=typeof h)return!1;for(var g in H)if(typeof H[g]!=typeof h[g])return!1}if(!fa(d,"achievements"))return!1;if("object"!=typeof d.achievements)return!1;for(var e in d.achievements){var a=d.achievements[e];if("object"!=typeof a)return!1;for(var g in S)if(typeof S[g]!=typeof a[g])return!1}}return!0}(b.foreign)}function b(a){var b;try{b=JSON.parse(a)}catch(c){""!==a&&console.warn("CPPKIES: Found invalid save, creating new one..."),o(),b=D}g(b)?1===b.saveVer?Ca.save=D=b:(console.warn("CPPKIES: Found old save, migrating to a new one..."),n(b)):(console.warn("CPPKIES: Found invalid save, creating new one..."),o()),m()}function h(){return e(),JSON.stringify(D)}function f(a,b){function c(){this.constructor=a}T(a,b),a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}function k(b,d,c,f){return new(c||(c=Promise))(function(g,e){function h(b){try{a(f.next(b))}catch(a){e(a)}}function i(b){try{a(f["throw"](b))}catch(a){e(a)}}function a(a){a.done?g(a.value):new c(function(b){b(a.value)}).then(h,i)}a((f=f.apply(b,d||[])).next())})}function C(b,e){function f(a){return function(b){return g([a,b])}}function g(a){if(h)throw new TypeError("Generator is already executing.");for(;m;)try{if(h=1,j&&(i=2&a[0]?j["return"]:a[0]?j["throw"]||((i=j["return"])&&i.call(j),0):j.next)&&!(i=i.call(j,a[1])).done)return i;switch((j=0,i)&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return m.label++,{value:a[1],done:!1};case 5:m.label++,j=a[1],a=[0];continue;case 7:a=m.ops.pop(),m.trys.pop();continue;default:if((i=m.trys,!(i=0<i.length&&i[i.length-1]))&&(6===a[0]||2===a[0])){m=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){m.label=a[1];break}if(6===a[0]&&m.label<i[1]){m.label=i[1],i=a;break}if(i&&m.label<i[2]){m.label=i[2],m.ops.push(a);break}i[2]&&m.ops.pop(),m.trys.pop();continue;}a=e.call(b,m)}catch(b){a=[6,b],j=0}finally{h=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}var h,j,i,k,m={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return k={next:f(0),throw:f(1),return:f(2)},"function"==typeof Symbol&&(k[Symbol.iterator]=function(){return this}),k}function p(){for(var b=0,f=0,g=arguments.length;f<g;f++)b+=arguments[f].length;for(var h=Array(b),i=0,f=0;f<g;f++)for(var j=arguments[f],c=0,k=j.length;c<k;c++,i++)h[i]=j[c];return h}function y(a,b){U[a]=b}function j(a){if(V.includes(a))throw new Error("Recursive alias");return(V.push(a),a in U)?j(U[a]):(V=[],a)}function O(a){return new Promise(function(b){var c=new Image;c.addEventListener("load",function(){b(c)}),c.crossOrigin="Anonymous",c.src=a})}function L(a){return new Promise(function(b){a.canvas.toBlob(function(a){b(URL.createObjectURL(a))})})}function u(b,f,e,c,d,g){return new Promise(function(h){e[0]instanceof Array||(e=[e]),e=e;var i={};for(var a in e)for(var j in e[a])if(e[a][j]){if(e[a][j]=e[a][j].toString().toLowerCase(),!(e[a][j]in f))throw new Error("Invalid icon name");i[e[a][j]]=[parseInt(j),parseInt(a)]}var k=document.createElement("canvas").getContext("2d"),m=new Image;m.addEventListener("load",function(){for(var a in k.canvas.width=d[0],k.canvas.height=d[1],i)k.drawImage(m,i[a][0]*c[0],i[a][1]*c[1],c[0],c[1],f[a][0]*c[0],f[a][1]*c[1],c[0],c[1]);var b,e=function(){L(k).then(h)};g&&(b=g(k)),b instanceof Promise?b.then(e):e()}),m.crossOrigin="Anonymous",m.src=b})}function v(a){return a=p(a),(void 0===a[2]||null===a[2])&&(a[2]=Ca.iconLink),a[2]=j(a[2]),a}function w(a){var b=new q,c=[new F("tooltip",function(){a.tooltip=ca(ca(a.tooltip,"return","let tempRet = ","replace"),null,"\n//Cppkies injection\n\t\t\t\treturn Cppkies.buildingHooks[this.name].emit(\"tooltip\", tempRet)","after")}),new F("buy",function(){a.buy=ca(a.buy,null,"\n//Cppkies injection\n\t\t\t\tif(success) {\n\t\t\t\t\tCppkies.buildingHooks[this.name].emit(\"buy\")\n\t\t\t\t}","after")})];c.forEach(function(a){var b;null===(b=a.func)||void 0===b?void 0:b.call(a)}),Ca.hooks.on("buildingCps",function(c){return{building:c.building,cps:Game.Objects[c.building]===a?b.emit("cps",c.cps):c.cps}}),Z[a.name]=b}function s(){for(var a,b=0,c=Game.ObjectsById;b<c.length;b++)a=c[b],Z[a.name]||w(a)}function G(a){return"fortune"===a.tier}function I(a){for(var b,c=1,d=1;d<=a;d++)c+=null!==(b=qa[d])&&void 0!==b?b:qa["default"];return 9*E(10,c)}function t(){Ca.hooks.on("getIcon",function(a){var b=a.icon,c=a.type,d=a.tier;return Ca.customTiers.forEach(function(a){a.keyName===d.toString()&&a.iconLink&&(b[2]=a.iconLink)}),{icon:b,type:c,tier:d}}),Ca.hooks.on("getIcon",function(a){var b=a.icon,c=a.type,d=a.tier;return Ca.customBuildings.forEach(function(a){a.name===c&&a.iconLink&&(b[2]=a.iconLink)}),{icon:b,tier:d,type:c}}),Ca.hooks.on("getIcon",function(a){var b=a.icon,c=a.type,d=a.tier;return fa(Game.Tiers[d.toString()],"iconLink")||(b[2]=""),{icon:b,tier:d,type:c}})}var A,P=Math.abs,B=aa,M=Math.min,E=Math.pow,x=Math.max,q=function(){function a(){this._events={}}return a.prototype.on=function(a,b){this._events[a]?this._events[a].push(b):this._events[a]=[b]},a.prototype.once=function(a,b){var c=this;this.on(a,function(d){return c.off(a,b),b(d)})},a.prototype.off=function(a,b){this._events[a].splice(this._events[a].indexOf(b),1)},a.prototype.emit=function(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];var d=b[0];this._events[a]||(this._events[a]=[]);for(var e,f=0,g=this._events[a];f<g.length;f++)e=g[f],d=e(d);return d},a.prototype.constEmit=function(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];this._events[a]||(this._events[a]=[]);for(var d,e=0,f=this._events[a];e<f.length;e++)d=f[e],d(b[0])},a}(),F=function(){return function(a,b){this.value=a,this.func=b}}(),R={amount:0,bought:0,free:0,totalCookies:0,level:0,muted:0,minigameSave:""},H={bought:!1,unlocked:!1},S={won:!1},K={buildings:{},upgrades:{},achievements:{}},D={mods:{},foreign:K,saveVer:1},T=function(a,b){return T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},T(a,b)},U={},V=[],X={},z={"3d":[0,21],milestone1:[0,22],milestone2:[0,23],milestone3:[0,24],krumblor:[0,25],level1:[0,26],level2:[0,27]},J={},Q={research:[9,0],cookie:[10,0],mouse:[11,0],multicursor:[12,0],kitten:[18,0]},Z={},_=[],ha=function(q){function a(e,i,n,o,r,a,c,d,s,p){var m,t,u=this;0!==o[1]&&console.warn("All icon sheets must follow an order, see https://cppkies.js.org/#/CommonProblems#IconOrder?id=relink-column"),0!==r[0]&&console.warn("All big icon sheets must follow an order, see https://cppkies.js.org/#/CommonProblems#IconOrder?id=big-icons"),u=q.call(this,e,i,n,r[1],o[0],a,0,c,d)||this,_.push(u),Z[e]||w(u);var x=function(a){if(0>=parseInt(a))return"continue";var b=Game.ObjectsById[a];if(b.canvas=l("rowCanvas"+a),!b.canvas)return"continue";if(b.ctx=b.canvas.getContext("2d"),b.canvas.addEventListener("mouseover",function(){b.mouseOn=!0}),b.canvas.addEventListener("mouseout",function(){b.mouseOn=!1}),b.canvas.addEventListener("mousemove",function(a){var c=b.canvas.getBoundingClientRect();b.mousePos[0]=a.pageX-c.left,b.mousePos[1]=a.pageY-c.top}),b.minigame&&b.minigameLoaded){var c=b.minigame.save();b.minigame.launch(),b.minigame.load(c)}};for(var h in Game.ObjectsById)x(h);u.buildingLink=null!==(m=r[2])&&void 0!==m?m:Ca.buildingLink,u.iconLink=j(null!==(t=o[2])&&void 0!==t?t:Ca.iconLink),s&&(Game.foolObjects[e]=s),p&&(Game.goldenCookieBuildingBuffs[e]=p),u.iconLink&&Z[u.name].on("tooltip",function(a){return u.locked?a:a.replace("background-position","background-image:url("+u.iconLink+");background-position")}),Game.BuildStore(),u.buildingLink&&Ca.hooks.on("buildStore",function(){l("productIcon"+u.id).style.backgroundImage="url("+u.buildingLink+")",l("productIconOff"+u.id).style.backgroundImage="url("+u.buildingLink+")"}),Game.BuildStore(),u.canvas=l("rowCanvas"+u.id),u.ctx=u.canvas.getContext("2d"),u.pics=[];var y=document.createElement("div");y.className="tinyProductIcon",y.id="mutedProduct"+u.id,y.style.display="none",u.buildingLink&&(y.style.backgroundImage="url("+u.buildingLink+")"),y.style.backgroundPositionX="-"+o[0]+"px",y.style.backgroundPositionY="-"+o[1]+"px",y.addEventListener("click",function(){u.mute(0),window.PlaySound(u.muted?"snd/clickOff.mp3":"snd/clickOn.mp3")}),window.AddEvent(u.canvas,"mouseover",function(){u.mouseOn=!0}),window.AddEvent(u.canvas,"mouseout",function(){u.mouseOn=!1}),u.canvas.addEventListener("mousemove",function(a){var b=u.canvas.getBoundingClientRect();u.mousePos[0]=a.pageX-b.left,u.mousePos[1]=a.pageY-b.top}),l("buildingsMute").appendChild(y);var v=ga(u);for(var h in v)u[h]=v[h];return Game.recalculateGains=1,u}return f(a,q),a}(Game.Object),ia=[],ja=function(b){function a(c,e,f,g,h){void 0===h&&(h=function(){});var j=b.call(this,c,"function"==typeof e?"":e,"function"==typeof f?0:f,"function"==typeof g?[0,0]:v(g),h)||this;"function"==typeof e&&(j.descFunc=e),"function"==typeof f&&(j.priceFunc=f),"function"==typeof g&&(j.iconFunction=function(){return v(g())}),ia.push(j);var a=i(j);for(var d in a)j[d]=a[d];return j}return f(a,b),a}(Game.Upgrade),ka=function(b){function a(d,e,f,g,h,i,j){void 0===i&&(i=["Legacy"]),void 0===j&&(j=function(){});var k=b.call(this,d,e,f,g,j)||this;return k.pool="prestige",k.posX=h[0],k.posY=h[1],k.parents=i.map(function(a){return Game.Upgrades[a]||Game.UpgradesById[a]}),Game.PrestigeUpgrades.push(k),Game.UpgradePositions[k.id]=h,k}return f(a,b),a}(ja),la=function(a){function b(b,c,d,e){var f=this;return"string"==typeof d&&(d=Game.Objects[d]),f=a.call(this,b,ea(d.plural)+" are <b>twice</b> as efficient.<q>"+c+"</q>",d.basePrice*Game.Tiers[e.toString()].price,Game.GetIcon(d.name,e))||this,Game.SetTier(d.name,e),f.buildingTie1=d,G(f)&&(f.order=19e3,d.fortune=f),isNaN(parseInt(e.toString()))||(e=parseInt(e.toString())),"number"==typeof e&&(f.order=100*(d.id+1)+f.id/1e3,f.order-=75*x(0,M(d.id-4,3)),8<=d.id&&(f.order-=75)),"fortune"===e&&Game.Tiers[e.toString()].upgrades.push(f),f}return f(b,a),b}(ja),ma=function(b){function a(c,d,e,f){var g=this;"string"==typeof e&&(e=Game.Objects[e]);var h=e.id-1;return 1===h?h="grandma":h+=" grandmas",g=b.call(this,c,"Grandmas are <b>twice</b> as efficient."+ea(e.plural)+" gain <b>+1% CpS</b> per "+h+".<q>"+d+"</q>",e.basePrice*Game.Tiers[2].price,[10,9],Game.Objects.Grandma.redraw)||this,e.grandma=g,g.buildingTie=e,g.order=250+5*(e.id/12),Game.GrandmaSynergies.push(g.name),f&&Ca.hooks.on("grandmaPic",function(a){return g.bought?p(a,[f]):a}),g}return f(a,b),a}(ja),na=function(b){function a(c,d,e,f,g){var h=this;return"string"==typeof e&&(e=Game.Objects[e]),"string"==typeof f&&(f=Game.Objects[f]),h=b.call(this,c,ea(e.plural)+" gain <b>+5% CpS</b> per "+f.name.toLowerCase()+".<br>"+ea(f.plural)+" gain <b>+0.1% CpS</b> per \n\t\t\t"+e.name.toLowerCase()+".<q>"+d+"</q>",(10*e.basePrice+1*f.basePrice)*Game.Tiers[g].price,Game.GetIcon(e.name,g))||this,h.tier=g,h.buildingTie1=e,h.buildingTie2=f,h.order=5e3+h.id/1e3,e.synergies.push(h),f.synergies.push(h),Game.Tiers[g.toString()].upgrades.push(h),h}return f(a,b),a}(ja),oa=[5,7,8,9,10],pa=function(b){function a(c,d,e,f){void 0===f&&(f=20);var g=this,h=Game.Objects.Cursor,i=parseInt(e.toString());return g=b.call(this,c,"Multiplies the gain from Thousand fingers by <b>"+f+"</b>.<q>"+d+"</q>",Game.Tiers[e.toString()].special||isNaN(i)?h.basePrice*Game.Tiers[e.toString()].price:E(10,oa[M(i-4,oa.length-1)]+3*x(i-8,0)),Game.GetIcon(h.name,e))||this,g.tier=e,g.pool="",g.order=100+g.id/1e3,Ca.on("cursorFingerMult",function(a){return g.bought?a*f:a}),Game.Tiers[e.toString()].special||isNaN(i)||Ca.buildingHooks.Cursor.on("buy",function(){h.amount>=(4===i?25:50*(i-4))&&Game.Unlock(g.name)}),"fortune"===e&&Game.Tiers[e.toString()].upgrades.push(g),g}return f(a,b),a}(ja),qa={1:5,2:4,4:4,default:3},ra=[.1,.125,.15,.175,.2,.2,.2,.2,.2,.175,.15,.125,.115],sa=function(b){function a(c,d,e,f,g,h){void 0===f&&(f=Game.Tiers[e.toString()].special||isNaN(parseInt(e.toString()))?null:ra[(parseInt(e.toString())-1)%(ra.length-1)]),void 0===h&&(h=Game.Tiers[e.toString()].special||isNaN(parseInt(e.toString()))?null:1===e?.5:e-1);var j=b.call(this,c,"You gain <b>more CpS</b> the more milk you have.<q>"+d+"</q>",Game.Tiers[e.toString()].special||isNaN(parseInt(e.toString()))?null!==g&&void 0!==g?g:0:I(e),Game.GetIcon("Kitten",e))||this;return j.tier=e,j.kitten=!0,j.pool="",null===f&&console.warn("Please make sure to specify the power if the kitten tier is special"),(Game.Tiers[e.toString()].special||isNaN(parseInt(e.toString())))&&void 0===g&&console.warn("Please make sure to specify the cost if the kitten tier is special"),null!==h&&Ca.on("logic",function(){Game.milkProgress>=h&&Game.Unlock(j.name)}),j.order=2e4+j.id/1e3,null!==f&&Ca.on("rawCpsMult",function(a){var b=j.bought?1+Game.milkProgress*f*Ca.hiddenMilkMult:1;return Game.cookiesMultByType.kittens*=b,a*b}),Game.UpgradesByPool.kitten.push(j),"fortune"===e&&Game.Tiers[e.toString()].upgrades.push(j),j}return f(a,b),a}(ja),ta=function(a){function b(b,c,d,f){void 0===f&&(f=1);var g=a.call(this,b,"Clicking gains <b>+"+f+"% of your CpS</b>.<q>"+c+"</q>",1,Game.GetIcon("Mouse",d))||this;g.tier=d,g.pool="";var e=parseInt(d.toString());return g.order=150+g.id/1e3,Ca.on("cpcAdd",function(a){return g.bought?a+Game.cookiesPs*f/100:a}),Game.Tiers[d.toString()].special||isNaN(e)||Ca.on("check",function(){Game.handmadeCookies>=E(10,1+2*e)&&Game.Unlock(g.name)}),"fortune"===d&&Game.Tiers[d.toString()].upgrades.push(g),g}return f(b,a),b}(ja),ua=function(b){function a(d,e,f,g,h,i,j){var a=b.call(this,d,"Cookie production multiplier <b>+"+Beautify("function"==typeof h?h():h,1)+"%</b>.<q>"+e+"</q>",f,g)||this;return a.power=h,a.pool="cookie",a.order=(null!==j&&void 0!==j?j:10020)+a.id/1e3,a.unlockAt={name:d,cookies:("function"==typeof f?f():f)/20,require:null===i||void 0===i?void 0:i.require,season:null===i||void 0===i?void 0:i.season,locked:null===i||void 0===i?void 0:i.locked},Game.UnlockAt.push(a.unlockAt),Game.UpgradesByPool.cookie.push(a),Game.cookieUpgrades.push(a),a}return f(a,b),a}(ja),va=[],wa=function(){return function(b,e,f,g,h,i,k,m,n){void 0===g&&(g=!1),void 0===h&&(h="auto"),void 0===i&&(i=null),void 0===k&&(k=null),void 0===m&&(m=null),void 0===n&&(n="auto");var p;this.name=b,this.color=f,this.upgrades=[],this.special=g,this.keyName="auto"===n?g?b:(Object.keys(Game.Tiers).filter(function(a){return!isNaN(parseInt(a))}).length+1).toString():n,null===i&&(this.unlock=-1),"number"==typeof i&&(this.unlock=i),(!1===g&&null===i||"auto"===i)&&(this.unlock=Game.Tiers[parseInt(this.keyName)-1].unlock+50),"number"==typeof k&&(this.achievUnlock=k),(!1===g&&null===k||"auto"===k)&&(this.achievUnlock=Game.Tiers[parseInt(this.keyName)-1].achievUnlock+50),m&&(this.req=m),this.price="auto"===h?1e8*Game.Tiers[Object.keys(Game.Tiers).filter(function(a){return!isNaN(parseInt(a))}).length.toString()].price:h,this.iconRow=e[1],this.iconLink=j(null!==(p=e[2])&&void 0!==p?p:Ca.iconLink),Game.Tiers[this.keyName]=this,va.push(this)}}(),xa=[],ya=function(a){function b(b,d,e){var f=a.call(this,b,d,v(e))||this;return da(f,c(f)),xa.push(f),f}return f(b,a),b}(Game.Achievement),za=function(a){function b(b,c,d,e){void 0===e&&(e=E(10,B(1.5*Game.BankAchievements.length+2)));var f=a.call(this,b,"Bake <b>"+toFixed(e)+"</b> cookie"+(1===P(e)?"":"s")+" in one ascension."+(d?"<q>"+d+"</q>":""),c)||this;return f.treshold=e,f.order=100+.01*Game.BankAchievements.length,Game.BankAchievements.push(f),f}return f(b,a),b}(ya),Aa=function(a){function b(b,c,d,e){void 0===e&&(e=E(10,B(1.2*Game.BankAchievements.length)));var f=a.call(this,b,"Bake <b>"+toFixed(e)+"</b> cookie"+(1===P(e)?"":"s")+" per second."+(d?"<q>"+d+"</q>":""),c)||this;return f.treshold=e,f.order=200+.01*Game.CpsAchievements.length,Game.CpsAchievements.push(f),f}return f(b,a),b}(ya),Ba=function(b){function a(d,e,f,g){var h=this,i="object"==typeof f?f:Game.Objects[f],j=null,k=-1;if(0===i.id){switch(g){case"cursor2":j=[0,6],k=2;break;case"cursor50":j=[1,6],k=50;break;default:if(0>=Game.Tiers[g.toString()].achievUnlock){console.warn("Tier has invalid unlock amount");break}k="1"===g.toString()?1:2*Game.Tiers[g.toString()].achievUnlock;}Ca.buildingHooks.Cursor.on("buy",function(){Game.Objects.Cursor.amount>=k&&Game.Win(h.name)})}else k=Game.Tiers[g.toString()].achievUnlock;return h=b.call(this,d,"Have <b>"+k+"</b> "+(1===P(k)?i.single:i.plural)+"."+(e?"<q>"+e+"</q>":""),null!==j&&void 0!==j?j:Game.GetIcon(i.name,g))||this,Game.SetTier(i.name,"cursor2"===g||"cursor50"===g?1:g),i.tieredAchievs[g]=h,h.buildingTie=i,"number"==typeof g&&(h.order=1e3+100*i.id+h.id/1e3,h.order-=75*x(0,M(i.id-4,3)),8<=i.id&&(h.order-=75),0===i.id&&(h.order+=50)),h}return f(a,b),a}(ya),Ca={hooks:null,on:null,hiddenMilkMult:1,iconLink:"",buildingLink:"",buildingHooks:Z,buildingHooksById:[],hookAllBuildings:s,customBuildings:_,customUpgrades:ia,customTiers:va,save:D,onLoad:[],Building:ha,Upgrade:ja,TieredUpgrade:la,Tier:wa,HeavenlyUpgrade:ka,GrandmaSynergy:ma,SynergyUpgrade:na,CursorUpgrade:pa,KittenUpgrade:sa,MouseUpgrade:ta,CookieUpgrade:ua,Achievement:ya,CpsAchievement:Aa,BankAchievement:za,TieredAchievement:Ba,customAchievements:xa,injectCode:ca,DEFAULT_ONBUY:function(){Game.UnlockTiered(this),this.amount>=Game.SpecialGrandmaUnlock&&0<Game.Objects.Grandma.amount&&this.grandma&&Game.Unlock(this.grandma.name)},DEFAULT_CPS:function(a){return Game.GetTieredCpsMult(a)*Game.magicCpS(a.name)*a.baseCps},icons:{relinkColumn:function(b,d,e,f){return void 0===f&&(f=!1),k(this,void 0,void 0,function(){var g,h,h,k,m;return C(this,function(a){switch(a.label){case 0:for(h in void 0===e&&(!X[b]&&(X[b]=0),e=X[b]++),g={},z)g[h]=[e,z[h][1]];for(h in Game.Tiers)g[Game.Tiers[h].name.toLowerCase()]=g[h.toString()]=[e,Game.Tiers[h].iconRow];return k=y,m=[b],[4,u(f?j(b):b,g,d,[48,48],[48*(e+1),48*(Object.values(g).reduce(function(a,b){return x(a,b[1])},-Infinity)+1)],function(a){return new Promise(function(c){if(j(b)!==b){var d=new Image;d.addEventListener("load",function(){a.drawImage(d,0,0),c()}),d.src=j(b),d.crossOrigin="Anonymous"}else c()})})];case 1:return k.apply(void 0,m.concat([a.sent()])),[2];}})})},relinkRow:function(b,d,e,f){return void 0===f&&(f=!1),k(this,void 0,void 0,function(){var g,h,h,k,m;return C(this,function(a){switch(a.label){case 0:for(h in void 0===e&&(!J[b]&&(J[b]=0),e=J[b]++),g={},Q)g[h]=[Q[h][0],e];for(h in Game.ObjectsById)g[Game.ObjectsById[h].single.toLowerCase()]=g[h]=[Game.ObjectsById[h].iconColumn,e];return k=y,m=[b],[4,u(f?j(b):b,g,d,[48,48],[48*(Object.values(g).reduce(function(a,b){return x(a,b[0])},-Infinity)+1),48*(e+1)],function(a){return new Promise(function(c){if(j(b)!==b){var d=new Image;d.addEventListener("load",function(){a.drawImage(d,0,0),c()}),d.src=j(b),d.crossOrigin="Anonymous"}else c()})})];case 1:return k.apply(void 0,m.concat([a.sent()])),[2];}})})},patchIconsheet:function(q,e,i){var w;return void 0===i&&(i=!0),k(this,void 0,void 0,function(){var n,o,x,z,A,B,D,E,F,G,H,I,J,K,M;return C(this,function(a){switch(a.label){case 0:return n=document.createElement("canvas").getContext("2d"),[4,O(i?j(q):q)];case 1:for(o=a.sent(),x=[o.width,o.height],z=0,A=e;z<A.length;z++)B=A[z],48*B[0][0]>x[0]&&(x[0]=48*B[0][0]),48*B[0][1]>x[1]&&(x[1]=48*B[0][1]);n.canvas.width=x[0],n.canvas.height=x[1],n.drawImage(o,0,0),D={},E=0,F=e,a.label=2;case 2:return E<F.length?(G=F[E],H=j((null!==(w=G[1][2])&&void 0!==w?w:Ca.iconLink)||"img/icons.png"),!!D[H])?[3,4]:(I=D,J=H,[4,O(H)]):[3,6];case 3:I[J]=a.sent(),a.label=4;case 4:n.clearRect(48*G[0][0],48*G[0][1],48,48),n.drawImage(D[H],48*G[1][0],48*G[1][1],48,48,48*G[0][0],48*G[0][1],48,48),a.label=5;case 5:return E++,[3,2];case 6:return K=y,M=[q],[4,L(n)];case 7:return K.apply(void 0,M.concat([a.sent()])),[2];}})})}}};window.Cppkies?A=window.Cppkies:(A=Ca,window.Cppkies=A,function(){return new Promise(function(a){var b=new q,c=[new F("customMenu",function(){Game.UpdateMenu=ca(Game.UpdateMenu,null,"\n\t\t\t\t\t// Cppkies injection\n\t\t\t\t\tswitch (Game.onMenu) {\n\t\t\t\t\t\tcase \"prefs\":\n\t\t\t\t\t\t\tCppkies.hooks.emit(\"optionsMenu\")\n\t\t\t\t\t\t\tbreak\n\t\t\t\t\t\tcase \"stats\":\n\t\t\t\t\t\t\tCppkies.hooks.emit(\"statsMenu\")\n\t\t\t\t\t\t\tbreak\n\t\t\t\t\t\tcase \"log\":\n\t\t\t\t\t\t\tCppkies.hooks.emit(\"logMenu\")\n\t\t\t\t\t\t\tbreak\n\t\t\t\t\t}\n\t\t\t\t\tCppkies.hooks.emit(\"menu\")\n\t\t\t\t\t","before")}),new F("preSave",function(){Game.WriteSave=ca(Game.WriteSave,null,"\n\t\t\t\t\t// Cppkies injection\n\t\t\t\t\tCppkies.hooks.emit(\"preSave\")\n\t\t\t\t\t","before")}),new F("reset",function(){Game.Reset=ca(Game.Reset,null,"\n\t\t\t\t\t// Cppkies injection\n\t\t\t\t\tCppkies.hooks.emit(\"reset\", hard)\n\t\t\t\t\t","before")}),new F("getIcon",function(){Game.GetIcon=ca(Game.GetIcon,"return [col,Game.Tiers[tier].iconRow];","\n\t\t\t\t\t// Cppkies Injection\n\t\t\t\t\treturn Cppkies.hooks.emit(\"getIcon\", { icon: [col, Game.Tiers[tier].iconRow], tier: tier, type: type }).icon","replace")}),new F("buildStore",function(){Game.BuildStore=ca(Game.BuildStore,null,";\nCppkies.hooks.emit(\"buildStore\")","after")}),new F("grandmaPic",function(){Game.Objects.Grandma.art.pic=ca(Game.Objects.Grandma.art.pic,"return choose(list)+'.png'","// Cppkies injection\n\t\t\t\t\tlist = Cppkies.hooks.emit(\"grandmaPic\", list)\n\t\t\t\t\t","before")}),new F("cps",function(){Game.CalculateGains=ca(Game.CalculateGains,"var rawCookiesPs=Game.cookiesPs*mult;","// Cppkies injection\n\t\t\t\t\tGame.cookiesPs = Cppkies.hooks.emit(\"rawCps\", Game.cookiesPs);\n\t\t\t\t\tmult = Cppkies.hooks.emit(\"rawCpsMult\", mult);\n","before"),Game.CalculateGains=ca(Game.CalculateGains,"Game.cookiesPs=Game.runModHookOnValue('cps',Game.cookiesPs);","\n// Cppkies injection\nmult = Cppkies.hooks.emit(\"cpsMult\", mult);\nGame.cookiesPs = Cppkies.hooks.emit(\"cps\", Game.cookiesPs);\n","before")}),new F("cursorFingerMult",function(){Game.Objects.Cursor.cps=ca(Game.Objects.Cursor.cps,"var mult=1;","// Cppkies injection\nadd = Cppkies.hooks.emit(\"cursorFingerMult\", add)\n;","before")}),new F("cpc",function(){Game.mouseCps=ca(Game.mouseCps,"var num=0;","// Cppkies injection\nadd = Cppkies.hooks.emit(\"cursorFingerMult\", add)\n;","before"),Game.mouseCps=ca(Game.mouseCps,"out=Game.runModHookOnValue('cookiesPerClick',out);","// Cppkies injection\nout = Cppkies.hooks.emit(\"cpc\", out)\n;","before"),Game.mouseCps=ca(Game.mouseCps,"var out","// Cppkies injection\nadd = Cppkies.hooks.emit(\"cpcAdd\", add)\n;","before")}),new F("buildingCps",function(){Game.CalculateGains=ca(Game.CalculateGains,"me.storedTotalCps=me.amount*me.storedCps;","// Cppkies injection (internal, do not use)\nme.storedCps = Cppkies.hooks.emit(\"buildingCps\", { building: i, cps: me.storedCps }).cps;\n","before")})];c.forEach(function(a){var b;null===(b=a.func)||void 0===b?void 0:b.call(a)}),Game.Loader.Load=ca(Game.Loader.Load,"img.src=this.domain","\n\t\t\t// Cppkies injection\n\t\t\timg.src = (assets[i].indexOf('http') !== -1 ? \"\" : this.domain)\n","replace"),Game.Objects.Cursor.buyFunction=ca(Game.Objects.Cursor.buyFunction,"Game.Unlock('Octillion fingers');","\n \t\t\t// Cppkies injection\n\t\t\tfor(const i in this.tieredUpgrades) {\n\t\t\t\tif (isNaN(parseInt(i))) continue\n\t\t\t\tif (this.amount >= Game.Tiers[this.tieredUpgrades[i].tier].unlock - 50) this.tieredUpgrades[i].unlock()\n\t\t\t}\n","after"),Game.Object=ca(Game.Object,"Game.ObjectsN++","\n// Cppkies injection\nCppkies.hookAllBuildings();\n","after"),Game.CalculateGains=ca(Game.CalculateGains,"var catMult=1;","// Cppkies injection\n\t\t\tCppkies.hiddenMilkMult = milkMult;\n","before"),Game.GetIcon=ca(Game.GetIcon,"col=18;","else if (type === \"Mouse\") col = 11;","after"),Game.registerHook("logic",function(){return b.emit("logic")}),Game.registerHook("check",function(){return b.emit("check")}),a(b)})}().then(function(a){A.hooks=a,A.on=a.on.bind(a),Game.Notify("Cppkies loaded!","",[32,17],1.5),Game.modSaveData.cppkies||(Game.modSaveData.cppkies="{}"),Game.registerMod("cppkies",{save:h,load:b}),Game.Win("Third-party"),s(),Ca.onLoad.forEach(function(a){return a()}),Ca.onLoad=new Proxy(Ca.onLoad,{set:function(a,b,c){return"length"!==b&&c(),!0}}),window.CPPKIES_ONLOAD||(window.CPPKIES_ONLOAD=[]),window.CPPKIES_ONLOAD.forEach(function(a){return a()}),window.CPPKIES_ONLOAD=new Proxy(Ca.onLoad,{set:function(a,b,c){return"length"!==b&&c(),!0}}),t()}));var Da=A;return Da})});ca.onLoad.push(function(){new ca.HeavenlyUpgrade("Box of brand biscuts (Family Size)","Contains lots of new flavors of loreols.<q>Now %10 larger!</q>",1e9,[20,9],[-457,-305],["Box of brand biscuits"]),b("Birthday Cake Loreol","",[0,0]),b("Mint Loreol","Tastes a little like toothpaste, and it's not even mint flavored toothpaste. Like why do they call it \"mint\" flavored when it doesn't taste like mint, I guess it's because of the color but then why does it taste like the toothpaste that does the exact same thing; I hate mint anything because you never know what your going to get, it's either <b>this</b> or like thin- I mean Win Mints. -A local mint critic",[1,0]),b("Chocolate Loreol","<b>You are filled with determination.</b>",[2,0]),b("Peanut Butter Loreol","Bob's Favorite, well of ore- Loreols at least.",[3,0]),b("Red Velvet Loreol","Tasty!",[4,0]),b("Peanut Butter Chocolate Pie Loreol","Excessive but yet delicious.",[5,0]),b("Spring Loreol","Too much flower to be honest.",[0,1]),b("Dark Chocolate Loreol","It's like chocolate but <i>edgy</i>.",[1,1]),b("Carrot Cake Loreol","24-carrot, and great for eyesight!",[2,1]),b("Lemon Loreol","Made from the new and exotic \"Blood Lemon\"! Blood Oranges, watch out because Blood Lemons are the new best blood fruit! Note: Blood Lemons do not contain actual blood, but I heard that Blood Oranges have actual blood in them, so don't buy them they're gross, and Blood Lemons are far superior! -A completely unbiased (and totally not paid off) reviewer",[3,1]),b("Golden Loreol","High in beta karatene.",[4,1]),b("Cinnamon Bun Loreol","Made with actual bunnies!",[5,1]),new ca.Achievement("Aurora Loreolis","Buy all Loreols <q>At this time of year! At this time of day! In this part of the country! Localized entirely in your kitchen! Buy tickets now!</q>",[0,0,"https://raw.githubusercontent.com/MasterOfBob777/LotsOfLoreos/master/dist/LotsOfLoreosIcons.png"]),ca.on("check",function(){Game.Has("Birthday Cake Loreol")&&Game.Has("Chocolate Loreol")&&Game.Has("Peanut Butter Loreol")&&Game.Has("Mint Loreol")&&Game.Has("Mint Loreol")&&Game.Has("Red Velvet Loreol")&&Game.Has("Peanut Butter Chocolate Pie Loreol")&&Game.Has("Spring Loreol")&&Game.Has("Dark Chocolate Loreol")&&Game.Has("Carrot Cake Loreol")&&Game.Has("Golden Loreol")&&Game.Has("Lemon Loreol")&&Game.Has("Cinnamon Bun Loreol")&&Game.Win("Aurora Loreolis")})})});
//# sourceMappingURL=index.js.map
