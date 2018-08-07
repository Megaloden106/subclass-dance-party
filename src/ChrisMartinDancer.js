var ChrisMartinDancer = function(top, left, timeBetweenSteps) {
  HipHopDancer.apply(this, arguments);
  this.$node = $('<span class="chrisMartinDancer"></span>');
  this.setPosition(top, left);
};

ChrisMartinDancer.prototype = Object.create(HipHopDancer.prototype);

ChrisMartinDancer.prototype.constructor = ChrisMartinDancer;

// ChrisMartinDancer.prototype.oldStep = function() {
//   HipHopDancer.prototype.step.call(this);
// };

ChrisMartinDancer.prototype.step = function() {
  // this.oldStep();
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};