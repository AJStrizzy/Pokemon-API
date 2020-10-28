const container = document.querySelector(".container")


fetch("https://api.github.com/users/ajstrizzy")
    .then(response => {
        return response.json();
    })
    .then(githubData => {
        const ariel = {
            name: githubData.name,
            bio: githubData.bio,
            username: githubData.username,

        }
        console.log(ariel);

        const newElement = document.createElement("p");
        newElement.textContent = ariel.name;
        container.appendChild(newElement);
    })

.catch(error => {
    console.log(error);
});
    


