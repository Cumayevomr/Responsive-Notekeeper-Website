/**
 * @copyright codewithsadee 2023
 */

'use strict';

/**
  * Module import
  */

import { addEventOnElements, getGreetingMsg, activeNotebook, makeElemEditable } from "./utils.js";
import { Tooltip } from "./components/Tooltip.js";
import { db } from "./db.js";
import { client } from "./client.js";
import { NoteModal } from "./components/Modal.js";

/**
  * Toggle sidebar in small screen
  */

const /**{HTMLElement} */ $sidebar = document.querySelector('[data-sidebar]');
const /**{Array<HTMLElement>} */ $sidebarTogglers = document.querySelectorAll('[data-sidebar-toggler]');
const /**{HTMLElement} */ $overlay = document.querySelector('[data-sidebar-overlay]');


addEventOnElements($sidebarTogglers, 'click', function () {
    $sidebar.classList.toggle('active'); 
    $overlay.classList.toggle('active');
});


/**
 * Intialize tooltip behaveor for all DOM elements with 'data-tooltip' attribute.
 */

const /** {Array<HTMLElement>} */ $tooltipElems = document.querySelectorAll('[data-tooltip]');
$tooltipElems.forEach($elem => Tooltip($elem));



/**
 * Show greeting message  on homepage
 */

const /** {HTMLElement} */ $greetElem = document.querySelector('[data-greeting]');
const /** {number} */ currentHour = new Date().getHours();
$greetElem.textContent = getGreetingMsg(currentHour);

/**
 * Show current date on homepage
 */

const /** {HTMLElement} */ $currentDateElem = document.querySelector('[data-current-date]');
$currentDateElem.textContent = new Date().toDateString().replace(' ', ',')


/**
 * Notebook create field
 */
const /** {HTMLElement} */ $sidebarList = document.querySelector('[data-sidebar-list]');
const /** {HTMLElement} */ $addNotebookBtn = document.querySelector('[data-add-notebook]');



const showNoteookField = function () {
    const /** {HTMLElement} */ $navItem = document.careteElement('div');
    $navItem.classList.add('nav-item');

    $navItem.inneHTML = `
    <span class="text text-label-large" data-notebook-field></span>

    <div class="state-layer"></div>
    `;

    $sidebarList.appendChild($navItem);

    const /** {HTMLElement} */ $navItemField = $navItem.querySelector('[data-notebook-field]');

    // Active new created notebook and deactive the last one.
    activeNotebook.call($navItem);

    makeElemEditable($navItemField);

    $navItemField.addEventListener('keydown', createNotebook);
}

$addNotebookBtn.addEventListener('click', showNoteookField);

/**
 * 
 * @param {KeyboardEvent} event 
 */

const createNotebook = function (event) {
    if (event.key === 'Enter') {

        const /** {Object} */ notebookData = db.post.notebook(this.textContent || 'Untiitled'); // this: $navItemField
        this.parentElement.remove();
        client.notebook.create(notebookData);
    }
}


const renderExistedNotebook = function () {
    const /** {Array} */ notebookList = db.get.notebook();
    client.notebook.read(notebookList);
}


const /** {Array<HTMLElement>} */ $noteCreateBtns = document.querySelectorAll('[data-note-create-btn]');

addEventOnElements($noteCreateBtns, 'click', function () {
    const /** {Onject} */  modal = NoteModal();
    modal.open();

    modal.onSubmit(noteObj => {
        const /** {string} */ activeNotebookId = document.querySelector('[data-notebook].active').dataset.notebook;

        const /** {Object} */ noteData = db.post.notebook(activeNotebookId, noteObj);
        client.note.create(noteData);
        modal.close();
    });
});


const renderExistedNote = function () {
    const /** {string | undefined} */ activeNotebookId = document.querySelector('[data-notebook].active')?.dataset.notebook;
    if (activeNotebookId) {
        const /** {Array<Object} */ noteList = db.get.note(activeNotebook);

        client.note.read(noteList);

    }
}