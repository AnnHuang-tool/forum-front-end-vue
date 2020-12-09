(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34e886ca"],{"1d7a":function(t,e,r){"use strict";r("e493")},"2dcb":function(t,e,r){},"2e33":function(t,e,r){},"6d62":function(t,e,r){"use strict";r("2dcb")},ad68:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("h1",[t._v("餐廳描述頁")]),r("RestaurantDetail",{attrs:{"initial-restaurant":t.restaurant}}),r("hr"),r("RestaurantComments",{attrs:{"restaurant-comments":t.restaurantComments},on:{"after-delete-comment":t.afterDeleteComment}}),r("CreateComment",{attrs:{"restaurant-id":t.restaurant.id},on:{"after-create-comment":t.afterCreateComment}})],1)},n=[],s=(r("a4d3"),r("e01a"),r("4de4"),r("b0c0"),r("96cf"),r("1da1")),i=r("5530"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-3"},[r("h1",[t._v(t._s(t.restaurant.name))]),r("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.Category?t.restaurant.Category.name:"未分類")+" ")])]),r("div",{staticClass:"col-lg-4"},[r("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t.restaurant.image}}),r("div",{staticClass:"contact-info-wrap"},[r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),r("li",[r("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),r("li",[r("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),r("div",{staticClass:"col-lg-8"},[r("p",[t._v(t._s(t.restaurant.description))]),r("router-link",{staticClass:"btn btn-primary btn-border mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:t.restaurant.id}}}},[t._v("Dashboard")]),t.restaurant.isFavorited?r("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteFavorite(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):r("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFavorite(t.restaurant.id)}}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?r("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteLike(t.restaurant.id)}}},[t._v(" Unlike ")]):r("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addLike(t.restaurant.id)}}},[t._v(" Like ")])],1)])},c=[],u=r("4cce"),l=r("2fa3"),d={props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant}},watch:{initialRestaurant:function(t){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),t)}},methods:{addFavorite:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].addFavorite({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isFavorited:!0}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),l["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"}),console.log("error",r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteFavorite:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].deleteFavorite({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isFavorited:!1}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),l["a"].fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"}),console.log("error",r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},addLike:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].addLike({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isLiked:!0}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),l["a"].fire({icon:"error",title:"無法將餐廳Like，請稍後再試"}),console.log("error",r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteLike:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].deleteLike({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isLiked:!1}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),l["a"].fire({icon:"error",title:"無法將餐廳Unlike，請稍後再試"}),console.log("error",r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},m=d,p=(r("1d7a"),r("2877")),f=Object(p["a"])(m,o,c,!1,null,"bedea716",null),b=f.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"my-4"},[t._v("所有評論：")]),t._l(t.restaurantComments,(function(e){return r("div",{key:e.id},[r("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?r("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),r.stopPropagation(),t.handleDeleteButtonClick(e.id)}}},[t._v(" Delete ")]):t._e(),r("h3",[r("a",{attrs:{href:"#"}},[t._v(" "+t._s(e.User.name)+" ")])]),r("p",[t._v(t._s(e.text))]),r("footer",{staticClass:"blockquote-footer"},[t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" ")])]),r("hr")])}))],2)},g=[],h=r("2708"),k={create:function(t){var e=t.restaurantId,r=t.text;return l["b"].post("/comments",{restaurantId:e,text:r})},delete:function(t){var e=t.commentId;return l["b"].delete("/comments/".concat(e))}},x=r("2f62"),C={name:"RestaurantComments",mixins:[h["b"]],props:{restaurantComments:{type:Array,required:!0}},computed:Object(i["a"])({},Object(x["b"])(["currentUser"])),methods:{handleDeleteButtonClick:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isProcessing=!0,r.next=4,k.delete({commentId:t});case 4:if(a=r.sent,n=a.data,"error"!==n.status){r.next=8;break}throw new Error(n.message);case 8:e.$emit("after-delete-comment",t),l["a"].fire({icon:"success",title:"移除評論成功"}),e.isProcessing=!1,r.next=18;break;case 13:r.prev=13,r.t0=r["catch"](0),console.error(r.t0.message),e.isProcessing=!1,l["a"].fire({icon:"error",title:"無法移除評論，請稍後再試"});case 18:case"end":return r.stop()}}),r,null,[[0,13]])})))()}}},w=C,_=(r("fc76"),Object(p["a"])(w,v,g,!1,null,"6a898621",null)),y=_.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[r("div",{staticClass:"form-group mb-4"},[r("label",{attrs:{for:"text"}},[t._v("留下評論：")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",{staticClass:"d-flex align-items-center justify-content-between"},[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")]),r("button",{staticClass:"btn btn-primary mr-0",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" Submit ")])])])},R=[],j=(r("a9e3"),{name:"CreateComment",props:{restaurantId:{type:Number,required:!0}},data:function(){return{text:"",isProcessing:!1}},methods:{handleSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.text){e.next=4;break}return l["a"].fire({icon:"warning",title:"您尚未填寫任何評論"}),e.abrupt("return");case 4:return t.isProcessing=!0,e.next=7,k.create({restaurantId:t.restaurantId,text:t.text});case 7:if(r=e.sent,a=r.data,"error"!==a.status){e.next=11;break}throw new Error(a.message);case 11:t.$emit("after-create-comment",{commentId:a.commentId,restaurantId:t.restaurantId,text:t.text}),l["a"].fire({icon:"success",title:"新增評論成功"}),t.isProcessing=!1,t.text="",e.next=22;break;case 17:e.prev=17,e.t0=e["catch"](0),console.error(e.t0.message),t.isProcessing=!1,l["a"].fire({icon:"error",title:"無法新增評論，請稍後再試"});case 22:case"end":return e.stop()}}),e,null,[[0,17]])})))()}}}),I=j,D=(r("6d62"),Object(p["a"])(I,O,R,!1,null,"0ecaa8c3",null)),P=D.exports,L=r("c4c3"),F={components:{RestaurantDetail:b,RestaurantComments:y,CreateComment:P},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[],computed:Object(i["a"])({},Object(x["b"])(["currentUser"]))}},beforeRouteUpdate:function(t,e,r){var a=t.params.id;this.fetchRestaurant(a),r()},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},methods:{fetchRestaurant:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,i,o,c,u,d,m,p,f,b,v,g;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,L["a"].getRestaurant({restaurantId:t});case 3:a=r.sent,n=a.data,s=n.restaurant,i=n.isFavorited,o=n.isLiked,c=s.id,u=s.name,d=s.Category,m=s.image,p=s.opening_hours,f=s.tel,b=s.address,v=s.description,g=s.Comments,e.restaurant={id:c,name:u,categoryName:d?d.name:"未分類",image:m,openingHours:p,tel:f,address:b,description:v,isFavorited:i,isLiked:o},e.restaurantComments=g,r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),l["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()},afterDeleteComment:function(t){this.restaurantComments=this.restaurantComments.filter((function(e){return e.id!==t}))},afterCreateComment:function(t){var e=t.commentId,r=t.restaurantId,a=t.text;this.restaurantComments.push({id:e,RestaurantId:r,User:{id:this.currentUser.id,name:this.currentUser.name},text:a,createdAt:new Date})}}},S=F,E=Object(p["a"])(S,a,n,!1,null,null,null);e["default"]=E.exports},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("5135"),o=r("861d"),c=r("9bf2").f,u=r("e893"),l=s.Symbol;if(n&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(m,l);var p=m.prototype=l.prototype;p.constructor=m;var f=p.toString,b="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=f.call(t);if(i(d,t))return"";var r=b?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:m})}},e493:function(t,e,r){},fc76:function(t,e,r){"use strict";r("2e33")}}]);
//# sourceMappingURL=chunk-34e886ca.8aa5609f.js.map