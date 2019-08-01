const likes = '[1, 2, 3]' // you can store this in mysql

const parsedLikes = JSON.parse(likes) // you 

console.log(parsedLikes[2]);

parsedLikes[2] = 4

const stringLikes = JSON.stringify(parsedLikes)

console.log(stringLikes);
