var produto = localStorage.getItem("produto")
let products = [];
let listProductHTML = document.querySelector('.listProduct');
console.log(produto)

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let id_product = positionClick.parentElement.dataset.id;
        addToCart(id_product);
    }
    else if (positionClick.classList.contains('Details')) {
        let id_detalhes = positionClick.parentElement.dataset.id;
        localStorage.setItem("produto", id_detalhes);
        window.location.href = "produtosDetails.html";
    }

})

const addDataToHTML = () => {
    for (i=0; i< JSON.parse(localStorage.getItem("produtos")).length; i++){
        products.push(JSON.parse(localStorage.getItem("produtos"))[i])
    }
    product = products[parseFloat(produto)-1]
    console.log(product)
    let newProduct = document.createElement('div');
    newProduct.dataset.id = product.id;
    newProduct.classList.add('item');
    newProduct.innerHTML =
        `<h2 style="color: black; margin-top:110px; padding-left:20px">${product.fabricante}</h2>
        <div class="container" style="display: flex; align-items: center; justify-content: space-around; margin-top: 60px">
            <div class="col-4" style="vertical-align: top;">
                <img src="${product.empresa}" alt="${product.fabricante}" style="max-height: 800px; max-width: 100%">
            </div>
            <div class="col-8" style="background-color: aliceblue; padding: 50px; border-radius: 100px; margin-left: 100px">
                <p style="font-size:18px"><strong>Descrição: </strong>${product.biografia}</p>
                <p style="font-size:18px"><strong>Email: </strong>${product.email}</p>
                <button onclick="goBack()" style="margin-top: 20px;float: left" class="btn">Voltar</button>
            </div>
        </div>`;
    listProductHTML.appendChild(newProduct);
}



function goBack() {
    window.history.back();
}

const initApp = () => {
    // get data product
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            products = data
            console.log;
            addDataToHTML();
        })
}
initApp();
