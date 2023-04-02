$(document).ready (onReady);

function onReady () {
    console.log('Welcome to our calculator!');
    $('.submit-button').on('click', handleInput)
}

function handleInput (event) {
    console.log('We rollin?');
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
    const annualSalary = annualSalaryInput.val();

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

}