function upDateColock() {
    const now = new Date();
    let hours = now.getHours();
    const show = hours >= 12 ? "PM"   : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}:${show}`;
    document.getElementById("clock").textContent = timeString;

}

upDateColock();
setInterval(upDateColock, 1000);