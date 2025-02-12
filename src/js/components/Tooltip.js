/**
 * @copyright codewithsadee 2023
 */

'use strict';

/**
 * Attaches a tooltip behavior to a given DOM element,
 * When the element is hovered over, a tooltip with the specified content is displayed.
 * The tooltip is automatically positioned bellow the element.
 * 
 * @param {HTMLElement} $element -The DOM  element to which the tooltip behavior is added.
 */
export const Tooltip = function($element) {
    const /** {HTMLElement} */ $tooltip = document.createElement
    ('span');
    $tooltip.classList.add('tooltip', 'text-body-small');

    $element.addEventListener('mouseenter', function() {
        $tooltip.textContent = this.dataset.tooltip;
    });
}