$(document).ready(function(){
    $("button").on("click",function(event){
        event.preventDefault();
       var city = $("#city").val().trim();
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
    var minbathrooms=$("#minbathrooms").val().trim();
    var checkout=$("#checkout").val().trim();
    var checkin=$("#checkin").val().trim();
    var maxguests=$("#maxguests").val().trim();
    var minbeds=$("#minbeds").val().trim();
    var radius=$("#radius").val().trim();
    var minbedrooms=$("#minbedrooms").val().trim();
    var maxprice=$("#maxprice").val().trim();
    var minprice=$("#minprice").val().trim();
    var entirehome=$("#entirehome").val().trim();
    var sharedroom=$("#sharedroom").val().trim();
    var privateroom=$("#privateroom").val().trim();
    var hotelroom=$("#hotelroom").val().trim();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://airbnb-com.p.rapidapi.com/listings/nearby/" + latitude + "/" + longitude + "?min_bathrooms=" + minbathrooms + "&check_out=" + checkout + "&hotel_room=" + hotelroom +"&max_guests=" + maxguests + "&check_in=" + checkin + "&private_room=" + privateroom +"&min_bedrooms=" + minbedrooms + "&offset=0&entire_home=" + entirehome + "&min_price=" + minprice + "&max_price=" + maxprice + "&min_beds=" + minbeds + "&radius=" + radius + "&shared_room=" + sharedroom,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "airbnb-com.p.rapidapi.com",
            "x-rapidapi-key": "53800556f1msh7f107e7ea44ab37p14af0djsncaa8e9ecead1"
        }
    }
    
    $.ajax(settings).done(function (response) {
        var responselength=(response.listings.length);
        for(var i=0 ;i < responselength ;i++){
        var rating=response.listings[i].listing.avg_rating;
        $(".content").append($("<p></p>").text("Rating: "+rating));
        $(".content").append($("<p></p>").text("Description: "+response.listings[i].listing.name));
        $(".content").append($("<p></p>").text("Space type: "+response.listings[i].listing.space_type));
        $(".content").append($("<p></p>").text("City: "+response.listings[i].listing.neighborhood));
        $(".content").append($("<p></p>").text(response.listings[i].listing.bedroom_label));
        $(".content").append($("<p></p>").text("Max "+response.listings[i].listing.guest_label));
        $(".content").append($("<p></p>").text(response.listings[i].listing.bed_label));
        $(".content").append($("<p></p>").text(response.listings[i].listing.bathroom_label));
        $(".content").append($("<p></p>").text("County: "+response.listings[i].listing.city));
        $(".content").append($("<p></p>").text("Amenities: "+response.listings[i].listing.preview_amenities));
        $(".content").append($("<p></p>").text("Total Amount: "+response.listings[i].pricing_quote.price.total.amount_formatted));
        var numpicture=response.listings[i].listing.picture_urls.length;
        var numpriceitems=response.listings[i].pricing_quote.price.price_items.length;
        for(var k=0; k < numpriceitems ;k++){
        var pricedetails=response.listings[i].pricing_quote.price.price_items[k].localized_title;
        var priceinfo = response.listings[i].pricing_quote.price.price_items[k].localized_explanation;
        $(".content").append($("<p></p>").text(pricedetails+": "+priceinfo));  
       }
        for(var j=0 ;j < numpicture ;j++){   
        $(".content").append($("<img></img>").attr("src",response.listings[i].listing.contextual_pictures[j].picture).addClass("pictures"));
        }
        }
    })

    })
    });
        
    });

    