(function(t){function e(e){for(var a,l,r=e[0],o=e[1],c=e[2],h=0,d=[];h<r.length;h++)l=r[h],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&d.push(s[l][0]),s[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,r=1;r<i.length;r++){var o=i[r];0!==s[o]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=i[0]))}return t}var a={},s={app:0},n=[];function l(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=a,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(i,a,function(e){return t[e]}.bind(null,a));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"105e":function(t,e,i){},"154a":function(t,e,i){},1744:function(t,e,i){},"191d":function(t,e,i){},2772:function(t,e,i){"use strict";i("385b")},"385b":function(t,e,i){},"4ecd":function(t,e,i){"use strict";i("fd05")},"51c3":function(t,e,i){"use strict";i("b868")},"56d7":function(t,e,i){"use strict";i.r(e);var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("NavMenu"),i("router-view",{staticClass:"main"}),i("Player")],1)},n=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-aside",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isMobile,expression:"!this.$store.state.isMobile"}],attrs:{width:"auto"}},[i("transition",{attrs:{"enter-class":"animate__animated animate__fadeIn animate__delay-11s","leave-active-class":"animate__animated animate__zoomOutLeft"}},[i("el-menu",{attrs:{router:"","active-text-color":"#ffb199","default-active":this.$route.path,collapse:this.$store.state.isCollapse}},[i("p",[i("i",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isCollapse,expression:"!this.$store.state.isCollapse"}],staticClass:"el-icon-user-solid user"})]),t._l(t.items,(function(e){return i("el-menu-item",{key:e.icon,attrs:{index:e.path}},[i("i",{class:e.icon}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])}))],2)],1)],1)},r=[],o={name:"navMeau",props:["isCollapse","isMobile"],computed:{items(){return[{path:this.$store.state.routeAbout.path,title:"发现音乐",icon:"el-icon-discover"},{path:"/fm",title:"私人FM",icon:"el-icon-headset"},{path:"/mv",title:"MV",icon:"el-icon-video-camera"}]}}},c=o,u=(i("2772"),i("2877")),h=Object(u["a"])(c,l,r,!1,null,null,null),d=h.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{directives:[{name:"show",rawName:"v-show",value:"/mv"!==this.$route.path,expression:"this.$route.path !== '/mv'"}],staticClass:"player",attrs:{type:"flex",justify:"space-around",align:"middle",gutter:20}},[i("audio",{ref:"audio",attrs:{autoplay:""}},[i("source",{attrs:{src:t.url,type:"audio/mp3"}})]),i("el-slider",{staticClass:"time animate__animated animate__slideInLeft",attrs:{"stroke-width":26,"show-tooltip":!1},on:{change:t.changeProgress},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}}),i("el-col",{attrs:{span:4}},[i("div",{staticClass:"cover"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:t.picUrl}})]),i("span",[t._v(" "+t._s(t.playList[t.playingIndex].title))]),i("span",{staticClass:"small"},[t._v(" "+t._s(t.playList[t.playingIndex].singer)+" ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.isMobile,expression:"this.$store.state.isMobile"}],staticClass:"contorl simplify "},[i("i",{class:t.playBtn,on:{click:function(e){t.isPlaying=!t.isPlaying}}})])])]),i("el-col",{attrs:{span:14}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isMobile,expression:"!this.$store.state.isMobile"}],staticClass:"contorl"},[i("div",{staticClass:"animate__animated animate__flipInX"},[i("el-popover",{attrs:{placement:"top-start",width:"300",trigger:"hover",content:"列表为空",title:"正在播放"}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.playList.slice(1),height:"350px","show-header":!1},on:{"row-click":t.rowDblclick}},[i("el-table-column",{attrs:{width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("i",{staticClass:"el-icon-time"}),i("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.title))])]}}])}),i("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{staticStyle:{"margin-right":"-90px"},attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(i){return t.handleDelete(e.$index,e.row)}}})]}}])})],1),i("i",{staticClass:"el-icon-s-unfold mid",attrs:{slot:"reference"},slot:"reference"})],1),i("i",{staticClass:"mid el-icon-d-arrow-left",attrs:{title:"后退两秒"},on:{click:function(e){t.setCurrentTime=t.currentTime-2}}}),i("span",{staticClass:"small duration"},[t._v(t._s(t.currentTimeForm))]),i("i",{staticClass:"el-icon-caret-left",attrs:{title:"上一首"},on:{click:function(e){return t.goBack(-1)}}}),i("i",{class:t.playBtn,on:{click:t.playState}}),i("i",{staticClass:"el-icon-caret-right",attrs:{title:"下一首"},on:{click:function(e){return t.goBack(1)}}}),i("span",{staticClass:"small duration"},[t._v(t._s(t.durationTimeForm))]),i("i",{staticClass:"mid el-icon-d-arrow-right",attrs:{title:"快进两秒"},on:{click:function(e){t.setCurrentTime=t.currentTime+2}}}),i("i",{staticClass:"mid el-icon-star-off"})],1)])]),i("el-col",{attrs:{span:4}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isCollapse,expression:"!this.$store.state.isCollapse"}],staticClass:"setting"},[i("el-slider",{attrs:{"stroke-width":26},model:{value:t.volume,callback:function(e){t.volume=e},expression:"volume"}})],1)])],1)},m=[],g=i("2f62"),y={name:"player",data(){return{playBtn:"el-icon-video-play",url:"",picUrl:"",audio:null,volume:20,progress:0,currentTime:0,duration:0,setCurrentTime:0,currentTimeForm:"0:00",durationTimeForm:"0:00"}},watch:{currentTime(t){this.progress=t/this.duration*100,this.currentTimeForm=this.timeFormt(t)},setCurrentTime(t){t&&(this.audio.currentTime=t)},volume(t){this.audio.volume=t/100},playingIndex:{handler(t){t!==this.playList.length?t<1?this.changePlayingIndex(this.playList.length-1):(this.isPlaying=!1,this.url=this.playList[t].url,this.picUrl=this.playList[t].picUrl,this.$nextTick(()=>{this.isPlaying=!0})):this.changePlayingIndex(1)}},isPlaying:{handler(t){this.$nextTick(()=>{t?(this.playBtn="el-icon-video-pause",this.audio.load(),this.audio.play()):(this.playBtn="el-icon-video-play",this.audio.pause())})},immediate:!0}},computed:{...Object(g["d"])("playerAbout",["playList","playingIndex"]),isPlaying:{get(){return this.$store.state.playerAbout.isPlaying},set(t){this.$store.state.playerAbout.isPlaying=t}}},methods:{...Object(g["c"])("playerAbout",["changePlayingIndex"]),timeFormt(t){t=Math.ceil(1*t);let e=parseInt(t/60),i=t%60;return i<10&&(i="0"+i),e+":"+i},changeProgress(t){this.setCurrentTime=t/100*this.duration},playState(){0!==this.duration&&this.playList.length>1&&(this.isPlaying=!this.isPlaying)},goBack(t){1!==this.playList.length&&this.changePlayingIndex(this.playingIndex+t)},handleDelete(t){this.playList.splice(t,1),this.playingIndex>t&&this.changePlayingIndex(this.playingIndex-1),t===this.playList.length&&this.changePlayingIndex(0)},rowDblclick(t){let e=this.playList.findIndex(e=>e.id===t.id);this.changePlayingIndex(e)},makerAudio(){this.audio=this.$refs.audio,this.audio.addEventListener("canplay",()=>{this.duration=this.audio.duration,this.durationTimeForm=this.timeFormt(this.duration)}),this.audio.addEventListener("timeupdate",()=>{this.currentTime=this.audio.currentTime}),this.audio.addEventListener("ended",()=>{this.changePlayingIndex(this.playingIndex+1)})}},mounted(){this.makerAudio()}},f=y,v=(i("5eae"),Object(u["a"])(f,p,m,!1,null,"3c4d69a6",null)),b=v.exports,_={name:"App",components:{NavMenu:d,Player:b},data(){return{screenWidth:document.body.clientWidth}},watch:{screenWidth:{handler(t){this.$store.state.isCollapse=!(t>1200),this.$store.state.isMobile=!(t>540)},immediate:!0}},mounted(){window.onresize=()=>{this.screenWidth=document.body.clientWidth}}},w=_,x=(i("034f"),Object(u["a"])(w,s,n,!1,null,null,null)),C=x.exports,$=i("8c4f"),L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-header",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isMobile,expression:"!this.$store.state.isMobile"}]},[i("TopBar")],1),i("el-main",[i("transition",{attrs:{"enter-active-class":"animate__animated  animate__fadeIn "}},[i("router-view")],1)],1)],1)},P=[],I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isMobile,expression:"!this.$store.state.isMobile"}],attrs:{type:"flex",justify:"end"}},[i("el-col",{attrs:{span:19}},[i("Tages")],1),i("el-col",{attrs:{span:5}},[i("Search",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isCollapse,expression:"!this.$store.state.isCollapse"}]})],1)],1)},k=[],j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-menu",{attrs:{router:"","active-text-color":"#7a7374","default-active":this.$route.path,mode:"horizontal"}},t._l(t.tags,(function(e){return i("el-menu-item",{key:e.path,attrs:{index:e.path}},[t._v(t._s(e.title))])})),1)},O=[],T={name:"tages",data(){return{tags:[{path:"/",title:"个性推荐"},{path:"/list",title:"歌单"},{path:"/newest",title:"最新音乐"}]}},watch:{"$route.path":{handler(t){this.changePath(t)},immediate:!0}},methods:{...Object(g["c"])("routeAbout",["changePath"])}},A=T,S=(i("7244"),Object(u["a"])(A,j,O,!1,null,null,null)),M=S.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-autocomplete",{attrs:{"fetch-suggestions":t.querySearchAsync,placeholder:"请输入内容"},on:{select:t.handleSelect},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})},F=[],U=i("bc3a"),D=i.n(U);const N=D.a.create({baseURL:"https://music-api-khaki.vercel.app/",headers:{"X-Requested-With":"XMLHttpRequest"},maxRedirects:5,proxy:{protocol:"https",host:"127.0.0.1",port:8e3}});function q(t,e={}){return new Promise(i=>{N.get(t,{params:e}).then(t=>{i(t)})})}const z=t=>q("search",t),B=()=>q("banner"),R=()=>q("/playlist/highquality/tags"),W=t=>q("/top/playlist/highquality",t),H=t=>q("/top/playlist",t),X=t=>q("/playlist/detail",t),J=t=>q("/song/detail",t),V=()=>q("/top/song?type=7");var G={name:"search",data(){return{typeSuggest:[],state:"",timeout:0}},watch:{state:{handler(t){t&&z({keywords:t}).then(t=>{let e=t.data.result.songs;this.typeSuggest=e.map(t=>Object.assign({id:t.id,title:t.name,singer:t.artists[0].name,duration:this.timeFormt(t.duration),value:t.name+`（歌手: ${t.artists[0].name}）`}))})}}},methods:{timeFormt(t){t=Math.ceil(t/1e3);let e=parseInt(t/60),i=t%60;return e+":"+i},...Object(g["b"])("playerAbout",["pushSong"]),...Object(g["c"])("playerAbout",["changePlayingIndex"]),querySearchAsync(t,e){clearTimeout(this.timeout),t?this.timeout=1e4*Math.random():this.typeSuggest=[],this.timeout=setTimeout(()=>{var t=this.typeSuggest;e(t)},this.timeout)},handleSelect(t){let e=Object.assign({},{id:t.id,title:t.title,singer:t.singer,duration:t.duration,url:"https://music.163.com/song/media/outer/url?id="+t.id});this.pushSong(e),this.$store.state.playerAbout.playList.includes(e)?this.$message.success({message:"添加列表成功，下一首播放",showClose:!1}):this.$message.error({message:"歌曲已存在",showClose:!1}),this.$store.state.playerAbout.isPlaying||this.changePlayingIndex(this.$store.state.playerAbout.playingIndex+1)}}},K=G,Q=(i("51c3"),Object(u["a"])(K,E,F,!1,null,null,null)),Y=Q.exports,Z={name:"topBar",components:{Tages:M,Search:Y}},tt=Z,et=(i("be89"),Object(u["a"])(tt,I,k,!1,null,null,null)),it=et.exports,at={name:"home",components:{TopBar:it}},st=at,nt=(i("4ecd"),Object(u["a"])(st,L,P,!1,null,"69e66c4d",null)),lt=nt.exports,rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Carousel"),i("SongList"),i("h3",[t._v("新歌速递")]),i("Newest",{style:{minHeight:"550px"},attrs:{limit:10}})],1)},ot=[],ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-carousel",{attrs:{"indicator-position":"none",interval:5e3,height:t.imgHeight}},t._l(t.imageUrl,(function(t){return i("el-carousel-item",{key:t,staticClass:"animate__animated  animate__fadeIn",style:{backgroundImage:"url("+t+")"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{src:t,alt:""}})])})),1)],1)},ut=[],ht={name:"carousel",data(){return{imageUrl:[],imgHeight:""}},beforeMount(){this.getPic()},mounted(){this.imgLoad(),window.addEventListener("resize",this.imgLoad,!1)},destroyed(){window.addEventListener("resize",this.imgLoad,!1)},methods:{imgLoad(){this.$nextTick(()=>{var t=window.innerWidth,e=300;e=t>920?300:.27*t,this.imgHeight=e+"px"})},getPic(){B().then(t=>{var e=t.data.banners;this.imageUrl=e.map(t=>t.imageUrl)})}}},dt=ht,pt=(i("58b3"),Object(u["a"])(dt,ct,ut,!1,null,null,null)),mt=pt.exports,gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isFull?i("div",{staticClass:"ad animate__animated animate__bounceInDown animate__delay-.7s",style:{backgroundImage:"url("+t.highquality.coverImgUrl+")"}},[i("img",{staticClass:"dis",attrs:{src:t.highquality.coverImgUrl,lazy:"",alt:"精品歌单封面图片"}}),i("span",{staticClass:"di"},[i("span",{staticClass:"top",on:{click:function(e){return t.goPlay(t.highquality.id)}}},[i("i",{staticClass:"el-icon-medal-1",staticStyle:{paddingRight:"10px"}}),t._v("精品歌单 ")]),i("h2",[t._v(t._s(t.highquality.name))]),i("span",[t._v(t._s(t.highquality.copywriter))])]),i("div",{staticClass:"tag animate__animated  animate__fadeIn animate__delay-1s"},t._l(t.tags,(function(e,a){return i("span",{key:a},[i("span",{staticClass:"item ",class:{active:a===t.tags.isActive},on:{click:function(i){return t.handel(a,e.name)}}},[t._v(" "+t._s(e.name)+" ")])])})),0)]):t._e(),i("h3",{staticClass:"animate__animated  animate__fadeIn animate__delay-1s"},[t._v(" "+t._s(t.songList.title)+" ")]),i("el-row",{attrs:{gutter:15}},t._l(t.songList.list,(function(e){return i("el-col",{key:e.id,attrs:{span:4}},[i("el-card",{staticClass:"duck animate__animated animate__flipInX",attrs:{shadow:"hover","body-style":{padding:"0px"},title:e.name}},[i("img",{attrs:{src:e.picUrl,lazy:"",alt:"歌单封面"},on:{click:function(i){return t.goPlay(e.id)}}})])],1)})),1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFull,expression:"isFull"}],staticClass:"block animate__animated  animate__fadeIn animate__delay-2s"},[i("el-pagination",{attrs:{"page-sizes":[18,30,42,60],"page-size":18,"current-page":t.songList.pagination,layout:"total, sizes, prev, pager, next, jumper",total:1200},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},yt=[],ft={name:"songList",data(){return{tags:{isActive:-1},highquality:{coverImgUrl:"",name:"",copywriter:"",id:""},songList:{limit:18,pagination:1,title:"推荐歌单",list:[]}}},props:["isFull"],computed:{offset(){return(this.songList.pagination-1)*this.songList.limit},cat(){return"推荐歌单"===this.songList.title?"全部":this.songList.title},stateChange(){const{limit:t,pagination:e,title:i}=this.songList;return{limit:t,pagination:e,title:i}}},watch:{"songList.title":{handler(){this.loadALl()},immediate:!0},stateChange:{handler(){this.listChange()}},immediate:!0},methods:{handel(t,e){this.tags.isActive=t,this.songList.title=e,this.songList.pagination=1},handleSizeChange(t){this.songList.limit=t},handleCurrentChange(t){this.songList.pagination=t},loadALl(){W({limit:1,cat:this.cat}).then(t=>{let e=t.data.playlists[0];Object.keys(this.highquality).forEach(t=>{this.highquality[t]=e[t]})})},listChange(){H({limit:this.isFull?this.songList.limit:6,offset:this.offset,cat:this.cat}).then(t=>{let e=t.data.playlists,i={};e=e.reduce((function(t,e){return!i[e.id]&&(i[e.id]=t.push(e)),t}),[]),this.songList.list=e.map(t=>Object.assign({id:t.id,picUrl:t.coverImgUrl,name:t.name}))})},goPlay(t){this.$router.push({path:"/list/detail",query:{id:t}})}},beforeMount(){this.$nextTick(()=>{this.listChange()}),R().then(t=>{this.tags=t.data.tags.slice(0,9)})}},vt=ft,bt=(i("f984"),Object(u["a"])(vt,gt,yt,!1,null,"7ba461ad",null)),_t=bt.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("PlayList",{attrs:{tbData:t.tbData}})},xt=[],Ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-table",{attrs:{append:"",stripe:"",height:"100%","highlight-current-row":"","row-class-name":t.tableRowClassName,data:t.tbData,plain:""},on:{"row-dblclick":t.handleRow}},t._l(t.disTitle,(function(t){return i("el-table-column",{key:t.name,attrs:{prop:t.name,label:t.label,width:t.width}})})),1)},$t=[],Lt={name:"playList",props:["tbData"],data(){return{title:[{name:"serial",label:"",width:80},{name:"title",label:"音乐标题",width:350},{name:"pop",label:"热度",width:100},{name:"singer",label:"歌手",width:280},{name:"album",label:"专辑",width:300},{name:"formTime",label:"时长",width:80}],disTitle:[]}},watch:{isMobile:{handler(t){this.disTitle=t?this.title.slice(0,2):this.title},immediate:!0}},computed:{...Object(g["d"])("playerAbout",["isPlaying","playingIndex"]),isMobile(){return this.$store.state.isMobile}},methods:{...Object(g["b"])("playerAbout",["pushSong"]),...Object(g["c"])("playerAbout",["changePlayingIndex"]),tableRowClassName(){return"hot animate__animated animate__flipInX animate__delay-.5s"},handleRow(t){let e=Object.assign({id:t.id,title:t.title,singer:t.singer,duration:t.duration,picUrl:t.picUrl,url:"https://music.163.com/song/media/outer/url?id="+t.id});this.pushSong(e),this.isPlaying?this.$store.state.playerAbout.playList.includes(e)?this.$message.warning({message:"添加列表成功，下一首播放"}):this.$message.error({message:"歌曲已存在"}):(this.$message.success({message:"正在加载，即将播放"}),this.changePlayingIndex(this.playingIndex+1))}}},Pt=Lt,It=Object(u["a"])(Pt,Ct,$t,!1,null,null,null),kt=It.exports,jt={name:"newest",components:{PlayList:kt},props:["limit"],data(){return{tbData:[]}},methods:{timeFormt(t){t=Math.ceil(t/1e3);let e=parseInt(t/60),i=t%60;return i<10&&(i="0"+i),e+":"+i},loadAll(){V().then(t=>{let e=t.data.data;this.limit&&(e=e.splice(0,this.limit)),this.tbData=e.map((t,e)=>Object.assign({serial:e<9?"0"+(e+1):e+1,title:t.alias.length?t.name+"（"+t.alias+"）":t.name,pop:t.popularity,singer:t.artists[0].name,album:t.album.name,duration:t.duration,formTime:this.timeFormt(t.duration),id:t.id,picUrl:t.album.picUrl}))})}},mounted(){this.loadAll()}},Ot=jt,Tt=Object(u["a"])(Ot,wt,xt,!1,null,null,null),At=Tt.exports,St={name:"discovery",components:{Carousel:mt,SongList:_t,Newest:At}},Mt=St,Et=Object(u["a"])(Mt,rt,ot,!1,null,null,null),Ft=Et.exports,Ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-view")},Dt=[],Nt={name:"list"},qt=Nt,zt=Object(u["a"])(qt,Ut,Dt,!1,null,null,null),Bt=zt.exports,Rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",{staticClass:"ad"},[i("img",{attrs:{src:t.detail.coverImgUrl,lazy:"",alt:"歌单封面"}}),i("span",{staticClass:"dis"},[i("h2",[t._v(t._s(t.detail.name))]),i("el-button",{attrs:{icon:"el-icon-video-play",type:"warning",round:""},on:{click:t.playAll}},[t._v("播放全部")]),i("br"),i("span",[i("strong",[t._v("标签：")]),t._v(t._s(t.detail.tags))]),i("br"),i("span",[i("strong",[t._v("歌曲：")]),t._v(t._s(t.detail.trackCount))]),t._v("｜"),i("span",[i("strong",[t._v("播放：")]),t._v(t._s(t.detail.playCount))]),i("br"),i("span",{staticClass:"di"},[i("strong",[t._v("简介：")]),t._v(t._s(t.detail.description))])],1)]),i("PlayList",{attrs:{tbData:t.tbData}})],1)},Wt=[],Ht={data(){return{detail:{name:"",coverImgUrl:"",tags:[],trackCount:0,playCount:0,description:""},tbData:[]}},components:{PlayList:kt},props:["id"],methods:{...Object(g["c"])("playerAbout",["changePlayingIndex","pushAll"]),timeFormt(t){t=Math.ceil(t/1e3);let e=parseInt(t/60),i=t%60;return i<10&&(i="0"+i),e+":"+i},playAll(){this.$confirm("","该操作会清空当前播放列表，是否继续？",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0,roundButton:!0,showClose:!1}).then(t=>{"confirm"===t&&this.pushAll(this.tbData)}).catch(()=>{this.$message({type:"info",message:"已取消播放全部"})})},load(){X({id:this.id}).then(t=>{let e=t.data.playlist;Object.keys(this.detail).forEach(t=>{this.detail[t]=e[t]});let i=[];e.trackIds.forEach((t,e)=>{i[e]=t.id}),J({ids:i.toString()}).then(t=>{let e=t.data.songs;this.tbData=e.map((t,e)=>Object.assign({serial:e<9?"0"+(e+1):e+1,title:t.name,pop:t.pop,singer:t.ar[0].name,album:t.al.name,duration:t.dt,formTime:this.timeFormt(t.dt),id:t.id,picUrl:t.al.picUrl,url:"https://music.163.com/song/media/outer/url?id="+t.id})),console.log(this.tbData)})})}},beforeMount(){this.load()}},Xt=Ht,Jt=(i("da02"),Object(u["a"])(Xt,Rt,Wt,!1,null,"080db312",null)),Vt=Jt.exports,Gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("fm")])},Kt=[],Qt={},Yt=Qt,Zt=Object(u["a"])(Yt,Gt,Kt,!1,null,null,null),te=Zt.exports,ee=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v("mv")])},ie=[],ae={computed:{...Object(g["d"])("playerAbout",["playList","playingIndex"]),isPlaying:{get(){return this.$store.state.playerAbout.isPlaying},set(t){this.$store.state.playerAbout.isPlaying=t}}},mounted(){this.isPlaying=!1}},se=ae,ne=Object(u["a"])(se,ee,ie,!1,null,null,null),le=ne.exports,re=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",[i("el-main",[i("el-empty",{attrs:{description:"这里什么也没有"}},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.$router.replace("/")}}},[t._v("返回首页")])],1)],1)],1)},oe=[],ce={name:"notFound"},ue=ce,he=Object(u["a"])(ue,re,oe,!1,null,null,null),de=he.exports;a["default"].use($["a"]);var pe=new $["a"]({routes:[{path:"",component:lt,children:[{path:"/",component:Ft},{path:"/list",component:Bt,children:[{path:"",component:_t,props:{isFull:!0}},{path:"detail",component:Vt,props:t=>({id:t.query.id})}]},{path:"/newest",component:At}]},{path:"/fm",component:te},{path:"/mv",component:le},{path:"/*",component:de}]}),me=i("e1bd");a["default"].use(g["a"]);const ge={namespaced:!0,state:()=>({path:"/"}),mutations:{changePath(t,e){t.path=e}}},ye={namespaced:!0,state:()=>({playingIndex:0,isPlaying:!1,playList:[{}]}),mutations:{pushSong(t,e){t.playList.splice(t.playingIndex+1,0,e)},pushAll(t,e){t.playList.splice(1,t.playList.length-1,...e),t.playingIndex=1,console.log(t.playList.length)},changePlayingIndex(t,e){t.playingIndex=e}},actions:{pushSong({commit:t,state:e},i){const a=e.playList.some(t=>{if(t.id===i.id)return!0});a||t("pushSong",i)}}};var fe=new g["a"].Store({modules:{routeAbout:ge,playerAbout:ye},state:{isCollapse:!1,isMobile:!1,nanoid:Object(me["a"])()}}),ve=i("77ed"),be=i.n(ve),_e=(i("154a"),i("0fae"),i("9e2f")),we=i.n(_e);a["default"].use(we.a),a["default"].config.productionTip=!1,a["default"].use(be.a),new a["default"]({render:t=>t(C),router:pe,store:fe}).$mount("#app")},"58b3":function(t,e,i){"use strict";i("e3b9")},"5eae":function(t,e,i){"use strict";i("191d")},"6aae":function(t,e,i){},7244:function(t,e,i){"use strict";i("1744")},"85ec":function(t,e,i){},"89d6":function(t,e,i){},b868:function(t,e,i){},be89:function(t,e,i){"use strict";i("6aae")},da02:function(t,e,i){"use strict";i("105e")},e3b9:function(t,e,i){},f984:function(t,e,i){"use strict";i("89d6")},fd05:function(t,e,i){}});
//# sourceMappingURL=app.1457fd00.js.map