function color(){
   
    
        let a = Math.random()*100
        let b = Math.round(a)+120
        let c = Math.random()*100
        let d = Math.round(c)+120
        let e = Math.random()*100
        let f = Math.round(e)+120
        document.body.style.backgroundColor = 'rgb(' + b + ',' + d + ',' + f + ')';
        text = document.getElementById("title")

        text.innerText = "BACKGROUND COLOR:  RGB" + "(" + b +"," + d + "," + f  +  ")"
}
function apply(){
    num1 = document.getElementById("num1").value 
    num2 = document.getElementById("num2").value
    num3 = document.getElementById("num3").value
    text = document.getElementById("title") 
    document.body.style.backgroundColor = 'rgb(' + num1 + ',' + num2 + ',' + num3 + ')';
    text.innerText = "BACKGROUND COLOR:  RGB" + "(" + num1 +"," + num2 + "," + num3  +  ")"


}