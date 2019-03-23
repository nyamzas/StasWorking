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
alert(dateF + " дней прошло с установленной точки");;

func(dateF);

