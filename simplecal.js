/* Define the variables */
const number = document.getElementsByClassName('number');
const operator = document.getElementsByClassName('operator');
/* Get History */

function History(){
    return document.getElementById('history-value').innerText;
}
/*Function to Display History on Screen*/
function displayHistory(num){
    document.getElementById('history-value').innerText = num;
}
/* Get Result */
function Output(){
    return document.getElementById('output-value').innerText;
}
/*Function to Display Result on Screen */
function displayOutput(num){
    document.getElementById('output-value').innerText = num;
}

for(var i=0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        var output = Output();
        if (output != NaN){
            if (this.id === '.' && output.includes('.')){
            this.id= ""  }
            output = output + this.id;
            console.log(output)
            displayOutput(output)
         
        }
    });
}

for(var i=0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        if (this.id == "clear"){
            displayHistory('');
            displayOutput('');              
        }

        else if (this.id == "backspace"){
             var output = Output().toString();
            //  var output = reversedNumber(Output()).toString();
            if (output){
            output =output.substr(0, output.length -1);
            displayOutput(output);         
        }
    }
        else if (this.id == "opposite") {
        var output = -(Output());
        // var output = (-reversedNumber(Output()));
                displayOutput(output);
    }
        else if (this.id == "%") {
        var output = Output()*0.01;
                displayOutput(output);
    }
        else{
            var output = Output();
            var history = History();
            if(output == '' && history != ''){
                if (isNaN(history[history.length-1])){
                    history = history.substr(0, history.length-1);
            }
        } 
            if (output != ''|| history!=""){
                output = output ==""?
                output : output;
                // output : reversedNumber(output);
                history = history + output;
                if (this.id == '='){
                    var result = eval(history);
                    if (result.toString().length > 14){
                        result = result.toString().substr(0,14);
                        displayOutput(result);
                        displayHistory('')
                    }
                    else{
                        displayOutput(result);
                        displayHistory('')
                    }
                }

                else{
                    history = history+ this.id;
                    displayHistory(history);
                    displayOutput('');
                }

            }
        }
    });
}