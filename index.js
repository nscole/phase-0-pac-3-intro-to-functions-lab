function shout(string)
{
  if (string)
    return string.toUpperCase('Hello!');
}

function whisper(string)
{
    if (string)
      return string.toLowerCase('Hello!');
  }

  function logShout (string) {
    console.log(string.toUpperCase('Hello!'));
  }

  function logWhisper (string) {
    console.log(string.toLowerCase('Hello!'));
  }


function sayHiToGrandma(string) {
    if (string.toLowerCase() === string)
     return "I can\'t hear you!"
        else if (string.toUpperCase() === string)
      return "YES INDEED!"
       else (string === "I love you, Grandma.")
       return "I love you, too."
  }