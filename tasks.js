// provicionalmente
let data_easy = [{
        url: "resources/prueba.jpeg",
        answer: "A",
    },
    {
        url: "resources/prueba2.jpeg",
        answer: "A",
    },
    {
        url: "resources/prueba3.jpeg",
        answer: "B",
    },
    {
        url: "resources/prueba11.jpeg",
        answer: "B",
    },
    {
        url: "resources/prueba5.jpeg",
        answer: "C",
    }
];
let data_hard = [{
        url: "resources/prueba6.jpeg",
        answer: "C",
    },
    {
        url: "resources/prueba7.jpeg",
        answer: "A",
    },
    {
        url: "resources/prueba8.jpeg",
        answer: "C",
    },
    {
        url: "resources/prueba9.jpeg",
        answer: "B",
    }
];
shuffleArray(data_easy)
shuffleArray(data_hard)


let timesToChange = 2 //parameter
let n_tasks = 20; //parameter
let secondsToChange = null; //parameter
let showResult = false; //parameter

let totalChanges = 0;

let i = 0 //number of easy tasks
let j = 0 // number of hard tasks


let answer = data_easy[i].answer
let url = data_easy[i].url

let startTime = new Date();
let level = "Easy"


window.onload = init;

function init() {
    console.log("Hora de inicio: " + startTime.getHours() + ":" + startTime.getMinutes() + ":" + startTime.getSeconds() + " " + startTime.getUTCMilliseconds())
    console.log("====================================")
    document.getElementById("image").setAttribute("src", url);
    document.getElementById("count").textContent = n_tasks;
    document.onkeyup = keyPress;
    if (secondsToChange != null) {
        level = "Hard"
    }

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
            if (showResult)
                changeImage(true)
        } else {
            console.log("Respuesta INCORRECTA")
            if (showResult)
                changeImage(false)
        }
        console.log("Fin de la tarea: " + evento.timeStamp)
        if (showResult == false)
            next();
    } else
        console.log(">>>>>>tecla invalida")

    console.log("Nivel: " + level)
    console.log("===================================")
}


function next() {
    document.getElementById("image").removeAttribute("class")

    if (n_tasks != 0) {
        // This code use the "timesToChange" parameter
        if (timesToChange != null) {
            if ((i + j) % timesToChange == 0 && (i + j) != 0) {
                changeLevel()

            }
        }
        // This code use the secondsToChange parametes
        if (secondsToChange != null) {
            date_curr = new Date()
            if (((date_curr.getTime() - startTime.getTime()) / 1000) > secondsToChange * totalChanges) {
                changeLevel()
                totalChanges += 1;
            }

        }
        if (level == "Easy") {
            i += 1
            url = data_easy[i].url
            answer = data_easy[i].answer
        } else if (level == "Hard") {
            j += 1
            url = data_easy[j].url
            answer = data_easy[j].answer
        }


        n_tasks = n_tasks - 1;

        document.getElementById("image").setAttribute("src", url);
        document.getElementById("count").textContent = n_tasks;


    }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function changeLevel() {
    if (level == "Easy") { level = "Hard" } else if (level == "Hard") { level = "Easy" }

}

function changeImage(correct) {
    if (correct == true) {
        document.getElementById("image").setAttribute("src", "correct.png");
        document.getElementById("image").setAttribute("class", "imageCorrect");

        setTimeout("next()", 2000);

    } else {
        document.getElementById("image").setAttribute("src", "error.png");
        document.getElementById("image").setAttribute("class", "imageError");
        setTimeout("next()", 2000);
    }


}