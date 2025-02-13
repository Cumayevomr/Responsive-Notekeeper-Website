/**
 * @copyright codewithsadee 2023
 */

'use strict';

import { Tooltip } from "./Tooltip";
import { activeNotebook, makeElemEditable } from "../utils";
import { db } from "../db";
import { DeleteConfirmModal } from "./Modal";


const /** {HTMLElement} */ $notePanelTitle = document.querySelector('[data-note-panel-title]');

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

    $navItem.addEventListener('click', function () {
        $notePanelTitle.textContent = name;
        activeNotebook.call(this);
    });

    const /** {HTMLElement} */ $navItemEditBtn = $navItem.querySelector('[data-edit-btn]');
    const /** {HTMLElement} */ $navItemField = $navItem.querySelector('[data-notebook-field]');

    $navItemEditBtn.addEventListener('click', makeElemEditable.bind (null, $navItemField));

    $navItemField.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {

            this.removeAttribute('connecteditable');
            const updateNotebookData = db.update.notebook(id, this.textContent);

            client.notebook.update(id, updateNotebookData);
        }
    });



    const /**
    {HTMLElement} */ $navItemDeleteBtn = $navItem.querySelector('[data-delete-btn]');
    $navItemDeleteBtn.addEventListener('click', function () {

        const /** {Object} */  modal = DeleteConfirmModal(name);

        modal.open();

        modal.onSubmit(function (isConfirm) {
            if (isConfirm) {
                db.delete.notebook(id);
            }

            modal.close();
        });
    });

    return $navItem;
}