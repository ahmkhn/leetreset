const userIdFrequency = {};
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.endsWith("_java")) {
        const keySplit = key.split('_');
        
        const uniqueId = keySplit[1]; // Assuming the format is always leetcodeNumber_userID_java
        if (userIdFrequency[uniqueId]) {
            userIdFrequency[uniqueId]++;
        } else {
            userIdFrequency[uniqueId] = 1;
        }
    }
}

// Find the user ID with the highest frequency
let mostFrequentUserId = null;
let maxFrequency = 0;

for (const userId in userIdFrequency) {
    if (userIdFrequency[userId] > maxFrequency) {
        maxFrequency = userIdFrequency[userId];
        mostFrequentUserId = userId;
    }
}
//console.log("Most Frequent User ID:", mostFrequentUserId);

async function getProblemNumber() {
    // Make GraphQL query to LeetCode API
    const titleSlug = window.location.pathname.split('/')[2];
    const query = `
        query questionTitle($titleSlug: String!) {
            question(titleSlug: $titleSlug) {
                questionId
            }
        }
    `;
    
    const response = await fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: { titleSlug: titleSlug }
        })
    });
    const data = await response.json();
    return data.data.question.questionId;
}
async function run() {
    const x = await getProblemNumber();
    console.log(x);
}
run();