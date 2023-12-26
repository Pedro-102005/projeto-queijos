var retVal = true;

$("document").ready(function(){
    if (JSON.parse(localStorage.getItem("contas"))==null){
        localStorage.setItem("contas", JSON.stringify([["josh34@joe", "joe"], ["joshinho@joe", "joe1"]]))
    }
})

function validation(){
    retVal = true;
    contas = JSON.parse(localStorage.getItem("contas"));
    let passe = $("#pass").val()
    contas.push(["ehdfk", passe])
    localStorage.setItem("contas", JSON.stringify(contas))
    if (validatetipo() && vidateemail() && vidatepass()){
        window.location.href = "index.html";
    }
    return false
}

function vidateemail() {
    var _email = document.getElementById("email")
    if (_email.value.trim().length < 3) {
        retVal = false;
        alert("Coloque um email");
    }
    else if (_email.value.includes("@")== false){
        retVal = false;
        alert("O email necessita de um @");
    }
    else if (_email.value.split("@")[1]== ""){
        retVal = false;
        alert("O email necessita de um endereço a seguir do @");
    }
    return retVal
}

function vidatepass() {
    var _pass = document.getElementById("pass")
    if (_pass.value.trim().length < 3) {
        retVal = false;
        alertalert("Coloque uma password com mais de 3 letras");
    }
    return retVal
}


function validatetipo() {
    var _tipo = document.querySelectorAll('input[name="tipos"]:checked').length;
    if (_tipo == 0) {
        retVal = false
        alert("Escolha um tipo de conta")
    }
    return retVal
}