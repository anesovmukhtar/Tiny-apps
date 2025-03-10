const display = document.querySelector(`#display`);

function append(value){
    display.value += value;
}

function pop(){
        let len = display.value.length;
        if(len===0 || display.value === "Error"){
            display.value = "";
        }
        else{
            display.value = display.value.slice(0, len-1);
        }
    }
function clearAll(){
        display.value = "";
    
}

function tokenize(expr) {
        return expr.match(/√?\d+(\.\d+)?%?|[+\-*/()]/g) || [];
    }

    function calculate(expression) {
        let tokens = tokenize(expression);
        let index = 0;

        function parseExpression() {
            let value = parseTerm();
            while (index < tokens.length && (tokens[index] === "+" || tokens[index] === "-")) {
                let operator = tokens[index++];
                let nextValue = parseTerm();
                value = operator === "+" ? value + nextValue : value - nextValue;
            }
            return value;
        }

        function parseTerm() {
            let value = parseFactor();
            while (index < tokens.length && (tokens[index] === "*" || tokens[index] === "/")) {
                let operator = tokens[index++];
                let nextValue = parseFactor();
                value = operator === "*" ? value * nextValue : value / nextValue;
            }
            return value;
        }

        function parseFactor() {
            let token = tokens[index++];

            if (token.endsWith("%")) {
                return parseFloat(token) / 100;
            }
            
            if(token.startsWith("√")) {
                return Math.sqrt(parseFloat(token.slice(1)));
            }

            if(!isNaN(token)) {
                return parseFloat(token);
            }

            if(token === "(") {
                let value = parseExpression();
                index++; // Skip closing ")"
                return value;
            }

            throw new Error("Unexpected token: " + token);
        }

        return parseExpression();
    }

    function calculateResult() {
        let expression = document.querySelector("#display").value;
        try {
            let result = calculate(expression);
            display.value = result;
        } catch (error) {
            display.value = "Error";
        }
    }

