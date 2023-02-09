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
    pet:[]
}
function displayFooterInfo(){
    document.getElementById("footer").innerHTML=`${petSalon.name} our phone number is ${petSalon.phoneNumber} it opens at ${petSalon.workingHours.open}`;
}

function initFooter(){
    displayFooterInfo();
}
window.onload=initFooter;