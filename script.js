function inserirValor(num){
    document.form.display.value = document.form.display.value + num;
}

function equal(){
    if(document.form.display.value == ''){

    } else {
    document.form.display.value = eval(document.form.display.value)}
}

function apagarTudo(){
    document.form.display.value = ''
}

function apagar(){
    var display = document.form.display.value;
    document.form.display.value = display.substring(0, display.length  -1)
}