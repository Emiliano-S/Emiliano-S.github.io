import{b as T,d as W,e as A,f as L,h as j,i as F,r as q,u as B}from"./chunk-PMFMPDGG.js";import{r as P}from"./chunk-6ICOT6EK.js";import{Ga as M,Ha as S,Kb as N,M as w,Mb as u,Pb as D,Qb as R,R as y,Ra as m,S as v,Sa as _,Ta as b,Va as p,Wa as g,Xa as c,bb as x,cb as I,ha as l,ia as d,na as C,pa as E,ya as i,za as n}from"./chunk-S2PF2REC.js";import"./chunk-W7LYWJAE.js";import"./chunk-YT5AF7SN.js";import{h}from"./chunk-HFBR4SKI.js";function U(t,e){if(t&1&&(i(0,"div",13),m(1),n()),t&2){let k=S();l(),b(" ",k.loginError," ")}}var V=(()=>{let e=class e{constructor(o,r){this.afAuth=o,this.router=r,this.email="",this.password="",this.loginError=""}login(){return h(this,null,function*(){try{yield this.afAuth.signInWithEmailAndPassword(this.email,this.password),this.router.navigate(["user/certificates"])}catch(o){console.error("Error logging in:",o),o.code==="auth/user-not-found"?this.loginError="User not found. Check the entered email.":o.code==="auth/wrong-password"?this.loginError="Incorrect password. Please try again.":this.loginError="Error logging in. Please try again later."}})}};e.\u0275fac=function(r){return new(r||e)(d(P),d(N))},e.\u0275cmp=y({type:e,selectors:[["app-login"]],decls:19,vars:6,consts:[[1,"container","d-flex","justify-content-center","align-items-start",2,"min-height","calc(100vh - 61px)"],[1,"bg-white","rounded-4","shadow-sm","border-1","p-md-5","p-3","w-md-50","w-100"],[1,"w-100"],[1,"col-12"],[1,"fw-bold","fs-2"],[3,"ngSubmit"],[1,"form-group","mt-3"],["for","email"],["type","email","id","email","name","email","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","password"],["type","password","id","password","name","password","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-custom","w-100","mt-3"],["class","text-danger mt-2",4,"ngIf"],[1,"text-danger","mt-2"]],template:function(r,a){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),m(5),x(6,"translate"),n(),i(7,"form",5),M("ngSubmit",function(){return a.login()}),i(8,"div",6)(9,"label",7),m(10,"Email address"),n(),i(11,"input",8),c("ngModelChange",function(s){return g(a.email,s)||(a.email=s),s}),n()(),i(12,"div",6)(13,"label",9),m(14,"Password"),n(),i(15,"input",10),c("ngModelChange",function(s){return g(a.password,s)||(a.password=s),s}),n()(),i(16,"button",11),m(17,"Login"),n(),C(18,U,2,1,"div",12),n()()()()()),r&2&&(l(5),_(I(6,4,"login.title")),l(6),p("ngModel",a.email),l(4),p("ngModel",a.password),l(3),E("ngIf",a.loginError))},dependencies:[F,T,W,A,q,j,L,D]});let t=e;return t})();var z=[{path:"",component:V}],te=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=v({type:e}),e.\u0275inj=w({imports:[u.forChild(z),R,B,u]});let t=e;return t})();export{te as LoginModule};
