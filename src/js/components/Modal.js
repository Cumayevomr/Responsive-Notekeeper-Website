/**
 * @copyright codewithsadee 2023
 */

'use strict';

const /** {HTMLElement} */$overlay = document.createElement('div');
$overlay.classList.add('overlay', 'modal-overlay');


/**
 * 
 * @param {string} title 
* @returns {Object} 
 */

const DeleteConfirmModal = function (title) {
    const /** {HTMLElement} */  $modal = document.createElement('div');
    $modal .classList.add('modal');

    $modal.innerHTML = `

        <h3 class="modal-title text-title-medium">Are you sure you want to delete <strong>"${title}</strong>?</h3>

        <div class="modal-footer">
            <button class="btn text" data-action-btn="false">
                <span class="text-label-large">Cancel</span>

                <div class="state-layer"></div>
            </button>

            <button class="btn fill" data-action-btn="true">
                <span class="text-label-large">Delete</span>

                <div class="state-layer"></div>
            </button>
        </div>

    `;



    const open = function () {
        document.body.appendChild($modal);
        document.body.appendChild($overlay);


        const close = function () {
            document.body.removeChild($modal);
            document.body.removeChild($overlay);
        }

        const /** {Array<HTMLElement>} */ $actionBtns = $modal.querySelector('[data-action-btn]');

        /**
         * 
         * @param {Function} callback 
         */

            const onSubmit = function (callback) {

            }
        

    }

    return { open, close, onSubmit }

}

export{DeleteConfirmModal }