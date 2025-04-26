
function handleFilters() {
  // Get the selected role and location values
  const role = document.getElementById('role').value;
  const location = document.getElementById('loc').value;
  const designation = document.getElementById('designation').value;
  const project = document.getElementById('project').value;
  const month = document.getElementById('month').value;
  // Use URLSearchParams to preserve existing query parameters
  const urlParams = new URLSearchParams(window.location.search);

  // Set the role and location in the URL query parameters
  if (role) {
    urlParams.set('role', role);
} else {
    urlParams.delete('role');
}
  if (location) {
    urlParams.set('location', location);
} else {
    urlParams.delete('location');
}
if (designation){
  urlParams.set('designation',designation)
}else {
  urlParams.delete('designation');
}
if (project){
  urlParams.set('project',project)
}else {
  urlParams.delete('project');
}
if (month){
  urlParams.set('month',month)
}
else{
  urlParams.delete('month');
}

  // Update the window location with the new query parameters
  window.location.href = `${baseDmaxUrl}?${urlParams.toString()}`;
}
    

