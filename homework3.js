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