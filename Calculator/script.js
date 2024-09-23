let inp = document.querySelector('input');
let buttons = document.querySelectorAll('button');

for (const btn of buttons) {
    btn.addEventListener('click', (e) => {
        let text = e.target.innerText;

        if (text === 'C') {
            inp.value = '';
        } 
        else if (text === '=') {
            if (inp.value !== '') {
                inp.value = eval(inp.value);
            }
        } 
        else if (text === '<-') {
            inp.value = inp.value.slice(0, -1);
        } 
        else {
            inp.value += text;
        }
    });
}

