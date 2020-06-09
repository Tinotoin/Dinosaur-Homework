const Park = function (name, price, dinosaurCollection) {
  this.name = name;
  this.price = price;
  this.dinosaurCollection = dinosaurCollection;
}

Park.prototype.addDinosaur = function(dinosaurCollection){
  this.dinosaurCollection.push(dinosaurCollection);
};

Park.prototype.removeDinosaur = function(dinosaurCollection){
  this.dinosaurCollection.pop(dinosaurCollection);
};

Park.prototype.guestsAttractedPerDay = function(park) {
  if (dinosaur.guestsAttractedPerDay() >= ){

  }else{
    return false
  };

module.exports = Park;
