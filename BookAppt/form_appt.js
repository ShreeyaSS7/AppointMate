document.querySelector('.forms').addEventListener('submit', function(e) {
  e.preventDefault();

    alert('Form submitted!');


  const formData = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    gender: document.getElementById('gender').value,
    date: document.getElementById('appointment-date').value,
    time: document.getElementById('appointment-time').value,
    reason: document.getElementById('reason').value,
    visitType: document.getElementById('first').value
  };

  console.log('Form data:', formData);
  //alert('Data collected: ' + JSON.stringify(formData));
  

  
  sessionStorage.setItem('appointmentData', JSON.stringify(formData));
  
  console.log('Stored data:', sessionStorage.getItem('appointmentData'));


  window.location.href = '/bookingdone/done_appt.html';
});