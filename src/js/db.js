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

export const db = {}