/*Selected Elments*/
   const firstName =  document.querySelector("#firstName")
   const lastName =   document.querySelector("#lastName")
   const rollNo =   document.querySelector("#rollNo")

var selectedRow = null;
            /*Showing alerts*/
function showAlert(message , className) {
    const div = document.createElement("div")
    div.className = `alert alert-${className}`
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container")
    const main = document.querySelector(".main")

    container.insertBefore(div, main)
    setTimeout(() => document.querySelector(".alert").remove(), 3000)
} 
            /*Clear all */
function clearFields() {
    firstName.value = "";
    lastName.value = "";
    rollNo.value = "";    
}
/*Add data*/
document.querySelector("#student-form").addEventListener("submit", (e)=>{
    e.preventDefault();
    //Validate
    if (firstName.value == "" || lastName.value == "" || rollNo.value == ""){
        showAlert("Pleace fill in all fields" , "danger")
    } else{
        if(selectedRow == null){
            const list = document.querySelector(".student-list")
            const row  = document.createElement("tr");

            row.innerHTML = `
            <td>${firstName.value}</td>
            <td>${lastName.value}</td>
            <td>${rollNo.value}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
        list.appendChild(row);
        selectedRow == null;
        showAlert("Student Added", "success")
        }
        else{
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = rollNo;
            selectedRow = null;
            showAlert("Student Info Edited", "info")
        }
        clearFields();
    }
})
/*Edit Data*/
document.querySelector(".student-list").addEventListener("click", (e) => {
    target = e.target
    if (target.classList.contains("edit")) {
      selectedRow  = target.parentElement.parentElement
      firstName.value = selectedRow.children[0].textContent; 
      lastName.value = selectedRow.children[1].textContent; 
      rollNo.value = selectedRow.children[2].textContent; 

    }
})
             /*Delete data*/
document.querySelector(".student-list").addEventListener("click", (e) =>{
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Student data deleted" , "danger")
    }
})