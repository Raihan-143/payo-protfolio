document.getElementById("cash-out").addEventListener("click", 
function(event){
    event.preventDefault();
    const amount=document.getElementById("amount").value;
        const convertAmount=parseFloat(amount);
        const pin=document.getElementById("Pin").value;
        const convertPin=parseInt(pin);
        const mainBalance=document.getElementById("main-balance").innerText;
        const convertBalance=parseFloat(mainBalance);
        if(convertPin===1234){
            const sum=convertBalance - convertAmount;
            document.getElementById("main-balance").innerText=sum;
        }else{
            console.log('Sorry! Your pin is incorrect');
        }

})