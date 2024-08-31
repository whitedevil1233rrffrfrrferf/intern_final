function getInterviewStatus(event,resumeId){
    event.preventDefault();
    var curDisplayStyle=document.getElementById(`toggle${resumeId}`).style.display;
    document.getElementById(`toggle${resumeId}`).style.display=curDisplayStyle==="none"?"":"none"
    fetch(`/get_interview_status/${resumeId}`)
    .then(response=>response.json())
    .then(data=>{
        document.getElementById(`introStatus${resumeId}`).innerText= `Intro Call Status: ${data.intro_status}`;
        document.getElementById(`interview1Status${resumeId}`).innerText = `Interview1 Status: ${data.interview1_status}`;
        document.getElementById(`interview2Status${resumeId}`).innerText = `Interview2 Status: ${data.interview2_status}`;
        document.getElementById(`hrStatus${resumeId}`).innerText = `Hr Status: ${data.hr_status}`;
    })
}



function filterTableByIntroStatus(){
    
    const selectedStatus = introFilter.value.toLowerCase();
    const tableRows=document.querySelectorAll("tbody tr")
    tableRows.forEach(function(row){
       const resumeId=row.querySelector("#intro_status").dataset.resumeId;
       fetch(`/get_interview_status/${resumeId}`)
       .then(response=>response.json())
       .then(data=>{
        const introStatus =data.intro_status.toLowerCase();
        if (selectedStatus===""|| introStatus===selectedStatus.toLowerCase()){
            row.style.display="";
        }
        else{
            row.style.display="none"
        }
       })
    })
    
}

function filterTableByInterview1Status(){
    const interview1Filter = document.getElementById("interview1Filter");
    const selectedStatus = interview1Filter.value.toLowerCase();
    const tableRows = document.querySelectorAll("tbody tr");

    tableRows.forEach(function(row){
       const resumeId = row.querySelector("#intro_status").dataset.resumeId;
       fetch(`/get_interview_status/${resumeId}`)
       .then(response => response.json())
       .then(data => {
            const interview1Status = data.interview1_status.toLowerCase();

            if (selectedStatus === "" || interview1Status === selectedStatus.toLowerCase()) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
       })
       .catch(error => {
            console.error("Error fetching interview status:", error);
       });
    });
}

function filterTableByInterview2Status(){
    const interview2Filter = document.getElementById("interview2Filter");
    const selectedStatus = interview2Filter.value.toLowerCase();
    const tableRows = document.querySelectorAll("tbody tr");

    tableRows.forEach(function(row){
       const resumeId = row.querySelector("#intro_status").dataset.resumeId;
       fetch(`/get_interview_status/${resumeId}`)
       .then(response => response.json())
       .then(data => {
            const interview2Status = data.interview2_status.toLowerCase();

            if (selectedStatus === "" || interview2Status === selectedStatus.toLowerCase()) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
       })
       .catch(error => {
            console.error("Error fetching interview status:", error);
       });
    });
}
function filterTableByAllRoundsStatus(){
    const allRoundsFilter = document.getElementById("allRoundsFilter");
    const selectedStatus = allRoundsFilter.value.toLowerCase();
    const tableRows = document.querySelectorAll("tbody tr");

    tableRows.forEach(function(row){
       const resumeId = row.querySelector("#intro_status").dataset.resumeId;
       fetch(`/get_interview_status/${resumeId}`)
       .then(response => response.json())
       .then(data => {
            const allRoundsStatus = data.all_rounds_status.toLowerCase();
            
            // Check if all rounds are cleared and each round is "Move to Interview 1"
            if (selectedStatus === "" || allRoundsStatus === "cleared") {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
       })
       .catch(error => {
            console.error("Error fetching interview status:", error);
       });
    });
}
// function hideSideMenu(){
//     const div=document.querySelector(".main_div")
//     div.style.display="none"
// }


function showInput(resumeId){
    document.getElementById('btn_name'+resumeId).style.display="none";
    document.getElementById('name'+resumeId).style.display="block";
    document.getElementById('submitBtn' + resumeId).style.display = 'block';
    var currentName = document.getElementById('div_name' + resumeId).innerHTML;
    document.getElementById('nameInput' + resumeId).value = currentName;
    document.getElementById('div_name' + resumeId).style.display = "none";
}
function submitName(resumeId) {
    var nameInput = document.getElementById('nameInput' + resumeId);
    var enteredName = nameInput.value.trim();  // Trim to remove extra spaces
    
    // Check if the input is empty
    if (enteredName === "") {
          // Show an alert if empty
        nameInput.focus();  // Focus back on the input
        return;  // Stop the function from submitting
    }
    document.getElementById('btn_name' + resumeId).style.display = "none";
    document.getElementById('submitBtn' + resumeId).style.display = 'none';
    document.getElementById('nameInput' + resumeId).style.display = "none";
    var enteredName = document.getElementById('nameInput' + resumeId).value;
    document.getElementById('div_name' + resumeId).innerHTML = enteredName;
    document.getElementById('div_name' + resumeId).style.display = "block";
    document.getElementById('name' + resumeId).style.display = "none";
    localStorage.setItem('enteredName' + resumeId, enteredName);
}

function showActualCTCInput(resumeId) {
    document.getElementById('btn_actualCTC' + resumeId).style.display = 'none';
    document.getElementById('actualCTC' + resumeId).style.display = 'block';
    document.getElementById('submitBtnActualCTC' + resumeId).style.display = 'block';
}


function submitActualCTC(resumeId) {
    var actualCTCInput = document.getElementById('actualCTCInput' + resumeId);
    var enteredActualCTC = actualCTCInput.value.trim(); // Trim the value to remove extra spaces

    // Check if the input is empty
    if (enteredActualCTC === "") {
        
        actualCTCInput.focus(); // Focus back on the input field
        return; // Stop the function from proceeding
    }
    document.getElementById('btn_actualCTC' + resumeId).style.display = 'none';
    document.getElementById('submitBtnActualCTC' + resumeId).style.display = 'none';
    document.getElementById('actualCTCInput' + resumeId).style.display = 'none';
    var enteredActualCTC = document.getElementById('actualCTCInput' + resumeId).value;
    document.getElementById('div_actualCTC' + resumeId).style.display = 'block';
    document.getElementById('div_actualCTC' + resumeId).innerHTML = enteredActualCTC;
    document.getElementById('actualCTC' + resumeId).style.display = 'none';
    localStorage.setItem('enteredActualCTC' + resumeId, enteredActualCTC);
}

function showExpectedCTCInput(resumeId) {
    document.getElementById('btn_expectedCTC' + resumeId).style.display = 'none';
    document.getElementById('expectedCTC' + resumeId).style.display = 'block';
    document.getElementById('submitBtnExpectedCTC' + resumeId).style.display = 'block';
}

function submitExpectedCTC(resumeId) {
    var expectedCTCInput = document.getElementById('expectedCTCInput' + resumeId);
    var enteredExpectedCTC = expectedCTCInput.value.trim(); // Trim to remove any extra spaces

    // Check if the input is empty
    if (enteredExpectedCTC === "") {
        
        expectedCTCInput.focus(); // Focus back on the input field
        return; // Stop the function from proceeding
    }
    document.getElementById('btn_expectedCTC' + resumeId).style.display = 'none';
    document.getElementById('submitBtnExpectedCTC' + resumeId).style.display = 'none';
    document.getElementById('expectedCTCInput' + resumeId).style.display = 'none';
    var enteredExpectedCTC = document.getElementById('expectedCTCInput' + resumeId).value;
    document.getElementById('div_expectedCTC' + resumeId).style.display = 'block';
    document.getElementById('div_expectedCTC' + resumeId).innerHTML = enteredExpectedCTC;
    document.getElementById('expectedCTC' + resumeId).style.display = 'none'; // Hide the expectedCTC div after submission
    localStorage.setItem('enteredExpectedCTC' + resumeId, enteredExpectedCTC);
}


function showRoleInput(resumeId) {
    document.getElementById('btn_role' + resumeId).style.display = 'none';
    document.getElementById('role' + resumeId).style.display = 'block';
    document.getElementById('submitBtnRole' + resumeId).style.display = 'block';
}

function submitRole(resumeId) {
    var roleInput = document.getElementById('roleInput' + resumeId);
    var enteredRole = roleInput.value.trim(); // Trim to remove any extra spaces

    // Check if the input is empty
    if (enteredRole === "") {
        
        roleInput.focus(); // Focus back on the input field
        return; // Stop the function from proceeding
    }
    document.getElementById('btn_role' + resumeId).style.display = 'none';
    document.getElementById('submitBtnRole' + resumeId).style.display = 'none';
    document.getElementById('roleInput' + resumeId).style.display = 'none';
    var enteredRole = document.getElementById('roleInput' + resumeId).value;
    document.getElementById('div_role' + resumeId).style.display = 'block';
    document.getElementById('div_role' + resumeId).innerHTML = enteredRole;
    document.getElementById('role' + resumeId).style.display = 'none'; // Hide the role div after submission
    localStorage.setItem('enteredRole' + resumeId, enteredRole);
}

function showLocationInput(resumeId) {
    document.getElementById('btn_location' + resumeId).style.display = 'none';
    document.getElementById('location' + resumeId).style.display = 'block';
    document.getElementById('submitBtnLocation' + resumeId).style.display = 'block';
}

function submitLocation(resumeId) {
    var locationInput = document.getElementById('locationInput' + resumeId);
    var enteredLocation = locationInput.value.trim(); // Trim to remove any extra spaces

    // Check if the input is empty
    if (enteredLocation === "") {
        
        locationInput.focus(); // Focus back on the input field
        return; // Stop the function from proceeding
    }
    document.getElementById('btn_location' + resumeId).style.display = 'none';
    document.getElementById('submitBtnLocation' + resumeId).style.display = 'none';
    document.getElementById('locationInput' + resumeId).style.display = 'none';
    var enteredLocation = document.getElementById('locationInput' + resumeId).value;
    document.getElementById('div_location' + resumeId).style.display = 'block';
    document.getElementById('div_location' + resumeId).innerHTML = enteredLocation;
    document.getElementById('location' + resumeId).style.display = 'none'; // Hide the location div after submission
    localStorage.setItem('enteredLocation' + resumeId, enteredLocation);
}
function showContactInput(resumeId) {
    document.getElementById('btn_contact' + resumeId).style.display = 'none';
    document.getElementById('contact' + resumeId).style.display = 'block';
    document.getElementById('submitBtnContact' + resumeId).style.display = 'block';
    var currentContact = localStorage.getItem('enteredContact' + resumeId) || document.getElementById('div_contact' + resumeId).innerHTML;
    document.getElementById('contactInput' + resumeId).value = currentContact;
    document.getElementById('div_contact' + resumeId).style.display = "none";
}

function submitContact(resumeId) {
    var contactInput = document.getElementById('contactInput' + resumeId);
    var enteredContact = contactInput.value.trim(); // Trim to remove extra spaces

    // Check if the input is numeric and exactly 10 characters long
    var contactPattern = /^[0-9]{10}$/; // Regex for exactly 10 digits
    if (!contactPattern.test(enteredContact)) {
        alert("Please enter a valid 10-digit contact number.");
        contactInput.focus(); // Focus back on the input field
        return; // Stop the function from proceeding
    }
    document.getElementById('btn_contact' + resumeId).style.display = 'none';
    document.getElementById('submitBtnContact' + resumeId).style.display = 'none';
    document.getElementById('contactInput' + resumeId).style.display = 'none';
    var enteredContact = document.getElementById('contactInput' + resumeId).value;
    document.getElementById('div_contact' + resumeId).style.display = 'block';
    document.getElementById('div_contact' + resumeId).innerHTML = enteredContact;
    document.getElementById('contact' + resumeId).style.display = 'none'; // Hide the contact div after submission
    localStorage.setItem('enteredContact' + resumeId, enteredContact);
}
function populateSelectOptions(selectId, optionsArray) {
    var selectElement = document.getElementById(selectId);
    optionsArray.forEach(function(option) {
        var optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        selectElement.appendChild(optionElement);
    });
}

populateSelectOptions("introFilter", config.resumeFilters.introCallStatus);
populateSelectOptions("interview1Filter", config.resumeFilters.interview1Status);
populateSelectOptions("interview2Filter", config.resumeFilters.interview2Status);
populateSelectOptions("allRoundsFilter", config.resumeFilters.allRoundsStatus);

setTimeout(function(){
    var flashMessages =document.querySelectorAll(".add_flash_message")
    flashMessages.forEach(function(flashMessage) {
        flashMessage.style.display = 'none';
      });
    }, 2000);
// localStorage.clear()

function editName(resumeId) {
    var currentName = localStorage.getItem('enteredName' + resumeId);
    if (currentName) {
        document.getElementById('nameInput' + resumeId).value = currentName;
    } else {
        document.getElementById('nameInput' + resumeId).value = document.getElementById('div_name' + resumeId).innerHTML;
    }
    document.getElementById('name' + resumeId).style.display = "block";
    document.getElementById('div_name' + resumeId).style.display = "none";
    document.getElementById('submitBtn' + resumeId).style.display = 'block';
    document.getElementById('nameInput' + resumeId).style.display = 'block'; // Ensure input is visible
}
function editContact(resumeId) {
    var currentContact = localStorage.getItem('enteredContact' + resumeId) || document.getElementById('div_contact' + resumeId).innerHTML;
    document.getElementById('contactInput' + resumeId).value = currentContact;
    document.getElementById('contact' + resumeId).style.display = 'block';
    document.getElementById('div_contact' + resumeId).style.display = 'none';
    document.getElementById('submitBtnContact' + resumeId).style.display = 'block';
    document.getElementById('contactInput' + resumeId).style.display = 'block'; // Ensure input is visible
}
function editActualCTC(resumeId) {
    var currentActualCTC = localStorage.getItem('enteredActualCTC' + resumeId) || document.getElementById('div_actualCTC' + resumeId).innerHTML;
    document.getElementById('actualCTCInput' + resumeId).value = currentActualCTC;
    document.getElementById('actualCTC' + resumeId).style.display = 'block';
    document.getElementById('div_actualCTC' + resumeId).style.display = 'none';
    document.getElementById('submitBtnActualCTC' + resumeId).style.display = 'block';
    document.getElementById('actualCTCInput' + resumeId).style.display = 'block'; // Ensure input is visible
}
function editExpectedCTC(resumeId) {
    var currentExpectedCTC = localStorage.getItem('enteredExpectedCTC' + resumeId) || document.getElementById('div_expectedCTC' + resumeId).innerHTML;
    document.getElementById('expectedCTCInput' + resumeId).value = currentExpectedCTC;
    document.getElementById('expectedCTC' + resumeId).style.display = 'block';
    document.getElementById('div_expectedCTC' + resumeId).style.display = 'none';
    document.getElementById('submitBtnExpectedCTC' + resumeId).style.display = 'block';
    document.getElementById('expectedCTCInput' + resumeId).style.display = 'block'; // Ensure input is visible
}
function editRole(resumeId) {
    var currentRole = localStorage.getItem('enteredRole' + resumeId) || document.getElementById('div_role' + resumeId).innerHTML;
    document.getElementById('roleInput' + resumeId).value = currentRole;
    document.getElementById('role' + resumeId).style.display = 'block';
    document.getElementById('div_role' + resumeId).style.display = 'none';
    document.getElementById('submitBtnRole' + resumeId).style.display = 'block';
    document.getElementById('roleInput' + resumeId).style.display = 'block'; // Ensure input is visible
}
function editLocation(resumeId) {
    var currentLocation = localStorage.getItem('enteredLocation' + resumeId) || document.getElementById('div_location' + resumeId).innerHTML;
    document.getElementById('locationInput' + resumeId).value = currentLocation;
    document.getElementById('location' + resumeId).style.display = 'block';
    document.getElementById('div_location' + resumeId).style.display = 'none';
    document.getElementById('submitBtnLocation' + resumeId).style.display = 'block';
    document.getElementById('locationInput' + resumeId).style.display = 'block'; // Ensure input is visible
}