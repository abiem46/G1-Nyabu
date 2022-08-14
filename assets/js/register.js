let form = document.getElementById("form-register").value;
let submit = document.getElementById("submit")
let hasil = document.getElementById("hasil")

    submit.addEventListener("click", function(event){
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const konfirmasiPassword = document.getElementById("konfirmasi");

        if (email !== "") {
            responEmail = true;
        }else{
            responEmail = false
        }

        if (password !== ""){
            responPassword = true
        }else{
            responPassword = false
        }

        if(konfirmasiPassword !== password){
            responKonfirmasiPassword = false;
        }else{
            responKonfirmasiPassword = true
        }

        if(responEmail && responPassword && responKonfirmasiPassword){
            submitData()
        }else{
            hasil.style.color = "red";
            hasil.innerHTML = "Password incorrect!"
        }

        submitData()
    })

    function submitData(){
        // hasil.submit
        let data = {
            id : 1,
            email : email.value,
            password : password.value
        }
        let resgisterasi = JSON.stringify(data)
        localStorage.setItem("aksesToken", resgisterasi)  
        window.location.href = "login.html" 
    }