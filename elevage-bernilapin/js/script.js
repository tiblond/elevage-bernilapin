// This file contains the JavaScript code for managing bilingual functionality.
// It detects the default language and allows users to switch languages without reloading the page.

const languageSwitcher = document.getElementById('language-switcher');
const elementsToTranslate = document.querySelectorAll('[data-translate]');

let currentLanguage = 'en'; // Default language

// Load translations from JSON files
async function loadTranslations(language) {
    const response = await fetch(`locales/${language}.json`);
    return await response.json();
}

// Translate the page content
async function translatePage(language) {
    const translations = await loadTranslations(language);
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

// Switch language on button click
languageSwitcher.addEventListener('change', (event) => {
    currentLanguage = event.target.value;
    translatePage(currentLanguage);
});

// Initial translation on page load
document.addEventListener('DOMContentLoaded', () => {
    translatePage(currentLanguage);
});