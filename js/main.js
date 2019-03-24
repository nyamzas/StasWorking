function func(dateF){
    
    var values = ['День','Ночь','Отсыпной','Выходной']
    if(dateF > 5){
        dateF = dateF % 4;
        alert (values[dateF]);;
    } else if (dateF >= 4){
        dateF = dateF % 4;
        alert (values[dateF]);;
    }else{
        alert (values[dateF - 1]);;
    }
    var elem = document.getElementById("date");
    elem.innerHTML = values[dateF];
    
}

var start = new Date(2019, 1, 2); // засекли время
var end = new Date; // конец измерения
var dateF = Math.ceil((end - start)/(1000*60*60*24)) - 1;
//alert(dateF + " дней прошло с установленной точки");;
//func(dateF);

function setTime() {
    var day = document.getElementById('dateD').value;
    var days = document.getElementById('days');
    days.innerHTML = day;
    var month = document.getElementById('dateM').value;
    var months = document.getElementById('months');
    months.innerHTML = month;
    var year = document.getElementById('dateY').value;
    var years = document.getElementById('years');
    years.innerHTML = year;
    var nowDate = new Date(year, month - 1, day);
    var nowDates = document.getElementById('nowDates');
    nowDates.innerHTML = nowDate;
    
}

