/**
 * @copyright codewithsadee 2023
 */

'use strict';

import { NavItem } from "./components/NavItem";
import { activeNotebook } from "./utils";
import { Card } from "./components/Card";

const /** {HTMLElement} */ $sidebarList = document.querySelector('[data-sidebar-list]');
const /** {HTMLElement} */ $notePanelTitle = document.querySelector('[data-note-panel-title]');
const /** {HTMLElement} */ $notePanel = document.querySelector('[data-note-panel]');
const /** {Array<HTMLElement>} */ $noteCreateBtns = document.querySelectorAll('[data-note-create-btn]');
const /** {string} */ emptyNotesTemplate = html`
    <div class="empty-notes">
        <span class="material-symbols-rounded" aria-hidden="true">note_stack</span>
        <div class="text-headline-small">No Notes</div>
    </div>
`;

/**
 * 
 * @param {boolean} isThereAnyNotebook 
 */
const disableNoteCreateBtns = function (isThereAnyNotebook) {
    $noteCreateBtns.forEach($item => {
        $item[isThereAnyNotebook ? 'removeAttribute' : 'setAttribute']
        ('disabled', '');
    });
}

/**
 * @namespace
 * @property {Object} notebook
 * @property {Object} note
 *
 */



export const client = {

    /**
     * @parma {Object} notebookData
     */
    notebook: {
        create(notebookData) {
            const /** {HTMLElement} */  $navItem = NavItem(notebookData.id, notebookData.name);
            $sidebarList.appendChild($navItem);
            activeNotebook.call($navItem);
            $notePanelTitle.textContent = notebookData.name;
            $notePanel.innerHTML = emptyNotesTemplate;
            disableNoteCreateBtns(true);
        },

        /**
         * 
         * @param {Array<Object} notebookList 
         */
        read(notebookList) {
            disableNoteCreateBtns(notebookList.length);
            notebookList.forEach((notebookData, index) => {
                const /** {HTMLElement} */ $navItem = NavItem(notebookData.id, notebookData.name);
                if (index === 0) {
                    activeNotebook.call($navItem);
                    $notePanelTitle.textContent = notebookData.name;
                }

                $sidebarList.appendChild($navItem);
            });
        },


        /**
         * 
         * @param {string} notebookID 
         * @param {Object} notebookData 
         */

        update: (notebookID, notebookData) {    
            
            const /** {HTMLElement} */ $oldNotebook = document.querySelector(`[data-notebook = "${notebookID}"`);
            const /** {HTMLElement} */ $newNotebook = NavItem(notebookData.id,notebookData.name);
            $notePanelTitle.textContent = notebookData.name;
            $sidebarList.replaceChild($newNotebook, $oldNotebook);
            activeNotebook.call($newNotebook);
        },


        /**
         * 
         * @param {string} notebookID 
         */
        delete(notebookID) {
            const /** {HTMLElement} */ $deletedNotebook = document.querySelector('[data-notebook="${notebookID}"]');
            const /** {HTMLElement | null} */ $ActiveNavItem = $deletedNotebook.nextElementSibling ?? $deletedNotebook.previousElementSibling;

            if ($ActiveNavItem) {
                $ActiveNavItem.click();
            } else {
                $notePanelTitle.innerHTML = '';
                $notePanel.innerHTML = '';
                disableNoteCreateBtns(false);
            }

            $deletedNotebook.remove();
        }

    },
     note: {

        /**
         * 
         * @param {Obj} noteData 
         */
        create(noteData) {

            if($notePanel.querySelector('[data-note]')) $notePanel.innerHTML = '';

            const /** {HTMLElement} */ $card = Card(noteData);
            $notePanel.prepend($card);
        },

        /**
         * @param {Array<Object>} noteList
         */
        read(noteList) {

            if (noteList.length) {
                $notePanel.innerHTML = '';

            noteList.forEach(noteData => {
                const /** {HTMLElement} */ $card = Card(noteData);
                $notePanel.appendChild($card);
            });
        } else {
            $notePanel.innerHTML = emptyNotesTemplate;
        }
        },

        /**
         * 
         * @param {string} noteId 
         * @param {Object} noteData 
         */
        update(noteId, noteData) {
            const /** {HTMLElement} */ $oldCard = document.querySelector('[data-note="${noteId}"]');
            const /** {HTMLElement} */ $newCard = Card(noteData);
            $notePanel.replaceChild($newCard, $oldCard);
        },


        delete(noteId, isNoteExists) {
            document.querySelector(`[data-note="${noteId}"]`).remove();
            if (!isNoteExists) $notePanel.innerHTML = emptyNotesTemplate;
        }
     }
}