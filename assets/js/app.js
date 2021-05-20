const button = document.querySelector("#changeColor");
const container = document.querySelector("#container-palett");
const contextColor = document.querySelector(".color");
const colors = {
    1: "#ffffff",
    2: "#cf0000",
    3: "#04009a",
    4: "#f7fd04",
    5: "#e93b81",
    6: "#f9b208",
    7: "#ffe5e2",
    8: "#e4efe7",
    9: "#064420",
    10: "#a9f1df",
    11: "#f55c47",
    12: "#564a4a",
    13: "#939b62",
    14: "#542e71",
    15: "#fdca40",
    16: "#5aa897",
    17: "#81b214",
    18: "#bdd2b6",
    19: "#ddffbc",
    20: "#5eaaa8",
    21: "#289672",
    22: "#eac8af",
    23: "#151515",
    24: "#d8f8b7",
    25: "#f7f3e9",
    26: "#fff9b0",
    27: "#b68973",
    28: "#845ec2",
    29: "#d6efc7",
    30: "#6f9eaf",
}

function getNumbersId(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function setBackgroundColor() {
    const idColor = getNumbersId(1, 30)
    container.style.backgroundColor = colors[idColor]
    contextColor.textContent = colors[idColor]
    contextColor.style.color = colors[idColor]
}

button.addEventListener('click', setBackgroundColor)