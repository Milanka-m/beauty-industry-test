const span = document.querySelector('.promo__counter');

function timeToEvent(eventDate) {
  let currentDate = new Date();
  let output = '';
  // количество дней до события
  let daystoED = Math.floor(Math.round(eventDate - currentDate)/86400000);
  daystoED = (daystoED < 1) ? "0"+daystoED : daystoED;
  // количество часов до события
  let hourstoED = 24 - currentDate.getHours() - 1;
  hourstoED = (hourstoED < 10) ? "0"+hourstoED : hourstoED;
  // количество минут до события
  let minutestoED = 60 - currentDate.getMinutes() - 1;
  minutestoED = (minutestoED < 10) ? "0"+minutestoED : minutestoED;
  // количество секунд до события
  let secondstoED = 60 - currentDate.getSeconds() - 1;
  secondstoED = (secondstoED < 10) ? "0"+secondstoED : secondstoED;
  //сообщение
  output = daystoED+" : "+hourstoED+" : "+minutestoED+" : "+secondstoED;
  return output;
}

window.onload = function() {
  // текущая дата
  let currentDate = new Date();
  // дата предстоящего события (год, месяц, число)
  let eventDate = new Date(2021,10,8);
  // если событие еще не наступило
  if (currentDate < eventDate){
   /*  promoDiv.firstChild.nodeValue = text; */
      window.setInterval(() => {
         span.innerHTML = timeToEvent(eventDate);
       },1000);
   }
}
