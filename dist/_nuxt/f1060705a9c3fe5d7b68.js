(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{152:function(e,n,t){var content=t(155);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(42).default)("830bc3bc",content,!0,{sourceMap:!1})},153:function(e,n,t){var content=t(157);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(42).default)("2e107364",content,!0,{sourceMap:!1})},154:function(e,n,t){"use strict";var r=t(152);t.n(r).a},155:function(e,n,t){(n=t(41)(!1)).push([e.i,".numbersContainer{width:100%;max-width:60rem;margin:0 auto}.numbersInputs{width:100%;display:flex;flex-direction:column;align-items:start;margin-bottom:2rem}@media (min-width:768px){.numbersInputs{width:50%}}.numbersInputs>div{width:100%;display:flex;align-content:space-between}.numbersInputs>div:not(:last-child){margin-bottom:.5rem}.numbersInputs>div input{margin-left:auto;text-align:center;background-color:rgba(255,0,0,.1)}ul.numbersList{display:flex;width:100%;flex-direction:row;flex-wrap:wrap;height:20rem;overflow-y:scroll;align-content:start}@media (min-width:768px){ul.numbersList{width:100%;height:30rem}}ul.numbersList li{--numbers-per-line:5;width:calc(100%/var(--numbers-per-line));height:2rem;border:1px solid #000;background-color:rgba(0,0,255,.1);display:inline;display:flex;justify-content:center;flex-direction:column}ul.numbersList li.lastOfLine{font-weight:700;background-color:rgba(255,0,0,.1)}@media (min-width:768px){ul.numbersList li{--numbers-per-line:10;height:3rem}}",""]),e.exports=n},156:function(e,n,t){"use strict";var r=t(153);t.n(r).a},157:function(e,n,t){(n=t(41)(!1)).push([e.i,"body{background-color:rgba(240,128,128,.3)}.container{margin:0 auto;min-height:100vh;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:center;align-items:center;text-align:center;overflow:hidden;padding:0 1rem}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:2rem;color:#35495e;letter-spacing:1px;margin-bottom:2rem}@media (min-width:768px){.title{font-size:5rem}}.links{padding-top:15px}",""]),e.exports=n},158:function(e,n,t){"use strict";t.r(n);var r={data:function(){return{baseNumber:8,numberLines:10,numbersPerLine:10,numbers:[],items:[{message:"Foo"},{message:"Bar"}]}},methods:{generateNumbers:function(){this.numbers=[];for(var e=this.numberLines*this.numbersPerLine,i=1;i<=e;i++)this.numbers.push(i*this.baseNumber)}},created:function(){this.generateNumbers()}},o=(t(154),t(24)),l={components:{NumberGenerator:Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"numbersContainer"},[t("div",{staticClass:"numbersInputs"},[t("div",[t("span",[e._v("Number:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.baseNumber,expression:"baseNumber",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.baseNumber},on:{change:function(n){return e.generateNumbers()},input:function(n){n.target.composing||(e.baseNumber=e._n(n.target.value))},blur:function(n){return e.$forceUpdate()}}})]),e._v(" "),t("div",[t("span",[e._v("Lines:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.numberLines,expression:"numberLines",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.numberLines},on:{change:function(n){return e.generateNumbers()},input:function(n){n.target.composing||(e.numberLines=e._n(n.target.value))},blur:function(n){return e.$forceUpdate()}}})])]),e._v(" "),t("ul",{staticClass:"numbersList"},e._l(e.numbers,(function(n,r){return t("li",{class:{lastOfLine:(r+1)%e.numbersPerLine==0}},[e._v(e._s(n))])})),0)])}),[],!1,null,null,null).exports}},m=(t(156),Object(o.a)(l,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[this._v("Multiplication Helper")]),this._v(" "),n("div",{staticClass:"border-solid w-full h-auto"},[n("NumberGenerator")],1)])}),[],!1,null,null,null));n.default=m.exports}}]);