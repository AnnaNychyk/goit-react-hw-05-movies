"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[391],{391:function(A,n,t){t.r(n),t.d(n,{default:function(){return w}});var e=t(1413),r=t(5861),a=t(885),c=t(4687),u=t.n(c),o=t(6871),s=t(2791),i=t(9763),p=t(184),w=function(){var A=(0,s.useState)({items:[],loading:!1,error:null}),n=(0,a.Z)(A,2),t=n[0],c=n[1],w=(0,o.UO)().movieId;(0,s.useEffect)((function(){var A=function(){var A=(0,r.Z)(u().mark((function A(){var n;return u().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,c((function(A){return(0,e.Z)((0,e.Z)({},A),{},{loading:!0,error:null})})),A.next=4,(0,i.zv)(w);case 4:n=A.sent,c((function(A){return(0,e.Z)((0,e.Z)({},A),{},{items:n.cast})})),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),c((function(n){return(0,e.Z)((0,e.Z)({},n),{},{error:A.t0})}));case 11:return A.prev=11,c((function(A){return(0,e.Z)((0,e.Z)({},A),{},{loading:!1})})),A.finish(11);case 14:case"end":return A.stop()}}),A,null,[[0,8,11,14]])})));return function(){return A.apply(this,arguments)}}();A()}),[c,w]);var f=t.items.map((function(A){return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{width:"100px",src:A.profile_path?"https://image.tmdb.org/t/p/w500".concat(A.profile_path):"data:image/jpeg;base64,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",alt:A.name}),(0,p.jsx)("p",{children:A.name}),(0,p.jsxs)("p",{children:["Character: ",A.character]})]},A.id)}));return(0,p.jsx)("ul",{children:f})}},9763:function(A,n,t){t.d(n,{JS:function(){return i},TP:function(){return w},V0:function(){return l},tx:function(){return h},zv:function(){return g}});var e=t(5861),r=t(4687),a=t.n(r),c=t(4569),u=t.n(c),o="https://api.themoviedb.org/3",s="e236468c654efffdf9704cd975a74a96";function i(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(a().mark((function A(){var n,t,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n="".concat(o,"/trending/movie/day?api_key=").concat(s),A.next=3,u().get(n);case 3:return t=A.sent,e=t.data,A.abrupt("return",e);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function w(A){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(a().mark((function A(n){var t,e,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t="".concat(o,"/movie/").concat(n,"?api_key=").concat(s,"&language=en-US"),A.next=3,u().get(t);case 3:return e=A.sent,r=e.data,A.abrupt("return",r);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function g(A){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(a().mark((function A(n){var t,e,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t="".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"),A.next=3,u().get(t);case 3:return e=A.sent,r=e.data,A.abrupt("return",r);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function h(A){return y.apply(this,arguments)}function y(){return(y=(0,e.Z)(a().mark((function A(n){var t,e,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t="".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),A.next=3,u().get(t);case 3:return e=A.sent,r=e.data,A.abrupt("return",r);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function l(A){return B.apply(this,arguments)}function B(){return(B=(0,e.Z)(a().mark((function A(n){var t,e,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t="".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"),A.next=3,u().get(t);case 3:return e=A.sent,r=e.data,A.abrupt("return",r);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=391.e5fb47d7.chunk.js.map