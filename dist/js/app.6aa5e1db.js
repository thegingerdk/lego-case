(function(e){function t(t){for(var a,i,c=t[0],s=t[1],u=t[2],d=0,p=[];d<c.length;d++)i=c[d],n[i]&&p.push(n[i][0]),n[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var s=r[i];0!==n[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d2102cc":"9dbd4a6c"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,a){r=n[e]=[t,a]});t.push(r[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e),o=function(t){s.onerror=s.onload=null,clearTimeout(u);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,r[1](i)}n[e]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"020d":function(e,t,r){"use strict";var a=r("a385"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d"),r("6597");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"navbar-brand"},[r("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[e._v("The "),r("b",[e._v("Put Stuff In Cart")]),e._v(" Shop")])],1),r("div",{staticClass:"navbar-end"},[r("cart")],1)]),r("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[r("a",{staticClass:"navbar-item"},[r("b",{domProps:{textContent:e._s(e.cart.quantity)}}),e._v(" items in cart\n    ")]),r("div",{staticClass:"navbar-dropdown is-right"},[0!==e.cart.quantity?r("div",e._l(e.cart.products,function(e,t){return r("cart-item",{key:t,attrs:{product:e}})}),1):r("div",{staticClass:"navbar-item"},[e._v("You have not put anything in the cart yet!")]),r("hr",{staticClass:"navbar-divider"}),r("div",{staticClass:"navbar-item"},[e._v("Total: "),r("b",{domProps:{textContent:e._s(e.cart.total)}}),e._v(" kr")])])])},c=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),u=r("2f62"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navbar-item is-grid"},[r("div",[r("a",{staticClass:"delete is-small is-danger",on:{click:function(t){return t.preventDefault(),e.removeProduct(t)}}})]),r("div",[e._v("\n        "+e._s(e.product.name)+"\n    ")]),r("div",{staticClass:"tags has-addons last"},[r("a",{staticClass:"tag is-light",on:{click:function(t){return t.preventDefault(),e.updateQuantity("sub")}}},[r("fa",{attrs:{icon:"chevron-left"}})],1),r("span",{staticClass:"tag is-white"},[e._v(e._s(e.product.quantity))]),r("a",{staticClass:"tag is-light",on:{click:function(t){return t.preventDefault(),e.updateQuantity("add")}}},[r("fa",{attrs:{icon:"chevron-right"}})],1)])])},l=[],p={name:"CartItem",props:{product:{required:!0,type:Object}},methods:{removeProduct:function(){this.$store.dispatch("removeProduct",this.product.id)},updateQuantity:function(e){this.$store.dispatch("updateQuantity",{id:this.product.id,type:e})}}},f=p,v=(r("fde3"),r("2877")),m=Object(v["a"])(f,d,l,!1,null,"50771f07",null),b=m.exports;function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach(function(t){Object(s["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={name:"Cart",components:{CartItem:b},computed:_({},Object(u["b"])(["cart"]))},y=h,O=(r("e9b4"),Object(v["a"])(y,i,c,!1,null,"76e2c0f8",null)),k=O.exports,j={name:"app",components:{cart:k}},w=j,P=(r("5c0b"),Object(v["a"])(w,n,o,!1,null,null,null)),C=P.exports,T=r("ecee"),x=r("c074"),S=r("ad3d"),D=r("8c4f"),F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"home section"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"grid"},e._l(e.products,function(e){return r("product",{key:e.id,attrs:{product:e}})}),1)])])},q=[],E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"product card",on:{click:e.addToCart}},[r("header",{staticClass:"card-image"},[r("figure",{staticClass:"image"},[r("img",{attrs:{src:e.image,alt:"Placeholder image"}})])]),r("section",{staticClass:"card-content"},[r("div",{staticClass:"media"},[r("div",{staticClass:"media-content"},[r("p",{staticClass:"subtitle",domProps:{textContent:e._s(e.product.vendor)}}),r("p",{staticClass:"title",domProps:{textContent:e._s(e.product.name)}})])]),r("button",{staticClass:"add-button"},[r("fa",{attrs:{icon:"cart-plus"}})],1),r("div",{staticClass:"content"},[r("b",{domProps:{textContent:e._s(e.product.price)}}),e._v(" kr.\n        ")])])])},$=[],Q={name:"Product",props:{product:{required:!0,type:Object}},computed:{image:function(){return"/img/products/".concat(this.product.image)}},methods:{addToCart:function(){this.$store.dispatch("addToCart",this.product)}}},A=Q,M=(r("020d"),Object(v["a"])(A,E,$,!1,null,"b8221b74",null)),R=M.exports;function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(r,!0).forEach(function(t){Object(s["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var K={name:"home",components:{Product:R},computed:J({},Object(u["b"])(["products"]))},L=K,Z=(r("a3ae"),Object(v["a"])(L,F,q,!1,null,"6aaf04fe",null)),B=Z.exports;a["a"].use(D["a"]);var G=new D["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:B},{path:"/cart",name:"cart",component:function(){return r.e("chunk-2d2102cc").then(r.bind(null,"b789"))}}]}),I=r("89a8");function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(r,!0).forEach(function(t){Object(s["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}a["a"].use(u["a"]);var N=new u["a"].Store({state:{products:I,cart:{products:[],quantity:0,total:0},indexOfProduct:function(e,t){return e.cart.products.map(function(e){return e.id}).indexOf(t)}},getters:{products:function(e){return e.products.data},cart:function(e){return e.cart}},mutations:{addToCart:function(e,t){var r=e.indexOfProduct(e,t.id);if(-1===r)e.cart.products.push(H({},t,{quantity:1,total:t.price}));else{var a=++e.cart.products[r].quantity;e.cart.products[r].total=t.price*a}},removeFromCart:function(e,t){var r=e.indexOfProduct(e,t);e.cart.products.splice(r,1)},updateQuantity:function(e,t){var r=t.id,a=t.type,n=e.indexOfProduct(e,r),o="add"===a?++e.cart.products[n].quantity:--e.cart.products[n].quantity;0===o?e.cart.products.splice(n,1):e.cart.products[n].total=e.cart.products[n].price*o},updateCart:function(e){e.cart.quantity=e.cart.products.reduce(function(e,t){return e+t.quantity},0),e.cart.total=e.cart.products.reduce(function(e,t){return e+t.total},0)}},actions:{addToCart:function(e,t){var r=e.commit;r("addToCart",t),r("updateCart")},removeProduct:function(e,t){var r=e.commit;r("removeFromCart",t),r("updateCart")},updateQuantity:function(e,t){var r=e.commit,a=t.id,n=t.type;r("updateQuantity",{id:a,type:n}),r("updateCart")}}});T["c"].add(x["b"]),T["c"].add(x["c"]),T["c"].add(x["d"]),T["c"].add(x["e"]),T["c"].add(x["a"]),a["a"].component("fa",S["a"]),a["a"].config.productionTip=!1,new a["a"]({router:G,store:N,render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var a=r("e332"),n=r.n(a);n.a},"89a8":function(e){e.exports={data:[{id:1,categories:["trousers","clothing","male"],vendor:"Fjällräven",name:"Abisko Trekking Tights",image:"594a2adb386e7Abisko_Trekking_Tights_Black_81506-550.webp",price:1399},{id:2,categories:["trousers","clothing","male"],vendor:"Fjällräven",name:"Keb Trousers Long herrebukser",image:"keb_trousers_m_85656-550_black-a_main.webp",price:1799},{id:3,categories:["trousers","clothing","male"],vendor:"Fjällräven",name:"Vidda Pro Trousers Regular",image:"5652ee0a1005cVidda_Pro_Trousers_Regular_81760R-black-black-550-550.webp",price:1299},{id:4,categories:["trousers","clothing","male"],vendor:"Fjällräven",name:"Traveller Zip-Off Trousers Men",image:"travellers_zip_off_trousers_dark_grey_81537-030.webp",price:1299},{id:5,categories:["trousers","clothing","male"],vendor:"Fjällräven",name:"Karl Pro Zip-off Trousers",image:"594a7954503b0Karl_Pro_Zip_Off_Trousers_81463-030_darkgrey.webp",price:1299},{id:6,categories:["trousers","clothing","male"],vendor:"Fjällräven",name:"Abisko Lite Trekking Zip-Off Trousers Regular herrebukser",image:"5887507612aeeabisko_lite_trekking_zipoff_trousers_Sand_Tarmac_81535R-220-246.webp",price:1599},{id:7,categories:["shirt","clothing","female"],vendor:"Fjällräven",name:"Keb Wool T-shirt LS Women damebluse",image:"keb_wool_t-shirt_ls_w_89753-550_black_1_1.jpg",price:999},{id:8,categories:["jacket","clothing","female"],vendor:"Fjällräven",name:"Anorak No.8",image:"anorak_no8_dark-grey-83242-030.webp",price:3699},{id:9,categories:["jacket","clothing","female"],vendor:"Fjällräven",name:"Övik Fleece Hoodie herrefleece",image:"558804ea0c519Ovik_Fleece_Hoodie_82252-030_Dark-Grey.webp",price:1299},{id:10,categories:["shirt","clothing","female"],vendor:"Fjällräven",name:"Bergtagen Woolmesh Sweater undertrøje",image:"5947d6ab71a54Bergtagen_Woolnet_Sweater_83989-020_grey_front.webp",price:1199},{id:11,categories:["jacket","clothing","female"],vendor:"Fjällräven",name:"Drev Jacket herrejakke",image:"5270d839c1752Drev-Jacket_Dark-Olive_90333_633_1.webp",price:2899},{id:12,categories:["jacket","clothing","female"],vendor:"Fjällräven",name:"Singi Anorak herrejakke",image:"singi_anorak_storm_dark_navy_82248-555.webp",price:2199},{id:13,categories:["accessories","male","female"],vendor:"Fjällräven",name:"Greenland Wax voks",image:"5231677430c90Greenland-Wax_79060-000_1.webp",price:69},{id:14,categories:["trousers","skirts","clothing","female"],vendor:"Fjällräven",name:"Övik Travel Skirt skort",image:"_vik_travel_skirt_w_89844-555_darl_navy (1).webp",price:1099},{id:15,categories:["bags","male","female"],vendor:"Fjällräven",name:"Rucksack No.21 Medium rygsæk",image:"rucksack-no21-medium_navy_24205-560_1.webp",price:1499}]}},"8dd4":function(e,t,r){},a385:function(e,t,r){},a3ae:function(e,t,r){"use strict";var a=r("bede"),n=r.n(a);n.a},bede:function(e,t,r){},e332:function(e,t,r){},e9b4:function(e,t,r){"use strict";var a=r("f064"),n=r.n(a);n.a},f064:function(e,t,r){},fde3:function(e,t,r){"use strict";var a=r("8dd4"),n=r.n(a);n.a}});
//# sourceMappingURL=app.6aa5e1db.js.map