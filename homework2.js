function loop1()
{
    for (var line = "#"; line.length < 8; line += "#")
        console.log(line);
}

function loop2()
{
    for(var c = 1; c <101; c++)
    {
        var output = "";
        if(c % 3 == 0) output += "Fizz";
        if(c % 5 == 0) output += "Buzz";
        console.log(output || c);
    }
}

function loop3()
{
    var size = 8;
    var board = "";
    
    for (var row = 0; row < size; row++) {
      for (var col = 0; col < size; col++) 
        board +=  (row + col) % 2 == 0 ? " " : "#";
      board += "\n";
    }    
}

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