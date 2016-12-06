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

function arrayToList(input) {
  var result = {value : input[input.length-1], rest : null};
  for(var c = input.length-2; c >=  0; c--) {
    result = {value : input[c], rest : result};
  }
  return result;
}

function listToArray(input) {
  var result = [];
  for(var c = input; c; c = c.rest) {
    result.push(c.value);
  }
  return result;
}

function prepend(element, list) {
  return {value: element, rest : list}; 
}

function nth(list, number) {
  var c = 0;
  for (var node = list; node; node = node.rest) {
  	if(c === number)
      return node.value;
    c++;
  }
}

function nth_rec(list, number) {
  if(!list) return undefined;
  if(number == 0) 
    return list.value;
  else
  	return nth_rec(list.rest, number-1);
}
