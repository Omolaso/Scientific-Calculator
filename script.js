const display = document.getElementById('answer-display');
const inputDisplay = document.getElementById('input-display');
const buttons = Array.from(document.getElementsByClassName('button'));
// console.log(button);

buttons.map((button) => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                inputDisplay.innerText = '';
                display.innerText = ''
                break;

            case '%':
                if(display.innerText === ''){
                    return
                }else{
                    inputDisplay.innerText = `${display.innerText} * 100`;
                    display.innerText = `${display.innerText}` * 100
                }
                break;

            case '÷':
                display.innerText = `${display.innerText}/`
                break;

            case 'X':
                display.innerText = `${display.innerText}* `
                break;

            case '←':
                inputDisplay.innerText = '';
                display.innerText = display.innerText.slice(0, -1);
                break;

            case '√':
                if(display.innerText === ''){
                    return
                }else{
                    inputDisplay.innerText = `√(${display.innerText})`;
                    display.innerText = Math.sqrt(display.innerText);
                }
                break;

            case '3√':
                if(display.innerText === ''){
                    return
                }else{
                    inputDisplay.innerText = `3√(${display.innerText})`;
                    display.innerText = Math.cbrt(display.innerText);
                }
                break;

            case 'x2':
                if(display.innerText === ''){
                    return
                }else{
                    inputDisplay.innerText = `${display.innerText} * ${display.innerText}` ;
                    display.innerText = Math.pow(`${display.innerText}`, 2);
                }
                break;

            case 'π':
                if(display.innerText === ''){
                    return inputDisplay.innerText = 3.14159265359
                }else{
                    inputDisplay.innerText = `${display.innerText}(22/7)` ;
                    display.innerText = 22/7 * `${display.innerText}`;
                }
                break;

            case 'log':
                if(display.innerText === ''){
                    return
                }else{
                    inputDisplay.innerText = `Log(${display.innerText})` ;
                    display.innerText = Math.log10(`${display.innerText}`);
                }
                break;

            case 'sin':
                if(display.innerText === ''){
                    return
                }else{
                    inputDisplay.innerText = `sin(${display.innerText}) rad` ;
                    display.innerText = Math.sin(`${display.innerText}`);
                }
                break;

            case 'cos':
                if(display.innerText === ''){
                    return
                }else{
                    inputDisplay.innerText = `cos(${display.innerText}) rad` ;
                    display.innerText = Math.cos(`${display.innerText}`);
                }
                break;

            case 'tan':
                if(display.innerText === ''){
                    return
                }else{
                    inputDisplay.innerText = `tan(${display.innerText}) rad` ;
                    display.innerText = Math.tan(`${display.innerText}`);
                }
                break;

            case '=':

                // prevents 'undefined'
                if(display.innerText === ''){
                    return
                }else if(display.innerText === 'SYNTAX ERROR' || display.innerText === 'NaN'){
                    inputDisplay.innerText = '';
                }
                // prevents 'undefined'

                inputDisplay.innerText += display.innerText;
                inputDisplay.style.fontSize = '15px';
                display.style.fontSize = '30px';
                try {
                    display.innerText = eval(display.innerText)
                } catch (error) {
                    display.innerText = 'SYNTAX ERROR'
                }

                // if(inputDisplay !== ''){
                //     inputDisplay.innerText = '';
                //     inputDisplay.innerText += display.innerText
                //     display.innerText = '';
                // }
                break;

            default: 
                display.innerText += e.target.innerText;
                inputDisplay.innerText = ''              
            }
        
        
    });
});



// function toDegrees(angle){
//     return angle * (180 / Math.PI);
//   }

//   console.log(toDegrees(0.146));