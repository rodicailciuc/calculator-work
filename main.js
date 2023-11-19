// Add your JavaScript here


function display(number) {
    var result = document.getElementById('result');
    result.value += number;
   
}
function calculate() {
    var result = document.getElementById('result').value;
    var y = eval(result);
    document.getElementById('result').value = y;
}

function clrs(){
    document.getElementById('result').value = "";
}

function dle() {
    result.value = result.value.slice(0,-1);
}
window.addEventListener('error', (e) => {
    alert('Error : '+ e.message)
})




