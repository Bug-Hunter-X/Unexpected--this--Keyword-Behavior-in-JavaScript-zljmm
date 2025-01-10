function myFunc() {
  console.log(this);
}

// Solution 1: Using bind()
const boundMyFunc = myFunc.bind({ value: 'Bound Object' });
boundMyFunc(); // this will be { value: 'Bound Object' }

// Solution 2: Using Arrow Functions
const arrowMyFunc = () => {
  console.log(this); // this inherits from surrounding scope
};
arrowMyFunc(); // this will be the global object (window) or undefined depending on the context