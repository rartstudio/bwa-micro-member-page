(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{288:function(e,t,r){e.exports=r.p+"img/illustration-joined.c0616bf.jpg"},307:function(e,t,r){"use strict";r.r(t);r(28),r(32),r(33),r(79),r(80),r(59),r(34),r(48);var n=r(6),o=r(35),c=r(47);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={middleware:"user",data:function(){return{loadingState:!0}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)(["course"])),mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loadingState=!0,t.next=3,e.$store.dispatch("course/fetchCourse",e.$route.params.id);case 3:e.loadingState=!1;case 4:case"end":return t.stop()}}),t)})))()}},d=r(23),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loadingState?[e._v("\n        loading\n    ")]:[n("StateLayout",{staticClass:"mt-16",scopedSlots:e._u([{key:"state-image",fn:function(){return[n("img",{staticClass:"h-48 md:h-64",attrs:{src:r(288),alt:"Success join class"}})]},proxy:!0},{key:"state-title",fn:function(){return[e._v("\n                Welcome to Class\n            ")]},proxy:!0},{key:"state-subtitle",fn:function(){return[e._v("\n                You have successfully joined our "),n("br"),e._v(" "),n("strong",[e._v("\n                    "+e._s(e.course.userCourse.name?e.course.userCourse.name:"Class Name")+"\n                ")]),e._v("\n                Class\n            ")]},proxy:!0},{key:"state-link",fn:function(){return[e._v("\n                Start Learn\n            ")]},proxy:!0}])})]],2)}),[],!1,null,"00129d14",null);t.default=component.exports;installComponents(component,{StateLayout:r(161).default})}}]);