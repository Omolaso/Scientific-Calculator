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
                inputDisplay.innerText = `${display.innerText} * 100`;
                display.innerText = `${display.innerText}` * 100
                break;

            case '÷':
                // inputDisplay.innerText = '';
                display.innerText = `${display.innerText}/ `
                break;

            case '←':
                inputDisplay.innerText = '';
                display.innerText = display.innerText.slice(0, -1);
                break;

            case '√':
                inputDisplay.innerText = `√(${display.innerText})`;
                display.innerText = Math.sqrt(display.innerText);
                break;

            case '3√':
                inputDisplay.innerText = `3√(${display.innerText})`;
                display.innerText = Math.cbrt(display.innerText);
                break;

            case 'π':
                inputDisplay.innerText = `π ${display.innerText}`
                break;

            case 'log':
                // display.innerText = Math.sqrt(display.innerText);
                break;

            case '=':
                
                if(display.innerText === ''){
                    return
                }else if(display.innerText === 'SYNTAX ERROR' || display.innerText === 'NaN'){
                    inputDisplay.innerText = '';
    
                }

                inputDisplay.innerText += display.innerText;
                inputDisplay.style.fontSize = '15px';
                display.style.fontSize = '30px';
                try {
                    display.innerText = eval(display.innerText)
                } catch (error) {
                    display.innerText = 'SYNTAX ERROR'
                }

                // if(inputDisplay.innerText !== ''){
                //     inputDisplay.innerText += e.target.innerText;
                //     inputDisplay.innerText += display.innerText;
                // }
                break;

            default: 
                display.innerText += e.target.innerText;
                // inputDisplay.innerText === display.value
        }
        
        
    });
});

// function inputDisplayOnce(){
//     onclick(console.log('hi'))
// }