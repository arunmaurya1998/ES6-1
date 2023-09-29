let display = document.getElementById("time")
let button = document.getElementById("button1")
let timer ;
let count = 0;
let counting = 0;


const counter = () =>{
    count++
    display.innerText = count 
}
const start =() =>{
       
   timer = setInterval(counter,1000);
   button.innerText = "Stop"
}
const stop = () =>{
      clearInterval(timer); 
      button.innerText = "Start"
}

// for automatic work

const countStart = () =>{
   
    if(counting == 0){
     // console.log("hii") for check this function
        start()
        counting = 1;
    }else{
     stop();
     counting = 0;
     // console.log("HHH") fot check this function
    }
}

// for reset
const reset = ()=>{
    clearInterval(timer);
    timer = null;
    count = 0;
    counting = 0;
     display.innerText = "0"
     button.innerText = "Start"
     
}

// manual work
const increment = () =>{
     stop();
     count++
     display.innerText = count 
}
const decrement = () =>{
     stop();
     count--
     display.innerText = count
}
