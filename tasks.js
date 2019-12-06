let answer = "A"
let url = "prueba.jpeg"
let n_tasks = 20;
window.onload = init;

function init() {
    document.getElementById("image").setAttribute("src", url);
    document.getElementById("count").textContent = n_tasks;

    document.onkeyup = keyPress;
    //document.onkeypress = keyPress;

}

function keyPress(ev) {
    var evento = window.event || ev;
    if (evento.key == "ArrowUp" || evento.key == "ArrowLeft" || evento.key == "ArrowRight" || evento.key == "ArrowDown") {
        if ((evento.key == "ArrowUp" && answer == "B") ||
            (evento.key == "ArrowDown" && answer == "B") ||
            (evento.key == "ArrowLeft" && answer == "A") ||
            (evento.key == "ArrowRight" && answer == "C")
        ) {
            console.log("Respuesta CORRECTA")
        } else {
            console.log("Respuesta INCORRECTA")
        }

    } else
        console.log(">>>>>>tecla invalida")
}


function next() {
    if (n != 0) {
        this.answer = "B"
        this.url = "prueba2.jpeg"
        this.n_tasks -= 1;
        document.getElementById("image").setAttribute("src", this.url);
        document.getElementById("count").textContent = this.n_tasks;


    }
}