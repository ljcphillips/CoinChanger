function CoinChanger (){
  this.coins = [50, 50, 20, 20, 10, 5, 2, 2, 1]
};

CoinChanger.prototype.changeFor = function(amount){
  var change = []
  this.coins.forEach(function(coin){
    if (amount >= coin){
    change.push(coin)
    amount -= coin
    }
  });
  return change
};
