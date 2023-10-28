const tbody = document.querySelector("tbody");
const form = document.getElementById("form");
const submitButton = document.getElementById("form-btn");

// const employeeList = []; //Global array.

function deleteRecord(event) {
    const buttonRef = event.target;
    const row = buttonRef.parentNode.parentNode;
    row.remove();
}

function addEmployee(employee) 
{
    //adding a new employee inside the global array.
    // employeeList.push(employee);


    const tr = document.createElement("tr");
    for(let key in employee)
    {
        const td = document.createElement("td");
        td.innerText = employee[key];
        tr.appendChild(td);
    }

    const options = document.createElement("td");
    let deletebutton = document.createElement("button");
    deletebutton.innerText = "Delete";

    let editButton = document.createElement("button");
    editButton.innerText = "Edit";

    deletebutton.addEventListener("click",deleteRecord);
    editButton.addEventListener("click", onEditClick);

    options.appendChild(deletebutton);
    options.appendChild(editButton);
    tr.appendChild(options);

    tbody.appendChild(tr);
}

function onSubmitEmployee(event) {
    event.preventDefault(); // To avoid the submission and reload of the page.
    let employeeData = {
        name : form.name.value,
        companyName : form.companyName.value,
        salary : form.salary.value,
        gender : form.gender.value,
        role : form.role.value,
        email : form.email.value,
    }
    
    if(editOptions.isEditing)
    {
        editEmployee(employeeData);
    }
    else
    {
        addEmployee(employeeData);
    }
    
    form.reset();
}

form.addEventListener("submit", onSubmitEmployee)


// addEmployee({
//     name : "Satish",
//     email : "Satish@gmail.com",
//     salary : "1500",
//     gender : "male",
//     companyName : "pwc",
//     role : "SDE"
// })