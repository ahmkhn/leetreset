
// loop through leetcode's local storage hashmaps
// find key_value pairs for current leetcode problem
// resets the 'code' value for the current problem.
for(let i=0;i<localStorage.length;i++){
    const key = localStorage.key(i);

    if(key.endsWith("_java")){
        console.log("Found key:", key);
    }
}