document.addEventListener("DOMContentLoaded", () => {
    const userLanguage = navigator.language || 'en';
    const lang = userLanguage.startsWith('es') ? 'es' : 'en';
    
    fetch(`./assets/i18n/${lang}.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(translations => {
        console.log('Translations loaded:', translations);
        document.getElementById('header-title').innerHTML = translations.home.header.title;
        document.getElementById('header-p').innerHTML = translations.home.header.p;
        document.getElementById('header-button').innerHTML = translations.home.header.button;
        document.getElementById('header-p_people').innerHTML = translations.home.header.p_people;
        document.getElementById('how-title').innerHTML = translations.home.how.title;
        document.getElementById('how-description').innerHTML = translations.home.how.description;
        document.getElementById('card-card_1_title').innerHTML = translations.home.how.card.card_1_title;
        document.getElementById('card-card_1_description').innerHTML = translations.home.how.card.card_1_description;
        document.getElementById('card-card_2_title').innerHTML = translations.home.how.card.card_2_title;
        document.getElementById('card-card_2_description').innerHTML = translations.home.how.card.card_2_description;
        document.getElementById('card-card_3_title').innerHTML = translations.home.how.card.card_3_title;
        document.getElementById('card-card_3_description').innerHTML = translations.home.how.card.card_3_description;
        document.getElementById('why-title').innerHTML = translations.home.why.title;
        document.getElementById('why-description_1').innerHTML = translations.home.why.description_1;
        document.getElementById('why-description_2').innerHTML = translations.home.why.description_2;
        document.getElementById('qi_table-table_value_1').innerHTML = translations.success.qi_table.table_value_1;
        document.getElementById('qi_table-table_value_2').innerHTML = translations.success.qi_table.table_value_2;
        document.getElementById('qi_table-table_value_3').innerHTML = translations.success.qi_table.table_value_3;
        document.getElementById('qi_table-table_value_4').innerHTML = translations.success.qi_table.table_value_4;
        document.getElementById('qi_table-table_value_5').innerHTML = translations.success.qi_table.table_value_5;
        document.getElementById('qi_table-table_value_6').innerHTML = translations.success.qi_table.table_value_6;
        document.getElementById('qi_table-table_value_7').innerHTML = translations.success.qi_table.table_value_7;
        document.getElementById('why-button').innerHTML = translations.home.why.button;
        document.getElementById('review-title').innerHTML = translations.home.review.title;
        document.getElementById('review_1-iq').innerHTML = translations.home.review.reviews.review_1.iq;
        document.getElementById('review_1.text').innerHTML = translations.home.review.reviews.review_1.text;
        document.getElementById('review_1.country').innerHTML = translations.home.review.reviews.review_1.country;
        document.getElementById('review_2-iq').innerHTML = translations.home.review.reviews.review_2.iq;
        document.getElementById('review_2.text').innerHTML = translations.home.review.reviews.review_2.text;
        document.getElementById('review_2.country').innerHTML = translations.home.review.reviews.review_2.country;
        document.getElementById('review_3-iq').innerHTML = translations.home.review.reviews.review_3.iq;
        document.getElementById('review_3.text').innerHTML = translations.home.review.reviews.review_3.text;
        document.getElementById('review_3.country').innerHTML = translations.home.review.reviews.review_3.country;
        document.getElementById('review_4-iq').innerHTML = translations.home.review.reviews.review_4.iq;
        document.getElementById('review_4.text').innerHTML = translations.home.review.reviews.review_4.text;
        document.getElementById('review_4.country').innerHTML = translations.home.review.reviews.review_4.country;
        document.getElementById('countries.title').innerHTML = translations.home.countries.title;
        document.getElementById('countries.description').innerHTML = translations.home.countries.description;
        document.getElementById('country.it').innerHTML = translations.home.countries.country.it;
        document.getElementById('country.andorra').innerHTML = translations.home.countries.country.andorra;
        document.getElementById('country.china').innerHTML = translations.home.countries.country.china;
        document.getElementById('country.japon').innerHTML = translations.home.countries.country.japon;
        document.getElementById('country.uruguay').innerHTML = translations.home.countries.country.uruguay;
        document.getElementById('country.guatemala').innerHTML = translations.home.countries.country.guatemala;
        document.getElementById('country.ecuador').innerHTML = translations.home.countries.country.ecuador;
        document.getElementById('country.romania').innerHTML = translations.home.countries.country.romania;
        document.getElementById('country.venezuela').innerHTML = translations.home.countries.country.venezuela;
        document.getElementById('country.bolivia').innerHTML = translations.home.countries.country.bolivia;
      })
      .catch(error => console.error('Error loading translation:', error));
  });

  document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myLineChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                '(> 69) IQ',
                '(70-79) IQ',
                '(80-89) IQ',
                '(90-109) IQ',
                '(110-119) IQ',
                '(120-129) IQ',
                '(130-144) IQ',
                '(145-160) IQ'
            ],
            datasets: [{
                label: '%',
                data: [0.1, 2, 14, 34, 34, 14, 2, 0.1],
                fill: true,
                tension: 0.5,
                borderColor: '#476597',
                backgroundColor: 'rgba(71, 101, 151, .3)'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
})