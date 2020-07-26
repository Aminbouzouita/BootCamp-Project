$(document).ready(function(){
var airports=[{value:"Birmingham International Airport", name:"BHM"},{value:"Dothan Regional Airport", name:"DHN"},{value:"Huntsville International Airport", name:"HSV"},{value:"Mobile", name:"MOB"},{value:"Montgomery",	name:"MGM"},{value:"Alaska",	name:"AK"},{value:"Anchorage International Airport", name:"ANC"},{value:"Fairbanks International Airport", name:"FAI"},{value:"Juneau International Airport", name:"JNU"},{value:"Arizona", name:"AZ"},{value:"Flagstaff", name:"FLG"},{value:"Phoenix Sky Harbor International Airport", name:"PHX"},{value:"Tucson International Airport", name:"TUS"},{value:"Yuma International Airport", name:"YUM"},{value:"Arkansas", name:"AR"},{value:"Fayetteville",	name:"FYV"},{value:"Little Rock National Airport", name:"LIT"},{value:"Northwest Arkansas Regional Airport", name:"XNA"},{value:"Burbank",	name:"BUR"},{value:"Fresno",	name:"FAT"},{value:"Long Beach",	name:"LGB"},{value:"Los Angeles International Airport", name:"LAX"},{value:"Oakland",	name:"OAK"},{value:"Ontario",	name:"ONT"},{value:"Palm Springs",	name:"PSP"},{value:"Sacramento",	name:"SMF"},{value:"San Diego",	name:"SAN"},{value:"San Francisco International Airport", name:"SFO"},{value:"San Jose",	name:"SJC"},{value:"Santa Ana",	name:"SNA"},{value:"Colorado",	name:"CO"},{value:"Aspen",	name:"ASE"},{value:"Colorado Springs",	name:"COS"},{value:"Denver International Airport", name:"DEN"},{value:"Grand Junction",	name:"GJT"},{value:"Pueblo",	name:"PUB"},{value:"Connecticut",	name:"CT"},{value:"Hartford",	name:"BDL"},{value:"Tweed New Haven",	name:"HVN"},{value:"District of Columbia",	name:"DC"},{value:"Washington, Dulles International Airport", name:"IAD"},{value:"Washington National Airport", name:"DCA"},{value:"Florida",	name:"FL"},{value:"Daytona Beach",	name:"Dvalue"},{value:"Fort Lauderdale-Hollywood International Airport", name:"FLL"},{value:"Fort Meyers",	name:"RSW"},{value:"Jacksonville",	name:"JAX"},{value:"Key West International Airport", name:"EYW"},{value:"Miami International Airport", name:"MIA"},{value:"Orlando",	name:"MCO"},{value:"Pensacola",	name:"PNS"},{value:"St. Petersburg",	name:"PIE"},{value:"Sarasota",	name:"SRQ"},{value:"Tampa",	name:"TPA"},{value:"West Palm Beach",	name:"PBI"},{value:"Panama City-Bay County International Airport", name:"PFN"},{value:"Georgia",	name:"GA"},{value:"Atlanta Hartsfield International Airport", name:"ATL"},{value:"Augusta",	name:"AGS"},{value:"Savannah",	name:"SAV"},{value:"Hawaii",	name:"HI"},{value:"Hilo",	name:"ITO"},{value:"Honolulu International Airport", name:"HNL"},{value:"Kahului",	name:"OGG"},{value:"Kailua",	name:"KOA"},{value:"Lihue",	name:"LIH"},{value:"Idaho",	name:"ID"},{value:"Boise",	name:"BOI"},{value:"Illinois",	name:"IL"},{value:"Chicago Midway Airport", name:"MDW"},{value:"Chicago, O'Hare International Airport", name:"ORD"},{value:"Moline",	name:"MLI"},{value:"Peoria",	name:"PIA"},{value:"Indiana",	name:"IN"},{value:"Evansville",	name:"EVV"},{value:"Fort Wayne",	name:"FWA"},{value:"Indianapolis International Airport", name:"IND"},{value:"South Bend",	name:"SBN"},{value:"Iowa",	name:"IA"},{value:"Cedar Rapids",	name:"CID"},{value:"Des Moines",	name:"DSM"},{value:"Kansas",	name:"KS"},{value:"Wichita",	name:"ICT"},{value:"Kentucky",	name:"KY"},{value:"Lexington",	name:"LEX"},{value:"Louisville",	name:"SDF"},{value:"Louisiana",	name:"LA"},{value:"Baton Rouge",	name:"BTR"},{value:"New Orleans International Airport", name:"MSY"},{value:"Shreveport",	name:"SHV"},{value:"Maine",	name:"ME"},{value:"Augusta",	name:"AUG"},{value:"Bangor",	name:"BGR"},{value:"Portland",	name:"PWM"},{value:"Maryland",	name:"MD"},{value:"Baltimore",	name:"BWI"},{value:"Massachusetts",	name:"MA"},{value:"Boston, Logan International Airport", name:"BOS"},{value:"Hyannis",	name:"HYA"},{value:"Nantucket",	name:"ACK"},{value:"Worcester",	name:"ORH"},{value:"Michigan",	name:"MI"},{value:"Battlecreek",	name:"BTL"},{value:"Detroit Metropolitan Airport", name:"DTW"},{value:"Detroit",	name:"DET"},{value:"Flint",	name:"FNT"},{value:"Grand Rapids",	name:"GRR"},{value:"Kalamazoo-Battle Creek International Airport", name:"AZO"},{value:"Lansing",	name:"LAN"},{value:"Saginaw",	name:"MBS"},{value:"Minnesota",	name:"MN"},{value:"Duluth",	name:"DLH"},{value:"Minneapolis/St.Paul International Airport", name:"MSP"},{value:"Rochester",	name:"RST"},{value:"Mississippi",	name:"MS"},{value:"Gulfport",	name:"GPT"},{value:"Jackson",	name:"JAN"},{value:"Missouri",	name:"MO"},{value:"Kansas City",	name:"MCI"},{value:"St Louis, Lambert International Airport", name:"STL"},{value:"Springfield",	name:"SGF"},{value:"Montana",	name:"MT"},{value:"Billings",	name:"BIL"},{value:"Nebraska",	name:"NE"},{value:"Lincoln",	name:"LNK"},{value:"Omaha",	name:"OMA"},{value:"Nevada",	name:"NV"},{value:"Las Vegas, Las Vegas McCarran International Airport", name:"LAS"},{value:"Reno-Tahoe International Airport", name:"RNO"},{value:"New Hampshire",	name:"NH"},{value:"Manchester",	name:"MHT"},{value:"New Jersey",	name:"NJ"},{value:"Atlantic City International Airport", name:"ACY"},{value:"Newark International Airport", name:"EWR"},{value:"Trenton",	name:"TTN"},{value:"New Mexico",	name:"NM"},{value:"Albuquerque International Airport", name:"valueQ"},{value:"Alamogordo",	name:"ALM"},{value:"New York",	name:"NY"},{value:"Albany International Airport", name:"ALB"},{value:"Buffalo",	name:"BUF"},{value:"Islip",	name:"ISP"},{value:"New York, John F Kennedy International Airport", name:"JFK"},{value:"New York, La Guardia Airport", name:"LGA"},{value:"Newburgh",	name:"SWF"},{value:"Rochester",	name:"ROC"},{value:"Syracuse",	name:"SYR"},{value:"Westchester",	name:"HPN"},{value:"North Carolina",	name:"NC"},{value:"Asheville",	name:"AVL"},{value:"Charlotte/Douglas International Airport", name:"CLT"},{value:"Fayetteville",	name:"FAY"},{value:"Greensboro",	name:"GSO"},{value:"Winston-Salem",	name:"INT"},{value:"North Dakota",	name:"ND"},{value:"Bismark",	name:"BIS"},{value:"Fargo",	name:"FAR"},{value:"Ohio",	name:"OH"},{value:"Akron",	name:"CAK"},{value:"Cincinnati",	name:"CVG"},{value:"Cleveland",	name:"CLE"},{value:"Columbus",	name:"CMH"},{value:"Dayton",	name:"DAY"},{value:"Toledo",	name:"TOL"},{value:"Oklahoma",	name:"OK"},{value:"Oklahoma City",	name:"OKC"},{value:"Tulsa",	name:"TUL"},{value:"Oregon",	name:"OR"},{value:"Eugene",	name:"EUG"},{value:"Portland International Airport", name:"PDX"},{value:"Portland, Hillsboro Airport", name:"HIO"},{value:"Salem",	name:"SLE"},{value:"Pennsylvania",	name:"PA"},{value:"Allentown",	name:"valueE"},{value:"Erie",	name:"ERI"},{value:"Harrisburg",	name:"MDT"},{value:"Philadelphia",	name:"PHL"},{value:"Pittsburgh",	name:"PIT"},{value:"Scranton",	name:"AVP"},{value:"Rhode Island",	name:"RI"},{value:"Providence - T.F. Green Airport", name:"PVD"},{value:"South Carolina",	name:"SC"},{value:"Charleston",	name:"CHS"},{value:"Columbia",	name:"CAE"},{value:"Greenville",	name:"GSP"},{value:"Myrtle Beach",	name:"MYR"},{value:"South Dakota",	name:"SD"},{value:"Pierre",	name:"PIR"},{value:"Rapid City",	name:"RAP"},{value:"Sioux Falls",	name:"FSD"},{value:"Tennessee",	name:"TN"},{value:"Bristol",	name:"TRI"},{value:"Chattanooga",	name:"CHA"},{value:"Knoxville",	name:"TYS"},{value:"Memphis",	name:"MEM"},{value:"Nashville",	name:"BNA"},{value:"Texas",	name:"TX"},{value:"Amarillo",	name:"AMA"},{value:"Austin Bergstrom International Airport", name:"AUS"},{value:"Corpus Christi",	name:"CRP"},{value:"Dallas Love Field Airport", name:"DAL"},{value:"Dallas/Fort Worth International Airport", name:"DFW"},{value:"El Paso",	name:"ELP"},{value:"Houston, William B Hobby Airport", name:"HOU"},{value:"Houston, George Bush Intercontinental Airport", name:"IAH"},{value:"Lubbock",	name:"LBB"},{value:"Midland",	name:"MAF"},{value:"San Antonio International Airport", name:"SAT"},{value:"Utah",	name:"UT"},{value:"Salt Lake City",	name:"SLC"},{value:"Vermont",	name:"VT"},{value:"Burlington",	name:"BTV"},{value:"Montpelier",	name:"MPV"},{value:"Rutland",	name:"RUT"},{value:"Virginia",	name:"VA"},{value:"Dulles",	name:"IAD"},{value:"Newport News",	name:"PHF"},{value:"Norfolk",	name:"ORF"},{value:"Richmond",	name:"RIC"},{value:"Roanoke",	name:"ROA"},{value:"Washington",	name:"WA"},{value:"Pasco, Pasco/Tri-Cities Airport", name:"PSC"},{value:"Seattle, Tacoma International Airport", name:"SEA"},{value:"Spokane International Airport", name:"GEG"},{value:"West Virginia",	name:"WV"},{value:"Charleston",	name:"CRW"},{value:"Clarksburg",	name:"CKB"},{value:"Huntington Tri-State Airport", name:"HTS"},{value:"Wisconsin",	name:"WI"},{value:"Green Bay",	name:"GRB"},{value:"Madison",	name:"MSN"},{value:"Milwaukee",	name:"MKE"},{value:"Wyoming",	name:"WY"},{value:"Casper",	name:"CPR"},{value:"Cheyenne",	name:"CYS"},{value:"Jackson Hole",	name:"JAC"},{value:"Rock Springs",	name:"RKS"}
]
	$("#origin").autocomplete({lookup:airports});
	$("#destination").autocomplete({lookup:airports});
	$("button").on("click",function(event){
	event.preventDefault();
	var country ="US"; 
	// var oneway=$("#oneway").val().trim();
	// var roundtrip=$("#roundtrip").val().trim();
	// var multicity=$("#multicity").val().trim();
	var destination="";
	var destinationid=$("#destination").val().trim();
	if(destinationid===""){
		$("#desairportmessage").attr("style","visibility:visible");
	}
	else{
        $("#desairportmessage").attr("style","visibility:hidden");
       }
	 for(var a=0;a < airports.length ;a++ ){
		 if(destinationid===airports[a].value){
         destination=airports[a].name;
		 }
	 }
	var origin="";
	var originid=$("#origin").val().trim();
	if(originid===""){
		$("#depairportmessage").attr("style","visibility:visible");
	}
	else{
        $("#depairportmessage").attr("style","visibility:hidden");
       }
	 for(var a=0;a < airports.length ;a++ ){
		 if(originid===airports[a].value){
         origin=airports[a].name;
		 }
	 }
	var departdate = $("#departdate").val().trim();
	if(departdate===""){
		$("#depdatemessage").attr("style","visibility:visible");
	}
	else{
        $("#depdatemessage").attr("style","visibility:hidden");
	   }
	// if(oneway === "checked"){
	// 	$("#returndate").attr("style","visibility:hidden");	
	// }   
	var returndate = $("#returndate").val().trim();
	console.log(returndate);
	if(returndate===""){
		$("#desdatemessage").attr("style","visibility:visible");
	}
	else{
        $("#desdatemessage").attr("style","visibility:hidden");
       }
	var currency = $("#currency").val().trim();
	if(currency===""){
		$("#currencymessage").attr("style","visibility:visible");
	}
	else{
        $("#currencymessage").attr("style","visibility:hidden");
       }
	var language = "en-US";
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/" + country + "/" + currency + "/" + language + "/" + origin + "-sky/" + destination +"-sky/" + departdate +"?inboundpartialdate=" + returndate,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
			"x-rapidapi-key": "03b9902d9cmshc38142cfe947ce8p1be1cdjsn018246b5d2be"
		}
	}
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	 var airlines=[];
	 console.log(airlines);
	 var numairlaines=response.Carriers.length;
	
	 // FIND AIRLINES
	 for(var i=0;i < numairlaines;i++){
	 var airlinename=response.Carriers[i].Name;
	 var carriersid=response.Carriers[i].CarrierId;
	 airlines.push(`name:${airlinename},value:${carriersid}`);
	 console.log(airlines[i].name);
	 }	
	 
	 var departairport=response.Places[0].Name;
	 console.log(departairport);
	 var departairportcode=response.Places[0].IataCode;
	 console.log(departairportcode);
	 var destinationairport=response.Places[1].Name;
	 console.log(destinationairport);
	 var destinationairportcode=response.Places[1].IataCode;
	 console.log(destinationairportcode);
	 var currency=response.Currencies[0].Symbol;
	 var numquotes=response.Quotes.length;
	
	// FIND QUOTES 
	  for(var j=0 ;j < numquotes; j++){
	$(".content").append($("<p></p>").text("Departure Airport: "+departairport)).addClass("departairport");
	$(".content").append($("<p></p>").text("Arrival Airport: "+destinationairport)).addClass("arrivalairport");
	 var carrierid=response.Quotes[j].OutboundLeg.CarrierIds[0];
	 console.log(carrierid);
	
	//  for (var k=0 ; k < numairlaines; k++){
	//  if(airlines[k].value === carrierid){
	//  var carriername = airlines[k].name;
	//   console.log(carriername);
	//  } }
	//  $(".content").append($("<p></p>").text("Airline: "+ carriername)).addClass("airline");
	 var price=response.Quotes[j].MinPrice;
	 $(".content").append($("<p></p>").text("Price: "+currency+" "+price)).addClass("price");
	 console.log(price);
	 var direct=response.Quotes[j].Direct; 

	 $(".content").append($("<p></p>").text("Direct Flight: "+direct)).addClass("directflight");
	 console.log(direct);
	 var departuredate=response.Quotes[j].QuoteDateTime;
	 $(".content").append($("<p></p><br><br>").text("Departure Date: "+departuredate.replace("T"," time: "))).addClass("departtime");
	 console.log(departuredate);
	//  var departuredate=response.Quotes[j].OutboundLeg.DepartureDate;
	//  $(".content").append($("<p></p><br><br>").text("Departure Date "+departuredate)).addClass("departtime");
	//  console.log(departuredate);
	  
	  }


})
})
})