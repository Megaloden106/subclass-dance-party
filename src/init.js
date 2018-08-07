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
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  // add a button for lineup
  $('.lineupButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      let pos;
      if (i % 2 === 0) {
        pos = ($('body').width() / 2) + (50 * i);
      } else {
        pos = ($('body').width() / 2) + (-50 * i);
      }
      window.dancers[i].setPosition(500, pos);
    }
  });

  $('.danceOffButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i].$node[0].className;
      var height = $('body').height() * Math.random() / 5;
      var width = $('body').width() * Math.random() / 5;
      if (dancer === 'hipHopDancer') {
        window.dancers[i].setPosition(height, width + 650);
      } else if (dancer === 'chrisMartinDancer') {
        window.dancers[i].setPosition(height + 500, width);
      } else if (dancer === 'dancer') {
        window.dancers[i].setPosition(height + 500, width + 1250);
      }
    }
  });   

});

