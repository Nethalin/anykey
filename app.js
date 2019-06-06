const keyp = document.getElementById('key');
const codep = document.getElementById('code');
const whichp = document.getElementById('which');


const keycode = () => {
    let key = event.keyCode;
    let code = event.code;
    let which = event.which; 
    console.log(key, code, which);
    keyp.innerHTML = key;
    codep.textContent = code;
    whichp.innerHTML = which;


}
document.addEventListener('keypress',keycode)