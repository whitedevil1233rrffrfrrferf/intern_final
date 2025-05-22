const name = document.getElementById("search_bar");
const tableRows = document.querySelectorAll("tbody tr");

document.addEventListener('DOMContentLoaded', () => {
    const searchQuery = new URLSearchParams(window.location.search).get('search');
    const pageSizeForm = document.querySelector('form[method="POST"]');

    if (searchQuery) {
      const hiddenInput = document.createElement('input');
      hiddenInput.type = 'hidden';
      hiddenInput.name = 'search';
      hiddenInput.value = searchQuery;
      pageSizeForm.appendChild(hiddenInput);
    }
  });

document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById("search_bar");
    const tableRows = document.querySelectorAll("tbody tr");

    // Handle search input changes
    nameInput.addEventListener("keyup", function(e) {
        const searchValue = e.target.value.toLowerCase();
        const queryParams = new URLSearchParams(window.location.search);
        queryParams.set('search', searchValue);
        window.history.replaceState({}, '', `${window.location.pathname}?${queryParams}`);

        tableRows.forEach(function(row) {
            const nameCell = row.querySelector("#Name");
            if (nameCell) {
                const nameValue = nameCell.textContent.toLowerCase();
                if (nameValue.includes(searchValue)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            }
        });
    });

    // Make sure search query is preserved on page load and page changes
    const queryParams = new URLSearchParams(window.location.search);
    const searchQuery = queryParams.get('search') || '';
    nameInput.value = searchQuery;
});


// const selectedItem=document.getElementById("project")
// selectedItem.addEventListener("change",function(){
//     var searchContent=selectedItem.value.toLowerCase()
//     tableRows.forEach(function(row){
//         var projectCell=row.querySelector("#Project")
//         var projectValue=projectCell.textContent.toLowerCase();
//         if (projectValue.includes(searchContent)){
//             row.style.display="";
//         }else{
//             row.style.display="none"
//         }
//     })
// })

// const selectedDesignation=document.getElementById("designation")
// selectedDesignation.addEventListener("change",function(){
//     var searchContent=selectedDesignation.value.toLowerCase()
//     tableRows.forEach(function(row){
//         var designationCell=row.querySelector("#Designation")
//         var designationValue=designationCell.textContent.toLowerCase()
//         if (designationValue.includes(searchContent)){
//             row.style.display="";
//         }
//         else{
//             row.style.display="none"
//         }
//     })
// })
// const selectedEmploymentStatus=document.getElementById("employment_status")
// selectedEmploymentStatus.addEventListener("change",function(){
//     var searchContent=selectedEmploymentStatus.value.toLowerCase()
//     tableRows.forEach(function(row){
//         const employmentCell=row.querySelector("#employment_status")
//         const employmentValue=employmentCell.textContent.toLowerCase()
//         if (employmentValue.includes(searchContent)){
//             row.style.display="";
//         }
//         else{
//             row.style.display="none"
//         }
//     })
// })
// const selectedEmployeeStatus = document.getElementById("status");
// selectedEmployeeStatus.addEventListener("change", function() {
//     const employeeStatusSearchContent = selectedEmployeeStatus.value.toLowerCase();

//     tableRows.forEach(function(row) {
//         const employeeStatusCell = row.querySelector("#employee_status");
//         const employeeStatusValue = employeeStatusCell.textContent.toLowerCase();

//         if (!employeeStatusSearchContent || employeeStatusValue.includes(employeeStatusSearchContent)) {
//             row.style.display = "";
//         } else {
//             row.style.display = "none";
//         }
//     });
// });

// const selectedItem = document.getElementById("project");
// selectedItem.addEventListener("change", filterTable);

// const selectedDesignation = document.getElementById("designation");
// selectedDesignation.addEventListener("change", filterTable);

// const selectedEmploymentStatus = document.getElementById("employment_status");
// selectedEmploymentStatus.addEventListener("change", filterTable);

// function filterTable() {
//     const projectSearchContent = document.getElementById("project").value.toLowerCase();
//     const designationSearchContent = document.getElementById("designation").value.toLowerCase();
//     const employmentStatusSearchContent = document.getElementById("employment_status").value.toLowerCase();

//     tableRows.forEach(function (row) {
//         const projectCell = row.querySelector("#Project").textContent.toLowerCase();
//         const designationCell = row.querySelector("#Designation").textContent.toLowerCase();
//         const employmentStatusCell = row.querySelector("#employment_status").textContent.toLowerCase();

        
//         const projectMatch = !projectSearchContent || projectCell.includes(projectSearchContent);
//         const designationMatch = !designationSearchContent || designationCell.includes(designationSearchContent);
//         const employmentStatusMatch = !employmentStatusSearchContent || employmentStatusCell.includes(employmentStatusSearchContent);

        
//         if (
//             (projectMatch && designationMatch && employmentStatusMatch) ||
//             (projectMatch && !designationSearchContent && !employmentStatusSearchContent) ||
//             (!projectSearchContent && designationMatch && !employmentStatusSearchContent) ||
//             (!projectSearchContent && !designationSearchContent && employmentStatusMatch)
//         ) {
//             row.style.display = "";
//         } else {
            
//             row.style.display = "none";
//         }
//     });

// }

//# Combining filters
// const selectedProject = document.getElementById("project");
// const selectedDesignation = document.getElementById("designation");
// const selectedEmploymentStatus = document.getElementById("employment_status");
// const selectedEmployeeStatus = document.getElementById("status");

// selectedProject.addEventListener("change", filterTable);
// selectedDesignation.addEventListener("change", filterTable);
// selectedEmploymentStatus.addEventListener("change", filterTable);
// selectedEmployeeStatus.addEventListener("change", filterTable);

// function filterTable() {
//     const projectSearchContent = selectedProject.value.toLowerCase();
//     const designationSearchContent = selectedDesignation.value.toLowerCase();
//     const employmentStatusSearchContent = selectedEmploymentStatus.value.toLowerCase();
//     const employeeStatusSearchContent = selectedEmployeeStatus.value.toLowerCase();

//     tableRows.forEach(function (row) {
//         const projectCell = row.querySelector("#Project").textContent.toLowerCase();
//         const designationCell = row.querySelector("#Designation").textContent.toLowerCase();
//         const employmentStatusCell = row.querySelector("#employment_status").textContent.toLowerCase();
//         const employeeStatusCell = row.querySelector("#employee_status").textContent.toLowerCase();

//         const projectMatch = !projectSearchContent || projectCell === projectSearchContent;
//         const designationMatch = !designationSearchContent || designationCell === designationSearchContent;
//         const employmentStatusMatch = !employmentStatusSearchContent || employmentStatusCell === employmentStatusSearchContent;
//         const employeeStatusMatch = !employeeStatusSearchContent || employeeStatusCell === employeeStatusSearchContent;

//         if (
//             (projectMatch && designationMatch && employmentStatusMatch && employeeStatusMatch) ||
//             (projectMatch && !designationSearchContent && !employmentStatusSearchContent && !employeeStatusSearchContent) ||
//             (!projectSearchContent && designationMatch && !employmentStatusSearchContent && !employeeStatusSearchContent) ||
//             (!projectSearchContent && !designationSearchContent && employmentStatusMatch && !employeeStatusSearchContent) ||
//             (!projectSearchContent && !designationSearchContent && !employmentStatusSearchContent && employeeStatusMatch)
//         ) {
//             row.style.display = "";
//         } else {
//             row.style.display = "none";
//         }
//     });
// }
var monthMapping = {
    january: '01',
    february: '02',
    march: '03',
    april: '04',
    may: '05',
    june: '06',
    july: '07',
    august: '08',
    september: '09',
    october: '10',
    november: '11',
    december: '12',
  };

function handleFilters() {
    // Get the selected filter values
    const project = document.getElementById('project').value;
    const designation = document.getElementById('designation').value;
    const employmentStatus = document.getElementById('employment_status').value;
    const status=document.getElementById('status').value;
    const location = document.getElementById('location').value;
    const month = document.getElementById('month').value;
    const activeMonth = document.getElementById('month_active_datepicker').value;
    const resignedMonth = document.getElementById('month_resigned_datepicker').value;
    
    
    // Get existing URL parameters to preserve page, sort_by, and sort_order
    const urlParams = new URLSearchParams(window.location.search);
  
    // Preserve existing page, sort_by, and sort_order
    const page = urlParams.get('page') || 1; // Default to 1 if not present
    const sortBy = urlParams.get('sort_by') || 'Name'; // Default to 'Name'
    const sortOrder = urlParams.get('sort_order') || 'asc'; // Default to 'asc'
  
    // Set or delete the filter parameters
    if (project) {
      urlParams.set('project', project);
    } else {
      urlParams.delete('project');
    }
  
    if (designation) {
      urlParams.set('designation', designation);
    } else {
      urlParams.delete('designation');
    }
  
    if (employmentStatus) {
      urlParams.set('employment_status', employmentStatus);
    } else {
      urlParams.delete('employment_status');
    }
    if (status) {
        urlParams.set('status', status);
      } else {
        urlParams.delete('status');
      }
  
    if (location) {
      urlParams.set('location', location);
    } else {
        urlParams.delete('location');
      }
  
    if (month) {
      urlParams.set('month', monthMapping[month]);
    } else {
      urlParams.delete('month');
    }
    if (activeMonth) {
      urlParams.set('activeMonth', activeMonth);
    } else {
      urlParams.delete('activeMonth');
    }
    if (resignedMonth) {
      urlParams.set('resignedMonth', resignedMonth);
    } else {
      urlParams.delete('resignedMonth');
    }
    
  
    // Update the window location, including page, sort_by, and sort_order
    window.location.href = `${homeUrl}?page=${page}&sort_by=${sortBy}&sort_order=${sortOrder}&${urlParams.toString()}`;
  }



tableRows.forEach(function(row) {
    var employmentStatus = row.querySelector("#employee_status").textContent;

     

    if (employmentStatus === "resigned") {
      row.classList.add("resigned-row");
    }
  });


  function filterByMonth(status) {
    
    var selectedMonth
    var selectedStatus=status
    if (selectedStatus==="active"){
        selectedMonth=document.getElementById("month_active_filter").value.toLowerCase()
        
    }
    else if(selectedStatus==="resigned"){
        selectedMonth=document.getElementById("month_resigned_filter").value.toLowerCase()
        
    }
    tableRows.forEach(function(row){
        var joinDate=row.querySelector("#joining_date").textContent;
        var employeeStatus=row.querySelector("#employee_status").textContent.toLowerCase()
        if (joinDate.toLowerCase()=="none"){
            row.style.display="none";
            return
        }
        var joinMonth=joinDate.split("-")[1]

        if (selectedMonth === "") {
            
            row.style.display = "";
            return;
        }
        
        if (joinMonth===monthMapping[selectedMonth]){
            row.style.display = employeeStatus === selectedStatus ? "" : "none";

        }
        else {
        row.style.display = "none";
    }
    })
}

// function filter(status){
//     const selectedDate=new Date(document.getElementById("month_active_datepicker").value);
    
//     tableRows.forEach(function(row){
//         const joinDateStr=row.querySelector("#joining_date").textContent;
//         const employeeStatusCell = row.querySelector("#employee_status");
//         if (joinDateStr.toLowerCase()=="none"){
//             row.style.display="none";
//             return;
//         }
        
//         const joinDate = parseCustomDateString(joinDateStr);
//         console.log(joinDate)
//         if (isNaN(joinDate.getTime())) {
//             // Handle the case where joinDateStr is not a valid date
//             row.style.display = "none";
//             return;
//         }
        
//         if (joinDate < selectedDate){
//             row.style.display = employeeStatusCell.textContent.toLowerCase() === status ? "" : "none";
//         }    
//         else{
//             row.style.display = "none";
//         }
//         row.style.display = joinDate < selectedDate && employeeStatusCell.textContent.toLowerCase() === status ? "" : "none";
//     })
// }

// function month_active_resigned(status){
//     alert("hello")
//     var monthMapping = {
//         january: '01',
//         february: '02',
//         march: '03',
//         april: '04',
//         may: '05',
//         june: '06',
//         july: '07',
//         august: '08',
//         september: '09',
//         october: '10',
//         november: '11',
//         december: '12',
//     };
//     var selectedMonth;
//     var selectedStatus=status;
//     if (selectedStatus==="active"){
//         selectedMonth=document.getElementById("month_active_month_filter").value.toLowerCase()
        
//     }
//     else if (selectedStatus=="resigned") {
//         selectedMonth=document.getElementById("month_resigned_month_filter").value.toLowerCase()
        
//     }
//     tableRows.forEach(function(row){
//         var joinDate=row.querySelector("#joining_date").textContent;
//         var employeeStatus=row.querySelector("#employee_status").textContent.toLowerCase();
       
//         if (joinDate.toLowerCase()==="none"){
//             row.style.display="none";
//             return;
//         }
//         var joinMonth=joinDate.split("-")[1];

//         if (joinMonth <= monthMapping[selectedMonth]){
//             row.style.display=employeeStatus===selectedStatus?"":"none";
//         }
//         else{
//             row.style.display="none"
//         }
//     })
// }
// const selectedLocation=document.getElementById("location")
// selectedLocation.addEventListener("change",function(){
//         const selectedLocationValue=selectedLocation.value.toLowerCase()     
//         tableRows.forEach(function(row){
//             const locationCell=row.querySelector("#employee_location")
//             const locationValue=locationCell.textContent.toLowerCase()
//             if (locationValue.includes(selectedLocationValue)){
//                 row.style.display=""
//             }
//             else{
//                 row.style.display="none"
//             }
//         })    
// })
function parseCustomDateString(dateString) {
    const [day, month, year] = dateString.split('-').map(Number);
    return new Date(year, month-1 , day);
}

// function filters(status) {
//     const selectedDateInput = document.getElementById("month_resigned_datepicker").value;
//     const selectedDate = new Date(selectedDateInput);

//     // Check if the date input is valid
//     if (!selectedDateInput || isNaN(selectedDate.getTime())) {
//         console.error("Invalid or missing date input");
//         return;
//     }

//     tableRows.forEach(function(row) {
//         const joinDateStr = row.querySelector(".joining_date").textContent.trim();
//         const employeeStatusCell = row.querySelector(".employee_status");

//         if (joinDateStr.toLowerCase() === "none") {
//             row.style.display = "none";
//             return;
//         }

//         const joinDate = parseCustomDateString(joinDateStr);

//         if (isNaN(joinDate.getTime())) {
//             row.style.display = "none";
//             return;
//         }

//         // Filter rows based on status and date
//         if (joinDate < selectedDate) {
//             row.style.display = employeeStatusCell.textContent.trim().toLowerCase() === status.toLowerCase() ? "" : "none";
//         } else {
//             row.style.display = "none";
//         }
//     });
// }
var locationMapping = {
    "Kollu": "Kollumangudi",
    "TN Palyam": "TN Palyam"
  };

function populateSelectOptions(selectId, optionsArray,currentValue){
    var selectElement=document.getElementById(selectId);
    var mappedValue = locationMapping[currentValue] || currentValue;
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
populateSelectOptions("project", config.home.projects,project);
populateSelectOptions("designation", config.home.designations,designation);
populateSelectOptions("employment_status", config.home.employment_statuses,employment_status);
populateSelectOptions("status", config.home.statuses,stats);
populateSelectOptions("location", config.home.locations,loc);


// setTimeout(function(){
//     var flashMessages =document.querySelectorAll(".add_flash_message")
//     flashMessages.forEach(function(flashMessage) {
//         flashMessage.style.display = 'none';
//       });
//     }, 2000);

document.getElementById("page").addEventListener('change',function(event){
    
    document.getElementById("pageForm").submit()
    
})    

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.pagination-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior (page refresh)
            var page = this.getAttribute('data-page'); // Get the page number from data-page attribute

            // Send AJAX request to fetch data for the clicked page
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/home?page=' + page, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    // Update page content with the response
                    var responseData = JSON.parse(xhr.responseText);
                    document.body.innerHTML = responseData;
                } else {
                    // Handle error
                    console.error('Request failed. Status: ' + xhr.status);
                }
            };
            xhr.send();
        });
    });
});


