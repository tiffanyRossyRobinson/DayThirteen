console.log("Welcome to the DOM");

//----------This is for the addition----------
  function addNumbers(x, y){
    return Number(x) + Number(y);
  }

  $('.addNumbers').click(function(event) {
      event.preventDefault();
      var number1 = $('input[id="num_one"]').val();
      console.log("this is the first number" + number1);
      var number2 = $('input[id="num_two"]').val();
      console.log("this is the second number" + number2);
      var sum = addNumbers(number1, number2);
      $('#answer').text(sum);
  });

  //----------This is for the subtration----------
  function subNumbers(x, y){
    return Number(x) - Number(y);
  }

  $('.subNumbers').click(function(event) {
      event.preventDefault();
      var number1 = $('input[id="num_one"]').val();
      console.log("this is the first number" + number1);
      var number2 = $('input[id="num_two"]').val();
      console.log("this is the second number" + number2);
      var sub = subNumbers(number1, number2);
      $('#answer').text(sub);
  });

  //----------This is for the multiplication----------
  function multNumbers(x, y){
    return Number(x) * Number(y);
  }

  $('.multNumbers').click(function(event) {
      event.preventDefault();
      var number1 = $('input[id="num_one"]').val();
      console.log("this is the first number" + number1);
      var number2 = $('input[id="num_two"]').val();
      console.log("this is the second number" + number2);
      var mult = multNumbers(number1, number2);
      $('#answer').text(mult);
  });

  //----------This is for the division----------
  function divNumbers(x, y){
    return Number(x) / Number(y);
  }

  $('.divNumbers').click(function(event) {
      event.preventDefault();
      var number1 = $('input[id="num_one"]').val();
      console.log("this is the first number" + number1);
      var number2 = $('input[id="num_two"]').val();
      console.log("this is the second number" + number2);
      var div = divNumbers(number1, number2);
      $('#answer').text(div);
  });



//------------------This is for the calculator---------------------------------
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
var number= 0;
var display;
var op;
var number1;
$('.clear').click(function(event) {
    $('.return').text(" ");
    number1= undefined;
    display = undefined;
    number = 0;
});

function numSet(num) {
  if(display === undefined){
      var n = number.toString();
      var nums= num.toString();
      n = n + nums;
      number = Number(n);
      // console.log(number);
    $('.return').text(number);
  }
  else{
    var n = number.toString();
    var nums= num.toString();
    n = n + nums;
    number = Number(n);
    var dis= display + n;
    // console.log(number);
  $('.return').text(dis);
  }
}

//----------

$('.key').click(function(event) {

  var pass = this.children[0].innerHTML;
  console.log(pass);
  console.log(number);
  numSet(pass);

});


$('.operator').click(function(event){
  op = this.children[0].innerHTML;
  console.log(op);
    number1 = number;
    var n= number1.toString();
    display = number + op;
    number = 0;
    $('.return').text(display);
});

$('.equal').click(function(event){
  if(op === '+'){
    answer= number1 + number;
    console.log(answer);
    $('.return').text(answer);
    number= 0;
    number1 = undefined;
    answer = 0;
    display = undefined;
  }
  else if(op === '-'){
    answer= number1 - number;
    console.log(answer);
    $('.return').text(answer);
    number= 0;
    number1 = undefined;
    answer = 0;
    display = undefined;
  }
  else if(op === 'x'){
    answer= number1 * number;
    console.log(answer);
    $('.return').text(answer);
    number= 0;
    number1 = undefined;
    answer = 0;
    display = undefined;
  }
  else if(op === '/'){
    answer= number1 / number;
    console.log(answer);
    $('.return').text(answer);
    number= 0;
    number1 = undefined;
    answer = 0;
    display = undefined;
  }
});
