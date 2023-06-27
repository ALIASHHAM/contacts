document.addEventListener("DOMContentLoaded", function () {
    // Sample seating data
    var seatingData = [
{seatnumber:"A1",names:["Intour Maldives","Roam Maldives","","","","","","","","",""]},
{seatnumber:"A2",names:["Bandos Maldives ","Malahini Kuda Bandos","","","","","","","","",""]},
{seatnumber:"A3",names:["Dusit Thani","","","","","","","","","",""]},
{seatnumber:"A4",names:["Universal Hotels","Velassaru Maldives","Baros Maldives","Huvafen Fushi Maldives","Milaidhoo Maldives","","","","","",""]},
{seatnumber:"A5",names:["Universal Hotels "," Kurumba Maldives ",""," Dhigali Maldives "," Kandholhu Maldives "," Kuramathi Island "," Faarufushi Maldives","","","",""]},
{seatnumber:"A6",names:["Sun Ocean","","","","","","","","","",""]},
{seatnumber:"A7",names:["Villa Hotels "," Villa Park Sun Island","","","","","","","","",""]},
{seatnumber:"A8",names:["Soneva "," Soneva Fushi ",""," Soneva Jani","","","","","","",""]},
{seatnumber:"A9",names:["The Standard Huruvalhi","","","","","","","","","",""]},
{seatnumber:"A10",names:["Kaimoo "," Embudu Village ",""," Summer Island Maldives "," Equator Village "," Mookai Hotel "," Mookai Suites","","","",""]},
{seatnumber:"A11",names:["Splendid Asia "," Safari Island ",""," Thulhagiri Island Resort and Spa Maldives "," Angaga Island Resort & Spa "," Dreamland Maldives","","","","",""]},
{seatnumber:"A12",names:["Lux. "," LUX South Ari Atoll","","","","","","","","",""]},
{seatnumber:"A13",names:["Tui","","","","","","","","","",""]},
{seatnumber:"A14",names:["Centara "," Centara Grand Island Resort & Spa Maldives ",""," Centara Ras Fushi Resort & Spa Maldives","","","","","","",""]},
{seatnumber:"A15",names:["One & Only "," One & Only Reethi Rah","","","","","","","","",""]},
{seatnumber:"A16",names:["Banyan Tree Vabbinfaru "," Angsana Velavaru ",""," Dhawa Ihuru","","","","","","",""]},
{seatnumber:"A17",names:["Crossroads "," Hard Rock","","","","","","","","",""]},
{seatnumber:"A18",names:["Crossroads "," Saii Lagoon","","","","","","","","",""]},
{seatnumber:"B1",names:["Coco Collection "," Coco Dhuni kolhu ",""," Coco Bodu Hithi","","","","","","",""]},
{seatnumber:"B2",names:["Como "," COMO Cocoa Island ",""," COMO Maalifushi","","","","","","",""]},
{seatnumber:"B3",names:["Adaaran "," Adaaran Club Rannalhi ",""," Adaaran Prestige Vadoo "," Adaaran Select Hudhuran Fushi "," Adaaran Select Meedhupparu","","","","",""]},
{seatnumber:"B4",names:["Pullman Maldives Maamutaa "," Mercure Maldives Kooddoo","","","","","","","","",""]},
{seatnumber:"B5",names:["Riu "," Hotel Riu Atoll ",""," Hotel Riu Palace Maldivas","","","","","","",""]},
{seatnumber:"B6",names:["Conrad "," Conrad Maldives Rangali Island","","","","","","","","",""]},
{seatnumber:"B7",names:["Sun Siyam "," Siyam World ",""," Sun Siyam Iru Fushi "," Sun Siyam Iru Veli "," Sun Siyam Vilu Reef","","","","",""]},
{seatnumber:"B8",names:["Sun Siyam "," Sun Siyam Olhuveli ",""," Sun Siyam Travels","","","","","","",""]},
{seatnumber:"B9",names:["Crown & Champa "," Kudadhoo Private Island ","Meeru Island"," Hurawalhi Island"," Kagi Maldives"," Veligandu Island"," Komandoo Island"," Vilamendhoo Island"," Kuredu Island"," Innahura Maldives"," Champa Central Hotel"]},
{seatnumber:"C1",names:["Outrigger Maldives Maafushivaru","","","","","","","","","",""]},
{seatnumber:"C2",names:["Movenpick Resort Kuredhivaru Maldives","","","","","","","","","",""]},
{seatnumber:"C3",names:["Vermillion","","","","","","","","","",""]},
{seatnumber:"C4",names:["Travel Factory","","","","","","","","","",""]},
{seatnumber:"C5",names:["Sunset Maldives","","","","","","","","","",""]},
{seatnumber:"C6",names:["Taj "," Taj Exotica Resort & Spa ",""," Taj Coral Reef Resort & Spa","","","","","","",""]},
{seatnumber:"C7",names:["Exciting Holidays","","","","","","","","","",""]},
{seatnumber:"C8",names:["Blue Vilu "," Mondo Maldives ",""," White Sand Dhigurah","","","","","","",""]},
{seatnumber:"C9",names:["Leisure Frontiers "," Six Senses Laamu","","","","","","","","",""]},
{seatnumber:"C10",names:["{Vacant}","","","","","","","","","",""]},
{seatnumber:"C11",names:["Canopus "," Turquoise Residence by UI ",""," UI Hotels","","","","","","",""]},
{seatnumber:"C12",names:["BookMe","","","","","","","","","",""]},
{seatnumber:"C13",names:["Lets Go Maldives "," Kaani Hotels & Tours ",""," Kaani Beach "," Kaani Village "," Kaani Grand Seaview "," Kaani Palm Beach","","","",""]},
{seatnumber:"C14",names:["Real Paradise","","","","","","","","","",""]},
{seatnumber:"C15",names:["Lily "," Lily Beach Resort & Spa ",""," Hideaway Beach Resort & Spa Maldives "," The Signature Collection at Hideaway","","","","","",""]},
{seatnumber:"C16",names:["Sheraton Maldives Full Moon Resort & Spa "," W Maldives","","","","","","","","",""]},
{seatnumber:"C17",names:["Sheraton Maldives Full Moon Resort & Spa "," W Maldives","","","","","","","","",""]},
{seatnumber:"C18",names:["Capital Travel "," Virgin Holidays","","","","","","","","",""]},
{seatnumber:"D1",names:["Leisure "," Hotelplan","","","","","","","","",""]},
{seatnumber:"D2",names:["Ayada Maldives","","","","","","","","","",""]},
{seatnumber:"D3",names:["Platinum "," Eriyadu Island Resort Maldives","","","","","","","","",""]},
{seatnumber:"D4",names:["Visitens "," Hilton Maldives Amingiri Resort & Spa","","","","","","","","",""]},
{seatnumber:"D5",names:["Constance "," Constance Halaveli ",""," Constance Moofushi","","","","","","",""]},
{seatnumber:"D6",names:["Reollo "," Kandima Maldives ",""," Nova Maldives "," The Nautilus Maldives","","","","","",""]},
{seatnumber:"D7",names:["Inpac","","","","","","","","","",""]},
{seatnumber:"D8",names:["Bliss Dhigurah","","","","","","","","","",""]},
{seatnumber:"D9",names:["Fari Islands "," Patina Maldives ",""," The Ritz-Carlton Maldives, Fari Islands","","","","","","",""]},
{seatnumber:"D10",names:["Fihalhohi Island Resort","","","","","","","","","",""]},
{seatnumber:"D11",names:["Hey Hey Maldives "," Atoll Transfer ",""," Azalea Cruise","","","","","","",""]},
{seatnumber:"D12",names:["Plumeria","","","","","","","","","",""]},
{seatnumber:"D13",names:["Safari Tours "," Alimathà NAKAI ",""," NAKAI Dhiggiri Resort "," Maayafushi NAKAI","","","","","",""]},
{seatnumber:"D14",names:["Seaside "," Finolhu","","","","","","","","",""]},
{seatnumber:"D15",names:["Japan H.I.S "," Skyhub","","","","","","","","",""]},
{seatnumber:"D16",names:["Kanifushi "," Amilla","","","","","","","","",""]},
{seatnumber:"D17",names:["Carpe Diem Cruises "," Carpe Diem​ ",""," Carpe Vita​ "," Carpe Novo​","","","","","",""]},
{seatnumber:"D18",names:["Bonaventure "," The Residence Maldives at Falhumaafushi ",""," The Residence Maldives at Dhigurah","","","","","","",""]},
{seatnumber:"D19",names:["Emil Resorts "," Emerald Maldives Resort & Spa","","","","","","","","",""]},
{seatnumber:"D20",names:["Villa Shipping "," Royal Island Resort & Spa","","","","","","","","",""]},
{seatnumber:"D21",names:["Furaveri","","","","","","","","","",""]},
{seatnumber:"D22",names:["Waldorfe "," Waldorf Astoria Maldives Ithaafushi","","","","","","","","",""]},
{seatnumber:"E1",names:["Voyages "," Kuoni Travel ",""," Aliptour "," Francorosso "," Coral Travel "," Idee per Viaggiare ","","","",""]},
{seatnumber:"E2",names:["Voyages "," Manta Reisen Voyages ",""," Bravo "," Aliptour "," Exotimes "," Francorosso ","","","",""]},
{seatnumber:"E3",names:["Voyages "," Cinnamon ",""," Cinnamon Dhonveli "," Cinnamon Velifushi "," Cinnamon Ellaidhoo "," Cinnamon Hakuraa Huraa","","","",""]},
{seatnumber:"E4",names:["Sunset Maldives","","","","","","","","","",""]},
{seatnumber:"E5",names:["Cypra "," Diethelm ",""," Der Tour "," Jahn Reisen "," ITS","","","","",""]},
{seatnumber:"E6",names:["Diethelem "," Diethelm ",""," Arabian Adventures","","","","","","",""]},
{seatnumber:"E7",names:["Diethelm","","","","","","","","","",""]},
{seatnumber:"E8",names:["Resort Life","","","","","","","","","",""]},
{seatnumber:"E9",names:["Club Med "," Club Med Kani ",""," Club Med Finolhu Villas","","","","","","",""]},
{seatnumber:"E10",names:["Villa "," Villa Nautica Resort (Paradise Island Resort)","","","","","","","","",""]},
{seatnumber:"E11",names:["Fast Track "," Hummingbird","","","","","","","","",""]},
{seatnumber:"E12",names:["Get Into","","","","","","","","","",""]},
{seatnumber:"E13",names:["{Vacant}","","","","","","","","","",""]},
{seatnumber:"E14",names:["Atmosphere "," OBLU SELECT Sangeli ",""," OBLU SELECT Lobigili "," OBLU XPERIENCE Ailafushi "," VARU by Atmosphere","","","","",""]},
{seatnumber:"E15",names:["{Vacant}","","","","","","","","","",""]},
{seatnumber:"E16",names:["Hotel Plan "," MTS Globe ",""," Desert Gate "," Travel House "," Vacances Migros","","","","",""]},
{seatnumber:"E17",names:["{Counter Use Prohibited by MACL}","","","","","","","","","",""]},
{seatnumber:"E18",names:["H.M Lulu "," Noomoo Maldives ",""," Travel Connection Maldives Pvt Ltd","","","","","","",""]},
{seatnumber:"E19",names:["Trav Maldives","","","","","","","","","",""]},
{seatnumber:"E20",names:["Kudafushi Resort & Spa","","","","","","","","","",""]},
{seatnumber:"MTC",names:["Ministry of Tourism","","","","","","","","","",""]},
{seatnumber:"Lounge ",names:["Anantara","","","","","","","","","",""]},
{seatnumber:"Lounge ",names:["Four Seasons","","","","","","","","","",""]},
{seatnumber:"Lounge ",names:["Ozen","","","","","","","","","",""]},
{seatnumber:"Lounge ",names:["AAA Hotels","","","","","","","","","",""]},
{seatnumber:"Lounge ",names:["Huvafenfushi","","","","","","","","","",""]}
    ];


// Filter out blank names from the seating data
  var filteredSeatingData = seatingData.map(function (seatData) {
    var filteredNames = seatData.names.filter(function (name) {
      return name !== "";
    });
    return { seatnumber: seatData.seatnumber, names: filteredNames };
  });

  var seatingPlan = document.getElementById("seating-plan");
  var searchBar = document.getElementById("search-bar");
  var seats = [];

  // Generate seating arrangement
  for (var i = 0; i < filteredSeatingData.length; i++) {
    var seatData = filteredSeatingData[i];
    var seatElement = createSeatElement(seatData.seatnumber, seatData.names);
    seatingPlan.appendChild(seatElement);
    seats.push(seatElement);
  }

  searchBar.addEventListener("input", function (event) {
    var searchText = event.target.value.toLowerCase();

    // Show/hide seats based on search text
    for (var i = 0; i < seats.length; i++) {
      var seat = seats[i];
      var seatNames = seat.getElementsByClassName("seat-names")[0];
      var names = seatNames.textContent.toLowerCase();

      if (names.includes(searchText)) {
        seat.style.display = "flex";
      } else {
        seat.style.display = "none";
      }
    }
  });

  searchBar.addEventListener("change", function () {
    var searchText = searchBar.value.toLowerCase();

    // Clear search and show all seats
    if (searchText === "") {
      searchBar.value = "";
      for (var i = 0; i < seats.length; i++) {
        var seat = seats[i];
        seat.style.display = "flex";
      }
    }
  });

  function createSeatElement(seatNumber, names) {
    var seat = document.createElement("div");
    seat.className = "seat";
    seat.innerHTML =
      "<div class='seat-number'>" +
      seatNumber +
      "</div>" +
      "<div class='seat-names'>" +
      names.join(", ") +
      "</div>";
    return seat;
  }
});
