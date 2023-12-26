$("document").ready(function(){
    if (JSON.parse(localStorage.getItem("conta_ativa"))== "admin"){
        $(".navbar-nav").html($(".navbar-nav").html() +`<a class="nav-link" href="pedidosconta.html">Aprovação de parceiros</a>`)
        $("a[href='membro.html']").text("Aprovar Produto")
        $("a[href='membro.html']").attr("href", "aproveproduct.html")
    }
    else if (JSON.parse(localStorage.getItem("conta_ativa")) != null){
        $("a[href='membro.html']").text("Adicionar Produto")
        $("a[href='membro.html']").attr("href", "addproduct.html")
    }
    if (JSON.parse(localStorage.getItem("conta_ativa"))!= null){
        $("a[href='login.html']").text("Terminar sessão")
        $("a[href='login.html']").attr("href", "terminar.html")
    }
})