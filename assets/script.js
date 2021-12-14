console.log("w")

var apiKey = "bf4513b1f75b7c630d99fbb51bffb8d2"
var citySearch = JSON.parse(localStorage.getItem('citySearch')) || []

//Print/Render the weather data to the page

// Fetch the geo data (lat, lon )
function geoData(cityName) {
    var url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;

    fetch( url )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
        console.log ( data );
        var lat = data[0].lat
        var lon = data[0].lon
        oneCall( lat, lon );
        

    });
}

    // q = Name of the city
    // Limit = 5
    // appid = custome API key 
   
 //Fetch the one call weather data
 function oneCall(lat, lon) {
    var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;

    fetch( url )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var weatherIcon = "o4n"
        console.log ( data );
        // $("#weatherIcon").attr(`src`, `http://openweathermap.org/img/wn/${weatherIcon}.png`+data.weather[0].icon)
        $("#temp").text("Temp: "+data.current.temp+"°F")
        $("#wind_speed").text ("Wind: "+data.current.wind_speed+"mph")
        $("#humidity").text ("Humidity: "+data.current.humidity+"%")
        $("#uv-index").text ("UV-Index: "+data.current.uvi)
        
    });
}

        //lat
        //lon
        //appid
        //units = imperial
        //exclude = minutely, hourly
        
        //Printer/Render the weather data to the page
        
 //Event Listeners
    //  from the <form> element, listen to the "submit"  (has button "enter" already)
    // from the <button> element, listen to the "click"
        //select <input>, get its value, provide it to the geo API
        
// From the <button> container element, listen to the <button> "click"
// Get the city from the button's data attribute

$("#searchBtn").on ("click", function() {
    var city = $("#search-input").val()
    console.log(city);
    geoData(city);

})

        





    