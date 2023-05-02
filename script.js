function register(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const checkbox = document.getElementById('checkbox');


    const table = document.getElementById('output');

    const row = table.insertRow();
    const nameCell = row.insertCell();
    const emailCell = row.insertCell();
    const passwordCell = row.insertCell();
    const dobCell = row.insertCell();
    const termsCell = row.insertCell();

    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    passwordCell.innerHTML = password;
    dobCell.innerHTML = dob;
    if (checkbox.checked) {
        termsCell.innerHTML = true;
    } else {
        termsCell.innerHTML = false;
    }
    

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('checkbox').value = '';
}
