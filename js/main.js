
$(document).ready(function() {
  $('.content-tile').matchHeight();
 //testTemps();
});

  //for debugging only
  function testTemps() {
    $.getJSON( "dummydata/dummy_temps.json", function( data ) {
      
      console.log("dbg:1");
      console.log(data.identification.name);
      
      var items = [];
      $.each( data.temperatures, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val.temp + "</li>" );
        console.log("key: "+key+" val: "+val.temp);
      });
     
      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "#temp-list" );
    }); 
  }

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});