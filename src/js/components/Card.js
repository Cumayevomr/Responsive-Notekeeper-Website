/**
 * @copyright codewithsadee 2023
 */

'use strict';

import { Tooltip } from "./Tooltip";
import { getRelativeTime } from "../utils";
import { DeleteConfirmModal, NoteModal } from "./Modal";
import { client } from "../client";
import { db } from "../db";

export const Card = function (noteData) {
    const {id, title, text, postedOn, notebookId } = noteData;
    const /** {HTMLElement} */ $card = document.createElement('div');
    $card.classList.add('card');
    $card.setAttribute('data-note', id);
    $card.innerHTML = `
        <h3 class="card-title text-title-medium">${title}</h3>

        <p class="card-text text-body-large">${text}</p>

        <div class="wrapper">
            <span class="card-time text-label-large">${getRelativeTime(postedOn)}</span>

        <button class="icon-btn large" aria-label="Delete note" data-tooltip="Delete note" data-delete-btn>
            <span class="material-symbols-rounded" aria-hidden="true">delete</span>

        <div class="state-layer"></div>
        `;

        Tooltip($card.querySelector('[data-tooltip]'));

        $card.addEventListener('click', function () {
            const /** {Object} */ modal = NoteModal(title, text, getRelativeTime(postedOn));
            modal.open();

            modal.onSubmit(function (noteData) {
                const updatedData = db.update.note(id, noteData);
                client.note.update(id, updatedData);
                modal.close();
            });
        });


        const /** {HTMLElement} */ $deleteBtn = $card.querySelector('[data-delete-btn]');
        $deleteBtn.addEventListener('click', function (event) {
            event.stopImmediatePropagation();

            const /** {Object} */ modal = DeleteConfirmModal(title);
            modal.open();

            modal.onSubmit(function (isConfirm) {
                const /** {Array} */ existedNote = db.delete.note(notebookId, id);
            });
        });

        return $card;
}