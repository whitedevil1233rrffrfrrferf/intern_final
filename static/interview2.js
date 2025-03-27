<<<<<<< HEAD
const selectBtn=document.querySelector(".select-btn")
   items=document.querySelectorAll(".items");
   let selectedPanel=[];

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

function updateSelectedPanelInput(){
    const selectedPanelInput=document.getElementById("selectedPanel")
    selectedPanelInput.value = selectedPanel.join(', ');
    console.log(selectedPanelInput.value)
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
    }
=======
const selectBtn=document.querySelector(".select-btn")
   items=document.querySelectorAll(".items");
   let selectedPanel=[];

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

function updateSelectedPanelInput(){
    const selectedPanelInput=document.getElementById("selectedPanel")
    selectedPanelInput.value = selectedPanel.join(', ');
    console.log(selectedPanelInput.value)
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
    }
>>>>>>> 71c6430a (updated)
}