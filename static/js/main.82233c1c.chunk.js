(this.webpackJsonpcodeformentalhealth=this.webpackJsonpcodeformentalhealth||[]).push([[0],{25:function(e,t,n){e.exports=n(46)},30:function(e,t,n){},31:function(e,t,n){},39:function(e,t,n){var a={"./BarryP.json":40,"./MattK.json":41,"./RT.json":42};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=39},40:function(e){e.exports=JSON.parse('{"name":"Anon/Test XYZ","job":"Software Engineer","employerCurrent":"Just Eat","employerPrev":["IBM","Costa Coffee","Strafe Creative"],"industry":"E-Commerce","summary":"Mental health effects us all, both directly and indirectly. Let\'s break down the stigma and get the tech community talking about mental health.","detailed":"more details here","experience":"X Y Z","socials":["https://www.linkedin.com/in/matthew-kempa/","https://www.facebook.com/matthew.kempa","https://twitter.com/MatthewKempa","https://github.com/Matthewk35"]}')},41:function(e){e.exports=JSON.parse('{"name":"Anon/Mattk35","job":"Software Engineer","employerCurrent":"Just Eat","employerPrev":["IBM","Costa Coffee","Strafe Creative"],"industry":"E-Commerce","summary":"Mental health effects us all, both directly and indirectly. Let\'s break down the stigma and get the tech community talking about mental health.","detailed":"more details here","experience":"X Y Z","socials":["https://www.linkedin.com/in/matthew-kempa/","https://www.facebook.com/matthew.kempa","https://twitter.com/MatthewKempa","https://github.com/Matthewk35","https://open.spotify.com/artist/5mWoKfsbD0gkZfUmbMuh6e","https://soundcloud.com/user-87586498"]}')},42:function(e){e.exports=JSON.parse('{"name":"Anon/Test ABC","job":"Software Engineer","employerCurrent":"Just Eat","employerPrev":["IBM","Costa Coffee","Strafe Creative"],"industry":"E-Commerce","summary":"Mental health effects us all, both directly and indirectly. Let\'s break down the stigma and get the tech community talking about mental health.","detailed":"more details here","experience":"X Y Z","socials":["https://www.linkedin.com/in/matthew-kempa/","https://www.facebook.com/matthew.kempa","https://twitter.com/MatthewKempa","https://github.com/Matthewk35"]}')},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),l=(n(30),n(31),n(22)),i=n(11),s=n(6),m=n(7),u=n(9),h=n(8),p=n(10);var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Code For Mental Health"),r.a.createElement("h2",null,"Half of tech professionals in the UK (+600,000) have been concerned about their state of mental health due to work"),r.a.createElement("a",{href:"https://www.harveynash.co.uk/latest-news/2019-10/uk-tech-needs-a-mental-health-check"},r.a.createElement("h6",null,"- Harvey Nash")))};function f(e){return a.createElement("div",{className:"contributionsSingleSpeech boxShadowStandard",style:{order:e.order}},a.createElement("h6",null,e.summary))}var b=n(21);function w(e){return a.createElement("div",null,a.createElement("h3",null,e.name),a.createElement("p",null,e.job," @ ",e.employerCurrent),a.createElement("p",null,e.employerPrev.map((function(e){return a.createElement("span",{className:"prevRoleItem"},e)}))),a.createElement("div",null,e.socials.map((function(e){return a.createElement(b.SocialIcon,{url:e})}))))}function y(e){var t=e.contribution,n=e.order;if(t){var r=t.summary,o=t.name,c=t.job,l=t.employerCurrent,i=t.employerPrev,s=t.socials;return a.createElement("div",{className:"contributionsSingle"},a.createElement(f,{summary:r,order:n}),a.createElement(w,{name:o,job:c,employerCurrent:l,employerPrev:i,socials:s}))}}var v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={contributions:null},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.loadJson();this.setState({contributions:e})}},{key:"getFileNameOnly",value:function(e){return e.split("/").pop().split(".").shift()}},{key:"loadJson",value:function(){var e=this,t=n(39),a={};return t.keys().forEach((function(n){var r=t(n),o=e.getFileNameOnly(n);a[o]=r})),a}},{key:"render",value:function(){var e=this.state.contributions;return e?a.createElement("div",{className:"contributionsContainer"},Object.keys(e).map((function(t,n){return a.createElement(y,{key:n,order:Math.floor(1e3*Math.random()),contribution:e[t]})}))):a.createElement("h1",null,"Loading...")}}]),t}(a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"App"},a.createElement(d,null),a.createElement(v,null))}}]),t}(a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"App"},a.createElement(d,null),a.createElement("p",null,"How to contribute"))}}]),t}(a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"App"},a.createElement(d,null),a.createElement("p",null,"Getting help"))}}]),t}(a.Component);var O=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:E}),r.a.createElement(i.a,{path:"/contribute",component:k}),r.a.createElement(i.a,{path:"/help",component:j}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.82233c1c.chunk.js.map