import{_ as p,e as P,r as m,o as n,c as a,a as t,F as b,f as g,d as f,t as c,b as V,w as $}from"./index-55c07cb5.js";const{VITE_APP_URL:d,VITE_APP_PATH:i}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"yclu",BASE_URL:"/Vue2023_Week6/",MODE:"production",DEV:!1,PROD:!0},k={data(){return{products:[]}},compoente:{RouterLink:P},methods:{getProducts(){this.$http.get(`${d}/api/${i}/products/all`).then(o=>{this.products=o.data.products}).catch(o=>{console.log(o)})},addToCart(o,l){const r={product_id:o,qty:l};this.$http.post(`${d}/api/${i}/cart/`,{data:r}).then(s=>{console.log(s.data)}).catch(s=>{console.log(s)})}},mounted(){this.getProducts()}},T=t("h2",null,"產品列表頁面",-1),E={class:"table"},y=t("thead",null,[t("th",null,"品項"),t("th",null,"價格"),t("th",null,"剩餘數量"),t("th")],-1),A=["src"],L=t("button",{class:"btn btn-outline-secondary"},"查看詳情",-1),R=["onClick"];function v(o,l,r,s,u,_){const h=m("RouterLink");return n(),a("div",null,[T,t("table",E,[y,t("tbody",null,[(n(!0),a(b,null,g(u.products,e=>(n(),a("tr",{key:e.id},[t("td",null,[t("img",{src:e.imageUrl,width:"100",height:"100",alt:"",class:"object-fit-cover"},null,8,A),f(" "+c(e.title),1)]),t("td",null,c(e.price),1),t("td",null,c(e.num),1),t("td",null,[V(h,{to:`/product/${e.id}`},{default:$(()=>[L]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-secondary",onClick:x=>_.addToCart(e.id,1)},"加入購物車",8,R)])]))),128))])])])}const w=p(k,[["render",v]]);export{w as default};
