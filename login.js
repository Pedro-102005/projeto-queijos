var retVal = true;

$("document").ready(function(){
    if (JSON.parse(localStorage.getItem("contas"))==null){
        localStorage.setItem("contas", JSON.stringify([["josh34@joe", "joe"], ["joshinho@joe", "joe1"]]))
    }
})

$(".close").click(function(){
    var modal = document.getElementById("myModal");
    window.location.replace('terminar.html')
    modal.style.display = "none";
})
function validation(){
    retVal = true;
    var modal = document.getElementById("myModal");
    if (validatetipo() && vidateemail()){
        modal.style.display = "block";
    }
    return false
}

function vidateemail() {
    var _email = document.getElementById("email")
    let _tipo = document.querySelectorAll('input[name="tipos"]:checked')
    var _pass = document.getElementById("pass")
    if (_tipo[0].value == "option2" && _email.value != "admin@qj.pt") {
        retVal = false;
        alert("email incorreto");
    }
    else if (_tipo[0].value == "option2" && _pass.value != "adminadmin") {
        retVal = false;
        alert("Palavra-passe incorreta");
    }
    else if(_tipo[0].value == "option2"){
        localStorage.setItem("conta_ativa", JSON.stringify("admin"))
    }
    else if (_tipo[0].value == "option1"){
        contas = JSON.parse(localStorage.getItem("contas"));
        for (i=0; i<contas.length; i++){
            if (contas[i][0] == _email.value){
                if (contas[i][1] == _pass.value){
                    return retVal
                }
                else{
                    retVal = false;
                    alert("Palavra-passe incorreta");
                    return retVal
                }
            }
        }
        retVal = false;
        alert("email incorreto");
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