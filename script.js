function display(value){
    let val = document.getElementById("result").value += value
    
}

function clearScreen(){
    document.getElementById("result").value = "";
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}