"use strict";(self.webpackChunkfreshbells=self.webpackChunkfreshbells||[]).push([[20,870,430],{6686:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var l=s(2791),a=s(7255),i=s(7608),r=s(898),n=s(3430),c=s(6643),x=s(188),o=s(2564),d=(s(5462),s(8757)),m=s(9434),u=s(7689),p=s(2641),h=s(6048),f=s.n(h),g=s(9126),j=s(6355),v=s(4228),b=s(3418),N=s(8617),y=s(3479),w=s(184);const k=function(){const e=(0,m.I0)(),t=(0,u.TH)(),{parentCategory:s,childCategory:h}=t.state||{},k=(0,m.v9)((e=>e.cart.cartItems)),C=(0,m.v9)((e=>e.auth.products)),S=(0,m.v9)((e=>e.auth.isAuthenticated)),[_,q]=(0,l.useState)(0),[L,F]=(0,l.useState)({}),[A,M]=(0,l.useState)(""),[Z,B]=(0,l.useState)({}),[H,I]=(0,l.useState)(""),[E,O]=(0,l.useState)("asc"),[z,P]=(0,l.useState)("grid"),J=C?Math.ceil(C.length/18):0,T=18*_,X=(0,u.s0)();(0,l.useEffect)((()=>()=>{F({}),M(""),B({}),I(""),O("asc"),P("grid")}),[]);const D=e=>{if(S)return L[e]||0;{const t=k.find((t=>t.id===e));return t?t.cartQuantity:0}},K=e=>{P(e)},R=C?C.filter((e=>e.name.toLowerCase().includes(A.toLowerCase()))).filter((e=>!H||e.price<=H)).sort(((e,t)=>"asc"===E?e.name.localeCompare(t.name):t.name.localeCompare(e.name))):[];return(0,w.jsxs)("div",{children:[(0,w.jsx)(a.default,{}),(0,w.jsx)(i.default,{}),(0,w.jsx)(o.Ix,{}),(0,w.jsx)("div",{className:"bg-[#EFFDEC]",children:(0,w.jsxs)("div",{className:"lg:container mx-auto pb-8 px-4",children:[(0,w.jsx)(d.Z,{title:"Category is : ".concat((null===s||void 0===s?void 0:s.name)||""," & Subcategory is : ").concat((null===h||void 0===h?void 0:h.name)||"")}),(0,w.jsxs)("div",{className:"flex flex-col lg:flex-row items-center justify-end gap-2",children:[(0,w.jsxs)("div",{className:"flex gap-2",children:[(0,w.jsx)("input",{type:"text",placeholder:"Search products...",value:A,onChange:e=>{M(e.target.value)},className:"mb-4 p-2 border w-full border-gray-300 rounded outline-none"}),(0,w.jsx)("input",{type:"number",placeholder:"Max price...",value:H,onChange:e=>{I(e.target.value)},className:"mb-4 w-full p-2 border border-gray-300 rounded outline-none"})]}),(0,w.jsxs)("div",{className:"flex gap-2",children:[(0,w.jsxs)("select",{value:E,onChange:e=>{O(e.target.value)},className:"mb-4 p-2 border border-gray-300 rounded outline-none",children:[(0,w.jsx)("option",{value:"asc",children:"Sort by Name: A-Z"}),(0,w.jsx)("option",{value:"desc",children:"Sort by Name: Z-A"})]}),(0,w.jsx)("button",{onClick:()=>K("grid"),className:"mb-4 p-2 border border-gray-300 rounded outline-none text-2xl ".concat("grid"===z?"bg-gray-300":""),children:(0,w.jsx)(N.gvM,{})}),(0,w.jsx)("button",{onClick:()=>K("column"),className:"mb-4 p-2 border border-gray-300 rounded outline-none text-2xl ".concat("column"===z?"bg-gray-300":""),children:(0,w.jsx)(y.n5d,{})})]})]}),(0,w.jsx)("div",{className:"w-full h-full flex items-center justify-center gap-5 ".concat("grid"===z?"flex-wrap":"flex-col"),children:(0,w.jsx)("div",{className:"grid h-full ".concat("grid"===z?"xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6":"lg:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1"," gap-4"),"data-aos":"fade-up",children:R.slice(T,T+18).map(((t,s)=>{var l,a;const i=Z[t.id]||t.quantity_variants[0];return(0,w.jsx)("div",{children:(0,w.jsxs)("div",{className:"relative overflow-hidden group max-w-full h-full hover:shadow-slate-700 shadow-md",children:[(0,w.jsx)("div",{className:"flex flex-col items-center justify-center bg-green-200 group-hover:bg-white max-w-full max-h-full",children:(0,w.jsx)("div",{className:"relative",children:(0,w.jsx)(c.default,{className:"md:w-[230px] md:h-[230px] xs:w-[140px] xs:h-[140px] object-contain",imgSrc:"".concat(x.v).concat(t.image)})})}),(0,w.jsxs)("div",{className:"py-1 h-full flex flex-col gap-1 border-[1px] border-t-0 px-4 bg-white",children:[(0,w.jsxs)("div",{className:"flex flex-col items-center justify-between font-titleFont ",children:[(0,w.jsx)("h2",{className:"md:text-xl xl:text-xl lg:text-xl xs:text-[10px] text-center sm:text-[10px] text-primeColor font-medium",children:t.name}),(0,w.jsxs)("p",{className:"text-primeColor xl:text-[15px] lg:text-[15px]  md:text-[15px] sm:text-[9px] xs:text-[8px]  font-semibold flex items-center pt-1 ",children:[(0,w.jsx)("span",{className:" xl:text-[10px] lg:text-[10px] md:text-[10px] xs:text-[10px]",children:(0,w.jsx)(j.t9y,{})}),(0,w.jsx)("span",{className:"line-through text-gray-600",children:((null===(l=Z[t.id])||void 0===l?void 0:l.price)||t.price)+100}),(0,w.jsx)("span",{className:"ml-1",children:(null===(a=Z[t.id])||void 0===a?void 0:a.price)||t.price})]})]}),(0,w.jsxs)("div",{className:"flex items-center justify-center",children:[(0,w.jsx)("button",{onClick:()=>(t=>{if(S){const s={...L,[t.id]:Math.max(L[t.id]-1,0)};F(s),o.Am.error("item removed successfully"),e((0,p.Bq)(t))}else e((0,p.Bq)(t))})(t),className:"px-1 py-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-300 hover:bg-red-400 text-black hover:text-white",children:(0,w.jsx)(g.pZ2,{})}),(0,w.jsx)("span",{className:"px-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-100",children:D(t.id)}),(0,w.jsx)("button",{onClick:()=>(t=>{const s={...L,[t.id]:(L[t.id]||0)+1};F(s);const l=Z[t.id]||t.quantity_variants[0],a={product_id:t.id,volume:l.volume,unit:l.unit,quantity:s[t.id],price:l.price};S?((0,v.MB)(a),o.Am.success("Item added to cart successfully")):(e((0,p.Xq)(a)),o.Am.success("Item added to cart successfully"))})(t),className:"px-1 py-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-300 hover:bg-green-400 text-black hover:text-white",children:(0,w.jsx)(g.L3d,{})})]}),(0,w.jsxs)("div",{className:"flex items-center justify-between",children:[(0,w.jsx)("button",{onClick:()=>(t=>{const s={...L,[t.id]:(L[t.id]||0)+1};F(s);const l=Z[t.id]||t.quantity_variants[0],a={product_id:t.id,volume:l.volume,unit:l.unit,quantity:s[t.id],price:l.price};S?(0,v.MB)(a):e((0,p.Xq)(a)),X("/cart")})(t),className:"order-2 ml-2 py-1 hover:bg-primeColor text-black px-2 font-medium xs:text-[13px] sm:text-[15px] sml:text-[17px] md:text-[20px] lg:text-[20px] xl:text-[20px] hover:text-white rounded-2xl hover:rounded-none  hover:translate-y-1 transition-transform duration-500",children:(0,w.jsx)(g.xsh,{})}),(0,w.jsx)("select",{className:"order-1 mt-1 hover:bg-primeColor font-medium font-body2 text-black hover:text-white xl:text-[20px] lg:text-[15px] md:text-[15px] xs:text-[15px] sm:text-[15px]",onChange:e=>{return s=t.id,l=JSON.parse(e.target.value),void B({...Z,[s]:l});var s,l},children:t.quantity_variants.map((e=>(0,w.jsxs)("option",{value:JSON.stringify(e),className:"text-black bg-white font-medium",children:[e.volume,e.unit]},e.id)))})]}),(0,w.jsx)("div",{className:"md:text-lg lg:text-xl sm:text-sm font-normal text-center xs:text-[10px] ".concat((null===i||void 0===i?void 0:i.in_stock)<=0?"text-red-500":(null===i||void 0===i?void 0:i.in_stock)>0&&(null===i||void 0===i?void 0:i.in_stock)<=10?"text-yellow-500":"text-green-500"),children:(null===i||void 0===i?void 0:i.in_stock)<=0?"Out of Stock":(null===i||void 0===i?void 0:i.in_stock)>0&&(null===i||void 0===i?void 0:i.in_stock)<=10?"Only ".concat(null===i||void 0===i?void 0:i.in_stock," items left"):i?"".concat(i.in_stock," left in stock"):"Stock information not available"})]})]})},t.id)}))})}),(0,w.jsx)(f(),{breakLabel:"...",nextLabel:">",onPageChange:e=>{q(e.selected)},pageRangeDisplayed:3,pageCount:J,previousLabel:"<",renderOnZeroPageCount:null,containerClassName:"pagination flex justify-center gap-1 items-center mt-5",activeClassName:"bg-black text-white px-2 py-2",pageLinkClassName:"px-3 py-2 hover:bg-lightGray"})]})}),(0,w.jsx)(r.default,{}),(0,w.jsx)(n.default,{}),(0,w.jsx)("div",{className:"block lg:hidden overflow-hidden mt-24",children:(0,w.jsx)(b.default,{})})]})}},898:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var l=s(8050);const a=s.p+"static/media/footer.c3021522d5da41a26052.jpg";var i=s(6856),r=s(458),n=s(6355),c=s(184);const x={backgroundImage:"url(".concat(a,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%",width:"100%"},o=[{title:"Home",link:"/#"},{title:"About",link:"/#about"},{title:"Contact",link:"/#contact"},{title:"Blog",link:"/#blog"}],d=()=>(0,c.jsx)("div",{className:"flex justify-center items-center w-full font-body3",children:(0,c.jsx)("div",{style:x,className:"text-primeColor w-full",children:(0,c.jsx)("div",{className:"flex w-full",children:(0,c.jsx)("div",{className:"flex items-center justify-center pb-10 pt-5 w-full",children:(0,c.jsxs)("div",{className:"grid md:grid-cols-3 lg:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1  col-span-2 md:pl-10 w-full",children:[(0,c.jsx)("div",{className:"w-full",children:(0,c.jsxs)("div",{className:"py-8 px-4 w-full",children:[(0,c.jsx)("h1",{className:"text-xl font-semibold text-center mb-3",children:"Important Links"}),(0,c.jsx)("ul",{className:"flex xl:flex-col flex-row lg:flex-col md:flex-col justify-center  gap-3 items-center",children:o.map((e=>(0,c.jsx)("li",{className:"cursor-pointer font-normal text-primeColor hover:text-white hover:translate-x-1 duration-300",children:(0,c.jsx)("span",{children:e.title})},e.title)))})]})}),(0,c.jsxs)("div",{className:"py-5 px-4 font-body2 w-full text-center",children:[(0,c.jsx)("img",{src:l,alt:"",className:"w-44 mx-auto mb-3"}),(0,c.jsx)("p",{className:"font-medium",children:"Fresh Bells provide customers good quantity and combo offers of millets. To grow the new healthy environment and prevent health issues."})]}),(0,c.jsxs)("div",{className:"w-full",children:[(0,c.jsxs)("div",{className:"flex justify-center items-center gap-3 mt-6",children:[(0,c.jsx)("a",{href:"/",children:(0,c.jsx)(n.Zf_,{className:"text-3xl hover:text-purple-600"})}),(0,c.jsx)("a",{href:"/",children:(0,c.jsx)(n.Am9,{className:"text-3xl hover:text-blue-600"})}),(0,c.jsx)("a",{href:"/",children:(0,c.jsx)(n.ltd,{className:"text-3xl hover:text-blue-600"})})]}),(0,c.jsxs)("div",{className:"mt-6 text-center",children:[(0,c.jsx)("div",{className:"flex flex-col xs:flex-row sm:flex-row justify-center items-center gap-3 font-medium",children:(0,c.jsx)("p",{className:"text-center",children:"Freshbells LLP, H24, Agricultural Urban Wholesale Market, Vengeri, Kozhikode, Kerala-673010"})}),(0,c.jsxs)("div",{className:"flex flex-col xs:flex-row sm:flex-row justify-center items-center gap-3 mt-3 font-medium",children:[(0,c.jsx)(n.XEH,{className:"self-center mt-1"}),(0,c.jsx)("p",{children:"+91 9495967722"})]}),(0,c.jsxs)("div",{className:"flex flex-col xs:flex-row sm:flex-row justify-center items-center gap-3 mt-3 font-medium",children:[(0,c.jsx)(i.pFf,{className:"self-center mt-1"}),(0,c.jsx)("p",{children:"Freshbells@gmail.com"})]}),(0,c.jsxs)("div",{className:"flex flex-col xs:flex-row sm:flex-row justify-center items-center gap-3 mt-3 font-medium",children:[(0,c.jsx)(r.cY3,{className:"self-center mt-1"}),(0,c.jsxs)("p",{children:["Hours: ",(0,c.jsx)("span",{children:"10:00 - 18:00, Mon - Sat"})]})]})]})]})]})})})})})},3430:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});s(2791);var l=s(8820),a=s(184);const i=()=>(0,a.jsx)("div",{className:"w-full bg-[#254222] group",children:(0,a.jsx)("div",{className:"max-w-container mx-auto border-t-[1px] pt-3 pb-3",children:(0,a.jsxs)("p",{className:"text-titleFont font-normal text-center flex md:items-center justify-center text-white duration-200 text-sm gap-2",children:[(0,a.jsx)("span",{className:"text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex",children:(0,a.jsx)(l.ZVS,{})}),"Copyright ",(0,a.jsx)("span",{children:(0,a.jsx)("a",{href:"https://www.linkedin.com/in/mr-jijo-94b6521b4/",children:"Mr Jijo"})})," |Fresh Bells |"]})})})},8757:(e,t,s)=>{s.d(t,{Z:()=>n});var l=s(2791),a=s(8617),i=s(7689),r=s(184);const n=e=>{let{prevLocation:t,title:s}=e;const n=(0,i.TH)(),[c,x]=(0,l.useState)("");return(0,l.useEffect)((()=>{x(n.pathname.split("/")[1])}),[n]),(0,r.jsxs)("div",{className:"w-full py-10 xl:py-10 flex flex-col gap-5",children:[(0,r.jsx)("h1",{className:"xl:text-5xl xs:text-2xl   text-primeColor font-body3 font-medium",children:s}),(0,r.jsxs)("p",{className:"text-sm font-normal font-body3 text-black capitalize flex items-center",children:[(0,r.jsxs)("span",{children:[" ",""===t?"Home":t]}),(0,r.jsx)("span",{className:"px-1",children:(0,r.jsx)(a.yoF,{})}),(0,r.jsx)("span",{className:"capitalize font-semibold text-primeColor",children:c})]})]})}}}]);
//# sourceMappingURL=20.24cd26f8.chunk.js.map