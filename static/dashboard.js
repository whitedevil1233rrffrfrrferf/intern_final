function toggleEmployeesList(employment_status){
    var employeeListUrl = "/get_employees_list/" + employment_status;

    
    window.location.href = employeeListUrl;
    // var lastDiv=document.getElementById("employeeList-" + employment_status)
    // lastDiv.innerHTML='';
    // if (lastDiv.style.display=="none"){
    //     fetch("/get_employees_list/"+employment_status)
    //     .then(response=>response.json())
    //     .then(data=>{
    //         lastDiv.innerHTML=data.employeeList.map(name=>name+'<br>').join("")
    //         lastDiv.style.display="block";
            
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    // }else{
    //     lastDiv.style.display="none";
    // }
}
const employers=document.getElementById("employers")
function handleChange(){
    if (employers.style.display=="none"){
        employers.style.display="block"
    }
    else{
        employers.style.display="none"
    }    
}
const jan_employers=document.getElementById("jan_employers")
function jan_handleChange(){
    if (jan_employers.style.display=="none"){
        jan_employers.style.display="block"
    }
    else{
        jan_employers.style.display="none"
    }
}
const feb_employers=document.getElementById("feb_employers")
function feb_handleChange(){
    if (feb_employers.style.display=="none"){
        feb_employers.style.display="block"
    }
    else{
        feb_employers.style.display="none"
    }
}
const march_employers=document.getElementById("march_employers")
function march_handleChange(){
    if (march_employers.style.display=="none"){
        march_employers.style.display="block"
    }
    else{
        march_employers.style.display="none"
    }
}
const april_employers=document.getElementById("april_employers")
function april_handleChange(){
    if (april_employers.style.display=="none"){
        april_employers.style.display="block"
    }
    else{
        april_employers.style.display="none"
    }
}
const may_employers=document.getElementById("may_employers")
function may_handleChange(){
    if (may_employers.style.display=="none"){
        may_employers.style.display="block"
    }
    else{
        may_employers.style.display="none"
    }
}
const july_employers=document.getElementById("july_employers")
function july_handleChange(){
    if (july_employers.style.display=="none"){
        july_employers.style.display="block"
    }
    else{
        july_employers.style.display="none"
    }
}
const aug_employers=document.getElementById("aug_employers")
function aug_handleChange(){
    if (aug_employers.style.display=="none"){
        aug_employers.style.display="block"
    }
    else{
        aug_employers.style.display="none"
    }
}
const sep_employers=document.getElementById("sep_employers")
function sep_handleChange(){
    if (sep_employers.style.display=="none"){
        sep_employers.style.display="block"
    }
    else{
        sep_employers.style.display="none"
    }
}
const oct_employers=document.getElementById("oct_employers")
function oct_handleChange(){
    if (oct_employers.style.display=="none"){
        oct_employers.style.display="block"
    }
    else{
        oct_employers.style.display="none"
    }
}
const nov_employers=document.getElementById("nov_employers")
function nov_handleChange(){
    if (nov_employers.style.display=="none"){
        nov_employers.style.display="block"
    }
    else{
        nov_employers.style.display="none"
    }
}
const dec_employers=document.getElementById("dec_employers")
function dec_handleChange(){
    if (dec_employers.style.display=="none"){
        dec_employers.style.display="block"
    }
    else{
        dec_employers.style.display="none"
    }
}
const deleted_employers=document.getElementById("del_employers")
function handleDelete(){
    if (deleted_employers.style.display=="none"){
        deleted_employers.style.display="block"
    }
    else{
        deleted_employers.style.display="none"
    }
}
const jan_deleted_employers=document.getElementById("jan_del_employers")
function jan_handleDelete(){
    if (jan_deleted_employers.style.display=="none"){
        jan_deleted_employers.style.display="block"
    }
    else{
        jan_deleted_employers.style.display="none"
    }
}
const feb_deleted_employers=document.getElementById("feb_del_employers")
function feb_handleDelete(){
    if (feb_deleted_employers.style.display=="none"){
        feb_deleted_employers.style.display="block"
    }
    else{
        feb_deleted_employers.style.display="none"
    }
}
const march_deleted_employers=document.getElementById("march_del_employers")
function march_handleDelete(){
    if (march_deleted_employers.style.display=="none"){
        march_deleted_employers.style.display="block"
    }
    else{
        march_deleted_employers.style.display="none"
    }
}
const april_deleted_employers=document.getElementById("april_del_employers")
function april_handleDelete(){
    if (april_deleted_employers.style.display=="none"){
        april_deleted_employers.style.display="block"
    }
    else{
        april_deleted_employers.style.display="none"
    }
}
const may_deleted_employers=document.getElementById("may_del_employers")
function may_handleDelete(){
    if (may_deleted_employers.style.display=="none"){
        may_deleted_employers.style.display="block"
    }
    else{
        may_deleted_employers.style.display="none"
    }
}
const july_deleted_employers=document.getElementById("july_del_employers")
function july_handleDelete(){
    if (july_deleted_employers.style.display=="none"){
        july_deleted_employers.style.display="block"
    }
    else{
        july_deleted_employers.style.display="none"
    }
}
const aug_deleted_employers=document.getElementById("aug_del_employers")
function aug_handleDelete(){
    if (aug_deleted_employers.style.display=="none"){
        aug_deleted_employers.style.display="block"
    }
    else{
        aug_deleted_employers.style.display="none"
    }
}
const sep_deleted_employers=document.getElementById("sep_del_employers")
function sep_handleDelete(){
    if (sep_deleted_employers.style.display=="none"){
        sep_deleted_employers.style.display="block"
    }
    else{
        sep_deleted_employers.style.display="none"
    }
}
const oct_deleted_employers=document.getElementById("oct_del_employers")
function oct_handleDelete(){
    if (oct_deleted_employers.style.display=="none"){
        oct_deleted_employers.style.display="block"
    }
    else{
        oct_deleted_employers.style.display="none"
    }
}
const nov_deleted_employers=document.getElementById("nov_del_employers")
function nov_handleDelete(){
    if (nov_deleted_employers.style.display=="none"){
        nov_deleted_employers.style.display="block"
    }
    else{
        nov_deleted_employers.style.display="none"
    }
}
const dec_deleted_employers=document.getElementById("dec_del_employers")
function dec_handleDelete(){
    if (dec_deleted_employers.style.display=="none"){
        dec_deleted_employers.style.display="block"
    }
    else{
        dec_deleted_employers.style.display="none"
    }
}
const selectedMonthElement=document.getElementById("month_filter")
const allMonths=document.querySelectorAll(".month")
function filterByMonth(){
    allMonths.forEach(function(month){
        month.style.display="none";
    })
    const selected_month=document.querySelector("." + selectedMonthElement.value)
    if (selectedMonthElement){
        selected_month.style.display="block";
    }
}

// document.getElementById('readMoreBtn').addEventListener('click', function() {
//     var col3 = document.getElementById('col3');
//     var col4 = document.getElementById('col4');
//     var button = this;
    
//     if (col3.classList.contains('d-none') && col4.classList.contains('d-none')) {
//       col3.classList.remove('d-none');
//       col4.classList.remove('d-none');
//       button.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Read Less';
//     } else {
//       col3.classList.add('d-none');
//       col4.classList.add('d-none');
//       button.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Read More';
//     }
//   });

function populateSelectOptions(selectId, optionsArray, currentValue) {
    const selectElement = document.getElementById(selectId);
    if (!selectElement) {
        console.warn(`No select element with id '${selectId}' found`);
        return;
    }

    if (!Array.isArray(optionsArray) || optionsArray.length === 0) {
        console.warn(`No options to populate for '${selectId}'`);
        return;
    }

    optionsArray.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;

        // ✅ Set the selected option
        if (option === currentValue) {
            optionElement.selected = true;
        }

        selectElement.appendChild(optionElement);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
    console.log("Config object:", config);

    if (config && config.home && Array.isArray(config.home.projects)) {
        populateSelectOptions("project", config.home.projects, project);
    }
    if (Array.isArray(config.home.designations)) {
        populateSelectOptions("designation", config.home.designations, designation);
    }
    if (Array.isArray(config.home.locations)) {
        populateSelectOptions("location", config.home.locations, locations);
    }
});
