import { expect } from 'chai';
import marvel from './../src/index';

describe('marvel-comics-characters', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(marvel.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item){
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Captain America`', function() {
        expect(marvel.all).to.include('Captain America');
    });
  });

  describe('random', function(){
    it('should return a random character from marvel.all', function() {
      var random = marvel.random();
      expect(marvel.all).to.include(random);
    });

    it('should return an array of items if passed a number', function() {
      var randoms = marvel.random(3);
      expect(randoms).to.have.length(3);
      randoms.forEach(function(item) {
        expect(marvel.all).to.include(item);
      });
    });
  });
});
