const sevenDays = function () {
  let date = new Date();
  let today = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let days = getDays(year, month);
  let week = date.getDay();
  let seletDates = [];
  if ((days - today) >= 7) {
    for (let i = today; i < (today + 7); i++) {
      if (week >= 7) {
        week = 0;
      }
      let seletDate = {
        year: year,
        month: dateFilter(month),
        day: dateFilter(i),
        week: weekDay(week)
      }
      seletDates.push(seletDate);
      week += 1;
    }
  } else {
    for (let i = today; i < days ; i++) {
      if (week >= 7) {
        week = 0;
      }
      let seletDate = {
        year: year,
        month: dateFilter(month),
        day: dateFilter(i),
        week: weekDay(week)
      }
      seletDates.push(seletDate);
      week += 1;
    }
    for (let i = 1; i <= (7 - (days - today)); i++) {
      if (week >= 7) {
        week = 0;
      }
      if (month = 12) {
        year = year + 1
        month = 0
      }
      let seletDate = {
        year: year,
        month: dateFilter(month + 1),
        day: dateFilter(i),
        week: weekDay(week)
      }
      seletDates.push(seletDate);
      week += 1;
    }
  }
  return seletDates;
}

function getDays(year, month) {
  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 4 == 0 && year % 100 == 0) {
    monthDays[1] = 29
  }
  return monthDays[month - 1]
}

function dateFilter(day) {
  if (day < 10) {
    day = '0' + day
  }
  return day
}

function weekDay(week) {
  try {
    if (week == 0) throw '周日';
    if (week == 1) throw '周一';
    if (week == 2) throw '周二';
    if (week == 3) throw '周三';
    if (week == 4) throw '周四';
    if (week == 5) throw '周五';
    if (week == 6) throw '周六';
  } catch (message) {
    return message
  } 
  // finally {
  //   console.log('未知')
  // }
}

module.exports = {
  sevenDays
}