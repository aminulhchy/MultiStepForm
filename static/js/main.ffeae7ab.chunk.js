(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,a){e.exports=a(384)},190:function(e,t,a){},383:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),i=a.n(l),c=(a(190),a(184)),o=a(24),u=a(25),s=a(27),m=a(26),p=a(28),h=a(22),b=a.n(h),f=a(23),E=a.n(f),y=a(17),v=a.n(y),g=(a(55),a(36)),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Enter User Details"}),r.a.createElement(v.a,{hintText:"Enter Your First Name",floatingLabelText:"First Name",onChange:a("firstName"),defaultValue:t.firstName}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Your Last Name",floatingLabelText:"Last Name",onChange:a("lastName"),defaultValue:t.lastName}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Your Email",floatingLabelText:"Email",onChange:a("email"),defaultValue:t.email}),r.a.createElement("br",null),r.a.createElement(g.a,{label:"Continue",primary:!0,style:d.button,onClick:this.continue})))}}]),t}(n.Component),d={button:{margin:15}},C=x,O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Enter Personal Details"}),r.a.createElement(v.a,{hintText:"Enter Your Occupation",floatingLabelText:"Occupation",onChange:a("occupation"),defaultValue:t.occupation}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Your City Name",floatingLabelText:"City Name",onChange:a("city"),defaultValue:t.city}),r.a.createElement("br",null),r.a.createElement(v.a,{hintText:"Enter Your Bio",floatingLabelText:"Bio",onChange:a("bio"),defaultValue:t.bio}),r.a.createElement("br",null),r.a.createElement(g.a,{label:"Back",primary:!1,style:j.button,onClick:this.back}),r.a.createElement(g.a,{label:"Continue",primary:!0,style:j.button,onClick:this.continue})))}}]),t}(n.Component),j={button:{margin:15}},T=O,k=a(29),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,n=e.email,l=e.occupation,i=e.city,c=e.bio;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Enter User Details"}),r.a.createElement(k.List,null,r.a.createElement(k.ListItem,{primaryText:"First Name",secondaryText:t}),r.a.createElement(k.ListItem,{primaryText:"Last Name",secondaryText:a}),r.a.createElement(k.ListItem,{primaryText:"Email",secondaryText:n}),r.a.createElement(k.ListItem,{primaryText:"Occupation",secondaryText:l}),r.a.createElement(k.ListItem,{primaryText:"City",secondaryText:i}),r.a.createElement(k.ListItem,{primaryText:"Bio",secondaryText:c})),r.a.createElement("br",null),r.a.createElement(g.a,{label:"Back",primary:!1,style:S.button,onClick:this.back}),r.a.createElement(g.a,{label:"Confirm & Continue",primary:!0,style:S.button,onClick:this.continue})))}}]),t}(n.Component),S={button:{margin:15}},w=N,L=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:"Success"}),r.a.createElement("h1",null,"Thank you for your submission"),r.a.createElement("p",null,"You will get an email with further instruction.")))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={step:1,firstName:"",lastName:"",email:"",occupation:"",city:"",bio:""},a.nextStep=function(){var e=a.state.step;a.setState({step:e+1})},a.prevStep=function(){var e=a.state.step;a.setState({step:e-1})},a.handleChange=function(e){return function(t){a.setState(Object(c.a)({},e,t.target.value))}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,occupation:t.occupation,city:t.city,bio:t.bio};switch(e){case 1:return r.a.createElement(C,{nextStep:this.nextStep,handleChange:this.handleChange,values:a});case 2:return r.a.createElement(T,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a});case 3:return r.a.createElement(w,{nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 4:return r.a.createElement(L,null)}}}]),t}(n.Component);a(383);var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[185,1,2]]]);
//# sourceMappingURL=main.ffeae7ab.chunk.js.map