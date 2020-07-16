const expect = require('chai').expect;
// import calculator file

const calculator = require('../calculator');
describe('calculator.js tests', () => {
    describe('calculator.add() Test', () => {
        it('should equal 2', () => {
            const result = calculator.add(1, 1);
            expect(result).to.equal(2);
        });
        it('should equal 4', () => {
            const result = calculator.add(2, 2);
            expect(result).to.equal(4);
        });
    });

    describe('calculator.subtract() Test', () => {
      it('should equal 0', () => {
          const result = calculator.subtract(1, 1);
          expect(result).to.equal(0);
      });
      it('should equal 0', () => {
          const result = calculator.subtract(2, 2);
          expect(result).to.equal(0);
      });
  });
    
    describe('calculator.multiply() Test', () => {
        it('should equal 3', () => {
            const result = calculator.multiply(3, 1);
            expect(result).to.equal(3);
        });
        it('should equal 10', () => {
            const result = calculator.multiply(5, 2);
            expect(result).to.equal(10);
        });
    });

    describe('calculator.divide() Test', () => {
      it('should equal 10', () => {
          const result = calculator.divide(20, 2);
          expect(result).to.equal(10);
      });
      it('should equal 2', () => {
          const result = calculator.divide(4, 2);
          expect(result).to.equal(2);
      });
  });
});
