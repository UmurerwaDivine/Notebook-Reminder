
  $(document).ready(function() {
      var date = new Date();
      var d = date.getDate();
      var m = date.getMonth();
      var y = date.getFullYear();

    $('#calendar').fullCalendar({
        editable:true,
        weekMode: 'liquid',
        url: '#',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectHelper: true,
      select: function(start, end) {
        var title = prompt('Event Title:');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end,
            allDay:allDay,
          };
          $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $('#calendar').fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: new Date(y,m,1,9,00),
          end: new Date(y,m,1,10,00),
          allDay:false
        },
        {
          title: 'Long Event',
          start: new Date(y,m,2,15,00),
          
        },
        {
          title: 'Repeating Event',
          start: '2019-01-09T16:00:00'
        },
        {
    
          title: 'Repeating Event',
          start: '2019-01-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2019-01-11',
          end: '2019-01-13'
        },
        {
          title: 'Meeting',
          start: '2019-01-12T10:30:00',
          end: '2019-01-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2019-01-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2019-01-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2019-01-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2019-01-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2019-01-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2019-01-28',
          
        },
        {
        title: 'Graduation',
        start: '2019-01-18: 09:00-11:00',
        }
      ]
    });

  });
  setInterval(function(){
var date = new Date();
updateTime(date);
upadateClock(date);

  },1000);
  function upadateClock(date){
    var secHand = document.getElementById("sec-hand").style;
    var minHand = document.getElementById("sec-hand").style;
    var hrHand = document.getElementById("sec-hand").style;
    secHand.transform = "rotate(" + date.getSeconds()* 6 +"deg)";
    minHand.transform = "rotate(" + date.getMinutes()* 12 +"deg)";
    hrHand.transform = "rotate(" + date.getHours()* 30 + date.getMinutes()* 0.5 +"deg)";
  }
  function updateTime(date){
    var timeDiv = document.getElementById("time");
    var time = "time for Reference-- " + date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
    timeDiv.innerHTML = time;
  }
