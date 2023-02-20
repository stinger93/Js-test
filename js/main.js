let thingToPrint = ''

function drawText(){
    thingToPrint += "#";
    document.writeln(thingToPrint)
}
  let intervalID =  setInterval(drawText, 200)
    clearInterval(intervalID)