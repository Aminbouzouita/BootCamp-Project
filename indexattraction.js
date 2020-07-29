$(document).ready(function(){
$("button").on("click",function(event){
event.preventDefault();
var city=$("#city").val().trim();
if (city===""){
    $("#requiredoption").attr("style","visibility:visible");
}
else{
 $("#requiredoption").attr("style","visibility:hidden"); 
}
var apikey = "e11b9a4682c5d6b835b8d20b205b4530";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apikey;
$.ajax({
 url: queryURL,
 method: "GET"
})
 .then(function(response) {
    var longitude=(response.city.coord.lon);
    var latitude=(response.city.coord.lat);
    var distanceunit=$("#distanceunit").val().trim();
    var currency=$("#currency").val().trim();
    var language=$("#language").val().trim();
    var responselimit=$("#responselimit").val().trim();
    var distance=$("#distance").val().trim();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://tripadvisor1.p.rapidapi.com/attractions/list-by-latlng?lunit=" + distanceunit + "&currency=" + currency + "&limit=" + responselimit + "&distance=" + distance + "&lang=" + language + "&longitude=" + longitude + "&latitude=" + latitude,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
            "x-rapidapi-key": "53800556f1msh7f107e7ea44ab37p14af0djsncaa8e9ecead1"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        var responselength=response.data.length;
        for(var i=0 ;i < responselength ;i++){
            $(".content").append($("<p></p>").text("Attraction place: "+response.data[i].name)); 
            $(".content").append($("<p></p>").text("distance from city: "+parseFloat(response.data[i].distance).toFixed(1)));
            $(".content").append($("<p></p>").text("Street: "+response.data[i].address_obj.street1));  
            $(".content").append($("<img></img>").attr("src",response.data[i].photo.images.large.url).addClass("pictures"));
         }
    });
 })
})
})