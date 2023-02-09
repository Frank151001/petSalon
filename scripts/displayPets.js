function displayPetCards(){
    const DIV=document.getElementById("namePet");
    let card="";
    for(let i=0;i<petSalon.pet.length;i++){
        let pet =petSalon.pet[i];
        card+=`
        <div class="pet">
            <h5>Name: ${pet.name}</h5>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            <p>Type of the pet: ${pet.type}</p>
            <p>Owner's name: ${pet.owner}</p>
            <p>Phone Number: ${pet.phoneNumber}</p>
        </div>
        `
        console.log(card);
    }
    DIV.innerHTML=card;
}

function displayPetTable(){
    // GET AN ELEMENT FROM THE DOM
    const tbody = document.getElementById("tbPets-body");
    let rows = "";

    for(let i=0;i<petSalon.pet.length;i++){
        let pet     = petSalon.pet[i];
        rows+=`<tr>
        <td>Name: ${pet.name}</td>
        <td>Age: ${pet.age}</td>
        <td>Gender: ${pet.gender}</td>
        <td>Breed: ${pet.breed}</td>
        <td>Service: ${pet.service}</td>
        <td>Type of the pet: ${pet.type}</td>
        <td>Owner's name: ${pet.owner}</td>
        <td>Phone Number: ${pet.phoneNumber}</td>
        </tr>`;
    }
    tbody.innerHTML = rows;
}
//dont forget to replace displayPetCards by displayPetTable in the register.js