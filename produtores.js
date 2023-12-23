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
    product = products[parseFloat(produto)-1]
    console.log(product)
    let newProduct = document.createElement('div');
    newProduct.dataset.id = product.id;
    newProduct.classList.add('item');
    newProduct.innerHTML =
        `<h2 style="color: black; margin-top:110px; padding-left:20px">${product.fabricante}</h2>
        <div style="display: flex; align-items: center; justify-content: space-around;">
            <div style="flex: 1; padding-left: 40px;padding-top: 40px">
                <img src="${product.empresa}" alt="">
            </div>
            <div style="flex: 1; margin-right: 50px; background-color: aliceblue; padding: 50px; border-radius: 100px">
                <p style="font-size:18px"><strong>Descrição: </strong>${product.biografia}</p>
                <button onclick="goBack()" style="margin-top: 20px;float: left" class="btn">Voltar</button>
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
