document.getElementById('clientForm').addEventListener('submit', function(event) {
    // Example validation: check if first field is empty
    var firstField = document.getElementsByName('field1')[0].value;
    if (!firstField) {
        alert('First field is required!');
        event.preventDefault(); // Prevent form submission
    }
    // Implement other validations as needed
});
