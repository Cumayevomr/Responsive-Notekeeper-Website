/**
 * @copyright codewithsadee 2023
 */

'use strict';

import { Tooltip } from "./Tooltip";

/**
 * @param {string} id
 * @param {string} id
 * @returns {HTMLElement}
 */

export const NavItem = function (id, name) {
    const /** {HTMLElement} */ $navItem =document.createElement('div');
    $navItem.classList.add('nav-item');
    $navItem.setAttribute('data-notebook', id);

    $navItem.innerHTML = `
    
    <span class="text text-label-large" data-notebook-field>${name}</span>

            <button class="icon-btn small" aria-label="Edit Notebook" data-tooltip="Edit Notebook" data-edit-btn>
                <span class="material-symbols-rounded" aria-hidden="true">edit</span>

                <div class="state-layer"></div>
            </button>

            <button class="icon-btn small" aria-label="Delete Notebook" data-tooltip="Delete Notebook" data-Delete-btn>
                <span class="material-symbols-rounded" aria-hidden="true">delete</span>

                <div class="state-layer"></div>
            </button>

            <div class="state-layer"></div>

    `;

    const /** {Array<HTMLElement>} */ $tooltipElems = $navItem.querySelectorAll('[data-tooltip]');
    $tooltipElems.forEach($elem => Tooltip($elem));

    return $navItem;
}