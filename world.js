const page=document.getElementById("input");

function display(num){
    page.value+=num;
}

function del(){
    page.value=page.value.slice(0,-1)
}
function calculate(){
    try{
        page.value=eval(page.value)
    }
    catch(err){
        alert("invailed number")
    }

}
function clear(){
    page.value="";
}