(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{63:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(16),s=a.n(r),l=a(31),i=a(5),o=a(37),b=a(38),j=a(45),d=a(44),h=a(4),u=a(9),O=a(79),p=a(78),f=a(76),x=a(75),m=a(80),g=a(30),v=a.n(g),N=a(43),w=a.n(N),_=a(2),k=Object(x.a)((function(e){var t,a;return{scaled_font:(t={},Object(h.a)(t,e.breakpoints.down("sm"),{fontSize:"8.5pt"}),Object(h.a)(t,e.breakpoints.up("sm"),{fontSize:"8.7pt"}),Object(h.a)(t,e.breakpoints.up("md"),{fontSize:"12pt"}),Object(h.a)(t,e.breakpoints.up("lg"),{fontSize:"13pt"}),t),label:(a={color:"#111",fontFamily:"Arial",paddingTop:"10px"},Object(h.a)(a,e.breakpoints.down("sm"),{fontSize:"10pt",paddingLeft:"15px",paddingRight:"35px"}),Object(h.a)(a,e.breakpoints.up("sm"),{fontSize:"11pt",paddingLeft:"25px",paddingRight:"35px"}),Object(h.a)(a,e.breakpoints.up("md"),{fontSize:"12pt",paddingLeft:"25px",paddingRight:"35px"}),Object(h.a)(a,e.breakpoints.up("lg"),{fontSize:"13pt",paddingLeft:"30px",paddingRight:"40px"}),Object(h.a)(a,"textAlign","left"),a),hr:{border:0,height:"1px",background:"#777"},error_box:{padding:"2px",fontFamily:"Arial",border:"1px solid grey"},error_title:{fontSize:"12pt",padding:0,margin:0},help_icon:{width:"15px",height:"15px"},tooltip_text:{},btn:{color:"green"}}}));function S(e){var t=e.label,a=e.value;return Object(_.jsxs)("p",{style:{textAlign:"left"},children:[t,Object(_.jsx)("span",{style:{float:"right"},children:a})]})}function y(e){var t=k(),a=e.wallets,c=e.deleteWallet;if(!a||0===a.length)return null;var n=a.map((function(e,a){return Object(_.jsxs)(f.a,{className:t.scaled_font,children:[e,Object(_.jsx)(m.a,{size:"small",onClick:function(){return c(a)},style:{color:"#a50156"},children:Object(_.jsx)(v.a,{})})]},a)}));return Object(_.jsx)(O.a,{style:{textAlign:"center"},children:n})}function B(e){var t=1e15,a=k(),c=e.price_bnb,r=e.price_bnb_v2,s=e.price_usd,l=e.balance,i=e.burnt,o=e.wallets,b=e.editWallet,j=e.deleteWallet,d=s*(t-i),h=(i/(t/100)).toFixed(2),u=null!==o&&o.length>0;return Object(_.jsx)(O.a,{children:Object(_.jsxs)(O.a,{className:a.dataDisplay,children:[Object(_.jsx)(O.a,{className:a.label,children:Object(_.jsx)("center",{children:"Live $BONFIRE stats directly from blockchain"})}),Object(_.jsx)("hr",{className:"".concat(a.hr)}),Object(_.jsx)(O.a,{className:a.label,children:Object(_.jsx)(S,{label:"Price (V1):",value:s.toFixed(10)})}),Object(_.jsx)("hr",{className:"".concat(a.hr)}),Object(_.jsx)(O.a,{className:a.label,children:Object(_.jsx)(S,{label:Object(_.jsx)(n.a.Fragment,{children:Object(_.jsx)("span",{children:"Price BNB (V1): "})}),value:c.toFixed(13)})}),Object(_.jsx)("hr",{className:"".concat(a.hr)}),e.fetchV2&&Object(_.jsxs)(n.a.Fragment,{children:[Object(_.jsx)(O.a,{className:a.label,children:Object(_.jsx)(S,{label:Object(_.jsx)(n.a.Fragment,{children:Object(_.jsx)("span",{children:"Price BNB (V2): "})}),value:r.toFixed(13)})}),Object(_.jsx)("hr",{className:"".concat(a.hr)})]}),Object(_.jsx)(O.a,{className:a.label,children:Object(_.jsx)(S,{label:"Marketcap:",value:"$".concat(Number(Math.round(d)).toLocaleString())})}),Object(_.jsx)("hr",{className:"".concat(a.hr)}),Object(_.jsx)(O.a,{className:a.label,children:Object(_.jsx)(S,{label:"Burned:",value:"".concat(i," (").concat(h,"%)")})}),Object(_.jsx)("hr",{className:"".concat(a.hr)}),Object(_.jsxs)(O.a,{className:a.label,children:[Object(_.jsxs)("p",{children:["Wallets:",Object(_.jsx)(m.a,{onClick:function(){b(null,prompt("Enter wallet address:"))},children:Object(_.jsx)(w.a,{className:a.btn})})]}),Object(_.jsx)(y,{wallets:o,deleteWallet:j})]}),u&&Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{className:"".concat(a.hr)}),Object(_.jsx)(O.a,{className:a.label,children:Object(_.jsx)(S,{label:"$BONFIRE balance:",value:l})}),Object(_.jsx)("hr",{className:"".concat(a.hr)}),Object(_.jsx)(O.a,{className:a.label,children:Object(_.jsx)(S,{label:"$USD balance:",value:(l*s).toFixed(3)})}),Object(_.jsx)("hr",{className:"".concat(a.hr)}),Object(_.jsx)(O.a,{className:a.label,children:Object(_.jsx)(S,{label:"$BNB balance:",value:(l*c).toFixed(3)})})]})]})})}function F(e){var t=e.error,a=e.clearError,c=k();return Object(_.jsxs)(O.a,{className:c.error_box,children:[Object(_.jsx)("center",{children:Object(_.jsxs)(O.a,{className:c.error_title,children:["Error",Object(_.jsx)(m.a,{size:"small",onClick:a,children:Object(_.jsx)(v.a,{})})]})}),Object(_.jsx)(f.a,{children:t})]})}var E=a(77);function W(){return Object(_.jsx)("center",{children:Object(_.jsx)(E.a,{style:{color:"grey",marginTop:"10px"}})})}function z(e){var t=JSON.stringify(e);document.cookie="data=".concat(btoa(t),"; expires=Tue, 19 Jan 2038 03:14:07 UTC;")}function C(){try{var e=atob(function(e){var t=document.cookie,a=e+"=",c=t.indexOf("; "+a);if(-1===c){if(0!==(c=t.indexOf(a)))return null}else c+=2;var n=document.cookie.indexOf(";",c);return-1===n&&(n=t.length),unescape(t.substring(c+a.length,n))}("data")),t=JSON.parse(e);if("[object Array]"===Object.prototype.toString.call(t))return t=t.filter((function(e){return!!e}))}catch(a){}return[]}var V=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).handleConnectionError=function(e){alert(e)},n.clearError=function(){n.setState(Object(i.a)(Object(i.a)({},n.state),{},{error:null}))},n.loadWasm=function(){a.e(3).then(a.bind(null,87)).then((function(e){e.init("https://bsc.getblock.io/?api_key=a4bcf03e-c0be-412d-9d8d-35748bd5bad4").then((function(){return n.setState({wasm:e},(function(){n.setState(Object(i.a)(Object(i.a)({},n.state),{},{interval:setInterval(n.refresh,3e3)}),n.refresh)}))})).catch(n.handleConnectionError)})).catch(n.handleConnectionError)},n.fetchPrice=function(){n.state.wasm&&(n.state.wasm.get_price_v1().then((function(e){var t=Object(l.a)(e,2),a=t[0],c=t[1];!function(e){var t=e.toFixed(9).toString();window.document.title="".concat(t," | $BONFIRE")}(c),n.setState(Object(i.a)(Object(i.a)({},n.state),{},{price_bnb:a,price_usd:c}))})).catch((function(e){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{error:e}))})),n.props.fetchV2&&n.state.wasm.get_price_v2().then((function(e){var t=Object(l.a)(e,2),a=t[0];t[1];n.setState(Object(i.a)(Object(i.a)({},n.state),{},{price_bnb_v2:a}))})).catch((function(e){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{error:e}))})))},n.fetchBalance=function(){var e;n.state.wasm&&n.state.wallets&&n.state.wallets.length>0&&n.state.wasm.get_balance((e=n.state.wallets,e.join(","))).then((function(e){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{balance:e}))})).catch((function(e){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{error:e}))}))},n.fetchBurnt=function(){n.state.wasm&&n.state.wasm.get_balance("0x000000000000000000000000000000000000dead").then((function(e){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{burnt:e}))})).catch((function(e){return n.setState(Object(i.a)(Object(i.a)({},n.state),{},{error:e}))}))},n.refresh=function(){n.fetchPrice(),n.fetchBurnt(),n.fetchBalance()},n.editWallet=function(e,t){if(t)if(t=t.trim().toLowerCase(),n.state.wasm.check_address(t)){var a=n.state.wallets;null!==e&&a[e]||-1!==a.indexOf(t)?a[e]=t:a.push(t),n.setState(Object(i.a)(Object(i.a)({},n.state),{},{wallets:a}),(function(){z(a),n.fetchBalance()}))}else alert("Invalid wallet address")},n.deleteWallet=function(e){var t=n.state.wallets;delete t[e],n.setState(Object(i.a)(Object(i.a)({},n.state),{},{wallets:t}),(function(){z(t),n.fetchBalance()}))},n.componentDidMount=function(){n.loadWasm()},n.state={wasm:null,price_usd:null,price_bnb:null,price_bnb_v2:null,balance:null,burnt:null,wallets:C(),error:null},n}return Object(b.a)(c,[{key:"render",value:function(){var e=this.props.classes;return Object(_.jsxs)(O.a,{className:e.root,children:[Object(_.jsxs)(p.a,{className:e.paper,children:[this.state.error&&Object(_.jsx)(F,{error:this.state.error,clearError:this.clearError}),null===this.state.wasm||null===this.state.price_usd||null===this.state.price_bnb_v2&&this.props.fetchV2?Object(_.jsx)(W,{}):Object(_.jsx)(B,Object(i.a)(Object(i.a)({},this.state),{},{editWallet:this.editWallet,deleteWallet:this.deleteWallet,fetchV2:this.props.fetchV2}))]}),Object(_.jsx)(O.a,{className:e.donation_box,children:Object(_.jsxs)("center",{children:[Object(_.jsxs)(f.a,{className:e.donation_label,children:["Donate some ",Object(_.jsx)("img",{width:"16",height:"16",src:"./fire.svg",alt:"bonfire.svg"}),":"]}),Object(_.jsx)(f.a,{className:e.donation_address,children:"0x37A9C69F952E033e11330B7E2F1dDf76a2033Cf7"})]})})]})}}]),c}(n.a.Component),A=Object(u.a)((function(e){var t,a;return{root:{top:0,left:0,minWidth:"100%",minHeight:"100%",background:"linear-gradient(-270deg, #fcae76, #fcb292)"},paper:(t={position:"relative",margin:"auto"},Object(h.a)(t,e.breakpoints.down("sm"),{paddingTop:"5px"}),Object(h.a)(t,e.breakpoints.up("sm"),{padding:"5px"}),Object(h.a)(t,e.breakpoints.up("md"),{padding:"10px"}),Object(h.a)(t,e.breakpoints.up("lg"),{padding:"20px"}),Object(h.a)(t,"minHeight","70vh"),Object(h.a)(t,"width","60vw"),Object(h.a)(t,"minWidth","350px"),Object(h.a)(t,"border","1px solid #aaa"),Object(h.a)(t,"background","#ddd"),Object(h.a)(t,"opacity","0.6"),Object(h.a)(t,"outline","none"),Object(h.a)(t,"transform","translateY(+8%)"),t),donation_box:{paddingTop:"10vh"},donation_label:{color:"#fff"},donation_address:(a={color:"#fff"},Object(h.a)(a,e.breakpoints.down("sm"),{fontSize:"10pt"}),Object(h.a)(a,e.breakpoints.up("sm"),{fontSize:"12pt"}),a)}}))(V);s.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(A,{fetchV2:!0})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.ce2cafb8.chunk.js.map