(this.webpackJsonpclient_v2=this.webpackJsonpclient_v2||[]).push([[0],{48:function(e,n,t){e.exports=t(77)},77:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(24),l=t.n(o),i=t(12),c=t(7),s=(t(53),t(16)),m=t(21),p=t(5),u=t(3),d=t.n(u),b=t(4),g=t(27);function f(){var e=Object(c.a)(["\n\n    padding:0 45pt;\n    margin:0;\n    position:relative;\n    width:100vw;\n    height:100vh;\n    box-sizing:border-box;\n\n    #container1 {\n        position:absolute;\n        width:100vw;\n        padding:0 36pt;\n        box-sizing:border-box;\n        top:40vh;\n        left:0;\n\n        .welcomeHeading {\n            font-size:9pt;\n            font-weight:bold;\n            margin:0;\n            margin-bottom:12pt;\n            text-align:center;\n        }\n        .welcomeAim {\n            font-size:9pt;\n            margin:0;\n            text-align:center;\n            line-height:12pt;\n        }\n\n    }\n\n    #container2 {\n\n        position:absolute;\n        width:100vw;\n        left:0;\n        bottom:45pt;\n        box-sizing:border-box;\n        font-size:9pt;\n        text-align:center;\n\n        .loginButton {\n            font-size:9pt;\n            text-decoration:none;\n            color:white;\n            text-transform:uppercase;\n            font-weight:bold\n        }\n\n        .createAccountButton{\n            font-size:9pt;\n            text-decoration:none;\n            color:white;\n            text-transform:uppercase;\n            font-weight:bold\n            padding: 9pt 24pt;\n            border-radius:100pt;\n            background:#7BED9F;\n            margin:3pt;\n            display:inline-block;\n            box-shadow: 0px 0px 9pt #7BED9F;\n        }\n    }\n\n"]);return f=function(){return e},e}var h=g.Keyframes.Spring((function(e){return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,d.a.awrap(e({boxShadow:"0px 0px 9pt rgba(123, 237, 159, 0)",from:{boxShadow:"0px 0px 18pt rgba(123, 237, 159,1)"},config:{duration:2e3,tension:100}}));case 3:return n.next=5,d.a.awrap(e({boxShadow:"0px 0px 18pt rgba(123, 237, 159,1)",from:{boxShadow:"0px 0px 9pt rgba(123, 237, 159, 0)"},config:{duration:2e3,tension:100},reset:!0}));case 5:n.next=0;break;case 7:case"end":return n.stop()}}))})),E=p.a.div(f()),v=function(e){var n=Object(b.c)({top:"40vh",opacity:1,from:{top:"-100vh",opacity:0}}),t=Object(b.c)({opacity:1,from:{opacity:0},config:{duration:1e3}});return r.a.createElement(E,null,r.a.createElement(b.a.div,{style:n,id:"container1"},r.a.createElement("p",{className:"welcomeHeading"},"Welcome to the Noisy Guts Project!"),r.a.createElement("p",{className:"welcomeAim"},"Your help means alot to us and the project! With your help, we can bring a faster and more accurate diagnosis of Irratable Bowel Syndrome!")),r.a.createElement(b.a.div,{style:t,id:"container2"},r.a.createElement("p",null,"First, We need to identify who you are..."),r.a.createElement(h,null,(function(e){return r.a.createElement(s.b,{style:e,className:"createAccountButton",to:"/newUser"},"Create Account")})),r.a.createElement("p",null,"OR"),r.a.createElement(s.b,{className:"loginButton",to:"/login"},"Login")))},y=t(17),w=t(37);function x(){var e=Object(c.a)(["\n\n    width:100%;\n    font-size:9pt;\n    margin-top:18pt;\n    -webkit-appearance: none;\n    appearance: none;\n    background:none;\n    border:none;\n\n    :first-of-type{\n        margin:none;\n    }\n\n    input, select {\n        -webkit-appearance: none;\n        appearance: none;\n        border:none;\n        background:none;\n        box-shadow:none;\n        display:flex;\n        align-items:center;\n        height:24pt;\n        width:100%;\n        border-radius:9pt;\n        padding: 0 9pt;\n        box-sizing:border-box;\n        border:solid 0.5px rgba(0,0,0,.12);\n\n        ::placeholder{\n            color:rgba(0,0,0,.12)\n        }\n    }\n\n    .label {\n        margin-bottom:6pt;\n        padding-left:9pt;\n        text-transform:uppercase;\n\n        span {\n            color:red;\n        }\n\n    }\n"]);return x=function(){return e},e}var O=p.a.div(x()),N=r.a.forwardRef((function(e,n){e.extras,e.type;var t=Object(w.a)(e,["extras","type"]);switch(e.type){case"select":return r.a.createElement("select",Object.assign({ref:n},t),e.extras.options.map((function(e,n){return r.a.createElement("option",Object.assign({key:n},e),e.label)})));default:return r.a.createElement("input",Object.assign({ref:n},e))}})),j=function(e){var n=e.styling,t=n.ref,a=Object(w.a)(n,["ref"]);return r.a.createElement(O,null,r.a.createElement("label",{to:e.name},r.a.createElement("p",{className:"label"},e.label," ",e.error[a.name]&&r.a.createElement("span",null,"~ ","".concat(e.error[a.name].type)))),r.a.createElement(N,Object.assign({ref:t},a)),e.hint&&r.a.createElement("p",{className:"hint"},e.hint))},S=t(13),_=(t(19),t(9)),k=t(10);function L(){var e=Object(c.a)(["\n    border:1px solid rgba(0,0,0,.09);\n    display:inline-block;\n    position:relative;\n    height:",";\n    width:",";\n    border-radius:24pt;\n    overflow:hidden;\n    user-select:none;\n    -webkit-tap-highlight-color:transparent;\n\n    .switch {\n        background:#1C0638;\n        color:white;\n        display:flex;\n        position:absolute;\n        height:",";\n        width:",";\n        top:3pt;\n        border-radius:48pt;\n        align-items:center;\n        justify-content:center;\n        right:3pt;\n        box-shadow:0 0 9pt rgba(0,0,0,.12);\n\n        span {\n            margin:0;\n            padding:0;\n            :first-child {\n                margin:0; \n                paddding:0;\n                display:flex;\n                align-items:center;\n                justify-content:center;\n            }\n        }\n\n    }\n"]);return L=function(){return e},e}function T(){var e=Object(c.a)(["\n    font-weight:bold;\n    text-transform:uppercase;\n    text-decoration:none;\n    font-size: 9pt;\n    color:rgba(0,0,0,.24);\n"]);return T=function(){return e},e}function z(){var e=Object(c.a)(["\n    border:none;\n    font-size:9pt;\n    text-transform:uppercase;\n    font-weight:bold;\n    background: linear-gradient(90deg, #241034 0%, #1C0638 100%);\n    color:white;\n    padding:9pt 36pt;\n    border-radius:100vh;\n    text-align:center;\n    display:inline-block;\n    box-shadow: 0 0 9pt rgba(0,0,0,.12)\n"]);return z=function(){return e},e}function C(){var e=Object(c.a)(["\n    display:inline-flex;\n    align-items:center;\n    justify-content:space-between;\n    margin-top:24pt;\n    padding:0 9pt;\n    width:100%;\n    box-sizing:border-box;\n"]);return C=function(){return e},e}var M=p.a.div(C()),A=p.a.input(z()),F=Object(p.a)(s.b)(T());p.a.div(L(),(function(e){return e.height?"".concat(e.height,"pt"):"24pt"}),(function(e){return e.height?"".concat(2*e.height,"pt"):"48pt"}),(function(e){return e.height?"".concat(e.height-6,"pt"):"18pt"}),(function(e){return e.height?"".concat(e.height-6,"pt"):"18pt"}));function G(){var e=Object(c.a)(["\n\n    position:absolute;\n    margin:0;\n    padding:0 24pt;\n    box-sizing:border-box;\n    background:white;\n    color:black;\n    min-height:100vh;\n    padding-top:81pt;\n    top:0;\n    left:0;\n    width:100vw;\n    overflow-x: hidden;\n\n    .subHeading {\n        text-transform:uppercase;\n        color:rgba(0,0,0,.12);\n        text-align:center;\n        margin:0;\n        font-size:9pt;\n        font-weight:bold;\n    }\n\n    .heading {\n        text-transform:uppercase;\n        font-size:18pt;\n        text-align:center;\n        margin:0;\n        margin-top:9pt;\n    }\n\n    form {\n        margin-top:51pt;\n    }\n"]);return G=function(){return e},e}var P=Object(p.a)(b.a.div)(G()),I=Object(S.b)((function(e){return Object(i.a)({},e)}),(function(e){return{LOGIN:function(n){return e({type:"LOGIN",payload:n})}}}))((function(e){var n=Object(y.a)(),t=n.register,a=n.handleSubmit,o=n.errors,l=n.reset,i=Object(b.c)({transform:"scale(1)",left:"0%",from:{left:"100%",transform:"scale(0)"}});return r.a.createElement(P,{style:i},r.a.createElement("p",{className:"subHeading"},"Authentification"),r.a.createElement("h1",{className:"heading"},"Login"),r.a.createElement("form",{onSubmit:a((function(n){var t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(n),t=function(e){return new Promise((function(n){setTimeout(n({details:{username:e.username},status:!0}),3e3)}))},a.t0=e,a.next=5,d.a.awrap(t(n));case 5:a.t1=a.sent,a.t0.LOGIN.call(a.t0,a.t1),l();case 8:case"end":return a.stop()}}))}))},r.a.createElement(j,{label:"username",error:o,styling:{name:"username",type:"text",placeholder:"Enter a username...",ref:t({required:!0})}}),r.a.createElement(j,{label:"password",error:o,styling:{name:"password",type:"password",placeholder:"Enter a password...",ref:t({required:!0})}}),r.a.createElement(M,null,r.a.createElement(F,{to:"/newUser"},"Create Account"),r.a.createElement(A,{type:"submit",value:"login"}))))}));function H(){var e=Object(c.a)(["\n  position:fixed;\n  top:0pt;\n  z-index:101;\n  left:18pt;\n  font-size:18pt;\n"]);return H=function(){return e},e}function R(){var e=Object(c.a)(["\n\n  z-index:100;\n  position:fixed;\n  top:0;\n  height:100vh;\n  box-sizing:border-box;\n  padding:0 24pt;\n  color:white;\n  background:linear-gradient(90deg, #241034 0%, #1C0638 100%);\n  width:100vw;\n  box-shadow:0 0 12pt rgba(0,0,0,.12);\n\n  .profile{\n    width:100%;\n    display:flex;\n    align-items:center;\n    margin-top:111pt;\n    margin-bottom:36pt;\n\n    .profilePictures {\n      height:24pt;\n      width:24pt;\n      border-radius:18pt;\n      margin-right:12pt;\n    }\n\n    .profileText {\n      position:relative;\n      display:inline-block;\n    }\n\n  }\n\n  .navLinkContainer {\n    display:flex;\n    flex-direction:column;\n    margin-top:87pt;\n    \n    .NavLink {\n      margin:6pt 0;\n      text-decoration:none;\n      color:white;\n      font-weight:bold;\n\n      span {\n        margin-left:12pt;\n      };\n\n    }\n\n  }\n"]);return R=function(){return e},e}var U=Object(p.a)(b.a.nav)(R()),B=Object(p.a)(b.a.div)(H()),W=function(e){return Object(i.a)({},e)},q=function(e){return{TOGGLE_MENU:function(){return e({type:"TOGGLE_MENU"})}}},D=Object(S.b)(W,q)((function(e){var n,t,a=Object(b.c)({transform:e.app_state.menu_open?"rotate(90deg)":"rotate(0deg)",color:e.app_state.menu_open?"white":null!==(n=e.color)&&void 0!==n?n:"black",from:{transform:e.app_state.menu_open?"rotate(0deg)":"rotate(90deg)",color:e.app_state.menu_open?null!==(t=e.color)&&void 0!==t?t:"black":"white"},config:b.b.wobbly});return r.a.createElement(B,{style:a,onClick:e.TOGGLE_MENU,className:"menuButton"},r.a.createElement("p",null,r.a.createElement(_.a,{icon:k.a})))})),X=Object(S.b)(W,q)((function(e){var n,t,a,o=Object(b.c)({right:e.app_state.menu_open?"0%":"130%",from:{right:e.app_state.menu_open?"130%":"0%"},config:b.b.gentle});return r.a.createElement("div",{onClick:e.TOGGLE_MENU},r.a.createElement(U,{style:o},r.a.createElement("div",{className:"profile"},r.a.createElement("img",{alt:"profile",className:"profilePictures",src:"https://source.unsplash.com/mEZ3PoFGs_k/250x250"}),r.a.createElement("div",{className:"profileText"},r.a.createElement("p",{className:"profileName",style:{fontWeight:"bold",fontSize:"12pt",margin:0}},null!==(n=e.app_state.firstName)&&void 0!==n?n:"Profile"," ",null!==(t=e.app_state.lastName)&&void 0!==t?t:"Name"),r.a.createElement("p",{className:"profileUsername",style:{fontWeight:"regular",fontSize:"9pt",margin:0}},"@",null!==(a=e.app_state.username)&&void 0!==a?a:"profile_username"))),r.a.createElement("div",{className:"navLinkContainer"},r.a.createElement(s.c,{className:"NavLink",to:"/log"}," ",r.a.createElement(_.a,{icon:k.e})," ",r.a.createElement("span",null,"Add Recording Log")," "),r.a.createElement(s.c,{className:"NavLink",to:"/food"}," ",r.a.createElement(_.a,{icon:k.b})," ",r.a.createElement("span",null,"Add Food")),r.a.createElement(s.c,{className:"NavLink",to:"/context"},r.a.createElement(_.a,{icon:k.c})," ",r.a.createElement("span",null,"Add Contextual Info")))))})),Y=Object(S.b)((function(e){return Object(i.a)({},e)}))((function(e){var n=Object(y.a)(),t=n.register,a=n.handleSubmit,o=n.errors,l=n.reset,i=Object(b.c)({transform:"scale(1)",left:"0%",bottom:"0%",from:{bottom:"100%",left:"100%",transform:"scale(0)"},config:{tension:100}});return r.a.createElement(P,{style:i},r.a.createElement("p",{className:"subHeading"},"Authentification"),r.a.createElement("h1",{className:"heading"},"Create Account"),r.a.createElement("form",{onSubmit:a((function(e){console.log(e),l()}))},r.a.createElement(j,{label:"First Name",error:o,styling:{name:"firstName",type:"text",placeholder:"Enter your first name...",ref:t({required:!0})}}),r.a.createElement(j,{label:"Last Name",error:o,styling:{name:"lastName",type:"text",placeholder:"Enter your last name...",ref:t({required:!0})}}),r.a.createElement(j,{label:"username",error:o,styling:{name:"username",type:"text",placeholder:"Make up a username...",ref:t({required:!0})}}),r.a.createElement(j,{label:"Password",error:o,styling:{name:"password",type:"password",placeholder:"Try to remember this one...",ref:t({required:!0})}}),r.a.createElement(M,null,r.a.createElement(F,{to:"/login"},"Login"),r.a.createElement(A,{type:"submit",value:"Create an Account"}))))})),J=function(e){var n=Object(y.a)(),t=n.register,a=n.handleSubmit,o=n.errors,l=n.reset;return r.a.createElement(P,null,r.a.createElement("p",{className:"subHeading"},"Contextual Information"),r.a.createElement("h1",{className:"heading"},"Add Context Log"),r.a.createElement("form",{onSubmit:a((function(e){console.log(e),l()}))},r.a.createElement(j,{label:"Bristol Poop Rating",error:o,styling:{name:"poopRating",type:"select",ref:t,extras:{options:[{label:"Pick an Option",value:""},{label:"Type 0 - No Poop",value:"0"},{label:"Type 1 - Separate Hard Lumps",value:"1"},{label:"Type 2 - Sausage-Shaped and Lumpy",value:"2"},{label:"Type 3 - Sausage-Link and Cracked",value:"3"},{label:"Type 4 - Sausage-Shaped and Smooth",value:"4"},{label:"Type 5 - Soft Blobs with Clear Edges",value:"5"},{label:"Type 6 - Fluffy Pieces - Mushy",value:"6"},{label:"Type 7 - Watery - Entirely Liquid",value:"7"}]}}}),r.a.createElement(j,{label:"Stress Level",error:o,styling:{name:"stress",type:"select",ref:t,extras:{options:[{label:"Pick an Option",value:""},{label:"Low - Little To No Stress",value:"0"},{label:"Medium - Moderate Stress",value:"5"},{label:"High - Alot of Stress",value:"10"}]}}}),r.a.createElement(j,{label:"Hours of Sleep",error:o,styling:{name:"sleep",type:"number",ref:t,pattern:"[0-9]*",placeholder:"Type in the NUMBER of hours you've slept... "}}),r.a.createElement(j,{label:"Energy Level",error:o,styling:{name:"energy",type:"select",ref:t,extras:{options:[{label:"Pick an Option",value:""},{label:"Low - Extremely Tired",value:"0"},{label:"Medium - Standard Energy",value:"5"},{label:"High - Too much energy",value:"10"}]}}}),r.a.createElement(M,null,r.a.createElement(A,{type:"submit",style:{margin:"0 auto",width:"100%"}}))))},K=function(e){var n=Object(y.a)(),t=n.handleSubmit,a=n.register,o=n.errors,l=n.reset;return r.a.createElement(P,null,r.a.createElement("p",{className:"subHeading"},"Food Intake"),r.a.createElement("h1",{className:"heading"},"Food Consumption"),r.a.createElement("form",{onSubmit:t((function(e){console.log(e),l()}))},r.a.createElement(j,{label:"What did you Eat?",error:o,styling:{name:"foodName",type:"text",placeholder:"What was the name of the food",ref:a({required:!0})}}),r.a.createElement(j,{label:"Time of Consumption",error:o,styling:{name:"time",type:"time",placeholder:"What time did you have it at?",ref:a({required:!0})}}),r.a.createElement(j,{label:"Fodmap Type",error:o,styling:{name:"fodmapType",type:"select",ref:a({required:!0}),extras:{options:[{label:"Choose One...",value:""},{label:"None",value:"none"},{label:"Fructose",value:"fructose"},{label:"Lactose",value:"lactose"},{label:"Polyols",value:"polyol"},{label:"Fructan",value:"fructan"},{label:"Galactan",value:"galactan"}]}}}),r.a.createElement(M,null,r.a.createElement(A,{style:{width:"100%"},type:"submit",value:"Submit"}))))},V=t(28),Z=t.n(V),$=Object(S.b)((function(e){return Object(i.a)({},e)}),(function(e){return{toggleSymptomForm:function(){return e({type:"TOGGLE_SYMPTOM_FORM"})}}}))((function(e){var n=Object(b.c)({left:e.recordingPage.complexFormOpen?"12pt":"400pt",opacity:e.recordingPage.complexFormOpen?1:0,from:{left:e.recordingPage.complexFormOpen?"400pt":"12pt",opacity:e.recordingPage.complexFormOpen?0:1},config:{tension:1e3,mass:3,friction:60}}),t=Object(y.a)(),a=t.register,o=t.handleSubmit,l=t.reset,c=(t.watch,t.errors);switch(e.symptom){case"pain":return r.a.createElement(P,{style:Object(i.a)({width:"calc(100vw - 24pt)",left:"12pt",minHeight:"calc(100vh - 24pt)",top:"12pt",borderRadius:"12pt",zIndex:110,boxShadow:"0 0 24pt rgba(0,0,0,.5)"},n)},r.a.createElement("p",{className:"subHeading"},"Complex Symptom"),r.a.createElement("h1",{className:"heading"},e.symptom),r.a.createElement("button",{onClick:function(){e.toggleSymptomForm(),console.log(e)}},"Toggle Page"),r.a.createElement("form",{onSubmit:o((function(e){console.log(e),l()}))},r.a.createElement(j,{label:"Severity",error:c,styling:{name:"severity",type:"range",min:0,max:10,placeholder:"What was the name of the food",ref:a({required:!0})}}),r.a.createElement(j,{label:"Location",error:c,styling:{name:"location",type:"select",ref:a,extras:{options:[{label:"Click and choose a Location...",value:""},{label:"Lower Left Abdomen",value:"lower_lhs"},{label:"Lower Mid Abdomen",value:"lower_mid"},{label:"Lower Right Abdomen",value:"lower_rhs"},{label:"Middle Left Abdomen",value:"mid_lhs"},{label:"Middle Mid Abdomen",value:"mid_mid"},{label:"Middle Right Abdomen",value:"mid_rhs"},{label:"Upper Left Abdomen",value:"upper_lhs"},{label:"Upper Mid Abdomen",value:"upper_mid"},{label:"Upper Right Abdomen",value:"upper_rhs"}]}}}),r.a.createElement(j,{label:"Notes",error:c,styling:{name:"notes",type:"text",placeholder:"Add any extra information here...",ref:a}}),r.a.createElement(M,{style:{width:"100%"}},r.a.createElement(A,{style:{width:"100%"},type:"submit",value:"Submit"}))))}}));function Q(){var e=Object(c.a)(["\n    position:absolute;\n    text-align:center;\n    width:100%;\n    height:24pt;\n    width:24pt;\n    background:#241034;\n    left:calc(50vw - 12pt);\n    border-radius:6pt;\n"]);return Q=function(){return e},e}function ee(){var e=Object(c.a)(["\n    position:absolute;\n    width:100%;\n    height:60pt;\n    bottom:0;\n    left:0;\n    box-sizing:border-box;\n    border-radius:0 0 12pt 12pt;\n"]);return ee=function(){return e},e}function ne(){var e=Object(c.a)(["\n    display:flex;\n    box-sizing:border-box;\n    margin:0;\n    padding:0;\n\n    .mins {\n        margin:0;\n        font-size:30pt;\n        height:100%;\n        margin-right:3pt\n    }\n\n    .auxHolder { \n        display:flex;\n        flex-direction:column;\n        align-items:flex-start\n        font-size:9pt;\n        justify-content:space-around;\n        padding: 3pt 0;\n        box-sizing:border-box;\n\n        .minLabel {\n            margin:0;\n            text-transform:uppercase\n            font-weight:bold;\n        }\n\n        .sec { \n            margin:0;\n        }\n\n    }\n"]);return ne=function(){return e},e}function te(){var e=Object(c.a)(["\n    overflow-x:scroll;\n    display:flex;\n"]);return te=function(){return e},e}function ae(){var e=Object(c.a)(["\n    height:100pt;\n    flex-shrink:0;\n    flex-grow:0;\n    border-radius:12pt;\n    border:none;\n    background:white;\n    padding:12pt;\n    margin:6pt;\n\n    : first-of-type {\n        margin-left:24pt;\n    }\n\n    : last-of-type {\n        margin-right:12pt;\n    }\n\n\n    div {\n\n        display:flex;\n        align-items:center;\n        justify-content:space-between;\n        margin-top:64pt;\n        width:100%;\n        font-size:9pt;\n\n        p {\n            margin:0;\n            text-transform:uppercase;\n            font-weight:bold;\n        }\n    \n        .buttonIcon { \n            margin:0;\n            margin-right:12pt;\n        }\n    }\n\n"]);return ae=function(){return e},e}function re(){var e=Object(c.a)(["\n    position:absolute;\n    right:18pt;\n    top:18pt;\n    font-size:15pt;\n    color:rgba(0,0,0,.18);\n    background:none;\n    border:none;\n"]);return re=function(){return e},e}function oe(){var e=Object(c.a)(["\n    height:36pt;\n    width:36pt;\n    border:none; \n    background:linear-gradient(90deg, #241034 0%, #1C0638 100%);\n    box-shadow: 0px 0px 9pt #575757 ;\n    color:white;\n    border-radius:36pt;\n    padding:0;\n    margin:0;\n    font-size:18pt;\n"]);return oe=function(){return e},e}function le(){var e=Object(c.a)(["\n    position:absolute;\n    top:0;\n    width:100vw;\n    left:0;\n    height:35vh;\n    border-radius:0 0 12pt 12pt;\n    background:white;\n    padding:0;\n    margin:0;\n"]);return le=function(){return e},e}var ie=Object(p.a)(b.a.div)(le()),ce=Object(p.a)(b.a.button)(oe()),se=Object(p.a)(b.a.button)(re()),me=p.a.button(ae()),pe=p.a.div(te()),ue=p.a.div(ne()),de=p.a.div(ee()),be=g.Keyframes.Spring((function(e){return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,d.a.awrap(e({transform:"scale(1) rotate(0deg)",bottom:"24pt",opacity:1,from:{transform:"scale(0) rotate(360deg)",bottom:"-12pt",opacity:0},config:{tension:500,mass:2,friction:12}}));case 3:return n.next=5,d.a.awrap(e({transform:"scale(0) rotate(360deg)",bottom:"-12pt",opacity:0,from:{transform:"scale(1) rotate(0deg)",bottom:"24pt",opacity:1},config:{tension:500,mass:2,friction:12}}));case 5:n.next=0;break;case 7:case"end":return n.stop()}}))})),ge=Object(p.a)(b.a.div)(Q()),fe=Object(S.b)((function(e){return Object(i.a)({},e)}),(function(e){return{toggleSymptomForm:function(){return e({type:"TOGGLE_SYMPTOM_FORM"})}}}))((function(e){return r.a.createElement(P,{style:{background:"linear-gradient(90deg, #241034 0%, #1C0638 100%)",padding:0}},r.a.createElement(ie,null,r.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%",boxSizing:"border-box"}},r.a.createElement(se,null,r.a.createElement(_.a,{icon:k.h})),r.a.createElement("div",{style:{position:"absolute",width:"100vw",display:"flex",alignItems:"center",justifyContent:"space-between",top:"58pt",boxSizing:"border-box",padding:"0 16pt"}},r.a.createElement(Z.a,{lastUnit:"m"},r.a.createElement("div",null,r.a.createElement("p",{style:{margin:0,textTransform:"uppercase",fontWeight:"bold",color:"rgba(0,0,0,.12)",fontSize:"9pt"}},"Recording Time"),r.a.createElement(ue,{className:"times"},r.a.createElement("div",{className:"mins"},r.a.createElement(Z.a.Minutes,null)),r.a.createElement("div",{className:"auxHolder"},r.a.createElement("div",{className:"sec"},r.a.createElement(Z.a.Seconds,null)),r.a.createElement("p",{className:"minLabel"},"min"))))),r.a.createElement(ce,null,r.a.createElement(_.a,{icon:k.f}))),r.a.createElement(de,null,r.a.createElement(be,null,(function(e){return r.a.createElement(ge,{style:e})}))))),r.a.createElement("div",{style:{marginTop:"calc(35vh + 24pt)"}},r.a.createElement("p",{style:{color:"white",fontSize:"9pt",marginLeft:"24pt"}},"Simple Symptoms"),r.a.createElement(pe,null,r.a.createElement(me,{className:"simpleSymptom"},r.a.createElement("div",null,r.a.createElement(_.a,{className:"buttonIcon",icon:k.d}),r.a.createElement("p",null,"Burp"))),r.a.createElement(me,{className:"simpleSymptom"},r.a.createElement("div",null,r.a.createElement(_.a,{className:"buttonIcon",icon:k.d}),r.a.createElement("p",null,"Fart"))),r.a.createElement(me,{className:"simpleSymptom"},r.a.createElement("div",null,r.a.createElement(_.a,{className:"buttonIcon",icon:k.d}),r.a.createElement("p",null,"Gurgle"))),r.a.createElement(me,{className:"simpleSymptom"},r.a.createElement("div",null,r.a.createElement(_.a,{className:"buttonIcon",icon:k.d}),r.a.createElement("p",null,"Heartburn"))))),r.a.createElement("div",{style:{marginTop:"24pt"}},r.a.createElement("p",{style:{color:"white",fontSize:"9pt",marginLeft:"24pt"}},"Complex Symptoms"),r.a.createElement(pe,null,r.a.createElement(me,{className:"simpleSymptom",onClick:e.toggleSymptomForm},r.a.createElement("div",null,r.a.createElement(_.a,{className:"buttonIcon",icon:k.d}),r.a.createElement("p",null,"Pain"))),r.a.createElement(me,{className:"simpleSymptom"},r.a.createElement("div",null,r.a.createElement(_.a,{className:"buttonIcon",icon:k.d}),r.a.createElement("p",null,"Bloating"))),r.a.createElement(me,{className:"simpleSymptom"},r.a.createElement("div",null,r.a.createElement(_.a,{className:"buttonIcon",icon:k.d}),r.a.createElement("p",null,"Twinge"))),r.a.createElement(me,{className:"simpleSymptom"},r.a.createElement("div",null,r.a.createElement(_.a,{className:"buttonIcon",icon:k.d}),r.a.createElement("p",null,"Custom"))))),r.a.createElement($,{symptom:"pain"}))}));function he(){var e=Object(c.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap');\n  font-family: 'Nunito', sans-serif;\n  min-height:100vh\n  min-width:100vw;\n  color:white;\n  background:linear-gradient(90deg, #241034 0%, #1C0638 100%);\n  padding:0;\n  margin:0;\n"]);return he=function(){return e},e}var Ee=p.a.div(he()),ve=Object(S.b)((function(e){return Object(i.a)({},e)}))((function(e){return r.a.createElement(s.a,null,r.a.createElement(Ee,{className:"App"},r.a.createElement(X,null),r.a.createElement(D,{color:"rgba(0,0,0,.18)"}),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(v,null)),r.a.createElement(m.a,{path:"/welcome"},r.a.createElement(v,null)),r.a.createElement(m.a,{path:"/log"},r.a.createElement(fe,null)),r.a.createElement(m.a,{path:"/login"},r.a.createElement(I,null)),r.a.createElement(m.a,{path:"/food"},r.a.createElement(K,null)),r.a.createElement(m.a,{path:"/context"},r.a.createElement(J,null)),r.a.createElement(m.a,{path:"/newUser"},r.a.createElement(Y,null)))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=t(26),we=Object(ye.b)({default:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return n.type,e},app_state:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOGIN":var t=n.payload,a=t.details,r=t.status;return e=Object(i.a)({},e,{loggedIn:r,username:r&&a.username,firstName:r&&a.firstName,lastName:r&&a.lastName});case"TOGGLE_MENU":return e=Object(i.a)({},e,{menu_open:!e.menu_open});default:return e}},recordingPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE_SYMPTOM_FORM":return e=Object(i.a)({},e,{complexFormOpen:!e.complexFormOpen});default:return e}}}),xe=Object(ye.c)(we,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(S.a,{store:xe},r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.1da318ee.chunk.js.map