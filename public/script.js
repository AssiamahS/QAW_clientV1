document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate form inputs
    const requestor = document.getElementById('requestor').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const issue = document.getElementById('issue').value;
    const selectedService = document.getElementById('selectedService').value;

    if (requestor && email && phone && address && issue && selectedService) {
        // Here you would typically send the form data to your server
        alert('Ticket submitted successfully!');
        $('#ticketModal').modal('hide');
        $('#ticketForm')[0].reset();
        $('.service-option').removeClass('selected');
    } else {
        alert('Please fill in all fields.');
    }
});

$(document).ready(function() {
    $('.service-option').click(function() {
        $('.service-option').removeClass('selected');
        $(this).addClass('selected');
        $('#selectedService').val($(this).data('service'));
    });

    $('#submitTicket').click(function() {
        $('#ticketForm').submit(); // Trigger the form submission event
    });
});
