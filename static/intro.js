// document.getElementById("savePanel").addEventListener("click", function () {
//     let name = document.getElementById("panelName").value.trim();
//     let email = document.getElementById("panelEmail").value.trim();

//     if (name === "" || email === "") {
//         alert("Please enter both name and email!");
//         return;
//     }

//     // Get the correct Flask route using data attribute
    

//     fetch(addPanelUrl, {  // Now using dynamic URL
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name: name, email: email })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.error) {
//             alert(data.error);
//             return;
//         }

//         // Add new checkbox dynamically if saved successfully
//         let panelDropdown = document.getElementById("panelDropdown");
//         let newLabel = document.createElement("label");
//         newLabel.innerHTML = `
//             <input type="checkbox" name="selectedPanel" value="${name}" data-email="${email}"> ${name}
//         `;
//         panelDropdown.appendChild(newLabel);

//         // Clear inputs after adding
//         document.getElementById("panelName").value = "";
//         document.getElementById("panelEmail").value = "";

//         // Close the modal
//         let modalElement = document.getElementById("panelModal");
//         let modalInstance = bootstrap.Modal.getInstance(modalElement);
//         modalInstance.hide();

//         alert("Panel member added successfully!");
//     })
//     .catch(error => console.error("Error:", error));
// });
document.getElementById("savePanel").addEventListener("click", function () {
    let name = document.getElementById("panelName").value.trim();
    let email = document.getElementById("panelEmail").value.trim();

    if (name === "" || email === "") {
        alert("Please enter both name and email!");
        return;
    }

    fetch(addPanelUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
            return;
        }

        // Add new checkbox dynamically with email
        let panelDropdown = document.getElementById("panelDropdown");
        let newLabel = document.createElement("label");
        newLabel.innerHTML = `
            <input type="checkbox" name="selectedPanel" value="${name}" data-email="${email}" checked> 
            ${name} (${email})
        `;
        panelDropdown.appendChild(newLabel);

        // Clear inputs after adding
        document.getElementById("panelName").value = "";
        document.getElementById("panelEmail").value = "";

        // Close the modal
        let modalElement = document.getElementById("panelModal");
        let modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();

        alert("Panel member added successfully!");
    })
    .catch(error => console.error("Error:", error));
});
