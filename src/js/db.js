/**
 * @copyright codewithsadee 2023
 */

'use strict';

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

             writeDB();
        }
    }

}