setInterval(()=>{
    data = new Date();
    hour = data.getHours();
    minute = data.getMinutes();
    second = data.getSeconds();

    /**
    calculation-> 
    //hour
    12hour -> 360 deg
    1hour -> 30 deg
    h hour -> 30 *h + minute / 2 
    //minutes
    60 min -> 360 deg
    1 min -> 6 deg
    m min -> 6 * m
    //seconds
    60 sec -> 360 deg
    1 sec-> 6 deg
    s sec -> 6 * s  
     */

    //hour needle rotation
    hRotation = 30*hour + minute / 2;
    //minutes needle rotatio
    mRotation = 6 * minute;
    //second needle rotation
    sRotation = 6 * second;

    let hId = document.getElementById("hour");
    hId.style.transform =  `rotate(${hRotation}deg)`

    let mId = document.getElementById("minute");
    mId.style.transform = `rotate(${mRotation}deg)`;

    let sId = document.getElementById("second");
    sId.style.transform = `rotate(${sRotation}deg)`;
},1000);
