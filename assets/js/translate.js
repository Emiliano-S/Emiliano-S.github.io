document.addEventListener("DOMContentLoaded",()=>{const userLanguage=navigator.language||"en";const lang=userLanguage.startsWith("es")?"es":"en";function loadTranslation(language,callback){fetch(`assets/i18n/${language}.json`).then((response)=>{if(!response.ok){throw new Error(`HTTP error! status: ${response.status}`)}
return response.json()}).then((data)=>callback(data)).catch((error)=>console.error("Error loading translation:",error))}
function updatePopupMessage(translation,minutes,name,city){let message=translation.home.popup.message;message=message.replace("{{minutes}}",minutes).replace("{{name}}",name).replace("{{city}}",city);const popup=document.getElementById("popup");const messageElement=document.getElementById("popup-message");if(popup&&messageElement){messageElement.innerHTML=message;popup.classList.add("popup-show");setTimeout(()=>{popup.classList.remove("popup-show");setTimeout(showPopup,5000)},3000)}}
function updatePageContent(translation){document.getElementById("header-title").innerHTML=translation.home.header.title;document.getElementById("header-p").innerHTML=translation.home.header.p;document.getElementById("header-button").innerHTML=translation.home.header.button;document.getElementById("header-p_people").innerHTML=translation.home.header.p_people;document.getElementById("how-title").innerHTML=translation.home.how.title;document.getElementById("how-description").innerHTML=translation.home.how.description;document.getElementById("card-card_1_title").innerHTML=translation.home.how.card.card_1_title;document.getElementById("card-card_1_description").innerHTML=translation.home.how.card.card_1_description;document.getElementById("card-card_2_title").innerHTML=translation.home.how.card.card_2_title;document.getElementById("card-card_2_description").innerHTML=translation.home.how.card.card_2_description;document.getElementById("card-card_3_title").innerHTML=translation.home.how.card.card_3_title;document.getElementById("card-card_3_description").innerHTML=translation.home.how.card.card_3_description;document.getElementById("why-title").innerHTML=translation.home.why.title;document.getElementById("why-description_1").innerHTML=translation.home.why.description_1;document.getElementById("why-description_2").innerHTML=translation.home.why.description_2;document.getElementById("why-button").innerHTML=translation.home.why.button;document.getElementById("qi_table-table_value_1").innerHTML=translation.success.qi_table.table_value_1;document.getElementById("qi_table-table_value_2").innerHTML=translation.success.qi_table.table_value_2;document.getElementById("qi_table-table_value_3").innerHTML=translation.success.qi_table.table_value_3;document.getElementById("qi_table-table_value_4").innerHTML=translation.success.qi_table.table_value_4;document.getElementById("qi_table-table_value_5").innerHTML=translation.success.qi_table.table_value_5;document.getElementById("qi_table-table_value_6").innerHTML=translation.success.qi_table.table_value_6;document.getElementById("qi_table-table_value_7").innerHTML=translation.success.qi_table.table_value_7;document.getElementById("review-title").innerHTML=translation.home.review.title;document.getElementById("review_1-iq").innerHTML=translation.home.review.reviews.review_1.iq;document.getElementById("review_1.text").innerHTML=translation.home.review.reviews.review_1.text;document.getElementById("review_1.country").innerHTML=translation.home.review.reviews.review_1.country;document.getElementById("review_2-iq").innerHTML=translation.home.review.reviews.review_2.iq;document.getElementById("review_2.text").innerHTML=translation.home.review.reviews.review_2.text;document.getElementById("review_2.country").innerHTML=translation.home.review.reviews.review_2.country;document.getElementById("review_3-iq").innerHTML=translation.home.review.reviews.review_3.iq;document.getElementById("review_3.text").innerHTML=translation.home.review.reviews.review_3.text;document.getElementById("review_3.country").innerHTML=translation.home.review.reviews.review_3.country;document.getElementById("review_4-iq").innerHTML=translation.home.review.reviews.review_4.iq;document.getElementById("review_4.text").innerHTML=translation.home.review.reviews.review_4.text;document.getElementById("review_4.country").innerHTML=translation.home.review.reviews.review_4.country;document.getElementById("countries.title").innerHTML=translation.home.countries.title;document.getElementById("countries.description").innerHTML=translation.home.countries.description;document.getElementById("country.it").innerHTML=translation.home.countries.country.it;document.getElementById("country.andorra").innerHTML=translation.home.countries.country.andorra;document.getElementById("country.china").innerHTML=translation.home.countries.country.china;document.getElementById("country.japon").innerHTML=translation.home.countries.country.japon;document.getElementById("country.uruguay").innerHTML=translation.home.countries.country.uruguay;document.getElementById("country.guatemala").innerHTML=translation.home.countries.country.guatemala;document.getElementById("country.ecuador").innerHTML=translation.home.countries.country.ecuador;document.getElementById("country.romania").innerHTML=translation.home.countries.country.romania;document.getElementById("country.venezuela").innerHTML=translation.home.countries.country.venezuela;document.getElementById("country.bolivia").innerHTML=translation.home.countries.country.bolivia}
function showPopup(){const{name,minutes,city}=getNextPopupData();loadTranslation(lang,(translation)=>{updatePopupMessage(translation,minutes,name,city);updatePageContent(translation)})}
function getNextPopupData(){const data=[{name:"Santiago",minutes:1,city:"Chile"},{name:"María",minutes:3,city:"Argentina"},{name:"Pedro",minutes:5,city:"Perú"},];let currentIndex=0;const item=data[currentIndex];currentIndex=(currentIndex+1)%data.length;return item}
showPopup();const ctx=document.getElementById("myLineChart").getContext("2d");new Chart(ctx,{type:"line",data:{labels:["(> 69) IQ","(70-79) IQ","(80-89) IQ","(90-109) IQ","(110-119) IQ","(120-129) IQ","(130-144) IQ","(145-160) IQ",],datasets:[{label:"%",data:[0.1,2,14,34,34,14,2,0.1],fill:!0,tension:0.5,borderColor:"#476597",backgroundColor:"rgba(71, 101, 151, .3)",},],},options:{responsive:!0,plugins:{legend:{display:!1}}},});function getRandomNumber(min,max){return Math.floor(Math.random()*(max-min+1))+min}
function updatePeopleOnline(){const peopleOnline=getRandomNumber(540,1350);const peopleOnlineElement=document.getElementById("people-online-number");if(peopleOnlineElement){peopleOnlineElement.textContent=peopleOnline.toLocaleString()}}
updatePeopleOnline()})