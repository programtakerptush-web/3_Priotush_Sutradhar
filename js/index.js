const weatherData = [
    { district: "Dhaka", temperature: 32, condition: "Sunny", img: "img/1.jpg" },
    { district: "Sylhet", temperature: 27, condition: "Rainy", img: "img/2.jpg" },
    { district: "Khulna", temperature: 30, condition: "Cloudy", img: "img/3.jpg" }
];

function showWeather() {
    let selected = document.getElementById("district").value;
    let message = document.getElementById("message");
    let details = document.getElementById("details");
    let image = document.getElementById("weatherImage");

    message.textContent = "";
    details.textContent = "";
    image.style.display = "none";

    if (selected === "") {
        message.textContent = "Please select a city!";
        message.style.color = "red";
        return;
    }

    let data = weatherData.find(item => item.district === selected);

    // Show text
    details.innerHTML = `
        District: ${data.district} <br>
        Temperature: ${data.temperature}°C <br>
        Weather: ${data.condition}
    `;

    // Show image
    image.src = data.img;
    image.style.display = "block";
}
