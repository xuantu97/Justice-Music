(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{257:function(e,t,n){e.exports=n(450)},38:function(e,t){e.exports={api_url:"https://justice-music.herokuapp.com/api",url:"https://justice-music.herokuapp.com/chat"}},402:function(e,t,n){e.exports=n.p+"static/media/login-background.43901f8b.png"},430:function(e,t){},444:function(e,t,n){},450:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(27),c=n.n(i),s=n(21),l=n(22),o=n(24),u=n(23),p=n(25),d=n(32),m=n(46),h=n(179),g=n(180),f=n(9),E={isSignin:!1,signinSuccessful:!1,error:null},v={isSignup:!1,signupSuccessful:!1,error:null},y={isFindUser:!1,findUserSuccessful:!1,data:[],error:null},b=n(189),S={receiverID:"",listFriend:[],listMessage:[],error:null,callingAPI:!1,titleName:""},I=Object(m.c)({signinReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNIN_START":return Object(f.a)({},e,{isSignin:!0});case"SIGNIN_SUCCESSFUL":return Object(f.a)({},e,{isSignin:!1,signinSuccessful:!0});case"SIGNIN_FAIL":return Object(f.a)({},e,{isSignin:!1,error:t.err});case"SIGNIN_FAIL_HANDLE":return Object(f.a)({},e,{error:null});default:return e}},signupReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_STATE":return{isSignup:!1,signupSuccessful:!1,error:null};case"SIGNUP_START":return Object(f.a)({},e,{isSignup:!0});case"SIGNUP_SUCCESSFUL":return Object(f.a)({},e,{isSignup:!1,signupSuccessful:!0});case"SIGNUP_FAIL":return Object(f.a)({},e,{isSignup:!1,error:t.err});case"SIGNUP_FAIL_HANDLE":return Object(f.a)({},e,{error:null});default:return e}},findUserReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FINDUSER_START":return Object(f.a)({},e,{isFindUser:!0});case"FINDUSER_SUCCESSFUL":return Object(f.a)({},e,{isFindUser:!1,findUserSuccessful:!0,data:t.result});case"FINDUSER_FAIL":return Object(f.a)({},e,{isFindUser:!1,error:t.err});case"FINDUSER_FAIL_HANDLE":return Object(f.a)({},e,{error:null});default:return e}},chatReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TITLE_NAME":return Object(f.a)({},e,{titleName:t.titleName});case"SET_RECEIVER_ID":return Object(f.a)({},e,{receiverID:t.receiverID});case"SET_LIST_FRIEND":return Object(f.a)({},e,{listFriend:t.listFriend,callingAPI:!1});case"SET_LIST_MESSAGE":return Object(f.a)({},e,{listMessage:t.listMessage,callingAPI:!1});case"PUSH_MESSAGE":return Object(f.a)({},e,{listMessage:[].concat(Object(b.a)(e.listMessage),[t.arr]),callingAPI:!1});case"CALLING_API":return Object(f.a)({},e,{callingAPI:!0});case"FAIL":return Object(f.a)({},e,{error:t.err,callingAPI:!1});case"FAIL_HANDLE":return Object(f.a)({},e,{error:null});default:return e}}}),C=function(e,t){return"LOG_OUT"===t.type&&(e=void 0),I(e,t)},k=Object(h.createLogger)({timestamps:!0,duration:!0}),_=Object(m.e)(C,Object(m.d)(Object(m.a)(k,g.a))),j=n(187),O=n(55),N=n(33),R=n(96),D=n(56),w=n.n(D),x=n(38),L=n.n(x);function T(e,t){return function(n){n({type:"SIGNIN_START"}),function(e,t){return new Promise(function(n,a){var r={username:e,password:t};return w.a.post(L.a.api_url+"/users/login",r).then(function(e){if(0===e.data.status)return a(e.data.error.message);localStorage.setItem("userID",e.data.result.id),localStorage.setItem("accessToken",e.data.result.accessToken),localStorage.setItem("refreshToken",e.data.result.refreshToken),localStorage.setItem("username",e.data.result.username),n()}).catch(function(e){a(e)})})}(e,t).then(function(){n({type:"SIGNIN_SUCCESSFUL"})}).catch(function(e){n(function(e){return{type:"SIGNIN_FAIL",err:e}}(e))})}}var F=n(20),A=n.n(F),U=n(44),M=n.n(U),P=n(65),G=n.n(P),B=n(42),W=n.n(B),H=n(64),K=n.n(H),q=n(37),J=n.n(q),V=n(17),z=n.n(V),$=n(5),Q=n.n($),X=n(16),Y=n.n(X),Z=n(54),ee=n.n(Z),te=n(66),ne=n.n(te),ae=n(75),re=n.n(ae),ie=n(67),ce=n.n(ie);function se(e,t,n,a,r){return function(i){i({type:"SIGNUP_START"}),function(e,t,n,a,r){return new Promise(function(i,c){var s={user:{username:e,password:t,full_name:n,phone:a,genre:r}};return w.a.post(L.a.api_url+"/users/create",s).then(function(e){if(1===e.data.status)return i();e.data.error.message.errmsg&&c(e.data.error.message.errmsg),c(e.data.error.message)}).catch(function(e){c(e)})})}(e,t,n,a,r).then(function(){i({type:"SIGNUP_SUCCESSFUL"})}).catch(function(e){i(le(e))})}}function le(e){return{type:"SIGNUP_FAIL",err:e}}var oe=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={full_name:"",username:"",password:"",phone:"",genre:""},n.handleChange=function(e){n.setState({genre:e.target.value})},n.onClickSignUp=n.onClickSignUp.bind(Object(N.a)(n)),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"onClickSignUp",value:function(){var e=this.state,t=e.full_name,n=e.username,a=e.password,r=e.phone,i=e.genre;this.props.createUser(n,a,t,r,i)}},{key:"render",value:function(){var e=this,t=this.props.classes;return this.props.signupReducer.error&&(alert("Register fail: you must input correct email and mobie phone format,   "+this.props.signupReducer.error),this.props.signup_fail_handle()),this.props.signupReducer.signupSuccessful&&(this.props.clear_state(),this.setState({full_name:"",username:"",password:"",phone:"",genre:""}),alert("Register successfully")),r.a.createElement("div",null,r.a.createElement(z.a,{variant:"h6",gutterBottom:!0,className:t.typeColor},"Register Form"),r.a.createElement("form",null,r.a.createElement(Y.a,{container:!0,spacing:24},r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(ee.a,{required:!0,label:"Full name",fullWidth:!0,autoComplete:"billing full name",value:this.state.full_name,onChange:function(t){return e.setState({full_name:t.target.value})}})),r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(ee.a,{required:!0,id:"email",name:"email",label:"Email",fullWidth:!0,autoComplete:"billing email",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}})),r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(ee.a,{required:!0,id:"password",name:"password",type:"password",label:"Password",color:"#e0e0e0",fullWidth:!0,autoComplete:"billing password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(ee.a,{required:!0,id:"phone",name:"phone",label:"Phone",fullWidth:!0,autoComplete:"billing phone",value:this.state.phone,onChange:function(t){return e.setState({phone:t.target.value})}})),r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(re.a,{required:!0,component:"legend"},"Genre")),r.a.createElement(Y.a,{item:!0,xs:12,sm:4},r.a.createElement(ne.a,{control:r.a.createElement(ce.a,{checked:"1"===this.state.genre,onChange:this.handleChange,value:"1",name:"radio-button-demo","aria-label":"B"}),label:"Male"})),r.a.createElement(Y.a,{item:!0,xs:12,sm:4},r.a.createElement(ne.a,{control:r.a.createElement(ce.a,{checked:"2"===this.state.genre,onChange:this.handleChange,value:"2",name:"radio-button-demo","aria-label":"B"}),label:"Female"})),r.a.createElement(Y.a,{item:!0,xs:12,sm:4},r.a.createElement(ne.a,{control:r.a.createElement(ce.a,{checked:"3"===this.state.genre,onChange:this.handleChange,value:"3",name:"radio-button-demo","aria-label":"B"}),label:"Other"})),r.a.createElement(A.a,{type:"submit",fullWidth:!0,variant:"contained",color:"inherit",className:t.submit,disabled:this.props.signupReducer.isSignup&&!this.props.signupReducer.signupSuccessful,onClick:this.onClickSignUp},"Sign Up"))))}}]),t}(r.a.Component),ue=Object(d.b)(function(e){return{signupReducer:e.signupReducer}},function(e){return{createUser:function(t,n,a,r,i){return e(se(t,n,a,r,i))},signup_fail:function(){return e(le())},signup_fail_handle:function(){return e({type:"SIGNUP_FAIL_HANDLE"})},clear_state:function(){return e({type:"CLEAR_STATE"})}}})(Q()(function(e){return{submit:{marginTop:3*e.spacing.unit,opacity:"0.6"},typeColor:{color:"#e0e0e0",textAlign:"center"}}})(oe)),pe=n(68),de=n.n(pe),me=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:"",openRegister:!1},n.onClickSignin=function(){var e=n.state,t=e.username,a=e.password;n.props.login(t,a)},n.onClickRegister=function(){n.setState({openRegister:!n.state.openRegister})},n.onClickSignin=n.onClickSignin.bind(Object(N.a)(n)),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("accessToken")&&this.props.history.push("/login")}},{key:"render",value:function(){var e=this,t=this.props.classes,n=t.hide;return n=this.state.openRegister?"":t.hide,this.props.signinReducer.error&&(alert("sign fail: "+this.props.signinReducer.error),this.props.signin_fail_handle()),this.props.signinReducer.signinSuccessful&&this.props.history.push("/home"),r.a.createElement("div",{className:t.background},r.a.createElement(M.a,null),r.a.createElement(z.a,{className:t.typeColor,style:{paddingTop:"5vh"},component:"h1",variant:"h4"},"Justice Music"),r.a.createElement("main",{className:t.main},r.a.createElement(J.a,{className:t.paper},r.a.createElement("img",{src:de.a,alt:"Smiley face",style:{height:"45px",width:"45px"}}),r.a.createElement(z.a,{className:t.typeColor,component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form},r.a.createElement(G.a,{required:!0,fullWidth:!0},r.a.createElement(K.a,null,"Email Address"),r.a.createElement(W.a,{id:"email",name:"email",autoComplete:"email",onChange:function(t){return e.setState({username:t.target.value})}})),r.a.createElement(G.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(K.a,null,"Password"),r.a.createElement(W.a,{name:"password",type:"password",id:"password",autoComplete:"current-password",onChange:function(t){return e.setState({password:t.target.value})}})),r.a.createElement(A.a,{type:"submit",fullWidth:!0,variant:"contained",color:"inherit",className:t.submit,disabled:this.props.signinReducer.isSignin&&!this.props.signinReducer.signinSuccessful,onClick:this.onClickSignin},"Sign in"),r.a.createElement(A.a,{onClick:this.onClickRegister,style:{backgroundColor:"#e0e0e0",marginTop:"30px",opacity:"0.5"}},"Register here"))),r.a.createElement(J.a,{className:[t.paper,n]},r.a.createElement(ue,null))),r.a.createElement(z.a,{className:t.typeColor,component:"h4",variant:"h6"},"Develop with",r.a.createElement("span",{role:"img","aria-label":"Love"}," \u2764\ufe0f "),"by Keyti"))}}]),t}(r.a.Component),he=Object(d.b)(function(e){return{signinReducer:e.signinReducer}},function(e){return{login:function(t,n){return e(T(t,n))},signin_fail_handle:function(){return e({type:"SIGNIN_FAIL_HANDLE"})}}})(Q()(function(e){return{background:{backgroundImage:"url(".concat(n(402),")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh"},main:Object(R.a)({width:"auto",display:"flex",justifyContent:"center"},e.breakpoints.up(400+3*e.spacing.unit*2),{width:"50%",marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px"),backgroundColor:"transparent",width:"50%"},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit,opacity:"0.6"},typeColor:{color:"#e0e0e0",textAlign:"center"},hide:{display:"none"}}})(me)),ge=n(181),fe=n.n(ge),Ee=n(19),ve=n(49),ye=n.n(ve),be=n(98),Se=n.n(be),Ie=n(36),Ce=n.n(Ie),ke=n(99),_e=n(97),je=n.n(_e),Oe=n(183),Ne=n.n(Oe),Re=n(53),De=n.n(Re),we=n(28),xe=n.n(we);function Le(e){return function(t){t({type:"FINDUSER_START"}),function(e){return new Promise(function(t,n){return w.a.get(L.a.api_url+"/users/find",{params:{keyword:e}}).then(function(e){if(0===e.data.status)return n(e.data.error.message);t(e.data.result)}).catch(function(e){return n(e)})})}(e).then(function(e){t(function(e){return{type:"FINDUSER_SUCCESSFUL",result:e}}(e))}).catch(function(e){t(function(e){return{type:"FINDUSER_FAIL",err:e}}(e))})}}var Te=n(92),Fe=n.n(Te);var Ae=Object(Ee.withStyles)({card:{margin:"10px"},title:{fontSize:14,maxWidth:"50vw"},div:{display:"table"},sender:{display:"flex",justifyContent:"flex-end"},seen:{color:"#bdbdbd"}})(function(e){var t,n,a=e.classes;return!0===e.sender&&(t=a.sender),!0===e.seen&&(n="seen"),r.a.createElement("li",{className:t,style:{listStyleType:"none"}},r.a.createElement("div",{className:a.div},r.a.createElement(ye.a,{className:a.card},r.a.createElement(Fe.a,{style:{paddingBottom:"16px"}},r.a.createElement(z.a,{className:a.title,color:"textSecondary",gutterBottom:!0},e.content))),r.a.createElement("div",{className:a.seen},n)))}),Ue=n(182),Me=n(52),Pe=n.n(Me),Ge=n(48),Be=n.n(Ge),We=n(50),He=n.n(We),Ke=n(51),qe=n.n(Ke),Je=n(45),Ve=n.n(Je),ze=n(94),$e=n.n(ze),Qe=n(93),Xe=n.n(Qe),Ye=n(76),Ze=n.n(Ye),et=n(70),tt=n.n(et);function nt(){return{"Content-Type":"application/json; charset=utf-8",Accept:"application/json","x-access-token":localStorage.getItem("accessToken")}}function at(){return new Promise(function(e,t){var n={userID:localStorage.getItem("userID")};return w.a.post(L.a.api_url+"/chats/getListFriend",n,{headers:nt()}).then(function(n){if(0===n.data.status)return t(n.data.error);e(n.data.result)}).catch(function(e){t(e)})})}function rt(){return function(e){e({type:"CALLING_API"}),at().then(function(t){if(e(ct(t)),t.length>=1){var n=t[0]._id;e(it(n)),e(lt(n)),e(st(t[0].username))}}).catch(function(t){e(ot(t))})}}function it(e){return function(t){t({type:"CALLING_API"}),function(e){return new Promise(function(t,n){var a={senderID:localStorage.getItem("userID"),receiverID:e};return w.a.post(L.a.api_url+"/chats/getListMessage",a,{headers:nt()}).then(function(e){if(0===e.data.status)return n(e.data.error.message);t(e.data.result)}).catch(function(e){n(e)})})}(e).then(function(e){t(function(e){return{type:"SET_LIST_MESSAGE",listMessage:e}}(e))}).catch(function(e){t(ot(e))})}}function ct(e){return{type:"SET_LIST_FRIEND",listFriend:e}}function st(e){return{type:"SET_TITLE_NAME",titleName:e}}function lt(e){return{type:"SET_RECEIVER_ID",receiverID:e}}function ot(e){return{type:"FAIL",err:e}}var ut={avatar:{backgroundColor:tt.a[100],color:tt.a[600]}},pt=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClose=function(){n.props.onClose(n.props.selectedValue)},n.handleListItemClick=function(e,t){n.props.onClose(),n.props.set_title_name(t),n.props.getListMessage(e),n.props.select_user_to_chat(e)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=(t.onClose,t.selectedValue,Object(Ue.a)(t,["classes","onClose","selectedValue"]));return r.a.createElement(Xe.a,Object.assign({onClose:this.handleClose,"aria-labelledby":"simple-dialog-title"},a),r.a.createElement($e.a,{id:"simple-dialog-title"},"List users"),r.a.createElement("div",null,r.a.createElement(Be.a,null,this.props.findUserReducer.data.map(function(t){return r.a.createElement(He.a,{button:!0,onClick:function(){return e.handleListItemClick(t._id,t.username)},key:t._id},r.a.createElement(qe.a,null,r.a.createElement(Pe.a,{className:n.avatar},r.a.createElement(Ze.a,null))),r.a.createElement(Ve.a,{primary:t.username}))}))))}}]),t}(r.a.Component),dt=Object(d.b)(function(e){return{findUserReducer:e.findUserReducer,chatReducer:e.chatReducer}},function(e){return{getListFriend:function(){return e(rt())},getListMessage:function(t){return e(it(t))},select_user_to_chat:function(t){return e(lt(t))},set_title_name:function(t){return e(st(t))}}})(Object(Ee.withStyles)(ut)(pt)),mt={avatar:{backgroundColor:tt.a[100],color:tt.a[600]},onlineBar:{textAlign:"right"}},ht=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleListItemClick=function(e,t){n.props.getListMessage(e),n.props.select_user_to_chat(e),n.props.set_title_name(t)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(Be.a,null,this.props.chatReducer.listFriend.map(function(n){return n.socketID?r.a.createElement(He.a,{button:!0,onClick:function(){return e.handleListItemClick(n._id,n.username)},key:n._id},r.a.createElement(qe.a,null,r.a.createElement(Pe.a,{className:t.avatar},r.a.createElement(Ze.a,null))),r.a.createElement(Ve.a,{primary:n.username}),r.a.createElement(Ve.a,{primary:"online",className:t.onlineBar})):r.a.createElement(He.a,{button:!0,onClick:function(){return e.handleListItemClick(n._id,n.username)},key:n._id},r.a.createElement(qe.a,null,r.a.createElement(Pe.a,{className:t.avatar},r.a.createElement(Ze.a,null))),r.a.createElement(Ve.a,{primary:n.username}))})))}}]),t}(r.a.Component),gt=Object(d.b)(function(e){return{chatReducer:e.chatReducer}},function(e){return{getListFriend:function(){return e(rt())},getListMessage:function(t){return e(it(t))},select_user_to_chat:function(t){return e(lt(t))},set_title_name:function(t){return e(st(t))}}})(Object(Ee.withStyles)(mt)(ht));var ft=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleClickSearch=function(){n.setState({open:!0}),n.props.findUser(n.state.searchText)},n.handleClose=function(){n.setState({open:!1})},n.onClickLogOut=function(e){n.socket.disconnect(),n.props.log_out(),localStorage.clear(),n.props.history.push("/login")},n.onFocusMessage=function(){var e=n.props.chatReducer.listMessage,t=e[e.length-1];if(t){var a={senderID:t.senderID,receiverID:t.receiverID};localStorage.getItem("userID")!==t.senderID&&n.socket.emit("is seen",a)}},n.handleClickSend=function(){if(n.state.content){var e={senderID:localStorage.getItem("userID"),receiverID:n.props.chatReducer.receiverID,content:n.state.content},t={senderID:localStorage.getItem("userID"),content:n.state.content,date_created:Date(Date.now())};n.props.chatReducer.listFriend.find(function(e){return e._id===n.props.chatReducer.receiverID})?n.socket.emit("chat message",e):(n.socket.emit("first message",e),n.socket.on("return friend",function(){n.props.getNewFriend()})),n.props.push_message(t),n.setState({content:""});var a=document.getElementById("inputMessage");a.scrollTop=a.scrollHeight,n.socket.emit("typing",Object(f.a)({},e,{isTyping:!1}))}},n.componentWillMount=function(){null===localStorage.getItem("accessToken")&&n.props.history.push("/login"),n.props.getListFriend();var e=localStorage.getItem("accessToken");n.socket=fe()(L.a.url,{query:{token:e}}),n.socket.on("error",function(e){alert("socket error"+e)}),n.socket.on("chat message",function(e){var t={senderID:e.senderID,receiverID:e.receiverID,content:e.content,date_created:Date(Date.now())};e.senderID===n.props.chatReducer.receiverID&&n.props.push_message(t)}),n.socket.on("first message",function(e){var t={senderID:e.senderID,receiverID:e.receiverID,content:e.content,date_created:Date(Date.now())};n.props.getListFriend(),e.senderID===n.props.chatReducer.receiverID&&n.props.push_message(t)}),n.socket.on("is seen",function(){n.props.getListMessage(n.props.chatReducer.receiverID)}),n.socket.on("typing",function(e){e.senderID===n.props.chatReducer.receiverID&&(!0===e.isTyping&&n.setState({typing:!0}),!1===e.isTyping&&n.setState({typing:!1}))})},n.state={open:!1,searchText:"",content:"",typing:!1},n.socket=null,n.handleKeyPressSearch=n.handleKeyPressSearch.bind(Object(N.a)(n)),n.handleKeyPressMessage=n.handleKeyPressMessage.bind(Object(N.a)(n)),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleKeyPressSearch",value:function(e){"Enter"===e.key&&this.handleClickSearch()}},{key:"handleKeyPressMessage",value:function(e){var t={receiverID:this.props.chatReducer.receiverID,senderID:localStorage.getItem("userID")};"Enter"===e.key?this.handleClickSend(e):"Backspace"===e.key&&""===this.state.content&&this.socket.emit("typing",Object(f.a)({},t,{isTyping:!1}))}},{key:"onTyping",value:function(e){this.setState({content:e.target.value});var t={receiverID:this.props.chatReducer.receiverID,senderID:localStorage.getItem("userID")};0===this.state.content.length&&(this.onFocusMessage(),this.socket.emit("typing",Object(f.a)({},t,{isTyping:!0})))}},{key:"componentDidUpdate",value:function(){var e=document.getElementById("inputMessage");e.scrollTop=e.scrollHeight}},{key:"render",value:function(){var e=this,t=this.props.classes;return this.props.findUserReducer.error&&(alert("Find user fail: "+this.props.findUserReducer.error),this.props.signin_fail_handle()),r.a.createElement(Y.a,{container:!0,spacing:0},r.a.createElement(Y.a,{item:!0,xs:12,sm:3},r.a.createElement("div",{className:t.divTop,style:{borderRight:"1px solid #e0e0e0",justifyContent:"center"}},r.a.createElement(ke.a,null,"Chat realtime"))),r.a.createElement(Y.a,{item:!0,xs:12,sm:9},r.a.createElement("div",{className:t.divTop,style:{justifyContent:"space-between"}},r.a.createElement("div",null,r.a.createElement(xe.a,{style:{padding:5}},r.a.createElement(je.a,null)),localStorage.getItem("username")),r.a.createElement(z.a,{variant:"h6"},this.props.chatReducer.titleName),r.a.createElement(ke.a,{onClick:this.onClickLogOut},"Log out"))),r.a.createElement(Y.a,{item:!0,xs:12,sm:3},r.a.createElement("div",{className:t.divBottom,style:{borderRight:"1px solid #e0e0e0"}},r.a.createElement("div",{className:t.searchDiv},r.a.createElement(Ce.a,{placeholder:"Search\u2026",classes:{root:t.inputSearchRoot,input:t.inputSearch},value:this.state.searchText,onChange:function(t){return e.setState({searchText:t.target.value})},onKeyPress:this.handleKeyPressSearch}),r.a.createElement(De.a,{className:t.divider}),r.a.createElement(xe.a,{type:"submit",variant:"outlined",className:t.iconButton,onClick:this.handleClickSearch,disabled:this.props.findUserReducer.isFindUser},r.a.createElement(Se.a,null)),r.a.createElement(dt,{className:t.findUser,open:this.state.open,onClose:this.handleClose})),r.a.createElement("div",null,r.a.createElement(ye.a,{className:t.cardListFriend},r.a.createElement(gt,null))))),r.a.createElement(Y.a,{item:!0,xs:12,sm:9},r.a.createElement("div",{className:t.divBottom},r.a.createElement(ye.a,{className:t.cardMessage},r.a.createElement("div",{id:"inputMessage",style:{overflow:"auto"}},r.a.createElement("ul",null,this.props.chatReducer.listMessage.map(function(t){if(t.senderID===localStorage.getItem("userID")){var n=e.props.chatReducer.listMessage,a=n[n.length-1];return t===a&&!0===a.isSeen?r.a.createElement(Ae,{content:t.content,key:t._id,sender:!0,seen:!0}):r.a.createElement(Ae,{content:t.content,key:t._id,sender:!0})}return r.a.createElement(Ae,{content:t.content,key:t._id,sender:!1})}),r.a.createElement(z.a,{style:{color:"#bdbdbd"}},this.state.typing?"Typing.......":""))),r.a.createElement("div",null,r.a.createElement(J.a,{className:t.messageBar,elevation:4},r.a.createElement(Ce.a,{className:t.input,onFocus:this.onFocusMessage,placeholder:"Message...",value:this.state.content,onChange:function(t){e.onTyping(t)},onKeyUp:this.handleKeyPressMessage}),r.a.createElement(De.a,{className:t.divider}),r.a.createElement(ke.a,{color:"secondary",onClick:function(t){e.handleClickSend(t)}},"Send",r.a.createElement(Ne.a,null))))))))}}]),t}(r.a.Component),Et=Object(d.b)(function(e){return{findUserReducer:e.findUserReducer,chatReducer:e.chatReducer,signinReducer:e.signinReducer}},function(e){return{findUser:function(t){return e(Le(t))},findUser_fail_handle:function(){return e({type:"FINDUSER_FAIL_HANDLE"})},getListFriend:function(){return e(rt())},getListMessage:function(t){return e(it(t))},push_message:function(t){return e(function(e){return{type:"PUSH_MESSAGE",arr:e}}(t))},getNewFriend:function(){return e(function(e){e({type:"CALLING_API"}),at().then(function(t){e(ct(t))}).catch(function(t){e(ot(t))})})},log_out:function(){return e({type:"LOG_OUT"})}}})(Object(Ee.withStyles)(function(e){return{messageBar:{padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"},divider:{width:1,height:40,margin:4},divTop:{padding:e.spacing.unit,display:"flex",flexDirection:"row",borderBottom:"1px solid #e0e0e0"},divBottom:{height:"calc(100vh - "+15*e.spacing.unit+"px)",padding:2*e.spacing.unit},searchDiv:{background:"#e0e0e0",borderRadius:6,color:"#212121",display:"flex",flexDirection:"row"},iconButton:{background:"#bdbdbd"},input:{marginLeft:8,flex:1},inputSearchRoot:{width:"100%"},inputSearch:{paddingLeft:e.spacing.unit},cardMessage:{borderRadius:"6px",height:"calc(100vh - "+13*e.spacing.unit+"px)",display:"flex",flexDirection:"column",justifyContent:"flex-end"},cardListFriend:{marginTop:2*e.spacing.unit,borderRadius:"6px",height:"calc(100vh - "+21*e.spacing.unit+"px)",overflow:"auto"},findUser:{overflow:"auto",height:"calc(100vh - "+21*e.spacing.unit+"px)"},typing:{display:"none"}}})(ft)),vt=n(185),yt=n.n(vt),bt=n(69),St=n.n(bt),It=n(186),Ct=n.n(It),kt=n(184),_t=n.n(kt),jt={root:{flexGrow:1},grow:{flexGrow:1},logo:{width:"37px",height:"30px"},appBar:{display:"flex",justifyContent:"center",alignItems:"center",borderBottom:"1px solid #e0e0e0"},searchDiv:{borderRadius:3,color:"#212121",display:"flex",flexDirection:"row",border:"1px solid #e0e0e0"},inputSearchRoot:{},inputSearch:{paddingLeft:"8px"},divider:{width:1,height:25,margin:4},iconButton:{padding:"5px",background:"#eeeeee"}},Ot=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClickFileManager=function(){n.props.history.push("/fileManager")},n.handleClickMessage=function(){n.props.history.push("/message")},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(M.a,null),r.a.createElement("div",null,r.a.createElement(Y.a,{container:!0,spacing:3},r.a.createElement(Y.a,{item:!0,xs:2,className:e.appBar},r.a.createElement(xe.a,{style:{padding:"0px"}},r.a.createElement("a",{href:"/home"},r.a.createElement("img",{src:de.a,alt:"Smiley face",className:e.logo}))),r.a.createElement(z.a,{variant:"h5"},"Justice Music")),r.a.createElement(Y.a,{item:!0,xs:8,style:jt.appBar},r.a.createElement(A.a,{color:"inherit",onClick:this.handleClickFileManager},"Songs"),r.a.createElement(A.a,{color:"inherit",onClick:this.handleClickFileManager},"Videos"),r.a.createElement(A.a,{color:"inherit",onClick:this.handleClickFileManager},"Artists"),r.a.createElement(A.a,{color:"inherit",onClick:this.handleClickFileManager},"Ranking"),r.a.createElement(A.a,{color:"inherit",onClick:this.handleClickFileManager},"Top 100"),r.a.createElement(A.a,{color:"inherit",onClick:this.handleClickFileManager},"Theme"),r.a.createElement(A.a,{color:"inherit",onClick:this.handleClickFileManager},"Events"),r.a.createElement(A.a,{color:"inherit",onClick:this.handleClickFileManager},"Music news"),r.a.createElement(A.a,{color:"inherit",onClick:this.handleClickFileManager},"ISO"),r.a.createElement("div",{className:e.searchDiv},r.a.createElement(Ce.a,{placeholder:"Search\u2026",classes:{root:e.inputSearchRoot,input:e.inputSearch}}),r.a.createElement(De.a,{className:e.divider}),r.a.createElement(xe.a,{type:"submit",variant:"outlined",className:e.iconButton},r.a.createElement(Se.a,null)))),r.a.createElement(Y.a,{item:!0,xs:2,className:e.appBar},r.a.createElement(xe.a,{color:"inherit"},r.a.createElement(St.a,{badgeContent:17,color:"secondary"},r.a.createElement(_t.a,null))),r.a.createElement(xe.a,{color:"inherit",onClick:this.handleClickMessage},r.a.createElement(St.a,{badgeContent:4,color:"secondary"},r.a.createElement(yt.a,null))),r.a.createElement(xe.a,{color:"inherit"},r.a.createElement(St.a,{badgeContent:17,color:"secondary"},r.a.createElement(Ct.a,null))),r.a.createElement(xe.a,{color:"inherit"},r.a.createElement(je.a,null))))))}}]),t}(r.a.Component),Nt=Object(Ee.withStyles)(jt)(Ot),Rt=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"lalalaa")}}]),t}(a.Component),Dt=(n(444),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onClickGoTo=function(){n.props.history.push("/login")},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"background"},r.a.createElement(M.a,null),r.a.createElement("div",{id:"wrapper"},r.a.createElement(z.a,{variant:"h2",style:{color:"black"}},"Justice Music"),r.a.createElement("img",{src:de.a,alt:"Justice Music",style:{height:"100px",width:"100px",margin:"50px"}}),r.a.createElement(z.a,{variant:"h4",style:{marginBottom:"50px",color:"#e0e0e0"}},"A safe place for all your music Intellectual"),r.a.createElement(A.a,{variant:"contained",color:"secondary",style:{padding:"15px",opacity:"0.8"},onClick:this.onClickGoTo},r.a.createElement(z.a,{style:{color:"white"}},"Getting started"))))}}]),t}(a.Component)),wt=function(){return r.a.createElement(j.a,null,r.a.createElement("div",null,r.a.createElement(O.a,{exact:!0,path:"/",component:Dt}),r.a.createElement(O.a,{path:"/home",component:Nt}),r.a.createElement(O.a,{path:"/login",component:he}),r.a.createElement(O.a,{path:"/message",component:Et}),r.a.createElement(O.a,{path:"/fileManager",component:Rt})))},xt=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:_},r.a.createElement(wt,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(xt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,n){e.exports=n.p+"static/media/logo.3188ed62.png"}},[[257,1,2]]]);
//# sourceMappingURL=main.69014d1f.chunk.js.map