
const loginSection = document.getElementById('loginSection');
const signupSection = document.getElementById('signupSection');
const showSignupLink = document.getElementById('showSignupLink');
const showLoginLink = document.getElementById('showLoginLink');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');


function showSignup(e) {
    e.preventDefault();
    loginSection.classList.add('hidden');
    signupSection.classList.remove('hidden');
}

function showLogin(e) {
    e.preventDefault();
    signupSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
}


showSignupLink.addEventListener('click', showSignup);
showLoginLink.addEventListener('click', showLogin);


loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
 
    const loginData = {
        email: email,
        password: password,
        rememberMe: rememberMe,
        timestamp: new Date().toISOString()
    };
    
    console.log('Login Data:', loginData);
    
  
    alert(`Welcome back!\n\nEmail: ${email}\nRemember me: ${rememberMe ? 'Yes' : 'No'}`);
    

    loginForm.reset();
});


signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const agreedToTerms = document.getElementById('agreeTerms').checked;
    

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }
    

    const signupData = {
        firstName: firstName,
        lastName: lastName,
        fullName: `${firstName} ${lastName}`,
        email: email,
        password: password,
        agreedToTerms: agreedToTerms,
        timestamp: new Date().toISOString()
    };
    
    console.log('Signup Data:', signupData);
    

    alert(`Account created successfully!\n\nWelcome, ${firstName} ${lastName}!\nEmail: ${email}\n\nYou can now sign in with your credentials.`);
    

    signupForm.reset();
    signupSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
});

const socialButtons = document.querySelectorAll('.btn-social');
socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        const provider = this.textContent.trim();
        alert(`${provider} authentication would be handled here.\n\nIn a production environment, this would redirect to ${provider}'s OAuth flow.`);
    });
});


function addPasswordToggle() {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    
    passwordInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.letterSpacing = '0.05em';
        });
        
        input.addEventListener('blur', function() {
            this.style.letterSpacing = 'normal';
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {
    addPasswordToggle();
    console.log('');
});