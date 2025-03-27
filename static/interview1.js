<<<<<<< HEAD
const selectBtn=document.querySelector(".select-btn")
   items=document.querySelectorAll(".items");
   let selectedPanel=[];

const btnText = document.querySelector(".btn-text");   

selectBtn.addEventListener("click",()=>{
    selectBtn.classList.toggle("open")
})   

items.forEach(item => {
    item.addEventListener("click",()=>{
        item.classList.toggle("checked");
        let checked=document.querySelectorAll(".checked")
        btnText=document.querySelector(".btn-text");
        selectedPanel=Array.from(checked).map(item=>item.innerText)
        if (checked && checked.length > 0){
            btnText.innerText=`${checked.length}`
        }
        else{
            btnText.innerText="Select panel"
        }
    })
});

// function handleSubmit() {
    
//     handleCheckedItems(); 
//     return false; 
// }

// function handleCheckedItems() {
//     const checkedItems = document.querySelectorAll(".checked");
    
//     // Extract and use the values of checked items as needed
//     const checkedValues = Array.from(checkedItems).map(item => {
//         return item.querySelector(".item-text").innerText.trim();
//     });

//     // Do something with the checked values (e.g., send them to a server, display them, etc.)
//     console.log("Checked Values:", checkedValues);
// }

function updateSelectedPanelInput(){
    const checked = document.querySelectorAll(".checked");
    const btnText = document.querySelector(".btn-text");
    selectedPanel = Array.from(checked).map((item) => item.innerText);

    if (checked && checked.length > 0) {
        btnText.innerText = selectedPanel.join(", ");
    } else {
        btnText.innerText = "Select panel";
    }

    const selectedPanelInput = document.getElementById("selectedPanel");
    selectedPanelInput.value = selectedPanel.join(", ");
}
function highlightSelectedPanels() {
    var selectedPanelInput = document.getElementById("selectedPanel").value;
    
    if (selectedPanelInput) {
        const selectedPanels = selectedPanelInput.split(",").map(panel => panel.trim());
        
        const items = document.querySelectorAll(".items");

        items.forEach((item) => {
            const itemText = item.querySelector(".item-text").innerText.trim();
            if (selectedPanels.includes(itemText)) {
                item.classList.add("checked");
            }
        });
        if (selectedPanels.length > 0) {
            btnText.innerText = selectedPanels.join(", ");
        } else {
            btnText.innerText = "Select panel";
        }
    }
    }
=======
const selectBtn=document.querySelector(".select-btn")
   items=document.querySelectorAll(".items");
   let selectedPanel=[];

const btnText = document.querySelector(".btn-text");   

selectBtn.addEventListener("click",()=>{
    selectBtn.classList.toggle("open")
})   

items.forEach(item => {
    item.addEventListener("click",()=>{
        item.classList.toggle("checked");
        let checked=document.querySelectorAll(".checked")
        btnText=document.querySelector(".btn-text");
        selectedPanel=Array.from(checked).map(item=>item.innerText)
        if (checked && checked.length > 0){
            btnText.innerText=`${checked.length}`
        }
        else{
            btnText.innerText="Select panel"
        }
    })
});

// function handleSubmit() {
    
//     handleCheckedItems(); 
//     return false; 
// }

// function handleCheckedItems() {
//     const checkedItems = document.querySelectorAll(".checked");
    
//     // Extract and use the values of checked items as needed
//     const checkedValues = Array.from(checkedItems).map(item => {
//         return item.querySelector(".item-text").innerText.trim();
//     });

//     // Do something with the checked values (e.g., send them to a server, display them, etc.)
//     console.log("Checked Values:", checkedValues);
// }

function updateSelectedPanelInput(){
    const checked = document.querySelectorAll(".checked");
    const btnText = document.querySelector(".btn-text");
    selectedPanel = Array.from(checked).map((item) => item.innerText);

    if (checked && checked.length > 0) {
        btnText.innerText = selectedPanel.join(", ");
    } else {
        btnText.innerText = "Select panel";
    }

    const selectedPanelInput = document.getElementById("selectedPanel");
    selectedPanelInput.value = selectedPanel.join(", ");
}
function highlightSelectedPanels() {
    var selectedPanelInput = document.getElementById("selectedPanel").value;
    
    if (selectedPanelInput) {
        const selectedPanels = selectedPanelInput.split(",").map(panel => panel.trim());
        
        const items = document.querySelectorAll(".items");

        items.forEach((item) => {
            const itemText = item.querySelector(".item-text").innerText.trim();
            if (selectedPanels.includes(itemText)) {
                item.classList.add("checked");
            }
        });
        if (selectedPanels.length > 0) {
            btnText.innerText = selectedPanels.join(", ");
        } else {
            btnText.innerText = "Select panel";
        }
    }
    }
>>>>>>> 71c6430a (updated)
