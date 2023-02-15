function generatePin(){
    let pin=makePin();
    pin=pin+"";
    const length=pin.length;
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

//submit button event here
document.getElementById("submit").addEventListener("click",function(){
    let count=0;
    const pin=document.getElementById("pin").value;
    const userGivenPin=document.getElementById("matchpin").value;
    if(pin == userGivenPin){
        document.getElementById("match").style.display="block";
        document.getElementById("unmatch").style.display="none";
        document.getElementById("try").innerText="3";
    }
    else{
        count++;
        let tryLeft= document.getElementById("try").innerText;
        tryLeft=parseInt(tryLeft);
        tryLeft=tryLeft-count;
        document.getElementById("try").innerText=tryLeft
        if(tryLeft==0){
            document.getElementById("submit").setAttribute("disabled",true)
        }
        document.getElementById("unmatch").style.display="block";
        document.getElementById("match").style.display="none";
    }
})