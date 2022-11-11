const clickable = document.querySelectorAll(".flex div")
const output = document.querySelector("#output");
const clearAll = document.querySelector("#clear-all")

eventListener();


function getDefault(){
    output.textContent = "0";
    clearAll.textContent = "AC";
}
function eventListener(){
    clickable.forEach(function(element){
       element.addEventListener("click",function(e){
        switch(e.target.textContent){
            case "AC":
                getDefault();
                break;
            case "C":
                getDefault();
                break;
            case "=":
               try{
                output.textContent = eval(output.textContent);
               }
               catch{
                alert("This operation doesn't exist");
                getDefault();
               }
                break;
            case "×":
                if(output.textContent.length ==1){
                    getDefault();
                }
                else{
                    output.textContent = output.textContent.slice(0,-1);
                }
                break;
            default:
                if(output.textContent === "0"){
                    output.textContent = e.target.textContent;
                    clearAll.textContent = "C";
                }
                else{
                    output.textContent +=e.target.textContent;
                }
        }
       })
    })
}
