describe("fizzBuzz", function() {
  var fizzBuzz;

  describe('knows when a number is', function(){
    it('divisible by 3', function(){
      fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('not divisible by 3', function(){
      fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByThree(5)).toBe(false);
    });

    it('divisible by 5', function(){
      fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('not divisible by 5', function(){
      fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByFive(3)).toBe(false);
    });

    it('is divisible by 15', function(){
      fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByFifteen(15)).toBe(true);
    });

    it('not divisible by 15', function(){
      fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByFifteen(16)).toBe(false);
    });
  });
});
