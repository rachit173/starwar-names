var expect = require('chai').expect
var starwars = require('./index');

describe('starwars-names', function() {
    describe('all', function() {
        it('should be working with an array of strings', function() {
            expect(starwars.all).to.satisfy(isArrayofStrings);

            function isArrayofStrings(array) {
                return array.every(function(item) {
                    return typeof item === "string";
                });
            }
        });
        it('should contain Luke skywalker', function() {
            expect(starwars.all).to.include("Luke Skywalker");
        });
    });
    describe('random', function() {
        it('should return a random item from the starWars.all', function() {
            var randomItem = starwars.random();
            expect(starwars.all).to.include(randomItem);
        });
    });
});