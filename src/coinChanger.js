function CoinChanger (){
  this.change = []
  this.tender = 100.00
};

CoinChanger.prototype.changeFor = function(amount){
  if (amount < 5){
    for(var i=0; i < amount; i++){
      this.change.push(1);
    }
  }
  else{
    this.change.push(5)  
  }
  return this.change
};
