console.log('js');

$(document).ready(onReady);

function onReady() {

    $('#submitButton').on('click', addEmployeeInfo);

    $('#deleteRow').click(deleteEmployee);
}

let totalMonthlySalary = 0;

function addEmployeeInfo() {

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let employeeID = $('#employeeID').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = $('#annualSalary').val();
    let monthlySalary = (($('#annualSalary').val()) / 12);
    //monthlySalary = parseFloat(monthlySalary.toFixed(2));

    totalMonthlySalary = totalMonthlySalary + monthlySalary;

    //$('#tableFirstName').append('<td></td>', firstName); <------MY ORIGINAL CODE TO ADD DATA TO THE TABLE
    //$('#tableLastName').append('<td></td>', lastName);
    //$('#tableEmployeeID').append('<td></td>', employeeID);
    //$('#tableJobTitle').append('<td></td>', jobTitle);
    //$('#tableAnnualSalary').append('<td></td>', annualSalary);

    //letrow=$('<tr></tr>'); <----------- CHRIS' CODE TO ADD DATA TO THE TABLE
    //row.append('<td>' + firstName + '</td>');
    //row.append('<td>' + lastName + '</td>');
    //row.append('<td>' + employeeID + '</td>');
    //row.append('<td>' + jobTitle + '</td>');
    //row.append('<td class="salary">' + annualSalary + '</td>');
    //row.append('<td><button class ="deleteButton">Remove Employee</button></td>');
    //$('tbody').append(row);

    addEmployee = "<tr><td><input type='checkbox' name='record'></td><td>" +
        firstName + "</td><td>" +
        lastName + "</td><td>" +
        employeeID + "</td><td>" +
        jobTitle + "</td><<td>" +
        convertCurrency(annualSalary) + "</td>/tr>";

    $('tbody').append(addEmployee);

    //clears input fields that are a child of id=inputField 
    //$('#inputField input').val(''); <------- ABBREVIATED VERSION OF THE FOLLOWING INDIVIDUAL CLEARING INPUT FIELDS
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    $('#totalMonthlySalary').text('Total Monthly Salary: ' + convertCurrency(totalMonthlySalary));

    function convertCurrency(num) { 
        return parseInt(num).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
    
    convertCurrency();
    salaryWarning();

}

//function removeEmployee() { <-------- CHRIS' CODE TO REMOVE ROW
//let salary = $(this).parent().parent().find('.salary').text();
//totalMonthlySalary -= salary/12;
//$('#totalMonthlySalary').text('Total Monthly Salary: ' + totalMonthlySalary);
//$(this).parent().parent().remove();
//}


function deleteEmployee() {
    $('tbody').find('input[name="record"]').each(function () {
        if ($(this).is(":checked")) {
            $(this).parents("tr").remove();
        }
    });
}

function salaryWarning() {
    if (totalMonthlySalary > 20000) {
        $('#totalMonthlySalary').css('color', 'red');
    }
}