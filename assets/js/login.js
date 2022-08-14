let form = document.getElementById("form-login").value
let submit = document.getElementById("submit")

submit.addEventListener("click", function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email !== ""){
        responEmail = true
    }else{
        responEmail = false
    }

    if(password !== ""){
        responPassword = true
    }else{
        responPassword = false
    }

    if(responEmail && responPassword){
        submitData()
    }

    submitData()
})

function submitData(){
    let data = {
        id : 1,
        email : email.value,
        password : password.value
    }

    let login = JSON.stringify(data)
    localStorage.setItem("aksesToken", login)  
    window.location.href = "home.html" 
}