$(document).ready(function(){
    $("button").on("click",function(event){
        event.preventDefault();
       var city = $("#city").val().trim();
       if (city===""){
           $("#requiredoption").attr("style","visibility:visible");
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
            "x-rapidapi-key": "03b9902d9cmshc38142cfe947ce8p1be1cdjsn018246b5d2be"
        }
    }
    
    $.ajax(settings).done(function (response) {
         console.log(response);
        var responselength=(response.listings.length);
        console.log(responselength);
        for(var i=0 ;i < responselength ;i++){
        var rating=response.listings[i].listing.avg_rating;
        $(".content").append($("<p></p>").text("Rating: "+rating));
        console.log(rating);
        // star_rating
        var name=response.listings[i].listing.name;
        $(".content").append($("<p></p>").text("Description: "+name));
        console.log(name);
        var spacetype=response.listings[i].listing.space_type;
        $(".content").append($("<p></p>").text("Space type: "+spacetype));
        console.log(spacetype);
        var city=response.listings[i].listing.neighborhood;
        $(".content").append($("<p></p>").text("City: "+city));
        console.log(city);
        var bedrooms=response.listings[i].listing.bedroom_label;
        $(".content").append($("<p></p>").text(bedrooms));
        console.log(bedrooms);
        var guests=response.listings[i].listing.guest_label;
        $(".content").append($("<p></p>").text("Max "+guests));
        console.log(guests);
        var beds=response.listings[i].listing.bed_label;
        $(".content").append($("<p></p>").text(beds));
        console.log(beds);
        var bathrooms=response.listings[i].listing.bathroom_label;
        $(".content").append($("<p></p>").text(bathrooms));
        console.log(bathrooms);
        var county=response.listings[i].listing.city;
        $(".content").append($("<p></p>").text("County: "+county));
        console.log(county);
        var amenities=response.listings[i].listing.preview_amenities;
        $(".content").append($("<p></p>").text("Amenities: "+amenities));
        console.log(amenities);
        var totalamount=response.listings[i].pricing_quote.price.total.amount_formatted;
        $(".content").append($("<p></p>").text("Total Amount: "+totalamount));
        console.log(totalamount); 
        var numpicture=response.listings[i].listing.picture_urls.length;
        console.log(numpicture);
        var numpriceitems=response.listings[i].pricing_quote.price.price_items.length;
        console.log(numpriceitems);
       
        for(var k=0; k < numpriceitems ;k++){
        var pricedetails=response.listings[i].pricing_quote.price.price_items[k].localized_title;
        var priceinfo = response.listings[i].pricing_quote.price.price_items[k].localized_explanation;
        $(".content").append($("<p></p>").text(pricedetails+": "+priceinfo));
        console.log(pricedetails);
         
       }
       $(".content").append($("<div></div>").addClass("carousel slide carousel-fade").attr("data-ride","carousel"));
       $(".carousel slide carousel-fade").append($("<div></div>").addClass("carousel-inner"));
        for(var j=0 ;j < numpicture ;j++){
        $(".carousel-inner").append($("<div></div>").addClass("carousel-item"));    
        $(".carousel-item").append($("<img></img>").attr("src",response.listings[i].listing.contextual_pictures[j].picture).addClass("d-block w-100"));
        }
        }
    })

    })
    });
        
    });

    