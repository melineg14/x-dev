let pages = [
    "home",
    "apropos",
    "competences",
    "devis",
    "contact"
]

function changePage(pageEnCours){
    if(pageEnCours != "home"){
        $("footer").removeClass("absolute")
        $("footer").addClass("relative")
    }

    else{ // for home
        $("footer").addClass("absolute")
        $("footer").removeClass("relative")
    }

    console.log("lel");
    
    console.log($("body"));
    console.log($("footer"));
    

    $("#content").load("html/"+pageEnCours+".html");
    for(let page of pages){
        $("#"+page).removeClass("actif");
    }
    $("#"+pageEnCours).addClass("actif");
}

