const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('button'));
// console.log(button);

buttons.map((button) => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = ''
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '√':
                display.innerText = Math.sqrt(display.innerText);
                break;
            case 'log':
                display.innerText = Math.sqrt(display.innerText);
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText)
                } catch (error) {
                    display.innerText = 'SYNTAX ERROR'
                }
                break;
            default: 
                display.innerText += e.target.innerText
        }
    })
})