window.onload = function() {
    const resumeIds = document.querySelectorAll('[id^="introButton"]');
    
    // Iterate over each resume to fetch the interview status
    resumeIds.forEach(resumeButton => {
        const resumeId = resumeButton.id.replace('introButton', '');
        const statusUrl = resumeButton.getAttribute('data-url');
        
        getInterviewStatusAndToggleButtons(resumeId, statusUrl);
    });
};

function getInterviewStatusAndToggleButtons(resumeId, statusUrl) {
    fetch(statusUrl)
        .then(response => response.json())
        .then(data => {
            toggleInterviewButtons(resumeId, data.intro_status, data.interview1_status, data.interview2_status);
        });
}

function toggleInterviewButtons(resumeId, introStatus, interview1Status, interview2Status) {
    const introButton = document.getElementById(`introButton${resumeId}`);
    const interview1Button = document.getElementById(`interview1Button${resumeId}`);
    const interview2Button = document.getElementById(`interview2Button${resumeId}`);
    const hrButton = document.getElementById(`hrButton${resumeId}`);
    
    // Hide buttons based on the status
    if (introStatus === "Intro call not conducted" || introStatus === "Rejected") {
        interview1Button.style.display = "none";
        interview2Button.style.display = "none";
        hrButton.style.display = "none";
    }

    if (interview1Status === "Interview 1 not conducted" || interview1Status === "Rejected") {
        interview2Button.style.display = "none";
        hrButton.style.display = "none";
    }

    if (interview2Status === "Interview 2 not conducted" || interview2Status === "Rejected") {
        hrButton.style.display = "none";
    }
}
function getInterviewStatus(event,resumeId){
    event.preventDefault();
    const url = event.currentTarget.getAttribute("href");
    var curDisplayStyle=document.getElementById(`toggle${resumeId}`).style.display;
    document.getElementById(`toggle${resumeId}`).style.display=curDisplayStyle==="none"?"":"none"
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        document.getElementById(`introStatus${resumeId}`).innerText= `Intro Call Status: ${data.intro_status}`;
        document.getElementById(`interview1Status${resumeId}`).innerText = `Interview1 Status: ${data.interview1_status}`;
        document.getElementById(`interview2Status${resumeId}`).innerText = `Interview2 Status: ${data.interview2_status}`;
        document.getElementById(`hrStatus${resumeId}`).innerText = `Hr Status: ${data.hr_status}`;
    })
}



function filterTableByIntroStatus() {
    const introFilter = document.getElementById("introFilter");  
    const selectedStatus = introFilter.value.toLowerCase();
    const tableRows = document.querySelectorAll("tbody tr");

    tableRows.forEach(function (row) {
        const introButton = row.querySelector("[id^='introButton']");
        
        if (!introButton) return;  // Skip row if there's no intro button
        
        const resumeId = introButton.getAttribute("id").replace("introButton", "");
        const url = introButton.getAttribute("data-url");
        
        if (!url) return;  // Skip if data-url is missing
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const introStatus = data.intro_status.toLowerCase();
                
                if (selectedStatus === "" || introStatus === selectedStatus) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            })
            .catch(error => console.error("Error fetching intro status:", error));
    });
}
function handleFilters(){
    const role = document.getElementById('role').value;
    const week=document.getElementById('week').value;
    const month=document.getElementById('month').value;
    
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page') || 1;
    if (role) {
        urlParams.set('role', role);
    } else {
        urlParams.delete('role');
    }
    if (week) {
        urlParams.set('week', week);
    } else {
        urlParams.delete('week');
    }
    if (month) {
        urlParams.set('month', month);
    } else {
        urlParams.delete('month');
    }
    window.location.href = `${homeUrl}?page=${page}&${urlParams.toString()}`;
    
}
function filterTableByInterview1Status() {
    const interview1Filter = document.getElementById("interview1Filter");
    const selectedStatus = interview1Filter.value.toLowerCase();
    const tableRows = document.querySelectorAll("tbody tr");

    tableRows.forEach(function(row) {
        const introButton = row.querySelector("[id^='introButton']");
        if (!introButton) return; // Skip if no button is found

        const resumeId = introButton.getAttribute("id").replace("introButton", "");
        const url = introButton.getAttribute("data-url");

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const interview1Status = data.interview1_status.toLowerCase();

                if (selectedStatus === "" || interview1Status === selectedStatus) {
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

function filterTableByInterview2Status() {
    const interview2Filter = document.getElementById("interview2Filter");
    const selectedStatus = interview2Filter.value.toLowerCase();
    const tableRows = document.querySelectorAll("tbody tr");

    tableRows.forEach(function(row) {
        const introButton = row.querySelector("[id^='introButton']");
        if (!introButton) return; // Skip if no button is found

        const resumeId = introButton.getAttribute("id").replace("introButton", "");
        const url = introButton.getAttribute("data-url");

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const interview2Status = data.interview2_status.toLowerCase();

                if (selectedStatus === "" || interview2Status === selectedStatus) {
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
function filterTableByAllRoundsStatus() {
    const allRoundsFilter = document.getElementById("allRoundsFilter");
    const selectedStatus = allRoundsFilter.value.toLowerCase();
    const tableRows = document.querySelectorAll("tbody tr");

    tableRows.forEach(function(row) {
        const introButton = row.querySelector("[id^='introButton']");
        if (!introButton) return; // Skip if no button is found

        const resumeId = introButton.getAttribute("id").replace("introButton", "");
        const url = introButton.getAttribute("data-url");

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const allRoundsStatus = data.all_rounds_status.toLowerCase();

                // Check if "Cleared" or matches the selected status
                if (selectedStatus === "" || allRoundsStatus === selectedStatus) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            })
            .catch(error => {
                console.error("Error fetching all rounds status:", error);
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

                                                /* Name search bar */

function filterTable() {
    const searchQuery = document.getElementById("search_bar").value.toLowerCase();
    const rows = document.querySelectorAll("tbody tr");
    let foundMatch = false;

    rows.forEach(row => {
        const id = row.querySelector('td').textContent; // Assuming the first cell contains the resume id
        const nameCell = document.getElementById(`name-${id}`);
        
        if (nameCell) {
            const nameText = nameCell.textContent.toLowerCase();
            if (nameText.includes(searchQuery)) {
                row.style.display = "";
                foundMatch = true;
            } else {
                row.style.display = "none";
            }
        }
    });

    // Show or hide the 'No results' message
    const noResultsMessage = document.getElementById("noResults");
    if (foundMatch) {
        noResultsMessage.style.display = "none";
    } else {
        noResultsMessage.style.display = "block";
    }
}

document.getElementById("clearSearch").addEventListener("click", function() {
    // Clear the search input
    document.getElementById("search_bar").value = "";

    // Remove the 'search' parameter from the URL
    const url = new URL(window.location.href);
    url.searchParams.delete('search');
    
    // Replace the current URL with one that doesn't have the 'search' parameter
    window.history.pushState({}, '', url.pathname);

    // Reload the page without search query
    window.location.href = url.pathname;  // Reload the page without any search parameter
});

                                                        /* QA Search bar */
function filterTable_qa(){
    const searchQuery = document.getElementById("search_bar_qa").value.toLowerCase();
    const rows = document.querySelectorAll("tbody tr");
    let foundMatch = false;

    rows.forEach(row => {
        const id = row.querySelector('td').textContent; // Assuming the first cell contains the resume id
        const nameCell = document.getElementById(`QA_Lead-${id}`);
        
        if (nameCell) {
            const nameText = nameCell.textContent.toLowerCase();
            if (nameText.includes(searchQuery)) {
                row.style.display = "";
                foundMatch = true;
            } else {
                row.style.display = "none";
            }
        }
    });

    // Show or hide the 'No results' message
    const noResultsMessage = document.getElementById("noResults");
    if (foundMatch) {
        noResultsMessage.style.display = "none";
    } else {
        noResultsMessage.style.display = "block";
    }
}

document.getElementById("clearSearch_qa").addEventListener("click", function() {
    // Clear the search input
    document.getElementById("search_bar_qa").value = "";

    // Remove the 'search' parameter from the URL
    const url = new URL(window.location.href);
    url.searchParams.delete('search');
    
    // Replace the current URL with one that doesn't have the 'search' parameter
    window.history.pushState({}, '', url.pathname);

    // Reload the page without search query
    window.location.href = url.pathname;  // Reload the page without any search parameter
});

document.addEventListener("DOMContentLoaded", () => {
    
    const deleteSelectedButton = document.getElementById("delete-selected");
    const selectAllCheckbox = document.getElementById("select-all");
    const checkboxes = document.querySelectorAll(".resume-checkbox");
    const checkboxColumns = document.querySelectorAll(".checkbox-column");

    // Show checkboxes when "Delete All" is clicked
    selectAllCheckbox.addEventListener("click", () => {
        checkboxColumns.forEach(col => col.style.display = "");
    });
    selectAllCheckbox.addEventListener("change", () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
        toggleDeleteButton();
    });
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            toggleDeleteButton(); // Call toggleDeleteButton when an individual checkbox is clicked
        });
    });
    function toggleDeleteButton() {
        const anySelected = Array.from(checkboxes).some(checkbox => checkbox.checked);
        deleteSelectedButton.disabled = !anySelected;
    }
    deleteSelectedButton.addEventListener("click", () => {
        const selectedIds = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)  // Filter only the checked checkboxes
            .map(checkbox => checkbox.value);      // Get the value (ID) of each selected checkbox
    
            if (selectedIds.length > 0) {
                if (confirm(`Are you sure you want to delete ${selectedIds.length} resumes?`)) {
                    
                    // Send selected IDs to the server
                    
                    fetch(deleteSelectedResumesUrl, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            
                        },
                        body: JSON.stringify({ resume_ids: selectedIds })
                    })
                    .then(response => {
                        if (response.ok) {
                            window.location.reload();
                        } else {
                            alert("Failed to delete resumes.");
                        }
                    });
                }
            }
    });
}
)

document.getElementById('dropdown-btn').addEventListener('click', function() {
    let menu = document.getElementById('dropdown-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Hide menu when clicking outside

document.addEventListener('click', function(event) {
    if (!event.target.closest('#dropdown-container')) {
        document.getElementById('dropdown-menu').style.display = 'none';
    }
});
document.querySelectorAll('#dropdown-menu input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        let selectedValues = Array.from(document.querySelectorAll('#dropdown-menu input[type="checkbox"]:checked'))
                                  .map(cb => cb.value);
        
        
    });
});
document.querySelectorAll('#dropdown-menu input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        let columnClass = this.value; // Get the class name from checkbox value
        let isChecked = this.checked; // Check if it's checked or not

        // Select both <th> and <td> elements that match the class
        document.querySelectorAll('.' + columnClass).forEach(cell => {
            cell.style.display = isChecked ? '' : 'none';
        });
        let visibleColumns = document.querySelectorAll('th:not([style*="display: none"])').length;

        // Adjust table width dynamically
        let table = document.querySelector('.table');
        let minWidth = 50; // Initial table width in percentage
        let maxWidth = 100; // Maximum width

        // Increase width based on visible columns
        let newWidth = minWidth + (visibleColumns * 5); // Example: increase 5% per column
        table.style.width = newWidth > maxWidth ? '100%' : newWidth + '%';
    });
});

// ############################################################ Modal for dashboard #############################################################

function openMoreFilters() {
    document.getElementById("moreFiltersModal").style.display = "block";
}

function closeMoreFilters() {
    document.getElementById("moreFiltersModal").style.display = "none";
}

function toggleFilter(checkbox) {
    const container = document.getElementById(checkbox.value);
    container.style.display = checkbox.checked ? 'flex' : 'none';
}