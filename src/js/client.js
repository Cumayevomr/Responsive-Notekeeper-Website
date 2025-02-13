/**
 * @copyright codewithsadee 2023
 */

'use strict';

import { NavItem } from "./components/NavItem";
import { activeNotebook } from "./utils";

const /** {HTMLElement} */ $sidebarList = document.querySelector('[data-sidebar-list]');
const /** {HTMLElement} */ $notePanelTitle = document.querySelector('[data-note-panel-title]');
const /** {HTMLElement} */ $notePanel = document.querySelector('[data-note-panel]');

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
        },

        /**
         * 
         * @param {Array<Object} notebookList 
         */
        read(notebookList) {
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
            }

            $deletedNotebook.remove();
        }

    }
}