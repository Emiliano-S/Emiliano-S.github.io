const popup = document.getElementById('popup');
const minutesSpan = document.getElementById('popup-minutes');
const nameSpan = document.getElementById('popup-name');
const citySpan = document.getElementById('popup-city');

const data = [
    { name: 'Santiago', minutes: 1, city: 'Chile' },
    { name: 'María', minutes: 3, city: 'Argentina' },
    { name: 'Pedro', minutes: 5, city: 'Perú' },
    // Añade más datos aquí según sea necesario
];

let currentIndex = 0;

function showPopup() {
    const { name, minutes, city } = data[currentIndex];
    minutesSpan.textContent = minutes;
    nameSpan.textContent = name;
    citySpan.textContent = city;

    popup.classList.add('popup-show');

    setTimeout(() => {
        popup.classList.remove('popup-show');
        currentIndex = (currentIndex + 1) % data.length;
        setTimeout(showPopup, 5000); // Espera 0.5s para el próximo popup
    }, 3000);
}

setTimeout(showPopup, 500);
