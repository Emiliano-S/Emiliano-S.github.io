import{a as D,b as F}from"./chunk-AOPN3V4D.js";import{Aa as i,Ga as y,Hb as P,Jb as z,L as B,M as C,Mb as E,Nb as T,R as x,Ra as n,S as b,Sa as o,Ta as m,Z as g,_ as u,bb as I,cb as l,db as r,ea as w,eb as L,ha as a,ia as S,pa as f,vb as j,wb as M,ya as e,za as t}from"./chunk-QE4JIREK.js";import"./chunk-YT5AF7SN.js";import"./chunk-HFBR4SKI.js";var O=(()=>{let p=class p{constructor(){this.data=[{name:"Santiago",minutes:1,city:"Chile"},{name:"Mar\xEDa",minutes:3,city:"Argentina"},{name:"Pedro",minutes:5,city:"Per\xFA"}],this.currentIndex=0}getNextPopupData(){let d=this.data[this.currentIndex];return this.currentIndex=(this.currentIndex+1)%this.data.length,d}};p.\u0275fac=function(c){return new(c||p)},p.\u0275prov=B({token:p,factory:p.\u0275fac,providedIn:"root"});let s=p;return s})();var Q=(s,p,H)=>({minutes:s,name:p,city:H}),k=(()=>{let p=class p{constructor(d){this.popupService=d,this.name="",this.minutes=0,this.city=""}ngOnInit(){this.showPopup()}showPopup(){let{name:d,minutes:c,city:h}=this.popupService.getNextPopupData();this.name=d,this.minutes=c,this.city=h;let v=document.getElementById("popup");v&&v.classList.add("popup-show"),setTimeout(()=>{v&&v.classList.remove("popup-show"),setTimeout(()=>this.showPopup(),5e3)},3e3)}};p.\u0275fac=function(c){return new(c||p)(S(O))},p.\u0275cmp=x({type:p,selectors:[["app-home-popup"]],decls:6,vars:8,consts:[["id","popup",1,"popup-notification","d-flex","justify-content-center","align-items-center","gap-2","position-fixed","p-2","px-3"],[1,"popup-icon-container","text-white","d-flex","justify-content-center","align-items-center"],[1,"bi","bi-patch-check-fill"],[1,"popup-text"],[1,"p-0","m-0",3,"innerHTML"]],template:function(c,h){c&1&&(e(0,"div",0)(1,"div",1),i(2,"i",2),t(),e(3,"div",3),i(4,"p",4),l(5,"translate"),t()()),c&2&&(a(4),f("innerHTML",L(5,1,"home.popup.message",I(4,Q,h.minutes,h.name,h.city)),w))},dependencies:[E]});let s=p;return s})();var q=(()=>{let p=class p{constructor(d){this.router=d,this.lineChartData={labels:["(> 69) IQ","(70-79) IQ","(80-89) IQ","(90-109) IQ","(110-119) IQ","(120-129) IQ","(130-144) IQ","(145-160) IQ"],datasets:[{data:[.1,2,14,34,34,14,2,.1],label:"%",fill:!0,tension:.5,borderColor:"#476597",backgroundColor:"rgba(71, 101, 151, .3)"}]},this.lineChartOptions={responsive:!0},this.lineChartLegend=!1}ngOnInit(){this.peopleOnline=this.getRandomNumber(540,1350)}getRandomNumber(d,c){return Math.floor(Math.random()*(c-d+1))+d}navigateTo(d){this.router.navigateByUrl(d)}};p.\u0275fac=function(c){return new(c||p)(S(P))},p.\u0275cmp=x({type:p,selectors:[["app-home"]],decls:438,vars:151,consts:[[1,"container-fluid","d-flex","flex-column","justify-content-center","p-4","position-relative","pb-0","position-relative"],["id","header",1,"container","d-flex","flex-wrap","flex-row","justify-content-between","align-items-center","py-md-5","pb-5","pt-0"],[1,"col-12","col-lg-6","d-flex","flex-column","justify-content-start","align-items-start","py-md-5","py-0","mb-lg-5"],[3,"innerHtml"],[3,"textContent"],["type","button",1,"btn-custom","gap-1","d-flex","align-items-center","fade-in","visible",3,"click"],[1,"col-12","d-lg-flex","col-lg-6","d-none","flex-row","justify-content-center","align-items-end","position-relative"],["sizes","(max-width: 452px) 100vw, 452px","srcset",`
              ./assets/img/girl_uopvwd_c_scale_w_200.webp 200w,
              ./assets/img/girl_uopvwd_c_scale_w_340.webp 340w,
              ./assets/img/girl_uopvwd_c_scale_w_452.webp 452w,`,"src","./assets/img/girl_uopvwd_c_scale_w_452.webp","alt","Chica pensando","id","girlImg","loading","lazy"],["id","peopleOnline",1,"card","position-absolute","d-flex","flex-column"],[1,"fw-bold","fs-2","d-flex","gap-2","justify-content-start","align-items-center"],[1,"green-dot"],[1,"m-0"],[1,"content","w-100","container-fluid"],[1,"container-fluid","d-flex","flex-column","justify-content-center","align-items-center","py-5"],[1,"section-header","d-flex","flex-column","justify-content-center","align-items-center"],[1,"text-center","section-title","w-100","text-white","fw-bold","fs-2"],[1,"text-center","section-description","col-lg-6","col-11","text-white"],[1,"w-100","p-5","d-flex","flex-wrap","how-card-row"],[1,"how-card-container","col-md-4","col-12","d-flex","justify-content-center","align-items-center","py-5","py-md-2","p-2","position-relative"],[1,"how-card-number","position-absolute","d-flex","justify-content-center","align-items-center"],[1,"how-card","px-4","pb-4","pt-2","d-flex","flex-column"],[1,"how-card-icon","rounded","rounded-circle","d-flex","justify-content-center","align-items-center","my-3"],[1,"bi","bi-clock-fill"],[1,"how-card-title"],[1,"how-card-description"],[1,"bi","bi-graph-up"],[1,"bi","bi-patch-check-fill"],["id","why",1,"container","d-flex","flex-wrap","flex-row","justify-content-center","align-items-center","py-5"],[1,"col-lg-6","col-12","d-flex","order-1","order-lg-0","justify-content-start","align-items-start","flex-column","gap-2"],[1,"section-title","w-100","fw-bold","fs-2"],[1,"section-description"],[1,"d-flex","flex-wrap","justify-content-start","gap-3","align-items-start","my-2"],[1,"d-flex","justify-content-center","align-items-center","gap-2","bg-white","shadow-sm","border-1","rounded-pill","px-3","py-2"],[1,"fs-12"],[1,"col-lg-6","col-12","d-flex","order-0","order-lg-1","justify-content-center","align-items-center"],[1,"d-flex","flex-fill","justify-content-center","align-items-center"],["baseChart","",3,"type","data","options","legend"],["id","review",1,"container","d-flex","flex-column","justify-content-center","align-items-center","py-4"],[1,"section-header","d-flex","flex-column","justify-content-center","align-items-center","col-12"],[1,"text-center","section-title","col-lg-8","col-12","fw-bold","fs-2"],[1,"review-container","col-12","col-lg-10","d-flex","flex-wrap","justify-content-center","align-items-stretch"],[1,"review-card-container","col-12","col-md-6","p-3"],[1,"review-card","d-flex","flex-column","justify-content-start","align-items-start","p-3","px-4","gap-3","h-100"],[1,"review-card-header","w-100","d-flex","justify-content-between","align-items-center"],[1,"review-stars"],["xmlns","http://www.w3.org/2000/svg","width","100","height","16","viewBox","0 0 100 16","fill","none"],["clip-path","url(#clip0_61_2)"],["filter","url(#filter0_d_61_2)"],["d","M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z","fill","#FBD102"],["clip-path","url(#clip1_61_2)"],["d","M24.612 15.443C24.226 15.641 23.788 15.294 23.866 14.851L24.696 10.121L21.173 6.76501C20.844 6.45101 21.015 5.87701 21.456 5.81501L26.354 5.11901L28.538 0.792012C28.735 0.402012 29.268 0.402012 29.465 0.792012L31.649 5.11901L36.547 5.81501C36.988 5.87701 37.159 6.45101 36.829 6.76501L33.307 10.121L34.137 14.851C34.215 15.294 33.777 15.641 33.391 15.443L29 13.187L24.612 15.443Z","fill","#FBD102"],["clip-path","url(#clip2_61_2)"],["d","M45.612 15.443C45.226 15.641 44.788 15.294 44.866 14.851L45.696 10.121L42.173 6.76501C41.844 6.45101 42.015 5.87701 42.456 5.81501L47.354 5.11901L49.538 0.792012C49.735 0.402012 50.268 0.402012 50.465 0.792012L52.649 5.11901L57.547 5.81501C57.988 5.87701 58.159 6.45101 57.829 6.76501L54.307 10.121L55.137 14.851C55.215 15.294 54.777 15.641 54.391 15.443L50 13.187L45.612 15.443Z","fill","#FBD102"],["clip-path","url(#clip3_61_2)"],["d","M66.612 15.443C66.226 15.641 65.788 15.294 65.866 14.851L66.696 10.121L63.173 6.76501C62.844 6.45101 63.015 5.87701 63.456 5.81501L68.354 5.11901L70.538 0.792012C70.735 0.402012 71.268 0.402012 71.465 0.792012L73.649 5.11901L78.547 5.81501C78.988 5.87701 79.159 6.45101 78.829 6.76501L75.307 10.121L76.137 14.851C76.215 15.294 75.777 15.641 75.391 15.443L71 13.187L66.612 15.443Z","fill","#FBD102"],["clip-path","url(#clip4_61_2)"],["d","M87.612 15.443C87.226 15.641 86.788 15.294 86.866 14.851L87.696 10.121L84.173 6.76501C83.844 6.45101 84.015 5.87701 84.456 5.81501L89.354 5.11901L91.538 0.792012C91.735 0.402012 92.268 0.402012 92.465 0.792012L94.649 5.11901L99.547 5.81501C99.988 5.87701 100.159 6.45101 99.829 6.76501L96.307 10.121L97.137 14.851C97.215 15.294 96.777 15.641 96.391 15.443L92 13.187L87.612 15.443Z","fill","#FBD102"],["id","filter0_d_61_2","x","-1.99866","y","-1.50049","width","20","height","19.0005","filterUnits","userSpaceOnUse","color-interpolation-filters","sRGB"],["flood-opacity","0","result","BackgroundImageFix"],["in","SourceAlpha","type","matrix","values","0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0","result","hardAlpha"],["stdDeviation","1"],["in2","hardAlpha","operator","out"],["type","matrix","values","0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 0 0.490196 0 0 0 1 0"],["mode","normal","in2","BackgroundImageFix","result","effect1_dropShadow_61_2"],["mode","normal","in","SourceGraphic","in2","effect1_dropShadow_61_2","result","shape"],["id","clip0_61_2"],["width","16","height","16","fill","white"],["id","clip1_61_2"],["width","16","height","16","fill","white","transform","translate(21)"],["id","clip2_61_2"],["width","16","height","16","fill","white","transform","translate(42)"],["id","clip3_61_2"],["width","16","height","16","fill","white","transform","translate(63)"],["id","clip4_61_2"],["width","16","height","16","fill","white","transform","translate(84)"],[1,"review-iq","fw-medium"],[1,"review-text","flex-fill","fw-light",3,"textContent"],[1,"review-footer","d-flex","gap-1","justify-content-center","align-items-start"],[1,"review-flag"],["src","./assets/img/flags/spain-flag.webp","alt","Spain flag","width","27","height","27","loading","lazy"],[1,"review-information","d-flex","flex-column","justify-content-start","align-items-start"],[1,"review-name","fw-medium"],[1,"review-country","fw-light"],["src","./assets/img/flags/usa-flag.webp","alt","USA flag","width","27","height","27","loading","lazy"],["src","./assets/img/flags/alem-flag.webp","alt","Alem flag","width","27","height","27","loading","lazy"],["src","./assets/img/flags/mex-flag.webp","alt","Mexico flag","width","27","height","27","loading","lazy"],[1,"container","d-flex","flex-column","justify-content-center","align-items-center","py-5"],[1,"text-center","section-title","col-12","fw-bold","fs-2"],[1,"text-center","section-description","col-lg-7","col-12"],[1,"country-iq-list","d-flex","flex-wrap","justify-content-center","align-items-center","col-lg-10","col-12","gap-lg-1","gap-0","py-4"],[1,"country-iq-card","d-flex","justify-content-center","align-items-center","gap-2","col-6","col-md-3","col-lg-2","py-3"],[1,"country-flag"],["src","./assets/img/flags/italy.svg","alt","Italy flag","width","44","height","44","loading","lazy"],[1,"country-info","d-flex","flex-column","justify-content-start","align-items-start"],[1,"country-iq","fw-bold"],[1,"country-name","fw-light"],["src","./assets/img/flags/andorra.svg","alt","Andorra flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/china.svg","alt","China flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/japan.svg","alt","Japan flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/uruguay.svg","alt","Uruguay flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/guatemala.svg","alt","Guatemala flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/ecuador.svg","alt","Ecuador flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/romania.svg","alt","Romania flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/venezuela.svg","alt","Venezuela flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/bolivia.svg","alt","Bolivia flag","width","44","height","44","loading","lazy"]],template:function(c,h){c&1&&(e(0,"header",0)(1,"section",1)(2,"div",2),i(3,"h1",3),l(4,"translate"),i(5,"p",4),l(6,"translate"),e(7,"button",5),y("click",function(){return h.navigateTo("test")}),e(8,"span"),n(9),l(10,"translate"),t()()(),e(11,"div",6)(12,"picture"),i(13,"img",7),t(),e(14,"div",8)(15,"span",9),i(16,"div",10),n(17),l(18,"number"),t(),e(19,"p",11),n(20),l(21,"translate"),t()()()()(),e(22,"div",12)(23,"section",13)(24,"div",14)(25,"h3",15),n(26),l(27,"translate"),t(),e(28,"p",16),n(29),l(30,"translate"),t()(),e(31,"div",17)(32,"div",18)(33,"div",19)(34,"span"),n(35," 01 "),t()(),e(36,"div",20)(37,"div",21),i(38,"i",22),t(),e(39,"h5",23),n(40),l(41,"translate"),t(),e(42,"p",24),n(43),l(44,"translate"),t()()(),e(45,"div",18)(46,"div",19)(47,"span"),n(48," 02 "),t()(),e(49,"div",20)(50,"div",21),i(51,"i",25),t(),e(52,"h5",23),n(53),l(54,"translate"),t(),e(55,"p",24),n(56),l(57,"translate"),t()()(),e(58,"div",18)(59,"div",19)(60,"span"),n(61," 03 "),t()(),e(62,"div",20)(63,"div",21),i(64,"i",26),t(),e(65,"h5",23),n(66),l(67,"translate"),t(),e(68,"p",24),n(69),l(70,"translate"),t()()()()(),e(71,"section",27)(72,"div",28)(73,"h3",29),n(74),l(75,"translate"),t(),e(76,"p",30),n(77),l(78,"translate"),t(),e(79,"p",30),n(80),l(81,"translate"),t(),e(82,"div",31)(83,"div",32)(84,"span",33),n(85,">69"),t(),e(86,"span",33),n(87),l(88,"translate"),t()(),e(89,"div",32)(90,"span",33),n(91,"70 - 79"),t(),e(92,"span",33),n(93),l(94,"translate"),t()(),e(95,"div",32)(96,"span",33),n(97,"80 - 89"),t(),e(98,"span",33),n(99),l(100,"translate"),t()(),e(101,"div",32)(102,"span",33),n(103,"90 - 109"),t(),e(104,"span",33),n(105),l(106,"translate"),t()(),e(107,"div",32)(108,"span",33),n(109,"110 - 119"),t(),e(110,"span",33),n(111),l(112,"translate"),t()(),e(113,"div",32)(114,"span",33),n(115,"130 - 144"),t(),e(116,"span",33),n(117),l(118,"translate"),t()(),e(119,"div",32)(120,"span",33),n(121,"145 - 160"),t(),e(122,"span",33),n(123),l(124,"translate"),t()()(),e(125,"button",5),y("click",function(){return h.navigateTo("test")}),e(126,"span"),n(127),l(128,"translate"),t()()(),e(129,"div",34)(130,"div",35),i(131,"canvas",36),t()()(),e(132,"section",37)(133,"div",38)(134,"h3",39),n(135),l(136,"translate"),t()(),e(137,"div",40)(138,"div",41)(139,"div",42)(140,"div",43)(141,"div",44),g(),e(142,"svg",45)(143,"g",46)(144,"g",47),i(145,"path",48),t()(),e(146,"g",49),i(147,"path",50),t(),e(148,"g",51),i(149,"path",52),t(),e(150,"g",53),i(151,"path",54),t(),e(152,"g",55),i(153,"path",56),t(),e(154,"defs")(155,"filter",57),i(156,"feFlood",58)(157,"feColorMatrix",59)(158,"feOffset")(159,"feGaussianBlur",60)(160,"feComposite",61)(161,"feColorMatrix",62)(162,"feBlend",63)(163,"feBlend",64),t(),e(164,"clipPath",65),i(165,"rect",66),t(),e(166,"clipPath",67),i(167,"rect",68),t(),e(168,"clipPath",69),i(169,"rect",70),t(),e(170,"clipPath",71),i(171,"rect",72),t(),e(172,"clipPath",73),i(173,"rect",74),t()()()(),u(),e(174,"div",75),n(175),l(176,"translate"),t()(),i(177,"div",76),l(178,"translate"),e(179,"div",77)(180,"div",78),i(181,"img",79),t(),e(182,"div",80)(183,"span",81),n(184," Mar\xEDa L\xF3pez "),t(),e(185,"span",82),n(186),l(187,"translate"),t()()()()(),e(188,"div",41)(189,"div",42)(190,"div",43)(191,"div",44),g(),e(192,"svg",45)(193,"g",46)(194,"g",47),i(195,"path",48),t()(),e(196,"g",49),i(197,"path",50),t(),e(198,"g",51),i(199,"path",52),t(),e(200,"g",53),i(201,"path",54),t(),e(202,"g",55),i(203,"path",56),t(),e(204,"defs")(205,"filter",57),i(206,"feFlood",58)(207,"feColorMatrix",59)(208,"feOffset")(209,"feGaussianBlur",60)(210,"feComposite",61)(211,"feColorMatrix",62)(212,"feBlend",63)(213,"feBlend",64),t(),e(214,"clipPath",65),i(215,"rect",66),t(),e(216,"clipPath",67),i(217,"rect",68),t(),e(218,"clipPath",69),i(219,"rect",70),t(),e(220,"clipPath",71),i(221,"rect",72),t(),e(222,"clipPath",73),i(223,"rect",74),t()()()(),u(),e(224,"div",75),n(225),l(226,"translate"),t()(),i(227,"div",76),l(228,"translate"),e(229,"div",77)(230,"div",78),i(231,"img",83),t(),e(232,"div",80)(233,"span",81),n(234," John Smith "),t(),e(235,"span",82),n(236),l(237,"translate"),t()()()()(),e(238,"div",41)(239,"div",42)(240,"div",43)(241,"div",44),g(),e(242,"svg",45)(243,"g",46)(244,"g",47),i(245,"path",48),t()(),e(246,"g",49),i(247,"path",50),t(),e(248,"g",51),i(249,"path",52),t(),e(250,"g",53),i(251,"path",54),t(),e(252,"g",55),i(253,"path",56),t(),e(254,"defs")(255,"filter",57),i(256,"feFlood",58)(257,"feColorMatrix",59)(258,"feOffset")(259,"feGaussianBlur",60)(260,"feComposite",61)(261,"feColorMatrix",62)(262,"feBlend",63)(263,"feBlend",64),t(),e(264,"clipPath",65),i(265,"rect",66),t(),e(266,"clipPath",67),i(267,"rect",68),t(),e(268,"clipPath",69),i(269,"rect",70),t(),e(270,"clipPath",71),i(271,"rect",72),t(),e(272,"clipPath",73),i(273,"rect",74),t()()()(),u(),e(274,"div",75),n(275),l(276,"translate"),t()(),i(277,"div",76),l(278,"translate"),e(279,"div",77)(280,"div",78),i(281,"img",84),t(),e(282,"div",80)(283,"span",81),n(284," Anna M\xFCller "),t(),e(285,"span",82),n(286),l(287,"translate"),t()()()()(),e(288,"div",41)(289,"div",42)(290,"div",43)(291,"div",44),g(),e(292,"svg",45)(293,"g",46)(294,"g",47),i(295,"path",48),t()(),e(296,"g",49),i(297,"path",50),t(),e(298,"g",51),i(299,"path",52),t(),e(300,"g",53),i(301,"path",54),t(),e(302,"g",55),i(303,"path",56),t(),e(304,"defs")(305,"filter",57),i(306,"feFlood",58)(307,"feColorMatrix",59)(308,"feOffset")(309,"feGaussianBlur",60)(310,"feComposite",61)(311,"feColorMatrix",62)(312,"feBlend",63)(313,"feBlend",64),t(),e(314,"clipPath",65),i(315,"rect",66),t(),e(316,"clipPath",67),i(317,"rect",68),t(),e(318,"clipPath",69),i(319,"rect",70),t(),e(320,"clipPath",71),i(321,"rect",72),t(),e(322,"clipPath",73),i(323,"rect",74),t()()()(),u(),e(324,"div",75),n(325),l(326,"translate"),t()(),i(327,"div",76),l(328,"translate"),e(329,"div",77)(330,"div",78),i(331,"img",85),t(),e(332,"div",80)(333,"span",81),n(334," Carlos Garc\xEDa "),t(),e(335,"span",82),n(336),l(337,"translate"),t()()()()()()(),e(338,"section",86)(339,"div",38)(340,"h3",87),n(341),l(342,"translate"),t(),e(343,"p",88),n(344),l(345,"translate"),t()(),e(346,"div",89)(347,"div",90)(348,"div",91),i(349,"img",92),t(),e(350,"div",93)(351,"span",94),n(352,"106"),t(),e(353,"span",95),n(354),l(355,"translate"),t()()(),e(356,"div",90)(357,"div",91),i(358,"img",96),t(),e(359,"div",93)(360,"span",94),n(361,"101"),t(),e(362,"span",95),n(363),l(364,"translate"),t()()(),e(365,"div",90)(366,"div",91),i(367,"img",97),t(),e(368,"div",93)(369,"span",94),n(370,"108"),t(),e(371,"span",95),n(372),l(373,"translate"),t()()(),e(374,"div",90)(375,"div",91),i(376,"img",98),t(),e(377,"div",93)(378,"span",94),n(379,"110"),t(),e(380,"span",95),n(381),l(382,"translate"),t()()(),e(383,"div",90)(384,"div",91),i(385,"img",99),t(),e(386,"div",93)(387,"span",94),n(388,"101"),t(),e(389,"span",95),n(390),l(391,"translate"),t()()(),e(392,"div",90)(393,"div",91),i(394,"img",100),t(),e(395,"div",93)(396,"span",94),n(397,"101"),t(),e(398,"span",95),n(399),l(400,"translate"),t()()(),e(401,"div",90)(402,"div",91),i(403,"img",101),t(),e(404,"div",93)(405,"span",94),n(406,"102"),t(),e(407,"span",95),n(408),l(409,"translate"),t()()(),e(410,"div",90)(411,"div",91),i(412,"img",102),t(),e(413,"div",93)(414,"span",94),n(415,"100"),t(),e(416,"span",95),n(417),l(418,"translate"),t()()(),e(419,"div",90)(420,"div",91),i(421,"img",103),t(),e(422,"div",93)(423,"span",94),n(424,"101"),t(),e(425,"span",95),n(426),l(427,"translate"),t()()(),e(428,"div",90)(429,"div",91),i(430,"img",104),t(),e(431,"div",93)(432,"span",94),n(433,"101"),t(),e(434,"span",95),n(435),l(436,"translate"),t()()()()()(),i(437,"app-home-popup")),c&2&&(a(3),f("innerHtml",r(4,53,"home.header.title"),w),a(2),f("textContent",r(6,55,"home.header.p")),a(4),m(" ",r(10,57,"home.header.button")," "),a(8),m("",r(18,59,h.peopleOnline)," "),a(3),m(" ",r(21,61,"home.header.p_people")," "),a(6),o(r(27,63,"home.how.title")),a(3),o(r(30,65,"home.how.description")),a(11),m(" ",r(41,67,"home.how.card.card_1_title")," "),a(3),m(" ",r(44,69,"home.how.card.card_1_description")," "),a(10),m(" ",r(54,71,"home.how.card.card_2_title")," "),a(3),m(" ",r(57,73,"home.how.card.card_2_description")," "),a(10),m(" ",r(67,75,"home.how.card.card_3_title")," "),a(3),m(" ",r(70,77,"home.how.card.card_3_description")," "),a(5),m(" ",r(75,79,"home.why.title")," "),a(3),m(" ",r(78,81,"home.why.description_1")," "),a(3),m(" ",r(81,83,"home.why.description_2")," "),a(7),o(r(88,85,"success.qi_table.table_value_1")),a(6),o(r(94,87,"success.qi_table.table_value_2")),a(6),o(r(100,89,"success.qi_table.table_value_3")),a(6),o(r(106,91,"success.qi_table.table_value_4")),a(6),o(r(112,93,"success.qi_table.table_value_5")),a(6),o(r(118,95,"success.qi_table.table_value_6")),a(6),o(r(124,97,"success.qi_table.table_value_7")),a(4),m(" ",r(128,99,"home.why.button")," "),a(4),f("type","line")("data",h.lineChartData)("options",h.lineChartOptions)("legend",h.lineChartLegend),a(4),m(" ",r(136,101,"home.review.title")," "),a(40),m(" ",r(176,103,"home.review.reviews.review_1.iq")," "),a(2),f("textContent",r(178,105,"home.review.reviews.review_1.text")),a(9),m(" ",r(187,107,"home.review.reviews.review_1.country")," "),a(39),m(" ",r(226,109,"home.review.reviews.review_2.iq")," "),a(2),f("textContent",r(228,111,"home.review.reviews.review_2.text")),a(9),m(" ",r(237,113,"home.review.reviews.review_2.country")," "),a(39),m(" ",r(276,115,"home.review.reviews.review_3.iq")," "),a(2),f("textContent",r(278,117,"home.review.reviews.review_3.text")),a(9),m(" ",r(287,119,"home.review.reviews.review_3.country")," "),a(39),m(" ",r(326,121,"home.review.reviews.review_4.iq")," "),a(2),f("textContent",r(328,123,"home.review.reviews.review_4.text")),a(9),m(" ",r(337,125,"home.review.reviews.review_4.country")," "),a(5),m(" ",r(342,127,"home.countries.title")," "),a(3),m(" ",r(345,129,"home.countries.description")," "),a(10),m(" ",r(355,131,"home.countries.country.it")," "),a(9),o(r(364,133,"home.countries.country.andorra")),a(9),o(r(373,135,"home.countries.country.china")),a(9),o(r(382,137,"home.countries.country.japon")),a(9),o(r(391,139,"home.countries.country.uruguay")),a(9),o(r(400,141,"home.countries.country.guatemala")),a(9),o(r(409,143,"home.countries.country.ecuador")),a(9),o(r(418,145,"home.countries.country.romania")),a(9),o(r(427,147,"home.countries.country.venezuela")),a(9),o(r(436,149,"home.countries.country.bolivia")))},dependencies:[D,k,j,E],styles:['.green-dot[_ngcontent-%COMP%]{position:relative;background-color:#23a854;width:15px;height:15px;border-radius:50%}.green-dot[_ngcontent-%COMP%]:after{content:"";position:absolute;top:50%;left:50%;width:100%;height:100%;background-color:#23a854;border-radius:50%;transform:translate(-50%,-50%);animation:_ngcontent-%COMP%_ping 1.5s infinite ease-out;opacity:0}@keyframes _ngcontent-%COMP%_ping{0%{transform:translate(-50%,-50%) scale(1);opacity:1}75%{transform:translate(-50%,-50%) scale(2);opacity:0}to{transform:translate(-50%,-50%) scale(2);opacity:0}}']});let s=p;return s})();var te=(()=>{let p=class p{};p.\u0275fac=function(c){return new(c||p)},p.\u0275mod=b({type:p}),p.\u0275inj=C({imports:[M,z.forChild([{path:"",component:q}]),T,F]});let s=p;return s})();export{te as HomeModule};
