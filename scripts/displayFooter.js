//object literal
let petSalon={
    name:"Pet Fashion Boutique",
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
    document.getElementById("footer").innerHTML=`${petSalon.name} our phone number is ${petSalon.phoneNumber} it opens at ${petSalon.workingHours.open} to ${petSalon.workingHours.close}<br> <i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-solid fa-envelope"></i>`;
}

function initFooter(){
    displayFooterInfo();
}
window.onload=initFooter;