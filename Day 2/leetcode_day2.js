/*Counter 1*/
var createCounter = function(n) {
    
    return () => n++;
};

/*to be or not to be*/
var expect = function(val) {
    return {
    toBe: (val2) => {
        if(val !== val2){
            throw new Error("Not Equal")
        }
        else return true;
    },
    notToBe: (val2) => {
        if(val === val2){
            throw new Error("Equal");
        }
        else return true;
    }
}
};

/*Counter 2*/
class Counter {
    constructor(init) {
      this.init = init;
      this.presentCount = init;
    }
  
    increment() {
      this.presentCount += 1;
      return this.presentCount;
    }
  
    decrement() {
      this.presentCount -= 1;
      return this.presentCount;
    }
  
    reset() {
      this.presentCount = this.init;
      return this.presentCount;
    }
  }
  
  var createCounter = function(init) {
    return new Counter(init);
  };