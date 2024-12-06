function appendToDisplay(value) {

    document.getElementById('result').value += value;

}
function calculateResult() {

    if (document.getElementById('result').value == '') {

        document.getElementById('result').value = '';
    }

    else {

        try {

            document.getElementById('result').value = eval(document.getElementById('result').value);

        } catch (error) {
            
            document.getElementById('result').value = 'Error'
        }

     }

}
function clearInput() {

    document.getElementById('result').value = ''; 

}

function backspace(){
    
    document.getElementById('result').value = (document.getElementById('result').value).slice(0,-1);

}