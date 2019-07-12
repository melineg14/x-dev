let pages = [
    "home",
    "apropos",
    "competences",
    "services",
    "devis",
    "contact"
]

function changePage(pageEnCours){
    
    $("#content").load(pageEnCours+".html");
    for(let page of pages){
        $("#"+page).removeClass("actif");
    }
    $("#"+pageEnCours).addClass("actif");
}
