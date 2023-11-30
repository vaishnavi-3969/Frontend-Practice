const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit',function (e) {
    e.preventDefault();
    console.log('form submitted')
    const loginFormData = new FormData(loginForm);
    console.log(loginFormData)
    const name = loginFormData.get('astronaut-name');
    const password = loginFormData.get('astronaut-password');
    const email = loginFormData.get('astronaut-email')
    console.log(name,password,email)
})