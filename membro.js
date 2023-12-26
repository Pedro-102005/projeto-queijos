var retVal = true;

$("document").ready(function(){
    if (JSON.parse(localStorage.getItem("pedidos_conta"))==null){
        localStorage.setItem("pedidos_conta", JSON.stringify([{"id":"0", "fabricante":"queijostop","email":"queijostop@confia.pt", "pass":"123456", "number":"967283658", "empresa":"https://img.freepik.com/premium-vector/heart-with-wings_602006-5645.jpg", "address":"R. do Bairro da Carvalhinha, 6270-031 Bairro", "biografia":"Trabalhamos há muito tempo nesta rica industria!"}, {"id":"1", "fabricante":"Queijos Angelicos","email":"queijosangelicos@gmail.com", "pass":"123456", "number":"967283658", "empresa":"https://www.shutterstock.com/image-vector/question-mark-icon-vector-illustration-600nw-545832988.jpg", "address":"R. do Bairro da Carvalhinha, 6270-031 Bairro", "biografia":"Trabalhamos há muito tempo nesta rica industria!"}]))
    }
})

function validation(){
    retVal = true;
    contas = JSON.parse(localStorage.getItem("pedidos_conta"));
    if (vidatename() && vidateemail() && vidatepass() && vidatenumber() && vidatephoto() && vidateaddress() && vidatebio()){
        contas.push({"id": contas.length, "fabricante":$("#name").val(),"email":$("#email").val(), "pass":$("#passe1").val(), "number":$("#phone").val(), "empresa":$("#foto").val(), "address":$("#address").val(), "biografia":$("#description").val()})
        localStorage.setItem("pedidos_conta", JSON.stringify(contas))
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
    var _pass = document.getElementById("passe1")
    var _pass2 = document.getElementById("passe2")
    if (_pass.value.trim().length < 3) {
        retVal = false;
        alert("Coloque uma password com mais de 2 letras");
    }
    else if (_pass.value != _pass2.value){
        retVal = false;
        alert("Você escreveu duas palavras-passes diferentes");
    }
    return retVal
}

function vidatename() {
    var _nome = document.getElementById("name");
    if (_nome.value.trim().length < 3) {
        retVal = false;
        alert("Coloque um nome com mais de 2 letras");
    }
    return retVal
}

function vidatenumber() {
    var _nr = document.getElementById("phone");
    if (_nr.value.trim().length < 9) {
        retVal = false;
        alert("Coloque um número com 9 digitos");
    }
    else if (/^[0-9]*$/.test(_nr.value)==false){
        retVal = false;
        alert("O número só pode conter digitos");
    }
    return retVal
}

function vidatebio() {
    var _bio = document.getElementById("description");
    if (_bio.value.split(" ").length < 5) {
        retVal = false;
        alert("Coloque um descrição com mais de 4 palavras");
    }
    return retVal
}

function vidatephoto() {
    var _foto = document.getElementById("foto");
    if (_foto.value.substring(0, 8) != "https://") {
        retVal = false;
        alert("O link terá de conter 'https://'");
    }
    else if (_foto.value.substring(_foto.value.length-4, _foto.value.length) != ".jpg") {
        retVal = false;
        alert("O link terá de conter '.jpg'");
    }
    return retVal
}

function vidateaddress() {
    var _address = document.getElementById("address");
    console.log(_address.value.split(",").length)
    if (_address.value.split(",").length < 2) {
        retVal = false;
        alert("Coloque a morada com 2 elementos separados por virgulas");
    }
    return retVal
}