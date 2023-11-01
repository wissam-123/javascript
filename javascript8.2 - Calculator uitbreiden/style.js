 function calculate(operation) {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);

            if (num1 > 0 && num2 > 0) {
                let result = 0;

                if (operation === 'multiply') {
                    result = num1 * num2;
                } else if (operation === 'divide') {
                    result = num1 / num2;
                } else if (operation === 'add') {
                    result = num1 + num2;
                } else if (operation === 'subtract') {
                    result = num1 - num2;
                }

                document.getElementById("result").textContent = "Antwoord: " + result;
            } else {
                document.getElementById("result").textContent = "Het getal is te laag";
            
            }
        }