/*console.log(petSalon.pet.length);//displaying the number of pets
console.log(petSalon.pet[1].name);//displaying the name
function displayNamePet(){
    for(let i=0;i<petSalon.pet.length;i++){
        document.getElementById("namePet").innerHTML+=`<br>The name is ${petSalon.pet[i].name}`;
    }
}*/

//Constructor
function Pet(n,a,g,b,s,t,o,p){
    this.name = n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.type=t;
    this.owner=o;
    this.phone=p;
}
//global vars for html inputs
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("txtService");
let inputType=document.getElementById("txtType");
let inputOwner=document.getElementById("ownerName");
let inputPhoneNumber=document.getElementById("phoneNumber");



function validPet(aPet){
    let valid=true;
    if(aPet.name===""){
        valid=false;
        inputName.classList.add("alertError");
    }
    if(aPet.owner===""){
        valid=false;
        inputOwner.classList.add("alertError");
    }
    if(aPet.service===""){
        valid=false;
        inputService.classList.add("alertError");
    }
    if(aPet.phoneNumber===""){
        valid=false;
        inputPhoneNumber.classList.add("alertError");
    }

    return valid;
}

function register(){
    console.log("Register a new pet");
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value,inputOwner.value,inputPhoneNumber.value);
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value,inputOwner.value,inputPhoneNumber.value);
    console.log(newPet);
    if(validPet(newPet)===true){
        petSalon.pet.push(newPet);
        updateInfo();
        //displayPetCards();
        displayPetTable();
        clearForm();
        
    }
}
function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputType.value="";
    inputOwner.value="";
    inputPhoneNumber.value="";
}
function updateInfo(){
    document.getElementById("numberOfPets").innerHTML=petSalon.pet.length;
}
function search(){
    let text = document.getElementById("txtSearch").value;
    console.log("search text is: "+text);
    for(let i=0;i<petSalon.pet.length;i++){
        const pet=petSalon.pet[i];
        if(pet.name.toLowerCase().includes(text.toLowerCase())){
            results.push(pet);
        }
    }
    console.log(results);
}

function deletePet(name){
    let proceed = confirm("Are you sure you want to remove" + name + "from the salon?");
    if(proceed===true){
        for(let i=0;i<petSalon.pet.length;i++){
            const pet = petSalon.pet[i];
            if(pet.name===name){
                petSalon.pet.splice(i,1);
                displayPetTable();
            }
        }
    }
}


function init(){
    displayFooterInfo();
    let scooby= new Pet("Scooby",60,"Male","Dane","Grooming","Bird","Karen",555 );
    let cookie = new Pet("Cookie",30,"Female","Chihuahua","Hair","Cat","Karen",555-555-555);
    let scrappy = new Pet("Scrappy",80,"Male","Golden Retrivier","Nails","Dog","Karen",555-555-555);
    petSalon.pet.push(scooby,cookie,scrappy);
    updateInfo();
    displayPetTable();
    //displayPetCards();
    //displayNamePet();
}
window.onload=init;
