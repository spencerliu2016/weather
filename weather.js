$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    var markup = '<strong>' + "CURRENT WEATHER" + '</strong>' +
    '<br>' + data.currently.summary +
    '<br>' + "Temperature: " + data.currently.temperature + " F" +
    '<br>' + "Humidity: " + data.currently.humidity * 100 + "%" +
    '<br>' + "Chance of precipitation: " + data.currently.precipProbability * 100 + "%" +
    '<br><br><strong>' + "3-DAY FORECAST" + '</strong>' +
    '<br><br><strong>' + "TODAY" + '</strong>' +
    '<br>' + data.daily.data[0].summary +
    '<br>' + "Temperature: " + data.daily.data[0].temperatureMin + " F - " + 
    data.daily.data[0].temperatureMax + " F" +
    '<br>' + "Humidity: " + data.daily.data[0].humidity * 100 + "%" +
    '<br>' + "Chance of precipitation: " + data.daily.data[0].precipProbability * 100 + "%" +
    '<br><br><strong>' + "TOMORROW" + '</strong>' +
    '<br>' + data.daily.data[1].summary +
    '<br>' + "Temperature: " + data.daily.data[1].temperatureMin + " F - " + 
    data.daily.data[1].temperatureMax + " F" +
    '<br>' + "Humidity: " + data.daily.data[1].humidity * 100 + "%" +
    '<br>' + "Chance of precipitation: " + data.daily.data[1].precipProbability * 100 + "%" +
    '<br><br><strong>' + "IN 2 DAYS" + '</strong>' +
    '<br>' + data.daily.data[2].summary +
    '<br>' + "Temperature: " + data.daily.data[2].temperatureMin + " F - " + 
    data.daily.data[2].temperatureMax + " F" +
    '<br>' + "Humidity: " + data.daily.data[2].humidity * 100 + "%" +
    '<br>' + "Chance of precipitation: " + data.daily.data[2].precipProbability * 100 + "%" +
    '<br><br><strong>' + "IN 3 DAYS" + '</strong>' +
    '<br>' + data.daily.data[3].summary +
    '<br>' + "Temperature: " + data.daily.data[3].temperatureMin + " F - " + 
    data.daily.data[3].temperatureMax + " F" +
    '<br>' + "Humidity: " + data.daily.data[3].humidity * 100 + "%" +
    '<br>' + "Chance of precipitation: " + data.daily.data[3].precipProbability * 100 + "%";
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});