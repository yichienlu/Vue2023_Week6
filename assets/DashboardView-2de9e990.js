import{_ as d,R as h,r as i,o as _,c as p,d as e,b as t,w as n,a as c,g as m,j as f}from"./index-72ee0f95.js";import"@popperjs/core";const{VITE_APP_URL:k}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"yclu",BASE_URL:"/Vue2023_Week6/",MODE:"production",DEV:!1,PROD:!0},g={data(){return{isLogin:!1}},components:{RouterView:h},methods:{logout(){document.cookie='hexToken=""',this.isLogin=!1,alert("已登出"),this.$router.push("/login")},checkAdmin(){const r=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=r,this.$http.post(`${k}/api/user/check`).then(o=>{console.log(o),this.isLogin=!0}).catch(o=>{console.log(o),this.$router.push("/login")})}},mounted(){this.checkAdmin()}},V={key:0},$=c("br",null,null,-1);function v(r,o,x,A,a,u){const s=i("router-link"),l=i("router-view");return a.isLogin?(_(),p("div",V,[e(" 後台頁面 "),$,t(s,{to:"/admin/products"},{default:n(()=>[e("後臺產品列表")]),_:1}),e(" | "),t(s,{to:"/admin/orders"},{default:n(()=>[e("後臺訂單列表")]),_:1}),e(" | "),t(s,{to:"/"},{default:n(()=>[e("回前台")]),_:1}),e(" | "),c("a",{href:"#",onClick:o[0]||(o[0]=m(P=>u.logout(),["prevent"]))},"登出"),t(l)])):f("",!0)}const L=d(g,[["render",v]]);export{L as default};
