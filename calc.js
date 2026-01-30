function displayvalue(num){
    document.getElementById('display').value=document.getElementById('display').value+num;
}
function clearDisplay(){
    document.getElementById('display').value="";
}
function onClick(){
   var userinput = document.getElementById('display').value;
   var result=eval(userinput); 
   document.getElementById('display').value=result;
}