(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{49:function(n,e,t){"use strict";t.r(e);var r,c,i,o,a,s,l,d,m,u,j,b,p,h,x=t(0),f=t.n(x),g=t(12),O=t.n(g),y=t(8),v=t(2),w=t(16),k=t.n(w),T=t(18),N=t(20),S=t(3),z=v.c.div(r||(r=Object(S.a)(["\n  width: 100%;\n  border: 1px solid ",";\n  background-color: ",";\n  margin-bottom: 2rem;\n"])),(function(n){return n.theme.border}),(function(n){return n.theme.secondaryBackground})),I=v.c.div(c||(c=Object(S.a)(["\n  width: 100%;\n  padding: 1.4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  & .username {\n    font-size: 1.2rem;\n    font-weight: bold;\n    color: ","\n  }\n\n  & .icon {\n    color: ","\n  }\n"])),(function(n){return n.theme.primaryText}),(function(n){return n.theme.primaryText})),B=v.c.div(i||(i=Object(S.a)(["\n  width: 32px;\n  height: 32px;\n  margin-right: 1rem;\n  border-radius: 50%;\n  overflow: hidden;\n\n  & > img {\n    width: 100%;\n  }\n"]))),E=v.c.img(o||(o=Object(S.a)(["\n  width: 100%;\n  min-height: 500px;\n  max-height: 640px;\n  object-fit: cover;\n"]))),C=v.c.div(a||(a=Object(S.a)(["\n  width: 100%;\n  padding: 1.4rem;\n\n  & .likes, & .description {\n    color: ",";\n    font-size: 1.4rem;\n    margin-bottom: 0.5rem;\n  }\n\n  & .comments, & .time {\n    color: ",";\n    font-size: 1.4rem;\n    cursor: pointer;\n  }\n\n  & .time {\n    text-transform: uppercase;\n    font-size: 1rem;\n    margin-top: 1.2rem;\n  }\n"])),(function(n){return n.theme.primaryText}),(function(n){return n.theme.secondaryText})),D=v.c.div(s||(s=Object(S.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n\n  & > div {\n    display: flex;\n    align-items: center;\n    column-gap: 1rem;\n  }\n\n  & .icon {\n    color: ",";\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.primaryText})),P=v.c.div(l||(l=Object(S.a)(["\n  width: 100%;\n  padding: 1rem 1.4rem; \n  border-top: 1px solid ",";\n\n  display: flex;\n  align-items: center;\n\n  & textarea {\n    margin-left: 1rem;\n    resize: none;\n    height: 20px;\n    width: 60%;\n    outline: none;\n    border: none;\n    background-color: transparent;\n    color: ","; \n    font-family: 'Roboto', Arial, Helvetica, sans-seri\n   }\n\n  & textarea::placeholder {\n    color: ",";\n    font-family: 'Roboto', Arial, Helvetica, sans-serif;\n  }\n\n  & .icon {\n    color: ",";\n    cursor: pointer;\n    font-size: 2.5rem\n  }\n\n  & .publish-button {\n    font-size: 1.4rem;\n    color: ",";\n    font-weight: bold;\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n"])),(function(n){return n.theme.border}),(function(n){return n.theme.primaryText}),(function(n){return n.theme.secondaryText}),(function(n){return n.theme.primaryText}),(function(n){return n.theme.linkText})),A=t(24),R=t.n(A),H=t(14),M=t.n(H),_=t(25),J=t.n(_),q=t(26),V=t.n(q),F=t(27),G=t.n(F),K=t(28),L=t.n(K),Q=v.c.div(d||(d=Object(S.a)(["\n  width: 100%;\n  margin-top: 1rem;\n"]))),U=v.c.div(m||(m=Object(S.a)(["\n  width: 100%;\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n\n  & p {\n    color: ",";\n    font-size: 1.2rem;\n  }\n"])),(function(n){return n.theme.primaryText})),W=t(1),X=function(n){var e=n.comments;return console.log(e),Object(W.jsx)(Q,{children:e.map((function(n,e){return Object(W.jsxs)(U,{children:[Object(W.jsx)("p",{children:Object(W.jsx)("strong",{children:n.user})}),Object(W.jsx)("p",{children:n.comment})]})}))})},Y=function(n){var e=n.post,t=f.a.useState(!1),r=Object(y.a)(t,2),c=r[0],i=r[1];return Object(W.jsxs)(z,{children:[Object(W.jsxs)(I,{children:[Object(W.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(W.jsx)(B,{children:Object(W.jsx)("img",{src:e.avatar_url})}),Object(W.jsx)("p",{className:"username",children:e.username})]}),Object(W.jsx)(R.a,{fontSize:"large",className:"icon"})]}),Object(W.jsx)(E,{src:e.content.image}),Object(W.jsxs)(C,{children:[Object(W.jsxs)(D,{children:[Object(W.jsxs)("div",{children:[Object(W.jsx)(M.a,{fontSize:"large",className:"icon"}),Object(W.jsx)(J.a,{fontSize:"large",className:"icon"}),Object(W.jsx)(V.a,{fontSize:"large",className:"icon"})]}),Object(W.jsx)(G.a,{fontSize:"large",className:"icon"})]}),Object(W.jsxs)("p",{className:"likes",children:["Curtido por ",Object(W.jsx)("strong",{children:"teste"})," e ",Object(W.jsx)("strong",{children:"outras pessoas"})]}),Object(W.jsxs)("p",{className:"description",children:[Object(W.jsx)("strong",{children:e.username})," Esse \xe9 um exemplo de descri\xe7\xe3o da postagem"]}),Object(W.jsxs)("p",{className:"comments",style:{display:c?"none":"initial"},onClick:function(){i(!c)},children:["Veja todos os ",e.comments.length," coment\xe1rios"]}),Object(W.jsx)("p",{className:"time",children:"h\xe1 2 horas"}),c?Object(W.jsx)(X,{comments:e.comments}):null]}),Object(W.jsxs)(P,{children:[Object(W.jsxs)("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[Object(W.jsx)(L.a,{className:"icon"}),Object(W.jsx)("textarea",{row:"1",placeholder:"Adicione um coment\xe1rio..."})]}),Object(W.jsx)("p",{className:"publish-button",children:"Publicar"})]})]})},Z=v.c.div(u||(u=Object(S.a)(["\n  max-width: 614px;\n  min-width: 310px;\n  margin: 20px auto;\n\n  & #endScroll {\n    width: 100px;\n    height: 20px;\n  }\n"]))),$=Object(v.d)(j||(j=Object(S.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),nn=v.c.div(b||(b=Object(S.a)(["\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 3px solid ",";\n  border-top: 3px solid ",";\n  margin: 0 auto;\n  animation: "," 2s linear infinite;\n"])),(function(n){return n.theme.secondaryText}),(function(n){return n.theme.primaryText}),$),en="http://localhost:3000",tn=function(){var n=f.a.useState([]),e=Object(y.a)(n,2),t=e[0],r=e[1],c=f.a.useState(1),i=Object(y.a)(c,2),o=i[0],a=i[1],s=f.a.useState(!0),l=Object(y.a)(s,2),d=l[0],m=l[1];return f.a.useEffect((function(){function n(){return(n=Object(N.a)(k.a.mark((function n(){var e,t;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(en,"/posts?_limit=1&_page=").concat(o));case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,r((function(n){return[].concat(Object(T.a)(n),Object(T.a)(t))})),m(!1),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),m(!0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[o]),f.a.useEffect((function(){var n=new IntersectionObserver((function(n){n.some((function(n){return n.isIntersecting}))&&a((function(n){return n+1}))}));return n.observe(document.getElementById("endScroll")),function(){n.disconnect()}}),[]),Object(W.jsxs)(Z,{children:[d&&Object(W.jsx)(nn,{}),!d&&t.map((function(n){return Object(W.jsx)(Y,{post:n},n.id)})),Object(W.jsx)("div",{id:"endScroll"})]})},rn=Object(v.b)(p||(p=Object(S.a)(["\n  :root {\n    font-size: 62.5%;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: 'Roboto', Arial, Helvetica, sans-serif;\n    background-color: ",";\n    transition: all 0.3s;\n  }\n"])),(function(n){return n.theme.primaryBackground})),cn=v.c.div(h||(h=Object(S.a)(["\n  max-width: 975px;\n  min-width: 310px;\n  margin: 0 auto;\n\n  @media screen and (max-width: 980px) {\n    padding: 0 0.6rem;\n  }\n"]))),on=function(){return Object(W.jsx)(cn,{children:Object(W.jsx)(tn,{})})};function an(){return(an=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function sn(n,e){if(null==n)return{};var t,r,c=function(n,e){if(null==n)return{};var t,r,c={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(c[t]=n[t]);return c}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(c[t]=n[t])}return c}var ln=x.createElement("path",{d:"M9.5263.182C5.7383 1.7671 1.573 6.2405.2583 11.8671-1.4097 18.99 5.525 21.998 6.0916 21.0166c.6667-1.164-1.2466-1.5547-1.6373-5.248-.5027-4.776 1.712-10.112 4.5067-12.4534.5213-.428.496.176.496 1.2894 0 2.008-.112 19.9733-.112 23.724 0 5.0773-.208 6.676-.592 8.2546-.3774 1.6054-.988 2.688-.528 3.1094.5213.4653 2.736-.6427 4.02-2.4347 1.536-2.1467 2.0773-4.7267 2.1773-7.5267.1133-3.372.1067-8.7333.1133-11.7853 0-2.8067.044-11.012-.044-15.952C14.4663.786 11.1063-.4794 9.5263.182m174.644 26.6547c-.5414 0-.7987.5666-1.0067 1.5173-.7173 3.316-1.472 4.064-2.448 4.064-1.088 0-2.064-1.6413-2.3213-4.9267-.1947-2.58-.164-7.3373.088-12.0693.0507-.9693-.2147-1.9307-2.82-2.8813-1.1254-.4027-2.756-1.0067-3.5667.956-2.2973 5.532-3.1907 9.936-3.4053 11.7173-.005.0933-.1187.1067-.1387-.1067-.1307-1.4293-.4333-4.028-.4707-9.4906-.0133-1.056-.2333-1.9694-1.416-2.712-.7613-.4774-3.0773-1.3334-3.9146-.32-.7174.8306-1.5534 3.0586-2.428 5.7013-.7054 2.152-1.196 3.612-1.196 3.612s.005-5.8027.0187-8.0053c0-.8307-.5667-1.1067-.736-1.1574-.7747-.2266-2.304-.5973-2.9453-.5973-.7987 0-.988.4467-.988 1.0947 0 .0813-.132 7.632-.132 12.912v.7426c-.4347 2.4294-1.868 5.7267-3.4227 5.7267-1.5547 0-2.2907-1.3787-2.2907-7.6707 0-3.6693.1134-5.2666.164-7.9226.0307-1.5294.0933-2.7054.088-2.976-.0133-.812-1.4293-1.228-2.084-1.3787-.66-.1573-1.2333-.208-1.6853-.1893-.6293.0386-1.076.4533-1.076 1.0333v.88c-.812-1.2827-2.128-2.1773-3.008-2.4347-2.3533-.6986-4.8147-.076-6.6707 2.516-1.472 2.0654-2.36 4.3987-2.7053 7.7534-.2587 2.4546-.176 4.94.2827 7.0413-.5534 2.372-1.5734 3.348-2.6867 3.348-1.624 0-2.7933-2.644-2.6613-7.2187.0947-3.0066.692-5.1146 1.352-8.1733.284-1.3027.0507-1.9813-.5214-2.6427-.5226-.592-1.6426-.9-3.2466-.5293-1.14.2707-2.7814.56-4.2734.7813 0 0 .088-.36.164-.9946.384-3.3294-3.2346-3.0587-4.3866-1.9947-.692.6347-1.164 1.384-1.34 2.7307-.2827 2.14 1.46 3.1466 1.46 3.1466-.572 2.6174-1.9694 6.04-3.4227 8.5134-.7747 1.328-1.3667 2.304-2.1333 3.348-.007-.384-.007-.7747-.007-1.1574-.0133-5.5066.056-9.8413.088-11.4026.032-1.5294.0947-2.6747.0947-2.9454-.0133-.592-.3587-.824-1.0894-1.1013-.6413-.2507-1.4026-.4333-2.1893-.4973-.988-.0747-1.592.4533-1.5733 1.076v.8373c-.8174-1.2827-2.1334-2.1773-3.0014-2.4347-2.36-.6986-4.82-.076-6.676 2.516-1.4666 2.0654-2.436 4.9534-2.7133 7.7214-.2507 2.5933-.2067 4.7826.1453 6.6333-.3773 1.8493-1.4533 3.788-2.6733 3.788-1.5547 0-2.4427-1.3787-2.4427-7.6707 0-3.6693.1134-5.2666.1707-7.9226.0307-1.5294.088-2.7054.0813-2.976-.0067-.812-1.4213-1.228-2.0826-1.3787-.6854-.1627-1.284-.2133-1.7374-.1893-.604.0506-1.0253.5853-1.0253.9946v.9187c-.8173-1.2827-2.1333-2.1773-3.008-2.4347-2.3533-.6986-4.7947-.0626-6.664 2.516-1.22 1.6814-2.208 3.5494-2.7173 7.6907-.1387 1.196-.208 2.3147-.2014 3.36-.4853 2.9693-2.6306 6.3933-4.38 6.3933-1.032 0-2.0133-1.9893-2.0133-6.236 0-5.6506.352-13.7053.4147-14.4853 0 0 2.2146-.0387 2.6493-.044 1.1013-.0067 2.108.0187 3.5747-.0573.7426-.0373 1.4533-2.6867.6853-3.02-.34-.1454-2.7813-.2774-3.7507-.296-.8173-.0187-3.0773-.188-3.0773-.188s.2027-5.3427.2467-5.9027c.0373-.4787-.5667-.7173-.9187-.8627-.8507-.364-1.612-.5346-2.5053-.7173-1.252-.2573-1.812-.0053-1.9187 1.044-.164 1.5933-.252 6.2627-.252 6.2627-.9187 0-4.0333-.184-4.9467-.184-.848 0-1.768 3.6506-.5906 3.6946 1.3533.0507 3.7.1014 5.26.144 0 0-.0694 8.188-.0694 10.7107v.78c-.8613 4.4733-3.876 6.8907-3.876 6.8907.648-2.964-.6733-5.1854-3.064-7.06-.8813-.6987-2.6173-2.0147-4.5626-3.4427 0 0 1.1266-1.1133 2.1266-3.3413.7054-1.58.7374-3.3974-1-3.7947-2.8693-.66-5.2293 1.448-5.94 3.7-.5413 1.7373-.2573 3.0333.8174 4.3733l.2453.3027c-.6413 1.2453-1.5347 2.9253-2.284 4.228-2.0947 3.6187-3.6747 6.476-4.864 6.476-.956 0-.944-2.9013-.944-5.62 0-2.3413.176-5.8707.3147-9.52.044-1.2027-.56-1.8947-1.572-2.5173-.6174-.3774-1.9267-1.12-2.688-1.12-1.132 0-4.4174.1506-7.5187 9.1173-.3907 1.1333-1.1587 3.1907-1.1587 3.1907l.0694-10.7854c0-.252-.132-.4906-.44-.6613-.5227-.2827-1.9254-.8613-3.1587-.8613-.5987 0-.8947.2773-.8947.824l-.1 16.864c0 1.284.0307 2.7813.1574 3.436.1253.6546.3333 1.1893.5853 1.5093.252.3093.5467.548 1.0253.6547.4467.0946 2.9067.4026 3.0334-.5347.1573-1.1267.1626-2.34 1.4533-6.8893 2.0133-7.0734 4.632-10.5214 5.8653-11.7494.22-.2133.4654-.2266.452.1267-.056 1.5533-.2386 5.424-.364 8.7147-.3333 8.816 1.264 10.4453 3.5614 10.4453 1.7493 0 4.216-1.7427 6.8653-6.1467 1.6547-2.7506 3.2533-5.4373 4.4107-7.3813.7933.7413 1.6986 1.5413 2.5986 2.3973 2.096 1.9814 2.7814 3.8694 2.3227 5.6574-.3467 1.3706-1.6613 2.78-3.996 1.4093-.68-.3973-.9693-.7053-1.6547-1.1587-.3653-.2453-.932-.3146-1.2653-.0626-.8813.6613-1.3787 1.4973-1.668 2.536-.2707 1.0133.7427 1.5413 1.7933 2.0066.9.4094 2.8387.768 4.0774.812 4.8266.164 8.6906-2.328 11.3773-8.7466.4853 5.544 2.5293 8.684 6.0853 8.684 2.384 0 4.7694-3.0774 5.8147-6.104.2947 1.2333.7413 2.3026 1.3147 3.216 2.744 4.3413 8.0666 3.4106 10.7346-.2774.8307-1.1453.9574-1.5546.9574-1.5546.3893 3.4813 3.196 4.7066 4.8013 4.7066 1.8053 0 3.656-.8546 4.9573-3.788.1574.3214.3214.624.5107.9134 2.7373 4.3413 8.06 3.4106 10.7347-.2774.12-.1826.2333-.3333.3266-.4786l.0827 2.2906s-1.5293 1.3974-2.4666 2.2587c-4.1214 3.7827-7.256 6.652-7.488 9.9867-.2894 4.26 3.1586 5.84 5.776 6.0466 2.7693.2214 5.148-1.308 6.6066-3.46 1.284-1.888 2.128-5.9466 2.0654-9.9613-.0253-1.6107-.064-3.6493-.1014-5.8453 1.4534-1.6734 3.0894-3.8014 4.588-6.292 1.6414-2.7067 3.3907-6.3507 4.284-9.188 0 0 1.5294.0133 3.1534-.088.5226-.032.6733.076.572.4533-.1134.4587-2.0507 7.9413-.2827 12.9253 1.2147 3.4094 3.9387 4.5107 5.5627 4.5107 1.8933 0 3.7066-1.4347 4.6746-3.5613.12.2333.24.4653.3787.68 2.7373 4.3413 8.0413 3.404 10.7347-.2774.6106-.836.9506-1.5546.9506-1.5546.5787 3.6066 3.3854 4.72 4.9894 4.72 1.68 0 3.2653-.6854 4.556-3.732.0507 1.3413.132 2.436.2706 2.7813.0813.2147.56.4787.9.6107 1.5347.5666 3.096.296 3.668.176.4027-.0814.7174-.396.756-1.2267.112-2.1773.0427-5.8333.704-8.5573 1.1134-4.556 2.1454-6.324 2.636-7.1987.272-.492.5854-.5733.592-.0573.0187 1.0506.076 4.1346.5094 8.288.3093 3.0453.7306 4.8506 1.0573 5.424.9187 1.6293 2.064 1.7053 2.9893 1.7053.592 0 1.8254-.164 1.7174-1.2027-.056-.5026.0387-3.6306 1.1266-8.1226.7174-2.9387 1.9067-5.588 2.3347-6.5574.164-.3586.2333-.0813.2333-.0253-.0947 2.02-.296 8.6333.5214 12.2453 1.1213 4.9027 4.348 5.4494 5.4746 5.4494 2.3974 0 4.368-1.8254 5.028-6.632.164-1.1587-.076-2.052-.7866-2.052M83.558 23.8672c-.132 2.5414-.6294 4.6694-1.4214 6.2107-1.448 2.8-4.2973 3.6813-5.5506-.352-.912-2.9133-.604-6.8907-.22-9.0373.5533-3.184 1.9573-5.436 4.1466-5.2294 2.24.2214 3.3347 3.1094 3.0454 8.408m21.9549.0374c-.1254 2.3973-.748 4.8133-1.428 6.1733-1.4027 2.8187-4.336 3.7-5.5507-.352-.8293-2.776-.6347-6.356-.22-8.6093.536-2.932 1.8253-5.6574 4.148-5.6574 2.2587 0 3.372 2.48 3.0507 8.4454m.5733 16.3853c-.032 4.3867-.7173 8.2253-2.1907 9.3453-2.1013 1.5854-4.9266.3894-4.3413-2.8066.516-2.832 2.964-5.72 6.5387-9.2507 0 0 .012.8053-.007 2.712m37.907-16.36c-.1267 2.6373-.712 4.6947-1.4347 6.148-1.404 2.8187-4.3107 3.6933-5.5507-.352-.6733-2.2093-.7053-5.8973-.22-8.9733.4907-3.1347 1.8694-5.5 4.1467-5.2934 2.252.2147 3.304 3.1094 3.0587 8.4707",fill:"#231e1f"});function dn(n,e){var t=n.title,r=n.titleId,c=sn(n,["title","titleId"]);return x.createElement("svg",an({xmlns:"http://www.w3.org/2000/svg",viewBox:"75 -30 100 100",ref:e,"aria-labelledby":r},c),t?x.createElement("title",{id:r},t):null,ln)}var mn,un,jn,bn,pn,hn=x.forwardRef(dn),xn=(t.p,v.c.header(mn||(mn=Object(S.a)(["\n  width: 100%;\n  height: 6rem;\n  padding: 1.2rem 0;\n  background-color: ",";\n  border-bottom: 1px solid ",";\n\n  & .logo {\n    width: 100px;\n    height: 40px;\n\n    & > path {\n      fill: ",";\n    }\n  }\n"])),(function(n){return n.theme.secondaryBackground}),(function(n){return n.theme.border}),(function(n){return n.theme.logo}))),fn=v.c.div(un||(un=Object(S.a)(["\n  max-width: 200px;\n  border: 1px solid ",";\n  border-radius: 3px;\n  background-color: ",";\n  padding: 0.5rem 1.2rem;\n\n  display: flex;\n  align-items: center;\n  column-gap: 0.5rem;\n\n  & > input {\n    border: none;\n    outline: none;\n    background: transparent;\n\n    &::placeholder {\n      color: ",";\n      font-weight: 300;\n    }\n  }\n"])),(function(n){return n.theme.border}),(function(n){return n.theme.primaryBackground}),(function(n){return n.theme.secondaryText})),gn=v.c.div(jn||(jn=Object(S.a)(["\n& > .icon {\n    color: ",";\n\n   & > path {\n     background-color: ",";\n   }\n  }\n @media screen and (max-width: 470px) {\n      display: none;\n  }\n"])),(function(n){return n.theme.secondaryText}),(function(n){return n.theme.logo})),On=v.c.div(bn||(bn=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n\n  & > .icon {\n    color: ",";\n    cursor: pointer;\n\n    @media screen and (max-width: 470px) {\n      display: none;\n    }\n  }\n"])),(function(n){return n.theme.logo})),yn=v.c.div(pn||(pn=Object(S.a)(["\n  width: 2.2rem;\n  height: 2.2rem;\n  border-radius: 50%;\n  overflow: hidden;\n\n  & > img {\n    width: 100%;\n  }\n"]))),vn=t(29),wn=t.n(vn),kn=t(32),Tn=t.n(kn),Nn=t(33),Sn=t.n(Nn),zn=t(31),In=t.n(zn),Bn=t(30),En=t.n(Bn),Cn=function(n){var e=n.isDarkTheme,t=n.setIsDarkTheme;function r(){t(!e)}return Object(W.jsx)(xn,{children:Object(W.jsxs)(cn,{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(W.jsx)(gn,{children:Object(W.jsx)(hn,{className:"logo"})}),Object(W.jsxs)(fn,{children:[Object(W.jsx)(wn.a,{className:"icon"}),Object(W.jsx)("input",{type:"text",placeholder:"Pesquisar"})]}),Object(W.jsxs)(On,{children:[e?Object(W.jsx)(En.a,{onClick:r,className:"icon"}):Object(W.jsx)(In.a,{onClick:r,className:"icon"}),Object(W.jsx)(Tn.a,{className:"icon",fontSize:"large"}),Object(W.jsx)(Sn.a,{className:"icon",fontSize:"large"}),Object(W.jsx)(M.a,{className:"icon",fontSize:"large"}),Object(W.jsx)(yn,{children:Object(W.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg"})})]})]})})},Dn={primaryBackground:"#fafafa",secondaryBackground:"#fff",primaryText:"#262626",secondaryText:"#8e8e8e",linkText:"#0095f6",logo:"#262626",border:"#dbdbdb"},Pn={primaryBackground:"#000",secondaryBackground:"#000",primaryText:"#fff",secondaryText:"#fafafa",linkText:"#0095f6",logo:"#fff",border:"#dbdbdb"},An=function(){var n=f.a.useState(!1),e=Object(y.a)(n,2),t=e[0],r=e[1];return Object(W.jsxs)(v.a,{theme:t?Pn:Dn,children:[Object(W.jsx)(Cn,{setIsDarkTheme:r,isDarkTheme:t}),Object(W.jsx)(cn,{children:Object(W.jsx)(on,{})}),Object(W.jsx)(rn,{})]})};O.a.render(Object(W.jsx)(f.a.StrictMode,{children:Object(W.jsx)(An,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.0bb2a227.chunk.js.map