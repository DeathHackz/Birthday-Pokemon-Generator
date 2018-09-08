// COPYRIGHT; 2018 DeathHackz - All this code belongs to me.
// COPYRIGHT; 2018 Pokemon. COPYRIGHT 1995–2018 Nintendo/Creatures Inc./GAME FREAK Inc.
// Pokemon, Pokemon character names and artwork are all trademarks of Nintendo.
// All Pokemon related content on the Service, including artwork, graphics, logos, downloads
// and other files, is the property of Pokemon and is protected by United States
// and international copyrights, trademarks and other intellectual property laws. Trademarks and
// copyrights for third-party games and characters are owned by the companies which market or
// license those products.

var start = new Date().getTime();
if (sessionStorage.getItem("VALID") !== "YES") {
  window.location = "index.html";
}

$(document).ready(function() {
  $("#userbday").text(sessionStorage.getItem("UserBirthday"));
});

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}
var excludes = [10013, 10014, 10015, 10027, 10028, 10029, 10030, 10031, 10032, 10061, 10085, 10093, 10116, 10121, 10122, 10128, 10129, 10130, 10131, 10132, 10133, 10134, 10135, 10136, 10137, 10138, 10139, 10140, 10141, 10142, 10144, 10145, 10146, 10147, 10149, 10150, 10151, 10153, 10154];
var userPkm;
var isDefault;
var defform;
var url = new URL(window.location.href);
var urlID = parseInt(url.searchParams.get("id"), 10);
for (var f = 0; f < excludes.length; f++) {
  if (urlID == excludes[f]) {
    alert("This pok\xE9mon is not allowed\nFallback to default pok\xE9mon");
    location.search = "?id=" + pad(sessionStorage.getItem("UserPokemonId"), 3) + "&form=default&isdefault=true";
  }
}
if (urlID < 1) {
  location.search = "?id=" + pad(sessionStorage.getItem("UserPokemonId"), 3) + "&form=default&isdefault=true";
}
var inputForm = url.searchParams.get("form");

if (location.search.length > 1 && urlID <= 10157 && urlID != sessionStorage.getItem("UserPokemonId") || inputForm != "default" && urlID <= 807 || urlID >= 10001) {
  userPkm = urlID;
  if (sessionStorage.getItem("UserPokemonId") >= 10001 && inputForm != "default") {
    isDefault = true;
  } else {
    isDefault = false;
    console.log("Custom Pok\xE9mon Loading");
  }
  defform = inputForm;
} else {
  userPkm = sessionStorage.getItem("UserPokemonId");
  isDefault = true;
  defform = "default";
  if (urlID > 807 && urlID < 10001) {
    alert("Please enter a number between 001 - 807\nFallback to default pok\xE9mon");
  }
}

$.getJSON("resources/pokemonData.json", function(dtwo) {
  for (var j = 0; j < dtwo.length; j++) {
    var name = dtwo[j].identifier;
    var id = dtwo[j].id;
    if (userPkm == id) {
      var formScan = dtwo.filter(dtwo => (dtwo.identifier === name.split('-')[0] + "-" + defform));
    }
  }
  if (defform != "default") {
    if (formScan.length > 0) {
      if (formScan[0].id != urlID) {
        var newID = formScan[0].id;
        location.search = "?id=" + newID + "&form=" + defform + "&isdefault=false";
        console.log(newID);
      }
    } else {
      alert("That form does not exist\nFallback to default pok\xE9mon");
      location.search = "?id=" + pad(sessionStorage.getItem("UserPokemonId"), 3) + "&form=default&isdefault=";
    }
  }
});

window.history.replaceState({}, document.title, "?id=" + pad(userPkm, 3) + "&form=" + defform + "&isdefault=" + isDefault);

$(document).ready(function() {
  var gifid = pad(Math.floor(Math.random() * (20 - 1 + 1)) + 1, 3);
  $("<div class='divs' style='width: 100%; height: 100%; overflow: hidden'><span class='helper'></span><img id='loading' src='resources/loading_gifs/" + gifid + ".gif'></div>").insertAfter('#mainNav');
});

function removeLoad() {
  $('#pokemon').removeClass("d-none");
  $('#moreinfo').removeClass("d-none");
  $('#footer').removeClass("d-none");
  $('.divs').addClass("d-none");
}

var PokemonData = "resources/pokemonData.json";

function iWant(pkm, form) {
  if (pkm === null) {
    console.log("iWant\(\"Pokemon Name/ID\", \"Form\"\)");
  }
  if (form === null) {
    form = "default";
  }
  if (isNaN(pkm) === true) {
    $.getJSON(PokemonData, function(cdata) {
      for (var f = 0; f < cdata.length; f++) {
        var cname = cdata[f].identifier;
        var cpkmid = cdata[f].id;
        if (pkm == cname) {
          location.search = "?id=" + pad(cpkmid, 3) + "&form=" + form + "&isdefault=false";
        }
      }
    });
  } else {
    if (pkm <= 807) {
      location.search = "?id=" + pad(pkm, 3) + "&form=" + form + "&isdefault=false";
    }
  }
  if (pkm === 0) {
    location.search = "?id=" + pad(sessionStorage.getItem("UserPokemonId"), 3) + "&form=default&isdefault=true";
  }
}

$.getJSON(PokemonData, function(data) {
  for (var p = 0; p < data.length; p++) {
    var id = data[p].id;
    var name = data[p].identifier;
    if (userPkm == id) {
      if (userPkm >= 10001 && userPkm <= 10157) {
        userPkm = data[p].species_id;
        var pkmName = name.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()).replace('-O', '-o').replace(/-/g, " ");
        var pkmAltName = name.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()).replace('-O', '-o').split('-')[0];
        var form = "?form=" + name.substr(name.indexOf("-") + 1);
        window.history.replaceState({}, document.title, "?id=" + pad(userPkm, 3) + "&form=" + name.substr(name.indexOf("-") + 1) + "&isdefault=" + isDefault);
      } else {
        var form = "";
        var pkmAltName = name.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()).replace('-O', '-o');
        var pkmName = name.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()).replace('-O', '-o');
      }
      var rawPkmName = name.replace('-', '').replace('_', '');
      var artworkid = data[p].artwork_by_id;
      var islegend = data[p].is_legend;
    }
  }

  if (islegend === 0) {
    document.title = pkmName + " is your special Pok\xE9mon!";
  } else {
    document.title = pkmName + " is your special LEGENDARY Pok\xE9mon!";
  }
  var pokeDB = "https://pokemondb.net/pokedex/" + pad(userPkm, 3);
  var offdex = "https://www.pokemon.com/us/pokedex/" + pad(userPkm, 3);
  var bulba = "https://bulbapedia.bulbagarden.net/wiki/" + pkmAltName + "_(Pok%C3%A9mon)";
  var serebii = "https://www.serebii.net/pokedex-sm/" + pad(userPkm, 3) + ".shtml";
  var veekun = "https://veekun.com/dex/pokemon/" + pkmAltName + form;
  var smogon = "https://www.smogon.com/dex/sm/pokemon/" + rawPkmName.replace('-', '').replace('\u2640', "-f").replace('\u2642', "-m").replace("cap", "");
  var pkmshow = "https://dex.pokemonshowdown.com/pokemon/" + rawPkmName.replace('-', '').replace('\u2640', "-f").replace('\u2642', "-m").replace("cap", "");
  var shareartwork = "https://raw.githubusercontent.com/DeathHackz/Birthday-Pokemon-Generator/master/resources/official_sugimori_art_small/" + artworkid;
  var artwork = "resources/official_sugimori_art_small/" + artworkid;

  $("#userpkm").html(pkmName.replace('\u2640', "<i class='fas fa-venus'></i>").replace('\u2642', "<i class='fas fa-mars'></i>"));
  $("#userpkm").attr("href", pokeDB);
  $("#userpkm").attr("title", pkmName + " info on \"The Pok\xE9mon Database\"");
  $("#oart").append("<hr><img id='pkmimg' src='" + artwork + "' title='Official " + pkmName + " Artwork by Ken Sugimori ' alt='Official " + pkmName + " Artwork by Ken Sugimori'>");
  $("#oart").append("<hr><a class='btn btn-success' href='" + artwork + "' download='" + (pkmName.replace(/\b\w/g, l => l.toUpperCase())).replace('-', '_').split(' ').join('_') + "_Artwork_by_Ken_Sugimori'>Download Artwork</a>");
  $("#pokename").html(pkmName.replace('\u2640', "<i class='fas fa-venus'></i>").replace('\u2642', "<i class='fas fa-mars'></i>"));
  $("#odex").attr("href", offdex);
  $("#pdb").attr("href", pokeDB);
  $("#bbp").attr("href", bulba);
  $("#smog").attr("href", smogon);
  $("#ser").attr("href", serebii);
  $("#vee").attr("href", veekun);
  $("#psh").attr("href", pkmshow);

  $('#oart').append("<div id='share'><a class='facebook' title='Share to Facebook' href='https://www.facebook.com/sharer.php?u=" + pokeDB + "' target='blank'><i class='fab fa-facebook-f'></i></a><a class='twitter' title='Share to Twitter' href='https://twitter.com/intent/tweet?url=" + pokeDB + "&text=My+Birthday+Pok\xE9mon+is+" + pkmName + "+Find+Out+Yours+at+https://deathhackz.github.io/Birthday-Pokemon-Generator+its+Free!" + "&hashtags=pokemon,birthday," + pkmName.split(' ').join(',') + "' target='blank'><i class='fab fa-twitter'></i></a><a class='googleplus' title='Share to Google+' href='https://plus.google.com/share?url=" + pokeDB + "' target='blank'><i class='fab fa-google-plus-g'></i></a><a class='pinterest' title='Share to Pinterest' href='https://pinterest.com/pin/create/button/?url=" + pokeDB + "&is_video=false&media=" + shareartwork + "&description=My+Birthday+Pok\xE9mon+is+" + pkmName + "+Find+Out+Yours+at+https://deathhackz.github.io/Birthday-Pokemon-Generator+its+Free!" + "' target='blank'><i class='fab fa-pinterest-p'></i></a></div>");

  if (islegend === 1) {
    $('#legendary').text("LEGENDARY ");
    console.log("You found a legendary pok\xE9mon!");
  }

  setTimeout(removeLoad, 1500);
  var end = new Date().getTime();
  var totalMS = end - start;
  var totalSec = ((totalMS % 60000) / 1000).toFixed(3);
  console.log("Your birthday is " + sessionStorage.getItem("UserBirthday") + " your pok\xE9mon is " + pkmName + " (ID:" + userPkm + ")");
  console.log("Request took", totalMS + " milliseconds (" + totalSec + " seconds)");
});
