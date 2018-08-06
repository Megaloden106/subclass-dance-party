var HipHopDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<span class="hipHopDancer"></span>');
  this.setPosition(top, left);
};

HipHopDancer.prototype = Object.create(Dancer.prototype);

HipHopDancer.prototype.constructor = HipHopDancer;

// HipHopDancer.prototype.oldStep = function() {
//   Dancer.prototype.step.call(this);
// };

HipHopDancer.prototype.step = function() {
  // this.oldStep();
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};