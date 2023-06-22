document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username.trim() === '' && password.trim() === '') {
      alert('Username and password are empty');
    } else if (username.trim() === '') {
      alert('Username is empty');
    } else if (password.trim() === '') {
      alert('Password is empty');
    } else {
      // Perform login logic here
      alert('Login successful');
      // You can redirect the user to another page or perform further actions
    }
  });
  