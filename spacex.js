fetch("https://api.spacexdata.com/v3/capsules") 
.then(response => {
    return response.json();
    })
    .then(data => {
        console.log(data);
    })
.catch(error => {
    console.log(error);
})

fetch("https://api.spacexdata.com/v3/dragons")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    });
      .catch(error => {
        console.log(error);
    })
    

fetch("https://api.spacexdata.com/v3/missions")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    });
    .catch(error => {
        console.log(error);
    })
    
