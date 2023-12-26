var retVal = true;

$("document").ready(function(){
    if (JSON.parse(localStorage.getItem("contas"))==null){
        localStorage.setItem("contas", JSON.stringify([{"id": "0", "fabricante": "Beiralacte", "email":"beiralacte@gmail.com", "pass":"lacte76", "empresa":"https://www.beiralacte.pt/media/2hol2hlr/logo.svg", "address": "Vale Sandim, Aptd. 207, Alcaria, Castelo Branco", "biografia":"A BeiraLacte, Lacticínios Artesanais da Beira Baixa Lda. é uma unidade de produção artesanal de queijo situada em Alcaria, concelho do Fundão, em plena região demarcada dos queijos da Beira Baixa. Os seus proprietários descendem de famílias queijeiras da região da Cova da Beira, produzem queijo desde 1991, aliando os modernos padrões de controlo de qualidade, à arte e saber de gerações. Tudo começou com a patriarca da família, a Dona Conceição que comprava queijos frescos aos agricultores e nas suas caves os curava e transformava com o seu saber, para depois os vender nos mercados da região. O seu filho, Carlos Godinho seguindo-lhe os passos, começou por ser também ele um Afinador, no entanto com o tempo constatou que se ele próprio produzisse os queijos desde início, seria capaz de controlar melhor todo o processo, e assim obter um produto de maior qualidade tendo em 1991 iniciado aquela que seria a estrutura inicial da Beiralacte. A Beiralacte pretende servir a sua região constituindo-se como um motor de publicidade do que é Bom na Beira Baixa. A excelência corre nas veias dos colaboradores desta empresa e o desenvolvimento da envolvente social, cultural, económico e ambiental representa a sua Missão."}]))
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
            if (contas[i]["email"] == _email.value){
                if (contas[i]["pass"] == _pass.value){
                    localStorage.setItem("conta_ativa", JSON.stringify(contas[i]))
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