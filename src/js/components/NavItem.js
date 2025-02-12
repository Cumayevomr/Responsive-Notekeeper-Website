/**
 * @copyright codewithsadee 2023
 */

'use strict';

/**
 * @param {string} id
 * @param {string} id
 * @returns {HTMLElement}
 */

export const NavItem = function (id, name) {
    const /** {HTMLElement} */ $navItem =document.createElement('div');
    $navItem.classList.add('nav-item');
    $navItem.setAttribute('data-notebook', id);
}