let listProductHTML = document.querySelector('.listProduct');
var nr =JSON.parse(localStorage.getItem("produto"));
console.log(nr)
var conta = JSON.parse(localStorage.getItem("pedidos_produto"))[parseFloat(nr)]

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
    console.log(conta)
    let newProduct = document.createElement('div');
    newProduct.classList.add('item');
    newProduct.innerHTML =
        `<h2 style="color: black; margin-top:110px; padding-left:20px">${conta.name}</h2>
        <div style="display: flex; align-items: center; justify-content: space-around;">
            <div  class="col-4" style="flex: 1; padding-top: 40px; text-align: center">
                <img src="${conta.image}" alt="" style="height: 480px; max-width: 480px; object-fit: cover; background-position: center center; background-repeat: no-repeat; background-size: cover;">
            </div>
            <div class="col-8" style="flex: 1; margin-right: 50px; background-color: aliceblue; padding: 50px; border-radius: 100px; justify-content: center">
                <p style="font-size:18px"><strong>Descrição: </strong>${conta.descrição}</p>
                <p style="font-size:18px"><strong>Ingredientes: </strong>${conta.ingredientes}</p>
                <a href="produtoresDetails.html" class="nav-link">
                    <p style="font-size:18px"><strong>Fabricante: </strong>${conta.fabricante}</p>
                </a>
                <div style="font-size:18px"class="price"><strong>Preço:</strong> &#8364;${parseFloat(conta.price).toFixed(2)}</div>
                <div>
                    <button onclick="approve()" style="margin-top: 20px;float: left; background-color: green; color: white" class="btn"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></button>
                    <button onclick="reject()" style="margin: 20px 0 0 20px;background-color: red; color: white" class="btn"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i></button>
                </div>
                <button onclick="goBack()" style="margin-top: 20px" class="btn">Voltar</button>
            </div>
        </div>`;
    listProductHTML.appendChild(newProduct);
}

function goBack() {
    window.history.back();
}

function approve() {
    let produtos = JSON.parse(localStorage.getItem("produtos"));
    let pedidos = JSON.parse(localStorage.getItem("pedidos_produto"));
    produtos.push({"id": 9 + produtos.length, "name": conta.name, "price": conta.price, "image":conta.image, "ingredientes":conta.ingredientes, "descrição": conta.descrição,"fabricante":conta.fabricante,"email":conta.email, "empresa":conta.empresa, "biografia":conta.biografia})
    localStorage.setItem("produtos", JSON.stringify(produtos))
    pedidos.splice(nr,1)
    for (i = nr; i < pedidos.length; i++){
        pedidos[i]["id"] = parseInt(pedidos[i]["id"]) - 1
    }
    localStorage.setItem("pedidos_produto", JSON.stringify(pedidos))
    window.location.replace("aproveproduct.html")
}

function reject() {
    let pedidos = JSON.parse(localStorage.getItem("pedidos_produto"));
    pedidos.splice(nr,1)
    for (i = nr; i < pedidos.length; i++){
        pedidos[i]["id"] = parseInt(pedidos[i]["id"]) - 1
    }
    localStorage.setItem("pedidos_produto", JSON.stringify(pedidos))
    window.location.replace("aproveproduct.html")
}

addDataToHTML();
