import{a as T,b as H}from"./chunk-AOPN3V4D.js";import{Aa as i,Ga as y,Hb as P,Jb as z,L as b,M as B,Mb as E,Nb as D,R as w,Ra as n,S as L,Sa as o,Ta as m,Z as u,_ as x,bb as C,cb as l,db as r,ea as v,eb as I,ha as a,ia as S,pa as f,vb as M,wb as j,ya as e,za as t}from"./chunk-QE4JIREK.js";import"./chunk-YT5AF7SN.js";import"./chunk-HFBR4SKI.js";var F=(()=>{let p=class p{constructor(){this.data=[{name:"Santiago",minutes:1,city:"Chile"},{name:"Mar\xEDa",minutes:3,city:"Argentina"},{name:"Pedro",minutes:5,city:"Per\xFA"}],this.currentIndex=0}getNextPopupData(){let d=this.data[this.currentIndex];return this.currentIndex=(this.currentIndex+1)%this.data.length,d}};p.\u0275fac=function(c){return new(c||p)},p.\u0275prov=b({token:p,factory:p.\u0275fac,providedIn:"root"});let s=p;return s})();var Q=(s,p,q)=>({minutes:s,name:p,city:q}),O=(()=>{let p=class p{constructor(d){this.popupService=d,this.name="",this.minutes=0,this.city=""}ngOnInit(){this.showPopup()}showPopup(){let{name:d,minutes:c,city:h}=this.popupService.getNextPopupData();this.name=d,this.minutes=c,this.city=h;let g=document.getElementById("popup");g&&g.classList.add("popup-show"),setTimeout(()=>{g&&g.classList.remove("popup-show"),setTimeout(()=>this.showPopup(),5e3)},3e3)}};p.\u0275fac=function(c){return new(c||p)(S(F))},p.\u0275cmp=w({type:p,selectors:[["app-home-popup"]],decls:6,vars:8,consts:[["id","popup",1,"popup-notification","d-flex","justify-content-center","align-items-center","gap-2","position-fixed","p-2","px-3"],[1,"popup-icon-container","text-white","d-flex","justify-content-center","align-items-center"],[1,"bi","bi-patch-check-fill"],[1,"popup-text"],[1,"p-0","m-0",3,"innerHTML"]],template:function(c,h){c&1&&(e(0,"div",0)(1,"div",1),i(2,"i",2),t(),e(3,"div",3),i(4,"p",4),l(5,"translate"),t()()),c&2&&(a(4),f("innerHTML",I(5,1,"home.popup.message",C(4,Q,h.minutes,h.name,h.city)),v))},dependencies:[E]});let s=p;return s})();var k=(()=>{let p=class p{constructor(d){this.router=d,this.lineChartData={labels:["(> 69) IQ","(70-79) IQ","(80-89) IQ","(90-109) IQ","(110-119) IQ","(120-129) IQ","(130-144) IQ","(145-160) IQ"],datasets:[{data:[.1,2,14,34,34,14,2,.1],label:"%",fill:!0,tension:.5,borderColor:"#476597",backgroundColor:"rgba(71, 101, 151, .3)"}]},this.lineChartOptions={responsive:!0},this.lineChartLegend=!1}ngOnInit(){this.peopleOnline=this.getRandomNumber(540,1350)}getRandomNumber(d,c){return Math.floor(Math.random()*(c-d+1))+d}navigateTo(d){this.router.navigateByUrl(d)}};p.\u0275fac=function(c){return new(c||p)(S(P))},p.\u0275cmp=w({type:p,selectors:[["app-home"]],decls:439,vars:151,consts:[[1,"container-fluid","d-flex","flex-column","justify-content-center","p-4","position-relative","pb-0","position-relative"],["id","header",1,"container","d-flex","flex-wrap","flex-row","justify-content-between","align-items-center","py-md-5","pb-5","pt-0"],[1,"col-12","col-lg-6","d-flex","flex-column","justify-content-start","align-items-start","py-md-5","py-0","mb-lg-5","mt-lg-0","mt-5"],[2,"font-weight","100","text-shadow","0px 4px 4px rgba(0,0,0,.25)","color","#000",3,"innerHTML"],[3,"innerHTML"],["type","button",1,"btn-custom","gap-1","d-flex","align-items-center","fade-in","visible",3,"click"],[1,"col-12","d-lg-flex","col-lg-6","d-none","flex-row","justify-content-center","align-items-end","position-relative"],["srcset","./assets/img/girl_uopvwd_c_scale_w_200.webp 200w, ./assets/img/girl_uopvwd_c_scale_w_340.webp 340w, ./assets/img/girl_uopvwd_c_scale_w_452.webp 452w","sizes","(max-width: 452px) 100vw, 452px"],["src","./assets/img/girl_uopvwd_c_scale_w_452.webp","alt","Chica pensando","id","girlImg","loading","lazy"],["id","peopleOnline",1,"card","position-absolute","d-flex","flex-column"],[1,"fw-bold","fs-2","d-flex","gap-2","justify-content-start","align-items-center"],[1,"green-dot"],[1,"m-0"],[1,"content","w-100","container-fluid"],[1,"container-fluid","d-flex","flex-column","justify-content-center","align-items-center","py-5"],[1,"section-header","d-flex","flex-column","justify-content-center","align-items-center"],[1,"text-center","section-title","w-100","text-white","fw-bold","fs-2"],[1,"text-center","section-description","col-lg-6","col-11","text-white"],[1,"w-100","p-5","d-flex","flex-wrap","how-card-row"],[1,"how-card-container","col-md-4","col-12","d-flex","justify-content-center","align-items-center","py-5","py-md-2","p-2","position-relative"],[1,"how-card-number","position-absolute","d-flex","justify-content-center","align-items-center"],[1,"how-card","px-4","pb-4","pt-2","d-flex","flex-column"],[1,"how-card-icon","rounded","rounded-circle","d-flex","justify-content-center","align-items-center","my-3"],[1,"bi","bi-clock-fill"],[1,"how-card-title"],[1,"how-card-description"],[1,"bi","bi-graph-up"],[1,"bi","bi-patch-check-fill"],["id","why",1,"container","d-flex","flex-wrap","flex-row","justify-content-center","align-items-center","py-5"],[1,"col-lg-6","col-12","d-flex","order-1","order-lg-0","justify-content-start","align-items-start","flex-column","gap-2"],[1,"section-title","w-100","fw-bold","fs-2"],[1,"section-description"],[1,"d-flex","flex-wrap","justify-content-start","gap-3","align-items-start","my-2"],[1,"d-flex","justify-content-center","align-items-center","gap-2","bg-white","shadow-sm","border-1","rounded-pill","px-3","py-2"],[1,"fs-12"],[1,"col-lg-6","col-12","d-flex","order-0","order-lg-1","justify-content-center","align-items-center"],[1,"d-flex","flex-fill","justify-content-center","align-items-center"],["baseChart","",3,"type","data","options","legend"],["id","review",1,"container","d-flex","flex-column","justify-content-center","align-items-center","py-4"],[1,"section-header","d-flex","flex-column","justify-content-center","align-items-center","col-12"],[1,"text-center","section-title","col-lg-8","col-12","fw-bold","fs-2"],[1,"review-container","col-12","col-lg-10","d-flex","flex-wrap","justify-content-center","align-items-stretch"],[1,"review-card-container","col-12","col-md-6","p-3"],[1,"review-card","d-flex","flex-column","justify-content-start","align-items-start","p-3","px-4","gap-3","h-100"],[1,"review-card-header","w-100","d-flex","justify-content-between","align-items-center"],[1,"review-stars"],["xmlns","http://www.w3.org/2000/svg","width","100","height","16","viewBox","0 0 100 16","fill","none"],["clip-path","url(#clip0_61_2)"],["filter","url(#filter0_d_61_2)"],["d","M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z","fill","#FBD102"],["clip-path","url(#clip1_61_2)"],["d","M24.612 15.443C24.226 15.641 23.788 15.294 23.866 14.851L24.696 10.121L21.173 6.76501C20.844 6.45101 21.015 5.87701 21.456 5.81501L26.354 5.11901L28.538 0.792012C28.735 0.402012 29.268 0.402012 29.465 0.792012L31.649 5.11901L36.547 5.81501C36.988 5.87701 37.159 6.45101 36.829 6.76501L33.307 10.121L34.137 14.851C34.215 15.294 33.777 15.641 33.391 15.443L29 13.187L24.612 15.443Z","fill","#FBD102"],["clip-path","url(#clip2_61_2)"],["d","M45.612 15.443C45.226 15.641 44.788 15.294 44.866 14.851L45.696 10.121L42.173 6.76501C41.844 6.45101 42.015 5.87701 42.456 5.81501L47.354 5.11901L49.538 0.792012C49.735 0.402012 50.268 0.402012 50.465 0.792012L52.649 5.11901L57.547 5.81501C57.988 5.87701 58.159 6.45101 57.829 6.76501L54.307 10.121L55.137 14.851C55.215 15.294 54.777 15.641 54.391 15.443L50 13.187L45.612 15.443Z","fill","#FBD102"],["clip-path","url(#clip3_61_2)"],["d","M66.612 15.443C66.226 15.641 65.788 15.294 65.866 14.851L66.696 10.121L63.173 6.76501C62.844 6.45101 63.015 5.87701 63.456 5.81501L68.354 5.11901L70.538 0.792012C70.735 0.402012 71.268 0.402012 71.465 0.792012L73.649 5.11901L78.547 5.81501C78.988 5.87701 79.159 6.45101 78.829 6.76501L75.307 10.121L76.137 14.851C76.215 15.294 75.777 15.641 75.391 15.443L71 13.187L66.612 15.443Z","fill","#FBD102"],["clip-path","url(#clip4_61_2)"],["d","M87.612 15.443C87.226 15.641 86.788 15.294 86.866 14.851L87.696 10.121L84.173 6.76501C83.844 6.45101 84.015 5.87701 84.456 5.81501L89.354 5.11901L91.538 0.792012C91.735 0.402012 92.268 0.402012 92.465 0.792012L94.649 5.11901L99.547 5.81501C99.988 5.87701 100.159 6.45101 99.829 6.76501L96.307 10.121L97.137 14.851C97.215 15.294 96.777 15.641 96.391 15.443L92 13.187L87.612 15.443Z","fill","#FBD102"],["id","filter0_d_61_2","x","-1.99866","y","-1.50049","width","20","height","19.0005","filterUnits","userSpaceOnUse","color-interpolation-filters","sRGB"],["flood-opacity","0","result","BackgroundImageFix"],["in","SourceAlpha","type","matrix","values","0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0","result","hardAlpha"],["stdDeviation","1"],["in2","hardAlpha","operator","out"],["type","matrix","values","0 0 0 0 0.996078 0 0 0 0 0.996078 0 0 0 0 0.490196 0 0 0 1 0"],["mode","normal","in2","BackgroundImageFix","result","effect1_dropShadow_61_2"],["mode","normal","in","SourceGraphic","in2","effect1_dropShadow_61_2","result","shape"],["id","clip0_61_2"],["width","16","height","16","fill","white"],["id","clip1_61_2"],["width","16","height","16","fill","white","transform","translate(21)"],["id","clip2_61_2"],["width","16","height","16","fill","white","transform","translate(42)"],["id","clip3_61_2"],["width","16","height","16","fill","white","transform","translate(63)"],["id","clip4_61_2"],["width","16","height","16","fill","white","transform","translate(84)"],[1,"review-iq","fw-medium"],[1,"review-text","flex-fill","fw-light",3,"innerHTML"],[1,"review-footer","d-flex","gap-1","justify-content-center","align-items-start"],[1,"review-flag"],["src","./assets/img/flags/spain-flag.webp","alt","Spain flag","width","27","height","27","loading","lazy"],[1,"review-information","d-flex","flex-column","justify-content-start","align-items-start"],[1,"review-name","fw-medium"],[1,"review-country","fw-light"],["src","./assets/img/flags/usa-flag.webp","alt","USA flag","width","27","height","27","loading","lazy"],["src","./assets/img/flags/alem-flag.webp","alt","Alem flag","width","27","height","27","loading","lazy"],["src","./assets/img/flags/mex-flag.webp","alt","Mexico flag","width","27","height","27","loading","lazy"],[1,"container","d-flex","flex-column","justify-content-center","align-items-center","py-5"],[1,"text-center","section-title","col-12","fw-bold","fs-2"],[1,"text-center","section-description","col-lg-7","col-12"],[1,"country-iq-list","d-flex","flex-wrap","justify-content-center","align-items-center","col-lg-10","col-12","gap-lg-1","gap-0","py-4"],[1,"country-iq-card","d-flex","justify-content-center","align-items-center","gap-2","col-6","col-md-3","col-lg-2","py-3"],[1,"country-flag"],["src","./assets/img/flags/italy.svg","alt","Italy flag","width","44","height","44","loading","lazy"],[1,"country-info","d-flex","flex-column","justify-content-start","align-items-start"],[1,"country-iq","fw-bold"],[1,"country-name","fw-light"],["src","./assets/img/flags/andorra.svg","alt","Andorra flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/china.svg","alt","China flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/japan.svg","alt","Japan flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/uruguay.svg","alt","Uruguay flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/guatemala.svg","alt","Guatemala flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/ecuador.svg","alt","Ecuador flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/romania.svg","alt","Romania flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/venezuela.svg","alt","Venezuela flag","width","44","height","44","loading","lazy"],["src","./assets/img/flags/bolivia.svg","alt","Bolivia flag","width","44","height","44","loading","lazy"]],template:function(c,h){c&1&&(e(0,"header",0)(1,"section",1)(2,"div",2),i(3,"h1",3),l(4,"translate"),i(5,"p",4),l(6,"translate"),e(7,"button",5),y("click",function(){return h.navigateTo("test")}),e(8,"span"),n(9),l(10,"translate"),t()()(),e(11,"div",6)(12,"picture"),i(13,"source",7)(14,"img",8),t(),e(15,"div",9)(16,"span",10),i(17,"div",11),n(18),l(19,"number"),t(),e(20,"p",12),n(21),l(22,"translate"),t()()()()(),e(23,"div",13)(24,"section",14)(25,"div",15)(26,"h3",16),n(27),l(28,"translate"),t(),e(29,"p",17),n(30),l(31,"translate"),t()(),e(32,"div",18)(33,"div",19)(34,"div",20)(35,"span"),n(36," 01 "),t()(),e(37,"div",21)(38,"div",22),i(39,"i",23),t(),e(40,"h5",24),n(41),l(42,"translate"),t(),e(43,"p",25),n(44),l(45,"translate"),t()()(),e(46,"div",19)(47,"div",20)(48,"span"),n(49," 02 "),t()(),e(50,"div",21)(51,"div",22),i(52,"i",26),t(),e(53,"h5",24),n(54),l(55,"translate"),t(),e(56,"p",25),n(57),l(58,"translate"),t()()(),e(59,"div",19)(60,"div",20)(61,"span"),n(62," 03 "),t()(),e(63,"div",21)(64,"div",22),i(65,"i",27),t(),e(66,"h5",24),n(67),l(68,"translate"),t(),e(69,"p",25),n(70),l(71,"translate"),t()()()()(),e(72,"section",28)(73,"div",29)(74,"h3",30),n(75),l(76,"translate"),t(),e(77,"p",31),n(78),l(79,"translate"),t(),e(80,"p",31),n(81),l(82,"translate"),t(),e(83,"div",32)(84,"div",33)(85,"span",34),n(86,">69"),t(),e(87,"span",34),n(88),l(89,"translate"),t()(),e(90,"div",33)(91,"span",34),n(92,"70 - 79"),t(),e(93,"span",34),n(94),l(95,"translate"),t()(),e(96,"div",33)(97,"span",34),n(98,"80 - 89"),t(),e(99,"span",34),n(100),l(101,"translate"),t()(),e(102,"div",33)(103,"span",34),n(104,"90 - 109"),t(),e(105,"span",34),n(106),l(107,"translate"),t()(),e(108,"div",33)(109,"span",34),n(110,"110 - 119"),t(),e(111,"span",34),n(112),l(113,"translate"),t()(),e(114,"div",33)(115,"span",34),n(116,"130 - 144"),t(),e(117,"span",34),n(118),l(119,"translate"),t()(),e(120,"div",33)(121,"span",34),n(122,"145 - 160"),t(),e(123,"span",34),n(124),l(125,"translate"),t()()(),e(126,"button",5),y("click",function(){return h.navigateTo("test")}),e(127,"span"),n(128),l(129,"translate"),t()()(),e(130,"div",35)(131,"div",36),i(132,"canvas",37),t()()(),e(133,"section",38)(134,"div",39)(135,"h3",40),n(136),l(137,"translate"),t()(),e(138,"div",41)(139,"div",42)(140,"div",43)(141,"div",44)(142,"div",45),u(),e(143,"svg",46)(144,"g",47)(145,"g",48),i(146,"path",49),t()(),e(147,"g",50),i(148,"path",51),t(),e(149,"g",52),i(150,"path",53),t(),e(151,"g",54),i(152,"path",55),t(),e(153,"g",56),i(154,"path",57),t(),e(155,"defs")(156,"filter",58),i(157,"feFlood",59)(158,"feColorMatrix",60)(159,"feOffset")(160,"feGaussianBlur",61)(161,"feComposite",62)(162,"feColorMatrix",63)(163,"feBlend",64)(164,"feBlend",65),t(),e(165,"clipPath",66),i(166,"rect",67),t(),e(167,"clipPath",68),i(168,"rect",69),t(),e(169,"clipPath",70),i(170,"rect",71),t(),e(171,"clipPath",72),i(172,"rect",73),t(),e(173,"clipPath",74),i(174,"rect",75),t()()()(),x(),e(175,"div",76),n(176),l(177,"translate"),t()(),i(178,"div",77),l(179,"translate"),e(180,"div",78)(181,"div",79),i(182,"img",80),t(),e(183,"div",81)(184,"span",82),n(185," Mar\xEDa L\xF3pez "),t(),e(186,"span",83),n(187),l(188,"translate"),t()()()()(),e(189,"div",42)(190,"div",43)(191,"div",44)(192,"div",45),u(),e(193,"svg",46)(194,"g",47)(195,"g",48),i(196,"path",49),t()(),e(197,"g",50),i(198,"path",51),t(),e(199,"g",52),i(200,"path",53),t(),e(201,"g",54),i(202,"path",55),t(),e(203,"g",56),i(204,"path",57),t(),e(205,"defs")(206,"filter",58),i(207,"feFlood",59)(208,"feColorMatrix",60)(209,"feOffset")(210,"feGaussianBlur",61)(211,"feComposite",62)(212,"feColorMatrix",63)(213,"feBlend",64)(214,"feBlend",65),t(),e(215,"clipPath",66),i(216,"rect",67),t(),e(217,"clipPath",68),i(218,"rect",69),t(),e(219,"clipPath",70),i(220,"rect",71),t(),e(221,"clipPath",72),i(222,"rect",73),t(),e(223,"clipPath",74),i(224,"rect",75),t()()()(),x(),e(225,"div",76),n(226),l(227,"translate"),t()(),i(228,"div",77),l(229,"translate"),e(230,"div",78)(231,"div",79),i(232,"img",84),t(),e(233,"div",81)(234,"span",82),n(235," John Smith "),t(),e(236,"span",83),n(237),l(238,"translate"),t()()()()(),e(239,"div",42)(240,"div",43)(241,"div",44)(242,"div",45),u(),e(243,"svg",46)(244,"g",47)(245,"g",48),i(246,"path",49),t()(),e(247,"g",50),i(248,"path",51),t(),e(249,"g",52),i(250,"path",53),t(),e(251,"g",54),i(252,"path",55),t(),e(253,"g",56),i(254,"path",57),t(),e(255,"defs")(256,"filter",58),i(257,"feFlood",59)(258,"feColorMatrix",60)(259,"feOffset")(260,"feGaussianBlur",61)(261,"feComposite",62)(262,"feColorMatrix",63)(263,"feBlend",64)(264,"feBlend",65),t(),e(265,"clipPath",66),i(266,"rect",67),t(),e(267,"clipPath",68),i(268,"rect",69),t(),e(269,"clipPath",70),i(270,"rect",71),t(),e(271,"clipPath",72),i(272,"rect",73),t(),e(273,"clipPath",74),i(274,"rect",75),t()()()(),x(),e(275,"div",76),n(276),l(277,"translate"),t()(),i(278,"div",77),l(279,"translate"),e(280,"div",78)(281,"div",79),i(282,"img",85),t(),e(283,"div",81)(284,"span",82),n(285," Anna M\xFCller "),t(),e(286,"span",83),n(287),l(288,"translate"),t()()()()(),e(289,"div",42)(290,"div",43)(291,"div",44)(292,"div",45),u(),e(293,"svg",46)(294,"g",47)(295,"g",48),i(296,"path",49),t()(),e(297,"g",50),i(298,"path",51),t(),e(299,"g",52),i(300,"path",53),t(),e(301,"g",54),i(302,"path",55),t(),e(303,"g",56),i(304,"path",57),t(),e(305,"defs")(306,"filter",58),i(307,"feFlood",59)(308,"feColorMatrix",60)(309,"feOffset")(310,"feGaussianBlur",61)(311,"feComposite",62)(312,"feColorMatrix",63)(313,"feBlend",64)(314,"feBlend",65),t(),e(315,"clipPath",66),i(316,"rect",67),t(),e(317,"clipPath",68),i(318,"rect",69),t(),e(319,"clipPath",70),i(320,"rect",71),t(),e(321,"clipPath",72),i(322,"rect",73),t(),e(323,"clipPath",74),i(324,"rect",75),t()()()(),x(),e(325,"div",76),n(326),l(327,"translate"),t()(),i(328,"div",77),l(329,"translate"),e(330,"div",78)(331,"div",79),i(332,"img",86),t(),e(333,"div",81)(334,"span",82),n(335," Carlos Garc\xEDa "),t(),e(336,"span",83),n(337),l(338,"translate"),t()()()()()()(),e(339,"section",87)(340,"div",39)(341,"h3",88),n(342),l(343,"translate"),t(),e(344,"p",89),n(345),l(346,"translate"),t()(),e(347,"div",90)(348,"div",91)(349,"div",92),i(350,"img",93),t(),e(351,"div",94)(352,"span",95),n(353,"106"),t(),e(354,"span",96),n(355),l(356,"translate"),t()()(),e(357,"div",91)(358,"div",92),i(359,"img",97),t(),e(360,"div",94)(361,"span",95),n(362,"101"),t(),e(363,"span",96),n(364),l(365,"translate"),t()()(),e(366,"div",91)(367,"div",92),i(368,"img",98),t(),e(369,"div",94)(370,"span",95),n(371,"108"),t(),e(372,"span",96),n(373),l(374,"translate"),t()()(),e(375,"div",91)(376,"div",92),i(377,"img",99),t(),e(378,"div",94)(379,"span",95),n(380,"110"),t(),e(381,"span",96),n(382),l(383,"translate"),t()()(),e(384,"div",91)(385,"div",92),i(386,"img",100),t(),e(387,"div",94)(388,"span",95),n(389,"101"),t(),e(390,"span",96),n(391),l(392,"translate"),t()()(),e(393,"div",91)(394,"div",92),i(395,"img",101),t(),e(396,"div",94)(397,"span",95),n(398,"101"),t(),e(399,"span",96),n(400),l(401,"translate"),t()()(),e(402,"div",91)(403,"div",92),i(404,"img",102),t(),e(405,"div",94)(406,"span",95),n(407,"102"),t(),e(408,"span",96),n(409),l(410,"translate"),t()()(),e(411,"div",91)(412,"div",92),i(413,"img",103),t(),e(414,"div",94)(415,"span",95),n(416,"100"),t(),e(417,"span",96),n(418),l(419,"translate"),t()()(),e(420,"div",91)(421,"div",92),i(422,"img",104),t(),e(423,"div",94)(424,"span",95),n(425,"101"),t(),e(426,"span",96),n(427),l(428,"translate"),t()()(),e(429,"div",91)(430,"div",92),i(431,"img",105),t(),e(432,"div",94)(433,"span",95),n(434,"101"),t(),e(435,"span",96),n(436),l(437,"translate"),t()()()()()(),i(438,"app-home-popup")),c&2&&(a(3),f("innerHTML",r(4,53,"home.header.title"),v),a(2),f("innerHTML",r(6,55,"home.header.p"),v),a(4),m(" ",r(10,57,"home.header.button")," "),a(9),m("",r(19,59,h.peopleOnline)," "),a(3),m(" ",r(22,61,"home.header.p_people")," "),a(6),o(r(28,63,"home.how.title")),a(3),o(r(31,65,"home.how.description")),a(11),m(" ",r(42,67,"home.how.card.card_1_title")," "),a(3),m(" ",r(45,69,"home.how.card.card_1_description")," "),a(10),m(" ",r(55,71,"home.how.card.card_2_title")," "),a(3),m(" ",r(58,73,"home.how.card.card_2_description")," "),a(10),m(" ",r(68,75,"home.how.card.card_3_title")," "),a(3),m(" ",r(71,77,"home.how.card.card_3_description")," "),a(5),m(" ",r(76,79,"home.why.title")," "),a(3),m(" ",r(79,81,"home.why.description_1")," "),a(3),m(" ",r(82,83,"home.why.description_2")," "),a(7),o(r(89,85,"success.qi_table.table_value_1")),a(6),o(r(95,87,"success.qi_table.table_value_2")),a(6),o(r(101,89,"success.qi_table.table_value_3")),a(6),o(r(107,91,"success.qi_table.table_value_4")),a(6),o(r(113,93,"success.qi_table.table_value_5")),a(6),o(r(119,95,"success.qi_table.table_value_6")),a(6),o(r(125,97,"success.qi_table.table_value_7")),a(4),m(" ",r(129,99,"home.why.button")," "),a(4),f("type","line")("data",h.lineChartData)("options",h.lineChartOptions)("legend",h.lineChartLegend),a(4),m(" ",r(137,101,"home.review.title")," "),a(40),m(" ",r(177,103,"home.review.reviews.review_1.iq")," "),a(2),f("innerHTML",r(179,105,"home.review.reviews.review_1.text"),v),a(9),m(" ",r(188,107,"home.review.reviews.review_1.country")," "),a(39),m(" ",r(227,109,"home.review.reviews.review_2.iq")," "),a(2),f("innerHTML",r(229,111,"home.review.reviews.review_2.text"),v),a(9),m(" ",r(238,113,"home.review.reviews.review_2.country")," "),a(39),m(" ",r(277,115,"home.review.reviews.review_3.iq")," "),a(2),f("innerHTML",r(279,117,"home.review.reviews.review_3.text"),v),a(9),m(" ",r(288,119,"home.review.reviews.review_3.country")," "),a(39),m(" ",r(327,121,"home.review.reviews.review_4.iq")," "),a(2),f("innerHTML",r(329,123,"home.review.reviews.review_4.text"),v),a(9),m(" ",r(338,125,"home.review.reviews.review_4.country")," "),a(5),m(" ",r(343,127,"home.countries.title")," "),a(3),m(" ",r(346,129,"home.countries.description")," "),a(10),m(" ",r(356,131,"home.countries.country.it")," "),a(9),o(r(365,133,"home.countries.country.andorra")),a(9),o(r(374,135,"home.countries.country.china")),a(9),o(r(383,137,"home.countries.country.japon")),a(9),o(r(392,139,"home.countries.country.uruguay")),a(9),o(r(401,141,"home.countries.country.guatemala")),a(9),o(r(410,143,"home.countries.country.ecuador")),a(9),o(r(419,145,"home.countries.country.romania")),a(9),o(r(428,147,"home.countries.country.venezuela")),a(9),o(r(437,149,"home.countries.country.bolivia")))},dependencies:[T,O,M,E],styles:['.green-dot[_ngcontent-%COMP%]{position:relative;background-color:#23a854;width:15px;height:15px;border-radius:50%}.green-dot[_ngcontent-%COMP%]:after{content:"";position:absolute;top:50%;left:50%;width:100%;height:100%;background-color:#23a854;border-radius:50%;transform:translate(-50%,-50%);animation:_ngcontent-%COMP%_ping 1.5s infinite ease-out;opacity:0}@keyframes _ngcontent-%COMP%_ping{0%{transform:translate(-50%,-50%) scale(1);opacity:1}75%{transform:translate(-50%,-50%) scale(2);opacity:0}to{transform:translate(-50%,-50%) scale(2);opacity:0}}']});let s=p;return s})();var te=(()=>{let p=class p{};p.\u0275fac=function(c){return new(c||p)},p.\u0275mod=L({type:p}),p.\u0275inj=B({imports:[j,z.forChild([{path:"",component:k}]),D,H]});let s=p;return s})();export{te as HomeModule};
