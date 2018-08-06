var BlinkyDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(BlinkyDancer.prototype)
  Dancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // return this
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.oldStep = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

BlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};