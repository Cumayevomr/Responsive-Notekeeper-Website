/**
 * @copyright codewithsadee 2023
 */

'use strict';

/**
 * Attaches  an event listener to a collaction of DOM elements.
 * 
 * @param {Array<HTMLElement>} $elements - An array of DOM elements to attach the event listeter to.
 * @param {string} eventType - The type of event to listen to listen for (e.g., 'click', 'mouseover').
 * @param {Function} callback - The function to be executed when the event occurs.
 */

const addEventOnElements = function ($elements, eventType, callback)
{
    $elements.forEach($element => $element.addEventListener(eventType, callback));
}

/**
 * Generates a greeting  message  based  on the  current  hour of the day.
 * 
 * @param {number} currentHour - The current hour (0-23) to determine the appropriate  greeting.
 * @returns {string} A greeting message with  a salutation corresponding  to the time of day.
 */

const getGreetingMsg = function (currentHour) {
    const /** {string} */ greeting =
    currentHour < 5 ? 'Night' :
    currentHour < 12 ? 'Morning' :
    currentHour < 15 ? 'Noon' :
    currentHour < 17 ? 'Afternoon' :
    currentHour < 20 ? 'Evening' :
    'Night';
}

    let /** {HTMLElement | undifined} */ $lastActiveNavItem;

    const activeNotebook = function () {
        $lastActiveNavItem?.classList.remove('active');
        this.classList.add('active');  // this: $navitem
        $lastActiveNavItem = this;  // this: $navitem
    }
    /**
     * 
     * @param {HTMLElement} $element - the DOM element to make editable. 
     */
    const makeElemEditable = function($element) {
        $element.setAttribute('contenteditable', true);
        $element.focus();
    }


    /**
     * 
     * @returns {string}
     */

const generateID = function () {
    return new Date().getTime().toString();
}

/**
 * 
 * @param {Object} db 
 * @param {string} notebookID 
 * @returns {Object | undefined }
 */

const findNotebook = function (db, notebookID) {
    return db.notebooks.find(notebook => notebook.id === notebookID);
}


/**
 * 
 * @param {Object} db 
 * @param {string} notebookID 
 * @returns {number}
 */

const findNotebookIndex = function (db, notebookID) {
    return db.notebooks.findIndex(item => item.id === notebookID);
}


/**
 * 
 * @param {number} milliseconds 
 * @returns {string}
 */
const getRelativeTime = function(milliseconds) {
    const /** {Number} */ currentTime = new Date().getTime();

    const /** {Number} */ minute = Meth.floor((currentTime - milliseconds) / 1000 / 60);
    const /** {Number} */ hour = Math.floor(minute / 60);
    const /** {Number} */ day = Math.floor(hour / 24);

    return minute < 1 ? 'Just now' : minute < 60 ? `${minute} min ago`
    : hour < 24 ? `${hour} hour ago` : `${day} day ago`; 
}


export {
    addEventOnElements,
    getGreetingMsg,
    activeNotebook,
    makeElemEditable,
    generateID,
    findNotebook,
    findNotebookIndex,
    getRelativeTime
}