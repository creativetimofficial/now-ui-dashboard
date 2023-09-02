document.getElementById("noticias").onload = function() {appendli()};

function appendli() {
    const comment = 2;
    while (comment > 0) {
        var li = document.getElementById("noticias");
        li.innerHTML += `<li class='mt-2'>Nuevo Comentario</li><hr>`; 
        comment = comment - 1;
    }
}
