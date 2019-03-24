var date = new Date();
date = date.getDate();
var dateMonth = new Date();
var monthDate = dateMonth.getMonth()+1;
var yearDate = new Date();
var dateYear = yearDate.getFullYear();

//синхронизация ползунков с реальной датой(дни)
var days = document.getElementById('days');
days.innerHTML =  date;
document.getElementById('dateD').value = date;
//синхронизация ползунков с реальной датой(месяц)
var months = document.getElementById('months');
months.innerHTML = monthDate ;
document.getElementById('dateM').value = monthDate;
//синхронизация ползунков с реальной датой(год)
var years = document.getElementById('years');
years.innerHTML = dateYear ;
document.getElementById('dateY').value = dateYear ;

//alert('today is day: ' + date + 'today is day: ' + monthDate +  'today is day: ' +dateYear);

switch(monthDate){
    case 1: monthDate = 'января';
    break;
    case 2: monthDate = 'февраля';
    break;
    case 3: monthDate = 'марта';
    break;
    case 4: monthDate = 'апреля';
    break;
    case 5: monthDate = 'мая';
    break;
    case 6: monthDate = 'июня';
    break;
    case 7: monthDate = 'июля';
    break;
    case 8: monthDate = 'августа';
    break;
    case 9: monthDate = 'сентября';
    break;
    case 10: monthDate = 'октября';
    break;
    case 11: monthDate = 'ноября';
    break;
    case 12: monthDate = 'декабря';
    break;

}
//'today is day: ' + date + 'today is day: ' + monthDate +  'today is day: ' + dateYear;

