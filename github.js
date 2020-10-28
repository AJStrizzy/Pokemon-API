fetch("https://api.github.com/users/ajstrizzy");
    .then(response => {
        return response.json();
    })
    .then(githubData => {
        console.log(githubData);
    });

    


