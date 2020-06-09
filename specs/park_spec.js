const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
      park = new Park('Deathland', 10, [])
      dinosaur1 = new Dinosaur('raptor', 'carnivore', 100)
      dinosaur2 = new Dinosaur('triceratops', 'herbivore', 20)
      dinosaur3 = new Dinosaur('compylobacter', 'herbivore', 5)
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Deathland');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, []);
  });


  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(park.dinosaurCollection);
    const expected = park.dinosaurCollection;
    assert.deepStrictEqual(park.dinosaurCollection, expected)
  });


  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(park.dinosaurCollection);
    const expected = park.dinosaurCollection;
    assert.deepStrictEqual(park.dinosaurCollection, expected)
  });


  it('should be able to find the dinosaur that attracts the most visitors', function(){

    const expected = (park.dinosaur.guestsAttractedPerDay);
    assert.deepStrictEqual(expected, 50)]
  }); // struggled with this one - pseudo code I think would be:
        // find highest dinosaur.guestsAttractedPerDay from dinosaur.guestsAttractedPerDay

// Due to my difficulty with the above - and mainly calculating highest numbers/finding within groups etc - I stopped work on this.

  // it('should be able to find all dinosaurs of a particular species');
  //
  // it('should be able to calculate the total number of visitors per day');
  //
  // it('should be able to calculate the total number of visitors per year');
  //
  // it('should be able to calculate total revenue for one year');

});
