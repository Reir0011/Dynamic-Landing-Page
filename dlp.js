// DOM Element

const time=document.getElementById('time');
const name=document.getElementById('name');
const greeting=document.getElementById('greeting');
const focus=document.getElementById('focus');

//Show Time
function showTime(){
    let today=new Date(),
     hour=today.getHours(),
      min=today.getMinutes(),
      sec=today.getSeconds();

      // Set AM or PM
      const amPM=hour >=12 ? 'PM' : 'AM';

      // !12hr Format
      hour=hour % 12 || 12;

      // Output Time
      time.innerHTML= `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPM}`;

      setInterval(showTime,1000);
}

function addZero(n){
    return (parseInt(n,10) < 10 ? '0' : '') + n;
}
// Set background and greeting
function setBgGreet(){
    let today=new Date(),
     hour=today.getHours();


     if(hour<12){
         // Morning
           document.body.style.backgroundImage="url('../picz/morning.jpg')";
           greeting.innerHTML='Good Morning';
     }else if(hour<18){
         // Afternoon
         document.body.style.backgroundImage="url('../picz/afternoon.jpg')";
         greeting.innerHTML='Good Afernoon';


     }else{
         // Evening
         document.body.style.backgroundImage="url('../picz/night.jpg')";
         greeting.innerHTML='Good Evening';
         document.body.style.color='white';
     }
}


// Get Name
function getName(){
    if(localStorage.getItem('name')===null){
        name.textContent='[Enter Name]';
    }else{
        name.textContent=localStorage.getItem('name');
    }
}

//Set Name
function setName(e){
    if(e.type==='keypress'){
        // Make sure enter is click
        if(e.which==13 || e.keyCode==13){
            localStorage.setItem('name',e.target.innerText);
            name.blur();

        }

        
    }else{
        localStorage.setItem('name',e.target.innerText);
    }
}

//Set Name
function setFocus(e){
    if(e.type==='keypress'){
        // Make sure enter is click
        if(e.which==13 || e.keyCode==13){
            localStorage.setItem('focus',e.target.innerText);
           
            
            focus.blur();

        }

        
    }else{
        localStorage.setItem('focus',e.target.innerText);
       
    }
}


// Get Focus
function getFocus(){
    if(localStorage.getItem('focus')===null){
        focus.textContent='[Enter Focus]';
        

    }else{
        focus.textContent=localStorage.getItem('focus');
        
    }
}

name.addEventListener('keypress' ,setName);
name.addEventListener('blur' ,setName);

focus.addEventListener('keypress' ,setFocus);
focus.addEventListener('blur' ,setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();