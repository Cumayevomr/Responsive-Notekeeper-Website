/**
 * @copyright codewithsadee 2023
 */

'use strict';

import { NavItem } from "./components/NavItem";

const /** {HTMLElement} */ $sidebarList = document.querySelector('data-sidebar-lsit');

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
        }
    }
}