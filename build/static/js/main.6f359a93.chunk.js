(this["webpackJsonpyoutube-dapp"]=this["webpackJsonpyoutube-dapp"]||[]).push([[0],{255:function(e,t,n){},277:function(e,t){},302:function(e,t){},304:function(e,t){},383:function(e,t){},385:function(e,t){},394:function(e,t){},396:function(e,t){},421:function(e,t){},426:function(e,t){},428:function(e,t){},435:function(e,t){},448:function(e,t){},530:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(20),i=n.n(r),c=(n(255),n(36)),l=n(2),o=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("h1",{children:"House Lease"}),Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)("a",{href:"/",children:"Home"}),Object(l.jsx)(c.b,{to:"/aboutUs",children:"About Us"}),Object(l.jsx)(c.b,{to:"/Contact",children:"Contact"})]})]})},u=n(17),d=n.n(u),p=n(29),y=n(41),b=n(64),m=Object(a.createContext)(),f={message:"",balance:0,address:null,tokenBalance:0},j=function(e,t){switch(t.type){case"NEW-ADDRESS":return Object(b.a)(Object(b.a)({},e),{},{address:t.address,message:t.message});case"SET-BALANCE":return Object(b.a)(Object(b.a)({},e),{},{balance:t.balance});case"SET-TOKEN-BALANCE":return Object(b.a)(Object(b.a)({},e),{},{tokenBalance:t.tokenBalance});default:throw new Error("Unknown type of action: ".concat(t.type))}},h=function(e){var t=e.children,n=Object(a.useReducer)(j,f),s=Object(y.a)(n,2),r=s[0],i=s[1];return Object(l.jsx)(m.Provider,{value:{state:r,dispatch:i},children:t})},x=function(){var e=Object(a.useContext)(m),t=e.state,n=e.dispatch;return{balance:t.balance,address:t.address,message:t.message,tokenBalance:t.tokenBalance,setAddress:function(e){n({type:"NEW-ADDRESS",address:e,message:"New address added successfully!"})},setBalance:function(e){n({type:"SET-BALANCE",balance:e})},settokenBalance:function(e){n({type:"SET-TOKEN-BALANCE",tokenBalance:e})}}},O=n(30),v=n.n(O),w=function(){var e=Object(a.useState)(null),t=Object(y.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){var e;if(window.ethereum)try{e=new v.a(window.ethereum)}catch(n){console.error(n)}else if(window.web3)e=new v.a(window.web3);else{var t=new v.a.provider.HttpProvider("http://127.0.0.1:7545");e=new v.a(t)}s(e)}),[]),n},g=n(564),T=n(22),k=n(60),B=function(){var e=x(),t=e.balance,n=e.address,a=(e.message,e.setAddress),s=e.setBalance,r=e.settokenBalance,i=e.tokenBalance,c=w(),u=Object(T.f)(),y=function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=12;break}return e.prev=1,e.next=4,window.ethereum.enable();case 4:c.eth.getAccounts().then((function(e){a(e[0]),b(e[0]),m(e[0])})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:e.next=13;break;case 12:alert("Metamask extensions not detected!");case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.eth.getBalance(t).then((function(e){s(c.utils.fromWei(e,"ether"))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new c.eth.Contract(k.leaseTokenAbi,k.lease_token_contract_address),e.next=3,n.methods.balanceOf(t).call();case 3:a=e.sent,r(c.utils.fromWei(a,"ether"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(o,{}),n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:[" Your account: ",n]}),Object(l.jsxs)("p",{children:[" Ether Balance: ",t," "]}),Object(l.jsxs)("p",{children:[" LTOK Balance: ",i," "]})]}):null,Object(l.jsxs)("p",{children:[" ",Object(l.jsx)(g.a,{onClick:function(){return y()},variant:"outlined",color:"primary",children:"Connect your wallet"})]}),"\xa0",Object(l.jsxs)("p",{children:[Object(l.jsx)(g.a,{Link:!0,onClick:function(){return u.push("/tenant")},variant:"outlined",color:"primary",children:"Tenant"}),"\xa0\xa0\xa0",Object(l.jsx)(g.a,{onClick:function(){return u.push("/landlord")},variant:"outlined",color:"primary",children:"HouseOwner"})]})]})},C=n(563),L=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("h1",{children:"House Lease"}),Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)("a",{href:"/",children:"Home"}),Object(l.jsx)(c.b,{to:"/createLease",children:"Create Lease"}),Object(l.jsx)(c.b,{to:"/viewOwnerLease",children:"My Leases"})]})]})},N=n(61),M=n.n(N),_=n(60),I=function(){var e=x(),t=(e.balance,e.address),n=(e.message,e.setAddress,e.setBalance,e.settokenBalance,e.tokenBalance,w()),a=function(){var e=Object(p.a)(d.a.mark((function e(a){var s,r,i,c,l,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),s=a.target[0].value,r=a.target[1].value,i=a.target[2].value,c=a.target[3].value,l=new n.eth.Contract(_.abi,_.contract_address),"3BmVMJhUffhBdL0aOvYuBzngIRp1",o=M()(),e.next=10,l.methods.createLease("3BmVMJhUffhBdL0aOvYuBzngIRp1",s,r,i,c,o).send({from:t});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(L,{}),Object(l.jsxs)("form",{onSubmit:function(e){return a(e)},children:[Object(l.jsxs)("p",{children:[" ",Object(l.jsx)(C.a,{required:!0,label:"Name",inputProps:{step:"any"},type:"text",variant:"filled"})]}),Object(l.jsx)("p",{children:Object(l.jsx)(C.a,{required:!0,label:"House Address",variant:"filled",type:"text"})}),Object(l.jsx)("p",{children:Object(l.jsx)(C.a,{required:!0,label:"End of lease time",inputProps:{step:"any"},type:"number",variant:"filled"})}),Object(l.jsx)("p",{children:Object(l.jsx)(C.a,{required:!0,label:"Amount of LTOK",variant:"filled",type:"number"})}),Object(l.jsx)(g.a,{style:{margin:"10px"},type:"submit",variant:"outlined",color:"default",children:"Create Lease"})]})]})},A=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("h1",{children:"House Lease"}),Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)("a",{href:"/",children:"Home"}),Object(l.jsx)(c.b,{to:"/viewLease",children:"View Leases"}),Object(l.jsx)(c.b,{to:"/getDoorCode",children:"Get Door Code"})]})]})},E=n(60),D=function(){var e,t=x(),n=(t.balance,t.address),s=(t.message,t.setAddress,t.setBalance,t.settokenBalance,t.tokenBalance,w()),r=Object(a.useState)(null),i=Object(y.a)(r,2),c=i[0],o=i[1],u=function(){var t=Object(p.a)(d.a.mark((function t(){var n,a,s,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.ethereum)try{e=new v.a(window.ethereum)}catch(i){console.error(i)}else window.web3&&(e=new v.a(window.web3));return n=new e.eth.Contract(E.abi,E.contract_address),a=0,s=[],r=[],t.next=7,n.methods.listAllLeaseIds().call();case 7:return t.sent.forEach((function(e){s.push(n.methods.getLeaseData(e).call().then((function(t){var n={id:a+=1,leaseId:e,uid:t.uid,landlordName:t.landlordName,home_addr:t.home_addr,lease_expiry:t.timestamp,price:t.value};r.push(n)})))})),t.abrupt("return",Promise.all(s).then((function(e){o(r)})));case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new s.eth.Contract(E.abi,E.contract_address),"Hafiz","3Hz1jaYhetOtRP3EvCPNHDCFpdw2",e.next=5,a.methods.makePayment("3Hz1jaYhetOtRP3EvCPNHDCFpdw2",t,"Hafiz").send({from:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){u()}),[]),Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(A,{}),c&&c.map((function(e){return Object(l.jsxs)("div",{className:"blog-preview",children:[Object(l.jsx)("h2",{children:e.leaseId}),Object(l.jsxs)("p",{children:[" ",e.landlordName]}),Object(l.jsxs)("p",{children:[" ",e.home_addr]}),Object(l.jsxs)("p",{children:[" ",e.lease_expiry]}),Object(l.jsxs)("p",{children:[" ",e.price/Math.pow(10,18)]}),Object(l.jsx)("p",{children:Object(l.jsx)(g.a,{onClick:function(){return b(e.leaseId)},variant:"outlined",color:"primary",children:"Make Payment"})})]},e.id)}))]})},H=(n(60),function(){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(A,{}),Object(l.jsx)("p",{children:"Welcome to House Lease.Choose your leases."})]})}),P=(n(60),function(){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(L,{}),Object(l.jsx)("p",{children:"Welcome to House Lease.Lets create your lease."})]})}),S=n(60),R=function(){var e,t=x(),n=(t.balance,t.address),s=(t.message,t.setAddress,t.setBalance,t.settokenBalance,t.tokenBalance,w()),r=Object(a.useState)(null),i=Object(y.a)(r,2),c=i[0],o=i[1],u=function(){var t=Object(p.a)(d.a.mark((function t(){var n,a,s,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.ethereum)try{e=new v.a(window.ethereum)}catch(i){console.error(i)}else window.web3&&(e=new v.a(window.web3));return n=new e.eth.Contract(S.abi,S.contract_address),a=0,s=[],r=[],"3BmVMJhUffhBdL0aOvYuBzngIRp1",t.next=8,n.methods.listLandlordLeaseIds("3BmVMJhUffhBdL0aOvYuBzngIRp1").call();case 8:return t.sent.forEach((function(e){s.push(n.methods.getLeaseData(e.leaseId).call().then((function(t){var n={id:a+=1,leaseId:e.leaseId,home_addr:t.home_addr,lease_expiry:t.timestamp,price:t.value};r.push(n)})))})),t.abrupt("return",Promise.all(s).then((function(e){o(r)})));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(d.a.mark((function e(t,a){var r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target[0].value,i=new s.eth.Contract(S.abi,S.contract_address),e.next=5,i.methods.giveDoorCode(r,a).send({from:n});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){u()}),[]),Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(L,{}),c&&c.map((function(e){return Object(l.jsxs)("div",{className:"blog-preview",children:[Object(l.jsx)("h2",{children:e.leaseId}),Object(l.jsxs)("p",{children:[" ",e.home_addr]}),Object(l.jsxs)("p",{children:[" ",e.lease_expiry]}),Object(l.jsxs)("p",{children:[" ",e.price/Math.pow(10,18)]}),Object(l.jsx)("p",{children:Object(l.jsx)(g.a,{variant:"outlined",color:"primary",children:"Delete Lease"})}),"\xa0\xa0\xa0",Object(l.jsx)("form",{onSubmit:function(t){return b(t,e.leaseId)},children:Object(l.jsxs)("p",{children:[Object(l.jsx)(C.a,{required:!0,label:"Door Code",inputProps:{step:"any"},type:"text",variant:"filled"}),"\xa0\xa0\xa0",Object(l.jsx)(g.a,{type:"submit",variant:"outlined",color:"primary",children:"Send Door Code"})]})})]},e.id)}))]})},z=n(60),W=function(){var e,t=x(),n=(t.balance,t.address,t.message,t.setAddress,t.setBalance,t.settokenBalance,t.tokenBalance,"3Hz1jaYhetOtRP3EvCPNHDCFpdw2"),s=Object(a.useState)(null),r=Object(y.a)(s,2),i=r[0],c=r[1],o=function(){var t=Object(p.a)(d.a.mark((function t(){var a,s,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.ethereum)try{e=new v.a(window.ethereum)}catch(i){console.error(i)}else window.web3&&(e=new v.a(window.web3));return a=new e.eth.Contract(z.abi,z.contract_address),t.next=4,a.methods.tenants(n).call();case 4:return s=t.sent,t.next=7,a.methods.getDoorCode(n,s).call();case 7:r=t.sent,c(r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){o()})),Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(A,{}),Object(l.jsx)("p",{children:i})]})};var Y=function(){return Object(l.jsx)(c.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(T.c,{children:[Object(l.jsx)(T.a,{exact:!0,path:"/",children:Object(l.jsx)(B,{})}),Object(l.jsx)(T.a,{exact:!0,path:"/createLease",children:Object(l.jsx)(I,{})}),Object(l.jsx)(T.a,{exact:!0,path:"/viewLease",children:Object(l.jsx)(D,{})}),Object(l.jsx)(T.a,{exact:!0,path:"/tenant",children:Object(l.jsx)(H,{})}),Object(l.jsx)(T.a,{exact:!0,path:"/landlord",children:Object(l.jsx)(P,{})}),Object(l.jsx)(T.a,{exact:!0,path:"/viewOwnerLease",children:Object(l.jsx)(R,{})}),Object(l.jsx)(T.a,{exact:!0,path:"/getDoorCode",children:Object(l.jsx)(W,{})})]})})})})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(h,{children:Object(l.jsx)(Y,{})})}),document.getElementById("root"))},60:function(e){e.exports=JSON.parse('{"abi":[{"constant":false,"inputs":[{"internalType":"string","name":"uid","type":"string"},{"internalType":"string","name":"landlordName","type":"string"},{"internalType":"string","name":"home_addr","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"string","name":"leaseId","type":"string"}],"name":"createLease","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_holdingWalletAddr","type":"address"},{"internalType":"address","name":"_token","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"doorCode","type":"string"},{"indexed":false,"internalType":"string","name":"leaseId","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"doorCodeSent","type":"event"},{"constant":false,"inputs":[{"internalType":"string","name":"doorCode","type":"string"},{"internalType":"string","name":"leaseId","type":"string"}],"name":"giveDoorCode","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"landlordName","type":"string"},{"indexed":false,"internalType":"address payable","name":"_landlordAddr","type":"address"},{"indexed":false,"internalType":"string","name":"home_addr","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"string","name":"leaseId","type":"string"}],"name":"leaseCreated","type":"event"},{"constant":false,"inputs":[{"internalType":"string","name":"uid","type":"string"},{"internalType":"string","name":"leaseId","type":"string"},{"internalType":"string","name":"tenantName","type":"string"}],"name":"makePayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"leaseId","type":"string"}],"name":"refund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"leaseId","type":"string"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"refundDone","type":"event"},{"constant":false,"inputs":[{"internalType":"string","name":"leaseId","type":"string"}],"name":"sendPayout","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"leaseId","type":"string"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"sendPayoutDone","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tenant","type":"address"},{"indexed":false,"internalType":"string","name":"leaseId","type":"string"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"tenantPay","type":"event"},{"constant":true,"inputs":[{"internalType":"string","name":"tenant_uid","type":"string"},{"internalType":"string","name":"leaseId","type":"string"}],"name":"getDoorCode","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"leaseId","type":"string"}],"name":"getLeaseData","outputs":[{"internalType":"string","name":"uid","type":"string"},{"internalType":"string","name":"landlordName","type":"string"},{"internalType":"string","name":"home_addr","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"holdingWalletAddr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LeaseIds","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"listAllLeaseIds","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"owner_uid","type":"string"}],"name":"listLandlordLeaseIds","outputs":[{"components":[{"internalType":"string","name":"leaseId","type":"string"}],"internalType":"struct houseLease.owner_lease_id[]","name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"owners","outputs":[{"internalType":"string","name":"leaseId","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"tenants","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}],"contract_address":"0x68a82b5807512c219041f6b2e5fd2f3ee634eb9c","lease_token_contract_address":"0x931147bfc1c2183bf764b673fb28cccf575e0628","contract_name":"houseLease","leaseTokenAbi":[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"delegate","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"delegate","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]}')}},[[530,1,2]]]);
//# sourceMappingURL=main.6f359a93.chunk.js.map