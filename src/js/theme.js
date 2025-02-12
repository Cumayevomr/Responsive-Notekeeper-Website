/**
 * @copyright codewithsadee 2023
 */

'use strict';

const toggleTheme = function () {
    const /**{string} */ currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const /**{string} */ newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

/**
 * Initialize the theme
 */

const /** {string | null} */ storedTheme = localStorage.getItem('theme');
const /**{Boolean} */ systemThemeIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const /**{string} */  InitiaaTheme = storedTheme ?? (systemThemeIsDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', initialTheme);

/**
 * Attach toogleTheme to theme button click event
 */

window.addEventListener('DOMContentLoaded', function () {
    const /**{HTMLElement} */ $themeBtn = document.querySelector('[Data-theme-btn');
    if ($themeBtn) $themeBtn.addEventListener('click', toggleTheme);
});
