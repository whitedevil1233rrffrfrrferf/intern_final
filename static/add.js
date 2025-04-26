
function populateSelectOptions(selectId, optionsArray,currentValue){
    var selectElement=document.getElementById(selectId);
    optionsArray.forEach(function(option){
        var optionElement=document.createElement("option")
        optionElement.value=option;
        optionElement.textContent=option;
        console.log(`Current value: ${currentValue}`);
        console.log(`Options array: ${optionsArray}`);
        console.log(`Adding option with value: ${option}`);
        if(option === currentValue){
            
            optionElement.selected = true;
        }
        selectElement.appendChild(optionElement)
    });
}
populateSelectOptions("designation", config.add.designations,designation);
populateSelectOptions("project", config.add.projects,project);
populateSelectOptions("employment_status", config.add.employmentStatus);
populateSelectOptions("location", config.add.locations);
populateSelectOptions("status", config.add.statuses);

