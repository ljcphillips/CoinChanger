describe('CoinChanger', function() {

  beforeEach(function() {
   coinChanger = new CoinChanger();
   });

  it('should give no change for 0', function() {
    expect(coinChanger.changeFor(0)).toEqual([]);
  });

  it('should give 1 penny change for 1', function() {
    expect(coinChanger.changeFor(1)).toEqual([1]);
  });

  it('should give 2 pennies change for 2', function() {
    expect(coinChanger.changeFor(2)).toEqual([2]);
  });

  it('should give 2  + 1 pennies change for 3', function() {
    expect(coinChanger.changeFor(3)).toEqual([2, 1]);
  });

  it('should give 2  + 2 pennies change for 4', function() {
    expect(coinChanger.changeFor(4)).toEqual([2, 2]);
  });

  it('should give 5p coin change for 5', function() {
    expect(coinChanger.changeFor(5)).toEqual([5]);
  });

  it('should give 5 + 1p coin change for 6', function() {
    expect(coinChanger.changeFor(6)).toEqual([5, 1]);
  });

  it('should give 5 + 2p coin change for 7', function() {
    expect(coinChanger.changeFor(7)).toEqual([5, 2]);
  });

  it('should give 5 + 2p + 2p coin change for 9', function() {
    expect(coinChanger.changeFor(9)).toEqual([5, 2, 2]);
  });

  it('should give 10p coin change for 10', function() {
    expect(coinChanger.changeFor(10)).toEqual([10]);
  });

  it('should give 20p coin change for 20', function() {
    expect(coinChanger.changeFor(20)).toEqual([20]);
  });

  it('should give 50p change for 50', function() {
      expect(coinChanger.changeFor(50)).toEqual([50]);
  });

  it('should give 50 + 20 + 20 + 5 + 2 + 2 change for 99', function() {
      expect(coinChanger.changeFor(99)).toEqual([50, 20, 20, 5, 2, 2]);
  });

});
