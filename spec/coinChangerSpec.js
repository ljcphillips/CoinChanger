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
    expect(coinChanger.changeFor(2)).toEqual([1,1]);
  });

  it('should give 5p coin change for 5', function() {
    expect(coinChanger.changeFor(5)).toEqual([5]);
  });

  it('should give 10p coin change for 10', function() {
    expect(coinChanger.changeFor(5)).toEqual([10]);
  });

});
