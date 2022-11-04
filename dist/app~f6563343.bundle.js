(()=>{"use strict";var n,A={510:(n,A,e)=>{e.d(A,{YF:()=>i,ci:()=>o,ty:()=>r,yK:()=>a});var t=e(961),i=function(n){return'\n  <h2 class="restaurant__title">'.concat(n.name,'</h2>\n  <img class="restaurant__poster" src="').concat(t.Z.BASE_IMAGE_URL_LARGE+n.pictureId,'" alt="').concat(n.name,'" />\n  <div class="restaurant__info">\n    <h3>Information</h3>\n    <h4>City</h4>\n    <p>').concat(n.city,"</p>\n    <h4>Address</h4>\n    <p>").concat(n.address,'</p>\n    <h4><i class="fa fa-star"></i>Rating</h4>\n    <p>').concat(n.rating,'</p>\n  </div>\n  <div class="restaurant__description">\n    <h3>Overview</h3>\n    <p>').concat(n.description,"</p>\n  </div>\n  <h4>Foods Menu</h4>\n    <p>").concat(n.menus.foods.map((function(n){return n.name})),"</p>\n  <h4>Drinks Menu</h4>\n    <p>").concat(n.menus.drinks.map((function(n){return n.name})),"</p>\n     ").concat(n.customerReviews.reduce((function(n,A){return n.concat('<br>\n      <div class="post-item">\n        <div class="post-content">\n          <p>'.concat(A.name,"</p>\n          <p>").concat(A.review,"</p>\n          <p>").concat(A.date,"</p>\n        </div>\n      </div>\n        "))}),"<h4>Customer Reviews:</h4>"),"\n")},a=function(n){return'\n    <article class="post-item">\n              <img class="post-thumbnail lazyload" \n                src="'.concat(n.pictureId?t.Z.BASE_IMAGE_URL_LARGE+n.pictureId:"https://picsum.photos/id/666/800/450?grayscale",'" \n                alt="Restaurant Pic">             \n              <div class="post-content">\n                <h1 class="resto-title">').concat(n.name,"</h1>\n                <p>").concat(n.city,'</p>\n                <p><i class="fa fa-star"></i>').concat(n.rating,'</p>\n                <a id="detailButton" href="/#/detail/').concat(n.id,'">\n                  <button class="button">Details</button>\n                </a>\n              </div>\n            </article>\n')},r=function(){return'\n  <button aria-label="like this restaurant" id="likeButton" class="like">\n     <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n'},o=function(){return'\n  <button aria-label="unlike this restaurant" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n'}},389:(n,A,e)=>{e.d(A,{Z:()=>o});var t=e(537),i=e.n(t),a=e(645),r=e.n(a)()(i());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);"]),r.push([n.id,"*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-size: 12px;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  min-width: 44px;\n  min-height: 44px;\n  background-color: #bf1722;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n \n.skip-link:focus {\n   top: 0;\n}\n\n.wrapper{\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 10px 70px;\n  width: 100%;\n  position: fixed;\n  column-gap: 30px;\n  top: 0;\n  background-color: rgba(255,255,255,0.5);\n  \n}\n\n.header-title{\n  font-size: 30px;\n  color: black;\n  width: 100%;\n  /* text-shadow: 0px 2px 14px #000000; */\n}\n\n#hamburger{\n  text-align: end;\n  width: 100%;\n  text-shadow: 0px 2px 14px #000000;\n}\n\nnav{\n  text-align: end;\n}\n\n.nav-item{\n  display:inline-block;\n  padding: 0px 40px;\n  text-align: end;\n  min-width: 44px;\n  min-height: 44px;\n  \n}\n\n.nav-item a{\n  padding: 12px;\n  min-width: 44px;\n  min-height: 44px;\n  color: black;\n}\n\nnav a, nav a:link{\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 18px;\n  \n  \n}\n\nnav a:hover{\n  color: aquamarine;\n  text-decoration: underline;\n\n}\nnav a:active{\n  color: black;\n  text-decoration: underline;\n}\n\n\n\n.hero{\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  object-fit: cover;\n  text-align: start;\n  align-items: center;\n  background-color: black;\n  background-image: url('./images/hero-image_2-large.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  \n}\n\n.hero-inner{\n  padding: 10px 70px;\n  color: white;\n  align-items: center;\n  width: 100%;\n}\n\n.hero-title{\n  font-size: 70px;\n  text-shadow: 0px 2px 14px #000000;\n}\n\n.hero-desc{\n  font-weight: 10px;\n  font-size: 25px;\n  text-shadow: 0px 2px 14px #000000;\n}\n\nmain{\n  width: 100%;\n  margin: 0 auto;\n  \n}\n\n.list-post{\n  padding: 70px 0px;\n  \n}\n\n.list-label{\n  text-align: center;\n  font-size: 30px;\n  padding-bottom: 8px;\n  background-color: aquamarine;\n\n}\n\n.underline{\n    width: 80px;\n    height: 5px;\n    background-color: #979797;\n    margin: 5px auto;\n}\n\n.list-wrapper{\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: auto;\n  padding: 30px 70px;\n  row-gap: 40px;\n  column-gap: 20px;\n}\n\n.post-item{\n  border-radius: 8px;\n  box-shadow: 0 4px 12px 0 #000000  ;\n}\n\n.post-thumbnail{\n  object-fit: cover;\n  border-radius: 8px;\n  width: 100%;\n  max-height: 200px;\n  min-height: 200px;\n}\n\n.post-content{\n  text-align: left;\n  padding: 10px 20px;\n  font-size: larger;\n}\n\n.restaurant {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n \n.restaurant .restaurant__poster {\n  width: 100%;\n  max-width: 400px;\n  \n}\n \n.restaurant .restaurant__info h4 {\n  margin: 8px 0;\n}\n\n.button {\n  background-color: aquamarine; /* Green */\n  border: none;\n  color: #000000;\n  padding: 15px 32px;\n  text-align: center;\n  width: 100%;\n  border-radius: 8px;\n  text-decoration: none;\n  font-size: 14px;\n  align-items: center;\n  font-weight: 500px;\n  margin-top: 18px;\n  margin-bottom: 18px;\n  cursor: pointer;\n  -webkit-transition-duration: 0.4s; /* Safari */\n  transition-duration: 0.4s;\n}\n\n.button:hover{\n  background-color: rgb(77, 218, 171);\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\ni{\n  margin-right: 5px;\n  color: orange;\n}\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\nfooter{\n    padding: 20px;\n    color: black;\n    background-color: #7fffd4;\n    text-align: center;\n    font-weight: bold;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n}\n\n@media screen and (min-width:320px) {\n    .list-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n    row-gap: 30px;\n    }\n    .hero{\n      background-image: url('./images/hero-image_2-small.jpg');\n    }\n    .wrapper{\n      padding: 10px 30px;\n    }\n    .header-title{\n    font-size: 20px;\n    }\n    .hero-title{\n    font-size: 30px;\n    }\n    .hero-desc{\n    font-size: 20px;\n    }\n    .restaurant {\n      padding: 10px 30px;\n    }\n}\n\n@media screen and (min-width:700px) {\n  .list-wrapper {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    row-gap: 30px;\n    }\n    .wrapper{\n      padding: 10px 40px;\n    }\n    .header-title{\n    font-size: 30px;\n    }\n    .hero-title{\n    font-size: 50px;\n    }\n    .hero-desc{\n    font-size: 25px;\n    }\n}\n\n    @media screen and (max-width:720px) {\n    #drawer {\n      width: 250px;\n      position: absolute;\n      top: 0;\n      right: 0;\n      border-radius: 8px;\n      transform: translate(250px, 0);\n      transition: transform 0.3s ease-in-out;\n      background-color: aquamarine;\n    }  \n\n    #drawer.open {\n      transform: translate(0,0)\n    }\n\n    #hamburger {\n      font-size: 32px;\n      text-decoration: none;\n      color: white;\n    }\n}\n\n @media screen and (min-width:720px) {\n    #hamburger{\n      display: none;\n    }\n    .hero{\n      background-image: url('./images/hero-image_2-medium.jpg');\n    }\n    .nav-item{\n      padding: 0px 2px;\n    }\n}\n\n@media screen and (min-width:1000px) {\n  .list-wrapper {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    row-gap: 30px;\n    }\n    .hero{\n      background-image: url('./images/hero-image_2-large.jpg');\n    }\n    .wrapper{\n      padding: 10px 70px;\n    }\n    .header-title{\n    font-size: 30px;\n    }\n    .nav-item{\n      padding: 0px 20px;\n    }\n    .hero-title{\n    font-size: 70px;\n    }\n    .hero-desc{\n    font-size: 25px;\n    }\n    #hamburger {\n      display: none;\n    }\n}\n\n@media screen and (min-width:1100px) {\n  .list-wrapper {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    row-gap: 30px;\n    }\n    .nav-item{\n      padding: 0px 20px;\n    }\n   \n    \n  \n}\n\n\n\n\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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;IACpB;IACA;IACA,eAAe;IACf;IACA;IACA,eAAe;IACf;IACA;IACA,eAAe;IACf;AACJ;;IAEI;IACA;MACE,YAAY;MACZ,kBAAkB;MAClB,MAAM;MACN,QAAQ;MACR,kBAAkB;MAClB,8BAA8B;MAC9B,sCAAsC;MACtC,4BAA4B;IAC9B;;IAEA;MACE;IACF;;IAEA;MACE,eAAe;MACf,qBAAqB;MACrB,YAAY;IACd;AACJ;;CAEC;IACG;MACE,aAAa;IACf;IACA;MACE,yDAAyD;IAC3D;IACA;MACE,gBAAgB;IAClB;AACJ;;AAEA;EACE;IACE,aAAa;IACb,qCAAqC;IACrC,aAAa;IACb;IACA;MACE,wDAAwD;IAC1D;IACA;MACE,kBAAkB;IACpB;IACA;IACA,eAAe;IACf;IACA;MACE,iBAAiB;IACnB;IACA;IACA,eAAe;IACf;IACA;IACA,eAAe;IACf;IACA;MACE,aAAa;IACf;AACJ;;AAEA;EACE;IACE,aAAa;IACb,qCAAqC;IACrC,aAAa;IACb;IACA;MACE,iBAAiB;IACnB;;;;AAIJ",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');\n\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-size: 12px;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  min-width: 44px;\n  min-height: 44px;\n  background-color: #bf1722;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n \n.skip-link:focus {\n   top: 0;\n}\n\n.wrapper{\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 10px 70px;\n  width: 100%;\n  position: fixed;\n  column-gap: 30px;\n  top: 0;\n  background-color: rgba(255,255,255,0.5);\n  \n}\n\n.header-title{\n  font-size: 30px;\n  color: black;\n  width: 100%;\n  /* text-shadow: 0px 2px 14px #000000; */\n}\n\n#hamburger{\n  text-align: end;\n  width: 100%;\n  text-shadow: 0px 2px 14px #000000;\n}\n\nnav{\n  text-align: end;\n}\n\n.nav-item{\n  display:inline-block;\n  padding: 0px 40px;\n  text-align: end;\n  min-width: 44px;\n  min-height: 44px;\n  \n}\n\n.nav-item a{\n  padding: 12px;\n  min-width: 44px;\n  min-height: 44px;\n  color: black;\n}\n\nnav a, nav a:link{\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 18px;\n  \n  \n}\n\nnav a:hover{\n  color: aquamarine;\n  text-decoration: underline;\n\n}\nnav a:active{\n  color: black;\n  text-decoration: underline;\n}\n\n\n\n.hero{\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  object-fit: cover;\n  text-align: start;\n  align-items: center;\n  background-color: black;\n  background-image: url('./images/hero-image_2-large.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  \n}\n\n.hero-inner{\n  padding: 10px 70px;\n  color: white;\n  align-items: center;\n  width: 100%;\n}\n\n.hero-title{\n  font-size: 70px;\n  text-shadow: 0px 2px 14px #000000;\n}\n\n.hero-desc{\n  font-weight: 10px;\n  font-size: 25px;\n  text-shadow: 0px 2px 14px #000000;\n}\n\nmain{\n  width: 100%;\n  margin: 0 auto;\n  \n}\n\n.list-post{\n  padding: 70px 0px;\n  \n}\n\n.list-label{\n  text-align: center;\n  font-size: 30px;\n  padding-bottom: 8px;\n  background-color: aquamarine;\n\n}\n\n.underline{\n    width: 80px;\n    height: 5px;\n    background-color: #979797;\n    margin: 5px auto;\n}\n\n.list-wrapper{\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: auto;\n  padding: 30px 70px;\n  row-gap: 40px;\n  column-gap: 20px;\n}\n\n.post-item{\n  border-radius: 8px;\n  box-shadow: 0 4px 12px 0 #000000  ;\n}\n\n.post-thumbnail{\n  object-fit: cover;\n  border-radius: 8px;\n  width: 100%;\n  max-height: 200px;\n  min-height: 200px;\n}\n\n.post-content{\n  text-align: left;\n  padding: 10px 20px;\n  font-size: larger;\n}\n\n.restaurant {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n \n.restaurant .restaurant__poster {\n  width: 100%;\n  max-width: 400px;\n  \n}\n \n.restaurant .restaurant__info h4 {\n  margin: 8px 0;\n}\n\n.button {\n  background-color: aquamarine; /* Green */\n  border: none;\n  color: #000000;\n  padding: 15px 32px;\n  text-align: center;\n  width: 100%;\n  border-radius: 8px;\n  text-decoration: none;\n  font-size: 14px;\n  align-items: center;\n  font-weight: 500px;\n  margin-top: 18px;\n  margin-bottom: 18px;\n  cursor: pointer;\n  -webkit-transition-duration: 0.4s; /* Safari */\n  transition-duration: 0.4s;\n}\n\n.button:hover{\n  background-color: rgb(77, 218, 171);\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\ni{\n  margin-right: 5px;\n  color: orange;\n}\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\nfooter{\n    padding: 20px;\n    color: black;\n    background-color: #7fffd4;\n    text-align: center;\n    font-weight: bold;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n}\n\n@media screen and (min-width:320px) {\n    .list-wrapper {\n    display: grid;\n    grid-template-columns: 1fr;\n    row-gap: 30px;\n    }\n    .hero{\n      background-image: url('./images/hero-image_2-small.jpg');\n    }\n    .wrapper{\n      padding: 10px 30px;\n    }\n    .header-title{\n    font-size: 20px;\n    }\n    .hero-title{\n    font-size: 30px;\n    }\n    .hero-desc{\n    font-size: 20px;\n    }\n    .restaurant {\n      padding: 10px 30px;\n    }\n}\n\n@media screen and (min-width:700px) {\n  .list-wrapper {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    row-gap: 30px;\n    }\n    .wrapper{\n      padding: 10px 40px;\n    }\n    .header-title{\n    font-size: 30px;\n    }\n    .hero-title{\n    font-size: 50px;\n    }\n    .hero-desc{\n    font-size: 25px;\n    }\n}\n\n    @media screen and (max-width:720px) {\n    #drawer {\n      width: 250px;\n      position: absolute;\n      top: 0;\n      right: 0;\n      border-radius: 8px;\n      transform: translate(250px, 0);\n      transition: transform 0.3s ease-in-out;\n      background-color: aquamarine;\n    }  \n\n    #drawer.open {\n      transform: translate(0,0)\n    }\n\n    #hamburger {\n      font-size: 32px;\n      text-decoration: none;\n      color: white;\n    }\n}\n\n @media screen and (min-width:720px) {\n    #hamburger{\n      display: none;\n    }\n    .hero{\n      background-image: url('./images/hero-image_2-medium.jpg');\n    }\n    .nav-item{\n      padding: 0px 2px;\n    }\n}\n\n@media screen and (min-width:1000px) {\n  .list-wrapper {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    row-gap: 30px;\n    }\n    .hero{\n      background-image: url('./images/hero-image_2-large.jpg');\n    }\n    .wrapper{\n      padding: 10px 70px;\n    }\n    .header-title{\n    font-size: 30px;\n    }\n    .nav-item{\n      padding: 0px 20px;\n    }\n    .hero-title{\n    font-size: 70px;\n    }\n    .hero-desc{\n    font-size: 25px;\n    }\n    #hamburger {\n      display: none;\n    }\n}\n\n@media screen and (min-width:1100px) {\n  .list-wrapper {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    row-gap: 30px;\n    }\n    .nav-item{\n      padding: 0px 20px;\n    }\n   \n    \n  \n}\n\n\n\n\n"],sourceRoot:""}]);const o=r},15:(n,A,e)=>{var t=e(379),i=e.n(t),a=e(795),r=e.n(a),o=e(569),p=e.n(o),d=e(565),s=e.n(d),C=e(216),l=e.n(C),g=e(589),x=e.n(g),c=e(389),E={};E.styleTagTransform=x(),E.setAttributes=s(),E.insert=p().bind(null,"head"),E.domAPI=r(),E.insertStyleElement=l(),i()(c.Z,E),c.Z&&c.Z.locals&&c.Z.locals}},e={};function t(n){var i=e[n];if(void 0!==i)return i.exports;var a=e[n]={id:n,exports:{}};return A[n](a,a.exports,t),a.exports}t.m=A,n=[],t.O=(A,e,i,a)=>{if(!e){var r=1/0;for(s=0;s<n.length;s++){for(var[e,i,a]=n[s],o=!0,p=0;p<e.length;p++)(!1&a||r>=a)&&Object.keys(t.O).every((n=>t.O[n](e[p])))?e.splice(p--,1):(o=!1,a<r&&(r=a));if(o){n.splice(s--,1);var d=i();void 0!==d&&(A=d)}}return A}a=a||0;for(var s=n.length;s>0&&n[s-1][2]>a;s--)n[s]=n[s-1];n[s]=[e,i,a]},t.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return t.d(A,{a:A}),A},t.d=(n,A)=>{for(var e in A)t.o(A,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:A[e]})},t.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n={535:0};t.O.j=A=>0===n[A];var A=(A,e)=>{var i,a,[r,o,p]=e,d=0;if(r.some((A=>0!==n[A]))){for(i in o)t.o(o,i)&&(t.m[i]=o[i]);if(p)var s=p(t)}for(A&&A(e);d<r.length;d++)a=r[d],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(s)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),t.nc=void 0;var i=t.O(void 0,[946,2,135,337,268],(()=>t(253)));i=t.O(i)})();
//# sourceMappingURL=app~f6563343.bundle.js.map