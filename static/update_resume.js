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
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(data.error || "Something went wrong!");
            });
        }
        return response.json();
    })
    .then(data => {
        // Success: close modal and reload
        alert(data.message);

        // Clear inputs
        document.getElementById("panelName").value = "";
        document.getElementById("panelEmail").value = "";

        // Close the modal
        let modalElement = document.getElementById("panelModal");
        let modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();

        // Refresh the page to show new dropdown option
        window.location.reload();
    })
    .catch(error => {
        // Error from backend (like "already exists")
        alert(error.message);
    });
});
const input = document.getElementById("qa_lead_input");
  const dropdown = document.getElementById("qa_lead_dropdown");

  // Toggle dropdown on input click
  input.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  // Hide dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest('#qa_lead_dropdown') && event.target !== input) {
      dropdown.style.display = "none";
    }
  });

  // Select name from dropdown
  document.querySelectorAll(".qa-option").forEach(option => {
    option.addEventListener("click", () => {
      input.value = option.getAttribute("data-name");
      dropdown.style.display = "none";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("qa_lead_dropdown");

    // Delegate event for dynamically rendered delete buttons
    dropdown.addEventListener("click", function (e) {
      if (e.target.closest(".delete-btn")) {
        const deleteBtn = e.target.closest(".delete-btn");
        const panelName = deleteBtn.getAttribute("data-name");

        if (confirm(`Are you sure you want to delete "${panelName}"?`)) {
          fetch(deletePanelUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-CSRFToken": "{{ csrf_token() }}"  // only if you're using CSRF protection
            },
            body: JSON.stringify({ panel: panelName })
          })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              // Remove the parent div of the delete button
              deleteBtn.closest(".dropdown-item").remove();
            } else {
              alert("Error: " + data.error);
            }
          })
          .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong.");
          });
        }
      }
    });
  });  