const registerFormHandler = async (event) => {
    event.preventDefault();

    const email = document.getElementById('email-register').value;
    const password = document.getElementById('password-register').value;
    const emailArr = email.split('@');
    const name = emailArr[0];

    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
        
    if (response.ok) {
        registerLogin(email, password);
    } else {
        alert('Failed to register');
    };
};

const registerLogin =  async (email, password)  => {
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log in');
    }
};

const renderForm = async () => {
    
    const response = await fetch('api/users/register', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/login');
    }

};
document.getElementById('register').addEventListener('click', registerFormHandler);
document.getElementById('register-start').addEventListener('click', renderForm);