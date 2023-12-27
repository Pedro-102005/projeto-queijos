let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let butDetalhes = document.querySelector('.Details');
let products = JSON.parse(localStorage.getItem("pedidos_conta"));
let cart = [];

$("document").ready(function(){
    $("a[href='pedidosconta.html']").addClass("active")
    if (JSON.parse(localStorage.getItem("pedidos_conta"))==null){
        localStorage.setItem("pedidos_conta", JSON.stringify([{"id":"0", "fabricante":"queijostop","email":"queijostop@confia.pt", "pass":"123456", "number":"967283658", "empresa":"https://img.freepik.com/premium-vector/heart-with-wings_602006-5645.jpg", "address":"R. do Bairro da Carvalhinha, 6270-031 Bairro", "biografia":"Trabalhamos há muito tempo nesta rica industria!"}, {"id":"1", "fabricante":"Queijos Angelicos","email":"queijosangelicos@gmail.com", "pass":"123456", "number":"967283658", "empresa":"https://www.shutterstock.com/image-vector/question-mark-icon-vector-illustration-600nw-545832988.jpg", "address":"R. do Bairro da Carvalhinha, 6270-031 Bairro", "biografia":"Trabalhamos há muito tempo nesta rica industria!"}]))
    }
})

const addDataToHTML = () => {
    // remove datas default from HTML

    // add new datas
    if (products.length > 0) // if has data
    {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.dataset.id = product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML =
                `<img src="${product.empresa}" alt="" style="height: 220px; max-width: 240px; object-fit: cover; background-position: center center; background-repeat: no-repeat; background-size: cover;">
                <h2>${product.fabricante}</h2>
                <button class="Details">Detalhes</button>`;
            listProductHTML.appendChild(newProduct);
        });
    }
}

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let id_product = positionClick.parentElement.dataset.id;
        addToCart(id_product);
    }
    else if (positionClick.classList.contains('Details')) {
        let id_detalhes = positionClick.parentElement.dataset.id;
        localStorage.setItem("produto", id_detalhes);
        window.location.href = "pedidosDetails.html";
    }

})

addDataToHTML()