let count = 1;

let stickmebutton = document.getElementById("stickmebutton");
let stickmeimage = document.getElementById("stickmeimage")

function stickMeImageReveal() {
    if (count % 2 === 0) {
        stickmeimage.style.visibility = "hidden"
        stickmebutton.innerHTML = "reveal me"
        count++
    } else {
        stickmeimage.style.visibility = "visible"
        count++
        stickmebutton.innerHTML = "hide me"
    }
}

stickmebutton.addEventListener("click", stickMeImageReveal);