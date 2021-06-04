// const registerFormHandler = async (event) => {
//     event.preventDefault();
    
//     const email = document.getElementById('email-register').value;
//     const password = document.getElementById('password-register').value;
//     const emailArr = email.split('@');
//     const name = emailArr[0];
//     console.log(email, password, name)
//     const response = await fetch('/api/users', {
//         method: 'POST',
//         body: JSON.stringify({ name, email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
        
//     if (response.ok) {
//         registerLogin(email, password);
//     } else {
//         alert('Failed to register');
//     };
// };

// const registerLogin =  async (email, password)  => {
//     const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert('Failed to register!');
//     }
// };

const renderForm = async () => {
    
    const response = await fetch('api/users/register', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/register');
    }

};
// document.getElementById('register-form').addEventListener('submit', registerFormHandler);
document.getElementById('register-start').addEventListener('click', renderForm);