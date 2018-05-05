//Question: Write a function called convertToValidNum that takes "input" as its parameter. The input is a number that can be a string, integer, or array. Return the input in a valid phone format. If the input is greater than 10, use the last 10 numbers. Keep in mind the (), space after ), and the dash.

//Example Inputs:
//1234567890
//'1234567890'
//'123,456,7890'
//[1234567890]
//00001234567890
//[00001,2345,67890]

//Output:
//(123) 456-7890

function convertToValidNum (input) {
  //if the input is an integer, convert to string
  let number = input.toString();

  //if commas exist in the input, then split it into an array by commas, and then join them back
  let combineNum = number.split(',').join('');

  //if the input is greater than 10 numbers
  let array = [];
  if(combineNum.length > 10) {
    for(let i=combineNum.length-10; i<combineNum.length; i++) {
      array.push(combineNum[i]);
    }
    combineNum = array.join('');
  }

  let startParent = "(";
  let endParent = ") ";
  let dash = "-";

  for(let i=0; i<combineNum.length; i++) {
    if(i < 2){
      startParent += combineNum[i];
    } else if(i === 2) {
      startParent += combineNum[i];
      startParent += endParent;
    } else if (i >= 3 && i < 5) {
      startParent += combineNum[i];
    } else if (i === 5) {
      startParent += combineNum[i];
      startParent += dash;
    } else {
      startParent += combineNum[i];
    }
  }
  return startParent;
}

describe('convertToValidNum', function() {
  it('should take the input and convert the numbers into a valid phone format', function() {
    expect(convertToValidNum(1234567890)).toEqual('(123) 456-7890')
  });

  it('should take the input and convert the numbers into a valid phone format', function() {
    expect(convertToValidNum('1234567890')).toEqual('(123) 456-7890')
  });

  it('should take the input and convert the numbers into a valid phone format', function() {
    expect(convertToValidNum('123,456,7890')).toEqual('(123) 456-7890')
  });

  it('should take the input and convert the numbers into a valid phone format', function() {
    expect(convertToValidNum(00001234567890)).toEqual('(123) 456-7890')
  });

  it('should take the input and convert the numbers into a valid phone format', function() {
    expect(convertToValidNum([00001,2345,67890])).toEqual('(123) 456-7890')
  });
});
