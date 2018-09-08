// COPYRIGHT; 2018 DeathHackz - All this code belongs to me.
// COPYRIGHT; 2018 Pokemon. COPYRIGHT 1995–2018 Nintendo/Creatures Inc./GAME FREAK Inc.
// Pokemon, Pokemon character names and artwork are all trademarks of Nintendo.
// All Pokemon related content on the Service, including artwork, graphics, logos, downloads
// and other files, is the property of Pokemon and is protected by United States
// and international copyrights, trademarks and other intellectual property laws. Trademarks and
// copyrights for third-party games and characters are owned by the companies which market or
// license those products.

$(document).ready(function() {
  $('#datepicker').datepicker({
    format: "MM, dd",
    startView: 2,
    maxViewMode: 1,
    orientation: "bottom auto",
    clearBtn: true,
    autoclose: true
  }).on('hide', function(e) {
    if ($('#datepicker').datepicker('getDate') > 1) {
      $('#submitdate').removeClass('disabled');
    } else {
      if ($('#submitdate')[0].classList.length != 3) {
        $('#submitdate').addClass('disabled');
      }
    }
  });

  function removeYear() {
    var year = (new Date()).getFullYear();
    $(".datepicker-days").find(".datepicker-switch").each(function() {
      var text = $(this).text();
      $(this).text(text.replace(year, ''));
    });
  }

  $('#datepicker').datepicker().on('changeMonth', function(e) {
    setTimeout(removeYear, 1);
  });

  $('#datepicker').datepicker().on('show', function(e) {
    $('.datepicker-months').find("span").removeClass("focused");
  });

  if (sessionStorage.getItem('UserBirthday') !== null) {
    sessionStorage.removeItem('UserBirthday');
  }
  if (sessionStorage.getItem('UserPokemonId') !== null) {
    sessionStorage.removeItem('UserPokemonId');
  }
  if (sessionStorage.getItem('VALID') !== null) {
    sessionStorage.removeItem('VALID');
  }

  function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  var keyn;
  if (localStorage.length > 1) {
    keyn = "keys";
  } else {
    keyn = "key";
  }

  if (localStorage.length < 1) {
    $('#localstring').html("<b>NO DATA IS STORED ON YOUR BROWSER!</b>");
    $('#cleardata').addClass('disabled');
  } else {
    $('#keys').text("(" + localStorage.length + " " + keyn + " Saved)");
  }
  $('#cleardata').click(function() {
    var auth = confirm("By clicking \"OK\" you confirm to permanently delete:\n" + localStorage.length + " " + keyn + " saved in your browsers Local Storage");
    if (auth === true) {
      localStorage.clear();
      document.location.reload();
    }
  });

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  $('#submitdate').click(function() {
    sessionStorage.setItem("VALID", "YES");
    var excludes = [10013, 10014, 10015, 10027, 10028, 10029, 10030, 10031, 10032, 10061, 10085, 10093, 10116, 10121, 10122, 10128, 10129, 10130, 10131, 10132, 10133, 10134, 10135, 10136, 10137, 10138, 10139, 10140, 10141, 10142, 10144, 10145, 10146, 10147, 10149, 10150, 10151, 10153, 10154];
    if (localStorage.getItem('randomNum') === null) {
      var randomNuminit = [];
      while (randomNuminit.length < 20) {
        var specialNum = Math.floor(Math.random() * (10157 - 10001 + 1)) + 10001;
        for (var i = 0; i < excludes.length; i++) {
          if (specialNum == excludes[i]) {
            specialNum++;
          }
        }
        if (randomNuminit.indexOf(specialNum) > -1) continue;
        randomNuminit.push(specialNum);
      }
      while (randomNuminit.length < 365) {
        var numbers = Math.floor(Math.random() * (807 - 1 + 1)) + 1;
        if (randomNuminit.indexOf(numbers) > -1) continue;
        randomNuminit.push(numbers);
      }
      var randomNum = shuffle(randomNuminit);
      var stringdata = JSON.stringify(randomNum);
      localStorage.setItem('randomNum', stringdata);
    }
    var bday = $('#datepicker').val();
    sessionStorage.setItem("UserBirthday", bday);
    var alldays = ["January, 01", "January, 02", "January, 03", "January, 04", "January, 05", "January, 06", "January, 07", "January, 08", "January, 09", "January, 10", "January, 11", "January, 12", "January, 13", "January, 14", "January, 15", "January, 16", "January, 17", "January, 18", "January, 19", "January, 20", "January, 21", "January, 22", "January, 23", "January, 24", "January, 25", "January, 26", "January, 27", "January, 28", "January, 29", "January, 30", "January, 31", "February, 01", "February, 02", "February, 03", "February, 04", "February, 05", "February, 06", "February, 07", "February, 08", "February, 09", "February, 10", "February, 11", "February, 12", "February, 13", "February, 14", "February, 15", "February, 16", "February, 17", "February, 18", "February, 19", "February, 20", "February, 21", "February, 22", "February, 23", "February, 24", "February, 25", "February, 26", "February, 27", "February, 28", "March, 01", "March, 02", "March, 03", "March, 04", "March, 05", "March, 06", "March, 07", "March, 08", "March, 09", "March, 10", "March, 11", "March, 12", "March, 13", "March, 14", "March, 15", "March, 16", "March, 17", "March, 18", "March, 19", "March, 20", "March, 21", "March, 22", "March, 23", "March, 24", "March, 25", "March, 26", "March, 27", "March, 28", "March, 29", "March, 30", "March, 31", "April, 01", "April, 02", "April, 03", "April, 04", "April, 05", "April, 06", "April, 07", "April, 08", "April, 09", "April, 10", "April, 11", "April, 12", "April, 13", "April, 14", "April, 15", "April, 16", "April, 17", "April, 18", "April, 19", "April, 20", "April, 21", "April, 22", "April, 23", "April, 24", "April, 25", "April, 26", "April, 27", "April, 28", "April, 29", "April, 30", "May, 01", "May, 02", "May, 03", "May, 04", "May, 05", "May, 06", "May, 07", "May, 08", "May, 09", "May, 10", "May, 11", "May, 12", "May, 13", "May, 14", "May, 15", "May, 16", "May, 17", "May, 18", "May, 19", "May, 20", "May, 21", "May, 22", "May, 23", "May, 24", "May, 25", "May, 26", "May, 27", "May, 28", "May, 29", "May, 30", "May, 31", "June, 01", "June, 02", "June, 03", "June, 04", "June, 05", "June, 06", "June, 07", "June, 08", "June, 09", "June, 10", "June, 11", "June, 12", "June, 13", "June, 14", "June, 15", "June, 16", "June, 17", "June, 18", "June, 19", "June, 20", "June, 21", "June, 22", "June, 23", "June, 24", "June, 25", "June, 26", "June, 27", "June, 28", "June, 29", "June, 30", "July, 01", "July, 02", "July, 03", "July, 04", "July, 05", "July, 06", "July, 07", "July, 08", "July, 09", "July, 10", "July, 11", "July, 12", "July, 13", "July, 14", "July, 15", "July, 16", "July, 17", "July, 18", "July, 19", "July, 20", "July, 21", "July, 22", "July, 23", "July, 24", "July, 25", "July, 26", "July, 27", "July, 28", "July, 29", "July, 30", "July, 31", "August, 01", "August, 02", "August, 03", "August, 04", "August, 05", "August, 06", "August, 07", "August, 08", "August, 09", "August, 10", "August, 11", "August, 12", "August, 13", "August, 14", "August, 15", "August, 16", "August, 17", "August, 18", "August, 19", "August, 20", "August, 21", "August, 22", "August, 23", "August, 24", "August, 25", "August, 26", "August, 27", "August, 28", "August, 29", "August, 30", "August, 31", "September, 01", "September, 02", "September, 03", "September, 04", "September, 05", "September, 06", "September, 07", "September, 08", "September, 09", "September, 10", "September, 11", "September, 12", "September, 13", "September, 14", "September, 15", "September, 16", "September, 17", "September, 18", "September, 19", "September, 20", "September, 21", "September, 22", "September, 23", "September, 24", "September, 25", "September, 26", "September, 27", "September, 28", "September, 29", "September, 30", "October, 01", "October, 02", "October, 03", "October, 04", "October, 05", "October, 06", "October, 07", "October, 08", "October, 09", "October, 10", "October, 11", "October, 12", "October, 13", "October, 14", "October, 15", "October, 16", "October, 17", "October, 18", "October, 19", "October, 20", "October, 21", "October, 22", "October, 23", "October, 24", "October, 25", "October, 26", "October, 27", "October, 28", "October, 29", "October, 30", "October, 31", "November, 01", "November, 02", "November, 03", "November, 04", "November, 05", "November, 06", "November, 07", "November, 08", "November, 09", "November, 10", "November, 11", "November, 12", "November, 13", "November, 14", "November, 15", "November, 16", "November, 17", "November, 18", "November, 19", "November, 20", "November, 21", "November, 22", "November, 23", "November, 24", "November, 25", "November, 26", "November, 27", "November, 28", "November, 29", "November, 30", "December, 01", "December, 02", "December, 03", "December, 04", "December, 05", "December, 06", "December, 07", "December, 08", "December, 09", "December, 10", "December, 11", "December, 12", "December, 13", "December, 14", "December, 15", "December, 16", "December, 17", "December, 18", "December, 19", "December, 20", "December, 21", "December, 22", "December, 23", "December, 24", "December, 25", "December, 26", "December, 27", "December, 28", "December, 29", "December, 30", "December, 31"];
    var allPokemon = [];
    var userPkm;
    var bdaypkmIDs = JSON.parse(localStorage.getItem('randomNum'));
    for (var i = 0; i < 365; i++) {
      allPokemon.push({
        Birthday: alldays[i],
        PokemonID: bdaypkmIDs[i]
      });
      if (alldays[i] == sessionStorage.getItem('UserBirthday')) {
        userPkm = allPokemon[i].PokemonID;
        sessionStorage.setItem("UserPokemonId", userPkm);
      }
    }
    window.location.href = "result.html?id=" + pad(userPkm, 3) + "&form=default&isdefault=true";
  });
});
