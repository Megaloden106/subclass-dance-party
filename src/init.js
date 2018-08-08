$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  var currMousePos = { x: -1, y: -1 };
  $('body').mousemove(function(event) {
    currMousePos.x = event.pageX;
    currMousePos.y = event.pageY;

    // var msg = "Handler for .mousemove() called at ";
    // msg += event.pageX + ", " + event.pageY;
    // console.log(msg)
  });

  $('body').mousedown(function() {
    interval = setInterval(function() {
      if (currMousePos.y > 40) { //dancer near mouse
        $('span').animate({
          top: currMousePos.y,
          left: currMousePos.x,
        }, 'slow');
      }
    }, 500);
  });

  $('body').mouseup(function() {
    clearInterval(interval);
  });

  // add a button for lineup
  $('.lineupButton').on('click', function(event) {
    for (var i = 0; i < dancers.length; i++) {
      let pos;
      if (i % 2 === 0) {
        pos = ($('body').width() / 2) + (50 * i);
      } else {
        pos = ($('body').width() / 2) + (-50 * i);
      }
      dancers[i].setPosition(500, pos);

    }
  });

  $('.danceOffButton').on('click', function(event) {
    for (var i = 0; i < dancers.length; i++) {
      var dancer = dancers[i].$node[0].className;
      var height = $('body').height() * Math.random() / 5;
      var width = $('body').width() * Math.random() / 5;
      if (dancer === 'hipHopDancer') {
        dancers[i].setPosition(height, width + 650);
      } else if (dancer === 'chrisMartinDancer') {
        dancers[i].setPosition(height + 500, width);
      } else if (dancer === 'dancer') {
        dancers[i].setPosition(height + 500, width + 1250);
      }
    }
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'][Math.floor((Math.random() * 16))];
    }
    $('.danceOffButton').css('color', color);
  });   

});

