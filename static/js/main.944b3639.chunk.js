(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{20:function(e,t,a){e.exports=a(30)},25:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(18),l=a(3),c=a.n(l),r=a(13),i=a.n(r),s=(a(25),a(14)),o=a(15),m=a(19),u=a(17),d=a(7),p=(a(26),function(){d.a.database().ref("AIRQ/state").set("2")}),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={co2:" ",tvoc:" ",TEMP:" ",RH:" ",AIRQ:" ",ENOSE:" ",TVOC:" "},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=d.a.database().ref().child("test/CO2"),a=d.a.database().ref().child("test/tvoc"),n=d.a.database().ref().child("AirQ"),l=d.a.database().ref().child("test/T"),c=d.a.database().ref().child("test/H"),r=d.a.database().ref().child("ENOSE"),i=d.a.database().ref().child("test/TVOC"),s=t.child("state"),o=a.child("state"),m=l.child("state"),u=c.child("state"),p=n.child("state"),E=r.child("state"),h=i.child("state");o.on("value",(function(t){e.setState({tvoc:t.val()})})),h.on("value",(function(t){e.setState({TVOC:t.val()})})),s.on("value",(function(t){e.setState({co2:t.val()})})),m.on("value",(function(t){e.setState({TEMP:(Math.round(10*Number(t.val()))/10).toString()})})),u.on("value",(function(t){e.setState({RH:(Math.round(10*Number(t.val()))/10).toString()})})),p.on("value",(function(t){e.setState({AIRQ:t.val()})})),E.on("value",(function(t){e.setState({ENOSE:t.val()})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("article",{className:"person"},c.a.createElement("img",{src:"image/noze_logo.png"}),c.a.createElement("div",null,c.a.createElement("h2",null,this.state.ENOSE),c.a.createElement("p",null," Prediction "))),c.a.createElement("article",{className:"person"},c.a.createElement("img",{src:"image/noze_logo.png"}),c.a.createElement("div",null,c.a.createElement("h2",null,this.state.TVOC),c.a.createElement("p",null," Prediction (ppm) "))),c.a.createElement("article",{className:"person"},c.a.createElement("img",{src:"https://e7.pngegg.com/pngimages/823/271/png-clipart-deuterated-acetone-solvent-in-chemical-reactions-carbonyl-group-propionaldehyde-ball-miscellaneous-chemistry-thumbnail.png",alt:"TVOC"}),c.a.createElement("div",null,c.a.createElement("h2",null,this.state.tvoc),c.a.createElement("p",null," ppm "))),c.a.createElement("article",{className:"person"},c.a.createElement("img",{src:"https://runningmagazine.ca/wp-content/uploads/2019/08/gettyimages-1002295536-170667a.jpg",alt:"Temp"}),c.a.createElement("div",null,c.a.createElement("h2",null,this.state.TEMP),c.a.createElement("p",null," \xb0C"))),c.a.createElement("article",{className:"person"},c.a.createElement("img",{src:"https://thumbs.dreamstime.com/b/moisture-percentage-icon-badge-style-one-weather-collection-can-be-used-ui-ux-white-background-127207708.jpg",alt:"RH"}),c.a.createElement("div",null,c.a.createElement("h2",null,this.state.RH),c.a.createElement("p",null," % RH "))),c.a.createElement("button",{className:"btn warning",onClick:p}," START "))}}]),a}(l.Component),h=function(){return c.a.createElement("nav",{className:"Navbar"},c.a.createElement("img",{className:"logo",src:"/image/logo.png",alt:"logo"}),c.a.createElement("h3",{className:"NavH2"},"   "))};var g=function(){return c.a.createElement("div",null,c.a.createElement(h,null),c.a.createElement("main",null,c.a.createElement("section",{className:"container"},c.a.createElement("h2",{className:"location"}," BrAce "),c.a.createElement(E,null))))};a(16).a.initializeApp(Object(n.a)({},{apiKey:"AIzaSyCyOLG-FKDby4ikwmYbOJ80HcdQJdI8qP4",authDomain:"arduino-98c1c.firebaseapp.com",databaseURL:"https://arduino-98c1c.firebaseio.com",projectId:"arduino-98c1c",storageBucket:"arduino-98c1c.appspot.com",messagingSenderId:"843318646252",appId:"1:843318646252:web:6e2ceeff718c04c8205cc9",measurementId:"G-N1XZ9ST4PX"})),i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.944b3639.chunk.js.map