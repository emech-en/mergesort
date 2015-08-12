var should = require('chai').should();
var expect = require('chai').expect;
var mergeSort = require('./index');

describe('mergeSort(arr, cmp)', function() {
    it('should return the original object if "arr" is not an Array', function() {
        var y = mergeSort(1);
        y.should.be.equal(1, 'failed when "arr" is a number');

        y = mergeSort(undefined);
        expect(y).to.be.equal(undefined, 'failed when "arr" is a undefined');

        y = mergeSort(null);
        expect(y).to.be.equal(null, 'failed when "arr" is a null');

        y = mergeSort({});
        y.should.be.deep.equal({}, 'failed when "arr" is an object');
    });

    it('shoud sort the array asceding if "cmp" function is not passed', function() {
        var result = mergeSort([3, 1, 3, 7, 4]);
        result.should.be.deep.equal([1, 3, 3, 4, 7]);
    });

    it('shoud move none numeric values to the end of result array if "cmp" function is not passed', function() {
        var result = mergeSort([3, 1, {}, null, 7, 4]);
        result.slice(0, 4).should.be.deep.equal([1, 3, 4, 7]);
    });

    it('shoud use "cmp" function as comparator if it is passed', function() {
        var result = mergeSort([1, 4, 5], function(a, b) {
            return a > b;
        });
        result.should.be.deep.equal([5, 4, 1]);
    });
});