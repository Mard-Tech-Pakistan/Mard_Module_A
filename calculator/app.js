var input = document.getElementById("inp")

function getValue(x) {
    input.value += x
}

function equalValue() {
    input.value = eval(input.value)
}

function clrAll() {
    input.value = ""
}