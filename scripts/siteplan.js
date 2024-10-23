// document.addEventListener('DOMContentLoaded', () => {
//     const currentYear = new Date().getFullYear();
//     document.getElementById('currentYear').textContent = currentYear;
// });


// document.getElementById('calculateBmi').addEventListener('click', () => {
//     const weight = parseFloat(document.getElementById('weight').value);
//     const height = parseFloat(document.getElementById('height').value);
//     const bmi = calculateBmi(weight, height);
//     document.getElementById('bmiResult').textContent = `Your BMI is ${bmi.toFixed(2)}`;
// });

// function calculateBmi(weight, height) {
//     return weight / (height * height);
// }


import { fetchData, displayItems } from './modules/data.js';
import { calculateBMI, handleBmiSubmission } from './modules/bmi.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await fetchData(); // Fetch 15 items from the API
        displayItems(data); // Display items dynamically
        handleBmiSubmission(); // Set up event listener for BMI form
    } catch (error) {
        console.error('Error loading data:', error);
    }
});

export const fetchData = async () => {
    const apiUrl = 'https://api.example.com/healthy-living'; // Replace with a valid API URL
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.items; // Assuming the API returns an array of items
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const displayItems = (items) => {
    const container = document.getElementById('itemsContainer');
    container.innerHTML = ''; // Clear any existing content

    items.slice(0, 15).forEach((item, index) => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');
        itemCard.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <button class="more-info-btn" data-index="${index}">More Info</button>
        `;

        container.appendChild(itemCard);

        // Set up modal dialog for each item
        setupModal(item, index);
    });

    // Array method example: filtering items by a condition
    const workoutItems = items.filter(item => item.category === 'Workout');
    console.log('Workout items:', workoutItems);
};

const setupModal = (item, index) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = `modal-${index}`;
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h3>${item.name}</h3>
            <p>${item.details}</p>
        </div>
    `;

    document.body.appendChild(modal);

    const openModalBtn = document.querySelector(`.more-info-btn[data-index="${index}"]`);
    const closeModalBtn = modal.querySelector('.close');

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

// Get all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Get the current page's path
const currentPage = window.location.pathname;

// Loop through each link and compare the href to the current page
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
