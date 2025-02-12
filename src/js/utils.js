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

}


export {
    addEventOnElements
}