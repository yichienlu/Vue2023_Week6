import{_ as l,o as u,c,a as s,h as i,i as d,g as m}from"./index-55c07cb5.js";const{VITE_APP_URL:p}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"yclu",BASE_URL:"/Vue2023_Week6/",MODE:"production",DEV:!1,PROD:!0},_={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${p}/admin/signin`,this.user).then(o=>{const{token:e,expired:a}=o.data;document.cookie=`hexToken=${e}; expired=${new Date(a)}`,alert(o.data.message),this.$router.push("/admin/products")}).catch(o=>{console.dir(o.data),alert(`${o.data.message}：${o.data.error.message}`)})}}},f={class:"container"},h={class:"form-floating mb-3"},g=s("label",{for:"username"},"Email address",-1),w={class:"form-floating"},P=s("label",{for:"password"},"Password",-1),b=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function x(o,e,a,V,r,n){return u(),c("div",f,[s("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=m((...t)=>n.login&&n.login(...t),["prevent"]))},[s("div",h,[i(s("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=t=>r.user.username=t)},null,512),[[d,r.user.username]]),g]),s("div",w,[i(s("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=t=>r.user.password=t)},null,512),[[d,r.user.password]]),P]),b],32)])}const E=l(_,[["render",x]]);export{E as default};
