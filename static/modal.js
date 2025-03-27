
document.addEventListener("DOMContentLoaded", function() {
    let savePanelBtn = document.getElementById("savePanel");
    let panelModalElement = document.getElementById("panelModal");

    if (!savePanelBtn || !panelModalElement) {
        console.error("Button #savePanel or modal #panelModal not found.");
        return;
    }

    let panelModal = new bootstrap.Modal(panelModalElement);
    panelModalElement.addEventListener("shown.bs.modal", function () {
        document.getElementById("panelName").value = "";
        document.getElementById("panelEmail").value = "";
    });
    savePanelBtn.addEventListener("click", function() {
        let name = document.getElementById("panelName").value.trim();
        let email = document.getElementById("panelEmail").value.trim();

        if (name && email) {
            let panelInput = document.getElementById("selectedPanel");
            if (panelInput) {
                let existingNames = panelInput.value ? panelInput.value.split(", ") : [];
                existingNames.push(name);
                panelInput.value = existingNames.join(", ");
            }
            panelModal.hide();
            nameInput.value = "";
            emailInput.value = "";
            // Use a slight delay to clear fields AFTER modal is closed
           
            // Remove focus to prevent aria-hidden warning
            document.activeElement.blur();

            // Close modal
            
        } else {
            alert("Please enter both Name and Email!");
        }
    });
>>>>>>> 71c6430a (updated)
});