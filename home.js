
// Age caluclator
function getAge(){
   let year= prompt("What is birth year?");
    let result=2021-year;
   document.getElementById('result').innerHTML='Your current age is: '+result;
}
function removeAge(){
    console.log('remove function is called');
    document.getElementById('result').remove();
}

// Cat
function addCat(){
    let image= document.createElement('img');
    let div= document.getElementById('cat');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=50";
    div.appendChild(image);
}
//Rock Paper Scissor
function getWinner(imageInfo){
    let myChoice=imageInfo.id;
    let machineChoice=getRandom();
    let rockSrc=document.getElementById('rock').src;
    let paperSrc=document.getElementById('paper').src;
    let scissorSrc=document.getElementById('scissor').src;
    
    let winner= findWinner(myChoice,machineChoice);
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var myDiv=document.createElement('div');
    var messageDiv=document.createElement('div');
    var machineDiv=document.createElement('div');
   

    myDiv.innerHTML="<img src='"+imageInfo.src+"' height=200 width=200 style='box-shadow: 0px 10px 50px rgba(37, 50, 233,1)'>";
    messageDiv.innerHTML="<h1 style='color:"+winner.color+"';>"+winner.message+"</h1>";
    machineDiv.innerHTML="<img src='"+getImgSrc(rockSrc,paperSrc,scissorSrc,machineChoice)+"' height=200 width=200 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>";
    
document.getElementById('flex').appendChild(myDiv);
document.getElementById('flex').appendChild(messageDiv);
document.getElementById('flex').appendChild(machineDiv);
}

function getImgSrc(rockSrc,paperSrc,scissorSrc,machineChoice){
    switch(machineChoice){
        case 'rock': return rockSrc;
        case 'paper': return paperSrc;
        case 'scissor': return scissorSrc;
    }
}

function findWinner(myChoice,machineChoice){
  switch(myChoice){
        case 'rock':
          if(machineChoice=='rock'){
              return {message : 'Tied!', color:'yellow'};
          }else if(machineChoice=='paper'){
              return {message : 'You lost!', color:'red'};
          }else{
              return {message : 'You won!', color:'green'};
          }
        case 'paper':
            if(machineChoice=='rock'){
                return {message : 'You won!', color:'green'};
            }else if(machineChoice=='paper'){
                return {message : 'Tied!', color:'yellow'};
            }else{
                return {message : 'You lost!', color:'red'};
            }
        case 'scissor':
            if(machineChoice=='rock'){
                return {message : 'You lost!', color:'red'};
            }else if(machineChoice=='paper'){
                return {message : 'You won!', color:'green'};
            }else{
                return {message : 'Tied!', color:'yellow'};
            }
  }
}
function getRandom(){
    let random=Math.floor(Math.random() * 3);
    switch(random){
        case 0 :
            return 'rock';
        case 1 :
            return 'paper';
        case 2 :
            return 'scissor';
    }
}

// Change color of all buttons
let allButtons = document.getElementsByTagName('button');

let copyAllButtons= [];
for(let i=0;i<allButtons.length;i++){
    copyAllButtons.push(allButtons[i].classList[1]);
}
function changeColor(getColor){
    let color=getColor.value;

    if(color === "red"){
        changeToRed();
    }else if(color === "blue"){
        changeToBlue();
    }else if(color==="green"){
        changeToGreen();
    }else if(color === "random"){
        changeToRandom();
    } else{
        resetButtons();
    }
   
}

function changeToRed(){
    for(let i=0;i<allButtons.length;i++){
       allButtons[i].classList.remove(allButtons[i].classList[1]);
       allButtons[i].classList.add('btn-danger');
    }
}

function changeToBlue(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-primary');
    }
}
function changeToGreen(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}
function resetButtons(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function getRandomColor(){
    let random=Math.floor(Math.random()*4);
    switch(random){
        case 0:
            return 'btn-danger';
        case 1:
            return 'btn-primary';
        case 2:
            return 'btn-success';
        case 3:
            return 'btn-warning';
    }
}
function changeToRandom(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(getRandomColor());
    }
}