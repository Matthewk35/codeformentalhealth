(this.webpackJsonpcodeformentalhealth=this.webpackJsonpcodeformentalhealth||[]).push([[0],{25:function(e,t,n){e.exports=n(45)},30:function(e,t,n){},41:function(e,t,n){var a={"./Profile_MatthewKempa.jpg":42};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=41},42:function(e,t,n){e.exports=n.p+"static/media/Profile_MatthewKempa.ec274589.jpg"},43:function(e,t,n){var a={"./MattKempa.json":44};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=43},44:function(e){e.exports=JSON.parse('{"name":"Matt Kempa","image":"Profile_MatthewKempa.jpg","job":"Software Engineer","employerCurrent":"Just Eat","employerPrev":["IBM","Strafe Creative"],"industry":"E-Commerce","summary":"I created this site as mental health effects us all, both directly and indirectly. I really hope people will contribute their ideas, experience and code. Let\'s break down the stigma and get the tech community talking about mental health.","details":"Field not enabled yet, and optional - Could be simply a story about how mental health impacts your life, things that help you etc.","socials":["https://www.linkedin.com/in/matthew-kempa/","https://www.facebook.com/matthew.kempa","https://twitter.com/MatthewKempa","https://github.com/Matthewk35","https://open.spotify.com/artist/5mWoKfsbD0gkZfUmbMuh6e","https://soundcloud.com/user-87586498"]}')},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),l=n.n(o),i=(n(30),n(13)),s=n(11),c=n(2),u=n(3),m=n(5),h=n(4),p=n(6),d={help:{link:"/help",title:"Getting help"},home:{link:"/",title:"Home"},contribute:{link:"/contribute",title:"How to contribute"}};var f=function(){return r.a.createElement("section",{className:"App"},r.a.createElement("div",{style:{backgroundColor:"red",color:"#fff",padding:20}},r.a.createElement("h4",null,"Trigger Warning:"),r.a.createElement("p",null,"Content on this website contains information and discussions of mental illness and mental health crisis which some readers may find triggering. If you require support at any time, please call Samaritans for free on 116 123 or visit the ",r.a.createElement("a",{style:{color:"#fff"},href:"https://www.samaritans.org/how-we-can-help/contact-samaritan/"},"Samaritans getting help site"),".")),r.a.createElement("h1",null,"Code For Mental Health"),r.a.createElement("h2",null,"An community-driven, open-source, mental health safe-space"),r.a.createElement("div",{className:"header_navigation-links"},Object.values(d).map((function(e){return r.a.createElement(i.b,{to:e.link},e.title)}))))};function b(e){return a.createElement("div",{className:"contributions_speechBubble-contributionsSingleSpeech boxShadowStandard"},a.createElement("h6",null,e.summary))}var y=n(24);function g(e){return a.createElement("div",null,a.createElement("div",{className:"profile_personalDetails"},e.image&&a.createElement("div",{className:"profile_personalDetails-imageWrapper"},a.createElement("img",{className:"profile_personalDetails-image",alt:"profile",src:n(41)("./".concat(e.image))})),a.createElement("div",null,a.createElement("h3",null,e.name),a.createElement("p",null,e.job," @ ",e.employerCurrent),a.createElement("p",null,e.employerPrev&&e.employerPrev.map((function(e){return a.createElement("span",{className:"profile_personalDetails-prevRoleItem"},e)}))))),a.createElement("div",{className:"profile_personalDetails-socialsWrapper"},e.socials&&e.socials.map((function(e){return a.createElement(y.SocialIcon,{url:e,target:"_blank",rel:"noopener noreferrer"})}))))}function E(e){var t=e.contribution,n=e.order;if(!t)return a.createElement(a.Fragment,null);var r=t.summary,o=t.name,l=t.job,i=t.employerCurrent,s=t.employerPrev,c=t.socials,u=t.image;return a.createElement("div",{className:"contributions_contributionsSingle",style:{order:n}},a.createElement(b,{summary:r}),a.createElement(g,{image:u,name:o,job:l,employerCurrent:i,employerPrev:s,socials:c}))}function w(e){var t=e.title,n=e.desc;return r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n))}var v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={contributions:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.loadJson();this.setState({contributions:e})}},{key:"getFileNameOnly",value:function(e){return e.split("/").pop().split(".").shift()}},{key:"loadJson",value:function(){var e=this,t=n(43),a={};return t.keys().forEach((function(n){var r=t(n),o=e.getFileNameOnly(n);a[o]=r})),a}},{key:"render",value:function(){var e=this.state.contributions;return e?a.createElement("section",null,a.createElement(w,{title:"Contributions from our community",desc:"Here are some contributions from our community"}),a.createElement("div",{className:"contributions_contributionsContainer"},Object.keys(e).map((function(t,n){return a.createElement(E,{key:n,order:Math.floor(1e3*Math.random()),contribution:e[t]})})))):a.createElement("h1",null,"Loading...")}}]),t}(a.Component);function k(e){var t=e.headline,n=e.desc,r=e.quote,o=e.quoteSource,l=e.quoteUrl;return t&&n?a.createElement("div",{className:"purpose_purposeList_single"},a.createElement("h4",null,t),r&&o&&l&&a.createElement("div",null,a.createElement("q",null,r),a.createElement("span",{className:"purposeSingle_quoteSource"},"- ",a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:l},o))),a.createElement("p",null,n)):a.createElement(a.Fragment,null)}var O=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement("section",{className:"purpose_section"},a.createElement(w,{title:"Our Purpose",desc:"We aim to create a safe space where programmers, techies, IT professionals, 'nerds' and generally anyone, can come and reflect, contribute and learn."}),a.createElement("p",null,"But, what do we mean by this?"),a.createElement("div",{className:"purpose_purposeList"},a.createElement(k,{headline:"Reflect",desc:"It's very easy to feel alone and isolated whilst struggling with mental health issues. We hope for CFMH can be used as a place to read and understand that you're far from alone, help is always available and it's not 'one size fits all'. There are many ways of dealing with mental health concerns. Hopefully you'll find some here.",quote:"Half of tech professionals in the UK (+600,000) have been concerned about their state of mental health due to work",quoteSource:"Harvey Nash",quoteUrl:"https://www.harveynash.co.uk/latest-news/2019-10/uk-tech-needs-a-mental-health-check"}),a.createElement(k,{headline:"Contribute",desc:"Share if you're ready, program if you're not. This site has been purposefully left rather basic. We'd love for all the content, design and techie features to be build by the community. Our guide on contributing both code and personal experiences can be found at the link below.",quote:"By talking about mental illness on a more regular basis, we as a society will hopefully unveil the false notions that plague this topic. When these myths are debunked, it should help remove the stigma surrounding mental health.",quoteSource:"Banyan Mental Health",quoteUrl:"https://www.banyanmentalhealth.com/2018/08/01/why-talking-about-mental-health-is-so-important/"}),a.createElement(k,{headline:"Learn",desc:"Understanding mental health issues can go a long way, whether it is understanding your own thoughts and feelings, or being able to empathise with a friend or colleagues. This site hopes to share knowledge on both cool React tricks and mental health management.",quote:"Research shows that learning new skills can also improve your mental wellbeing by: boosting self-confidence and raising self-esteem, helping you to build a sense of purpose, helping you to connect with others",quoteSource:"NHS",quoteUrl:"https://www.nhs.uk/conditions/stress-anxiety-depression/improve-mental-wellbeing/"})),a.createElement("p",null,"Let's talk about mental health"),a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/hashtag/talkaboutmentalhealth"},"#TalkAboutMentalHealth"))}}]),t}(a.Component);var j=function(){return r.a.createElement("section",null,r.a.createElement("h5",null,"Disclaimer: This website has not been built by mental health experts. We are simply a community who wish to share their experiences."),r.a.createElement("h5",null,"Please do reach out to the experts, there are some useful links over on the ",r.a.createElement("a",{href:d.help},"getting help page"),"."))},S=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"App"},a.createElement(f,null),a.createElement(O,null),a.createElement(v,null),a.createElement(j,null))}}]),t}(a.Component),C={submitCode:{title:"Submit Code",description:"Improve the site or make it do something cool.",example:"Any improvements or ideas you can think of! It can be as small as a CSS fix, or as large as a new page or feature. Ideas in the backlog: Per-country resources/support numbers, improve design, UX & responsiveness, ",examplePR:"https://github.com/Matthewk35/codeformentalhealth/pull/3"},submitCommunityContribution:{title:"Community Contribution",description:"Share your thoughts on mental health.",example:"Share your experience, what's your role? How does mental health impact you? How do you cope on a bad day?",examplePR:"https://github.com/Matthewk35/codeformentalhealth/pull/1"},submitHelpfulResource:{title:"Submit a resource",description:"List a helpful website, book or phone number.",example:"Found something particularly helpful or insightful? Share it with the community! Bonus points for different countries resources.",examplePR:"https://github.com/Matthewk35/codeformentalhealth/pull/2"}};function N(e){var t=e.title,n=e.example,r=e.description,o=e.examplePR;return t&&n&&r?a.createElement("div",{className:"contributeToSite_single"},a.createElement("h4",null,t),a.createElement("p",null,r),a.createElement("h6",null,n),a.createElement("a",{href:o},"See example PR")):a.createElement(a.Fragment,null)}var x=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement("section",null,a.createElement(w,{title:"How to contribute",desc:"This site is intended to be made by the tech community, for the tech community."}),a.createElement("p",null,"Simply raise a ",a.createElement("a",{href:"https://github.com/Matthewk35/codeformentalhealth/compare",target:"_blank",rel:"noopener noreferrer"},"pull request into master")," with any of the below!"),a.createElement("p",null,"Please note, that once a PR is raised/merged, it'll be in the commit history - if you want to contribute anonymously, please ",a.createElement("a",{href:"mailto:codeformentalhealth@gmail.com"},"email your contribution"),"."),a.createElement("div",{className:"contributions_contributionsContainer"},Object.values(C).map((function(e,t){return a.createElement(N,{key:t,title:e.title,description:e.description,example:e.example,examplePR:e.examplePR})}))))}}]),t}(a.Component),_=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"App"},a.createElement(f,null),a.createElement(x,null),a.createElement(j,null))}}]),t}(a.Component),M={samaritans:{title:"Samaritans",description:"Samaritans is a registered charity aimed at providing emotional support to anyone in emotional distress, struggling to cope, or at risk of suicide throughout the United Kingdom and Ireland, often through their telephone helpline.",link:"https://www.samaritans.org/how-we-can-help/contact-samaritan/"},minduk:{title:"Mind",description:"Mind provide advice and support to empower anyone experiencing a mental health problem. They campaign to improve services, raise awareness and promote understanding. They have outstanding resources and support available.",link:"https://www.mind.org.uk/"},everyMindMatters:{title:"Every Mind Matters (NHS)",description:"Expert advice and practical tips to help you look after your mental health and wellbeing from the NHS.",link:"https://www.nhs.uk/oneyou/every-mind-matters/"}};function P(e){var t=e.title,n=e.link,r=e.description;return t&&n&&r?a.createElement("div",{className:"contributions_contributionsSingle"},a.createElement("h4",null,t),a.createElement("p",null,r),a.createElement("a",{href:n},"Visit Site")):a.createElement(a.Fragment,null)}var H=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement("section",null,a.createElement(w,{title:"Getting help",desc:"Below are some useful links for some truly incredible resources and charities. These people are the experts, please use them."}),a.createElement("p",null,"Are we missing a resource? Have something to add? Something helped you previously?"),a.createElement("p",{style:{fontWeight:800}},"Please ",a.createElement(i.b,{to:d.contribute},"Contribute")),a.createElement("div",{className:"contributions_contributionsContainer"},Object.values(M).map((function(e){return a.createElement(P,{link:e.link,title:e.title,description:e.description})}))))}}]),t}(a.Component),q=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.createElement("div",{className:"App"},a.createElement(f,null),a.createElement(H,null),a.createElement(j,null))}}]),t}(a.Component);var T=function(){return r.a.createElement(i.a,{basename:"/"},r.a.createElement(s.a,{exact:!0,path:d.home.link,component:S}),r.a.createElement(s.a,{path:d.contribute.link,component:_}),r.a.createElement(s.a,{path:d.help.link,component:q}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.89426048.chunk.js.map