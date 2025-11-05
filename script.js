const button = document.querySelectorAll(".box");
const display = document.querySelector("#display-box");

let currentInput = "";
let operator = "";
let firstNumber = "";
let secondNumber = "";

button.forEach((box) => {
    console.log(box);
    box.addEventListener("click",() =>{
        const value = box.textContent.trim();
        
        if(!isNaN(value))
        {
            currentInput += value;
            display.value = currentInput;
        }

        else if(["+" , "-" , "*" , "/"].includes(value))
        {
            if(currentInput === "") return;
            firstNumber = currentInput;
            operator = value ;
            display.value = operator;
            currentInput = "";
        }

        else if(value === "=")
        {
            if(firstNumber === "" || currentInput === "") return;
            secondNumber = currentInput;

            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);
            let result;

            switch(operator)
            {
                case "+" : result = num1 + num2; break;
                case "-" : result = num1 - num2; break;
                case "*" : result = num1 * num2; break;
                case "/" : if(num2 != 0) {result = num1 / num2;} break;
                default:return;
            }

            display.value = result;
            currentInput = result.toString();
            operator = "";
        }

        // if (box.querySelector(".fa-delete-left")) 
        // {
        //     value = "DEL";
        // }

        // else if (value === "DEL") {
        //     currentInput = currentInput.slice(0, -1);
        //     display.value = currentInput || "0";
        // }

        else if (value === "C") {
            currentInput = "";
            firstNumber = "";
            operator = "";
            display.value = "0";
        }
    });
});