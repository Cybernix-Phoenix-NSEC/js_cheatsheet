function showSolution(e) {
    e.preventDefault();

    var displayElement = document.getElementById('show');
    displayElement.innerHTML = "";

    var num1 = parseInt(e.target.num1.value) ;
    var operator = e.target.operator.value;
    var num2 = parseInt(e.target.num2.value);

    var result;

    if (operator == '+') {
        
        result = num1 + num2;
        var textNode = document.createTextNode(result);

        displayElement.appendChild(textNode);

        console.log(result);


    }
    else if (operator == '-') {

    
    }
    else if (operator == '*') {
        
    }
    else if (operator == '/') {
        
    }
    else {
        alert("Wrong Operator input");
    }
}


const formElement = document.getElementById('form');
formElement.addEventListener('submit', showSolution);
