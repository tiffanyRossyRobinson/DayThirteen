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
