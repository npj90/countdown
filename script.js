      function countdown(){
        var now = new Date();
        var eventDate =  new Date(2018, 0, 1, 0);

        var currentTime= now.getTime();
        var eventTime = eventDate.getTime();

        var remTime = eventTime - currentTime;


        var ms= Math.floor(remTime /10);
        var s= Math.floor(ms/100);
        var m= Math.floor(s/60);
        var h= Math.floor(m/60);
        var d= Math.floor(h/24);

        h %= 24;
        m %= 60;
        s %= 60;
        ms %= 100;

        h = (h<10) ? "0" + h : h;
        m = (m<10) ? "0" + m : m;
        s = (s<10) ? "0" + s : s;
        ms = (ms<10) ? "0" + ms: ms;

        document.getElementById("days").textContent = d;
        document.getElementById("days").innerText = d;

        document.getElementById("hours").textContent = h;
        document.getElementById("minutes").textContent = m;
        document.getElementById("seconds").textContent = s;
        document.getElementById("millis").textContent = ms;

        setTimeout(countdown, 10);
        }

      countdown();
