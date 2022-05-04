function calculateTip(){
    var billAmount = document.getElementById('billAmount').value;
    var people = document.getElementById('people').value;
    var serviceQA = document.getElementById('serviceQA').value;

    if(billAmount==="" || serviceQA==0){
        window.alert("Please Enter some values to get results.");
        return;
    }
    if(people=="" || people <=1){
        people=1;
        document.getElementById('each').style.display="none;"
    }else {
        document.getElementById('each').style.display="block;"
    }
    var total = billAmount*serviceQA/people;
    total = Math.round(total*100)/100;
    total = total.toFixed(2);

    document.getElementById('totalTip').style.display='block;'
    document.getElementById('tip').innerHTML=total;
}
document.getElementById('totalTip').style.display='none;'
document.getElementById('each').style.display="none;"

document.getElementById('calculate').onclick=function(){
    calculateTip();
}
