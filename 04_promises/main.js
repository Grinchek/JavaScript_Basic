const task = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Do hard work");
    }, 4000)
    if (Math.random() > 0.5) {
        resolve();
    }
    else {
        reject();
    }


})
task.then(() => {
    console.log("Everything is ok");
}).catch(() => {
    console.log("Something wrong");
});
const gitHubUsersApi = 'https://api.github.com/users';
fetch(gitHubUsersApi).then((response) => {
    console.log(response.status);

    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("Error");
});
