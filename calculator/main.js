Let checkbox = document.querySelector('input[name="theme"]');
checkbox.addEventListener('change',function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme','dark');

    }
else{
    document.documentElement.setAttribute('data-theme', 'light');
}
});
function getHistory(){
    return document.querySelector('.upper-value').innerHTML;

}
function printHistory(num){
    document.querySelector('.upper-value').innerHTML = num;

}
function getOutput(){
    return document.querySelector('.lower-value').innerHTML;

}
function printOutput(num){
    if(num=""){
        document.querySelector('.lower-value').innerHTML = num;

    }
    else{
        document.querySelector('.lower-value').innerHTML = getFormattdNimber(num);

    }
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    Let n = Number(num);
    Let value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

Let operator = document.getElementsByClassName("operator");
for(Let i = 0; i < operator.lengthnewFunction(); i++){
    operator[i].addEventListener('click',function(){
        if(this.id == "clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id == "backspace"){
            Let output = reverseNumberFormat(getOutput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
                printOutput(output);
            }

        }
        else{
            Let output =  getOutput();
            Let history = grtHistory();
            if(output == "" && history != ""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.lenght-1);
                }
            }
            if(output != "" || history !=""){
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output;
                if(this.id == "="){
                    Let result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else if(this.id == "%"){
                    Let n = reverseNumberFormat(getOutput());
                    Let percent = n/100;
                    printOutput(percent.toFixed(4));
                }
                else{
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }

    })
}
Let  number = document.getElementsByClassName('number');
for(Let i=0; i<number.length; i++){
    number[i].addEventListener('click',function(){
        Let output = reverseNumberFormat(getOutput());
        if(output !=NaN){
            output = output + this.id;
            printOutput(output);
        }
    })
}

function newFunction() {
    ;
}
