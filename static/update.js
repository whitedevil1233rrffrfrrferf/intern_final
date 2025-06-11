function populateSelectOptions(selectId, optionsArray,currentValue){
    var selectElement=document.getElementById(selectId);
    optionsArray.forEach(function(option){
        var optionElement=document.createElement("option")
        optionElement.value=option;
        optionElement.textContent=option;
        if(option === currentValue){
            
            optionElement.selected = true;
        }
        selectElement.appendChild(optionElement)
    });
}

populateSelectOptions("designation", config.update.designations,employeeDesignation);
populateSelectOptions("project", config.update.projects,employeeProject);
populateSelectOptions("employment_status", config.update.employmentStatus,employeeStatus);
populateSelectOptions("location", config.update.locations,employeeLocation);
populateSelectOptions("status", config.update.statuses,employeestatus);

