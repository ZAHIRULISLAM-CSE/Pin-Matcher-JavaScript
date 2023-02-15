function generatePin(){
    let pin=makePin();
    pin=pin+"";
    const length=pin.length;
    console.log(length);
    if(length==4){
        return pin;
    }
    else{
      return  generatePin();
    }
}
function makePin(){
    const secretPin=Math.floor(Math.random()*10000);
    return secretPin;
}
document.getElementById("generatepin").addEventListener("click",function(){
    const randomPin=generatePin();
     document.getElementById("pin").value=randomPin;
})

document.getElementById("digit-parent").addEventListener("click",function(event){
    const value=event.target.innerText;
    const pinShowField=document.getElementById("matchpin");
    if(value=="C"){
        pinShowField.value="";
    }
   else if(value=="<"){
        let value=pinShowField.value;
        value=value.split("");
        valueArray=value.pop();
        const split=value.join("");
        pinShowField.value=split;
    }
    else{
        pinShowField.value+=value;
    }
    
})