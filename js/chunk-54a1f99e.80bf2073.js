(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54a1f99e"],{"362c":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}],staticClass:"d2-contextmenu",style:e.style},[e._t("default")],2)},r=[],i=(n("a9e3"),{name:"d2-contextmenu",props:{visible:{type:Boolean,default:!1},x:{type:Number,default:0},y:{type:Number,default:0}},computed:{flag:{get:function(){return this.visible&&window.addEventListener("mousedown",this.watchContextmenu),this.visible},set:function(e){this.$emit("update:visible",e)}},style:function(){return{left:this.x+"px",top:this.y+"px",display:this.visible?"block":"none "}}},methods:{watchContextmenu:function(e){this.$el.contains(e.target)&&0===e.button||(this.flag=!1),window.removeEventListener("mousedown",this.watchContextmenu)}},mounted:function(){document.querySelector("body").appendChild(this.$el)}}),a=i,s=(n("a887"),n("2877")),u=function(e){e.options.__source="src/layout/header-aside/components/contextmenu/index.vue"},c=u,f=Object(s["a"])(a,o,r,!1,null,null,null);"function"===typeof c&&c(f);t["default"]=f.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var o=n("1d80"),r=n("5899"),i="["+r+"]",a=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),u=function(e){return function(t){var n=String(o(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(s,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(e,t,n){var o=n("861d"),r=n("d2bb");e.exports=function(e,t,n){var i,a;return r&&"function"==typeof(i=t.constructor)&&i!==n&&o(a=i.prototype)&&a!==n.prototype&&r(e,a),e}},"9cdb":function(e,t,n){},a887:function(e,t,n){"use strict";n("9cdb")},a9e3:function(e,t,n){"use strict";var o=n("83ab"),r=n("da84"),i=n("94ca"),a=n("6eeb"),s=n("5135"),u=n("c6b6"),c=n("7156"),f=n("c04e"),l=n("d039"),p=n("7c73"),d=n("241c").f,h=n("06cf").f,b=n("9bf2").f,v=n("58a8").trim,m="Number",N=r[m],w=N.prototype,x=u(p(w))==m,y=function(e){var t,n,o,r,i,a,s,u,c=f(e,!1);if("string"==typeof c&&c.length>2)if(c=v(c),t=c.charCodeAt(0),43===t||45===t){if(n=c.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+c}for(i=c.slice(2),a=i.length,s=0;s<a;s++)if(u=i.charCodeAt(s),u<48||u>r)return NaN;return parseInt(i,o)}return+c};if(i(m,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var I,g=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof g&&(x?l((function(){w.valueOf.call(n)})):u(n)!=m)?c(new N(y(t)),n,g):y(t)},E=o?d(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;E.length>_;_++)s(N,I=E[_])&&!s(g,I)&&b(g,I,h(N,I));g.prototype=w,w.constructor=g,a(r,m,g)}}}]);