const result = document.querySelector(".umwickeln")
let count = 0

document.getElementsByTagName("button")[0].addEventListener("click", () => {
    console.log("add")
    let div = document.createElement("div")
    let text = document.createTextNode(count)
    div.style.transition =".5s linear"
    div.appendChild(text)
    if (count % 10 == 0) {
        div.classList.add("weiss")
    } else {
        div.classList.add("rechteck")
    }
    result.appendChild(div)
    count++
})
