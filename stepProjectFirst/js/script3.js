let date = new Date();

$('.calendar-day').text(date.getDate());
let month = date.getMonth();
switch(month){
    case 0:
        $('.calendar-month').text("Jan");
        break;
    case 1:
        $('.calendar-month').text("Feb");
        break;
    case 2:
        $('.calendar-month').text("Mar");
        break;
    case 3:
        $('.calendar-month').text("Apr");
        break;
    case 4:
        $('.calendar-month').text("May");
        break;
    case 5:
        $('.calendar-month').text("Jun");
        break;
    case 6:
        $('.calendar-month').text("Jul");
        break;
    case 7:
        $('.calendar-month').text("Aug");
        break;
    case 8:
        $('.calendar-month').text("Sem");
        break;
    case 9:
        $('.calendar-month').text("Oct");
        break;
    case 10:
        $('.calendar-month').text("Now");
        break;
    case 11:
        $('.calendar-month').text("Dec");
        break;
}
