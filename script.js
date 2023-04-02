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
   
    let totalMonthlyCost = 0;
    $('#employee-data tr').each(function() {
        const monthlyCostString = $(this).children('td').eq(4).text();
        const monthlyCost = Number(monthlyCostString);
        totalMonthlyCost += (monthlyCost)/12;
        
    });
    const totalMonthlyCostRounded = Math.round(totalMonthlyCost);
    $('footer').text(`Total Monthly: $${totalMonthlyCostRounded}`);
    console.log('Calculate away!', totalMonthlyCost)

    if(totalMonthlyCostRounded >20000) {
        $('footer').css('background-color', 'red');
    }
}