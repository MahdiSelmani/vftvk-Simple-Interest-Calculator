function compute() {
    
    ratevalue = document.getElementById("ratevalue");
    amount = document.getElementById("amount").value;
    years = document.getElementById("years").value;
    rate = document.getElementById("rate").value;
    result = document.getElementById("value");
    var interest = 0;
    var year = parseInt(years) + parseInt(2020);
    interest = (amount * years * rate)/100;
    if (amount <= 0) { alert('Enter a positive number') } 
    else {    result.innerHTML = "If you deposit <mark>"+ amount +"</mark>, <br> at an interest of <mark>" + rate + "%</mark>.<br> You will receive an amount of <mark>" + interest + "</mark>,<br> in the year <mark>" + year +"</mark>";
}
}
function showVal(rate) {
    ratevalue.innerText = rate+"%";
}

