"use strict";(self.webpackChunkfreshbells=self.webpackChunkfreshbells||[]).push([[114,319,729],{114:(t,e,s)=>{s.r(e),s.d(e,{default:()=>b});var i=s(2791),l=s(1462),n=s(9126),o=s(6355),r=s(6643),a=s(319),c=s(9729),x=s(5717),d=s(7689),u=s(9434),m=s(2641),p=s(8014),h=s(188),v=s(4228),f=s(2564),g=(s(5462),s(184));const b=()=>{const t=(0,u.I0)(),e=(0,u.v9)((t=>t.auth.homeDetails)),s=(0,u.v9)((t=>t.cart.cartItems)),b=(0,u.v9)((t=>t.auth.isAuthenticated)),[j,y]=(0,i.useState)({}),[k,w]=(0,i.useState)({}),N={infinite:!0,speed:500,slidesToShow:6,slidesToScroll:2,nextArrow:(0,g.jsx)(a.default,{}),prevArrow:(0,g.jsx)(c.default,{}),responsive:[{breakpoint:1441,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0}},{breakpoint:1025,settings:{slidesToShow:4,slidesToScroll:2,infinite:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:2,infinite:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0}},{breakpoint:320,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]},S=(0,d.s0)(),_=t=>{if(b)return j[t]||0;{const e=s.find((e=>e.id===t));return e?e.cartQuantity:0}};return(0,g.jsxs)("div",{className:"w-full mt-6 pb-20 lg:container",children:[(0,g.jsx)(f.Ix,{}),(0,g.jsx)(l.default,{heading:"Premium Products"}),(0,g.jsx)(x.Z,{...N,children:e?e.Super.map(((e,s)=>{const i=k[e.id]||e.quantity_variants[0];return(0,g.jsx)("div",{className:"p-2","data-aos":"fade-up",children:(0,g.jsxs)("div",{className:"relative overflow-hidden group max-w-full h-full font-body3 hover:shadow-slate-700 shadow-md",children:[(0,g.jsx)("div",{className:"flex flex-col items-center justify-center max-w-full max-h-full bg-white ",children:(0,g.jsx)("div",{className:"relative",onClick:()=>{return t=e.id,void S("/productDetails",{state:{productId:t}});var t},children:(0,g.jsx)(r.default,{className:"w-[250px] h-[250px] object-contain cursor-pointer",imgSrc:"".concat(h.v).concat(e.image)})})}),(0,g.jsxs)("div",{className:"py-1 flex flex-col gap-1 border-[1px] border-t-0 px-2 bg-white h-full group-hover:bg-yellow-100",children:[(0,g.jsxs)("div",{className:"flex flex-col items-center justify-between font-titleFont ",children:[(0,g.jsx)("h2",{className:"md:text-lg xl:text-xl lg:text-xl xs:text-[15px] sm:text-[15px] font-body3 text-primeColor font-semibold",children:e.name}),(0,g.jsxs)("p",{className:"text-primeColor xl:text-[18px] lg:text-[15px]  md:text-[15px] xs:text-[15px] sm:text-[18px] sml:text-[20px]  font-normal flex items-center pt-1 ",children:[(0,g.jsx)("span",{className:" xl:text-[12px] lg:text-[10px] md:text-[12px] xs:text-[12px] sml:text-[15px] sm:text-[13px]",children:(0,g.jsx)(o.t9y,{})}),(0,g.jsx)("span",{className:"line-through text-gray-600",children:i?i.price+100:"N/A"}),(0,g.jsx)("span",{className:"ml-2",children:i?i.price:"N/A"})]})]}),(0,g.jsxs)("div",{className:"flex items-center justify-between",children:[(0,g.jsx)("select",{name:"quantity",className:"order-1 mt-1 hover:bg-primeColor font-body3 text-black hover:text-white xl:text-[18px] lg:text-[15px] md:text-[10px] xs:text-[10px] sm:text-[10px]",onChange:t=>{return s=e.id,i=e.quantity_variants.find((e=>e.volume===parseInt(t.target.value))),void w({...k,[s]:i});var s,i},children:e.quantity_variants.map(((t,s)=>(0,g.jsxs)("option",{value:t.volume,className:"text-black bg-white font-medium",children:[t.volume,t.unit]},"".concat(e.id,"_").concat(s))))},s),(0,g.jsxs)("div",{className:"flex items-center order-2",children:[(0,g.jsx)("button",{onClick:()=>(e=>{if(b){const s={...j,[e.id]:Math.max(j[e.id]-1,0)};y(s),f.Am.error("item removed successfully"),t((0,m.Bq)(e))}else t((0,m.Bq)(e))})(e),className:"px-2 py-2 text-lg bg-gray-300 hover:bg-red-400 text-black hover:text-white",children:(0,g.jsx)(n.pZ2,{})}),(0,g.jsx)("span",{className:"px-3 text-lg  bg-gray-100",children:_(e.id)}),(0,g.jsx)("button",{onClick:()=>(e=>{const s={...j,[e.id]:(j[e.id]||0)+1};y(s);const i=k[e.id]||e.quantity_variants[0],l={product_id:e.id,volume:i.volume,unit:i.unit,quantity:s[e.id],price:i.price};b?((0,v.MB)(l),f.Am.success("Item added to cart successfully")):(t((0,m.Xq)(e)),f.Am.success("Item added to cart successfully"))})(e),className:"px-2 py-2 text-lg bg-gray-300 hover:bg-green-400 text-black hover:text-white",children:(0,g.jsx)(n.L3d,{})})]}),(0,g.jsx)("button",{onClick:()=>(e=>{const s=k[e.id]||e.quantity_variants[0],i={product_id:e.id,volume:s.volume,unit:s.unit,quantity:e.cartQuantity,price:s.price};b?(0,v.MB)(i):t((0,m.Xq)(e)),S("/cart")})(e),className:"flex items-center order-3 font-body2 hover:bg-primeColor px-2 font-medium xs:text-[20px] sm:text-[20px] sml:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[20px] text-black hover:text-white bg-white  hover:translate-y-1 transition-transform duration-500",children:(0,g.jsx)("span",{className:"pl-1",children:(0,g.jsx)(p.ffc,{})})})]}),(0,g.jsx)("div",{className:"md:text-lg lg:text-xl sm:text-sm font-normal text-center xs:text-[10px] ".concat((null===i||void 0===i?void 0:i.in_stock)<=0?"text-red-500":(null===i||void 0===i?void 0:i.in_stock)>0&&(null===i||void 0===i?void 0:i.in_stock)<=10?"text-yellow-500":"text-green-500"),children:(null===i||void 0===i?void 0:i.in_stock)<=0?"Out of Stock":(null===i||void 0===i?void 0:i.in_stock)>0&&(null===i||void 0===i?void 0:i.in_stock)<=10?"Only ".concat(null===i||void 0===i?void 0:i.in_stock," items left"):i?"".concat(i.in_stock," left in stock"):"Stock information not available"})]})]})},e.id)})):(0,g.jsx)("h1",{className:"text-center",children:"Loading products..."})})]})}},319:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});s(2791);var i=s(6355),l=s(184);const n=t=>{const{onClick:e}=t;return(0,l.jsx)("div",{className:"w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[35%] right-2",onClick:e,children:(0,l.jsx)("span",{className:"text-xl",children:(0,l.jsx)(i.e7O,{})})})}},9729:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});s(2791);var i=s(6355),l=s(184);const n=t=>{const{onClick:e}=t;return(0,l.jsx)("div",{className:"w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute z-10 top-[35%] left-2",onClick:e,children:(0,l.jsx)("span",{children:(0,l.jsx)(i.BMs,{})})})}}}]);
//# sourceMappingURL=114.683d466b.chunk.js.map