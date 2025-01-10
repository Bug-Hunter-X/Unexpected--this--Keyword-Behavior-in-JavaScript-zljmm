function myFunc() {
  console.log(this);
}

myFunc(); // this will be undefined in strict mode and window in non-strict mode