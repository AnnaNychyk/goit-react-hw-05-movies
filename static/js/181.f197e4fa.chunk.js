"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[181],{2181:function(A,n,e){e.r(n),e.d(n,{default:function(){return l}});var t=e(1413),r=e(5861),a=e(885),c=e(4687),s=e.n(c),i=e(6871),o=e(501),u=e(2791),p=e(9763),g=e(184),l=function(){var A,n=(0,u.useState)({items:[],loading:!1,error:null}),e=(0,a.Z)(n,2),c=e[0],l=e[1],x=(0,i.UO)().movieId,B=(0,i.s0)(),d=(null===(A=(0,i.TH)().state)||void 0===A?void 0:A.from)||"/movies";(0,u.useEffect)((function(){var A=function(){var A=(0,r.Z)(s().mark((function A(){var n;return s().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,l((function(A){return(0,t.Z)((0,t.Z)({},A),{},{loading:!0,error:null})})),A.next=4,(0,p.TP)(x);case 4:n=A.sent,l((function(A){return(0,t.Z)((0,t.Z)({},A),{},{items:n})})),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),l((function(n){return(0,t.Z)((0,t.Z)({},n),{},{error:A.t0})}));case 11:return A.prev=11,l((function(A){return(0,t.Z)((0,t.Z)({},A),{},{loading:!1})})),A.finish(11);case 14:case"end":return A.stop()}}),A,null,[[0,8,11,14]])})));return function(){return A.apply(this,arguments)}}();A()}),[l,x]);var k=c.items,f=k.title,j=k.poster_path,w=k.overview,E=k.genres,h=void 0===E?[]:E,Q=k.vote_average,v=j?"https://image.tmdb.org/t/p/w500".concat(j):"data:image/jpeg;base64,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",M=Math.round(Q/10*100),C=h.map((function(A){return A.name})).join(", ");return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("button",{className:"goBack",onClick:function(){return B(d)},type:"button",children:"Go back"}),(0,g.jsxs)("div",{className:"details",children:[(0,g.jsx)("img",{className:"poster",src:v,alt:""}),(0,g.jsxs)("div",{className:"info",children:[(0,g.jsx)("h2",{children:f}),(0,g.jsxs)("p",{children:["User Score: ",M,"%"]}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("p",{children:w}),(0,g.jsx)("h4",{children:"Genres"}),(0,g.jsx)("p",{children:C})]})]}),(0,g.jsxs)("div",{className:"moreInfo",children:[(0,g.jsx)("p",{children:"Additional information"}),(0,g.jsxs)("ul",{className:"castReviews",children:[(0,g.jsx)("li",{children:(0,g.jsx)(o.rU,{state:{from:d},to:"/movies/".concat(x,"/cast"),children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(o.rU,{state:{from:d},to:"/movies/".concat(x,"/reviews"),children:"Reviews"})})]})]}),(0,g.jsx)(i.j3,{})]})}},9763:function(A,n,e){e.d(n,{JS:function(){return u},TP:function(){return g},V0:function(){return f},tx:function(){return d},zv:function(){return x}});var t=e(5861),r=e(4687),a=e.n(r),c=e(4569),s=e.n(c),i="https://api.themoviedb.org/3",o="e236468c654efffdf9704cd975a74a96";function u(){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(a().mark((function A(){var n,e,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n="".concat(i,"/trending/movie/day?api_key=").concat(o),A.next=3,s().get(n);case 3:return e=A.sent,t=e.data,A.abrupt("return",t);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function g(A){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(a().mark((function A(n){var e,t,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e="".concat(i,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"),A.next=3,s().get(e);case 3:return t=A.sent,r=t.data,A.abrupt("return",r);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function x(A){return B.apply(this,arguments)}function B(){return(B=(0,t.Z)(a().mark((function A(n){var e,t,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e="".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"),A.next=3,s().get(e);case 3:return t=A.sent,r=t.data,A.abrupt("return",r);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function d(A){return k.apply(this,arguments)}function k(){return(k=(0,t.Z)(a().mark((function A(n){var e,t,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e="".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"),A.next=3,s().get(e);case 3:return t=A.sent,r=t.data,A.abrupt("return",r);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function f(A){return j.apply(this,arguments)}function j(){return(j=(0,t.Z)(a().mark((function A(n){var e,t,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e="".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"),A.next=3,s().get(e);case 3:return t=A.sent,r=t.data,A.abrupt("return",r);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=181.f197e4fa.chunk.js.map