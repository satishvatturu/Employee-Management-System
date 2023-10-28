const mutateEditStateButton = document.getElementById("mutate");

mutateEditStateButton.addEventListener("click", () => {
    // do not clear the form just change the behaviour {from update => add employee}.
    editOptions = {
        isEditing : false,
        rowElement : null
    }

    submitButton.innerText = "Add Employee";
    form.reset();
})

let editOptions = {
    isEditing : false,
    rowElement : null,
}


function onEditClick(event) {
    const row = event.target.parentNode.parentNode;
    const cells = row.querySelectorAll("td");
    let employeeInfo = {
        name : cells[0].innerText,
        companyName : cells[1].innerText,
        salary : cells[2].innerText,
        gender : cells[3].innerText,
        role : cells[4].innerText,
        email : cells[5].innerText
    }
    prefillForm(employeeInfo);

    editOptions = {
        isEditing : true,
        rowElement : row
    }

    submitButton.innerText = "Update";
}

function prefillForm(employee) {
    // takes an employee object and fills all
    // the inputs inside the form.

    // form.name.value = employee.name;
    // form.companyName.value = employee.companyName;
    // form.salary.value = employee.salary;
    // form.gender.value = employee.gender;
    // form.role.value = employee.role;
    // form.email.value = employee.email;

    // OR we can use

    for(let i in employee)
    {
        form[i].value = employee[i];
    }

}

function editEmployee(employee) {
    // edit the tr with new employee data.
    
    const rowElement = editOptions.rowElement;

    let cells = rowElement.querySelectorAll("td");
    cells[0].innerText = employee.name;
    cells[1].innerText = employee.companyName;
    cells[2].innerText = employee.salary;
    cells[3].innerText = employee.gender;
    cells[4].innerText = employee.role;
    cells[5].innerText = employee.email;

    submitButton.innerText = "Add Employee";

    // reseting the edit options state.
    editOptions = {
        isEditing : false,
        rowElement : null
    }
}