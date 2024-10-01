// Toggle between Login and Signup forms
function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
  }
  
  function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  }
  
  // Form validation (simple validation for demonstration)
  document.getElementById('signup').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
    } else {
      alert('Signup successful!');
    }
  });
  
  document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login successful!');
  });
  