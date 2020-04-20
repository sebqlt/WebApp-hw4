function increase() {
    myBallon.style.fontsize=myBallon.style.fontsize+10;
    myFunction()
}
function myFunction(){
    var result=document.getElementById("result");
    var resultStyle=getComputedStyle(result)
    result.innerHTML="<p>&#127880;</p>"
    document.addEventListener("keypress", e => {
        if(String.fromCharCode(e.charCode)==="i"||String.fromCharCode(e.charCode)==="I"){
            if(resultStyle.fontSize==='10px'){
                result.style.fontSize="20px"
                result.innerHTML="<p>&#127880;</p>"
            }
            else if(resultStyle.fontSize==='20px'){
                result.style.fontSize="30px"
                result.innerHTML="<p>&#127880;</p>"
            }
            else if(resultStyle.fontSize==='30px'){
            result.style.fontSize="40px"
            result.innerHTML="<p>&#127880;</p>"
            }
            else if(resultStyle.fontSize==='40px'){
                result.style.fontSize="50px"
                result.innerHTML="<p>&#127880;</p>"
            }
            else if(resultStyle.fontSize==='50px'){
                result.style.fontSize="60px"
                result.innerHTML="<p>&#127880;</p>"
            }
            else if(resultStyle.fontSize==='60px'){
                result.style.fontSize="70px"
                result.innerHTML="<p>&#128165;</p>"
                document.removeEventListener("keypress",e);
            }
        }
        if(String.fromCharCode(e.charCode)==="d"||String.fromCharCode(e.charCode)==="D"){
            if(resultStyle.fontSize==='10px'){
                result.style.fontSize="20px"
                result.innerHTML="<p>Done</p>"
            }
            else if(resultStyle.fontSize==='20px'){
                result.style.fontSize="10px"
                result.innerHTML="<p>&#127880;</p>"
            }
            else if(resultStyle.fontSize==='30px'){
            result.style.fontSize="20px"
            result.innerHTML="<p>&#127880;</p>"
            }
            else if(resultStyle.fontSize==='40px'){
                result.style.fontSize="30px"
                result.innerHTML="<p>&#127880;</p>"
            }
            else if(resultStyle.fontSize==='50px'){
                result.style.fontSize="40px"
                result.innerHTML="<p>&#127880;</p>"
            }
            else if(resultStyle.fontSize==='60px'){
                result.style.fontSize="50px"
                result.innerHTML="<p>&#127880;</p>"
            }
            else if(resultStyle.fontSize==='70px'){
                result.style.fontSize="60px"
                result.innerHTML="<p>&#127880;</p>"
            }
        } 
      });
}