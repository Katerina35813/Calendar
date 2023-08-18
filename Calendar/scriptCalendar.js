function checkOrCreateEl(id) {
    let elem = document.getElementById(id);
    if (!elem) {
        elem = document.createElement('div');
        elem.id = id;
        document.body.appendChild(elem);
    }
    return elem;
}

function createCalendar(id,month,year) {

    id = checkOrCreateEl(id);
    month = month - 1;
    id.innerHTML = "";

    let date = new Date(year,month,1);
    let dateForLastDate = new Date(year,month + 1,0);
    let weekDay = date.getDay();

    if (weekDay == 0) {
        weekDay = 7;
    }

    let lastDay = dateForLastDate.getDate();
    let fullWeekCount;

    if(weekDay == 1) {
        fullWeekCount = Math.ceil(lastDay/7)
    } else {
        fullWeekCount = Math.ceil(((lastDay-(7-weekDay+1))/7) + 1)
        //7-weekDay+1 - количество дней нового месяца в первой неделе
    }

    let table = document.createElement('table');
    let trDay = document.createElement('tr');

    table.append(trDay);

    let week = ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"]

    for(let i = 0;i < 7; i++) {
        let th = document.createElement("th");
        trDay.append(th);
        th.innerHTML = week[i];
    }

    for (let i = 0; i < fullWeekCount; i++) {
        let tr = document.createElement('tr');
        table.append(tr);
        for (let j = 0; j < 7;j++ ) {
            let td = document.createElement("td");
            tr.append(td)
        }
    };

    id.append(table);

    let tds = id.querySelectorAll('td');
    let numberDay = 0;
    let indexTds = weekDay-1;

    for (let i = indexTds; i <lastDay + indexTds; i++){
        numberDay++;
        tds[i].innerHTML = numberDay;
    }
}

createCalendar('container',6,2028)

