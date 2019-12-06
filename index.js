function start() {
    console.log("Comenzar")
    document.getElementById("btn").remove()
    document.getElementById("titleLabel").setAttribute("id", "number")

    document.getElementById("config").remove()
    updateClock(3)
}


function updateClock(n) {

    document.getElementById('number').textContent = n;
    if (n == 0) {
        document.getElementById('number').textContent = "";
        startGame();
    } else {
        n -= 1;
        console.log(`updateClock(${n})`)
        setTimeout(`updateClock(${n})`, 1000);
    }

}

function startGame() {
    window.open("tasks.html", "_self")

}