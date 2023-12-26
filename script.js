$("document").ready(function(){
    if (JSON.parse(localStorage.getItem("conta_ativa"))== "admin"){
        $(".navbar-nav").html($(".navbar-nav").html() +`<a class="nav-link" href="pedidosconta.html">Aprovação de parceiros</a>`)
    }
    if (JSON.parse(localStorage.getItem("conta_ativa")) != null){
        $("a[href='login.html']").text("Terminar sessão")
        $("a[href='login.html']").attr("href", "terminar.html")
    }
})