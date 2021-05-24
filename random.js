setTimeout(function getNewRandomColor()
{
    var myArray = ['#e3e3c8', '#c8e3c9', '#debfbf'];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    document.body.style.backgroundColor = rand;
},3000)
