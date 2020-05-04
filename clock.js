function countdown() {
    let now = new Date();
    let eventDate = new Date(2020, 11, 19);

    let currentTiime= now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTiime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerHTML = d;

    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;

    setTimeout(countdown, 1000);

    if (s < 30){
        console.log('maziau uz 30');
        
        document.getElementById("change").style.backgroundImage = "url('../img/yellow.jpg')"; 
    }else{
        document.getElementById("change").style.backgroundImage = "url('../img/MainImage.png')";
    }
}


countdown();

