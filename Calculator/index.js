let display = document.querySelector("#display");
let clear = document.querySelector("#clear");
let answer = document.querySelector("#ans");
let delet = document.querySelector("#del");
let operator = document.querySelector("#operator");


let btns = document.querySelectorAll(".btn")

let output = "";
addEventListener("keydown",(e) => {
    e.preventDefault();
})

for(let btn of btns){
    btn.addEventListener('click',(event) => {
        event.preventDefault();

        let num = btn.innerText;
        let cls = clear.innerText; 
        let del = delet.innerText; 
        let ans = answer.innerText; 


        if(num != cls && num != del && num != ans){
            if(output == 0){
                output = ""
            }
            output = output + num
        }

        if((num == 0 || num == '.' || num == '*' || num == "/" || num == '%' || num == "+" || num == "-" || num == "=" ) && output.length <=2){
            output = num;
        }

        if(num == del){
            output = output.slice(0,-1);
        }

        if(num == cls){
            output = "";
        }

        if(num == ans){
           
           try{
            output = eval(output);
           }
           catch(err){
            output = ""
           }
        }
        
        display.value = output ; 
    })
}




// let num = Number(btn.innerText);

//     if(Number.isInteger(num)){
//         console.log(num);
//     }

// console.log(display.innerText)
// console.log(clear.innerText)
// console.log(answer.innerText)
// console.log(delet.innerText)
// console.log(btns);