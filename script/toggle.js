document.getElementById("cashOut").style.display="none";
document.getElementById("add-money-box").addEventListener("click", 
    function(){
        document.getElementById("cashOut").style.display="none";
        document.getElementById("addmoney").style.display="block";


})
document.getElementById("cashout-box").addEventListener("click",  
function(){
    document.getElementById("cashOut").style.display="block";
    document.getElementById("addmoney").style.display="none";

})