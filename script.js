let input = document.querySelector('.input');
let buttons = document.querySelectorAll('.button');
let string = "";

let arr = Array.from(buttons);
arr.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "Enter"){
            string = parseFloat(eval(string).toFixed(3));
            input.value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == "del"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == "√"){
            string = Math.sqrt(string);
            input.value = string;
        }
        else if(e.target.innerHTML == "π"){
            string = Math.PI;
            input.value = string;
        }
        else{
        string += e.target.innerHTML;
        input.value = string;
        }
    });
});