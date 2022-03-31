function getHistory(){
    return document.getElementById("histori-nilai").innerText;
}
function printHistory(num){
    document.getElementById("histori-nilai").innerText=num;
}
function getOutput(){
    return document.getElementById("output-nilai").innerText;
}
function printOutput(num){
    if(num==""){
    document.getElementById("output-nilai").innerText=num;
    }
    else{
        document.getElementById("output-nilai").innerText=getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n=Number(num);
    var value= n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g, ''));
}
var operator = document.getElementsByClassName("operator");
for( var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
            if(this.id=="all-clear"){
                printHistory("");
                printOutput("0");
            }
            else if(this.id=="backspace"){
                var
                output=reverseNumberFormat(getOutput()).toString();
                if(output >= 1){//if output has a value
                    output= output.substr(0,output.length-1);
                printOutput(output);
                }else{
                    printOutput("0");
                }
            }
            else{
                var output = getOutput();
                var history = getHistory();
                if(output==""&&history!=""){
                    if(isNaN(history[history.length-1])){
                        history=history.substr(0,history.length-1);
                    }
                }
                if(output!="" || history!=""){
                    output= output==""?
                    output:reverseNumberFormat(output);
                    history=history+output;
                    if(this.id=="="){
                        var result= eval(history);
                        printOutput(result);
                        printHistory(" ");
                    }
                    else{
                        history=history+this.id;
                        printHistory(history);
                        printOutput("");
                    }
                }
            }
    });
}
var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}