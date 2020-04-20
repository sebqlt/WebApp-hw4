var size=30

function myFunction(){
    var result=document.getElementById("result");
    var resultStyle=getComputedStyle(result)
    result.innerHTML="<p>&#127880;</p>"
    document.addEventListener("keypress", e => {
        if(String.fromCharCode(e.charCode)==="i"||String.fromCharCode(e.charCode)==="I"){ 
            size=size+10
            result.style.fontSize=size+"px"
            if(size>=70){
                result.innerHTML="<p>&#128165;</p>"
            }
            else{
            result.innerHTML="<p>&#127880;</p>"
            }
        }
        if(String.fromCharCode(e.charCode)==="d"||String.fromCharCode(e.charCode)==="D"){ 
            size=size-10
            result.style.fontSize=size+"px"
            if(size===0){
                result.style.fontSize="30px"
                result.innerHTML="<p>Done</p>"
            }
            else{
            result.innerHTML="<p>&#127880;</p>"
            }
        }
      });
}