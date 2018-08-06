describe('ChrisMartinDancer', function() {

  var chrisMartinDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    chrisMartinDancer = new ChrisMartinDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(chrisMartinDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(chrisMartinDancer.$node, 'toggle');
    chrisMartinDancer.step();
    expect(chrisMartinDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(chrisMartinDancer, 'step');
      expect(chrisMartinDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(chrisMartinDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(chrisMartinDancer.step.callCount).to.be.equal(2);
    });
  });
});