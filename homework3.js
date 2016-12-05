function min(p1, p2)
{
 return p1 <= p2 ? p1 : p2;
}

function isEven(num){
  if(num<2) return num==0 ? true : false;
  return(isEven(num - 2));
}

function countBs(s)
{
  var bs = 0;
  for( var c = 0; c < s.length; c++)
    if(s.charAt(c) == "B") bs++;
  return bs;
}

function countChar(s, char)
{
  var n = 0;
  for(var c = 0; c < s.length; c++)
    if(s.charAt(c) == char) n++;
  return n;
}

function countBs(s)
{
  return countChar(s, "B");
}


function range(start, end, step) {
  var result = [];
  if(step == 0) return result;
  if(arguments.length < 3)
    step = 1;
  if(step > 0) {
    if(start > end) {
     var temp = start;
      start = end;
	  end = temp;
    }
  	for(var c = start; c <= end; c+=step)
    	result.push(c);
  	return result;
  }
  if(start < end) {
     var temp = start;
      start = end;
	  end = temp;
  }
  for(var c = start; c >= end; c+=step)
    result.push(c);
  return result;
}

function sum(array) {
  var result = 0;
  for(var c = 0; c < array.length; c++)
    result += array[c];
  return result;
}

function reverseArray(input) {
  var result = [];
  var length = input.length;
  for(var c = 1; c <= length; c++)   
    result.push(input[length-c]);
  return result;
}

function reverseArrayInPlace(input) {
  var temp;
  var length = input.length;
  for(var c = 0; c < Math.floor(length/2); c++) {
    temp =  input[c];
    input[c] = input[length-c-1];
    input[length-c-1] = temp;
  }
  return input;
}