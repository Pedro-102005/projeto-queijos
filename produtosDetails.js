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
    if (JSON.parse(localStorage.getItem("produtos"))!= null){
        for (i=0; i< JSON.parse(localStorage.getItem("produtos")).length; i++){
            products.push(JSON.parse(localStorage.getItem("produtos"))[i])
        }
        console.log(products)
    }
    product = products[parseFloat(produto)-1]
    console.log(product)
    let newProduct = document.createElement('div');
    newProduct.dataset.id = product.id;
    newProduct.classList.add('item');
    newProduct.innerHTML =
        `<h2 style="color: black; margin-top:110px; padding-left:20px">${product.name}</h2>
        <div style="display: flex; align-items: center; justify-content: space-around;">
            <div  class="col-4" style="flex: 1; padding-top: 40px; text-align: center">
                <img src="${product.image}" alt="" style="height: 480px; max-width: 480px; object-fit: cover; background-position: center center; background-repeat: no-repeat; background-size: cover;">
            </div>
            <div class="col-8" style="flex: 1; margin-right: 50px; background-color: aliceblue; padding: 50px; border-radius: 100px; justify-content: center">
                <p style="font-size:18px"><strong>Descrição: </strong>${product.descrição}</p>
                <p style="font-size:18px"><strong>Ingredientes: </strong>${product.ingredientes}</p>
                <a href="produtoresDetails.html" class="nav-link">
                    <p style="font-size:18px"><strong>Fabricante: </strong>${product.fabricante}</p>
                </a>
                <div style="margin-bottom:20px" id="rated"><i class="fa fa-star fa-2x" aria-hidden="true" id="stars1"></i><i class="fa fa-star fa-2x" aria-hidden="true" id="stars2"></i><i class="fa fa-star fa-2x" aria-hidden="true" id="stars3"></i><i class="fa fa-star fa-2x" aria-hidden="true" id="stars4"></i><i class="fa fa-star fa-2x" aria-hidden="true" id="stars5"></i></div>
                <div style="font-size:18px"class="price"><strong>Preço:</strong> &#8364;${parseFloat(product.price).toFixed(2)}</div>
                <button onclick="goBack()" style="margin-top: 20px;float: left" class="btn">Voltar</button>
                <button onclick="rate()" style="margin-top: 20px;float: left" id="btnStars" class="btn">Avaliar</button>
            </div>
        </div>`;
    listProductHTML.appendChild(newProduct);
    if (product.rating!= null){
        console.log(product.rating)
        for (let i = 0; i <= parseFloat(product.rating); i++){
            console.log("stars"+i)
            $("#stars"+i).addClass("text-warning")
        }
    }
}

function rate(){
    if ($(".stars").hasClass("d-none")){
        $(".stars").removeClass("d-none")
        $("#btnStars").text("Submeter")
    }
    else{
        let rated = 0
        $(".stars").addClass("d-none")
        for (i=0; i<=6; i++){
            if ($("#star"+i).css("color")=="rgb(255, 193, 7)"){
                rated = i
            }
        }
        let newrate = rated
        if (product.rating != null){
            newrate = (parseFloat(product.rating) + rated)/2
            for (let i = 1; i <= 5; i++){
                console.log("stars"+i)
                $("#stars"+i).removeClass("text-warning")
            }
        }
        for (let i = 0; i <= newrate; i++){
            console.log("stars"+i)
            $("#stars"+i).addClass("text-warning")
        }
        if (parseInt(product.id) > 8){
            let produtos = JSON.parse(localStorage.getItem("produtos"));
            console.log(produtos[parseFloat(produto)-9])
            produtos[parseFloat(produto)-9]['rating'] = newrate
            localStorage.setItem("produtos", JSON.stringify(produtos));
        }
        $("#btnStars").text("Avaliar")
    }
}

function goBack() {
    window.history.back();
}

$("#star1").hover(function(){
    $("#star1").addClass("text-warning")
});

$("#star2").hover(function(){
    $("#star1").addClass("text-warning")
    $("#star2").addClass("text-warning")
});

$("#star3").hover(function(){
    $("#star1").addClass("text-warning")
    $("#star2").addClass("text-warning")
    $("#star3").addClass("text-warning")
});

$("#star4").hover(function(){
    $("#star1").addClass("text-warning")
    $("#star2").addClass("text-warning")
    $("#star3").addClass("text-warning")
    $("#star4").addClass("text-warning")
});

$("#star5").hover(function(){
    $("#star1").addClass("text-warning")
    $("#star2").addClass("text-warning")
    $("#star3").addClass("text-warning")
    $("#star4").addClass("text-warning")
    $("#star5").addClass("text-warning")
});

$("#star1").mouseleave(function(){
    $("#star1").removeClass("text-warning")
});

$("#star2").mouseleave(function(){
    $("#star1").removeClass("text-warning")
    $("#star2").removeClass("text-warning")
});

$("#star3").mouseleave(function(){
    $("#star1").removeClass("text-warning")
    $("#star2").removeClass("text-warning")
    $("#star3").removeClass("text-warning")
});

$("#star4").mouseleave(function(){
    $("#star1").removeClass("text-warning")
    $("#star2").removeClass("text-warning")
    $("#star3").removeClass("text-warning")
    $("#star4").removeClass("text-warning")
});

$("#star5").mouseleave(function(){
    $("#star1").removeClass("text-warning")
    $("#star2").removeClass("text-warning")
    $("#star3").removeClass("text-warning")
    $("#star4").removeClass("text-warning")
    $("#star5").removeClass("text-warning")
});

$("#star5").click(function(){
    $("#star1").css("color", "RGB(255, 193, 7)")
    $("#star2").css("color", "RGB(255, 193, 7)")
    $("#star3").css("color", "RGB(255, 193, 7)")
    $("#star4").css("color", "RGB(255, 193, 7)")
    $("#star5").css("color", "RGB(255, 193, 7)")
});

$("#star4").click(function(){
    $("#star1").css("color", "RGB(255, 193, 7)")
    $("#star2").css("color", "RGB(255, 193, 7)")
    $("#star3").css("color", "RGB(255, 193, 7)")
    $("#star4").css("color", "RGB(255, 193, 7)")
    $("#star5").css("color", "RGB(128, 128, 128)")
});

$("#star3").click(function(){
    $("#star1").css("color", "RGB(255, 193, 7)")
    $("#star2").css("color", "RGB(255, 193, 7)")
    $("#star3").css("color", "RGB(255, 193, 7)")
    $("#star4").css("color", "RGB(128, 128, 128)")
    $("#star5").css("color", "RGB(128, 128, 128)")
});

$("#star2").click(function(){
    $("#star1").css("color", "RGB(255, 193, 7)")
    $("#star2").css("color", "RGB(255, 193, 7)")
    $("#star3").css("color", "RGB(128, 128, 128)")
    $("#star4").css("color", "RGB(128, 128, 128)")
    $("#star5").css("color", "RGB(128, 128, 128)")
});

$("#star1").click(function(){
    $("#star1").css("color", "RGB(255, 193, 7)")
    $("#star2").css("color", "RGB(128, 128, 128)")
    $("#star3").css("color", "RGB(128, 128, 128)")
    $("#star4").css("color", "RGB(128, 128, 128)")
    $("#star5").css("color", "RGB(128, 128, 128)")
});

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
