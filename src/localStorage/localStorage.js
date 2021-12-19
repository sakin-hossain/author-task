const addToDb = item => {
    const db = getDb();
    if (item in db) {
        return;
    }
    else {
        db[item] = 1;
    }
    saveToDb(db);
}

const removeFromDb = item => {
    const db = getDb();
    delete db[item];
    saveToDb(db);
}

const saveToDb = db => {
    const dbJSON = JSON.stringify(db);
    localStorage.setItem('Favourites', dbJSON);
}

const getDb = () => {
    let savedDb = localStorage.getItem('Favourites');
    return savedDb ? JSON.parse(savedDb) : {};
}

export { addToDb, removeFromDb, getDb };

