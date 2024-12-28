function deleteAllStorageExceptLanguagePreset(){
    const keyToPreserve = "1_15001158_lang"; // language preset on LC;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== keyToPreserve) {
            localStorage.removeItem(key);
            i--;
        }
    }

}
deleteAllStorageExceptLanguagePreset();