var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // return this
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

// BlinkyDancer.prototype.oldStep = function() {
//   Dancer.prototype.step.call(this);
// };

BlinkyDancer.prototype.step = function() {
  // this.oldStep();
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};