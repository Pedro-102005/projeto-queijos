var retVal = true;

$("document").ready(function(){
    if (JSON.parse(localStorage.getItem("pedidos_produto"))==null){
        localStorage.setItem("pedidos_produto", JSON.stringify([{"id":"0", "name": "QUEIJO AMARELADO DA BEIRA BAIXA DOP" , "price": 25.99, "image":"https://www.beiralacte.pt/media/xlndyn1h/amarelo-merendeira.jpg", "descrição":"Queijo curado, de pasta semidura e amarelado, com alguns olhos irregulares, obtido por esgotamento lento da coalhada, após a coagulação do leite cru de ovelha e cabra por acção do coalho animal. O leite é proveniente da área geográfica de produção do queijo da Beira Baixa.", "ingredientes":"Leite cru de ovelha e cabra, sal, oregãos e coalho.", "fabricante":"Sabores da Soalheira", "email":"beiralacte@gmail.com", "empresa":"https://saboresdasoalheira.pt/wp-content/uploads/2016/03/01-1.jpg", "biografia":"Em 1997 foi recuperada a queijaria existente desde várias gerações anteriores, adaptando-as as necessidades e requisitos dessa época. Desde então que se rege pela procura de produtos de qualidade que garantam a satisfação total do cliente, sem perder o gosto pela tradição mantendo a sabor típico do “saber fazer” tão conhecido desta região onde se insere."}]))
    }
})

function validation(){
    retVal = true;
    let pedidos = JSON.parse(localStorage.getItem("pedidos_produto"));
    let user = JSON.parse(localStorage.getItem("conta_ativa"));
    if (vidatename() && vidatepreco() && vidatephoto() && vidateingredientes() && vidatebio()){
        pedidos.push({"id": pedidos.length, "name": $("#name").val(), "price": $("#preco").val(), "image":$("#foto").val(), "ingredientes":$("#ingredientes").val(), "descrição": $("#description").val(),"fabricante":user["fabricante"],"email":user["email"], "empresa":user["empresa"], "biografia":user["biografia"]})
        localStorage.setItem("pedidos_produto", JSON.stringify(pedidos))
        window.location.href = "index.html";
    }
    return false
}

function vidatename() {
    var _nome = document.getElementById("name");
    if (_nome.value.trim().length < 3) {
        retVal = false;
        alert("Coloque um nome com mais de 2 letras");
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

function vidatepreco() {
    var _preco = document.getElementById("preco");
    if (_preco.value.length < 1) {
        retVal = false;
        alert("Coloque um número no preço");
    }
    else if (/^[0-9]*$/.test(_preco.value.replace(".",""))==false){
        retVal = false;
        alert("O preço tem de ser um número (Use '.' em vez de ',')");
    }
    return retVal
}

function vidateingredientes() {
    var _ing = document.getElementById("ingredientes");
    if (_ing.value.split(" ").length < 5) {
        retVal = false;
        alert("Os ingredientes têm de ter mais de 4 palavras");
    }
    return retVal
}