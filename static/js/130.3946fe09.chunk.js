"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[130],{2130:function(n,e,t){t.r(e),t.d(e,{default:function(){return nn}});var r,o,i,a,c,u,s=t(7691),d=t(407),l=(0,s.ZP)("div")(d.$_,d.Dh,d.bK,d.GQ,d.Cg,d.cp),m=t(9434),h=t(168),f=function(n){return n.contacts.items},p=function(n){return n.contacts.isLoading},b=function(n){return n.contacts.error},x=function(n){return n.contacts.filter},g=function(n){var e=f(n),t=x(n),r=t&&t.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(r)}))},j=t(3634),Z=t(5705),v=t(7103),y=s.ZP.label(r||(r=(0,h.Z)(["\n  //   display: flex;\n  //   justify-content: space-between;\n  //   align-items: center;\n  font-size: ",";\n  font-weight: ",";\n\n  color: ",";\n\n  :not(:last-child) {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.space[3]})),w=s.ZP.div(o||(o=(0,h.Z)(["\n  margin-bottom: ","px;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.heading})),C=s.ZP.button(i||(i=(0,h.Z)(["\n  padding: ","px ","px;\n  min-width: 150px;\n  border: ",";\n  border-radius: ",";\n\n  :hover,\n  :focus {\n    background-color: ",";\n\n    outline: ",";\n    outline-color: ",";\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.bgButtonHover}),(function(n){return n.theme.borders.bold}),(function(n){return n.theme.colors.heading})),z=t(184),A=(0,s.ZP)(Z.gN)(a||(a=(0,h.Z)(["\n  width: 100%;\n  border: ",";\n  border-radius: ",";\n  :hover,\n  :focus {\n    outline: ",";\n    outline-color: ",";\n  }\n"])),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.borders.bold}),(function(n){return n.theme.colors.heading})),P="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",k="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",_=v.Ry().shape({name:v.Z_().required("input is required").matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",{message:P}),number:v.Z_().required("input is required").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,{message:k})}),q={name:"",number:""},B=function(){var n=(0,m.I0)(),e=(0,m.v9)(f);return(0,z.jsx)(Z.J9,{initialValues:q,validationSchema:_,onSubmit:function(t,r){!function(t){e.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):n((0,j.uK)(t))}(t),r.resetForm()},children:(0,z.jsxs)(Z.l0,{children:[(0,z.jsxs)(l,{mb:4,display:"flex",flexDirection:"column",children:[(0,z.jsxs)(y,{htmlFor:"name",children:["Name",(0,z.jsx)(A,{type:"text",name:"name"}),(0,z.jsx)(Z.Bc,{name:"name",render:function(n){return(0,z.jsx)(w,{children:P})}})]}),(0,z.jsxs)(y,{htmlFor:"number",children:["Number",(0,z.jsx)(A,{type:"tel",name:"number"}),(0,z.jsx)(Z.Bc,{name:"number",render:function(n){return(0,z.jsx)(w,{children:k})}})]})]}),(0,z.jsx)(C,{type:"submit",name:"addContact",children:"Add contact"})]})})},F=t(1538),L=t(2007),S=t.n(L),D=s.ZP.label(c||(c=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ",";\n  margin-bottom: ","px;\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold})),N=s.ZP.input(u||(u=(0,h.Z)(["\n  border: ",";\n  border-radius: ",";\n  margin-left: auto;\n  width: 180px;\n  :hover,\n  :focus {\n    outline: ",";\n    outline-color: ",";\n  }\n"])),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.borders.bold}),(function(n){return n.theme.colors.heading})),R=function(){var n=(0,m.I0)(),e=(0,m.v9)(x);return(0,z.jsxs)(D,{children:["Find contacts by name",(0,z.jsx)(N,{type:"text",name:"filter",value:e,onChange:function(e){return n((0,F.W)(e.target.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})};R.prototype={value:S().string.isRequired,onChange:S().func.isRequired};var W,I,J,K,$=R,G=t(2791),H=s.ZP.div(W||(W=(0,h.Z)(["\n  padding-left: ","px;\n  padding-right: ","px;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]})),M=s.ZP.h2(I||(I=(0,h.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]})),E=function(n){var e=n.title,t=n.children;return(0,z.jsxs)(H,{children:[(0,z.jsx)(M,{children:e}),t]})},Q=s.ZP.li(J||(J=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),V=t(7126),O=t(7376),T=t(8294),U=function(n){var e=n.name,t=n.number,r=n.id,o=(0,m.I0)(),i=(0,m.v9)(p),a=(0,O.ZP)(V.Z)((function(){return{color:T.r.colors.white,backgroundColor:T.r.colors.bgButtonDelete,border:T.r.borders.none,borderRadius:T.r.radii.sm,"&:hover":{backgroundColor:T.r.colors.bgButtonHover,outline:T.r.borders.bold,outlineColor:T.r.colors.heading}}}));return(0,z.jsxs)(Q,{children:[e,": ",t,(0,z.jsx)(a,{type:"button",onClick:function(){return o((0,j.GK)(r))},children:i?"Deleting...":"Delete"})]})},X=s.ZP.ul(K||(K=(0,h.Z)(["\n  margin-bottom: ","px;\n  display: flex;\n  flex-direction: column;\n  row-gap: ","px;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[2]})),Y=function(){var n=(0,m.v9)(g);return(0,z.jsx)(X,{children:n.map((function(n){return(0,z.jsx)(U,{id:n.id,name:n.name,number:n.number},n.id)}))})};function nn(){var n=(0,m.I0)(),e=(0,m.v9)(f),t=(0,m.v9)(p),r=(0,m.v9)(b);return(0,G.useEffect)((function(){n((0,j.yF)())}),[n]),(0,z.jsxs)(l,{textAlign:"center",bg:"bgApp",pt:4,mx:"auto",mt:"50px",width:"450px",flexWrap:"wrap",justifyContent:"center",border:"normal",borderRadius:"md",borderColor:"border",as:"main",children:[(0,z.jsx)(l,{as:"h1",textAlign:"center",color:"heading",fontSize:"l",children:"Phonebook"}),(0,z.jsx)(E,{children:(0,z.jsx)(B,{})}),(0,z.jsxs)(E,{title:"Contacts",children:[(0,z.jsx)($,{}),t&&(0,z.jsx)("p",{children:"Loading contacts..."}),r&&(0,z.jsx)("p",{children:r}),e.length>0&&(0,z.jsx)(Y,{})]})]})}}}]);
//# sourceMappingURL=130.3946fe09.chunk.js.map