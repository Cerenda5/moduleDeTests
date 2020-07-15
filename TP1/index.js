var calculator = require('./calculator');
 
var a=10, b=5;
 
console.log("Addition : "+calculator.add(a,b));
console.log("Subtraction : "+calculator.subtract(a,b));
console.log("Multiplication : "+calculator.multiply(a,b));
console.log("Division : "+calculator.divison(a,b));

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});