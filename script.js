$(document).ready (onReady);

function onReady () {
    console.log('Welcome to our calculator!');
    $('.submit-button').on('click', handleInput)
    $('#employee-data').on('click', '.delete-btn', deleteEmployeeData)
}

function handleInput (event) {
    console.log('Beautiful inputs!');
    event.preventDefault();

    const firstNameInput = $('#firstName-input');
    const lastNameInput = $('#lastName-input');
    const IdInput = $('#ID-input');
    const titleInput = $('#title-input');
    const annualSalaryInput = $('#anSal-input');

    const firstName = firstNameInput.val();
    const lastName = lastNameInput.val();
    const id = IdInput.val();
    const title = titleInput.val();
    const annualSalary = Number(annualSalaryInput.val());

    firstNameInput.val('');
    lastNameInput.val('');
    IdInput.val('');
    titleInput.val('');
    annualSalaryInput.val('');

    $('#employee-data').append(`
      <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
        <td>
            <button class="delete-btn">❌</button>
        </td>
      </tr>`)
    
    calculateTotalMonthly();
}

function deleteEmployeeData(event) {
    console.log('Delete away!');
    $(event.target).parent().parent().remove()
}

function calculateTotalMonthly() {
    console.log('Calculate away!');
    let totalMonthlyCost = 0;
    
   
    
    
    
    
    
    
    
    
    // $('#employee-data').each(function() {
    // const annualSalaryInput = $('#anSal-input');
    // const annualSalary = Number(annualSalaryInput.val())/12;
    // let totalMonthlyCost = 0;
    // totalMonthlyCost += annualSalary;
    // })

    // $('footer').text(`Total Monthly: ${totalMonthlyCost}`);

}