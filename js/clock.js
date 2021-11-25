document.querySelector("#myName").innerHTML = prompt("Kullanıcı adı giriniz: ")

function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let day = date.getDay();

    switch (day) {
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day = "Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
        case 7:
            day = "Pazar";
            break;
    }

    document.querySelector("#myClock").innerHTML = `${h}:${m}:${s} ${day}`;
    setTimeout(showTime, 1000);
}
showTime();