/**
 * @copyright codewithsadee 2023
 */

'use strict';

import { generateID, findNotebook, findNotebookIndex } from "./utils";

let /** {Object} */  notekeeperDB = {};

const initDb = function () {
    const /** {JSON | undifined} */  db = localStorage.getItem('notekeeperDB');

    if (db) {
        notekeeperDB = JSON.parse(db);
    } else {
        notekeeperDB.notebooks = [];
        localStorage.setItem('notekeeperDB', JSON.stringify(notekeeperDB));
    }
}

initDB();


const readDB = function () {
    notekeeperDB = JSON.parse(localStorage.getItem('notekeeperDB'));
}


const writeDB = function () {
    localStorage.setItem('notekeeperDB', JSON.stringify)();
}



/**
 * @namespace
 * @property {Object} get 
 * @property {Object} post
 * @property {Object} update
 * @property {Object} delete
 */

export const db = {

    post: {

        /**
         * @function
         * @param {string} name
         * @returns {Object}
         */

        notebook(name) {
             readDB();

             const /**{Object} */ notebookData = {
                id: generateID(),
                name,
                notes: []
             }

             notekeeperDB.notebooks.push(notebookData);

            
             writeDB();

             return notebookData;
        },

        /**
         * 
         * @param {string} notebookID 
         * @param {Object} Object 
         * @returns {Object}
         */
        note(notebookID, Object) {
            readDB();

            const /**{Object} */  notebook = findNotebook(notekeeperDB, notebookID);

            const /** {Object} */ noteData = {
                id: generateID(),
                notebookID,
                ... object,
                pastedOn: new Date().getTime()

            }

            notebook.notes.unshift(noteData);
            readDB();

            return noteData;

        }
    },



get: {

    /**
     * @function
     * @returns {Array<Object}
     */
    notebook() {
        readDB();

        return notekeeperDB.notebooks;
    }
},


update: {
    notebook(notekeeperID, name) {
        readDB();

        const /** {Object} */ notebook = findNotebook(notekeeperDB, notebookID);
        notebook.name = name;

        writeDB();

        return notebook;
    }
},

delete: {


/**
 * @function
 * @param {string} notebookID 
 */

    notebook(notebookID) {
        readDB();

        const /** {Number} */  notebookIndex = findNotebookIndex(notekeeperDB, notebookID);
        notekeeperDB.notebooks.splice(notebookIndex, 1);

        writeDB();

    }

}

}
