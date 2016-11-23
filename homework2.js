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
        if(c % 3 == 0)
            output += "Fizz";
        if(c % 5 == 0)
            output += "Buzz";
        console.log(output || c);
    }
}

function loop3()
{
    var size = 8;
    var board = "";
    
    for (var row = 0; row < size; row++) {
      for (var col = 0; col < size; col++) {
        if ((row + col) % 2 == 0)
          board += " ";
        else
          board += "#";
      }
      board += "\n";
    }    
}