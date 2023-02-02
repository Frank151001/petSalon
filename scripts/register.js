//object literal
let petSalon={
    name:"The fashion pet",
    phoneNumber:"555-555-555",
    workingHours:{
        open:"9:00 am",
        close:"9:00 pm"
    },
    address:{
        street:"Palm ave",
        zip:"22345",
        city:"San Diego"
    },
    pet:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming"
        },
        {
            name:"Molly",
            age:20,
            gender:"Female",
            breed:"Chihuahua",
            service:"Nails"
        },
        {
            name:"Cookie",
            age:10,
            gender:"Male",
            breed:"Terrier",
            service:"Vaccines"
        }
    ]
}

function displayFooterInfo(){
    document.getElementById("footer").innerHTML=`${petSalon.name} our phone number is ${petSalon.phoneNumber} it opens at ${petSalon.workingHours.open}`;
}

console.log(petSalon.pet.length);//displaying the number of pets
console.log(petSalon.pet[1].name);//displaying the name

displayFooterInfo();
