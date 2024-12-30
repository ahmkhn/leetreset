function deleteAllStorageExceptLanguagePreset(){
    const keyToPreserve = "_lang"; // language preset on LC;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key.includes(keyToPreserve)) {
            localStorage.removeItem(key);
            i--;
        }
    }

}
deleteAllStorageExceptLanguagePreset();