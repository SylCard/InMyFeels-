(this.webpackJsonpinmyfeels=this.webpackJsonpinmyfeels||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(3),r=a.n(i),o=(a(15),a(4)),c=a(5),l=a(1),m=a(9),u=a(8),p=a(6),d=["user-top-read","user-read-currently-playing","user-read-playback-state"],g=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{});window.location.hash="";var y=g,h=(a(16),a(17),a(18),function(e){var t={backgroundImage:"url(".concat(e.item.album.images[0].url,")")},a={width:100*e.progress_ms/e.item.duration_ms+"%"};return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"main-wrapper"},s.a.createElement("div",{className:"now-playing__img"},s.a.createElement("img",{src:e.item.album.images[0].url})),s.a.createElement("div",{className:"now-playing__side"},s.a.createElement("div",{className:"now-playing__name"},e.item.name),s.a.createElement("div",{className:"now-playing__artist"},e.item.artists[0].name),s.a.createElement("div",{className:"now-playing__status"},e.is_playing?"Playing":"Paused"),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progress__bar",style:a}))),s.a.createElement("div",{className:"background",style:t})," "))}),f=a(7);function _(e){var t=s.a.useState({}),a=Object(f.a)(t,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){console.log(e.item.id),fetch("https://inmyfeels.herokuapp.com/api/mood/"+e.item.id).then((function(e){return e.json()})).then((function(e){r(e)}))}),[e.item]),s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null," Mood: ",!i&&"loading..."," ",i&&i.mood))}var v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={token:null,item:{album:{images:[{url:""}]},name:"",artists:[{name:""}],duration_ms:0},is_playing:"Paused",progress_ms:0},e.getCurrentlyPlaying=e.getCurrentlyPlaying.bind(Object(l.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=y.access_token;e&&(this.setState({token:e}),this.getCurrentlyPlaying(e))}},{key:"getCurrentlyPlaying",value:function(e){var t=this;p.ajax({url:"https://api.spotify.com/v1/me/player",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){console.log(e),t.setState({item:e.item,is_playing:e.is_playing,progress_ms:e.progress_ms})}}),setTimeout((function(){return t.getCurrentlyPlaying(e)}),1e3)}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",null,"In my Feels "),s.a.createElement("br",null),!this.state.token&&s.a.createElement("a",{className:"btn btn--loginApp-link",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("1f6e7665f5c74cf8bc7d1c880321b6f3","&redirect_uri=").concat("https://sylcard.github.io/InMyFeels-/","&scope=").concat(d.join("%20"),"&response_type=token&show_dialog=true")},"Login to Spotify"),this.state.token&&s.a.createElement(s.a.Fragment,null,s.a.createElement(h,{item:this.state.item,is_playing:this.state.is_playing,progress_ms:this.state.progress_ms}),s.a.createElement(_,{item:this.state.item}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.f0a5ad31.chunk.js.map