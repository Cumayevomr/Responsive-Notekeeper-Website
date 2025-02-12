/**
 * @copyright codewithsadee 2023
 */

'use strict';

/**
  * Module import
  */

import { addEventOnElements } from "./utils.js";

/**
  * Toogle sidebar in small screen
  */

const /**{HTMLElement} */ $sidebar = document.querySelector('[data-sidebar]');
const /**{Array<HTMLElement>} */ $sidebarTooglers = document.querySelector('[data-sidebar-toogler]');
const /**{Array<HTMLElement>} */ $overlay = document.querySelector('[data-sidebar-overlay]');