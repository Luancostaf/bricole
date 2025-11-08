const userEmail="bricole@gmail.com";
const userPassword="bricole0227";

function login () {
    const emailInput= document.getElementById("bricole@gmail.com").value;

    const passwordInput= document.getElementById("bricole0227").value;


    console.log(emailInput)
    if (emailInput === "") {
        alert("Preencher email");
        return;
    }
    else if (passwordInput === "") {
        alert("Preencher password");
        return;
    }

    else if (userEmail !== emailInput) {
        alert("Error email errado");
        return;
    }
    else if (userPassword !== passwordInput){
        alert("Error senha errado");
        return;
    }

    window.location.href = "index.html";
}
    

