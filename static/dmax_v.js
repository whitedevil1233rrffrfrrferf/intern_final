function showRoleDiv() {
    
    // Hide all the role sections
    document.querySelectorAll('.role-section').forEach(function(section) {
      section.style.display = 'none';
    });
  
    // Get the selected value from the dropdown
    var selectedRole = document.getElementById('role').value;
  
    // Show the corresponding div based on the selected role
    if (selectedRole) {
      document.getElementById(selectedRole+'_div').style.display = 'block';
    }
}
